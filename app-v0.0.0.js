!function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function a(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t,n,a){return e[1]&&a?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](a(t))):n.ctx}function l(e,t,n,a,r,i,o){const l=function(e,t,n,a){if(e[2]&&a){const r=e[2](a(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|r[a];return e}return t.dirty|r}return t.dirty}(t,a,r,i);if(l){const r=s(t,n,a,o);e.p(r,l)}}function c(e){return null==e?"":e}function p(t){return t&&i(t.destroy)?t.destroy:e}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),m=u?e=>requestAnimationFrame(e):e;const y=new Set;function f(e){y.forEach(t=>{t.c(e)||(y.delete(t),t.f())}),0!==y.size&&m(f)}function h(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function U(){return C(" ")}function x(){return C("")}function $(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t,n){t in e?e[t]="boolean"==typeof e[t]&&""===n||n:w(e,t,n)}function S(e,t,n){e.classList[n?"add":"remove"](t)}function T(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}class D{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=b(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)g(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}const B=new Set;let E,F=0;function I(e,t){const n=(e.style.animation||"").split(", "),a=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-a.length;r&&(e.style.animation=a.join(", "),F-=r,F||m(()=>{F||(B.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),B.clear())}))}function _(e){E=e}function A(){const e=function(){if(!E)throw new Error("Function called outside component initialization");return E}();return(t,n)=>{const a=e.$$.callbacks[t];if(a){const r=T(t,n);a.slice().forEach(t=>{t.call(e,r)})}}}const P=[],z=[],R=[],M=[],L=Promise.resolve();let N=!1;function O(e){R.push(e)}let V=!1;const j=new Set;function q(){if(!V){V=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];_(t),H(t.$$)}for(_(null),P.length=0;z.length;)z.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];j.has(t)||(j.add(t),t())}R.length=0}while(P.length);for(;M.length;)M.pop()();N=!1,V=!1,j.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}let W;function K(e,t,n){e.dispatchEvent(T(`${t?"intro":"outro"}${n}`))}const X=new Set;let Y;function G(){Y={r:0,c:[],p:Y}}function J(){Y.r||r(Y.c),Y=Y.p}function Q(e,t){e&&e.i&&(X.delete(e),e.i(t))}function Z(e,t,n,a){if(e&&e.o){if(X.has(e))return;X.add(e),Y.c.push(()=>{X.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}const ee={duration:0};function te(n,a,r){let o,s,l=a(n,r),c=!1,p=0;function u(){o&&I(n,o)}function h(){const{delay:a=0,duration:r=300,easing:i=t,tick:h=e,css:g}=l||ee;g&&(o=function(e,t,n,a,r,i,o,s=0){const l=16.666/a;let c="{\n";for(let e=0;e<=1;e+=l){const a=t+(n-t)*i(e);c+=100*e+`%{${o(a,1-a)}}\n`}const p=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(p)}_${s}`,d=e.ownerDocument;B.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(b("style")).sheet),y=d.__svelte_rules||(d.__svelte_rules={});y[u]||(y[u]=!0,m.insertRule(`@keyframes ${u} ${p}`,m.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?f+", ":""}${u} ${a}ms linear ${r}ms 1 both`,F+=1,u}(n,0,1,r,a,i,g,p++)),h(0,1);const v=d()+a,C=v+r;s&&s.abort(),c=!0,O(()=>K(n,!0,"start")),s=function(e){let t;return 0===y.size&&m(f),{promise:new Promise(n=>{y.add(t={c:e,f:n})}),abort(){y.delete(t)}}}(e=>{if(c){if(e>=C)return h(1,0),K(n,!0,"end"),u(),c=!1;if(e>=v){const t=i((e-v)/r);h(t,1-t)}}return c})}let g=!1;return{start(){g||(I(n),i(l)?(l=l(),(W||(W=Promise.resolve(),W.then(()=>{W=null})),W).then(h)):h())},invalidate(){g=!1},end(){c&&(u(),c=!1)}}}function ne(e,t){e.d(1),t.delete(e.key)}function ae(e){e&&e.c()}function re(e,t,a,o){const{fragment:s,on_mount:l,on_destroy:c,after_update:p}=e.$$;s&&s.m(t,a),o||O(()=>{const t=l.map(n).filter(i);c?c.push(...t):r(t),e.$$.on_mount=[]}),p.forEach(O)}function ie(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(P.push(e),N||(N=!0,L.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(t,n,i,o,s,l,c=[-1]){const p=E;_(t);const u=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:n.context||[]),callbacks:a(),dirty:c,skip_bound:!1};let d=!1;if(u.ctx=i?i(t,n.props||{},(e,n,...a)=>{const r=a.length?a[0]:n;return u.ctx&&s(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),d&&oe(t,e)),n}):[],u.update(),d=!0,r(u.before_update),u.fragment=!!o&&o(u.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);u.fragment&&u.fragment.l(e),e.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&Q(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),q()}_(p)}class le{$destroy(){ie(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce={};if("undefined"!=typeof window){const e="pointer-start",t="pointer-end",n={bubbles:!0},a=void 0!==window.ontouchstart,r=a?{down:"touchstart",up:"touchend"}:{down:"mousedown",up:"mouseup"};window.addEventListener(r.down,t=>{if(!1===a&&0!==t.button)return;const r=new CustomEvent(e,n);t.identifier=t.identifier??-1,r.changedTouches=a?t.changedTouches:[t],t.target.dispatchEvent(r)},{capture:!0}),window.addEventListener(r.up,e=>{if(!1===a&&0!==e.button)return;const r=new CustomEvent(t,n);e.identifier=e.identifier??-1,r.changedTouches=a?e.changedTouches:[e],e.target.dispatchEvent(r)},{capture:!0}),window.addEventListener(e,e=>{const t=Date.now();for(const n of e.changedTouches)ce[n.identifier]={timestamp:t,touch:n}},{capture:!0}),window.addEventListener(t,e=>{const t=Date.now();for(const a of e.changedTouches){const e=ce[a.identifier];if(ce[a.identifier]=null,null==e)return;const r=t-e.timestamp;if(Math.sqrt((e.touch.clientX-a.clientX)**2+(e.touch.clientY-a.clientY)**2)>30||r>500)return;const i=new CustomEvent("tap",n);i.changedTouches=[a],a.target.dispatchEvent(i)}},{capture:!0})}function pe(e){let t,n,a,r,i;var o=e[0];o&&(t=new o({}));var s=e[1];return s&&(a=new s({})),{c(){t&&ae(t.$$.fragment),n=U(),a&&ae(a.$$.fragment),r=x()},m(e,o){t&&re(t,e,o),g(e,n,o),a&&re(a,e,o),g(e,r,o),i=!0},p(e,[i]){if(o!==(o=e[0])){if(t){G();const e=t;Z(e.$$.fragment,1,0,()=>{ie(e,1)}),J()}o?(t=new o({}),ae(t.$$.fragment),Q(t.$$.fragment,1),re(t,n.parentNode,n)):t=null}if(s!==(s=e[1])){if(a){G();const e=a;Z(e.$$.fragment,1,0,()=>{ie(e,1)}),J()}s?(a=new s({}),ae(a.$$.fragment),Q(a.$$.fragment,1),re(a,r.parentNode,r)):a=null}},i(e){i||(t&&Q(t.$$.fragment,e),a&&Q(a.$$.fragment,e),i=!0)},o(e){t&&Z(t.$$.fragment,e),a&&Z(a.$$.fragment,e),i=!1},d(e){t&&ie(t,e),e&&v(n),e&&v(r),a&&ie(a,e)}}}function ue(e,t,n){let{theme:a=null}=t,{baseline:r=null}=t;return e.$$set=e=>{"theme"in e&&n(0,a=e.theme),"baseline"in e&&n(1,r=e.baseline)},[a,r]}class de extends le{constructor(e){super(),se(this,e,ue,pe,o,{theme:0,baseline:1})}}function me(t){let n,a,r;return{c(){n=b("link"),a=b("link"),r=b("link"),w(n,"href","https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"),w(n,"rel","stylesheet"),w(n,"type","text/css"),w(a,"href","https://fonts.googleapis.com/css?family=Inconsolata:300,400,500,700"),w(a,"rel","stylesheet"),w(a,"type","text/css"),w(r,"href","https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"),w(r,"rel","stylesheet")},m(e,t){h(document.head,n),h(document.head,a),h(document.head,r)},p:e,i:e,o:e,d(e){v(n),v(a),v(r)}}}class ye extends le{constructor(e){var t;super(),document.getElementById("svelte-74u6mc-style")||((t=b("style")).id="svelte-74u6mc-style",t.textContent="*{box-sizing:border-box}html{margin:0px;padding:0px;width:100%;height:100%}body{margin:0px;padding:0px;width:100%;height:100%;-webkit-tap-highlight-color:transparent;font-family:var(--font);background-color:var(--background);color:var(--text-normal);font-size:var(--text-size);--button-default-fill:#aaaaaa;--button-default-text:var(--text-dark);--button-primary:var(--primary);--button-primary-text:var(--text-dark);--button-primary-ripple:var(--primary-ripple);--button-secondary:var(--secondary);--button-secondary-text:var(--text-dark);--button-secondary-ripple:var(--secondary-ripple);--button-danger:var(--danger);--button-danger-text:var(--text-dark);--button-danger-ripple:var(--danger-ripple);--button-filled-ripple:var(--ripple-invert);--card-background:var(--background-layer);--card-border:var(--layer-border-width) solid var(--layer-border-color);--control-border:var(--text-secondary);--control-border-focus:var(--primary);--control-border-error:var(--danger);--title-bar-background:var(--primary);--title-bar-text:var(--text-invert)}",h(document.head,t)),se(this,e,null,me,o,{})}}const fe=(e,...t)=>`<style>\n${e.reduce((e,n,a)=>[...e,n,t[a]??""],[]).join("")}\n</style>`;fe.default=fe;var he=fe;function ge(t){let n,a;return{c(){a=x(),n=new D(a)},m(e,r){n.m(t[0],e,r),g(e,a,r)},p:e,i:e,o:e,d(e){e&&v(a),e&&n.d()}}}function ve(e){return[he`
        body {
            --font: Inconsolata;
            --background: #030303;
            --background-layer: #080808;
            --layer-border-width: 1px;
            --layer-border-color: var(--text-normal);

            --ripple-dark: #00000060;
            --ripple-light: #FFFFFF60;
            --text-light: white;
            --text-dark: black;

            --primary: #00aaff;
            --primary-light: #79c0f7;
            --primary-ripple: #00aaff60;
            --secondary: #2fbc2f;
            --secondary-ripple: #2fbc2f60;
            --danger: #df5348;
            --danger-ripple: #df534860;

            --text-normal: var(--text-light);
            --text-secondary: #a0a0a0;
            --text-invert: var(--text-dark);

            --text-size: 14px;
            --text-size-title: 18px;
            --text-size-header: 16px;
            --text-size-info: 13px;
            --text-size-secondary: 12px;

            --ripple-normal: var(--ripple-light);
            --ripple-invert: var(--ripple-dark);
        }
    `]}class be extends le{constructor(e){super(),se(this,e,ve,ge,o,{})}}const Ce=e=>!1===Array.isArray(e)?e:null===e[0]||void 0===e[0]?null:e.join(""),Ue=(e,t,n)=>{const a=new Set([...Object.keys(t),...Object.keys(n)]);for(const r of a){const a="--"+r,i=Ce(t[r]),o=Ce(n[r]);null==o&&e.style.removeProperty(a),i!==o&&e.style.setProperty(a,o)}};var xe=(e,t)=>{let n=t;return Ue(e,{},n),{update(t){Ue(e,n,t),n=t}}};function $e(e,t,n){const a=e.slice();return a[8]=t[n],a}function we(t,n){let a,r,o,s,l;return{key:t,first:null,c(){a=b("ripple"),w(a,"class","svelte-acwzgw"),this.first=a},m(e,t){g(e,a,t),s||(l=p(r=xe.call(null,a,n[4](n[8],n[0]))),s=!0)},p(e,t){n=e,r&&i(r.update)&&3&t&&r.update.call(null,n[4](n[8],n[0]))},i(e){o||O(()=>{o=te(a,Te,{}),o.start()})},o:e,d(e){e&&v(a),s=!1,l()}}}function ke(t){let n,a,r,i=[],o=new Map,s=t[1];const l=e=>e[8].id;for(let e=0;e<s.length;e+=1){let n=$e(t,s,e),a=l(n);o.set(a,i[e]=we(a,n))}return{c(){n=b("ripple-wrapper");for(let e=0;e<i.length;e+=1)i[e].c();k(n,"class","svelte-acwzgw")},m(e,o){g(e,n,o);for(let e=0;e<i.length;e+=1)i[e].m(n,null);t[6](n),a||(r=$(n,"pointer-start",t[3]),a=!0)},p(e,[t]){19&t&&(s=e[1],i=function(e,t,n,a,r,i,o,s,l,c,p,u){let d=e.length,m=i.length,y=d;const f={};for(;y--;)f[e[y].key]=y;const h=[],g=new Map,v=new Map;for(y=m;y--;){const e=u(r,i,y),s=n(e);let l=o.get(s);l?a&&l.p(e,t):(l=c(s,e),l.c()),g.set(s,h[y]=l),s in f&&v.set(s,Math.abs(y-f[s]))}const b=new Set,C=new Set;function U(e){Q(e,1),e.m(s,p),o.set(e.key,e),p=e.first,m--}for(;d&&m;){const t=h[m-1],n=e[d-1],a=t.key,r=n.key;t===n?(p=t.first,d--,m--):g.has(r)?!o.has(a)||b.has(a)?U(t):C.has(r)?d--:v.get(a)>v.get(r)?(C.add(a),U(t)):(b.add(r),d--):(l(n,o),d--)}for(;d--;){const t=e[d];g.has(t.key)||l(t,o)}for(;m;)U(h[m-1]);return h}(i,t,l,1,e,s,o,n,ne,we,null,$e))},i(e){for(let e=0;e<s.length;e+=1)Q(i[e])},o:e,d(e){e&&v(n);for(let e=0;e<i.length;e+=1)i[e].d();t[6](null),a=!1,r()}}}const Se=e=>{const{target:t,clientX:n,clientY:a}=e,r=t.getBoundingClientRect();return{x:n-r.left,y:a-r.top}},Te=(e,t)=>({delay:0,duration:500,css:(e,t)=>`\n                transform: translate3d(-50%, -50%, 0) scale(${1-t**1.3});\n                opacity: ${t**1.3};\n            `});function De(e,t,n){let{color:a=null}=t,{disabled:r=!1}=t,i=[],o=null;return e.$$set=e=>{"color"in e&&n(0,a=e.color),"disabled"in e&&n(5,r=e.disabled)},[a,i,o,e=>{if(!0!==r)for(const t of e.changedTouches){const{x:e,y:a}=Se(t),r=2*Math.max(o.offsetWidth,o.offsetHeight),s={id:Date.now(),x:e,y:a,size:r};n(1,i=[...i,s]),setTimeout(()=>n(1,i=i.filter(e=>e!==s)),500)}},(e,t)=>({x:[e.x,"px"],y:[e.y,"px"],size:[e.size,"px"],"ripple-color":t}),r,function(e){z[e?"unshift":"push"](()=>{o=e,n(2,o)})}]}class Be extends le{constructor(e){var t;super(),document.getElementById("svelte-acwzgw-style")||((t=b("style")).id="svelte-acwzgw-style",t.textContent="ripple-wrapper.svelte-acwzgw{position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden}ripple.svelte-acwzgw{width:var(--size);height:var(--size);border-radius:50%;background-color:var(--ripple-color, var(--ripple-normal));position:absolute;left:var(--x);top:var(--y);transform:translate3d(-50%, -50%, 0);pointer-events:none;box-shadow:0px 0px 2px rgba(0, 0, 0, 0.25)}",h(document.head,t)),se(this,e,De,ke,o,{color:0,disabled:5})}}function Ee(e){let t,n,a,o,c,u,d,m;const y=e[9].default,f=function(e,t,n,a){if(e){const r=s(e,t,n,a);return e[0](r)}}(y,e,e[8],null);return a=new Be({props:{disabled:e[2]}}),{c(){t=b("doric-button"),f&&f.c(),n=U(),ae(a.$$.fragment),k(t,"class",o=e[0]+" "+e[1]+" "+e[5]+" svelte-k4pik7"),S(t,"disabled",e[2]),S(t,"round",e[3]),S(t,"fab",e[4])},m(r,i){g(r,t,i),f&&f.m(t,null),h(t,n),re(a,t,null),u=!0,d||(m=[$(t,"tap",e[7]),p(c=xe.call(null,t,e[6]))],d=!0)},p(e,[n]){f&&f.p&&(!u||256&n)&&l(f,y,e,e[8],n,null,null);const r={};4&n&&(r.disabled=e[2]),a.$set(r),(!u||35&n&&o!==(o=e[0]+" "+e[1]+" "+e[5]+" svelte-k4pik7"))&&k(t,"class",o),c&&i(c.update)&&64&n&&c.update.call(null,e[6]),39&n&&S(t,"disabled",e[2]),43&n&&S(t,"round",e[3]),51&n&&S(t,"fab",e[4])},i(e){u||(Q(f,e),Q(a.$$.fragment,e),u=!0)},o(e){Z(f,e),Z(a.$$.fragment,e),u=!1},d(e){e&&v(t),f&&f.d(e),ie(a),d=!1,r(m)}}}function Fe(e,t,n){let a,{$$slots:r={},$$scope:i}=t,{color:o="default"}=t,{variant:s="normal"}=t,{disabled:l=!1}=t,{round:c}=t,{fab:p}=t,{class:u=""}=t;const d=A();return e.$$set=e=>{"color"in e&&n(0,o=e.color),"variant"in e&&n(1,s=e.variant),"disabled"in e&&n(2,l=e.disabled),"round"in e&&n(3,c=e.round),"fab"in e&&n(4,p=e.fab),"class"in e&&n(5,u=e.class),"$$scope"in e&&n(8,i=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&n(6,a={"button-round-size":c})},[o,s,l,c,p,u,a,e=>{!0!==l&&setTimeout(()=>d("tap",e),0)},i,r]}class Ie extends le{constructor(e){var t;super(),document.getElementById("svelte-k4pik7-style")||((t=b("style")).id="svelte-k4pik7-style",t.textContent="doric-button.svelte-k4pik7{position:relative;padding:8px 16px;border-radius:4px;user-select:none;cursor:pointer;overflow:hidden;box-sizing:border-box;vertical-align:middle;display:inline-flex;justify-content:center;align-items:center;z-index:+1;font-weight:500;--button-color:var(--text-normal);--fill-color:var(--button-default-fill);--text-color:var(--button-default-text);color:var(--button-color)}.round.svelte-k4pik7{min-width:var(--button-round-size);height:var(--button-round-size);padding:8px;border-radius:var(--button-round-size)}.fab.svelte-k4pik7{width:var(--button-round-size);padding:0px}.disabled.svelte-k4pik7{filter:contrast(50%)}.primary.svelte-k4pik7{--button-color:var(--button-primary);--fill-color:var(--button-primary);--ripple-color:var(--button-primary-ripple);--text-color:var(--button-primary-text)}.secondary.svelte-k4pik7{--button-color:var(--button-secondary);--fill-color:var(--button-secondary);--ripple-color:var(--button-secondary-ripple);--text-color:var(--button-secondary-text)}.danger.svelte-k4pik7{--button-color:var(--button-danger);--fill-color:var(--button-danger);--ripple-color:var(--button-danger-ripple);--text-color:var(--button-danger-text)}.fill.svelte-k4pik7{--ripple-color:var(--button-filled-ripple);background-color:var(--fill-color);color:var(--text-color)}.outline.svelte-k4pik7{border:1px solid var(--button-color);color:var(--button-color)}",h(document.head,t)),se(this,e,Fe,Ee,o,{color:0,variant:1,disabled:2,round:3,fab:4,class:5})}}function _e(t){let n,a,r,o,s,l;return{c(){n=b("doric-icon"),a=C(t[0]),k(n,"class",r=c(t[2])+" svelte-ckwsqd"),S(n,"material-icons",!t[1]),S(n,"material-icons-outlined",t[1])},m(e,r){g(e,n,r),h(n,a),s||(l=p(o=xe.call(null,n,t[3])),s=!0)},p(e,[t]){1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(a,e[0]),4&t&&r!==(r=c(e[2])+" svelte-ckwsqd")&&k(n,"class",r),o&&i(o.update)&&8&t&&o.update.call(null,e[3]),6&t&&S(n,"material-icons",!e[1]),6&t&&S(n,"material-icons-outlined",e[1])},i:e,o:e,d(e){e&&v(n),s=!1,l()}}}function Ae(e,t,n){let a,{name:r}=t,{outlined:i=!1}=t,{size:o}=t,{class:s}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"outlined"in e&&n(1,i=e.outlined),"size"in e&&n(4,o=e.size),"class"in e&&n(2,s=e.class)},e.$$.update=()=>{16&e.$$.dirty&&n(3,a={"icon-font-size":o})},[r,i,s,a,o]}class Pe extends le{constructor(e){var t;super(),document.getElementById("svelte-ckwsqd-style")||((t=b("style")).id="svelte-ckwsqd-style",t.textContent="doric-icon.svelte-ckwsqd{margin:0px 4px}",h(document.head,t)),se(this,e,Ae,_e,o,{name:0,outlined:1,size:4,class:2})}}var ze=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e){var t;t=function(){var e={172351395:{name:"EBML",type:"Container"},646:{name:"EBMLVersion",type:"Uint"},759:{name:"EBMLReadVersion",type:"Uint"},754:{name:"EBMLMaxIDLength",type:"Uint"},755:{name:"EBMLMaxSizeLength",type:"Uint"},642:{name:"DocType",type:"String"},647:{name:"DocTypeVersion",type:"Uint"},645:{name:"DocTypeReadVersion",type:"Uint"},108:{name:"Void",type:"Binary"},63:{name:"CRC-32",type:"Binary"},190023271:{name:"SignatureSlot",type:"Container"},16010:{name:"SignatureAlgo",type:"Uint"},16026:{name:"SignatureHash",type:"Uint"},16037:{name:"SignaturePublicKey",type:"Binary"},16053:{name:"Signature",type:"Binary"},15963:{name:"SignatureElements",type:"Container"},15995:{name:"SignatureElementList",type:"Container"},9522:{name:"SignedElement",type:"Binary"},139690087:{name:"Segment",type:"Container"},21863284:{name:"SeekHead",type:"Container"},3515:{name:"Seek",type:"Container"},5035:{name:"SeekID",type:"Binary"},5036:{name:"SeekPosition",type:"Uint"},88713574:{name:"Info",type:"Container"},13220:{name:"SegmentUID",type:"Binary"},13188:{name:"SegmentFilename",type:"String"},1882403:{name:"PrevUID",type:"Binary"},1868715:{name:"PrevFilename",type:"String"},2013475:{name:"NextUID",type:"Binary"},1999803:{name:"NextFilename",type:"String"},1092:{name:"SegmentFamily",type:"Binary"},10532:{name:"ChapterTranslate",type:"Container"},10748:{name:"ChapterTranslateEditionUID",type:"Uint"},10687:{name:"ChapterTranslateCodec",type:"Uint"},10661:{name:"ChapterTranslateID",type:"Binary"},710577:{name:"TimecodeScale",type:"Uint"},1161:{name:"Duration",type:"Float"},1121:{name:"DateUTC",type:"Date"},15273:{name:"Title",type:"String"},3456:{name:"MuxingApp",type:"String"},5953:{name:"WritingApp",type:"String"},103:{name:"Timecode",type:"Uint"},6228:{name:"SilentTracks",type:"Container"},6359:{name:"SilentTrackNumber",type:"Uint"},39:{name:"Position",type:"Uint"},43:{name:"PrevSize",type:"Uint"},35:{name:"SimpleBlock",type:"Binary"},32:{name:"BlockGroup",type:"Container"},33:{name:"Block",type:"Binary"},34:{name:"BlockVirtual",type:"Binary"},13729:{name:"BlockAdditions",type:"Container"},38:{name:"BlockMore",type:"Container"},110:{name:"BlockAddID",type:"Uint"},37:{name:"BlockAdditional",type:"Binary"},27:{name:"BlockDuration",type:"Uint"},122:{name:"ReferencePriority",type:"Uint"},123:{name:"ReferenceBlock",type:"Int"},125:{name:"ReferenceVirtual",type:"Int"},36:{name:"CodecState",type:"Binary"},13730:{name:"DiscardPadding",type:"Int"},14:{name:"Slices",type:"Container"},104:{name:"TimeSlice",type:"Container"},76:{name:"LaceNumber",type:"Uint"},77:{name:"FrameNumber",type:"Uint"},75:{name:"BlockAdditionID",type:"Uint"},78:{name:"Delay",type:"Uint"},79:{name:"SliceDuration",type:"Uint"},72:{name:"ReferenceFrame",type:"Container"},73:{name:"ReferenceOffset",type:"Uint"},74:{name:"ReferenceTimeCode",type:"Uint"},47:{name:"EncryptedBlock",type:"Binary"},106212971:{name:"Tracks",type:"Container"},46:{name:"TrackEntry",type:"Container"},87:{name:"TrackNumber",type:"Uint"},13253:{name:"TrackUID",type:"Uint"},3:{name:"TrackType",type:"Uint"},57:{name:"FlagEnabled",type:"Uint"},8:{name:"FlagDefault",type:"Uint"},5546:{name:"FlagForced",type:"Uint"},28:{name:"FlagLacing",type:"Uint"},11751:{name:"MinCache",type:"Uint"},11768:{name:"MaxCache",type:"Uint"},254851:{name:"DefaultDuration",type:"Uint"},216698:{name:"DefaultDecodedFieldDuration",type:"Uint"},209231:{name:"TrackTimecodeScale",type:"Float"},4991:{name:"TrackOffset",type:"Int"},5614:{name:"MaxBlockAdditionID",type:"Uint"},4974:{name:"Name",type:"String"},177564:{name:"Language",type:"String"},6:{name:"CodecID",type:"String"},9122:{name:"CodecPrivate",type:"Binary"},362120:{name:"CodecName",type:"String"},13382:{name:"AttachmentLink",type:"Uint"},1742487:{name:"CodecSettings",type:"String"},1785920:{name:"CodecInfoURL",type:"String"},438848:{name:"CodecDownloadURL",type:"String"},42:{name:"CodecDecodeAll",type:"Uint"},12203:{name:"TrackOverlay",type:"Uint"},5802:{name:"CodecDelay",type:"Uint"},5819:{name:"SeekPreRoll",type:"Uint"},9764:{name:"TrackTranslate",type:"Container"},9980:{name:"TrackTranslateEditionUID",type:"Uint"},9919:{name:"TrackTranslateCodec",type:"Uint"},9893:{name:"TrackTranslateTrackID",type:"Binary"},96:{name:"Video",type:"Container"},26:{name:"FlagInterlaced",type:"Uint"},5048:{name:"StereoMode",type:"Uint"},5056:{name:"AlphaMode",type:"Uint"},5049:{name:"OldStereoMode",type:"Uint"},48:{name:"PixelWidth",type:"Uint"},58:{name:"PixelHeight",type:"Uint"},5290:{name:"PixelCropBottom",type:"Uint"},5307:{name:"PixelCropTop",type:"Uint"},5324:{name:"PixelCropLeft",type:"Uint"},5341:{name:"PixelCropRight",type:"Uint"},5296:{name:"DisplayWidth",type:"Uint"},5306:{name:"DisplayHeight",type:"Uint"},5298:{name:"DisplayUnit",type:"Uint"},5299:{name:"AspectRatioType",type:"Uint"},963876:{name:"ColourSpace",type:"Binary"},1029411:{name:"GammaValue",type:"Float"},230371:{name:"FrameRate",type:"Float"},97:{name:"Audio",type:"Container"},53:{name:"SamplingFrequency",type:"Float"},14517:{name:"OutputSamplingFrequency",type:"Float"},31:{name:"Channels",type:"Uint"},15739:{name:"ChannelPositions",type:"Binary"},8804:{name:"BitDepth",type:"Uint"},98:{name:"TrackOperation",type:"Container"},99:{name:"TrackCombinePlanes",type:"Container"},100:{name:"TrackPlane",type:"Container"},101:{name:"TrackPlaneUID",type:"Uint"},102:{name:"TrackPlaneType",type:"Uint"},105:{name:"TrackJoinBlocks",type:"Container"},109:{name:"TrackJoinUID",type:"Uint"},64:{name:"TrickTrackUID",type:"Uint"},65:{name:"TrickTrackSegmentUID",type:"Binary"},70:{name:"TrickTrackFlag",type:"Uint"},71:{name:"TrickMasterTrackUID",type:"Uint"},68:{name:"TrickMasterTrackSegmentUID",type:"Binary"},11648:{name:"ContentEncodings",type:"Container"},8768:{name:"ContentEncoding",type:"Container"},4145:{name:"ContentEncodingOrder",type:"Uint"},4146:{name:"ContentEncodingScope",type:"Uint"},4147:{name:"ContentEncodingType",type:"Uint"},4148:{name:"ContentCompression",type:"Container"},596:{name:"ContentCompAlgo",type:"Uint"},597:{name:"ContentCompSettings",type:"Binary"},4149:{name:"ContentEncryption",type:"Container"},2017:{name:"ContentEncAlgo",type:"Uint"},2018:{name:"ContentEncKeyID",type:"Binary"},2019:{name:"ContentSignature",type:"Binary"},2020:{name:"ContentSigKeyID",type:"Binary"},2021:{name:"ContentSigAlgo",type:"Uint"},2022:{name:"ContentSigHashAlgo",type:"Uint"},206814059:{name:"Cues",type:"Container"},59:{name:"CuePoint",type:"Container"},51:{name:"CueTime",type:"Uint"},55:{name:"CueTrackPositions",type:"Container"},119:{name:"CueTrack",type:"Uint"},113:{name:"CueClusterPosition",type:"Uint"},112:{name:"CueRelativePosition",type:"Uint"},50:{name:"CueDuration",type:"Uint"},4984:{name:"CueBlockNumber",type:"Uint"},106:{name:"CueCodecState",type:"Uint"},91:{name:"CueReference",type:"Container"},22:{name:"CueRefTime",type:"Uint"},23:{name:"CueRefCluster",type:"Uint"},4959:{name:"CueRefNumber",type:"Uint"},107:{name:"CueRefCodecState",type:"Uint"},155296873:{name:"Attachments",type:"Container"},8615:{name:"AttachedFile",type:"Container"},1662:{name:"FileDescription",type:"String"},1646:{name:"FileName",type:"String"},1632:{name:"FileMimeType",type:"String"},1628:{name:"FileData",type:"Binary"},1710:{name:"FileUID",type:"Uint"},1653:{name:"FileReferral",type:"Binary"},1633:{name:"FileUsedStartTime",type:"Uint"},1634:{name:"FileUsedEndTime",type:"Uint"},4433776:{name:"Chapters",type:"Container"},1465:{name:"EditionEntry",type:"Container"},1468:{name:"EditionUID",type:"Uint"},1469:{name:"EditionFlagHidden",type:"Uint"},1499:{name:"EditionFlagDefault",type:"Uint"},1501:{name:"EditionFlagOrdered",type:"Uint"},54:{name:"ChapterAtom",type:"Container"},13252:{name:"ChapterUID",type:"Uint"},5716:{name:"ChapterStringUID",type:"String"},17:{name:"ChapterTimeStart",type:"Uint"},18:{name:"ChapterTimeEnd",type:"Uint"},24:{name:"ChapterFlagHidden",type:"Uint"},1432:{name:"ChapterFlagEnabled",type:"Uint"},11879:{name:"ChapterSegmentUID",type:"Binary"},11964:{name:"ChapterSegmentEditionUID",type:"Uint"},9155:{name:"ChapterPhysicalEquiv",type:"Uint"},15:{name:"ChapterTrack",type:"Container"},9:{name:"ChapterTrackNumber",type:"Uint"},0:{name:"ChapterDisplay",type:"Container"},5:{name:"ChapString",type:"String"},892:{name:"ChapLanguage",type:"String"},894:{name:"ChapCountry",type:"String"},10564:{name:"ChapProcess",type:"Container"},10581:{name:"ChapProcessCodecID",type:"Uint"},1293:{name:"ChapProcessPrivate",type:"Binary"},10513:{name:"ChapProcessCommand",type:"Container"},10530:{name:"ChapProcessTime",type:"Uint"},10547:{name:"ChapProcessData",type:"Binary"},39109479:{name:"Tags",type:"Container"},13171:{name:"Tag",type:"Container"},9152:{name:"Targets",type:"Container"},10442:{name:"TargetTypeValue",type:"Uint"},9162:{name:"TargetType",type:"String"},9157:{name:"TagTrackUID",type:"Uint"},9161:{name:"TagEditionUID",type:"Uint"},9156:{name:"TagChapterUID",type:"Uint"},9158:{name:"TagAttachmentUID",type:"Uint"},10184:{name:"SimpleTag",type:"Container"},1443:{name:"TagName",type:"String"},1146:{name:"TagLanguage",type:"String"},1156:{name:"TagDefault",type:"Uint"},1159:{name:"TagString",type:"String"},1157:{name:"TagBinary",type:"Binary"}};function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e}function n(e,t){this.name=e||"Unknown",this.type=t||"Unknown"}function a(e,t){n.call(this,e,t||"Uint")}function r(e){return e.length%2==1?"0"+e:e}function i(e,t){n.call(this,e,t||"Float")}function o(e,t){n.call(this,e,t||"Container")}function s(e){o.call(this,"File","File"),this.setSource(e)}return n.prototype.updateBySource=function(){},n.prototype.setSource=function(e){this.source=e,this.updateBySource()},n.prototype.updateByData=function(){},n.prototype.setData=function(e){this.data=e,this.updateByData()},t(a,n),a.prototype.updateBySource=function(){this.data="";for(var e=0;e<this.source.length;e++){var t=this.source[e].toString(16);this.data+=r(t)}},a.prototype.updateByData=function(){var e=this.data.length/2;this.source=new Uint8Array(e);for(var t=0;t<e;t++){var n=this.data.substr(2*t,2);this.source[t]=parseInt(n,16)}},a.prototype.getValue=function(){return parseInt(this.data,16)},a.prototype.setValue=function(e){this.setData(r(e.toString(16)))},t(i,n),i.prototype.getFloatArrayType=function(){return this.source&&4===this.source.length?Float32Array:Float64Array},i.prototype.updateBySource=function(){var e=this.source.reverse(),t=new(this.getFloatArrayType())(e.buffer);this.data=t[0]},i.prototype.updateByData=function(){var e=new(this.getFloatArrayType())([this.data]),t=new Uint8Array(e.buffer);this.source=t.reverse()},i.prototype.getValue=function(){return this.data},i.prototype.setValue=function(e){this.setData(e)},t(o,n),o.prototype.readByte=function(){return this.source[this.offset++]},o.prototype.readUint=function(){for(var e=this.readByte(),t=8-e.toString(2).length,n=e-(1<<7-t),a=0;a<t;a++)n*=256,n+=this.readByte();return n},o.prototype.updateBySource=function(){for(this.data=[],this.offset=0;this.offset<this.source.length;this.offset=s){var t=this.readUint(),r=this.readUint(),s=Math.min(this.offset+r,this.source.length),l=this.source.slice(this.offset,s),c=e[t]||{name:"Unknown",type:"Unknown"},p=n;switch(c.type){case"Container":p=o;break;case"Uint":p=a;break;case"Float":p=i}var u=new p(c.name,c.type);u.setSource(l),this.data.push({id:t,idHex:t.toString(16),data:u})}},o.prototype.writeUint=function(e,t){for(var n=1,a=128;e>=a&&n<8;n++,a*=128);if(!t)for(var r=a+e,i=n-1;i>=0;i--){var o=r%256;this.source[this.offset+i]=o,r=(r-o)/256}this.offset+=n},o.prototype.writeSections=function(e){this.offset=0;for(var t=0;t<this.data.length;t++){var n=this.data[t],a=n.data.source,r=a.length;this.writeUint(n.id,e),this.writeUint(r,e),e||this.source.set(a,this.offset),this.offset+=r}return this.offset},o.prototype.updateByData=function(){var e=this.writeSections("draft");this.source=new Uint8Array(e),this.writeSections()},o.prototype.getSectionById=function(e){for(var t=0;t<this.data.length;t++){var n=this.data[t];if(n.id===e)return n.data}return null},t(s,o),s.prototype.fixDuration=function(e){var t=this.getSectionById(139690087);if(!t)return console.log("[fix-webm-duration] Segment section is missing"),!1;var n=t.getSectionById(88713574);if(!n)return console.log("[fix-webm-duration] Info section is missing"),!1;var a=n.getSectionById(710577);if(!a)return console.log("[fix-webm-duration] TimecodeScale section is missing"),!1;var r=n.getSectionById(1161);if(r){if(!(r.getValue()<=0))return console.log("[fix-webm-duration] Duration section is present"),!1;console.log("[fix-webm-duration] Duration section is present, but the value is empty"),r.setValue(e)}else console.log("[fix-webm-duration] Duration section is missing"),(r=new i("Duration","Float")).setValue(e),n.data.push({id:1161,data:r});return a.setValue(1e6),n.updateByData(),t.updateByData(),this.updateByData(),!0},s.prototype.toBlob=function(){return new Blob([this.source.buffer],{type:"video/webm"})},function(e,t,n){try{var a=new FileReader;a.onloadend=function(){try{var r=new s(new Uint8Array(a.result));r.fixDuration(t)&&(e=r.toBlob())}catch(e){}n(e)},a.readAsArrayBuffer(e)}catch(t){n(e)}}},e.exports?e.exports=t():window.ysFixWebmDuration=t()}));function Re(t){let n,a,r;return n=new Pe({props:{name:"videocam"}}),{c(){ae(n.$$.fragment),a=C("\r\n            Record")},m(e,t){re(n,e,t),g(e,a,t),r=!0},p:e,i(e){r||(Q(n.$$.fragment,e),r=!0)},o(e){Z(n.$$.fragment,e),r=!1},d(e){ie(n,e),e&&v(a)}}}function Me(e){let t,n,a,r,i;return n=new Pe({props:{name:"file_download"}}),{c(){t=b("a"),ae(n.$$.fragment),a=C("\r\n                Download"),w(t,"href",e[1]),w(t,"download",r="recording-"+e[2]+".webm"),w(t,"class","svelte-1ai18fs")},m(e,r){g(e,t,r),re(n,t,null),h(t,a),i=!0},p(e,n){(!i||2&n)&&w(t,"href",e[1]),(!i||4&n&&r!==(r="recording-"+e[2]+".webm"))&&w(t,"download",r)},i(e){i||(Q(n.$$.fragment,e),i=!0)},o(e){Z(n.$$.fragment,e),i=!1},d(e){e&&v(t),ie(n)}}}function Le(e){let t,n,a,r,i,o,s,l;a=new Ie({props:{$$slots:{default:[Re]},$$scope:{ctx:e}}}),a.$on("tap",e[3]);let c=null!==e[1]&&Me(e);return{c(){t=b("comp-layout"),n=b("menu-area"),ae(a.$$.fragment),r=U(),c&&c.c(),i=U(),o=b("video-area"),s=b("video"),k(n,"class","svelte-1ai18fs"),s.controls=!0,w(s,"class","svelte-1ai18fs"),k(o,"class","svelte-1ai18fs"),S(o,"hide",null===e[1]),k(t,"class","svelte-1ai18fs")},m(p,u){g(p,t,u),h(t,n),re(a,n,null),h(n,r),c&&c.m(n,null),h(t,i),h(t,o),h(o,s),e[4](s),l=!0},p(e,[t]){const r={};128&t&&(r.$$scope={dirty:t,ctx:e}),a.$set(r),null!==e[1]?c?(c.p(e,t),2&t&&Q(c,1)):(c=Me(e),c.c(),Q(c,1),c.m(n,null)):c&&(G(),Z(c,1,1,()=>{c=null}),J()),2&t&&S(o,"hide",null===e[1])},i(e){l||(Q(a.$$.fragment,e),Q(c),l=!0)},o(e){Z(a.$$.fragment,e),Z(c),l=!1},d(n){n&&v(t),ie(a),c&&c.d(),e[4](null)}}}function Ne(e,t,n){let a=null,r=null,i=null,o=null,s=0;return[a,o,s,async()=>{const e=await navigator.mediaDevices.getDisplayMedia({mediaSource:"screen"});n(1,o=null),i=[],r=new MediaRecorder(e,{mimeType:"video/webm;codecs=vp9"}),r.addEventListener("dataavailable",e=>i.push(e.data)),r.addEventListener("stop",async()=>{const e=Date.now(),t=new Blob(i,{type:i[0].type}),r=await new Promise(n=>ze(t,e-s,n));n(1,o=URL.createObjectURL(r)),n(0,a.src=o,a)}),n(2,s=Date.now()),r.start()},function(e){z[e?"unshift":"push"](()=>{a=e,n(0,a)})}]}class Oe extends le{constructor(e){var t;super(),document.getElementById("svelte-1ai18fs-style")||((t=b("style")).id="svelte-1ai18fs-style",t.textContent="comp-layout.svelte-1ai18fs{display:grid;grid-template-columns:1fr;grid-template-rows:min-content auto;height:100%}menu-area.svelte-1ai18fs{display:flex;align-items:center}a.svelte-1ai18fs{display:inline-flex;align-items:center;text-decoration:none;color:var(--secondary)}video-area.svelte-1ai18fs{display:grid;position:relative}video-area.hide.svelte-1ai18fs{display:none}video.svelte-1ai18fs{position:absolute;width:100%;height:100%;border-width:0px;object-fit:contain}",h(document.head,t)),se(this,e,Ne,Le,o,{})}}function Ve(t){let n,a,r,i;return n=new de({props:{baseline:ye,theme:be}}),r=new Oe({}),{c(){ae(n.$$.fragment),a=U(),ae(r.$$.fragment)},m(e,t){re(n,e,t),g(e,a,t),re(r,e,t),i=!0},p:e,i(e){i||(Q(n.$$.fragment,e),Q(r.$$.fragment,e),i=!0)},o(e){Z(n.$$.fragment,e),Z(r.$$.fragment,e),i=!1},d(e){ie(n,e),e&&v(a),ie(r,e)}}}new class extends le{constructor(e){super(),se(this,e,null,Ve,o,{})}}({target:document.body})}();
