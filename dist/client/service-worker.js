const m = [
  "/_app/immutable/start-339cecc6.js",
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
  "/favicon.png",
  "/manifest.json",
  "/offline.html"
], i = "1660919252899", t = self, n = `cache${i}`, l = m.concat(r), u = new Set(l);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(n).then((s) => s.addAll(l)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== n && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function h(e) {
  const s = await caches.open(`offline${i}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const c = await s.match(e);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, p = s.host === self.location.host && u.has(s.pathname), o = e.request.cache === "only-if-cached" && !p;
  a && !c && !o && e.respondWith(
    (async () => p && await caches.match(e.request) || h(e.request))()
  );
});
