import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <header className="bg-slate-900 text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        GameVault{" "}
        <span className="text-emerald-400">🎮</span>
      </h1>

      <div className="flex items-center gap-3">
        {mostrarRelogio && <Relogio />}

        <button
          onClick={() => setMostrarRelogio(!mostrarRelogio)}
          className="text-xs border border-slate-600 hover:border-emerald-400 px-3 py-1 rounded-lg transition-colors"
        >
          {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
        </button>
      </div>
    </header>
  );
}

export default Header;