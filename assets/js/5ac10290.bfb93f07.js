"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4108],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(y,p(p({ref:n},l),{},{components:t})):r.createElement(y,p({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73217:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],i={sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},u=void 0,c={unversionedId:"deployment/deployment-docker",id:"version-2.4.1/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/docs/2.4.1/deployment/deployment-docker",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-docker.md",version:"2.4.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/2.4.1/deployment/deployment-package"},next:{title:"K8S Deployment",permalink:"/docs/2.4.1/deployment/deployment-k8s"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],s={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,a.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin:2.4.1\n> docker network create shenyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," to store data:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," to store data, copy ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"/$(your_work_dir)/ext-lib"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,a.kt)("p",null,"another way is to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," configuration in  ${your_work_dir}/conf from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"Configure address")," , and then execute the following statement\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, execute the following statement\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,a.kt)("p",null,"another way is to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, execute the following statement\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,a.kt)("p",null,"another way is to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,a.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap:2.4.1\n> docker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap:2.4.1\n")))}d.isMDXComponent=!0}}]);