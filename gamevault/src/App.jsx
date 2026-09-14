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
  }

  function alternarConcluido(id) {
    setJogos((atual) =>
      atual.map((jogo) =>
        jogo.id === id
          ? { ...jogo, concluido: !jogo.concluido }
          : jogo
      )
    );
  }

  function removerJogo(id) {
    setJogos((atual) => atual.filter((jogo) => jogo.id !== id));
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
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <TaskForm onAdicionar={adicionarJogo} />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">
            Meus jogos ({jogos.length})
          </h2>

          <div className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
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

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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