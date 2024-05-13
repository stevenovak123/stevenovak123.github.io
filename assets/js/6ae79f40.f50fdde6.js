"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[673],{3361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(4848),r=n(8453);const s={sidebar_position:2,title:"Core Concepts",description:"Core Concepts of React"},c="Core Concepts of React",a={id:"React/concepts",title:"Core Concepts",description:"Core Concepts of React",source:"@site/docs/React/concepts.md",sourceDirName:"React",slug:"/React/concepts",permalink:"/learndocs/React/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/React/concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Core Concepts",description:"Core Concepts of React"},sidebar:"tutorialSidebar",previous:{title:"Introduction to React",permalink:"/learndocs/React/intro"},next:{title:"State",permalink:"/learndocs/React/state"}},i={},l=[{value:"Components",id:"components",level:2},{value:"JSX",id:"jsx",level:2}];function d(e){const t={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"core-concepts-of-react",children:"Core Concepts of React"}),"\n",(0,o.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,o.jsx)(t.p,{children:"React applications are entirely made out of components. They are the building blocks of the user interfaces."}),"\n",(0,o.jsxs)(t.p,{children:["React renders a view for each component and they collectively build a user interface. Each component has its own ",(0,o.jsx)(t.strong,{children:"data"}),", ",(0,o.jsx)(t.strong,{children:"logic"}),", ",(0,o.jsx)(t.strong,{children:"appearances"}),".",(0,o.jsx)(t.br,{}),"\n","Hence we can build complex UIs by building multiple components and combining them. Components can be reused, nested inside each other and pass data between them. Components must return a block of JSX. We can pass properties (props) to these components and can use them to as required."]}),"\n",(0,o.jsx)(t.h2,{id:"jsx",children:"JSX"}),"\n",(0,o.jsx)(t.p,{children:"JSX is a declrative syntax to describe what components look like and how they work. JSX is an extension of JavaScript that allows us to embed JavaScript, CSS, and React Components into HTML"}),"\n",(0,o.jsx)(t.p,{children:"Declarative means that we need to define what the UI is supposed to look like based on current data."}),"\n",(0,o.jsx)(t.p,{children:"Example of how Components and JSX look"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Clock() {\r\n  const [date, setDate] = useState(new Date());\r\n  useEffect(() => {\r\n    const timerID = setInterval(() => tick(), 1000);\r\n\r\n    return function cleanup() {\r\n      clearInterval(timerID);\r\n    };\r\n  });\r\n\r\n  function tick() {\r\n    setDate(new Date());\r\n  }\r\n\r\n  return (\r\n    <div>\r\n      <h2>It is {date.toLocaleTimeString()}.</h2>\r\n    </div>\r\n  );\r\n}\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Feel free to edit the above example. The live editor is local to you"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);