if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9USSiuLgoN0pL1et8IH3S/_buildManifest.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/9USSiuLgoN0pL1et8IH3S/_ssgManifest.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/184-ed65e77bee77d560e29d.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/675-9d14b17e4dc8ba654f9f.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/pages/%5Bcurrency%5D-fccae7534e5416cc652c.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/pages/_app-a400230146ef709c1791.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/pages/about-1b9a482df9c393c59030.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/pages/index-063debe7d55c0ff83d4e.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/chunks/webpack-1a8a258926ecde76681b.js",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/_next/static/css/0736c79bb26c8d2f4311.css",revision:"9USSiuLgoN0pL1et8IH3S"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/apple-icon-180.png",revision:"13e95e2650cc8b9b3eeb827c023291fa"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"6f4fd838f72535e7f81f1f79f4adf912"},{url:"/icons/apple-splash-1136-640.jpg",revision:"7b834b8138b5842e2dfac81a0365db97"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"852ccfbbe0a21b480d7ca422237279a5"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"750d17d8ea598d58ab94cf2b312de0f9"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"0f0db4118560d073d6513422cac5ba5d"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"54484ab372c182681b96f3392a17394d"},{url:"/icons/apple-splash-1334-750.jpg",revision:"48220914c3bb51412b19e512e90ad60a"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"8bc18130a25c00fa211ddcfda5f54eba"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"2f37c66ac7ea524e1ce6bf3df7f79fb1"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"57b0bbadac555c1e50a2d827263f2549"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"95b408882c64624afed48faabd302408"},{url:"/icons/apple-splash-1792-828.jpg",revision:"14a88e7d020c6123f817ca8fb9658400"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"877ed988a43a73738824b43a51cc21a0"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"0ca7709c916484c95f73e7c1250f00d2"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"43d02ac953f982cbe2501c1297e35e0e"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"fcb6401244a935f45bc0ae66a3e51b28"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"8d516b8b6435bd6206b8af01838e3ac3"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"32e08beddd7d4d0faedb3087cef33ee2"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"56cfb8d65dbe8c6a2a158b7a6602e5f3"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"c2f31aa61995df35b88e87371d5c07c8"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"4f727f91ea992d82effc087c4092c216"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"1521d9a1c722537d7efd147d03b97887"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"be147fae06903a15c05e539aa34b1122"},{url:"/icons/apple-splash-640-1136.jpg",revision:"6af684a9b2114cc15503787f502669ac"},{url:"/icons/apple-splash-750-1334.jpg",revision:"d41a524a681860271602fa8bb6250599"},{url:"/icons/apple-splash-828-1792.jpg",revision:"3cb5f5e1b770206afef1a99a1a391a99"},{url:"/icons/manifest-icon-192.png",revision:"8185e62a9a55b6a413c569f7813ea8fe"},{url:"/icons/manifest-icon-512.png",revision:"0a603d233ecab8da2a37f0d9ba587f6e"},{url:"/manifest.json",revision:"174ff537074bb4f2f2d9642af300dce7"},{url:"/robots.txt",revision:"078992a1fd0dbfaac5c49bc904e84c35"},{url:"/sitemap.xml",revision:"3aa5c45bd51336b82d3332b47512986e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));