import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import TaskForm from "./components/TaskForm";

const JOGOS_INICIAIS = [
  {
    id: 1,
    titulo: "God of War Ragnarök",
    descricao: "Uma aventura épica pela mitologia nórdica.",
    categoria: "Ação",
    plataforma: "PlayStation",
    prioridade: "alta",
    concluido: false,
  },
  {
    id: 2,
    titulo: "Minecraft",
    descricao: "Explore, construa e sobreviva em um mundo aberto.",
    categoria: "Aventura",
    plataforma: "PC / Console",
    prioridade: "media",
    concluido: true,
  },
  {
    id: 3,
    titulo: "The Witcher 3",
    descricao: "Uma grande aventura de RPG em um mundo fantástico.",
    categoria: "RPG",
    plataforma: "PC / PlayStation / Xbox",
    prioridade: "alta",
    concluido: false,
  },
  {
    id: 4,
    titulo: "EA Sports FC 25",
    descricao: "Monte seu time e dispute partidas de futebol.",
    categoria: "Esporte",
    plataforma: "PC / Console",
    prioridade: "baixa",
    concluido: false,
  },
];

const FILTROS = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "pendentes", rotulo: "Pendentes" },
  { valor: "concluidos", rotulo: "Concluídos" },
];

function App() {
  const [jogos, setJogos] = useState(() => {
    const salvos = localStorage.getItem("gamevault-jogos");

    return salvos ? JSON.parse(salvos) : JOGOS_INICIAIS;
  });

  const [filtro, setFiltro] = useState("todos");
  const [anuncio, setAnuncio] = useState("");

  useEffect(() => {
    localStorage.setItem("gamevault-jogos", JSON.stringify(jogos));
  }, [jogos]);

  function adicionarJogo(novoJogo) {
    setJogos((atual) => [
      ...atual,
      {
        ...novoJogo,
        id: Date.now(),
        descricao: "Novo jogo adicionado ao GameVault.",
        plataforma: "A definir",
        concluido: false,
      },
    ]);

    setAnuncio(`Jogo "${novoJogo.titulo}" adicionado.`);
  }

  function alternarConcluido(id) {
    const jogo = jogos.find((item) => item.id === id);

    if (!jogo) return;

    const vaiConcluir = !jogo.concluido;
    const status = vaiConcluir ? "marcado como jogado" : "marcado como não jogado";

    setJogos((atual) =>
      atual.map((item) =>
        item.id === id
          ? { ...item, concluido: !item.concluido }
          : item
      )
    );

    setAnuncio(`Jogo "${jogo.titulo}" ${status}.`);
  }

  function removerJogo(id) {
    const jogo = jogos.find((item) => item.id === id);

    if (!jogo) return;

    setJogos((atual) => atual.filter((item) => item.id !== id));

    setAnuncio(`Jogo "${jogo.titulo}" removido.`);
  }

  const jogosFiltrados = jogos.filter((jogo) => {
    if (filtro === "pendentes") {
      return !jogo.concluido;
    }

    if (filtro === "concluidos") {
      return jogo.concluido;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Skip link: aparece quando recebe foco pelo teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <Header />

      {/* Região para anúncios importantes ao leitor de tela */}
      <div
        aria-live="polite"
        role="status"
        className="sr-only"
      >
        {anuncio}
      </div>

      <main
        id="conteudo"
        className="mx-auto max-w-6xl px-6 py-10"
      >
        <TaskForm onAdicionar={adicionarJogo} />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">
            Meus jogos ({jogos.length})
          </h2>

          <div
            role="group"
            aria-label="Filtrar jogos"
            className="flex gap-2"
          >
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                aria-pressed={filtro === opcao.valor}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  filtro === opcao.valor
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        <section
          aria-label="Lista de jogos"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {jogosFiltrados.map((jogo) => (
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              categoria={jogo.categoria}
              plataforma={jogo.plataforma}
              prioridade={jogo.prioridade}
              concluido={jogo.concluido}
              onToggle={() => alternarConcluido(jogo.id)}
              onRemover={() => removerJogo(jogo.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;