"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=["components"],l={title:"Utilize UDFs to Supercharge Queries in Apache Pinot",author:"PinotDev",author_title:"Pinot Editorial Team",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Scalar Functions that allow users to write and add their functions as a plugin.",keywords:["Pinot","UDF","User-Facing Analytics","Scalar Functions","Real-time data platform"],tags:["Pinot","SLA","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,u={permalink:"/blog/2020/08/08/DevBlog-ScalarUDFs",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2020-08-08-DevBlog-ScalarUDFs.md",source:"@site/blog/2020-08-08-DevBlog-ScalarUDFs.md",title:"Utilize UDFs to Supercharge Queries in Apache Pinot",description:"Scalar Functions that allow users to write and add their functions as a plugin.",date:"2020-08-08T00:00:00.000Z",formattedDate:"August 8, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"SLA",permalink:"/blog/tags/sla"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.51,truncated:!1,prevItem:{title:"Monitoring Apache Pinot with JMX, Prometheus and Grafana",permalink:"/blog/2020/08/08/DevBlog-PinotMonitoring"},nextItem:{title:"Building a culture around metrics and anomaly detection",permalink:"/blog/2020/07/28/DevBlog-AnomalyDetection"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pinot is a realtime distributed OLAP datastore that can answer hundreds of thousands of queries with millisecond latencies. You can head over to ",(0,o.kt)("a",{parentName:"p",href:"https://pinot.apache.org/"},"https://pinot.apache.org/")," to get started with Apache Pinot."),(0,o.kt)("p",null,"While using any database, we can come across a scenario where a function required for the query is not supported out of the box. In such time, we have to resort to raising a pull request for a new function or finding a tedious workaround."),(0,o.kt)("p",null,"Scalar Functions that allow users to write and add their functions as a plugin."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/utilize-udfs-to-supercharge-queries-in-apache-pinot-e488a0f164f1"},"Read more at https://medium.com/apache-pinot-developer-blog/utilize-udfs-to-supercharge-queries-in-apache-pinot-e488a0f164f1")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/10368/0*VtswFI-HcaXyyjhK",alt:"Utilize UDFs to Supercharge Queries in Apache Pinot"})))}m.isMDXComponent=!0}}]);