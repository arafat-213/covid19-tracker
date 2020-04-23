(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),s=a.n(c),l=(a(43),a(5)),o=a.n(l),d=a(9),i=a(7),m=a(12),u=a.n(m),f=u.a.create({baseURL:"https://api.covid19india.org/data.json"}),p=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),l=s[0],m=s[1],u=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get();case 2:t=e.sent,a=t.data.statewise[0],r=t.data.statewise[0].lastupdatedtime,n(a),m(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),console.log(a),console.log("time stamp",l),{cases:a,updateTimeStamp:l}},v=(a(27),function(e){return n.a.createElement("div",{className:"text-center"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-title"},n.a.createElement("h2",{className:"text-center"},e.count+"")),n.a.createElement("p",{className:"card-text text-center h4"},(t=e.dailyCount)?n.a.createElement("small",{className:"ext-center"},"[+".concat(t,"]")):null,n.a.createElement("br",null)),n.a.createElement("div",{className:"card-text text-nowrap text-center"},n.a.createElement("p",{className:"h5"},"Total ",e.card))));var t}),E=function(){var e=p(),t=e.cases,a=t.confirmed,r=t.deaths,c=t.recovered,s=t.deltaconfirmed,l=t.deltadeaths,o=t.deltarecovered,d=e.updateTimeStamp;return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"card card-confirmed"},n.a.createElement(v,{className:"four wide colum",card:"confirmed",count:a,dailyCount:s}))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"card card-recovered"},n.a.createElement(v,{className:"four wide colum",card:"recovered",count:c,dailyCount:o}))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"card card-active"},n.a.createElement(v,{className:"four wide colum",card:"active",count:a-r-c}))),n.a.createElement("div",{className:"col-sm-3 "},n.a.createElement("div",{className:"card card-deceased"},n.a.createElement(v,{className:"four wide colum card-deceased",card:"deceased",count:r,dailyCount:l})))),n.a.createElement("h6",{style:{marginTop:"8px"},className:"float-right"},"*Last updated at ".concat(d)))},x=a(13),N=a.n(x),y=(a(100),a(36)),h=a.n(y),b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get();case 2:return t=e.sent,a=t.data.statewise,h.a.remove(a,(function(e){return"Total"===e.state})),console.log("state wise",t.data),e.next=8,JSON.stringify(a);case 8:return r=e.sent,e.next=11,JSON.parse(r,(function(e,t){return"object"===typeof t||isNaN(t)?t:parseInt(t,10)}));case 11:c=e.sent,n(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),a},w=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.covid19india.org/v2/state_district_wise.json");case 2:t=e.sent,a=t.data,console.log("District",a),n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),a},F=(a(101),function(e){var t=[],a=w().filter((function(t){return t.state===e.state}));a[0]&&(t=a[0].districtData,console.log("From comp",t));var r=[{dataField:"district",text:"District",sort:!0},{dataField:"delta.confirmed",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"grey"}},"+".concat(e))}},{text:"Confirmed",dataField:"confirmed",sort:!0},{text:"Active",dataField:"active",sort:!0},{dataField:"delta.recovered",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"green"}},"\u21e1","".concat(e))}},{text:"Recovered",dataField:"recovered",sort:!0},{dataField:"delta.deceased",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"red"}},"+".concat(e))}},{text:"Deaths",dataField:"deceased",sort:!0}];return n.a.createElement("div",null,n.a.createElement("p",{className:"text-right"},"*Last updated on: ",e.time),n.a.createElement(N.a,{wrapperClasses:"table-responsive",keyField:"district",columns:r,data:t,hover:!0,bootstrap4:!0,condensed:!0}))}),g=[{dataField:"state",text:"State/UT",sort:!0},{dataField:"deltaconfirmed",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"#f6ac15"}},"\u21e1","".concat(e))}},{dataField:"confirmed",text:"Confirmed",sort:!0},{dataField:"active",text:"Active",sort:!0},{dataField:"deltarecovered",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"green"}},"\u21e1","".concat(e))}},{dataField:"recovered",text:"Recovered",sort:!0},{dataField:"deltadeaths",isDummy:!0,text:"",formatter:function(e,t){return 0===e?n.a.createElement("span",null):n.a.createElement("span",{style:{color:"red"}},"\u21e1","".concat(e))}},{dataField:"deaths",text:"Deaths",sort:!0}],j=[{dataField:"confirmed",order:"desc"}],O={renderer:function(e,t){return n.a.createElement("div",null,n.a.createElement(F,{state:e.state,time:e.lastupdatedtime}))},showExpandColumn:!0},D=function(e){var t=b();return console.log("From state",t),n.a.createElement(N.a,{wrapperClasses:"table-responsive",keyField:"state",data:t,columns:g,hover:!0,bootstrap4:!0,condensed:!0,striped:!0,defaultSorted:j,expandRow:O})},S=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"diplay-3"},"Covid19 Tracker"),n.a.createElement(E,null),n.a.createElement(D,null))};s.a.render(n.a.createElement(S,null),document.querySelector("#root"))},27:function(e,t,a){},38:function(e,t,a){e.exports=a(103)}},[[38,1,2]]]);
//# sourceMappingURL=main.5241fdca.chunk.js.map