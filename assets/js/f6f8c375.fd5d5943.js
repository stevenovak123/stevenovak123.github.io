"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[319],{331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const a={sidebar_position:3,title:"State",description:"State in React"},o="State",i={id:"React/state",title:"State",description:"State in React",source:"@site/docs/React/state.md",sourceDirName:"React",slug:"/React/state",permalink:"/learndocs/React/state",draft:!1,unlisted:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/React/state.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"State",description:"State in React"},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/learndocs/React/concepts"}},c={},l=[{value:"What is State?",id:"what-is-state",level:2}];function d(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"state",children:"State"}),"\n",(0,r.jsx)(t.h2,{id:"what-is-state",children:"What is State?"}),"\n",(0,r.jsxs)(t.p,{children:["State is data that a component can hold over time necessary for information that it needs to remember throughout the app lifecycle. ",(0,r.jsx)(t.strong,{children:"It is the memory of the component."}),"\r\nUpdating a piece of state will cause a trigger to re-render the component.\r\nThis allows developers to update the component view, persist local variables between renders."]}),"\n",(0,r.jsx)(t.p,{children:"Example of state"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"function App() {\r\n  const [data, setData] = useState(0);\r\n  const handleIncrement = () => {\r\n    setData(prevCount=> prevCount+ 1);\r\n  };\r\n  const handleDecrement = () => {\r\n   setData(prevCount=> prevCount - 1);\r\n  };\r\n  return (\r\n    <>\r\n      <p>value of state: {data} </p>\r\n        <button onClick={handleIncrement}>Increment</button>\r\n        <button onClick={handleDecrement}>Decrement</button>\r\n    </button>\r\n  );\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We are using ",(0,r.jsx)(t.em,{children:"setState"}),", like ",(0,r.jsx)(t.em,{children:"setCount(prevCount => prevCount + 1)"}),", ensures that you're always working with the latest state, no matter when the update is actually applied by React.",(0,r.jsx)(t.br,{}),"\n","While ",(0,r.jsx)(t.em,{children:"setCount(count + 1)"})," might work in simple cases, using ",(0,r.jsx)(t.em,{children:"setCount(prevCount => prevCount + 1)"})," is safer and more reliable, especially in more complex scenarios or in cases where you're dependent on the current state."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);