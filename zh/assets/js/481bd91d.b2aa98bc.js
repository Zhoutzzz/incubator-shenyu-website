"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3490],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||p;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3887:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],l={title:"Http\u670d\u52a1\u63a5\u5165",keywords:["Http"],description:"Http\u670d\u52a1\u63a5\u5165"},o=void 0,u={unversionedId:"user-guide/http-proxy",id:"version-2.4.1/user-guide/http-proxy",isDocsHomePage:!1,title:"Http\u670d\u52a1\u63a5\u5165",description:"Http\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/http-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/http-proxy",permalink:"/zh/docs/2.4.1/user-guide/http-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/http-proxy.md",version:"2.4.1",frontMatter:{title:"Http\u670d\u52a1\u63a5\u5165",keywords:["Http"],description:"Http\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"gRPC\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.1/user-guide/grpc-proxy"},next:{title:"Motan\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.1/user-guide/motan-proxy"}},d=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 divide \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-divide-\u63d2\u4ef6",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc \u4f53\u7cfb\u7528\u6237\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc-\u4f53\u7cfb\u7528\u6237",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6587\u6863\u65e8\u5728\u5e2e\u52a9 ",(0,p.kt)("inlineCode",{parentName:"p"},"http")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\u6765\u5904\u7406 ",(0,p.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,p.kt)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,p.kt)("a",{parentName:"p",href:"../quick-start/quick-start-http"},"Http\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,p.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"./register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,p.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"./use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,p.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-divide-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 divide \u63d2\u4ef6"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")))),(0,p.kt)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc-\u4f53\u7cfb\u7528\u6237"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc \u4f53\u7cfb\u7528\u6237\uff09"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u7528\u6237  "),(0,p.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,p.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6 \u65b0\u589e\u5982\u4e0b\u4f9d\u8d56:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,p.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"controller")," \u7684\u63a5\u53e3\u4e0a\u52a0\u4e0a ",(0,p.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," \u6ce8\u89e3\u3002"),(0,p.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u628a\u6ce8\u89e3\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Controller")," \u7c7b\u4e0a\u9762\uff0c\u91cc\u9762\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"path"),"\u5c5e\u6027\u5219\u4e3a\u524d\u7f00\uff0c\u5982\u679c\u542b\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"/**")," \u4ee3\u8868\u4f60\u7684\u6574\u4e2a\u63a5\u53e3\u9700\u8981\u88ab\u7f51\u5173\u4ee3\u7406\u3002"))),(0,p.kt)("p",null,"\u793a\u4f8b\u4e00"),(0,p.kt)("p",null,"\u4e0b\u9762\u8868\u793a\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"/test/payment"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," \u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @ShenyuSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n\n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n\n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }\n   }\n')),(0,p.kt)("p",null,"\u793a\u4f8b\u4e8c"),(0,p.kt)("p",null,"\u4e0b\u9762\u8868\u793a\u7684\u662f\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"/order/save")," \u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\uff0c\u800c ",(0,p.kt)("inlineCode",{parentName:"p"},"/order/findById")," \u5219\u4e0d\u4f1a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringMvcClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u542f\u52a8\u4f60\u7684\u9879\u76ee\uff0c\u4f60\u7684\u670d\u52a1\u63a5\u53e3\u63a5\u5165\u5230\u4e86\u7f51\u5173\uff0c\u8fdb\u5165",(0,p.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684",(0,p.kt)("inlineCode",{parentName:"li"},"\u63d2\u4ef6\u5217\u8868 -> http process -> divide"),"\uff0c\u770b\u5230\u81ea\u52a8\u521b\u5efa\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u3002")),(0,p.kt)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u627e\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\uff0c\u8fdb\u884c\u9009\u62e9\u5668\uff0c\u548c\u89c4\u5219\u7684\u6dfb\u52a0\uff0c\u8fdb\u884c\u6d41\u91cf\u7684\u5339\u914d\u7b5b\u9009\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u61c2\u600e\u4e48\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"../selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u60a8\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5f00\u53d1\u5c5e\u4e8e\u4f60\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"http-client"),"\uff0c\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"../developer-shenyu-client"},"\u591a\u8bed\u8a00 Http \u5ba2\u6237\u7aef\u5f00\u53d1"),"\u3002"))),(0,p.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,p.kt)("p",null,"\u5f53\u4f60\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u63a5\u5165\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u540e\uff0c\u8bf7\u6c42\u65b9\u5f0f\u6ca1\u6709\u5f88\u5927\u7684\u53d8\u52a8\uff0c\u5c0f\u7684\u6539\u52a8\u6709\u4e24\u70b9\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u70b9\uff0c\u4f60\u4e4b\u524d\u8bf7\u6c42\u7684\u57df\u540d\u662f\u4f60\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u73b0\u5728\u8981\u6362\u6210\u7f51\u5173\u7684\u57df\u540d\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u70b9\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"contextPath"),"\uff0c\u5982\u679c\u719f\u7684\u8bdd\uff0c\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4e2d\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\u8fdb\u884c\u81ea\u7531\u66f4\u6539\u3002"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"order")," \u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u8bf7\u6c42\u8def\u5f84 ",(0,p.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u73b0\u5728\u5c31\u9700\u8981\u6362\u6210\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"localhost:9195")," \u4e3a\u7f51\u5173\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"ip"),"\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"/order")," \u662f\u4f60\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u53d8\u3002"))))),(0,p.kt)("p",null,"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bbf\u95ee\u4e86\uff0c\u5982\u6b64\u7684\u65b9\u4fbf\u4e0e\u7b80\u5355\u3002"))}c.isMDXComponent=!0}}]);