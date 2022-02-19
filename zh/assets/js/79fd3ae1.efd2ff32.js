"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[667],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(y,p(p({ref:n},s),{},{components:t})):r.createElement(y,p({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75457:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],i={sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},u=void 0,c={unversionedId:"deployment/deployment-docker",id:"deployment/deployment-docker",isDocsHomePage:!1,title:"Docker\u90e8\u7f72",description:"docker\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/zh/docs/next/deployment/deployment-docker",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-docker-compose"},next:{title:"k8s\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-k8s"}},s=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u542f\u52a8Apache ShenYu Bootstrap",id:"\u542f\u52a8apache-shenyu-bootstrap",children:[]},{value:"\u542f\u52a8 ShenYu Bootstrap \u7684\u540c\u65f6\uff0c\u542f\u52a8 ShenYu Agent",id:"\u542f\u52a8-shenyu-bootstrap-\u7684\u540c\u65f6\u542f\u52a8-shenyu-agent",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u6765\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin:${current.version}\n> docker network create shenyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e,\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," \u914d\u7f6e\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," \u914d\u7f6e\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-bootstrap"},"\u542f\u52a8Apache ShenYu Bootstrap"),(0,a.kt)("p",null,"\u5bbf\u4e3b\u673a\u4e2d\uff0cbootstrap\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"\u914d\u7f6e\u6587\u4ef6"),"\u6240\u5728\u76ee\u5f55\u8bb0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap:${current.version}\n> docker run -d \\\n  -p 9195:9195 \\\n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  apache/shenyu-bootstrap:${current.version}\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-shenyu-bootstrap-\u7684\u540c\u65f6\u542f\u52a8-shenyu-agent"},"\u542f\u52a8 ShenYu Bootstrap \u7684\u540c\u65f6\uff0c\u542f\u52a8 ShenYu Agent"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2.4.2\u7248\u672c\u5f00\u59cb\u652f\u6301shenyu-agent")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("p",null,"agent\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-dist/shenyu-agent-dist/src/main/resources/conf"},"shenyu-dist/shenyu-agent-dist/src/main/resources/conf/")," \uff0c\u7f16\u8f91\u597d ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing-point.yaml")," \u540e\uff0c\u5c06\u8fd9\u4e24\u4e2a\u6587\u4ef6\u653e\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\uff0c\u8bb0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"$AGENT_CONF"),"\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/user-guide/observability/observability"},"\u53ef\u89c2\u6d4b\u6027")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62c9\u53d6docker\u955c\u50cf\u5e76\u542f\u52a8")),(0,a.kt)("p",null,"\u9644\u5e26\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"agent")," \u8868\u793a\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-agent"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap:${current.version}\n> docker run -d \\\n  -p 9195:9195 \\\n  -v $AGENT_CONF:/opt/shenyu-bootstrap/agent/conf \\\n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  apache/shenyu-bootstrap:${current.version} agent\n")))}d.isMDXComponent=!0}}]);