self.addEventListener("sync", (event) => {
  if (event.tag !== "sincronizar-jogos") return;

  event.waitUntil(
    self.clients.matchAll().then((clientes) => {
      clientes.forEach((cliente) => {
        cliente.postMessage({
          tipo: "SINCRONIZADO",
          em: new Date().toISOString(),
        });
      });
    })
  );
});

self.addEventListener("push", (event) => {
  const dados = event.data
    ? event.data.json()
    : {
        titulo: "GameVault",
        corpo: "Você tem uma novidade.",
      };

  event.waitUntil(
    self.registration.showNotification(dados.titulo, {
      body: dados.corpo,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
    })
  );
});