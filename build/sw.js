

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "style/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "style/main.css",
    "revision": "c7a02441b4914ffdc39eb2eb55148adc"
  },
  {
    "url": "index.html",
    "revision": "cabaa5bdc0973cfae0ee0f3c574c3fbc"
  },
  {
    "url": "js/animation.js",
    "revision": "1e4ed80e910114cec475fc44ed2dc5c5"
  },
  {
    "url": "js/app.js",
    "revision": "bd4e8826d85f76ab31d6b2687e27912f"
  },
  {
    "url": "js/articels.js",
    "revision": "d07a228b6920736065ef57b5f8e741f6"
  },
  {
    "url": "js/location.js",
    "revision": "e1d3cb751c515421cb729ea6227774df"
  },
  {
    "url": "js/main.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "d582b402cdafcc4a3934fba3986d1be7"
  },
  {
    "url": "images/icon/icon-128x128.png",
    "revision": "c868628f85920746394b72634dfcc4f9"
  },
  {
    "url": "images/icon/icon-144x144.png",
    "revision": "cd8497548afb834dda62757379542627"
  },
  {
    "url": "images/icon/icon-152x152.png",
    "revision": "fe8578eb15d077ca8c61b136d721f816"
  },
  {
    "url": "images/icon/icon-192x192.png",
    "revision": "cba69c4d0a85d58c52948906f09cc2e5"
  },
  {
    "url": "images/icon/icon-384x384.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "images/icon/icon-512x512.png",
    "revision": "499374c2e19adb5ef3b3dadc7cc53412"
  },
  {
    "url": "images/icon/icon-72x72.png",
    "revision": "18f662ec383f61bfe9db19a5a43fcec5"
  },
  {
    "url": "images/icon/icon-96x96.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "images/icon/icon.png",
    "revision": "711c73bebea311ed7e03de94ab36b536"
  },
  {
    "url": "images/icon/screen.png",
    "revision": "6ce923a653a3360c8186dce8b391c368"
  },
  {
    "url": "pages/offline.html",
    "revision": "4a9a5105e6c974c6deec1c8893d00961"
  },
  {
    "url": "pages/404.html",
    "revision": "2f404c2bc9d919f3dcad5c8e570bc1bf"
  },
  {
    "url": "images/icon/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  }
]);
//articels-images
  workbox.routing.registerRoute(
    /(.*)articles(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );
//articels cache
  const articleHandler = workbox.strategies.networkFirst({
    cacheName: 'articles-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      })
    ]
  });
//articels page handler
  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args).then(response => {
      if (!response) {
        return caches.match('pages/offline.html');
      } else if (response.status === 404) {
        return caches.match('pages/404.html');
      }
      return response;
    });
  });
//post handler
  const postHandler = workbox.strategies.cacheFirst({
    cacheName: 'posts-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      })
    ]
  });
//post res
  workbox.routing.registerRoute(/(.*)pages\/post(.*)\.html/, args => {
    return postHandler.handle(args).then(response => {
      if (response.status === 404) {
        return caches.match('pages/404.html');
      }
      return response;
    })
    .catch(function() {
      return caches.match('pages/offline.html');
    });
  });

 
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/