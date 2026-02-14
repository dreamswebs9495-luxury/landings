import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg rotate-3 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          <span className="text-xl font-bold tracking-tight text-white">EventLaunch</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-cyan-400 transition">Soluciones</a>
          <a href="#" className="hover:text-cyan-400 transition">Plantillas</a>
          <a href="#" className="hover:text-cyan-400 transition">Precios</a>
        </div>
        <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors">
          Empezar Proyecto
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-500/20">
            React + Python Powerhouse
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            Creamos Landings para <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Eventos Inolvidables
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Estructuras modulares, carga ultra rápida y diseño de alta conversión. 
            El pilar tecnológico para tu próximo gran evento ya está aquí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all active:scale-95">
              Crear mi Landing
            </button>
            <button className="bg-slate-900 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Feature Preview Card */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-4 italic">"El mejor aliado tecnológico para nuestra conferencia."</h3>
            <p className="text-slate-400 text-sm mb-6">— CEO de TechConnect 2026</p>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}