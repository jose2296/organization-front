const m = [
  "/_app/immutable/start-fd77e256.js",
  "/_app/immutable/layout.svelte-035b28ea.js",
  "/_app/immutable/error.svelte-dad1062c.js",
  "/_app/immutable/pages/app/__layout.svelte-e9c7bdac.js",
  "/_app/immutable/pages/auth/__layout.svelte-d26ea08c.js",
  "/_app/immutable/pages/app/categories/_categoryId_.svelte-526d7847.js",
  "/_app/immutable/assets/[categoryId]-a9a52c28.css",
  "/_app/immutable/pages/app/categories/index.svelte-c23d5070.js",
  "/_app/immutable/pages/app/index.svelte-c662836e.js",
  "/_app/immutable/pages/app/lists/_listId_.svelte-55911b71.js",
  "/_app/immutable/assets/[listId]-edeabe98.css",
  "/_app/immutable/pages/app/lists/index.svelte-6cdac400.js",
  "/_app/immutable/pages/auth/login.svelte-f9585fa4.js",
  "/_app/immutable/pages/auth/register.svelte-8554998c.js",
  "/_app/immutable/pages/index.svelte-5cb9e0bb.js",
  "/_app/immutable/chunks/index-d3d2aee4.js",
  "/_app/immutable/chunks/singletons-eca981c1.js",
  "/_app/immutable/chunks/preload-helper-c28b9807.js",
  "/_app/immutable/chunks/stores-dbf3e267.js",
  "/_app/immutable/chunks/index-c00af6b7.js",
  "/_app/immutable/chunks/icon.component-7ac4b900.js"
], r = [
  "/app-icon.png",
  "/favicon.png",
  "/manifest.webmanifest",
  "/offline.html"
], i = "1660926004779", t = self, n = `cache${i}`, l = m.concat(r), u = new Set(l);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(n).then((a) => a.addAll(l)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const s of a)
        s !== n && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function h(e) {
  const a = await caches.open(`offline${i}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const c = await a.match(e);
    if (c)
      return c;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, p = a.host === self.location.host && u.has(a.pathname), o = e.request.cache === "only-if-cached" && !p;
  s && !c && !o && e.respondWith(
    (async () => p && await caches.match(e.request) || h(e.request))()
  );
});
