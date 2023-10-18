"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(2389);const o={title:"Plan",sidebar_position:3,slug:"/get-started/plan"},i="Plan",l={unversionedId:"tutorial/plan",id:"tutorial/plan",title:"Plan",description:"What is an action plan?",source:"@site/docs/tutorial/plan.mdx",sourceDirName:"tutorial",slug:"/get-started/plan",permalink:"/get-started/plan",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/plan.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Plan",sidebar_position:3,slug:"/get-started/plan"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/tutorial/setup"},next:{title:"Input",permalink:"/tutorial/input"}},p={},c=[{value:"What is an action plan?",id:"what-is-an-action-plan",level:3},{value:"Your First Action Plan",id:"your-first-action-plan",level:2},{value:"Generate the action plan",id:"generate-the-action-plan",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plan"},"Plan"),(0,a.kt)("h3",{id:"what-is-an-action-plan"},"What is an action plan?"),(0,a.kt)("p",null,"An action plan is a set of actions that are selected based on the contents of an applications's source code."),(0,a.kt)("h2",{id:"your-first-action-plan"},"Your First Action Plan"),(0,a.kt)("p",null,"To get started, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TruStacks/react-sample/fork"},"fork")," and clone the sample application repo."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may use your own project for this tutorial. View the list of supported actions ",(0,a.kt)("a",{parentName:"p",href:"/actions"},"here"),".")),(0,a.kt)("h3",{id:"generate-the-action-plan"},"Generate the action plan"),(0,a.kt)("p",null,"Navigate to the repo source and run the following command from the root of the source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tsctl plan\n")),(0,a.kt)("p",null,"This command generates an action plan in the current directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"trustacks.plan"),"."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"tsctl explain trustacks.plan")," to view the actions that were discovered from the source."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you get the error ",(0,a.kt)("inlineCode",{parentName:"p"},"No actions could be generated from the provided source"),", then the engine was unable to match any actions from the source.")))}d.isMDXComponent=!0}}]);