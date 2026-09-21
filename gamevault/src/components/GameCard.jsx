function GameCard({
  titulo,
  descricao,
  categoria,
  plataforma,
  prioridade,
  concluido,
  onToggle,
  onRemover,
}) {
  const cores = {
    Ação: "bg-red-500",
    RPG: "bg-purple-500",
    Aventura: "bg-green-500",
    Esporte: "bg-blue-500",
    Estratégia: "bg-orange-500",
  };

  const coresPrioridade = {
    alta: "bg-red-100 text-red-700",
    media: "bg-yellow-100 text-yellow-800",
    baixa: "bg-emerald-100 text-emerald-700",
  };

  return (
    <article
      className={`rounded-xl border border-slate-700 p-6 shadow-lg transition ${
        concluido ? "bg-slate-900" : "bg-slate-800"
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-2">
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
            cores[categoria] || "bg-gray-500"
          }`}
        >
          {categoria}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            coresPrioridade[prioridade] || "bg-gray-100 text-gray-700"
          }`}
        >
          {prioridade}
        </span>
      </div>

      <h2
        className={`mb-3 text-xl font-bold ${
          concluido ? "text-slate-400 line-through" : "text-white"
        }`}
      >
        {titulo}
      </h2>

      <p className="mb-5 leading-relaxed text-slate-300">
        {descricao}
      </p>

      <div className="border-t border-slate-700 pt-4">
        <p className="text-sm text-slate-300">
          Plataforma
        </p>

        <p className="mt-1 font-medium text-purple-300">
          {plataforma}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={concluido}
            onChange={onToggle}
            className="h-4 w-4 accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
          />

          Jogado
        </label>

        <button
          onClick={onRemover}
          aria-label={`Remover jogo: ${titulo}`}
          className="rounded px-1 text-sm font-semibold text-red-600 transition hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default GameCard;