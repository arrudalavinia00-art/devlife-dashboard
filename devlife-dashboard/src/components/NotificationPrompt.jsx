import { useState, useEffect } from "react";
import {
  suportaNotificacoes,
  ativarNotificacoes,
  notificarLocal,
} from "../notifications";

function NotificationPrompt() {
  const [permissao, setPermissao] = useState(
    suportaNotificacoes()
      ? Notification.permission
      : "unsupported"
  );

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (permissao === "granted") {
      ativarNotificacoes().catch((erro) =>
        console.warn("Inscrição de push adiada:", erro)
      );
    }
  }, [permissao]);

  async function handleAtivar() {
    setCarregando(true);

    const resultado = await ativarNotificacoes();

    setPermissao(Notification.permission);
    setCarregando(false);

    if (resultado.ok) {
      notificarLocal("GameVault", {
        body: "Notificações ativadas! Você será avisado sobre jogos importantes.",
      });
    }
  }

  if (
    permissao === "unsupported" ||
    permissao === "denied"
  ) {
    return null;
  }

  if (permissao === "granted") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800 px-6 py-2 text-sm text-slate-200">
        <span> Notificações ativadas.</span>

        <button
          onClick={() =>
            notificarLocal("GameVault", {
              body: "Esta é uma notificação de teste ",
            })
          }
          className="rounded px-1 text-xs font-semibold underline decoration-dotted hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Testar notificação
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800 px-6 py-3 text-slate-200">
      <p className="text-sm">
         Quer receber avisos sobre seus jogos importantes?
      </p>

      <button
        onClick={handleAtivar}
        disabled={carregando}
        className="rounded-lg bg-emerald-700 px-4 py-1.5 text-sm font-bold text-white hover:bg-emerald-800 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-800"
      >
        {carregando
          ? "Ativando..."
          : "Ativar notificações"}
      </button>
    </div>
  );
}

export default NotificationPrompt;