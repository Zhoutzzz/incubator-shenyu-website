"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4846],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=i,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15732:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},u=void 0,c={unversionedId:"plugin-center/common/general-context-plugin",id:"version-2.4.1/plugin-center/common/general-context-plugin",isDocsHomePage:!1,title:"GeneralContext Plugin",description:"generalContext plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/common/general-context-plugin.md",sourceDirName:"plugin-center/common",slug:"/plugin-center/common/general-context-plugin",permalink:"/docs/2.4.1/plugin-center/common/general-context-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/common/general-context-plugin.md",version:"2.4.1",frontMatter:{title:"GeneralContext Plugin",keywords:["generalContext"],description:"generalContext plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Monitor Plugin",permalink:"/docs/2.4.1/plugin-center/observability/monitor-plugin"},next:{title:"Custom Load Balancer",permalink:"/docs/2.4.1/developer/spi/custom-load-balance"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:p};function g(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When making invokes to the target service, Apache ShenYu gateway also allows users to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"generalContext")," plugin to pass the service context parameters by reading the header in this request.")),(0,o.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,o.kt)("inlineCode",{parentName:"li"},"generalContext"),", set to enable."),(0,o.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,o.kt)("img",{src:"/img/shenyu/plugin/general-context/general-context-open-en.png",width:"70%",height:"60%"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduce ",(0,o.kt)("inlineCode",{parentName:"li"},"generalContext")," support in the pox.xml file of the gateway.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu general context plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-general-context</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu general context plugin end--\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,o.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,o.kt)("li",{parentName:"ul"},"Only those matched requests can print the information about this request.")),(0,o.kt)("h2",{id:"situation"},"Situation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The parameters in the request header need to be passed to the proxy server."),(0,o.kt)("li",{parentName:"ul"},"Need to replace a key in the request header and pass it to the proxy server.")))}g.isMDXComponent=!0}}]);