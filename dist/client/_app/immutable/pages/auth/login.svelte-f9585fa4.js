import{S as G,i as K,s as V,a as b,l as m,u as U,O as W,h as s,c as g,m as _,p as y,v as A,q as r,b as w,J as a,P as I,Q as C,R as X,n as D,T as Y}from"../../chunks/index-d3d2aee4.js";import{c as E}from"../../chunks/singletons-eca981c1.js";import{a as Z}from"../../chunks/index-c00af6b7.js";E.disable_scroll_handling;const x=E.goto;E.invalidate;E.prefetch;E.prefetch_routes;E.before_navigate;E.after_navigate;function ee(d){let c,p,R,u,t,f,q,P,o,T,h,k,N,l,O,L,S,B,v,$,z,F;return{c(){c=b(),p=m("h1"),R=U("Login"),u=b(),t=m("form"),f=m("label"),q=U("Email"),P=b(),o=m("input"),T=b(),h=m("label"),k=U("Password"),N=b(),l=m("input"),O=b(),L=m("button"),S=U("Login"),B=b(),v=m("a"),$=U("Register"),this.h()},l(e){W('[data-svelte="svelte-10qpq3o"]',document.head).forEach(s),c=g(e),p=_(e,"H1",{});var H=y(p);R=A(H,"Login"),H.forEach(s),u=g(e),t=_(e,"FORM",{});var n=y(t);f=_(n,"LABEL",{for:!0});var J=y(f);q=A(J,"Email"),J.forEach(s),P=g(n),o=_(n,"INPUT",{type:!0,name:!0,id:!0}),T=g(n),h=_(n,"LABEL",{for:!0});var M=y(h);k=A(M,"Password"),M.forEach(s),N=g(n),l=_(n,"INPUT",{type:!0,name:!0,id:!0}),O=g(n),L=_(n,"BUTTON",{type:!0});var Q=y(L);S=A(Q,"Login"),Q.forEach(s),n.forEach(s),B=g(e),v=_(e,"A",{href:!0});var j=y(v);$=A(j,"Register"),j.forEach(s),this.h()},h(){document.title="Login",r(f,"for","email"),r(o,"type","email"),r(o,"name","email"),r(o,"id","email"),r(h,"for","password"),r(l,"type","password"),r(l,"name","password"),r(l,"id","password"),r(L,"type","submit"),r(v,"href","/auth/register")},m(e,i){w(e,c,i),w(e,p,i),a(p,R),w(e,u,i),w(e,t,i),a(t,f),a(f,q),a(t,P),a(t,o),I(o,d[0]),a(t,T),a(t,h),a(h,k),a(t,N),a(t,l),I(l,d[1]),a(t,O),a(t,L),a(L,S),w(e,B,i),w(e,v,i),a(v,$),z||(F=[C(o,"input",d[3]),C(l,"input",d[4]),C(t,"submit",X(d[2]))],z=!0)},p(e,[i]){i&1&&o.value!==e[0]&&I(o,e[0]),i&2&&l.value!==e[1]&&I(l,e[1])},i:D,o:D,d(e){e&&s(c),e&&s(p),e&&s(u),e&&s(t),e&&s(B),e&&s(v),z=!1,Y(F)}}}function te(d,c,p){const R="https://organization-app-api.herokuapp.com";let u="",t="";const f=async o=>{console.log("login");const T={email:u,password:t},k=(await Z.post(`${R}/auth/login`,T)).data.access_token;localStorage.setItem("token",k),x("/app")};function q(){u=this.value,p(0,u)}function P(){t=this.value,p(1,t)}return[u,t,f,q,P]}class le extends G{constructor(c){super(),K(this,c,te,ee,V,{})}}export{le as default};
