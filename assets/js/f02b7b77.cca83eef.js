"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[632],{6204:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>u});const d=JSON.parse('{"id":"routes/utilisateur/updateUsername","title":"Modifier le nom d\'utilisateur","description":"Cette route permet de modifier le nom d\'utilisateur de l\'utilisateur authentifi\xe9.","source":"@site/docs/routes/utilisateur/updateUsername.mdx","sourceDirName":"routes/utilisateur","slug":"/routes/utilisateur/modifier-nom-utilisateur","permalink":"/documentation/docs/routes/utilisateur/modifier-nom-utilisateur","draft":false,"unlisted":false,"editUrl":"https://github.com/CryptedFR/documentation/docs/routes/utilisateur/updateUsername.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Modifier le nom d\'utilisateur","slug":"modifier-nom-utilisateur","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Modifier l\'email","permalink":"/documentation/docs/routes/utilisateur/modifier-email-utilisateur"},"next":{"title":"Modifier le mot de passe","permalink":"/documentation/docs/routes/utilisateur/modifier-mot-de-passe"}}');var t=r(6070),n=r(6599),i=r(5325);const l={title:"Modifier le nom d'utilisateur",slug:"modifier-nom-utilisateur",sidebar_position:5},c="Modifier le nom d'utilisateur",o={},u=[{value:"URL",id:"url",level:2},{value:"En-t\xeates de la requ\xeate",id:"en-t\xeates-de-la-requ\xeate",level:2},{value:"Corps de la requ\xeate",id:"corps-de-la-requ\xeate",level:2},{value:"Exemple",id:"exemple",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:2},{value:"Succ\xe8s",id:"succ\xe8s",level:3},{value:"Erreurs",id:"erreurs",level:3}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"modifier-le-nom-dutilisateur",children:"Modifier le nom d'utilisateur"})}),"\n",(0,t.jsx)(s.p,{children:"Cette route permet de modifier le nom d'utilisateur de l'utilisateur authentifi\xe9."}),"\n",(0,t.jsx)(s.h2,{id:"url",children:"URL"}),"\n",(0,t.jsx)(i.A,{method:"PATCH",route:"/v1/user/username"}),"\n",(0,t.jsx)(s.h2,{id:"en-t\xeates-de-la-requ\xeate",children:"En-t\xeates de la requ\xeate"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nom"}),(0,t.jsx)(s.th,{children:"Valeur ou type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Content-Type"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"application/json"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Authorization"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Bearer <token>"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"corps-de-la-requ\xeate",children:"Corps de la requ\xeate"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Champ"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Requis"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"username"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Oui"}),(0,t.jsx)(s.td,{children:"Nouveau nom d'utilisateur de l'utilisateur."})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "username": "johndoe456",\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,t.jsx)(s.h3,{id:"succ\xe8s",children:"Succ\xe8s"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Code HTTP"})," : ",(0,t.jsx)(s.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nom"}),(0,t.jsx)(s.th,{children:"Valeur ou type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"status"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"success"})}),(0,t.jsx)(s.td,{children:"Status de la r\xe9ponse."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"statusCode"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"200"})}),(0,t.jsx)(s.td,{children:"Code HTTP de la r\xe9ponse."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"code"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"S_USERNAME_UPDATED"})}),(0,t.jsx)(s.td,{children:"Code success."})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Exemple JSON :"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "status": "success",\n  "statusCode": 200,\n  "code": "S_EMAIL_UPDATED"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"erreurs",children:"Erreurs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Code HTTP"})," : ",(0,t.jsx)(s.code,{children:"401 Unauthorized"})," ou ",(0,t.jsx)(s.code,{children:"422 Unprocessable Entity"})]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nom"}),(0,t.jsx)(s.th,{children:"Valeur   ou type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"status"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"error"})}),(0,t.jsx)(s.td,{children:"Status de la r\xe9ponse."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"statusCode"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"401"})," ou ",(0,t.jsx)(s.code,{children:"422"})]}),(0,t.jsx)(s.td,{children:"Code HTTP de la r\xe9ponse."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"code"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"E_UNAUTHORIZED_ACCESS"}),"  ou ",(0,t.jsx)(s.code,{children:"E_VALIDATION_ERROR"})]}),(0,t.jsx)(s.td,{children:"Code erreur qui permet d'identifier l'erreur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"message"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"Unauthorized access"})," ou ",(0,t.jsx)(s.code,{children:"Validation failure"})]}),(0,t.jsx)(s.td,{children:"Message de l'erreur"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Exemple JSON :"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "status": "error",\n  "statusCode": 401,\n  "code": "E_UNAUTHORIZED_ACCESS",\n  "message": "Unauthorized access"\n}\n\n// ou\n\n{\n  "status": "error",\n  "statusCode": 422,\n  "code": "E_VALIDATION_ERROR",\n  "message": "Validation failure",\n  "errors": [\n    {\n      "code": "unique",\n      "field": "username"\n    }\n  ]\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5325:(e,s,r)=>{r.d(s,{A:()=>t});var d=r(6070);const t=e=>{let{method:s,route:r}=e;const t=s.toLowerCase();return(0,d.jsxs)("p",{className:"http-route",children:[(0,d.jsx)("span",{className:`http-method ${t}`,children:s}),(0,d.jsx)("code",{children:r})]})}},6599:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var d=r(758);const t={},n=d.createContext(t);function i(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);