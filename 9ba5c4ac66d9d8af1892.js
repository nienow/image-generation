"use strict";(self.webpackChunkimage_generation=self.webpackChunkimage_generation||[]).push([[206],{206:function(e,t,n){n.r(t);var r=n(916);Object.create(null),Object.create(null);const i="_$DX_DELEGATE";function o(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function a(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function s(e,t,n,i){if(void 0===n||i||(i=[]),"function"!=typeof t)return l(e,t,i,n);(0,r.createRenderEffect)((r=>l(e,t(),r,n)),i)}function c(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),r.sharedConfig.registry&&!r.sharedConfig.done&&(r.sharedConfig.done=!0,document.querySelectorAll("[id^=pl-]").forEach((e=>e.remove())));n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(void 0!==i?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function l(e,t,n,i,o){for(r.sharedConfig.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const a=typeof t,s=void 0!==i;if(e=s&&n[0]&&n[0].parentNode||e,"string"===a||"number"===a){if(r.sharedConfig.context)return n;if("number"===a&&(t=t.toString()),s){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=u(e,n,i,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===a){if(r.sharedConfig.context)return n;n=u(e,n,i)}else{if("function"===a)return(0,r.createRenderEffect)((()=>{let r=t();for(;"function"==typeof r;)r=r();n=l(e,r,n,i)})),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(f(a,t,n,o))return(0,r.createRenderEffect)((()=>n=l(e,a,n,i,!0))),()=>n;if(r.sharedConfig.context){if(!a.length)return n;for(let e=0;e<a.length;e++)if(a[e].parentNode)return n=a}if(0===a.length){if(n=u(e,n,i),s)return n}else c?0===n.length?d(e,a,i):function(e,t,n){let r=n.length,i=t.length,o=r,a=0,s=0,c=t[i-1].nextSibling,l=null;for(;a<i||s<o;)if(t[a]!==n[s]){for(;t[i-1]===n[o-1];)i--,o--;if(i===a){const t=o<r?s?n[s-1].nextSibling:n[o-s]:c;for(;s<o;)e.insertBefore(n[s++],t)}else if(o===s)for(;a<i;)l&&l.has(t[a])||t[a].remove(),a++;else if(t[a]===n[o-1]&&n[s]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[s++],t[a++].nextSibling),e.insertBefore(n[--o],r),t[i]=n[o]}else{if(!l){l=new Map;let e=s;for(;e<o;)l.set(n[e],e++)}const r=l.get(t[a]);if(null!=r)if(s<r&&r<o){let c,f=a,d=1;for(;++f<i&&f<o&&null!=(c=l.get(t[f]))&&c===r+d;)d++;if(d>r-s){const i=t[a];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[a++])}else a++;else t[a++].remove()}}else a++,s++}(e,n,a):(n&&u(e),d(e,a));n=a}else if(t instanceof Node){if(r.sharedConfig.context&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=u(e,n,i,t);u(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function f(e,t,n,r){let i=!1;for(let o=0,a=t.length;o<a;o++){let a=t[o],s=n&&n[o];if(a instanceof Node)e.push(a);else if(null==a||!0===a||!1===a);else if(Array.isArray(a))i=f(e,a,s)||i;else if("function"==typeof a)if(r){for(;"function"==typeof a;)a=a();i=f(e,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||i}else e.push(a),i=!0;else{const t=String(a);s&&3===s.nodeType&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function d(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function u(e,t,n,r){if(void 0===n)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(i!==a){const t=a.parentNode===e;r||o?t&&a.remove():t?e.replaceChild(i,a):e.insertBefore(i,n)}else r=!0}}else e.insertBefore(i,n);return[i]}const p=[{name:"Inkpunk",model:"Envvi/Inkpunk-Diffusion",format:e=>`${e} | nvinkpunk | vivid colors`},{name:"Anime",model:"eimiss/EimisAnimeDiffusion_1.0v",format:e=>`${e}`},{name:"Highly Detailed",model:"runwayml/stable-diffusion-v1-5",format:e=>`picture of a ${e}, intricate, elegant, highly detailed, octane render, hyper-realistic, digital painting, artstation, concept art, fantasy art, gaming, smooth, sharp focus, illustration, 3D render`}];var m=n(379),g=n.n(m),h=n(795),v=n.n(h),y=n(569),b=n.n(y),x=n(565),C=n.n(x),S=n(216),A=n.n(S),E=n(589),k=n.n(E),w=n(800),T={};T.styleTagTransform=k(),T.setAttributes=C(),T.insert=b().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=A(),g()(w.Z,T),w.Z&&w.Z.locals&&w.Z.locals;const N=o('<div style="border-top: 1px solid #ccc"><h1>Samples</h1><div style="display: flex; flex-wrap: wrap; justify-content: center"></div></div>'),$=o('<div style="padding: 10px;"><div></div><div></div><img></div>'),I=[{style:"Inkpunk",prompt:"Irish Wolfhound",src:"https://storage.googleapis.com/randombits/images/inkpunk1.jfif"},{style:"Inkpunk",prompt:"Bedroom at dusk",src:"https://storage.googleapis.com/randombits/images/inkpunk2.jfif"},{style:"Anime",prompt:"Girl in coffeeshop, red hair, reading",src:"https://storage.googleapis.com/randombits/images/anime1.jfif"},{style:"Highly Detailed",prompt:"Cat face",src:"https://storage.googleapis.com/randombits/images/detailed1.jfif"}];var j=()=>(()=>{const e=N.cloneNode(!0);return s(e.firstChild.nextSibling,(()=>I.map((e=>(()=>{const t=$.cloneNode(!0),n=t.firstChild,i=n.nextSibling,o=i.nextSibling;return s(n,(()=>e.style)),s(i,(()=>e.prompt)),(0,r.createRenderEffect)((t=>{const n=e.src,r=`Sample generation of ${e.style}, image of ${e.prompt}`;return n!==t._v$&&a(o,"src",t._v$=n),r!==t._v$2&&a(o,"alt",t._v$2=r),t}),{_v$:void 0,_v$2:void 0}),t})())))),e})();const R=o('<div style="text-align: center"><h1>AI Stable Diffusion Image Generator</h1><h3>Optimized for different graphic styles</h3><div><span>Style: </span><select></select></div><div><textarea rows="3" cols="80" placeholder="Enter a prompt..."></textarea></div><div></div><div style="margin: 50px 0;"><div></div></div></div>'),_=o("<option></option>"),L=o("<button>Generate</button>"),M=o('<div><img alt="AI Stable Diffusion Generated Image"></div>'),D={0:"",1:"Generating...",2:"Loading the model. This can take a minute or two...",3:"An error occurred. This happens sometimes. Please try again later.",4:"Rate limit reached. Please try again later."};var P=()=>{const[e,t]=(0,r.createSignal)("A futuristic city"),[n,i]=(0,r.createSignal)(p[0]),[o,c]=(0,r.createSignal)(0),[l,f]=(0,r.createSignal)(null),d=async(t=0)=>{try{c(o()?o():1);const r=await fetch("https://image-gen-proxy-3alsxlvfoq-uc.a.run.app/imageProxy",{method:"POST",body:JSON.stringify({model:n().model,input:n().format(e())}),headers:{"Content-Type":"application/json"}});if(r.ok){const e=await r.blob();f((()=>URL.createObjectURL(e))),c(0)}else if(429===r.status)c(4);else if(503===r.status){const e=await r.json();t<20?(c(2),setTimeout((()=>{d(t+1)}),1e3*e.estimated_time)):c(3)}else c(3)}catch(e){c(3)}},u=e=>{t((()=>e.target.value))},m=e=>{i(p.find((t=>t.name===e.target.value)))};return(()=>{const t=R.cloneNode(!0),i=t.firstChild.nextSibling.nextSibling,c=i.firstChild.nextSibling,f=i.nextSibling,g=f.firstChild,h=f.nextSibling,v=h.nextSibling,y=v.firstChild;return c.addEventListener("change",m),s(c,(()=>p.map((e=>(()=>{const t=_.cloneNode(!0);return s(t,(()=>e.name)),t})())))),g.addEventListener("change",u),s(h,(()=>{const e=(0,r.createMemo)((()=>!!(o()<1||o()>2)));return()=>e()&&(()=>{const e=L.cloneNode(!0);return e.$$click=()=>d(),e})()})()),s(y,(()=>D[o()])),s(v,(()=>{const e=(0,r.createMemo)((()=>!(!l||o())));return()=>e()&&(()=>{const e=M.cloneNode(!0),t=e.firstChild;return(0,r.createRenderEffect)((()=>a(t,"src",l()))),e})()})(),null),s(t,(0,r.createComponent)(j,{}),null),(0,r.createRenderEffect)((()=>c.value=n().name)),(0,r.createRenderEffect)((()=>g.value=e())),t})()};if(function(e,t=window.document){const n=t[i]||(t[i]=new Set);for(let r=0,i=e.length;r<i;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,c))}}(["click"]),!window.customElements.get("randombits-diffusion")){class e extends HTMLElement{connectedCallback(){!function(e,t,n,i={}){let o;(0,r.createRoot)((r=>{o=r,t===document?e():s(t,e(),t.firstChild?null:void 0,n)}),i.owner)}((()=>(0,r.createComponent)(P,{})),this)}}window.customElements.define("randombits-diffusion",e)}},800:function(e,t,n){var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"select,input,textarea{margin:10px;padding:8px 10px;outline:none;border:1px solid #ccc;border-radius:0}button{background-color:#fff;border:1px solid #ccc;padding:10px 20px;cursor:pointer}",""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);r&&a[f[0]]||(void 0!==o&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=o),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),i&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=i):f[4]="".concat(i)),t.push(f))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],f=o[l]||0,d="".concat(l," ").concat(f);o[l]=f+1;var u=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var f=n(o[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}o=c}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);