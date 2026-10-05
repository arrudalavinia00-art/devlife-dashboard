import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Ação");
  const [plataforma, setPlataforma] = useState("PC");
  const [prioridade, setPrioridade] = useState("media");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (titulo.trim() === "") return;

    onAdicionar({
      titulo: titulo.trim(),
      categoria,
      plataforma,
      prioridade,
    });

    setTitulo("");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="mb-8 flex flex-wrap items-end gap-3 rounded-xl bg-white p-5 shadow-md"
    >
      <div className="min-w-[200px] flex-1">
        <label
          htmlFor="campo-titulo"
          className="mb-1 block text-sm font-semibold text-slate-600"
        >
          Novo jogo
        </label>

        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o nome do jogo..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      <div>
        <label
          htmlFor="campo-categoria"
          className="mb-1 block text-sm font-semibold text-slate-600"
        >
          Categoria
        </label>

        <select
          id="campo-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
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
          htmlFor="campo-plataforma"
          className="mb-1 block text-sm font-semibold text-slate-600"
        >
          Plataforma
        </label>

        <select
          id="campo-plataforma"
          value={plataforma}
          onChange={(e) => setPlataforma(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Mobile">Mobile</option>
          <option value="PC / Console">PC / Console</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campo-prioridade"
          className="mb-1 block text-sm font-semibold text-slate-600"
        >
          Prioridade
        </label>

        <select
          id="campo-prioridade"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="baixa">Baixa</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-emerald-700 px-5 py-2 font-bold text-white transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
      >
        + Adicionar
      </button>
    </form>
  );
}

export default TaskForm;