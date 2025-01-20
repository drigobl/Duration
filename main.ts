Deno.serve((_req) => new Response("Hello, world!"), {
    port: Number(Deno.env.get("PORT")) || 8000,
    hostname: "0.0.0.0",
    onListen: ({ port, hostname }) => {
      console.log(`Server started at http://${hostname}:${port}`);
    },
  });
