"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[965],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(y,o(o({ref:e},p),{},{components:r})):n.createElement(y,o({ref:e},p))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2420:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i=r.p+"assets/images/trivy-1c850dbc23879a955c0b8f099fec2474.png",o={title:"Image",hide_title:!0,slug:"/actions/trivy/image"},c=void 0,l={unversionedId:"actions/trivy/Image",id:"actions/trivy/Image",title:"Image",description:"The image action runs the trivy container security scanner.",source:"@site/docs/actions/trivy/Image.mdx",sourceDirName:"actions/trivy",slug:"/actions/trivy/image",permalink:"/actions/trivy/image",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actions/trivy/Image.mdx",tags:[],version:"current",frontMatter:{title:"Image",hide_title:!0,slug:"/actions/trivy/image"},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/actions/tox/run"},next:{title:"Overview",permalink:"/configuration"}},s={},p=[{value:"Artifacts",id:"artifacts",level:3},{value:"Inputs:",id:"inputs",level:4}],u={toc:p},m="wrapper";function f(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("img",{style:{height:"75px",margin:"20px 0 20px 0"},src:i}),(0,a.kt)("h1",{id:"trivy---image"},"Trivy - Image"),(0,a.kt)("p",null,"The image action runs the ",(0,a.kt)("a",{parentName:"p",href:"https://trivy.dev/"},"trivy")," container security scanner."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This action uses the ",(0,a.kt)("a",{parentName:"p",href:"https://aquasecurity.github.io/trivy/v0.33/docs/references/customization/config-file/"},"trivy.yaml")," configuration file in the project root.")),(0,a.kt)("h3",{id:"artifacts"},"Artifacts"),(0,a.kt)("h4",{id:"inputs"},"Inputs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"image.tar"),(0,a.kt)("td",{parentName:"tr",align:null},"image"),(0,a.kt)("td",{parentName:"tr",align:null},"OCI compliant container image tar")))))}f.isMDXComponent=!0}}]);