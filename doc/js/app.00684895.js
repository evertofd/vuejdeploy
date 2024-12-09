(function(){"use strict";var e={1465:function(e,n,t){var r=t(2856),o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],u=t(845),a={},c=(0,u.A)(a,o,i,!1,null,null,null),s=c.exports,l=t(1594),f=function(){var e=this,n=e._self._c;return n("div",{staticClass:"home"},[n("h1",[e._v("Bienvenido "+e._s(e.$store.state.nombre))]),n("p",[e._v(e._s(e.$store.state.valor))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.numero,expression:"numero"}],attrs:{type:"number"},domProps:{value:e.numero},on:{input:function(n){n.target.composing||(e.numero=n.target.value)}}}),n("button",{on:{click:e.incrementar}},[e._v("Incrementar")])])},m=[],v={name:"HomeView",components:{},data(){return{numero:0}},methods:{incrementar(){const e={numero1:this.numero,numero2:2};this.$store.commit("incrementarValor",e)}},created(){this.$store.dispatch("incrementadorInicial")}},d=v,p=(0,u.A)(d,f,m,!1,null,null,null),b=p.exports;r.Ay.use(l.Ay);const h=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,7384))}],y=new l.Ay({mode:"history",base:"/",routes:h});var g=y,w=t(1910);r.Ay.use(w.Ay);var _=new w.Ay.Store({state:{valor:0,nombre:"everto"},getters:{valorDoble:e=>2*e.valor},mutations:{incrementarValor:(e,n)=>{e.valor=n.numero1},actulizarNombre:e=>{e.nombre="Lissett"}},actions:{incrementadorInicial:e=>{console.log(e),setTimeout((()=>{const n={numero1:10,numero2:20};e.commit("incrementarValor",n)}),5e3)}}});r.Ay.config.productionTip=!1,new r.Ay({router:g,store:_,render:e=>e(s)}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.8b493bf4.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="example-vuex:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var m=function(n,t){a.onerror=a.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkexample_vuex"]=self["webpackChunkexample_vuex"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1465)}));r=t.O(r)})();
//# sourceMappingURL=app.00684895.js.map