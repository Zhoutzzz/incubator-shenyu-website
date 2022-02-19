"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[723],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||s[y]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65303:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},l=void 0,c={unversionedId:"plugin-center/authority-and-certification/cryptor-response-plugin",id:"plugin-center/authority-and-certification/cryptor-response-plugin",isDocsHomePage:!1,title:"CryptorResponse plugin",description:"CryptorResponse plugin",source:"@site/docs/plugin-center/authority-and-certification/cryptor-response-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/cryptor-response-plugin",permalink:"/docs/next/plugin-center/authority-and-certification/cryptor-response-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/authority-and-certification/cryptor-response-plugin.md",version:"current",frontMatter:{title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},sidebar:"tutorialSidebar",previous:{title:"CryptorRequest plugin",permalink:"/docs/next/plugin-center/authority-and-certification/cryptor-request-plugin"},next:{title:"JWT plugin",permalink:"/docs/next/plugin-center/authority-and-certification/jwt-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"CryptorResponse")," plug-in uses ",(0,a.kt)("inlineCode",{parentName:"li"},"fieldNames")," to match the parameters in ",(0,a.kt)("inlineCode",{parentName:"li"},"responseBody")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"encryption")," processing, replacing the corresponding content of the current ",(0,a.kt)("inlineCode",{parentName:"li"},"fieldNames"),".")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptor_response")," set to enable.")),(0,a.kt)("img",{src:"/img/shenyu/plugin/cryptor/enable-cryptor-response-plugin.png",width:"80%",height:"80%"}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," to configure the traffic that needs to be matched.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Rules")," configuration corresponding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,a.kt)("img",{src:"/img/shenyu/plugin/cryptor/cryptor-response-rules-config.png",width:"80%",height:"80%"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"strategyName: Algorithm name. Currently, based on shenyu's SPI mechanism, the encryption and decryption algorithms can be customized,\nNeed to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," interface."),(0,a.kt)("p",{parentName:"li"},"At the same time find the ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," file under ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/META-INF/shenyu/"),",\nWrite the name of the algorithm, and the package name of the class that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptorStrategy")," interface."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fieldNames: Matching parameter name. Support parsing multi-level json format matching, using ",(0,a.kt)("inlineCode",{parentName:"li"},".")," segmentation, such as data.id.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},'    {\n      data: {\n        "id": ""\n      }\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"decryptKey: Secret key. Used to decrypt data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"encryptKey: Secret key. Used to encrypt data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"way: Select encrypt or decrypt."))),(0,a.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptorResponse")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of shenyu-bootstrap.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu Cryptor Response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-cryptor</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu Cryptor Response plugin end--\x3e\n")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("p",null,"Prevent Internet hacking and obtain data maliciously. Improve data security."))}d.isMDXComponent=!0}}]);