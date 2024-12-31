"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[925],{9082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"routes/utilisateur/deleteAvatar","title":"Supprimer l\'avatar","description":"Cette route permet de supprimer l\'avatar de l\'utilisateur authentifi\xe9.","source":"@site/docs/routes/utilisateur/deleteAvatar.mdx","sourceDirName":"routes/utilisateur","slug":"/routes/utilisateur/supprimer-avatar","permalink":"/documentation/docs/routes/utilisateur/supprimer-avatar","draft":false,"unlisted":false,"editUrl":"https://github.com/CryptedFR/documentation/docs/routes/utilisateur/deleteAvatar.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Supprimer l\'avatar","slug":"supprimer-avatar","sidebar_position":8},"sidebar":"docsSidebar","previous":{"title":"Ajouter un avatar","permalink":"/documentation/docs/routes/utilisateur/ajouter-un-avatar"},"next":{"title":"Supprimer l\'utilisateur","permalink":"/documentation/docs/routes/utilisateur/supprimer-un-utilisateur"}}');var n=r(6070),i=r(6599),d=r(5325);const l={title:"Supprimer l'avatar",slug:"supprimer-avatar",sidebar_position:8},c="Supprimer l'utilisateur",a={},o=[{value:"URL",id:"url",level:2},{value:"En-t\xeates de la requ\xeate",id:"en-t\xeates-de-la-requ\xeate",level:2},{value:"R\xe9ponse",id:"r\xe9ponse",level:2},{value:"Succ\xe8s",id:"succ\xe8s",level:3},{value:"Erreurs",id:"erreurs",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"supprimer-lutilisateur",children:"Supprimer l'utilisateur"})}),"\n",(0,n.jsx)(t.p,{children:"Cette route permet de supprimer l'avatar de l'utilisateur authentifi\xe9."}),"\n",(0,n.jsx)(t.h2,{id:"url",children:"URL"}),"\n",(0,n.jsx)(d.A,{method:"DELETE",route:"/v1/user/avatar"}),"\n",(0,n.jsx)(t.h2,{id:"en-t\xeates-de-la-requ\xeate",children:"En-t\xeates de la requ\xeate"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nom"}),(0,n.jsx)(t.th,{children:"Valeur ou type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Content-Type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"application/json"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Authorization"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Bearer <token>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,n.jsx)(t.h3,{id:"succ\xe8s",children:"Succ\xe8s"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Code HTTP"})," : ",(0,n.jsx)(t.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nom"}),(0,n.jsx)(t.th,{children:"Valeur ou type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"status"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"success"})}),(0,n.jsx)(t.td,{children:"Status de la r\xe9ponse."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"statusCode"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"200"})}),(0,n.jsx)(t.td,{children:"Code HTTP de la r\xe9ponse."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"code"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"S_AVATAR_DELETED"})}),(0,n.jsx)(t.td,{children:"Code success."})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Exemple JSON :"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "status": "success",\n  "statusCode": 200,\n  "code": "S_AVATAR_DELETED"\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"erreurs",children:"Erreurs"}),"\n",(0,n.jsxs)(t.p,{children:["Voir ",(0,n.jsx)(t.a,{href:"/documentation/docs/reponses/erreurs",children:"Erreurs"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5325:(e,t,r)=>{r.d(t,{A:()=>n});var s=r(6070);const n=e=>{let{method:t,route:r}=e;const n=t.toLowerCase();return(0,s.jsxs)("p",{className:"http-route",children:[(0,s.jsx)("span",{className:`http-method ${n}`,children:t}),(0,s.jsx)("code",{children:r})]})}},6599:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(758);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);