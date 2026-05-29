import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Download,
  Filter,
  PlayCircle,
  Trophy,
  WifiOff,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { courseCategories, courseDurations, courseLevels, courses } from '../data/siteData'
import { useLocalStorageState } from '../hooks/useLocalStorageState'
import { fadeUp, staggerContainer } from '../utils/motion'

export function CoursesSection() {
  const [category, setCategory] = useState('Todos')
  const [level, setLevel] = useState('Todos')
  const [duration, setDuration] = useState('Todos')
  const [selectedCourseTitle, setSelectedCourseTitle] = useLocalStorageState(
    'skillbridge:selected-course',
    courses[0].title,
  )
  const [activeLessonIndex, setActiveLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useLocalStorageState<string[]>(
    'skillbridge:completed-lessons',
    [],
  )
  const [downloadedCourses, setDownloadedCourses] = useLocalStorageState<string[]>(
    'skillbridge:downloaded-courses',
    [],
  )

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = category === 'Todos' || course.category === category
      const matchesLevel = level === 'Todos' || course.level === level
      const matchesDuration =
        duration === 'Todos' ||
        (duration === 'Ate 3h' && course.duration <= 3) ||
        (duration === 'Ate 5h' && course.duration <= 5) ||
        (duration === 'Mais de 5h' && course.duration > 5)

      return matchesCategory && matchesLevel && matchesDuration
    })
  }, [category, duration, level])

  const selectedCourse =
    courses.find((course) => course.title === selectedCourseTitle) || filteredCourses[0] || courses[0]
  const activeLesson = selectedCourse.modules[activeLessonIndex] || selectedCourse.modules[0]
  const selectedCompletedCount = selectedCourse.modules.filter((lesson) =>
    completedLessons.includes(`${selectedCourse.title}-${lesson.title}`),
  ).length
  const selectedProgress = Math.round((selectedCompletedCount / selectedCourse.modules.length) * 100)

  const selectCourse = (title: string) => {
    setSelectedCourseTitle(title)
    setActiveLessonIndex(0)
  }

  const completeActiveLesson = () => {
    const lessonId = `${selectedCourse.title}-${activeLesson.title}`
    setCompletedLessons((current) => (current.includes(lessonId) ? current : [...current, lessonId]))
  }

  const downloadCourse = (title: string, isOfflineAvailable: boolean) => {
    if (!isOfflineAvailable) {
      return
    }

    setDownloadedCourses((current) => (current.includes(title) ? current : [...current, title]))
  }

  return (
    <section id="cursos" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Cursos de renda rapida"
          title="Trilhas curtas para habilidades que pagam."
          description="Cada curso e desenhado para gerar portfolio, confianca e acesso a oportunidades reais em semanas, nao anos."
          center
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass mt-12 rounded-[2rem] p-4 md:p-6"
        >
          <div className="mb-5 flex items-center gap-3 text-slate-950 dark:text-white">
            <Filter size={20} className="text-cyan-300" />
            <h3 className="font-black">Encontre a melhor trilha para sua realidade</h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <FilterGroup label="Categoria" options={courseCategories} value={category} onChange={setCategory} />
            <FilterGroup label="Nivel" options={courseLevels} value={level} onChange={setLevel} />
            <FilterGroup label="Tempo" options={courseDurations} value={duration} onChange={setDuration} />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredCourses.map((course) => {
            const Icon = course.icon
            return (
              <motion.article
                key={course.title}
                variants={fadeUp}
                whileHover={{ y: -12, rotateX: 4, rotateY: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="perspective-card group glass rounded-[2rem] p-6"
              >
                <div
                  className={`mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-[0_0_34px_rgba(59,130,246,0.34)]`}
                >
                  <Icon size={26} />
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-cyan-300">
                    {course.category}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-emerald-300">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{course.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">
                  {course.description}
                </p>
                <div className="mt-5 grid gap-3 rounded-3xl bg-white/8 p-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={16} className="text-cyan-300" /> {course.duration}h
                    </span>
                    <span>{course.lessons} aulas</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Renda estimada</span>
                    <span className="text-emerald-300">{course.income}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm font-bold text-slate-500 dark:text-slate-300">
                    <span>Avanco medio</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${course.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                    />
                  </div>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => selectCourse(course.title)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-black text-slate-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-300 group-hover:text-slate-950 dark:text-white"
                  >
                    {selectedCourse.title === course.title ? 'Aberto' : 'Iniciar'} <ArrowUpRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadCourse(course.title, course.offline)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-black text-white transition hover:bg-emerald-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:opacity-50 dark:bg-white dark:text-slate-950"
                    disabled={!course.offline}
                    title={course.offline ? 'Disponivel para baixar' : 'Disponivel em breve'}
                  >
                    {downloadedCourses.includes(course.title) ? (
                      <CheckCircle2 size={18} />
                    ) : course.offline ? (
                      <Download size={18} />
                    ) : (
                      <WifiOff size={18} />
                    )}
                    {downloadedCourses.includes(course.title)
                      ? 'Salvo'
                      : course.offline
                        ? 'Baixar'
                        : 'Em breve'}
                  </button>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass mt-8 grid gap-6 rounded-[2rem] p-5 md:p-7 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-yellow-300">
                  Sala de aula ficticia
                </p>
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">
                  {selectedCourse.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Projeto final: {selectedCourse.project}
                </p>
              </div>
              {downloadedCourses.includes(selectedCourse.title) && (
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
                  <CheckCircle2 size={16} /> Offline
                </span>
              )}
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/8 p-4">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  Aulas concluidas
                </span>
                <strong className="mt-1 block text-2xl font-black text-white">
                  {selectedCompletedCount}/{selectedCourse.modules.length}
                </strong>
              </div>
              <div className="rounded-3xl bg-white/8 p-4">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  Cursos salvos
                </span>
                <strong className="mt-1 block text-2xl font-black text-white">
                  {downloadedCourses.length}
                </strong>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                <span>Progresso simulado</span>
                <span>{selectedProgress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: `${selectedProgress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-white"
                />
              </div>
            </div>

            <div className="grid gap-3">
              {selectedCourse.modules.map((lesson, index) => {
                const lessonId = `${selectedCourse.title}-${lesson.title}`
                const isCompleted = completedLessons.includes(lessonId)
                const isActive = index === activeLessonIndex

                return (
                  <button
                    key={lesson.title}
                    type="button"
                    onClick={() => setActiveLessonIndex(index)}
                    className={`rounded-3xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 ${
                      isActive
                        ? 'border-yellow-300 bg-yellow-300 text-black'
                        : 'border-white/20 bg-white/8 text-white hover:border-yellow-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-black">
                        Aula {index + 1}: {lesson.title}
                      </span>
                      {isCompleted && <CheckCircle2 size={18} />}
                    </div>
                    <span className="mt-2 block text-sm font-bold">{lesson.duration}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-black p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300 text-black">
                  <PlayCircle size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">{activeLesson.title}</h4>
                  <p className="text-sm font-bold text-slate-300">{activeLesson.duration}</p>
                </div>
              </div>
              {activeLesson.freePreview && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-yellow-300">
                  Gratis
                </span>
              )}
            </div>

            <div className="grid min-h-52 place-items-center rounded-3xl border border-white/20 bg-white/8 p-6 text-center">
              <div>
                <PlayCircle className="mx-auto mb-4 text-yellow-300" size={54} />
                <p className="text-lg font-black text-white">Player ficticio da aula</p>
                <p className="mt-2 leading-7 text-slate-300">
                  Aqui entraria o video, audio ou material baixado para acesso offline.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-white/8 p-5">
              <div className="mb-2 flex items-center gap-2 font-black text-yellow-300">
                <Trophy size={20} />
                Tarefa pratica
              </div>
              <p className="leading-7 text-slate-300">{activeLesson.task}</p>
            </div>

            <button
              type="button"
              onClick={completeActiveLesson}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-5 py-4 font-black text-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
            >
              <CheckCircle2 size={18} />
              Marcar aula como concluida
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass mt-8 grid gap-5 rounded-[2rem] p-6 md:grid-cols-3"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 text-emerald-300" size={24} />
            <div>
              <h3 className="font-black text-slate-950 dark:text-white">Aulas baixaveis</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Conteudo essencial pode ficar salvo para estudar sem internet.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock3 className="mt-1 text-cyan-300" size={24} />
            <div>
              <h3 className="font-black text-slate-950 dark:text-white">Aulas curtas</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Trilhas pensadas para quem trabalha, cuida da casa ou tem pouco tempo.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ArrowUpRight className="mt-1 text-violet-300" size={24} />
            <div>
              <h3 className="font-black text-slate-950 dark:text-white">Foco em renda</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Cada curso aponta para tarefas e oportunidades possiveis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

type FilterGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-slate-600 dark:text-slate-300">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
              value === option
                ? 'bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.34)]'
                : 'bg-white/10 text-slate-600 hover:bg-white/20 dark:text-slate-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
