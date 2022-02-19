"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[296],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},l=void 0,u={unversionedId:"developer/custom-result",id:"version-2.4.2/developer/custom-result",isDocsHomePage:!1,title:"Custom Response",description:"customising response structure",source:"@site/versioned_docs/version-2.4.2/developer/custom-result.md",sourceDirName:"developer",slug:"/developer/custom-result",permalink:"/docs/developer/custom-result",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.2/developer/custom-result.md",version:"2.4.2",frontMatter:{title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/developer/custom-plugin"},next:{title:"Custom Sign Algorithm",permalink:"/docs/developer/custom-sign-algorithm"}},p=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Extensions",id:"extensions",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This doc offers examples for customising response structure in ",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway."),(0,o.kt)("li",{parentName:"ul"},"The response body structure in gateways should be unified, it is recommended for specify yours.")),(0,o.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default implementation class is ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.DefaultShenyuResult"),"."),(0,o.kt)("li",{parentName:"ul"},"Following is the response structure:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ShenyuDefaultEntity implements Serializable {\n\n    private static final long serialVersionUID = -2792556188993845048L;\n\n    private Integer code;\n\n    private String message;\n\n    private Object data;\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The returned ",(0,o.kt)("inlineCode",{parentName:"li"},"json")," as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -100, //response code,\n    "message": "Your parameter error, please check the relevant documentation!", //hint messages\n    "data": null  // business data\n}\n')),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomShenyuResult")," and implements ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.ShenyuResult"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * The interface shenyu result.\n */\npublic interface ShenyuResult<T> {\n\n    /**\n     * The response result.\n     *\n     * @param exchange the exchange\n     * @param formatted the formatted object\n     * @return the result object\n     */\n    default Object result(ServerWebExchange exchange, Object formatted) {\n        return formatted;\n    }\n\n    /**\n     * format the origin, default is json format.\n     *\n     * @param exchange the exchange\n     * @param origin the origin\n     * @return format origin\n     */\n    default Object format(ServerWebExchange exchange, Object origin) {\n        // basic data\n        if (ObjectTypeUtils.isBasicType(origin)) {\n            return origin;\n        }\n        // error result or rpc origin result.\n        return JsonUtils.toJson(origin);\n    }\n\n    /**\n     * the response context type, default is application/json.\n     *\n     * @param exchange the exchange\n     * @param formatted the formatted data that is origin data or byte[] convert string\n     * @return the context type\n     */\n    default MediaType contentType(ServerWebExchange exchange, Object formatted) {\n        return MediaType.APPLICATION_JSON;\n    }\n\n    /**\n     * Error t.\n     *\n     * @param code    the code\n     * @param message the message\n     * @param object  the object\n     * @return the t\n     */\n    T error(int code, String message, Object object);\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Processing sequence: ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"contextType"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"result"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," method performs data formatting. If the data is a basic type and returns itself, other types are converted to ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),", and the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is the original data. Formatting can be performed according to the situation. ",(0,o.kt)("inlineCode",{parentName:"p"},"contextType"),", if it is a basic type, use ",(0,o.kt)("inlineCode",{parentName:"p"},"text/plain"),", the default is ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json"),", the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"formatted")," is the data processed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," method, and can be combined with the return result of ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," for data type Define processing. The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"formatted")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," is the data processed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," method, which returns to itself by default, and can be combined with the return result of ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," for custom processing of the data type.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"T")," is a generic parameter for your response data."),(0,o.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,o.kt)("inlineCode",{parentName:"li"},"Spring Bean"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic ShenyuResult<?> customShenyuResult() {\n    return new CustomShenyuResult();\n}\n")))}m.isMDXComponent=!0}}]);