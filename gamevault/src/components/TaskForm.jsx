import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Ação");
  const [prioridade, setPrioridade] = useState("media");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (titulo.trim() === "") return;

    onAdicionar({
      titulo: titulo.trim(),
      categoria,
      prioridade,
    });

    setTitulo("");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="bg-white rounded-xl shadow-md p-5 mb-8 flex flex-wrap gap-3 items-end"
    >
      <div className="flex-1 min-w-[200px]">
        <label
          htmlFor="campo-titulo"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Novo jogo
        </label>

        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o nome do jogo..."
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      <div>
        <label
          htmlFor="campo-categoria"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Categoria
        </label>

        <select
          id="campo-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="Ação">Ação</option>
          <option value="Aventura">Aventura</option>
          <option value="RPG">RPG</option>
          <option value="Esportes">Esportes</option>
          <option value="Estratégia">Estratégia</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campo-prioridade"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Prioridade
        </label>

        <select
          id="campo-prioridade"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="alta">alta</option>
          <option value="media">media</option>
          <option value="baixa">baixa</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700"
      >
        + Adicionar
      </button>
    </form>
  );
}

export default TaskForm;