(function(e){function t(t){for(var a,c,u=t[0],b=t[1],l=t[2],i=0,d=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var b=r[c];0!==n[b]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},o=[];function c(e){return u.p+"../../backend/static/js/"+({about:"about"}[e]||e)+"."+{about:"9cab4145"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,b=document.createElement("script");b.charset="utf-8",b.timeout=120,u.nc&&b.setAttribute("nonce",u.nc),b.src=c(e);var l=new Error;o=function(t){b.onerror=b.onload=null,clearTimeout(i);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:b})}),12e4);b.onerror=b.onload=o,document.head.appendChild(b)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/../../backend/",u.oe=function(e){throw console.error(e),e};var b=window["webpackJsonp"]=window["webpackJsonp"]||[],l=b.push.bind(b);b.push=t,b=b.slice();for(var i=0;i<b.length;i++)t(b[i]);var s=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3785:function(e,t,r){"use strict";r("4570")},4570:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={id:"nav"},o=Object(a["g"])("Home"),c=Object(a["g"])(" | "),u=Object(a["g"])("About");function b(e,t){var r=Object(a["w"])("router-link"),b=Object(a["w"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",n,[Object(a["h"])(r,{to:"/"},{default:Object(a["B"])((function(){return[o]})),_:1}),c,Object(a["h"])(r,{to:"/about"},{default:Object(a["B"])((function(){return[u]})),_:1})]),Object(a["h"])(b)],64)}r("3785");var l=r("6b0d"),i=r.n(l);const s={},d=i()(s,[["render",b]]);var v=d,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),f=r("cf05"),h=r.n(f),g={class:"home"},j=Object(a["e"])("img",{alt:"Vue logo",src:h.a},null,-1);function m(e,t,r,n,o,c){var u=Object(a["w"])("HelloWorld");return Object(a["q"])(),Object(a["d"])("div",g,[j,Object(a["h"])(u,{msg:"Welcome to Your Vue.js App"})])}var O={class:"hello"},k=Object(a["f"])('<p data-v-ebbc34ee> For a guide and recipes on how to configure / customize this project,<br data-v-ebbc34ee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-cli documentation</a>. </p><h3 data-v-ebbc34ee>Installed CLI Plugins</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-ebbc34ee>babel</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-ebbc34ee>router</a></li></ul><h3 data-v-ebbc34ee>Essential Links</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Core Docs</a></li><li data-v-ebbc34ee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Forum</a></li><li data-v-ebbc34ee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Community Chat</a></li><li data-v-ebbc34ee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-ebbc34ee>Twitter</a></li><li data-v-ebbc34ee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>News</a></li></ul><h3 data-v-ebbc34ee>Ecosystem</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-router</a></li><li data-v-ebbc34ee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vuex</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-ebbc34ee>vue-devtools</a></li><li data-v-ebbc34ee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-loader</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-ebbc34ee>awesome-vue</a></li></ul>',7);function y(e,t,r,n,o,c){return Object(a["q"])(),Object(a["d"])("div",O,[Object(a["e"])("h1",null,Object(a["y"])(r.msg),1),k])}var w={name:"HelloWorld",props:{msg:String}};r("8734");const _=i()(w,[["render",y],["__scopeId","data-v-ebbc34ee"]]);var P=_,x={name:"Home",components:{HelloWorld:P}};const C=i()(x,[["render",m]]);var H=C,S=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],E=Object(p["a"])({history:Object(p["b"])("/../../backend/"),routes:S}),T=E;Object(a["c"])(v).use(T).mount("#app")},8734:function(e,t,r){"use strict";r("902f")},"902f":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"../../backend/static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cc55d686.js.map