'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "angenor.github.io/.git/COMMIT_EDITMSG": "6ab918057a10e092f7b95046f70320cd",
"angenor.github.io/.git/config": "f8db436384c1e29d2dfb50544b97f0df",
"angenor.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"angenor.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"angenor.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"angenor.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"angenor.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"angenor.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"angenor.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"angenor.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"angenor.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"angenor.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"angenor.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"angenor.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"angenor.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"angenor.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"angenor.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"angenor.github.io/.git/index": "72f401429611800000dfd0cd69919869",
"angenor.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"angenor.github.io/.git/logs/HEAD": "c4c0f21e67965e2b2e795faf5258a644",
"angenor.github.io/.git/logs/refs/heads/main": "c4c0f21e67965e2b2e795faf5258a644",
"angenor.github.io/.git/logs/refs/remotes/origin/HEAD": "613e0aea0e0ad12afb48a4f28af4fc1a",
"angenor.github.io/.git/logs/refs/remotes/origin/main": "5aa98c6e06232994c72eb4d929f73b49",
"angenor.github.io/.git/objects/10/dec9c5b8b3fce1a52d819de617837a08f02767": "097cbcd975c85576af444bae9388fcca",
"angenor.github.io/.git/objects/14/7e9efc07a5121c834c3b47cd7e3c6b172af301": "a88a0a4062656dee445e51b1d254ea60",
"angenor.github.io/.git/objects/37/e6f929c3b9117ac58453eb9d95a4803a99379d": "742df2f7875ca9401f5f31b91acf872c",
"angenor.github.io/.git/objects/4e/8461075a544001d68b1d113a21b083acd9f188": "4c9c9dba6802c40333ff6c8c129b5d44",
"angenor.github.io/.git/objects/60/99801b35fb8a38f9c4ee28d4735bdb4e9afbef": "2329ec50e10d99620c54aad185d97b38",
"angenor.github.io/.git/objects/61/96224afe4398a38864f415928342f49774a059": "e69b7547aba3383fe24fcb03f5030c29",
"angenor.github.io/.git/objects/67/9612042aa3d3f82b3dcce69ebf2da3da4fe5ad": "73574c06b67968d84f1bff696e30523b",
"angenor.github.io/.git/objects/6b/e8bb77c74eddf02a4e22a4d86a508e2c6165ae": "54cfd578dc7aec791d47e2630ffb5cfe",
"angenor.github.io/.git/objects/70/cde4d178438664ffdd2013eb05a8422a1ad495": "be73f52bdc95b90f67bf11eca87c6793",
"angenor.github.io/.git/objects/71/26d55c42bc2cf8570c6b17aad8e34c43190571": "0af9f11dc548fe1585e17f3945fe8640",
"angenor.github.io/.git/objects/74/06604d20c73f54539f71ed9b0886fbdd73aa58": "a1541139105e3f051d7822d8748fe161",
"angenor.github.io/.git/objects/78/8f8b5429065df83ae694bbabc6490efe9741b2": "ad342c4ddbfa47df4670fa653b95815a",
"angenor.github.io/.git/objects/79/4d1876a28a5fe26f39da702e238514b32e9f77": "efb83a55262ee87db997c2ccfd25bb2e",
"angenor.github.io/.git/objects/ab/ed42121468a9ce13ef1395393579f941024c4b": "08a3e64a3f2bd1bee1a0ab5f7194469c",
"angenor.github.io/.git/objects/ac/0d1d5a3045049df3eb35d96e525b2fc01e6b25": "fd21c77fbeacee44568edbfce13d13e4",
"angenor.github.io/.git/objects/ba/3f646542b354f6c42472a0a90881b5797611bc": "ab58fa5206152d490abf6c52e75fa434",
"angenor.github.io/.git/objects/bb/2e196f6473fc5e6db460fb6ade5ba574f6d9a6": "03eb179d45d4f17ffb11b83eb4208c41",
"angenor.github.io/.git/objects/c5/ab05918428718319e9f9d2d0144e8bc6f39bb7": "a075ebb9174d5486e55b8ab480ba33d3",
"angenor.github.io/.git/objects/cf/fd43610058f304f4e9641f9825f5c82eb14432": "663e8ed7ea5fe14458b9bd426890d748",
"angenor.github.io/.git/objects/d2/006717c4dad1403efc90590ec8e71e6b5860d9": "93b647df77334f4e5dd1e337a70deac7",
"angenor.github.io/.git/objects/d5/3de1bd6f39277f4b218e73cf4f0cb92c529c0b": "dd372ab1af49e95c07a474a0b4cfae9d",
"angenor.github.io/.git/objects/de/2f6f3d8397c3b3bd8b61df7b24f2a1ff8a7264": "f9d6ff92ff8c947a0063daf27e974fe3",
"angenor.github.io/.git/objects/ef/5387885d29316f746e856f6779df1c0f4df91f": "5e3711156851171b16157a3860f034aa",
"angenor.github.io/.git/objects/fe/a27d756cc760d65b553e1f6015e19d6fa8bd09": "d585e9d76f2b1072fefbb840b92dec4c",
"angenor.github.io/.git/objects/pack/pack-fced88c011787cced4a7136759c556eb9c57dd77.idx": "9719c8c98104a442ca855461b1ebac14",
"angenor.github.io/.git/objects/pack/pack-fced88c011787cced4a7136759c556eb9c57dd77.pack": "f27586f69d40f1b8c1f2f34fdf7dfc73",
"angenor.github.io/.git/packed-refs": "4c69a636f8fe34f24e0aa1a3a8b69984",
"angenor.github.io/.git/refs/heads/main": "d06217efcf310e5a8ef1f429caccd0d4",
"angenor.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"angenor.github.io/.git/refs/remotes/origin/main": "d06217efcf310e5a8ef1f429caccd0d4",
"angenor.github.io/assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"angenor.github.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"angenor.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"angenor.github.io/assets/gifs/scroll_down.gif": "6a77ebdd04c07276dbaef4ec4557171a",
"angenor.github.io/assets/logos/1200px-Laravel.svg.png": "b0ba6d0d7144a425934b9f2daab2b971",
"angenor.github.io/assets/logos/alloDocPC_logo.png": "9b55e94cfe37911a0be952cfe39e11ee",
"angenor.github.io/assets/logos/ansut_logo.png": "eb24789ad593606745ae3a494cf98004",
"angenor.github.io/assets/logos/arduino_logo.png": "09837ffb19b74127b05d4b881253e9cf",
"angenor.github.io/assets/logos/css_logo.png": "3b81431db5af49b11fca5c3cdc9ca7f1",
"angenor.github.io/assets/logos/dart_logo.png": "c979b430b2da155059ebc0a22b0a26ac",
"angenor.github.io/assets/logos/esatic_logo.png": "b895ecb3c5640b2d3058c1f947f337ca",
"angenor.github.io/assets/logos/firebase_logo.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"angenor.github.io/assets/logos/flutter_logo.png": "8ba1d5b022cd7f5999bea3085e87ceb0",
"angenor.github.io/assets/logos/html_logo.png": "cae1b4f6b223fe5a7bb712b680cffa67",
"angenor.github.io/assets/logos/laravel_logo.png": "8bfc5015da73628edae2996b01ed50c0",
"angenor.github.io/assets/logos/lca_logo.png": "425f6587daabb381bc524027936de38f",
"angenor.github.io/assets/logos/python_logo.png": "ff06c339780f23112c1cbbbb284158ff",
"angenor.github.io/assets/logos/rasberry_logo.png": "04a1111c17d069e04d89ac3b4a48d0b6",
"angenor.github.io/assets/logos/scroll_down.gif": "6a77ebdd04c07276dbaef4ec4557171a",
"angenor.github.io/assets/logos/siin_logo.png": "b36a7a7f4ab0374a414ce4f25d513e48",
"angenor.github.io/assets/logos/Sklearn_logo.png": "a79403d3ee8e6c7394d9ede470b784c9",
"angenor.github.io/assets/logos/tailwindcss_logo.png": "4b77a10e06713c656f546024dd66327d",
"angenor.github.io/assets/logos/wordpress_logo.png": "ba399827eefef8150b83a11efe65e17d",
"angenor.github.io/assets/NOTICES": "1dc3db5f34f1794254021883bab04c02",
"angenor.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"angenor.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"angenor.github.io/assets/photos/en_maintenance.jpg": "be1bc6c0233541b767a1387313f58cdb",
"angenor.github.io/assets/photos/font_decran1.jpg": "06bf95580b806083d84f4dba4a903063",
"angenor.github.io/assets/photos/ma_photo_mini2.png": "08e6ba8d0209bf24e58d823568a37395",
"angenor.github.io/assets/photos/ma_photo_mini3.png": "8bac7be9ceed17d1667c3b2f0a8a78eb",
"angenor.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"angenor.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"angenor.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"angenor.github.io/index.html": "139c9fa4a329a5098a7a719d14249d83",
"/": "805e400b44a31f15a1051ebfa683b1db",
"angenor.github.io/main.dart.js": "e8e987c256e53a512c027dac83bb7b73",
"angenor.github.io/manifest%20-%20Copie.json": "524d375075fc1a82c917a66f145fa157",
"angenor.github.io/manifest.json": "853eeb1346b245b34e8a3f655b9f03a9",
"angenor.github.io/README.md": "d78687f5ec1387f6fe7714f1a178e2ed",
"angenor.github.io/version.json": "932e0038188b083116f2f3c9647e9fe3",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "1dc3db5f34f1794254021883bab04c02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "805e400b44a31f15a1051ebfa683b1db",
"main.dart.js": "42c2e36f7e0924f8c078441d2f6643d6",
"manifest.json": "2c48018de10c4fdc0596bf8c9d00a04d",
"version.json": "932e0038188b083116f2f3c9647e9fe3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
