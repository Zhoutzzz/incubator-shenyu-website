"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1951],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},p=void 0,u={unversionedId:"plugin-center/authority-and-certification/sign-plugin",id:"version-2.4.2/plugin-center/authority-and-certification/sign-plugin",isDocsHomePage:!1,title:"Sign Plugin",description:"sign plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/sign-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/sign-plugin",permalink:"/docs/plugin-center/authority-and-certification/sign-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/sign-plugin.md",version:"2.4.2",frontMatter:{title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"OAuth2 Plugin",permalink:"/docs/plugin-center/authority-and-certification/oauth2-plugin"},next:{title:"Waf Plugin",permalink:"/docs/plugin-center/authority-and-certification/waf-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add AK/SK",id:"add-aksk",children:[]},{value:"Implementation of Gateway Technology",id:"implementation-of-gateway-technology",children:[]},{value:"Authentication Guide",id:"authentication-guide",children:[]},{value:"Request GateWay",id:"request-gateway",children:[]},{value:"Extension",id:"extension",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sign")," is a native plugin of ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," Gateway and is used to process signature authentication of requests.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, through ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," to start the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," management system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," set to enable. If you don't want to use this function, please disable this plugin in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"."),(0,r.kt)("img",{src:"/img/shenyu/plugin/sign/sign_open_en.jpg",width:"80%",height:"80%"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h2",{parentName:"li",id:"plugin-usage"},"Plugin Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introducing ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," dependency in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the gateway"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu sign plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-sign</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu sign plugin end--\x3e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,r.kt)("li",{parentName:"ul"},"Only those matched requests can be authenticated by signature.")),(0,r.kt)("h2",{id:"add-aksk"},"Add AK/SK"),(0,r.kt)("h4",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manage and control the permissions of requests passing through the Apache ShenYu gateway."),(0,r.kt)("li",{parentName:"ul"},"Generate ",(0,r.kt)("inlineCode",{parentName:"li"},"AK/SK")," and use it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign")," plugin to achieve precise authority control based on URI level.")),(0,r.kt)("h4",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"First, we can add a piece of authentication information in ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicConfig")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication")),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manages_add_en.jpg",width:"100%",height:"70%"}),(0,r.kt)("p",null,"Then configure this authentication information"),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_param_en.jpg",width:"50%",height:"40%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AppName\uff1aThe application name associated with this account, it can can fill in or choose (data comes from the application name configured in the Metadata)."),(0,r.kt)("li",{parentName:"ul"},"TelPhone\uff1aTelphone information."),(0,r.kt)("li",{parentName:"ul"},"AppParams\uff1aWhen the requested context path is the same as the AppName\uff0cadd this value to the header, the key is ",(0,r.kt)("inlineCode",{parentName:"li"},"appParam"),"."),(0,r.kt)("li",{parentName:"ul"},"UserId\uff1aGive the user a name, just as an information record."),(0,r.kt)("li",{parentName:"ul"},"ExpandInfo\uff1aDescription of the account."),(0,r.kt)("li",{parentName:"ul"},"PathAuth\uff1aAfter opening, the account only allows access to the resource path configured below."),(0,r.kt)("li",{parentName:"ul"},"ResourcePath\uff1aAllow access to the resource path, support path matching\uff0ce.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/order/**")," .")),(0,r.kt)("p",null,"After submit, a piece of authentication information is generated, which contains ",(0,r.kt)("inlineCode",{parentName:"p"},"AppKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AppSecret"),", which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"AK/SK")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," plugin."),(0,r.kt)("p",null,"Please refer to the detailed instructions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," plugin\uff1a ",(0,r.kt)("a",{parentName:"p",href:"../../plugin-center/authority-and-certification/sign-plugin"},"Sign Plugin"),"."),(0,r.kt)("h4",{id:"pathoperation"},"PathOperation"),(0,r.kt)("p",null,"For the created authentication information, you can click ",(0,r.kt)("inlineCode",{parentName:"p"},"PathOperation")," at the end of a piece of authentication information."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manage_modifyPath_en.jpg",width:"90%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the left is a list of configurable paths, and on the right is a list of paths that allow the account to access."),(0,r.kt)("li",{parentName:"ul"},"Check the resource path, click the ",(0,r.kt)("inlineCode",{parentName:"li"},">")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," in the middle to move the checked data to the corresponding list."),(0,r.kt)("li",{parentName:"ul"},'In the list of configurable paths on the left, click "Editor" at the end of the account information line, and add them in the "Resource Path" in the pop-up box.')),(0,r.kt)("h2",{id:"implementation-of-gateway-technology"},"Implementation of Gateway Technology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adopt ",(0,r.kt)("inlineCode",{parentName:"li"},"AK/SK")," authentication technical scheme."),(0,r.kt)("li",{parentName:"ul"},"Adopt authentication plug-in and Chain of Responsibility Pattern to realize."),(0,r.kt)("li",{parentName:"ul"},"Take effect when the authentication plugin is enabled and all interfaces are configured for authentication.")),(0,r.kt)("h2",{id:"authentication-guide"},"Authentication Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1: ",(0,r.kt)("inlineCode",{parentName:"p"},"AK/SK")," is assigned by the gateway. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AK")," assigned to you is: ",(0,r.kt)("inlineCode",{parentName:"p"},"1TEST123456781")," SK is: ` 506eeb535cf740d7a755cb49f4a1536'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2: Decide the gateway path you want to access, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/service/abc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 3: Construct parameters (the following are general parameters)"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"current timestamp(String)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The number of milliseconds of the current time\uff08gateway will filter requests the before 5 minutes\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/service/abc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The path that you want to request(Modify by yourself according to your configuration of gateway)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed string value")))),(0,r.kt)("p",null,"Sort the above three field natually according to the key, then splice fields and fields, finally splice SK. The following is a code example."),(0,r.kt)("p",null,"Step 1: First, construct a Map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(3);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli())\n   map.put("timestamp","1571711067186");  // Value should be string format of milliseconds\n   map.put("path", "/api/service/abc");\n   map.put("version", "1.0.0");\n')),(0,r.kt)("p",null,"Step 2: Sort the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keys")," naturally, then splice the key and values, and finally splice the ",(0,r.kt)("inlineCode",{parentName:"p"},"SK")," assigned to you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, params.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("506EEB535CF740D7A755CB4B9F4A1536");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The returned sign value should be:",(0,r.kt)("inlineCode",{parentName:"li"},"path/api/service/abctimestamp1571711067186version1.0.0506EEB535CF740D7A755CB4B9F4A1536"))),(0,r.kt)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The final returned value is: ",(0,r.kt)("inlineCode",{parentName:"li"},"A021BF82BE342668B78CD9ADE593D683"),".")),(0,r.kt)("h2",{id:"request-gateway"},"Request GateWay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your visited path is:",(0,r.kt)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Address: http: domain name of gateway ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/service/abc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"header")," Parameter\uff1a"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1571711067186")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp when signing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appKey"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1TEST123456781")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The AK value assigned to you")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sign"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A90E66763793BDBC817CF3B52AAAC041")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The signature obtained above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed value.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The signature plugin will filter requests before ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," minutes by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the authentication fails, will return code ",(0,r.kt)("inlineCode",{parentName:"p"},"401"),", message may change."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "message": "sign is not pass,Please check you sign algorithm!",\n  "data": null\n}\n')),(0,r.kt)("h2",{id:"extension"},"Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../../developer/custom-sign-algorithm"},"dev-sign"),".")))}d.isMDXComponent=!0}}]);