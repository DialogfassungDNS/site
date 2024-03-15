importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {registerRoute, setDefaultHandler} = workbox.routing;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;
const {offlineFallback} = workbox.recipes;

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
    NetworkOnly,
} = workbox.strategies;
const cacheName = 'install-cache';
setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(["/site/1/","/site/2/","/site/3/","/site/4/","/site/5/","/site/6/","/site/7/","/site/8/","/site/9/","/site/10/","/site/11/","/site/12/","/site/13/","/site/14/","/site/15/","/site/16/","/site/17/"]);
    await cache.addAll(["/site/12-1-b/","/site/11-1-a/","/site/6-1-b/","/site/8-3/","/site/13-3-a/","/site/7-1-ab/","/site/17-3/","/site/4-1-c/","/site/3-1-a/","/site/2-1-a/","/site/11-1-c/","/site/14-1-a/","/site/9-1-b/","/site/8-6/","/site/14-1-b/","/site/1-1-ab/","/site/11-2-a/","/site/3-2-a/","/site/2-1-b/","/site/7-2-b/","/site/13-1-a/","/site/15-1/","/site/4-1-a/","/site/5-1-a/","/site/8-2-ab/","/site/10-2/","/site/9-1-a/","/site/4-1-b/","/site/15-2/","/site/7-2-a/","/site/13-2-a/","/site/12-1-a/","/site/11-2-c/","/site/3-3/","/site/16-1/","/site/13-1-b/","/site/12-2/","/site/16-2-ab/","/site/11-1-b/","/site/8-2-c/","/site/2-2/","/site/1-1-c/","/site/12-3-abc/","/site/3-1-f/","/site/5-1-e/","/site/4-2-ab/","/site/8-4/","/site/3-1-e/","/site/6-1-a/","/site/5-1-f/","/site/11-2-b/","/site/17-2/","/site/10-1/","/site/13-1-c/","/site/6-2-ab/","/site/11-5/","/site/15-3-ab/","/site/3-1-cd/","/site/5-1-bc/","/site/17-1/","/site/8-1/","/site/4-1-d/","/site/8-5-ab/","/site/3-2-b/","/site/15-4/","/site/5-1-d/","/site/11-3/","/site/13-1-d/","/site/11-4/"]);
    await cache.addAll(["https://dialogfassungdns.github.io/data/de/comb/12-1-b.json","https://dialogfassungdns.github.io/data/de/comb/11-1-a.json","https://dialogfassungdns.github.io/data/de/comb/6-1-b.json","https://dialogfassungdns.github.io/data/de/comb/8-3.json","https://dialogfassungdns.github.io/data/de/comb/13-3-a.json","https://dialogfassungdns.github.io/data/de/comb/7-1-ab.json","https://dialogfassungdns.github.io/data/de/comb/17-3.json","https://dialogfassungdns.github.io/data/de/comb/4-1-c.json","https://dialogfassungdns.github.io/data/de/comb/3-1-ab.json","https://dialogfassungdns.github.io/data/de/comb/2-1-a.json","https://dialogfassungdns.github.io/data/de/comb/11-1-c.json","https://dialogfassungdns.github.io/data/de/comb/14-1-a.json","https://dialogfassungdns.github.io/data/de/comb/9-1-b.json","https://dialogfassungdns.github.io/data/de/comb/8-6.json","https://dialogfassungdns.github.io/data/de/comb/14-1-b.json","https://dialogfassungdns.github.io/data/de/comb/1-1-ab.json","https://dialogfassungdns.github.io/data/de/comb/11-2-a.json","https://dialogfassungdns.github.io/data/de/comb/3-2-a.json","https://dialogfassungdns.github.io/data/de/comb/2-1-b.json","https://dialogfassungdns.github.io/data/de/comb/7-2-b.json","https://dialogfassungdns.github.io/data/de/comb/13-1-a.json","https://dialogfassungdns.github.io/data/de/comb/15-1.json","https://dialogfassungdns.github.io/data/de/comb/4-1-a.json","https://dialogfassungdns.github.io/data/de/comb/5-1-a.json","https://dialogfassungdns.github.io/data/de/comb/8-2-ab.json","https://dialogfassungdns.github.io/data/de/comb/10-2.json","https://dialogfassungdns.github.io/data/de/comb/9-1-a.json","https://dialogfassungdns.github.io/data/de/comb/4-1-b.json","https://dialogfassungdns.github.io/data/de/comb/15-2.json","https://dialogfassungdns.github.io/data/de/comb/7-2-a.json","https://dialogfassungdns.github.io/data/de/comb/13-2-a.json","https://dialogfassungdns.github.io/data/de/comb/12-1-a.json","https://dialogfassungdns.github.io/data/de/comb/11-2-c.json","https://dialogfassungdns.github.io/data/de/comb/3-3.json","https://dialogfassungdns.github.io/data/de/comb/16-1.json","https://dialogfassungdns.github.io/data/de/comb/13-1-b.json","https://dialogfassungdns.github.io/data/de/comb/12-2.json","https://dialogfassungdns.github.io/data/de/comb/16-2-ab.json","https://dialogfassungdns.github.io/data/de/comb/11-1-b.json","https://dialogfassungdns.github.io/data/de/comb/8-2-c.json","https://dialogfassungdns.github.io/data/de/comb/2-2.json","https://dialogfassungdns.github.io/data/de/comb/12-4.json","https://dialogfassungdns.github.io/data/de/comb/12-3-abc.json","https://dialogfassungdns.github.io/data/de/comb/3-1-f.json","https://dialogfassungdns.github.io/data/de/comb/5-1-e.json","https://dialogfassungdns.github.io/data/de/comb/4-2-ab.json","https://dialogfassungdns.github.io/data/de/comb/8-4.json","https://dialogfassungdns.github.io/data/de/comb/3-1-e.json","https://dialogfassungdns.github.io/data/de/comb/6-1-a.json","https://dialogfassungdns.github.io/data/de/comb/5-1-f.json","https://dialogfassungdns.github.io/data/de/comb/11-2-b.json","https://dialogfassungdns.github.io/data/de/comb/17-2.json","https://dialogfassungdns.github.io/data/de/comb/10-1.json","https://dialogfassungdns.github.io/data/de/comb/13-1-c.json","https://dialogfassungdns.github.io/data/de/comb/6-2-ab.json","https://dialogfassungdns.github.io/data/de/comb/11-5.json","https://dialogfassungdns.github.io/data/de/comb/15-3-ab.json","https://dialogfassungdns.github.io/data/de/comb/3-1-cd.json","https://dialogfassungdns.github.io/data/de/comb/5-1-bc.json","https://dialogfassungdns.github.io/data/de/comb/17-1.json","https://dialogfassungdns.github.io/data/de/comb/8-1.json","https://dialogfassungdns.github.io/data/de/comb/4-1-d.json","https://dialogfassungdns.github.io/data/de/comb/8-5-ab.json","https://dialogfassungdns.github.io/data/de/comb/3-2-b.json","https://dialogfassungdns.github.io/data/de/comb/15-4.json","https://dialogfassungdns.github.io/data/de/comb/5-1-d.json","https://dialogfassungdns.github.io/data/de/comb/11-3.json","https://dialogfassungdns.github.io/data/de/comb/13-1-d.json","https://dialogfassungdns.github.io/data/de/comb/11-4.json"]);
  };

  event.waitUntil(populateCache());
});


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images/fonts with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => ['image', 'font'].includes(request.destination),
  // Use a Cache First caching strategy
  new CacheFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// Cache json with a Network First strategy.
registerRoute(
  /.*\.(json|geojson|zip|csv)$/,
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
