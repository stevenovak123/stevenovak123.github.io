"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,v=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8,title:"Maps and Sets",Description:"Information on Sets and Maps in JavaScript"},s=void 0,l={unversionedId:"JavaScript/MapAndSet",id:"JavaScript/MapAndSet",title:"Maps and Sets",description:"Map",source:"@site/docs/JavaScript/MapAndSet.md",sourceDirName:"JavaScript",slug:"/JavaScript/MapAndSet",permalink:"/learndocs/JavaScript/MapAndSet",draft:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/JavaScript/MapAndSet.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Maps and Sets",Description:"Information on Sets and Maps in JavaScript"},sidebar:"tutorialSidebar",previous:{title:"Objects",permalink:"/learndocs/JavaScript/Objects"}},i={},p=[{value:"Map",id:"map",level:2},{value:"Methods and Properties of Map",id:"methods-and-properties-of-map",level:2},{value:"Set",id:"set",level:2},{value:"Methods and Properties of Set",id:"methods-and-properties-of-set",level:2},{value:"Iteration over Map and Set",id:"iteration-over-map-and-set",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"map"},"Map"),(0,r.kt)("p",null,"Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. Map can also use objects as keys."),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let map = new Map();\nmap.set('1', 'str1'); // a string key\nmap.set(1, 'num1'); // a numeric key\nmap.set(true, 'bool1'); // a boolean key\n\nconsole.log(map.get(1)); // Output => 'num1'\n\nlet steve = { name: 'Steve' };\n\n// for every user, let's store their visits count\nlet visitsCountMap = new Map();\n\n// Steve is the key for the map\nvisitsCountMap.set(steve, 123);\n\nconsole.log(visitsCountMap.get(steve)); // 123\n")),(0,r.kt)("h2",{id:"methods-and-properties-of-map"},"Methods and Properties of Map"),(0,r.kt)("p",null,"Methods and properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"new Map() \u2013 creates the map."),(0,r.kt)("li",{parentName:"ul"},"set(key, value) \u2013 stores the value by the key."),(0,r.kt)("li",{parentName:"ul"},"get(key) \u2013 returns the value by the key, undefined if key doesn\u2019t exist in map."),(0,r.kt)("li",{parentName:"ul"},"has(key) \u2013 returns true if the key exists, false otherwise."),(0,r.kt)("li",{parentName:"ul"},"delete(key) \u2013 removes the element (the key/value pair) by the key."),(0,r.kt)("li",{parentName:"ul"},"clear() \u2013 removes everything from the map."),(0,r.kt)("li",{parentName:"ul"},"size \u2013 returns the current element count.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let recipeMap = new Map([\n  ['cucumber', 500],\n  ['tomatoes', 350],\n  ['onion', 50],\n]);\n\n// iterate over keys\nfor (let vegetable of recipeMap.keys()) {\n  console.log(vegetable); // cucumber, tomatoes, onion\n}\n\n// iterate over values (amounts)\nfor (let amount of recipeMap.values()) {\n  console.log(amount); // 500, 350, 50\n}\n\n// iterate over [key, value] entries\nfor (let entry of recipeMap) {\n  // the same as of recipeMap.entries()\n  console.log(entry); // cucumber,500 (and so on)\n}\n")),(0,r.kt)("h2",{id:"set"},"Set"),(0,r.kt)("p",null,"A Set is a special type collection \u2013 \u201cset of values\u201d (without keys), where each value may occur only once."),(0,r.kt)("p",null,"The main feature is that repeated calls of ",(0,r.kt)("inlineCode",{parentName:"p"},"set.add(value)")," with the same value don\u2019t do anything. That\u2019s the reason why each value appears in a Set only once."),(0,r.kt)("h2",{id:"methods-and-properties-of-set"},"Methods and Properties of Set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"new Set(","[iterable]",") \u2013 creates the set, and if an iterable object is provided (usually an array), copies values from it into the set."),(0,r.kt)("li",{parentName:"ul"},"set.add(value) \u2013 adds a value, returns the set itself."),(0,r.kt)("li",{parentName:"ul"},"set.delete(value) \u2013 removes the value, returns true if value existed at the moment of the call, otherwise false."),(0,r.kt)("li",{parentName:"ul"},"set.has(value) \u2013 returns true if the value exists in the set, otherwise false."),(0,r.kt)("li",{parentName:"ul"},"set.clear() \u2013 removes everything from the set."),(0,r.kt)("li",{parentName:"ul"},"set.size \u2013 is the elements count.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let set = new Set();\n\nlet steve = { name: 'Steve' };\nlet pete = { name: 'Pete' };\nlet mary = { name: 'Mary' };\n\n// visits, some users come multiple times\nset.add(steve);\nset.add(pete);\nset.add(mary);\nset.add(steve);\nset.add(mary);\n\n// set keeps only unique values\nconsole.log(set.size); // 3\n\nfor (let user of set) {\n  console.log(user.name); // Steve Pete Mary\n}\n")),(0,r.kt)("h2",{id:"iteration-over-map-and-set"},"Iteration over Map and Set"),(0,r.kt)("p",null,"For looping over a map, there are 3 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"keys() \u2013 returns an iterable for keys,"),(0,r.kt)("li",{parentName:"ul"},"map.values() \u2013 returns an iterable for values,"),(0,r.kt)("li",{parentName:"ul"},"map.entries() \u2013 returns an iterable for entries ","[key, value]",", it\u2019s used by default in for..of.")))}m.isMDXComponent=!0}}]);