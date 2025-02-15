(function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={index:0},a={index:0},s=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5250f668"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"507bc7cc"}[e]+".css",a=u.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){i=p[c],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Portfolio/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("f5b1")},"694c":function(e,t,r){"use strict";r("d03c")},a745:function(e,t,r){"use strict";r("e24b")},a9e6:function(e,t,r){"use strict";r("cc11")},cc11:function(e,t,r){},d03c:function(e,t,r){},e24b:function(e,t,r){},f5b1:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),t("Header"),t("div",{staticClass:"main"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1),t("Footer")],1)},a=[],s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"header"},[t("div",{staticClass:"nav-bar"},[t("router-link",{attrs:{to:"/"}},[e._v("About me")]),t("router-link",{attrs:{to:"/game-projects"}},[e._v("Games")]),t("router-link",{attrs:{to:"/other-projects"}},[e._v("Other Projects")]),t("router-link",{attrs:{to:"/resume"}},[e._v("Resume")]),t("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])},c=[],u=n["a"].extend({name:"Header"}),i=u,l=(r("694c"),r("2877")),p=Object(l["a"])(i,s,c,!1,null,"9e0f6018",null),f=p.exports,d=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"footer"},[e._m(0),t("div",{staticClass:"right"},[e._v("Reach me at "),t("a",{attrs:{href:"mailto:my@email.com"}},[e._v("felix.wahl@live.de")]),e._v(" or "),t("router-link",{attrs:{to:"/contact"}},[e._v("through here")])],1)])},h=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"left"},[t("a",{attrs:{href:"https://github.com/schouffy/gamedev-portfolio",target:"blank"}},[e._v("Portfolio")]),e._v(" by schouffy ")])}],m=n["a"].extend({name:"Footer"}),v=m,b=(r("a745"),Object(l["a"])(v,d,h,!1,null,"52b62acb",null)),g=b.exports;class y{}y.preloadImages=e=>{e.forEach(e=>{y.preloadImage(e)})},y.preloadImage=e=>{const t=new Image;t.src=e};var _=n["a"].extend({name:"App",components:{Header:f,Footer:g}});y.preloadImages(["img/projects/project-1-icon.png","img/projects/project-2-icon.png","img/projects/project-3-icon.png"]);var j=_,x=(r("a9e6"),Object(l["a"])(j,o,a,!1,null,null,null)),w=x.exports,P=r("8c4f");n["a"].use(P["a"]);const O=[{path:"/",name:"Root",component:()=>r.e("about").then(r.bind(null,"420b"))},{path:"/resume",name:"Resume",component:()=>r.e("about").then(r.bind(null,"0141"))},{path:"/game-projects",name:"Game Projects",component:()=>r.e("about").then(r.bind(null,"8029"))},{path:"/other-projects",name:"Other Projects",component:()=>r.e("about").then(r.bind(null,"ac64"))},{path:"/contact",name:"Contact",component:()=>r.e("about").then(r.bind(null,"64a3"))},{path:"/404",name:"NotFound",component:()=>r.e("about").then(r.bind(null,"ca5c"))},{path:"*",redirect:"/404"}],k=new P["a"]({routes:O});var C=k;n["a"].config.productionTip=!1,new n["a"]({router:C,render:e=>e(w)}).$mount("#app")}});
//# sourceMappingURL=index.b86fec36.js.map