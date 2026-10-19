import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Trophy,
  Brain,
  Timer as TimerIcon,
  Flame,
  CheckCircle,
  Flag,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BarChart2,
  Calendar,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ExamType, TopicId, TrainerTask, TrainerStorageSchema } from '../types/trainer';
import { ALL_TRAINER_TASKS } from '../data/trainerTasks';
import { TaskView } from '../components/trainer/TaskView';
import { ExamSelector } from '../components/trainer/ExamSelector';
import { TopicPicker } from '../components/trainer/TopicPicker';
import { StatsDashboard } from '../components/trainer/StatsDashboard';
import { ResultPage } from '../components/trainer/ResultPage';
import { ElementsReactionsQuiz } from '../components/trainer/ElementsReactionsQuiz';
import { SEO } from '../components/ui/SEO';
import {
  loadTrainerStats,
  saveTrainerStats,
  recordTaskResult,
  INITIAL_TRAINER_SCHEMA,
} from '../utils/trainer/stats';
import { getTasksDueForReview } from '../utils/trainer/spacedRepetition';
import { generateRandomCalculationTask } from '../utils/trainer/taskGenerator';

type TrainerMode = 'topic_training' | 'elements_quiz' | 'mock_exam' | 'daily_warmup' | 'mistakes' | 'stats';

interface OutletContextType {
  openAiChatWithContext?: (context?: string) => void;
}

export const TrainerPage: React.FC = () => {
  const { language } = useLanguage();
  const lang = (['kk', 'ru', 'en'].includes(language) ? language : 'kk') as 'kk' | 'ru' | 'en';
  const outletContext = useOutletContext<OutletContextType>();

  const [mode, setMode] = useState<TrainerMode>('topic_training');
  const [selectedExam] = useState<ExamType>('ent');
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>('all');
  const [stats, setStats] = useState<TrainerStorageSchema>(() => loadTrainerStats());

  // Test session state
  const [sessionTasks, setSessionTasks] = useState<TrainerTask[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [submittedTasks, setSubmittedTasks] = useState<Record<string, boolean>>({});
  const [flaggedIndices, setFlaggedIndices] = useState<number[]>([]);
  const [isTestFinished, setIsTestFinished] = useState(false);

  // Timer
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Generate question pool based on topic filter
  const filteredTasks = useMemo(() => {
    return ALL_TRAINER_TASKS.filter((task) => {
      return selectedTopic === 'all' || task.topic === selectedTopic;
    });
  }, [selectedTopic]);

  // Start new test or training session
  const startSession = (tasksToRun: TrainerTask[]) => {
    setSessionTasks(tasksToRun);
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmittedTasks({});
    setFlaggedIndices([]);
    setIsTestFinished(false);
    setElapsedSeconds(0);
  };

  // Initialize session on mode / filter change
  useEffect(() => {
    if (mode === 'mock_exam') {
      const count = 35;
      const shuffled = [...filteredTasks].sort(() => 0.5 - Math.random()).slice(0, count);
      while (shuffled.length < count) {
        shuffled.push(generateRandomCalculationTask(shuffled.length + Date.now(), 'ent'));
      }
      startSession(shuffled);
    } else if (mode === 'daily_warmup') {
      const dueTasks = getTasksDueForReview(ALL_TRAINER_TASKS, stats.tasksState, Date.now(), 5);
      startSession(dueTasks.length > 0 ? dueTasks : filteredTasks.slice(0, 5));
    } else if (mode === 'mistakes') {
      const errorTasks = ALL_TRAINER_TASKS.filter(
        (t) => stats.tasksState[t.id] && stats.tasksState[t.id].errorCount > 0
      );
      startSession(errorTasks.length > 0 ? errorTasks : filteredTasks.slice(0, 5));
    } else if (mode === 'topic_training') {
      const shuffled = [...filteredTasks].sort(() => 0.5 - Math.random()).slice(0, 15);
      startSession(shuffled);
    }
  }, [mode, selectedTopic]);

  // Timer effect during active test
  useEffect(() => {
    if (mode === 'mock_exam' && !isTestFinished) {
      timerRef.current = window.setInterval(() => {
        setElapsedSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, isTestFinished]);

  const currentTask = sessionTasks[currentIndex];

  const handleAnswerChange = (ans: any) => {
    if (!currentTask) return;
    setUserAnswers((prev) => ({ ...prev, [currentTask.id]: ans }));
  };

  const handleSubmitCurrent = () => {
    if (!currentTask) return;
    setSubmittedTasks((prev) => ({ ...prev, [currentTask.id]: true }));

    // Record to stats
    const updated = recordTaskResult(
      currentTask.id,
      currentTask.topic,
      userAnswers[currentTask.id] !== undefined
    );
    setStats(updated);
  };

  const handleNext = () => {
    if (currentIndex < sessionTasks.length - 1) {
      setCurrentIndex((idx) => idx + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  const toggleFlagCurrent = () => {
    setFlaggedIndices((prev) =>
      prev.includes(currentIndex) ? prev.filter((i) => i !== currentIndex) : [...prev, currentIndex]
    );
  };

  const handleResetStats = () => {
    localStorage.removeItem('chemlab:trainer');
    setStats(INITIAL_TRAINER_SCHEMA);
  };

  const handleImportStats = (newStats: TrainerStorageSchema) => {
    saveTrainerStats(newStats);
    setStats(newStats);
  };

  const handleTrainWeakTopic = (topic: TopicId) => {
    setSelectedTopic(topic);
    setMode('topic_training');
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const t = {
    seoTitle:
      lang === 'kk'
        ? 'Химиядан ҰБТ дайындық тренажёры | ChemLab'
        : lang === 'ru'
        ? 'Тренажёр ЕНТ по химии | ChemLab'
        : 'UNT Chemistry Exam Trainer | ChemLab',
    seoDesc:
      lang === 'kk'
        ? 'ҰБТ-ға арналған 400+ химия тапсырмалары, қадамдық шешімдер, экспресс-викториналар және статистика.'
        : lang === 'ru'
        ? 'Интерактивный тренажёр для подготовки к ЕНТ по химии. Более 400 задач, экспресс-викторины с моментальной проверкой и аналитика.'
        : 'Interactive chemistry trainer for UNT exam preparation with 400+ tasks, express quizzes, and analytics.',
    heroBadge:
      lang === 'kk' ? '🎯 ҰБТ-ға дайындық орталығы' : lang === 'ru' ? '🎯 Центр подготовки к ЕНТ' : '🎯 UNT Exam Preparation Center',
    heroTitle:
      lang === 'kk' ? 'Химиядан сенімді ' : lang === 'ru' ? 'Уверенная сдача ' : 'Confidently master ',
    heroTitleGradient:
      lang === 'kk' ? 'ҰБТ-да жоғары балл жинаңыз' : lang === 'ru' ? 'ЕНТ по химии на грант' : 'UNT Chemistry Exam',
    modeTraining: lang === 'kk' ? 'Тақырып бойынша' : lang === 'ru' ? 'По темам' : 'By Topic',
    modeQuiz: lang === 'kk' ? '⚡ Элементтер & Реакциялар Блиц' : lang === 'ru' ? '⚡ Элементы и Реакции Блиц' : '⚡ Elements & Reactions Blitz',
    modeMock: lang === 'kk' ? 'ҰБТ Пробный тесті' : lang === 'ru' ? 'Пробный тест ЕНТ' : 'Full UNT Mock Exam',
    modeWarmup: lang === 'kk' ? 'Күндік 5 тапсырма' : lang === 'ru' ? 'Разминка дня' : 'Daily 5',
    modeMistakes: lang === 'kk' ? 'Қателермен жұмыс' : lang === 'ru' ? 'Ошибки' : 'Mistakes',
    modeStats: lang === 'kk' ? 'Статистика' : lang === 'ru' ? 'Статистика' : 'Stats',
    finishTest: lang === 'kk' ? 'Тестті аяқтау' : lang === 'ru' ? 'Завершить тест' : 'Finish Test',
    flag: lang === 'kk' ? 'Белгілеу' : lang === 'ru' ? 'Отметить' : 'Flag',
  };

  return (
    <>
      <SEO title={t.seoTitle} description={t.seoDesc} />

      <div className="min-h-screen pb-16 pt-6 px-4 max-w-7xl mx-auto space-y-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-6 md:p-8 text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {t.heroBadge}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {t.heroTitle}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {t.heroTitleGradient}
                </span>
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {lang === 'kk'
                  ? 'ҰБТ-ға арналған 400+ авторлық тапсырмалар, элементтер мен реакциялар экспресс-викторинасы және дербес статистика.'
                  : lang === 'ru'
                  ? 'Более 400 тренировочных задач к ЕНТ, экспресс-викторина по элементам и реакциям с моментальной проверкой и аналитикой.'
                  : 'Over 400 chemistry practice tasks, instant element & reaction quiz with immediate feedback, and weak topic analytics.'}
              </p>
            </div>

            {/* Quick KPI Badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-[10px] text-slate-300 block uppercase font-bold">Streak</span>
                <span className="font-mono text-xl font-extrabold text-amber-400 flex items-center justify-center gap-1">
                  <Flame className="w-5 h-5 fill-amber-400" />
                  {stats.streak}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setMode('topic_training')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'topic_training'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeTraining}
          </button>
          <button
            type="button"
            onClick={() => setMode('elements_quiz')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'elements_quiz'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeQuiz}
          </button>
          <button
            type="button"
            onClick={() => setMode('mock_exam')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'mock_exam'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeMock}
          </button>
          <button
            type="button"
            onClick={() => setMode('daily_warmup')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'daily_warmup'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeWarmup}
          </button>
          <button
            type="button"
            onClick={() => setMode('mistakes')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'mistakes'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeMistakes}
          </button>
          <button
            type="button"
            onClick={() => setMode('stats')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              mode === 'stats'
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.modeStats}
          </button>
        </div>

        {/* Mode Specific Body */}
        {mode === 'elements_quiz' ? (
          <ElementsReactionsQuiz
            lang={lang}
            onOpenAiChat={(topicContext) => {
              if (outletContext?.openAiChatWithContext) {
                outletContext.openAiChatWithContext(topicContext);
              }
            }}
          />
        ) : mode === 'stats' ? (
          <StatsDashboard
            stats={stats}
            onResetStats={handleResetStats}
            onImportStats={handleImportStats}
            onTrainWeakTopic={handleTrainWeakTopic}
            lang={lang}
          />
        ) : isTestFinished ? (
          <ResultPage
            exam={selectedExam}
            tasks={sessionTasks}
            userAnswers={userAnswers}
            elapsedSeconds={elapsedSeconds}
            onRetryMistakes={(mistakeTasks) => startSession(mistakeTasks)}
            onNewTest={() => startSession(filteredTasks.slice(0, 35))}
            lang={lang}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Left Filter & Nav Sidebar */}
            <div className="space-y-4 lg:col-span-1">
              <ExamSelector
                selectedExam={selectedExam}
                onSelectExam={() => {}}
                lang={lang}
              />

              {mode === 'topic_training' && (
                <TopicPicker
                  selectedTopic={selectedTopic}
                  onSelectTopic={setSelectedTopic}
                  lang={lang}
                />
              )}

              {/* Question Index Grid */}
              {sessionTasks.length > 0 && (
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>
                      {lang === 'kk' ? 'Сұрақтар навигациясы' : lang === 'ru' ? 'Навигация по вопросам' : 'Question Grid'}
                    </span>
                    <span>
                      {currentIndex + 1} / {sessionTasks.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 max-h-48 overflow-y-auto p-1">
                    {sessionTasks.map((t, idx) => {
                      const isCurrent = idx === currentIndex;
                      const isAnswered = userAnswers[t.id] !== undefined;
                      const isFlagged = flaggedIndices.includes(idx);

                      let style = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                      if (isCurrent) {
                        style = 'bg-teal-500 text-white font-extrabold ring-2 ring-teal-500/50';
                      } else if (isAnswered) {
                        style = 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold';
                      }

                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setCurrentIndex(idx)}
                          className={`relative p-2 rounded-xl text-xs transition-all flex items-center justify-center cursor-pointer ${style}`}
                        >
                          <span>{idx + 1}</span>
                          {isFlagged && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsTestFinished(true)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-teal-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    {t.finishTest}
                  </button>
                </div>
              )}
            </div>

            {/* Right Task Main View */}
            <div className="lg:col-span-3 space-y-4">
              {/* Header Bar with Timer & Flag */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-md">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleFlagCurrent}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      flaggedIndices.includes(currentIndex)
                        ? 'bg-amber-500 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{t.flag}</span>
                  </button>
                </div>

                {mode === 'mock_exam' && (
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-xl">
                    <TimerIcon className="w-4 h-4 text-teal-500" />
                    <span>{formatTimer(elapsedSeconds)}</span>
                  </div>
                )}
              </div>

              {/* Task Component View */}
              {currentTask ? (
                <TaskView
                  task={currentTask}
                  userAnswer={userAnswers[currentTask.id]}
                  isSubmitted={submittedTasks[currentTask.id]}
                  onChangeAnswer={handleAnswerChange}
                  onSubmit={handleSubmitCurrent}
                  onNext={handleNext}
                  lang={lang}
                />
              ) : (
                <div className="p-12 text-center rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-500">
                  <p className="text-sm font-semibold">
                    {lang === 'kk' ? 'Таңдалған критерий бойынша тапсырмалар табылмады.' : 'По выбранным критериям задач не найдено.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrainerPage;
