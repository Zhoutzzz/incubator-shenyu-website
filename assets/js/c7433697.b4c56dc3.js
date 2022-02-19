"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,g=h["".concat(u,".").concat(d)]||h[d]||s[d]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"ContextPath Plugin",keywords:["contextPath"],description:"contextPath plugin"},u=void 0,p={unversionedId:"plugin-center/http-process/contextpath-plugin",id:"version-2.4.2/plugin-center/http-process/contextpath-plugin",isDocsHomePage:!1,title:"ContextPath Plugin",description:"contextPath plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/contextpath-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/contextpath-plugin",permalink:"/docs/plugin-center/http-process/contextpath-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/contextpath-plugin.md",version:"2.4.2",frontMatter:{title:"ContextPath Plugin",keywords:["contextPath"],description:"contextPath plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Data Synchronization Config",permalink:"/docs/user-guide/use-data-sync"},next:{title:"ModifyResponse Plugin",permalink:"/docs/plugin-center/http-process/modifyresponse-plugin"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When making invokes to the target service, ",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," Gateway also allows users to customize the ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," plugin.")),(0,o.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," , set to enable."),(0,o.kt)("li",{parentName:"ul"},"Introduce ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," support in the ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway."),(0,o.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"   \x3c!-- apache shenyu context_path plugin start--\x3e\n   <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-spring-boot-starter-plugin-context-path</artifactId>\n      <version>${project.version}</version>\n   </dependency>\n   \x3c!-- apache shenyu context_path plugin end--\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,o.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," .")),(0,o.kt)("h2",{id:"situation"},"Situation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As the name suggests,the context_path plugin redefines the contextPath of URI."),(0,o.kt)("li",{parentName:"ul"},"When the request is matched, the custom ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," is set, then the custom ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath")," will be intercepted according to the requested Url to obtain the real Url, for example, the request path is ",(0,o.kt)("inlineCode",{parentName:"li"},"/shenyu/http/order"),",\nThe configured contextPath is ",(0,o.kt)("inlineCode",{parentName:"li"},"/shenyu/http"),", then the requested ",(0,o.kt)("inlineCode",{parentName:"li"},"url")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"/order"),".")))}h.isMDXComponent=!0}}]);