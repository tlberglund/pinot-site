/*! For license information please see 35310c5a.ca1a0dd5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{129:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,p=m["".concat(o,".").concat(d)]||m[d]||b[d]||s;return t?a.a.createElement(p,i(i({ref:n},c),{},{components:t})):a.a.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},130:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)t.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},133:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},137:function(e,n,t){"use strict";var r=t(0),a=t.n(r),s=t(130),o=t.n(s);t(58);n.a=function(e){var n=e.children,t=e.classNames,r=e.fill,s=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(t,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==s}),role:"alert"},!1!==s&&a.a.createElement("i",{className:o()("feather","icon-"+(s||l))}),n)}},138:function(e,n,t){"use strict";var r=t(0),a=t(139);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},139:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},141:function(e,n,t){"use strict";var r=t(0),a=t.n(r),s=t(138),o=t(133),i=t(59),l=t.n(i);var c=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,m=e.values,b=e.groupId,d=e.className,p=Object(s.a)(),g=p.tabGroupChoices,f=p.setTabGroupChoices,h=Object(r.useState)(i),O=h[0],y=h[1],j=r.Children.toArray(e.children),v=[];if(null!=b){var N=g[b];null!=N&&N!==O&&m.some((function(e){return e.value===N}))&&y(N)}var S=function(e){var n=e.currentTarget,t=v.indexOf(n),r=m[t].value;y(r),null!=b&&(f(b,r),setTimeout((function(){var e,t,r,a,s,o,i,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,s=e.right,o=window,i=o.innerHeight,c=o.innerWidth,t>=0&&s<=c&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case u:var r=v.indexOf(e.target)+1;t=v[r]||v[0];break;case c:var a=v.indexOf(e.target)-1;t=v[a]||v[v.length-1]}null===(n=t)||void 0===n||n.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:T,onFocus:S,onClick:S},t)}))),n?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},142:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),s=(t(0),t(129)),o=t(137),i=t(141),l=t(142),c={title:"Response Format",sidebar_label:"rest",description:"REST Response Format"},u={unversionedId:"user-guide/response-format",id:"user-guide/response-format",isDocsHomePage:!1,title:"Response Format",description:"REST Response Format",source:"@site/docs/user-guide/response-format.md",sourceDirName:"user-guide",slug:"/user-guide/response-format",permalink:"/docs/user-guide/response-format",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide/response-format.md",version:"current",sidebar_label:"rest",frontMatter:{title:"Response Format",sidebar_label:"rest",description:"REST Response Format"}},m=[{value:"Standard-SQL response",id:"standard-sql-response",children:[]},{value:"PQL response",id:"pql-response",children:[]}],b={toc:m};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"standard-sql-response"},"Standard-SQL response"),Object(s.b)("p",null,"Response is returned in a SQL-like tabular structure. Note, this is the response returned from the standard-SQL endpoint. For PQL endpoint response, skip to ",Object(s.b)("a",{parentName:"p",href:"/docs/user-guide/response-format"},"PQL endpoint response\u200b")),Object(s.b)(i.a,{block:!0,defaultValue:"Aggregations",urlKey:"arch",values:[{label:"Selections",value:"Selections"},{label:"Aggregations",value:"Aggregations"},{label:"GroupBy",value:"GroupBy"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"Selections",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'$ curl -H "Content-Type: application/json" -X POST \\\n   -d \'{"sql":"SELECT moo, bar, foo FROM myTable ORDER BY foo DESC"}\' \\\n   http://localhost:8099/query/sql\n{\n  "exceptions": [], \n  "minConsumingFreshnessTimeMs": 0, \n  "numConsumingSegmentsQueried": 0, \n  "numDocsScanned": 6, \n  "numEntriesScannedInFilter": 0, \n  "numEntriesScannedPostFilter": 18, \n  "numGroupsLimitReached": false, \n  "numSegmentsMatched": 2, \n  "numSegmentsProcessed": 2, \n  "numSegmentsQueried": 2, \n  "numServersQueried": 1, \n  "numServersResponded": 1, \n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "LONG",\n        "INT",\n        "STRING"\n      ], \n      "columnNames": [\n        "moo", \n        "bar",\n        "foo"\n      ]\n    }, \n    "rows": [\n      [ \n        40015, \n        2019,\n        "xyz"\n      ], \n      [\n        1002,\n        2001,\n        "pqr"\n      ], \n      [\n        20555,\n        1988,\n        "pqr"\n      ],\n      [ \n        203,\n        2010,\n        "pqr"\n      ], \n      [\n        500,\n        2008,\n        "abc"\n      ], \n      [\n        60, \n        2003,\n        "abc"\n      ]\n    ]\n  }, \n  "segmentStatistics": [], \n  "timeUsedMs": 4, \n  "totalDocs": 6, \n  "traceInfo": {}\n}\n'))),Object(s.b)(l.a,{value:"Aggregations",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'$ curl -X POST \\\n  -d \'{"sql":"SELECT SUM(moo), MAX(bar), COUNT(*) FROM myTable"}\' \\\n  localhost:8099/query/sql -H "Content-Type: application/json" \n{\n  "exceptions": [], \n  "minConsumingFreshnessTimeMs": 0, \n  "numConsumingSegmentsQueried": 0, \n  "numDocsScanned": 6, \n  "numEntriesScannedInFilter": 0, \n  "numEntriesScannedPostFilter": 12, \n  "numGroupsLimitReached": false, \n  "numSegmentsMatched": 2, \n  "numSegmentsProcessed": 2, \n  "numSegmentsQueried": 2, \n  "numServersQueried": 1, \n  "numServersResponded": 1, \n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "DOUBLE", \n        "DOUBLE", \n        "LONG"\n      ], \n      "columnNames": [\n        "sum(moo)", \n        "max(bar)", \n        "count(*)"\n      ]\n    }, \n    "rows": [\n      [\n        62335, \n        2019.0, \n        6\n      ]\n    ]\n  }, \n  "segmentStatistics": [], \n  "timeUsedMs": 87, \n  "totalDocs": 6, \n  "traceInfo": {}\n}\n'))),Object(s.b)(l.a,{value:"GroupBy",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'$ curl -X POST \\\n  -d \'{"sql":"SELECT SUM(moo), MAX(bar) FROM myTable GROUP BY foo ORDER BY foo"}\' \\\n  localhost:8099/query/sql -H "Content-Type: application/json" \n{\n  "exceptions": [], \n  "minConsumingFreshnessTimeMs": 0, \n  "numConsumingSegmentsQueried": 0, \n  "numDocsScanned": 6, \n  "numEntriesScannedInFilter": 0, \n  "numEntriesScannedPostFilter": 18, \n  "numGroupsLimitReached": false, \n  "numSegmentsMatched": 2, \n  "numSegmentsProcessed": 2, \n  "numSegmentsQueried": 2, \n  "numServersQueried": 1, \n  "numServersResponded": 1, \n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "STRING", \n        "DOUBLE", \n        "DOUBLE"\n      ], \n      "columnNames": [\n        "foo", \n        "sum(moo)", \n        "max(bar)"\n      ]\n    }, \n    "rows": [\n      [\n        "abc", \n        560.0, \n        2008.0\n      ], \n      [\n        "pqr", \n        21760.0, \n        2010.0\n      ], \n      [\n        "xyz", \n        40015.0, \n        2019.0\n      ]\n    ]\n  }, \n  "segmentStatistics": [], \n  "timeUsedMs": 15, \n  "totalDocs": 6, \n  "traceInfo": {}\n}\n')))),Object(s.b)("p",null,"where:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Response Field"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"resultTable"),Object(s.b)("td",{parentName:"tr",align:null},"This contains everything needed to process the response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"resultTable.dataSchema"),Object(s.b)("td",{parentName:"tr",align:null},"This describes schema of the response (columnNames and their dataTypes)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"resultTable.dataSchema.columnNames"),Object(s.b)("td",{parentName:"tr",align:null},"columnNames in the response.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"resultTable.dataSchema.columnDataTypes"),Object(s.b)("td",{parentName:"tr",align:null},"DataTypes for each column")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"resultTable.rows"),Object(s.b)("td",{parentName:"tr",align:null},"Actual content with values. This is an array of arrays. number of rows depends on the limit value in the query. The number of columns in each row is equal to the length of (resultTable.dataSchema.columnNames)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"timeUsedms"),Object(s.b)("td",{parentName:"tr",align:null},"Total time taken as seen by the broker before sending the response back to the client")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"totalDocs"),Object(s.b)("td",{parentName:"tr",align:null},"This is number of documents/records in the table")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numServersQueried"),Object(s.b)("td",{parentName:"tr",align:null},"represents the number of servers queried by the broker (note that this may be less than the total number of servers since broker can apply some optimizations to minimize the number of servers)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numServersResponded"),Object(s.b)("td",{parentName:"tr",align:null},"This should be equal to the numServersQueried. If this is not the same, then one of more servers might have timed out. If numServersQueried != numServersResponded the results can be considered partial and clients can retry the query with exponential back off.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numSegmentsQueried"),Object(s.b)("td",{parentName:"tr",align:null},"Total number of segmentsQueried for this query. it may be less than the total number of segments since broker can apply optimizations.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numSegmentsMatched"),Object(s.b)("td",{parentName:"tr",align:null},"This is the number of segments actually processed. This indicates the effectiveness of pruning logic (based on partitioning, time etc).")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numSegmentsProcessed"),Object(s.b)("td",{parentName:"tr",align:null},"Actual number of segments that were processed. This is where the majority of the time is spent.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numDocScanned"),Object(s.b)("td",{parentName:"tr",align:null},"The number of docs/records that were scanned to process the query. This includes the docs scanned in filter phase (this can be zero if columns in query are indexed) and post filter.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numEntriesScannedInFilter"),Object(s.b)("td",{parentName:"tr",align:null},"This along with numEntriesScannedInPostFilter should give an idea on where most of the time is spent during query processing. If this is high, enabling indexing for columns in tableConfig can be one way to bring it down.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numEntriesScannedPostFilter"),Object(s.b)("td",{parentName:"tr",align:null},"This along with numEntriesScannedInPostFilter should give an idea on where most of the time is spent during query processing. A high number for this means the selectivity is low (i.e. pinot needs to scan a lot of records to answer the query). If this is high, adding regular inverted/bitmap index will not  help. However, consider using start-tree index.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"numGroupsLimitReached"),Object(s.b)("td",{parentName:"tr",align:null},"If the query has group by clause and top K, pinot drops new entries after the numGroupsLimit is reached. If this boolean is set to true then the query result may not be accurate. Note that the default value for numGroupsLimit is 100k and should be sufficient for most use cases.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"exceptions"),Object(s.b)("td",{parentName:"tr",align:null},"Will contain the stack trace if there is any exception processing the query.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"segmentStatistics"),Object(s.b)("td",{parentName:"tr",align:null},"N/A")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"traceInfo"),Object(s.b)("td",{parentName:"tr",align:null},"If trace is enabled (can be enabled for each query), this will contain the timing for each stage and each segment. Advanced feature and intended for dev/debugging purposes")))),Object(s.b)("h2",{id:"pql-response"},"PQL response"),Object(s.b)(o.a,{type:"info",mdxType:"Alert"}," PQL endpoint is deprecated, and will soon be removed. The standard sql endpoint is the recommended endpoint.."),Object(s.b)("p",null,"The response received from PQL endpoint is different depending on the type of the query. "),Object(s.b)(i.a,{block:!0,defaultValue:"Aggregations",urlKey:"arch",values:[{label:"Selections",value:"Selections"},{label:"Aggregations",value:"Aggregations"},{label:"GroupBy",value:"GroupBy"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"Selections",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select * from flights limit 3"}\' \\\n  http://localhost:8099/query\n\n\n{\n "selectionResults":{\n    "columns":[\n       "Cancelled",\n       "Carrier",\n       "DaysSinceEpoch",\n       "Delayed",\n       "Dest",\n       "DivAirports",\n       "Diverted",\n       "Month",\n       "Origin",\n       "Year"\n    ],\n    "results":[\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "SFO",\n          [],\n          "0",\n          "3",\n          "LAX",\n          "2014"\n       ],\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "LAX",\n          [],\n          "0",\n          "3",\n          "SFO",\n          "2014"\n       ],\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "SFO",\n          [],\n          "0",\n          "3",\n          "LAX",\n          "2014"\n       ]\n    ]\n },\n "traceInfo":{},\n "numDocsScanned":3,\n "aggregationResults":[],\n "timeUsedMs":10,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":102\n}\n'))),Object(s.b)(l.a,{value:"Aggregations",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select count(*) from flights"}\' \\\n  http://localhost:8099/query\n\n\n{\n "traceInfo":{},\n "numDocsScanned":17,\n "aggregationResults":[\n    {\n       "function":"count_star",\n       "value":"17"\n    }\n ],\n "timeUsedMs":27,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":17\n}\n'))),Object(s.b)(l.a,{value:"GroupBy",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select count(*) from flights group by Carrier"}\' \\\n  http://localhost:8099/query\n\n\n{\n "traceInfo":{},\n "numDocsScanned":23,\n "aggregationResults":[\n    {\n       "groupByResult":[\n          {\n             "value":"10",\n             "group":["AA"]\n          },\n          {\n             "value":"9",\n             "group":["VX"]\n          },\n          {\n             "value":"4",\n             "group":["WN"]\n          }\n       ],\n       "function":"count_star",\n       "groupByColumns":["Carrier"]\n    }\n ],\n "timeUsedMs":47,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":23\n}\n')))))}d.isMDXComponent=!0}}]);