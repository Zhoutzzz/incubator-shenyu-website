"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2827],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||u;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),o=["components"],a={title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},l=void 0,s={unversionedId:"plugin-center/http-process/request-plugin",id:"version-2.4.2/plugin-center/http-process/request-plugin",isDocsHomePage:!1,title:"RequestPlugin",description:"RequestPlugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/http-process/request-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/request-plugin",permalink:"/docs/plugin-center/http-process/request-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/http-process/request-plugin.md",version:"2.4.2",frontMatter:{title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Redirect Plugin",permalink:"/docs/plugin-center/http-process/redirect-plugin"},next:{title:"Rewrite Plugin",permalink:"/docs/plugin-center/http-process/rewrite-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"explanation"},"Explanation"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"When ",(0,u.kt)("inlineCode",{parentName:"li"},"ShenYu")," gateway makes proxy call to target service, it also allows users to add, modify and remove request headers by using 'request' plugin to request parameters, request headers and cookies.")),(0,u.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"In ",(0,u.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,u.kt)("inlineCode",{parentName:"li"},"request")," , set to enable."),(0,u.kt)("li",{parentName:"ul"},"Introduce ",(0,u.kt)("inlineCode",{parentName:"li"},"request")," support in the pox.xml file of the gateway."),(0,u.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,u.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,u.kt)("li",{parentName:"ul"},"The custom request parameter modification function is performed only for matching requests.")),(0,u.kt)("h2",{id:"situation"},"Situation"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"As the name implies, a request plugin is a custom modification of a ",(0,u.kt)("inlineCode",{parentName:"li"},"URI")," request parameter."),(0,u.kt)("li",{parentName:"ul"},"When a request is matched, the custom modification rule is set to change the parameters accepted by the downstream service.")))}d.isMDXComponent=!0}}]);