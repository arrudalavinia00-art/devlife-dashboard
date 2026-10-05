export function suportaBackgroundSync() {
  return "serviceWorker" in navigator && "SyncManager" in window;
}

export async function agendarSincronizacao(
  tag = "sincronizar-jogos"
) {
  if (!suportaBackgroundSync()) {
    console.warn(
      "Background Sync não suportado neste navegador."
    );

    return false;
  }

  try {
    const registro = await navigator.serviceWorker.ready;

    await registro.sync.register(tag);

    console.log(
      ` Sincronização "${tag}" agendada.`
    );

    return true;
  } catch (erro) {
    console.error(
      "Falha ao agendar Background Sync:",
      erro
    );

    return false;
  }
}