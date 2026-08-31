function GameCard({ titulo, descricao, categoria, plataforma }) {
  const cores = {
    Ação: "bg-red-500",
    RPG: "bg-purple-500",
    Aventura: "bg-green-500",
    Esporte: "bg-blue-500",
  }

  return (
    <article className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
      <div className="mb-5">
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
            cores[categoria] || "bg-gray-500"
          }`}
        >
          {categoria}
        </span>
      </div>

      <h2 className="mb-3 text-xl font-bold text-white">
        {titulo}
      </h2>

      <p className="mb-5 leading-relaxed text-slate-300">
        {descricao}
      </p>

      <div className="border-t border-slate-700 pt-4">
        <p className="text-sm text-slate-400">
          Plataforma
        </p>

        <p className="mt-1 font-medium text-purple-300">
          {plataforma}
        </p>
      </div>
    </article>
  )
}

export default GameCard