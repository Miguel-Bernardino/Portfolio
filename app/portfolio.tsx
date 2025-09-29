import React from "react";

interface Project {
  title: string;
  description: string;
  github: string;
  url: string;
}



const allTechs = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Express", "Node.js", "C#"
];

const projects: (Project & { techs: string[] })[] = [
  {
    title: "Gerador de Tickets",
    description: "Aplicação para gerar tickets de atendimento de forma rápida e simples, permitindo ao usuário criar e visualizar tickets de conferência de forma intuitiva.",
    github: "https://github.com/Miguel-Bernardino/Conference-ticket-generator-Solution",
    url: "https://ticket-generator.atividade-formulario-miguel.tech/",
    techs: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Calculadora de Idade",
    description: "Calculadora que permite descobrir a idade a partir da data de nascimento, com interface simples e responsiva.",
    github: "https://github.com/Miguel-Bernardino/calculadora-de-idade",
    url: "https://calculadora-idade.miguel-bernardino.me/",
    techs: ["React", "TypeScript", "TailwindCSS"]
  },
  {
    title: "Express API Example",
    description: "Exemplo de API RESTful utilizando Express e TypeScript. Projeto para estudos e demonstração de rotas e integração backend.",
    github: "https://github.com/Miguel-Bernardino/Express-api-Example",
    url: "",
    techs: ["TypeScript", "Express", "Node.js"]
  },
  // Projeto removido conforme solicitado
];

export default function Portfolio() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, idx) => (
          project.title === "Express API Example" ? (
            <div key={project.title} className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col justify-center gap-4 h-full min-w-0 w-full max-w-[480px] mx-auto col-span-1 md:col-span-2">
              <div className="w-full flex flex-col items-center justify-center mb-4">
                <a href="https://github.com/Miguel-Bernardino" target="_blank" rel="noopener" title="Ver perfil no GitHub">
                  <img src="https://avatars.githubusercontent.com/u/142626169?v=4" alt="Avatar GitHub" className="w-20 h-20 rounded-full border-4 border-violet-500 shadow-lg hover:scale-105 transition-transform duration-200 mb-2" />
                </a>
                <span className="text-gray-500 dark:text-gray-300 text-center">Este projeto não possui site publicado.<br/>Confira o código fonte no GitHub!</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
              <div className="w-full flex justify-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-[320px] text-center">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-1 justify-center mx-auto" style={{ maxWidth: '60%' }}>
                {project.techs.map(tech => (
                  <span key={tech} className="px-5 py-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 text-base font-bold shadow text-center">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex-grow" />
              <div className="grid grid-cols-2 gap-4 mt-2 pt-2 w-full mb-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-violet-600 text-white font-semibold shadow hover:scale-[1.02] hover:from-violet-700 hover:to-violet-400 transition-all duration-200 text-center"
                >
                  Código fonte
                </a>
                <span className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 font-semibold shadow text-center cursor-not-allowed">
                  Site não disponível
                </span>
              </div>
            </div>
          ) : (
            <div key={project.title} className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-4 h-full w-full max-w-[480px] min-w-0 mx-auto">
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-64 border rounded mb-4"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
              <div className="w-full flex justify-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-[320px] text-center">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-1 justify-center mx-auto" style={{ maxWidth: '60%' }}>
                {project.techs.map(tech => (
                  <span key={tech} className="px-5 py-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 text-base font-bold shadow text-center">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex-grow" />
              <div className="grid grid-cols-2 gap-4 mt-2 pt-2 w-full mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-violet-600 text-white font-semibold shadow hover:scale-[1.02] hover:from-violet-700 hover:to-violet-400 transition-all duration-200 text-center"
                >
                  Código fonte
                </a>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-white font-semibold shadow hover:scale-[1.02] hover:from-violet-700 hover:to-violet-500 transition-all duration-200 text-center"
                  >
                    Acessar Site
                  </a>
                ) : (
                  <span className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 font-semibold shadow text-center cursor-not-allowed">
                    Site não disponível
                  </span>
                )}
              </div>
            </div>
          )

        ))}
      </div>
    </main>
  );
}
