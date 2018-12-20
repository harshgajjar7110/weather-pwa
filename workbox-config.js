module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "index.html",
    "js/*.js",
    "images/home/*.jpg",
    "images/icon/*.svg",
    "images/icon/*.png",
    "pages/offline.html",
    "pages/404.html",
    "images/icon/*.ico"
  ],
  "swSrc": "src/sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};