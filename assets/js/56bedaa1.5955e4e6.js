"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[18],{4737:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(4848),i=t(8453);const a={sidebar_position:5,Title:"Functions in JS",Description:"Information on Functions in JavaScript"},o="Functions",c={id:"JavaScript/Functions",title:"Functions",description:"A function is simply a chunk of code that can be used over and over again.",source:"@site/docs/JavaScript/Functions.md",sourceDirName:"JavaScript",slug:"/JavaScript/Functions",permalink:"/learndocs/JavaScript/Functions",draft:!1,unlisted:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/JavaScript/Functions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,Title:"Functions in JS",Description:"Information on Functions in JavaScript"},sidebar:"tutorialSidebar",previous:{title:"Strings and Template Literals",permalink:"/learndocs/JavaScript/Strings"},next:{title:"Arrays",permalink:"/learndocs/JavaScript/Arrays"}},s={},l=[{value:"Function decalaration",id:"function-decalaration",level:2},{value:"Function Expression",id:"function-expression",level:2},{value:"Arrow Functions",id:"arrow-functions",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(e.p,{children:"A function is simply a chunk of code that can be used over and over again."}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'function logger() {\r\n  console.log("My name is steve");\r\n}\r\n// Calling / running /invoking functions\r\nlogger();\n'})}),"\n",(0,r.jsx)(e.p,{children:"The function can be called n number of times."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Function can take data and return data. This data can be in any form."}),"\n",(0,r.jsx)(e.h2,{id:"function-decalaration",children:"Function decalaration"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Declaration"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function abcd(data) {\r\n  return 2023 - data;\r\n}\r\nconst declaration = abcd(2001);\n"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"function-expression",children:"Function Expression"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Expression"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const efgh = function (data) {\r\n  return 2023 - data;\r\n};\r\nconst expression = efgh(2001);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The difference between declaration and expression is that we can call declarations before they are defined in code. Order of ",(0,r.jsx)(e.code,{children:"const declaration=abcd(2001)"})," should not matter."]}),"\n",(0,r.jsx)(e.h2,{id:"arrow-functions",children:"Arrow Functions"}),"\n",(0,r.jsx)(e.p,{children:"Arrow functions are just a faster way of writing functions. here return happens implicitly. (No need to mention return when its one line of code and one parameter)"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const ijkl = (data) => 2023 - data;\r\nconst arrow = ijkl(2001);\r\nconst yearsUntilRetire = (data) => {\r\n  const age = 2023 - data;\r\n  const retirement = 65 - age;\r\n  return retirement;\r\n};\r\nconsole.log(yearsUntilRetire(2001));\n"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var r=t(6540);const i={},a=r.createContext(i);function o(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);