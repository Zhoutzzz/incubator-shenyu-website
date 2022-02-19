"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5648],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=m(a),g=r,c=N["".concat(d,".").concat(g)]||N[g]||k[g]||l;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7857:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return o},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Admin Property Config",keywords:["Config"],description:"Admin Property Config"},d=void 0,m={unversionedId:"user-guide/property-config/admin-property-config",id:"version-2.4.2/user-guide/property-config/admin-property-config",isDocsHomePage:!1,title:"Admin Property Config",description:"Admin Property Config",source:"@site/versioned_docs/version-2.4.2/user-guide/property-config/admin-property-config.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/admin-property-config",permalink:"/docs/user-guide/property-config/admin-property-config",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/user-guide/property-config/admin-property-config.md",version:"2.4.2",frontMatter:{title:"Admin Property Config",keywords:["Config"],description:"Admin Property Config"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Selector And Rule Config",permalink:"/docs/user-guide/admin-usage/selector-and-rule"},next:{title:"Client Property Config",permalink:"/docs/user-guide/property-config/client-property-config"}},o=[{value:"Property Config",id:"property-config",children:[]},{value:"Property Detail",id:"property-detail",children:[]}],k={toc:o};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This paper mainly explains how to configure Apache ShenYu properties on the admin side."),(0,l.kt)("img",{src:"/img/shenyu/config/shenyu_admin_application_config.png",width:"80%",height:"70%"}),(0,l.kt)("h3",{id:"property-config"},"Property Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'shenyu:\n  register:\n    registerType: http #http #zookeeper #etcd #nacos #consul\n    serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n      checked: true\n      zombieCheckTimes: 5\n      scheduledTime: 10\n      nacosNameSpace: ShenyuRegisterCenter\n  database:\n    dialect: mysql\n    init_script: "META-INF/schema.sql"\n    init_enable: true\n  sync:\n    websocket:\n      enabled: true\n#      zookeeper:\n#        url: localhost:2181\n#        sessionTimeout: 5000\n#        connectionTimeout: 2000\n#      http:\n#        enabled: true\n#      nacos:\n#        url: localhost:8848\n#        namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n#        username:\n#        password:\n#        acm:\n#          enabled: false\n#          endpoint: acm.aliyun.com\n#          namespace:\n#          accessKey:\n#          secretKey:\n#    etcd:\n#      url: http://localhost:2379\n#    consul:\n#      url: http://localhost:8500\n  aes:\n    secret:\n      key: 2095132720951327\n      iv: 6075877187097700\n  ldap:\n    enabled: false\n    url: ldap://xxxx:xxx\n    bind-dn: cn=xxx,dc=xxx,dc=xxx\n    password: xxxx\n    base-dn: ou=xxx,dc=xxx,dc=xxx\n    object-class: person\n    login-field: cn\n  jwt:\n    expired-seconds: 86400000\n  shiro:\n    white-list:\n      - /\n      - /favicon.*\n      - /static/**\n      - /index**\n      - /plugin\n      - /platform/**\n      - /websocket\n      - /configs/**\n      - /shenyu-client/**\n      - /error\n      - /actuator/health\n      - /swagger-ui.html\n      - /webjars/**\n      - /swagger-resources/**\n      - /v2/api-docs\n      - /csrf\n  swagger:\n    enable: true\n\n')),(0,l.kt)("h3",{id:"property-detail"},"Property Detail"),(0,l.kt)("h5",{id:"shenyuregister-config"},"shenyu.register config"),(0,l.kt)("p",null,"This section describes configurations related to client access. For details about client access principles, see: ",(0,l.kt)("a",{parentName:"p",href:"../../design/register-center-design"},"Application Client Access")," , for client access configuration, see: ",(0,l.kt)("a",{parentName:"p",href:"../register-center-access"},"Application Client Access Config")," ."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"registerType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"http"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Which mode to use for registry. Currently, http, zookeeper, etcd, consul and nacos are supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"serverLists"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Configure the address of the registry. If ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," is used, you do not need to enter this parameter. In clustering, multiple addresses are separated by commas (,).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"props"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value of the property varies according to the registerType.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"props")," config")),(0,l.kt)("p",null,"The value of the attribute varies according to the registerType."),(0,l.kt)("p",null,"When the registerType is ",(0,l.kt)("inlineCode",{parentName:"p"},"http"),", the supported properties are as follows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"checked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"is checked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"zombieCheckTimes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"how many times does it fail to detect the service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scheduledTime"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"timed detection interval time")))),(0,l.kt)("p",null,"When the registerType is ",(0,l.kt)("inlineCode",{parentName:"p"},"zookeeper"),", the supported properties are as follows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"30000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"session timeout(millisecond)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"connection timeout(millisecond)")))),(0,l.kt)("p",null,"When the registerType is ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd"),", no properties are provided for the time being."),(0,l.kt)("p",null,"When the registerType is ",(0,l.kt)("inlineCode",{parentName:"p"},"nacos"),", the supported properties are as follows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nacosNameSpace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},'""'),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},'""'),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},'""'),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},'""'),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,l.kt)("p",null,"When the registerType is ",(0,l.kt)("inlineCode",{parentName:"p"},"consul"),", the supported properties are as follows."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The interval of each polling of monitoring metadata, in seconds, the default value is 1 second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"wait-time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"55"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"# wait-time: The waiting time for each polling of metadata monitoring, in seconds, the default value is 55 second .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"metadata-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shenyu/register")),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Metadata path name, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"shenyu/register"),".")))),(0,l.kt)("h5",{id:"shenyudatabase-config"},"shenyu.database config"),(0,l.kt)("p",null,"Database configuration when ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," is started."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dialect"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"h2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"which database is used when admin is started.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"init_script"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"META-INF/schema.h2.sql")),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"database initialization script.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"init_enable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to initialize.")))),(0,l.kt)("h5",{id:"shenyusync-config"},"shenyu.sync config"),(0,l.kt)("p",null,"The Admin System and the Apache ShenYu gateway use data synchronization configurations."),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"websocket")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable websocket for data synchronization.")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"zookeeper")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"zookeeper server url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"session timeout(millisecond)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"connection timeout(millisecond)")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"http long polling")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refreshInterval"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5(minute)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Periodically fetch data from the database and load it into memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"notifyBatchSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"notify clients in batches")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"nacos")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"nacos url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"acm"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"aliyun ACM service configuration")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"acm")," config")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ACM service address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"etcd url")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"consul")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"consul url")))),(0,l.kt)("h5",{id:"shenyuaessecret-config"},"shenyu.aes.secret config"),(0,l.kt)("p",null,"aes secret properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"key"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2095132720951327")),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iv"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"iv")))),(0,l.kt)("h5",{id:"shenyuldap-config"},"shenyu.ldap config"),(0,l.kt)("p",null,"Spring ldap properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ldap url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"bind-dn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UserDn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"base-dn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"searchBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object-class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"person")),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"login-field"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"cn")),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"searchBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"connect timeout(millisecond)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"readTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"read timeout(millisecond)")))),(0,l.kt)("h5",{id:"shenyujwt-config"},"shenyu.jwt config"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jwt")," properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"expired-seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"center"},"24 ",(0,l.kt)("em",{parentName:"td"},"60")," 60 * 1000L"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"expiration time(millisecond)")))),(0,l.kt)("h5",{id:"shenyushiro-config"},"shenyu.shiro config"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shiro")," properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"white-list"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"white list")))))}N.isMDXComponent=!0}}]);