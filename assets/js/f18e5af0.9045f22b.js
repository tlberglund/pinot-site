"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9932],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7840:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],s={id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot",draft:!0},c=void 0,u={unversionedId:"about/what_is_pinot",id:"about/what_is_pinot",isDocsHomePage:!1,title:"What is Pinot",description:"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed.",source:"@site/docs/about/what_is_pinot.md",sourceDirName:"about",slug:"/about/what_is_pinot",permalink:"/docs/about/what_is_pinot",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/about/what_is_pinot.md",version:"current",frontMatter:{id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot",draft:!0},sidebar:"docs",next:{title:"Features of Pinot",permalink:"/docs/about/features_of_pinot"}},l=[{value:"When should I use it?",id:"when-should-i-use-it",children:[]},{value:"When should I not use it?",id:"when-should-i-not-use-it",children:[]},{value:"Quick example",id:"quick-example",children:[]},{value:"Who uses Pinot?",id:"who-uses-pinot",children:[]}],p={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinot",src:n(5913).Z})),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("p",null,"Pinot is designed to answer OLAP queries with low latency. It is suited in contexts where fast analytics, such as aggregations, are needed on immutable data, possibly, with real-time data ingestion."),(0,r.kt)("h2",{id:"when-should-i-not-use-it"},"When should I not use it?"),(0,r.kt)("p",null,"Pinot is not a replacement for your database, nor a search engine. It addresses fast analytics on immutable data and it is not thought by design, to handle data updates or deletions. Apache Pinot supports dimension ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/users/user-guide-query/lookup-udf-join"},"lookup joins")," currently. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot/issues/8260"},"Full SQL join")," support in Apache Pinot is ",(0,r.kt)("a",{parentName:"p",href:"https://startree.ai/blog/apache-pinot-native-join-support"},"coming soon"),". In the interim, full SQL joins can be performed by querying Pinot via the ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino")," or ",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.io/"},"PrestoDB")," connector."),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/pinot.html"},"Trino Pinot Connector"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/integrations/trino"},"Trino Pinot Integration"),"."),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/current/connector/pinot.html"},"Presto Pinot Connector"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/integrations/presto"},"Presto Pinot Integration"),"."),(0,r.kt)("h2",{id:"quick-example"},"Quick example"),(0,r.kt)("p",null,"Pinot works very well for querying time series data with lots of Dimensions and Metrics.\nFilters and aggregations are easy and fast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT sum(clicks), sum(impressions) FROM AdAnalyticsTable\n  WHERE ((daysSinceEpoch >= 17849 AND daysSinceEpoch <= 17856)) AND accountId IN (123456789)\n  GROUP BY daysSinceEpoch TOP 100\n")),(0,r.kt)("h2",{id:"who-uses-pinot"},"Who uses Pinot?"),(0,r.kt)("p",null,"Pinot powers several big players, including LinkedIn, Uber, Factual, Weibo, Slack and more.."))}d.isMDXComponent=!0},5913:function(e,t,n){t.Z=n.p+"assets/images/pinot-overview-f1b5a17c2e53228461f1510ea2fe0e9b.png"}}]);