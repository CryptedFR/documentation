"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[846],{4436:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"routes/utilisateur/authenticateUser","title":"Connecter un utilisateur","description":"Cette route permet de connecter un utilisateur.","source":"@site/docs/routes/utilisateur/authenticateUser.mdx","sourceDirName":"routes/utilisateur","slug":"/routes/utilisateur/connecter-un-utilisateur","permalink":"/documentation/docs/routes/utilisateur/connecter-un-utilisateur","draft":false,"unlisted":false,"editUrl":"https://github.com/CryptedFR/documentation/docs/routes/utilisateur/authenticateUser.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Connecter un utilisateur","slug":"connecter-un-utilisateur","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Cr\xe9er un utilisateur","permalink":"/documentation/docs/routes/utilisateur/creer-un-utilisateur"},"next":{"title":"R\xe9cup\xe9rer un utilisateur","permalink":"/documentation/docs/routes/utilisateur/recuperer-un-utilisateur"}}');var r=t(6070),d=t(6599),i=t(5325);const l={title:"Connecter un utilisateur",slug:"connecter-un-utilisateur",sidebar_position:2},c="Connecter un utilisateur",o={},u=[{value:"URL",id:"url",level:2},{value:"En-t\xeates de la requ\xeate",id:"en-t\xeates-de-la-requ\xeate",level:2},{value:"Corps de la requ\xeate",id:"corps-de-la-requ\xeate",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe9ponse",id:"r\xe9ponse",level:2},{value:"Succ\xe8s",id:"succ\xe8s",level:3},{value:"Erreurs",id:"erreurs",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"connecter-un-utilisateur",children:"Connecter un utilisateur"})}),"\n",(0,r.jsx)(s.p,{children:"Cette route permet de connecter un utilisateur."}),"\n",(0,r.jsx)(s.h2,{id:"url",children:"URL"}),"\n",(0,r.jsx)(i.A,{method:"POST",route:"/v1/user/auth"}),"\n",(0,r.jsx)(s.h2,{id:"en-t\xeates-de-la-requ\xeate",children:"En-t\xeates de la requ\xeate"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nom"}),(0,r.jsx)(s.th,{children:"Valeur ou type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Content-Type"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"application/json"})})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"corps-de-la-requ\xeate",children:"Corps de la requ\xeate"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Champ"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Requis"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"identifier"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"Oui"}),(0,r.jsx)(s.td,{children:"Nom d'utilisateur ou email."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"password"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"Oui"}),(0,r.jsx)(s.td,{children:"Mot de passe de l'utilisateur."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "identifier": "johndoe123", // ou "john.doe@gmail.com",\n  "password": "Johndoe0419*",\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,r.jsx)(s.h3,{id:"succ\xe8s",children:"Succ\xe8s"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Code HTTP"})," : ",(0,r.jsx)(s.code,{children:"201 Created"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nom"}),(0,r.jsx)(s.th,{children:"Valeur ou type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"success"})}),(0,r.jsx)(s.td,{children:"Status de la r\xe9ponse."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"statusCode"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"201"})}),(0,r.jsx)(s.td,{children:"Code HTTP de la r\xe9ponse."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"code"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"S_AUTHENTICATION"})}),(0,r.jsx)(s.td,{children:"Code success."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"AccessToken"})}),(0,r.jsx)(s.td,{children:"Jeton OAT d'authentification."})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Exemple JSON :"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "status": "success",\n  "statusCode": 201,\n  "code": "S_AUTHENTICATION",\n  "data": {\n    "type": "bearer",\n    "name": null,\n    "token": "oat_MQ.WGl0MnNmRFhWRzJGNWlLVHhqUmY4Vm9RZkRPZV94MEp0VmkwLWw3YzIxNDI0NzQ1NjE",\n    "abilities": [\n      "*"\n    ],\n    "lastUsedAt": null,\n    "expiresAt": "2025-01-29T20:24:21.481Z"\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"erreurs",children:"Erreurs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Code HTTP"})," : ",(0,r.jsx)(s.code,{children:"400 Bad Request"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nom"}),(0,r.jsx)(s.th,{children:"Valeur   ou type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"error"})}),(0,r.jsx)(s.td,{children:"Status de la r\xe9ponse."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"statusCode"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"400"})}),(0,r.jsx)(s.td,{children:"Code HTTP de la r\xe9ponse."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"code"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"E_INVALID_CREDENTIALS"})}),(0,r.jsx)(s.td,{children:"Code erreur qui permet d'identifier l'erreur"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Invalid user credentials"})}),(0,r.jsx)(s.td,{children:"Message de l'erreur"})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Exemple JSON :"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "status": "error",\n  "statusCode": 400,\n  "code": "E_INVALID_CREDENTIALS",\n  "message": "Invalid user credentials"\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5325:(e,s,t)=>{t.d(s,{A:()=>r});var n=t(6070);const r=e=>{let{method:s,route:t}=e;const r=s.toLowerCase();return(0,n.jsxs)("p",{className:"http-route",children:[(0,n.jsx)("span",{className:`http-method ${r}`,children:s}),(0,n.jsx)("code",{children:t})]})}},6599:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(758);const r={},d=n.createContext(r);function i(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);