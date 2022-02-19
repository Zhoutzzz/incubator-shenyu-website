"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7571],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68622:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",description:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e"},u=void 0,s={unversionedId:"user-guide/register-center-instance",id:"version-2.4.2/user-guide/register-center-instance",isDocsHomePage:!1,title:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",description:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/user-guide/register-center-instance.md",sourceDirName:"user-guide",slug:"/user-guide/register-center-instance",permalink:"/zh/docs/user-guide/register-center-instance",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/user-guide/register-center-instance.md",version:"2.4.2",frontMatter:{title:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",description:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",permalink:"/zh/docs/user-guide/register-center-access"},next:{title:"Sofa\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/sofa-rpc-proxy"}},p=[{value:"\u6dfb\u52a0Maven\u4f9d\u8d56",id:"\u6dfb\u52a0maven\u4f9d\u8d56",children:[]},{value:"\u4f7f\u7528zookeeper",id:"\u4f7f\u7528zookeeper",children:[]},{value:"\u4f7f\u7528etcd",id:"\u4f7f\u7528etcd",children:[]}],l={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5c06\u7f51\u5173\u5b9e\u4f8b\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u76ee\u524d\u652f\u6301\u6ce8\u518c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"etcd"),"\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0maven\u4f9d\u8d56"},"\u6dfb\u52a0Maven\u4f9d\u8d56"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu instance start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-instance</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu instance end--\x3e\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528zookeeper"},"\u4f7f\u7528zookeeper"),(0,i.kt)("p",null,"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181 #\u914d\u7f6e\u6210\u4f60\u7684 zookeeper \u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\n    props:\n      sessionTimeout: 3000 #\u53ef\u9009\uff0c\u9ed8\u8ba43000\n      connectionTimeout: 3000 #\u53ef\u9009\uff0c\u9ed8\u8ba43000\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528etcd"},"\u4f7f\u7528etcd"),(0,i.kt)("p",null,"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"instance:\n    enabled: true\n    registerType: etcd\n    serverLists: http://localhost:2379 #\u914d\u7f6e\u6210\u4f60\u7684 etcd \u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n    props:\n      etcdTimeout: 3000 #\u53ef\u9009\uff0c\u9ed8\u8ba43000\n      etcdTTL: 5 #\u53ef\u9009\uff0c\u9ed8\u8ba45\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u542f\u52a8\u7f51\u5173\uff0c\u5c31\u4f1a\u6210\u529f\u6ce8\u518c\u5230\u76f8\u5e94\u6ce8\u518c\u4e2d\u5fc3\u3002")))}d.isMDXComponent=!0}}]);