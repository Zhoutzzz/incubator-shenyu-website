"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1326],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23474:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={sidebar_position:1,title:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1",keywords:["soul"],description:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1"},p=void 0,u={unversionedId:"register-center/register-center-design",id:"version-2.3.0/register-center/register-center-design",isDocsHomePage:!1,title:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1",description:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/register-center/register-center-design.md",sourceDirName:"register-center",slug:"/register-center/register-center-design",permalink:"/zh/docs/2.3.0/register-center/register-center-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/register-center/register-center-design.md",version:"2.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1",keywords:["soul"],description:"\u6ce8\u518c\u4e2d\u5fc3\u8bbe\u8ba1"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565",permalink:"/zh/docs/2.3.0/users-guide/use-data-sync"},next:{title:"\u6ce8\u518c\u4e2d\u5fc3\u63a5\u5165\u914d\u7f6e",permalink:"/zh/docs/2.3.0/register-center/register-center-access"}},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"Client",id:"client",children:[]},{value:"Server",id:"server",children:[]},{value:"Http \u6ce8\u518c",id:"http-\u6ce8\u518c",children:[]},{value:"Zookeeper \u6ce8\u518c",id:"zookeeper-\u6ce8\u518c",children:[]},{value:"Etcd \u6ce8\u518c",id:"etcd-\u6ce8\u518c",children:[]},{value:"Consul \u6ce8\u518c",id:"consul-\u6ce8\u518c",children:[]},{value:"Nacos \u6ce8\u518c",id:"nacos-\u6ce8\u518c",children:[]},{value:"SPI \u6269\u5c55",id:"spi-\u6269\u5c55",children:[]}],c={toc:s};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u7bc7\u4e3b\u8981\u8bb2\u89e3\u6ce8\u518c\u4e2d\u5fc3\u539f\u7406")),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(9246).Z})),(0,l.kt)("p",null,"\u914d\u7f6e\u4e2d\u58f0\u660e\u4f7f\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef\u7c7b\u578b\uff0c\u5982HTTP/Zookeeper"),(0,l.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u4f7f\u7528SPI\u65b9\u5f0f\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u5bf9\u5e94\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef"),(0,l.kt)("p",null,"\u901a\u8fc7\u5b9e\u73b0Spring Bean\u76f8\u5173\u7684\u540e\u5904\u7406\u5668\u63a5\u53e3\uff0c\u5728\u5176\u4e2d\u83b7\u53d6\u9700\u8981\u8fdb\u884c\u6ce8\u518c\u7684\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff0c\u5c06\u83b7\u53d6\u7684\u4fe1\u606f\u653e\u5165Disruptor\u4e2d"),(0,l.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef\u4eceDisruptor\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u63a5\u53e3\u4fe1\u606f\u6ce8\u518c\u5230Soul-Admin"),(0,l.kt)("p",null,"Disruptor\u5728\u5176\u4e2d\u8d77\u6570\u636e\u4e0e\u64cd\u4f5c\u89e3\u8026\u7684\u4f5c\u7528\uff0c\u5229\u4e8e\u6269\u5c55"),(0,l.kt)("h2",{id:"server"},"Server"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(3678).Z})),(0,l.kt)("p",null,"\u5728Soul-Admin\u914d\u7f6e\u4e2d\u58f0\u660e\u4f7f\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef\u7c7b\u578b\uff0c\u5982HTTP/Zookeeper"),(0,l.kt)("p",null,"Soul-Admin\u542f\u52a8\u65f6\uff0c\u66f4\u52a0\u914d\u7f6e\u7684\u7c7b\u578b\uff0c\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u5bf9\u5e94\u7684\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef"),(0,l.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef\u6536\u5230Soul-Client\u6ce8\u518c\u7684\u63a5\u53e3\u4fe1\u606f\u540e\uff0c\u5c06\u5176\u653e\u5165Disruptor\u4e2d\uff0c\u7136\u540e\u4f1a\u89e6\u53d1\u6ce8\u518c\u5904\u7406\u903b\u8f91\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\u66f4\u65b0\u5e76\u53d1\u5e03\u540c\u6b65\u4e8b\u4ef6"),(0,l.kt)("p",null,"Disruptor\u5728\u5176\u4e2d\u8d77\u5230\u6570\u636e\u4e0e\u64cd\u4f5c\u89e3\u8026\uff0c\u5229\u4e8e\u6269\u5c55\uff1b\u540c\u65f6\u6bd4\u8f83\u6ce8\u518c\u8bf7\u6c42\u8fc7\u591a\uff0c\u5bfc\u81f4\u6ce8\u518c\u5f02\u5e38\uff0c\u6709\u6570\u636e\u7f13\u51b2\u4f5c\u7528"),(0,l.kt)("h2",{id:"http-\u6ce8\u518c"},"Http \u6ce8\u518c"),(0,l.kt)("p",null,"HTTP\u670d\u52a1\u6ce8\u518c\u539f\u7406\u8f83\u4e3a\u7b80\u5355\uff0c\u5728Soul-Client\u542f\u52a8\u540e\uff0c\u4f1a\u8c03\u7528Soul-Admin\u7684\u76f8\u5173\u670d\u52a1\u6ce8\u518c\u63a5\u53e3\uff0c\u4e0a\u4f20\u6570\u636e\u8fdb\u884c\u6ce8\u518c"),(0,l.kt)("p",null,"Soul-Admin web\u670d\u52a1\u63a5\u53e3\u6536\u5230\u8bf7\u6c42\u540e\u8fdb\u884c\u6570\u636e\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03"),(0,l.kt)("h2",{id:"zookeeper-\u6ce8\u518c"},"Zookeeper \u6ce8\u518c"),(0,l.kt)("p",null,"Zookeeper\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"soul\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,l.kt)("p",null,"Soul-Client\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08MetaDataRegisterDTO/URIRegisterDTO\uff09\u5199\u5230\u5982\u4e0a\u7684zookeeper\u8282\u70b9\u4e2d\u3002"),(0,l.kt)("p",null,"Soul-Admin\u4f7f\u7528Zookeeper\u7684Watch\u673a\u5236\uff0c\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\u7b49\u4e8b\u4ef6\u8fdb\u884c\u76d1\u542c\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u5728\u6536\u5230MetaDataRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u548crule\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("p",null,"\u6536\u5230URIRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u7684upstream\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("h2",{id:"etcd-\u6ce8\u518c"},"Etcd \u6ce8\u518c"),(0,l.kt)("p",null,"Etcd\u7684\u952e\u503c\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"soul\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,l.kt)("p",null,"Soul-Client\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08MetaDataRegisterDTO/URIRegisterDTO\uff09\u4ee5Ephemeral\u65b9\u5f0f\u5199\u5230\u5982\u4e0a\u7684Etcd\u8282\u70b9\u4e2d\u3002"),(0,l.kt)("p",null,"Soul-Admin\u4f7f\u7528Etcd\u7684Watch\u673a\u5236\uff0c\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\u7b49\u4e8b\u4ef6\u8fdb\u884c\u76d1\u542c\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u5728\u6536\u5230MetaDataRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u548crule\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("p",null,"\u6536\u5230URIRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u7684upstream\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("h2",{id:"consul-\u6ce8\u518c"},"Consul \u6ce8\u518c"),(0,l.kt)("p",null,"Consul\u7684Metadata\u548cURI\u5206\u4e24\u90e8\u5206\u5b58\u50a8\uff0cURIRegisterDTO\u968f\u7740\u670d\u52a1\u6ce8\u518c\u8bb0\u5f55\u5728\u670d\u52a1\u7684metadata\u91cc\uff0c\u670d\u52a1\u4e0b\u7ebf\u65f6\u968f\u7740\u670d\u52a1\u8282\u70b9\u4e00\u8d77\u6d88\u5931\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(54276).Z})),(0,l.kt)("p",null,"Consul\u7684MetaDataRegisterDTO\u5b58\u5728Key/Value\u91cc\uff0c\u952e\u503c\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"soul\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n\n")),(0,l.kt)("p",null,"Soul-Client\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08MetaDataRegisterDTO/URIRegisterDTO\uff09\u5206\u522b\u653e\u5728ServiceInstance\u7684Metadata\uff08URIRegisterDTO\uff09\u548cKeyValue\uff08MetaDataRegisterDTO\uff09\uff0c\u6309\u7167\u4e0a\u8ff0\u65b9\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"Soul-Admin\u901a\u8fc7\u76d1\u542cCatalog\u548cKeyValue\u7684index\u7684\u53d8\u5316\uff0c\u6765\u611f\u77e5\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u5728\u6536\u5230MetaDataRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u548crule\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("p",null,"\u6536\u5230URIRegisterDTO\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1selector\u7684upstream\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("h2",{id:"nacos-\u6ce8\u518c"},"Nacos \u6ce8\u518c"),(0,l.kt)("p",null,"Nacos\u5206\u4e3a\u4e24\u90e8\u5206\uff1aURI \u548c Metadata\u3002"),(0,l.kt)("p",null,"URI \u4f7f\u7528\u5b9e\u4f8b\u6ce8\u518c\u65b9\u5f0f\uff0c\u5728\u670d\u52a1\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u76f8\u5173URI\u6570\u636e\u8282\u70b9\u4f1a\u81ea\u52a8\u8fdb\u884c\u5220\u9664\uff0c\u5e76\u53d1\u9001\u4e8b\u4ef6\u5230\u8ba2\u9605\u7aef\uff0c\u8ba2\u9605\u7aef\u8fdb\u884c\u76f8\u5173\u7684\u4e0b\u7ebf\u5904\u7406\u3002"),(0,l.kt)("p",null,"Metadata \u4f7f\u7528\u914d\u7f6e\u6ce8\u518c\u65b9\u5f0f\uff0c\u6ca1\u6709\u76f8\u5173\u4e0a\u4e0b\u7ebf\u64cd\u4f5c\uff0c\u5f53\u6709URI\u5b9e\u4f8b\u6ce8\u518c\u65f6\uff0c\u4f1a\u76f8\u5e94\u7684\u53d1\u5e03Metadata\u914d\u7f6e\uff0c\u8ba2\u9605\u7aef\u76d1\u542c\u6570\u636e\u53d8\u5316\uff0c\u8fdb\u884c\u66f4\u65b0\u5904\u7406\u3002"),(0,l.kt)("p",null,"URI \u5b9e\u4f8b\u6ce8\u518c\u547d\u4ee4\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"soul.register.service.${rpcType}\n")),(0,l.kt)("p",null,"\u521d\u59cb\u76d1\u542c\u6240\u6709\u7684RpcType\u8282\u70b9\uff0c\u5176\u4e0b\u7684{contextPath}\u5b9e\u4f8b\u4f1a\u5bf9\u5e94\u6ce8\u518c\u5230\u5176\u4e0b\uff0c\u6839\u636eIP\u548cPort\u8fdb\u884c\u533a\u5206\uff0c\u5e76\u643a\u5e26\u5176\u5bf9\u5e94\u7684contextPath\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"URI \u5b9e\u4f8b\u4e0a\u4e0b\u7ebf\u4e4b\u540e\uff0c\u89e6\u53d1selector\u7684upstream\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("p",null,"URI \u5b9e\u4f8b\u4e0a\u7ebf\u65f6\uff0c\u4f1a\u53d1\u5e03\u5bf9\u5e94\u7684 Metadata \u6570\u636e\uff0c\u5176\u8282\u70b9\u540d\u79f0\u547d\u4ee4\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"soul.register.service.${rpcType}.${contextPath}\n")),(0,l.kt)("p",null,"\u8ba2\u9605\u7aef\u4f1a\u5bf9\u6240\u6709\u7684Metadata\u914d\u7f6e\u7ee7\u7eed\u76d1\u542c\uff0c\u5f53\u521d\u6b21\u8ba2\u9605\u548c\u914d\u7f6e\u66f4\u65b0\u540e\uff0c\u89e6\u53d1selector\u548crule\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,l.kt)("h2",{id:"spi-\u6269\u5c55"},"SPI \u6269\u5c55"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"SPI \u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SoulClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"Soul\u7f51\u5173\u5ba2\u6237\u7aef\u63a5\u5165\u6ce8\u518c\u670d\u52a1\u8d44\u6e90")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u5df2\u77e5\u5b9e\u73b0\u7c7b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HttpClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eHttp\u8bf7\u6c42\u7684\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZookeeperClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eZookeeper\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EtcdClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eetcd\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConsulClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8econsul\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NacosClientRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eNacos\u6ce8\u518c\u7684\u5b9e\u73b0")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"SPI \u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SoulServerRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"Soul\u7f51\u5173\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u540e\u53f0\u670d\u52a1\u8d44\u6e90")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u5df2\u77e5\u5b9e\u73b0\u7c7b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SoulHttpRegistryController"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Http\u670d\u52a1\u63a5\u53e3\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZookeeperServerRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Zookeeper\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EtcdServerRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528etcd\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConsulServerRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528consul\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NacosServerRegisterRepository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Nacos\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")))))}d.isMDXComponent=!0},54276:function(e,t,r){t.Z=r.p+"assets/images/Consul-ui-6e5afcb94cfa0232bfd9772e041b9fab.png"},9246:function(e,t,r){t.Z=r.p+"assets/images/client-2a4cad0acb6c752051faec3132baf52c.png"},3678:function(e,t,r){t.Z=r.p+"assets/images/server-1fb998f5ef8107b38fd6a8838bcaf37f.png"}}]);