function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,s,c){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(i){const r=u(n,e,o,c);t.p(r,i)}}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function $(){return g("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t){return Array.from(t.childNodes)}function x(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function v(t){return k(t," ")}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function E(t,n){t.value=null==n?"":n}function A(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function N(t,n=document.body){return Array.from(n.querySelectorAll(t))}class M{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=p(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)l(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let S;function j(t){S=t}function C(){if(!S)throw new Error("Function called outside component initialization");return S}function O(t){C().$$.on_mount.push(t)}function L(t){C().$$.after_update.push(t)}function T(t){C().$$.on_destroy.push(t)}function q(){const t=C();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function P(t,n){C().$$.context.set(t,n)}const z=[],B=[],F=[],H=[],D=Promise.resolve();let G=!1;function I(t){F.push(t)}let J=!1;const K=new Set;function Q(){if(!J){J=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];j(n),R(n.$$)}for(j(null),z.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];K.has(n)||(K.add(n),n())}F.length=0}while(z.length);for(;H.length;)H.pop()();G=!1,J=!1,K.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||r(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){Z(t,1,1,(()=>{n.delete(t.key)}))}function nt(t,n,e,o,r,s,c,i,u,a,f,l){let h=t.length,d=s.length,p=h;const g={};for(;p--;)g[t[p].key]=p;const m=[],$=new Map,y=new Map;for(p=d;p--;){const t=l(r,s,p),i=e(t);let u=c.get(i);u?o&&u.p(t,n):(u=a(i,t),u.c()),$.set(i,m[p]=u),i in g&&y.set(i,Math.abs(p-g[i]))}const b=new Set,_=new Set;function x(t){Y(t,1),t.m(i,f),c.set(t.key,t),f=t.first,d--}for(;h&&d;){const n=m[d-1],e=t[h-1],o=n.key,r=e.key;n===e?(f=n.first,h--,d--):$.has(r)?!c.has(o)||b.has(o)?x(n):_.has(r)?h--:y.get(o)>y.get(r)?(_.add(o),x(n)):(b.add(r),h--):(u(e,c),h--)}for(;h--;){const n=t[h];$.has(n.key)||u(n,c)}for(;d;)x(m[d-1]);return m}function et(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ot(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function st(t,n){t&&t.l(n)}function ct(t,n,o,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:f}=t.$$;i&&i.m(n,o),c||I((()=>{const n=u.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(I)}function it(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(z.push(t),G||(G=!0,D.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,s,c,i,u,a=[-1]){const f=S;j(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ut(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=_(e.target);l.fragment&&l.fragment.l(t),t.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&Y(n.$$.fragment),ct(n,e.target,e.anchor,e.customElement),Q()}j(f)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function ht(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!lt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),lt.push(t,n)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.push(u),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{L as A,O as B,W as C,X as D,i as E,a as F,ht as G,nt as H,q as I,T as J,tt as K,B as L,E as M,y as N,A as O,d as P,M as Q,N as R,ft as S,_ as a,k as b,x as c,h as d,p as e,l as f,f as g,w as h,at as i,m as j,$ as k,v as l,n as m,t as n,b as o,rt as p,st as q,ct as r,c as s,g as t,et as u,ot as v,Y as w,Z as x,it as y,P as z};