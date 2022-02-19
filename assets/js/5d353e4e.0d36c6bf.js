"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7160],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67612:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"Flow Control",keywords:["flow-control"],description:"flow-control"},c=void 0,s={unversionedId:"design/flow-control",id:"version-2.4.1/design/flow-control",isDocsHomePage:!1,title:"Flow Control",description:"flow-control",source:"@site/versioned_docs/version-2.4.1/design/flow-control.md",sourceDirName:"design",slug:"/design/flow-control",permalink:"/docs/2.4.1/design/flow-control",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/design/flow-control.md",version:"2.4.1",frontMatter:{title:"Flow Control",keywords:["flow-control"],description:"flow-control"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Data Synchronization Design",permalink:"/docs/2.4.1/design/data-sync"},next:{title:"Application Client Access",permalink:"/docs/2.4.1/design/register-center-design"}},u=[{value:"Plugin",id:"plugin",children:[]},{value:"Selector And Rule",id:"selector-and-rule",children:[]},{value:"Traffic filtering",id:"traffic-filtering",children:[]}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ShenYu gateway realizes flow control through plugins, selectors and rules. For related data structure, please refer to the previous ",(0,i.kt)("a",{parentName:"p",href:"./database-design"},"Apache ShenYu Admin Database Design")," ."),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"In Apache ShenYu Admin System, each plugin uses Handle (JSON format) fields to represent different processing, and the plugin processing is used to manage and edit the custom processing fields in the JSON."),(0,i.kt)("p",null,"The main purpose of this feature is to enable plugins to handle templated configurations."),(0,i.kt)("h3",{id:"selector-and-rule"},"Selector And Rule"),(0,i.kt)("p",null,"Selector and rule are the most soul of Apache ShenYu Gateway. Master it and you can manage any traffic."),(0,i.kt)("p",null,"A plugin has multiple selectors, and one selector corresponds to multiple rules. The selector is the first level filter of traffic, and the rule is the final filter. For a plugin, we want to meet the traffic criteria based on our configuration before the plugin will be executed. Selectors and rules are designed to allow traffic to perform what we want under certain conditions. The rules need to be understood first."),(0,i.kt)("p",null,"The execution logic of plugin, selector and rule is as follows. When the traffic enters into ShenYu gateway, it will first judge whether there is a corresponding plugin and whether the plugin is turned on. Then determine whether the traffic matches the selector of the plugin. It then determines whether the traffic matches the rules of the selector. If the request traffic meets the matching criteria, the plugin will be executed. Otherwise, the plugin will not be executed. Process the next one. ShenYu gateway is so through layers of screening to complete the flow control."),(0,i.kt)("img",{src:"/img/shenyu/dataSync/flow-control-en.png",width:"40%",height:"30%"}),(0,i.kt)("h3",{id:"traffic-filtering"},"Traffic filtering"),(0,i.kt)("img",{src:"/img/shenyu/design/flow-condition.png",width:"30%",height:"30%"}),(0,i.kt)("p",null,"Traffic filtering is the soul of the selector and the rule, corresponding to the matching conditions in the selector and the rule. According to different traffic filtering rules, we can deal with various complex scenes. Traffic filtering can fetch data from Http requests such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URI"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie"),", etc."),(0,i.kt)("p",null,"You can then use ",(0,i.kt)("inlineCode",{parentName:"p"},"Match"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SpEL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Groovy"),", etc, to Match the desired data. Multi-group matching Adds matching policies that can use And/Or."),(0,i.kt)("p",null,"please refre to ",(0,i.kt)("a",{parentName:"p",href:"../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," for details."))}d.isMDXComponent=!0}}]);