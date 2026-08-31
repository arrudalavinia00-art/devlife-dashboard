import Header from "./components/Header"
import GameCard from "./components/GameCard"
import Footer from "./components/Footer"

function App() {
  const jogos = [
    {
      id: 1,
      titulo: "The Witcher 3",
      descricao:
        "Explore um mundo aberto cheio de aventuras, monstros e histórias.",
      categoria: "RPG",
      plataforma: "PC",
    },
    {
      id: 2,
      titulo: "God of War Ragnarök",
      descricao:
        "Acompanhe Kratos e Atreus em uma jornada pelos mundos da mitologia nórdica.",
      categoria: "Ação",
      plataforma: "PlayStation",
    },
    {
      id: 3,
      titulo: "The Legend of Zelda",
      descricao:
        "Explore Hyrule, enfrente inimigos e descubra novos lugares.",
      categoria: "Aventura",
      plataforma: "Nintendo Switch",
    },
    {
      id: 4,
      titulo: "EA Sports FC",
      descricao:
        "Monte seu time e dispute partidas de futebol com jogadores de todo o mundo.",
      categoria: "Esporte",
      plataforma: "PC / Console",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Jogos em destaque
        </h2>

        <p className="mb-8 text-slate-300">
          Encontre seu próximo jogo favorito.
        </p>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jogos.map((jogo) => (
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              categoria={jogo.categoria}
              plataforma={jogo.plataforma}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App