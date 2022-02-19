"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2303],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],p={title:"SPI Design",keywords:["spi design"],description:"spi-design"},d=void 0,l={unversionedId:"design/spi-design",id:"version-2.4.1/design/spi-design",isDocsHomePage:!1,title:"SPI Design",description:"spi-design",source:"@site/versioned_docs/version-2.4.1/design/spi-design.md",sourceDirName:"design",slug:"/design/spi-design",permalink:"/docs/2.4.1/design/spi-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/design/spi-design.md",version:"2.4.1",frontMatter:{title:"SPI Design",keywords:["spi design"],description:"spi-design"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Application Client Access",permalink:"/docs/2.4.1/design/register-center-design"},next:{title:"Local Deployment",permalink:"/docs/2.4.1/deployment/deployment-local"}},s=[{value:"Registry Center",id:"registry-center",children:[]},{value:"Metrics Center",id:"metrics-center",children:[]},{value:"Load Balance",id:"load-balance",children:[]},{value:"RateLimiter",id:"ratelimiter",children:[]},{value:"Match Strategy",id:"match-strategy",children:[]},{value:"Parameter Data",id:"parameter-data",children:[]},{value:"Predicate Judge",id:"predicate-judge",children:[]}],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SPI, called Service Provider Interface, is a built-in JDK Service that provides discovery function and a dynamic replacement discovery mechanism."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-spi"},"shenyu-spi")," is a custom SPI extension implementation for Apache Shenyu gateway. The design and implementation principles refer to ",(0,a.kt)("a",{parentName:"p",href:"https://dubbo.apache.org/en/docs/v2.7/dev/impls/"},"SPI Extension Implementations")," ."),(0,a.kt)("h3",{id:"registry-center"},"Registry Center"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Consul"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper")," are supported. The expansion of the registry including client and server, interface respectively ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuServerRegisterRepository")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuClientRegisterRepository"),"."),(0,a.kt)("h3",{id:"metrics-center"},"Metrics Center"),(0,a.kt)("p",null,"Responsible for service monitoring, loading concrete implementation through ",(0,a.kt)("inlineCode",{parentName:"p"},"SPI"),", currently support ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus"),", service interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"MetricsBootService"),"."),(0,a.kt)("h3",{id:"load-balance"},"Load Balance"),(0,a.kt)("p",null,"Select one of the service providers to call. Currently, the supported algorithms are ",(0,a.kt)("inlineCode",{parentName:"p"},"Has"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Random"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"RoundRobin"),", and the extended interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalance"),"."),(0,a.kt)("h3",{id:"ratelimiter"},"RateLimiter"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimiter")," plugin, which stream limiting algorithm to use, currently supporting ",(0,a.kt)("inlineCode",{parentName:"p"},"Concurren"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LeakyBucke"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SlidingWindow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenBucket"),", the extension interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimiterAlgorithm"),"."),(0,a.kt)("h3",{id:"match-strategy"},"Match Strategy"),(0,a.kt)("p",null,"Which matching method to use when adding selectors And rules, currently supports ",(0,a.kt)("inlineCode",{parentName:"p"},"And"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Or"),", And the extension interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"."),(0,a.kt)("h3",{id:"parameter-data"},"Parameter Data"),(0,a.kt)("p",null,"Currently, ",(0,a.kt)("inlineCode",{parentName:"p"},"URI"),",",(0,a.kt)("inlineCode",{parentName:"p"},"RequestMethod"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"IP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Host"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," are supported. The extended interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"ParameterData"),"."),(0,a.kt)("h3",{id:"predicate-judge"},"Predicate Judge"),(0,a.kt)("p",null,"Which conditional policy to use when adding selectors and rules currently supports ",(0,a.kt)("inlineCode",{parentName:"p"},"Match"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Contains"),",",(0,a.kt)("inlineCode",{parentName:"p"},"Equals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Groovy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SpEL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TimerAfter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TimerBefore"),". The extension interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"."))}u.isMDXComponent=!0}}]);