import { Canvas } from '@react-three/fiber'
import { KinectScene } from '@/components/kinect-scene'
import { Leva } from 'leva'
import { useState } from 'react'
import Icon from '@/components/ui/icon'

const versions = [
  { label: '1.20.1', file: '#', tag: 'Актуальная' },
  { label: '1.19.4', file: '#', tag: null },
  { label: '1.18.2', file: '#', tag: null },
  { label: '1.16.5', file: '#', tag: 'Классика' },
  { label: '1.12.2', file: '#', tag: null },
  { label: '1.7.10', file: 'vanyai-1.7.10.zip', tag: 'Ваня' },
]

const screenshots = [
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/96e6b956-12c3-40af-9d99-90e2d2122e94.png',
    alt: 'Скриншот 1 — каменные блоки',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/b801d105-49d2-4ef1-b364-d46f4d0bfedb.png',
    alt: 'Скриншот 2 — деревянная башня',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/a0a62a5a-fd09-442f-93b6-9dd2fc369057.png',
    alt: 'Скриншот 3 — разноцветные торты',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/995698db-261b-4dc0-b666-43ef9e5e21e6.png',
    alt: 'Скриншот 4 — цветная постройка',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/eb38a02b-fd7b-4c38-9c25-d018a36574d2.png',
    alt: 'Скриншот 5 — мебель и мобы',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/842ccded-0aa6-43d3-8510-59227475d593.png',
    alt: 'Скриншот 6 — двери и арки',
  },
  {
    src: 'https://cdn.poehali.dev/projects/5c35c647-ce4d-4286-a2aa-8bed6b7e23fe/bucket/838af705-6a44-42c9-8152-278c08eb01c3.png',
    alt: 'Скриншот 7 — скины персонажей',
  },
]

export default function Index() {
  const [activeSection, setActiveSection] = useState<'about' | 'gallery' | 'download' | null>(null)

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 500], fov: 50, near: 1, far: 10000 }}
          gl={{ alpha: false }}
        >
          <KinectScene />
        </Canvas>
      </div>

      <Leva collapsed={true} hidden={true} />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Main UI */}
      <div className="absolute inset-0 flex flex-col overflow-y-auto">

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 backdrop-blur-sm bg-black/20 border-b border-white/10 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">М</div>
            <span className="text-white font-bold text-xl tracking-wide">СБОРКА ВАНИЧКИНА 2026</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {(['about', 'gallery', 'download'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s === activeSection ? null : s)}
                className={`text-sm font-medium transition-colors ${activeSection === s ? 'text-green-400' : 'text-white/70 hover:text-white'}`}
              >
                {{ about: 'О сборке', gallery: 'Скриншоты', download: 'Скачать' }[s]}
              </button>
            ))}
          </nav>
        </header>

        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 min-h-[60vh]">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            <Icon name="Zap" size={12} />
            Minecraft Modpack
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            Сборка<br />
            <span className="text-green-400">Ваничкина</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8">
            Эта сборка вас поразит!!! С её помощью можно будет добавить моды блогера Вани — но только первые, потом будут ещё. В Майнкрафт модов где-то 7–8 — это будет очень круто. Удачной игры!
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setActiveSection('download')}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-green-500/30 text-base"
            >
              <Icon name="Download" size={18} />
              Скачать сборку
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition-all text-base"
            >
              Подробнее
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-px bg-white/10 mx-6 mb-8 rounded-xl overflow-hidden">
          {[
            { icon: 'Package', value: '50+', label: 'Модов' },
            { icon: 'Layers', value: '5', label: 'Версий MC' },
            { icon: 'Users', value: '1K+', label: 'Игроков' },
          ].map(({ icon, value, label }) => (
            <div key={label} className="bg-black/40 backdrop-blur-sm py-5 flex flex-col items-center gap-1">
              <Icon name={icon} size={20} className="text-green-400" />
              <span className="text-white font-bold text-2xl">{value}</span>
              <span className="text-white/50 text-xs">{label}</span>
            </div>
          ))}
        </section>

        {/* About */}
        <section id="about" className={`mx-6 mb-8 transition-all ${activeSection === 'about' || activeSection === null ? 'block' : 'hidden'}`}>
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
              <Icon name="BookOpen" size={22} className="text-green-400" />
              О сборке
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'Sun', title: 'Реалистичные шейдеры', desc: 'Красивое освещение, тени и отражения воды благодаря Optifine и BSL Shaders.' },
                { icon: 'Map', title: 'Новые биомы и миры', desc: 'Terraforged и BiomesOPlenty добавляют десятки уникальных ландшафтов.' },
                { icon: 'Cpu', title: 'Оптимизация', desc: 'Lithium, Starlight и Sodium обеспечивают плавную игру даже на слабых ПК.' },
                { icon: 'Shield', title: 'Новые механики', desc: 'Ender IO, Tinkers Construct и другие моды расширяют геймплей до бесконечности.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={icon} size={18} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className={`mx-6 mb-8 ${activeSection === 'gallery' || activeSection === null ? 'block' : 'hidden'}`}>
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
              <Icon name="Image" size={22} className="text-green-400" />
              Скриншоты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {screenshots.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-52 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform cursor-pointer"
                />
              ))}

            </div>
          </div>
        </section>

        {/* Download */}
        <section id="download" className={`mx-6 mb-12 ${activeSection === 'download' || activeSection === null ? 'block' : 'hidden'}`}>
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-2xl mb-2 flex items-center gap-2">
              <Icon name="Download" size={22} className="text-green-400" />
              Скачать сборку
            </h2>
            <p className="text-white/50 text-sm mb-5">Выберите версию Minecraft и скачайте готовый архив</p>
            <div className="flex flex-col gap-3">
              {versions.map(({ label, file, tag }) => (
                <a
                  key={label}
                  href={file}
                  className="flex items-center justify-between bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/40 rounded-xl px-5 py-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Icon name="Box" size={16} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Minecraft {label}</div>
                      {tag && (
                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">{tag}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-green-400 transition-colors">
                    <span className="text-sm hidden md:block">Скачать</span>
                    <Icon name="ArrowDownToLine" size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}