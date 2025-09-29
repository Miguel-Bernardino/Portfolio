import Portfolio from "./portfolio";

  // Tecnologias extraídas do GitHub
  const technologies = [
    { name: "HTML", percent: 80 },
    { name: "CSS", percent: 75 },
    { name: "JavaScript", percent: 70 },
    { name: "TypeScript", percent: 65 },
    { name: "React", percent: 60 },
    { name: "TailwindCSS", percent: 55 },
    { name: "Express", percent: 40 },
    { name: "Node.js", percent: 35 },
    { name: "C#", percent: 30 },
  ];

export default function HomeContent() {
  // Função para scroll suave até a seção
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-violet-950 to-gray-900 text-white flex flex-col">
      {/* Navbar */}

  <nav className="flex items-center justify-between py-6 sticky top-0 z-50 backdrop-blur-lg bg-gray-900/70 shadow-2xl border-b border-violet-700 px-8">
        <div className="flex items-center gap-4">
          <a href="https://github.com/Miguel-Bernardino" target="_blank" rel="noopener" title="Ver perfil no GitHub">
            <img src="https://avatars.githubusercontent.com/u/142626169?v=4" alt="Avatar GitHub" className="w-12 h-12 rounded-full border-2 border-violet-500 shadow-lg hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="hidden md:inline text-xl font-bold text-violet-300 drop-shadow">Miguel Bernardino</span>
        </div>
        <div className="flex gap-2 md:gap-8">
          {/* Ícones para mobile, botões para md+ */}
          <button className="block md:hidden p-2 rounded-full bg-violet-700 hover:bg-violet-500 text-white" onClick={() => scrollToSection("sobre")} title="Sobre">
            {/* Ícone anterior de usuário */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="block md:hidden p-2 rounded-full bg-violet-700 hover:bg-violet-500 text-white" onClick={() => scrollToSection("projetos")} title="Projetos">
            {/* Folder icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </button>
          <button className="block md:hidden p-2 rounded-full bg-violet-700 hover:bg-violet-500 text-white" onClick={() => scrollToSection("social")} title="Social">
            {/* Ícone de globo/rede/social */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
          </button>
          {/* Botões normais para md+ */}
          <button className="hidden md:block px-6 py-2 rounded-xl font-bold text-lg bg-gradient-to-r from-violet-700 to-violet-500 shadow-md hover:scale-105 hover:from-violet-600 hover:to-violet-400 transition-all duration-200 cursor-pointer" onClick={() => scrollToSection("sobre")}>Sobre</button>
          <button className="hidden md:block px-6 py-2 rounded-xl font-bold text-lg bg-gradient-to-r from-violet-700 to-violet-500 shadow-md hover:scale-105 hover:from-violet-600 hover:to-violet-400 transition-all duration-200 cursor-pointer" onClick={() => scrollToSection("projetos")}>Projetos</button>
          <button className="hidden md:block px-6 py-2 rounded-xl font-bold text-lg bg-gradient-to-r from-violet-700 to-violet-500 shadow-md hover:scale-105 hover:from-violet-600 hover:to-violet-400 transition-all duration-200 cursor-pointer" onClick={() => scrollToSection("social")}>Social</button>
        </div>
      </nav>

      {/* Conteúdo interno */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">

  <section id="sobre" className="w-full max-w-3xl bg-gradient-to-br from-gray-900 via-violet-950 to-gray-900 rounded-3xl shadow-2xl p-0 mb-12 md:pb-12 border border-violet-800 animate-fadein overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-10">
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                <div className="relative mb-4">
                    <a href="https://github.com/Miguel-Bernardino" target="_blank" rel="noopener" title="Ver perfil no GitHub">
                    <img src="https://avatars.githubusercontent.com/u/142626169?v=4" alt="Avatar GitHub" className="w-32 h-32 rounded-full border-4 border-violet-500 shadow-lg animate-fadein hover:scale-105 transition-transform duration-200" />
                    </a>
                    <span className="absolute bottom-0 right-0 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">Dev</span>
                </div>
                <h2 className="text-2xl font-extrabold text-violet-300 mb-2 text-center md:text-left drop-shadow">Miguel Bernardino</h2>
                <span className="text-gray-400 text-base font-medium mb-2 text-center md:text-left">Estudante de Engenharia de Computação</span>
                <span className="text-gray-400 text-base font-medium mb-2 text-center md:text-left">Senai Cimatec</span>
                </div>
                <div className="flex-1 flex flex-col justify-center md:w-2/3 w-full">
                <h1 className="text-4xl font-extrabold mb-4 text-violet-400 tracking-tight drop-shadow-lg text-center md:text-left">Sobre mim</h1>
                <div className="mb-6 text-lg text-gray-200 text-center md:text-left leading-relaxed">
                    <p className="mb-2">
                    Olá! Eu sou <span className="font-bold text-violet-300">Miguel Bernardino</span> (<span className="font-bold text-violet-300">Miguel Bernardino Sousa Borges da Silva</span>), estudante de Engenharia de Computação apaixonado por tecnologia, códigos e inovação.
                    </p>
                    <p className="mb-2">
                    Minha jornada na programação começou como uma curiosidade, e hoje é um compromisso constante de aprendizado, experimentação e superação de desafios.
                    </p>
                </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-violet-900 to-gray-800 rounded-xl p-6 mt-2 shadow-lg border border-violet-700 max-w-2xl mx-auto w-full">
            <h2 className="text-xl font-bold mb-4 text-violet-300 text-center">O que você vai encontrar aqui</h2>
            <ul className="list-disc list-inside text-gray-200 mb-6 text-base">
                <li>Projetos pessoais e experimentos de estudo (front-end, back-end, APIs, etc.)</li>
                <li>Contribuições e versões próprias de aplicações</li>
                <li>Ferramentas e soluções construídas com as tecnologias que mais me interessam</li>
            </ul>
            <h2 className="text-xl font-bold mb-4 text-violet-300 text-center">Tecnologias e habilidades</h2>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
                {technologies.map((tech, i) => (
                <span key={tech.name} className={`px-5 py-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 text-base font-bold shadow text-center animate-pop-in`} style={{ animationDelay: `${i * 0.07}s` }}>
                    {tech.name}
                </span>
                ))}
            </div>
            <h3 className="text-lg font-semibold text-violet-400 mb-2 text-center">Estatísticas de uso</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {technologies.map((tech) => (
                <div key={tech.name} className="mb-2">
                    <div className="flex justify-between mb-1 text-base font-semibold">
                    <span>{tech.name}</span>
                    <span>{tech.percent}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full">
                    <div
                        className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-300 animate-progress"
                        style={{ width: `${tech.percent}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4 text-violet-300 text-center">Meus valores e metas</h2>
            <ul className="list-disc list-inside text-gray-200 text-base">
                <li><span className="font-bold text-violet-300">Aprender sempre:</span> estou constantemente me desafiando a sair da zona de conforto e adquirir novas competências</li>
                <li><span className="font-bold text-violet-300">Qualidade e organização no código:</span> acredito que a legibilidade e manutenção são tão importantes quanto a funcionalidade</li>
                <li><span className="font-bold text-violet-300">Compartilhar e colaborar:</span> acredito no poder do software livre e da comunidade para nos tornar melhores profissionais</li>
                <li><span className="font-bold text-violet-300">Evoluir rumo ao futuro:</span> almejo trabalhar em projetos que façam diferença e continuar crescendo como desenvolvedor</li>
            </ul>
            </div>
        </section>
        <section id="projetos" className="w-full max-w-4xl mb-12 animate-fadein">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-violet-400 tracking-tight drop-shadow-lg">Projetos</h1>
          <Portfolio />
        </section>

        <section id="social" className="w-full max-w-xl rounded-3xl shadow-2xl p-0 flex flex-col items-center mb-12 border border-violet-800 animate-fadein overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="200" cy="100" rx="180" ry="80" fill="url(#grad1)" fillOpacity="0.15" />
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a78bfa" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 w-full h-full backdrop-blur-xl bg-gray-900/70 rounded-3xl p-10 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-violet-400 tracking-tight drop-shadow-lg">Social</h1>
            <div className="flex flex-row gap-10 justify-center mb-6 animate-fadein-slow">
              <a href="https://github.com/miguel-Bernardino/" target="_blank" rel="noopener" className="group flex flex-col items-center relative">
                <div className="bg-gradient-to-br from-gray-800 via-violet-700 to-violet-400 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-200 animate-pop-in">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
                </div>
                <span className="text-violet-400 font-bold text-lg group-hover:underline mt-2">GitHub</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-violet-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Ver perfil</span>
              </a>
              <a href="mailto:miguel.bernardino.5891@gmail.com?subject=Contato via Portfólio" className="group flex flex-col items-center relative">
                <div className="bg-gradient-to-br from-gray-800 via-violet-700 to-violet-400 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-200 animate-pop-in" style={{ animationDelay: '0.1s', aspectRatio: '1 / 1' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="w-12 h-12" />
                </div>
                <span className="text-violet-400 font-bold text-lg group-hover:underline mt-2">Email</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-violet-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Enviar email</span>
              </a>
              <a href="https://www.linkedin.com/in/miguel-borges-52a8962a2/" target="_blank" rel="noopener" className="group flex flex-col items-center relative">
                <div className="bg-gradient-to-br from-gray-800 via-violet-700 to-violet-400 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-200 animate-pop-in" style={{ animationDelay: '0.2s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-12 h-12" />
                </div>
                <span className="text-violet-400 font-bold text-lg group-hover:underline mt-2">LinkedIn</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-violet-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Ver perfil</span>
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center mt-2">
              <p className="text-gray-300 text-center text-lg">Vamos conversar? Sinta-se à vontade para me chamar ou acompanhar meus projetos nas redes sociais!</p>
              <span
                className="block mx-auto text-center text-violet-300 text-base sm:text-lg font-semibold bg-violet-900/40 px-6 py-4 rounded-full shadow-lg mt-6 cursor-pointer hover:bg-violet-700/60 transition whitespace-normal break-words max-w-xs sm:max-w-md"
                onClick={() => {navigator.clipboard.writeText('miguel.bernardino.5891@gmail.com')}}
              >
                <span className="font-bold">Email:</span> <span className="break-all">miguel.bernardino.5891@gmail.com</span>
                <span className="block text-xs text-violet-200 mt-1">(Clique para copiar)</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
