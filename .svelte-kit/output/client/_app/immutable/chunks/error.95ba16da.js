import{S,i as x,s as k,e as f,t as _,a as q,c as d,f as g,g as v,d as l,b as y,l as m,k as h,m as E,n as $,o as C}from"./index.627eab2f.js";import{s as H}from"./singletons.cfa9368a.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=_(r),n=q(),i=f("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(l),n=y(e),i=d(e,"P",{});var p=g(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:$,o:$,d(e){e&&l(t),e&&l(n),e&&l(i)}}}function z(s,t,r){let o;return C(s,j,n=>r(0,o=n)),[o]}let D=class extends S{constructor(t){super(),x(this,t,z,w,k,{})}};export{D as E};
