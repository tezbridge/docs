(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{241:function(t,e,r){"use strict";var n=r(85);r.n(n).a},249:function(t,e,r){"use strict";r.r(e);r(73),r(218),r(219),r(51),r(225),r(226);var n,s=r(227),o={props:["src"],data:function(){return{is_shown:!1,progress:0,blob_url:"",toggling:!1}},methods:{toggleGif:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e,r,n,s,o,i,a,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.toggling){t.next=2;break}return t.abrupt("return",!1);case 2:if(this.toggling=!0,this.is_shown=!this.is_shown,!this.blob_url){t.next=7;break}return this.toggling=!1,t.abrupt("return",!1);case 7:return t.next=9,fetch(this.src);case 9:e=t.sent,r=e.body.getReader(),n=+e.headers.get("Content-Length"),s=[],o=0;case 14:return t.next=17,r.read();case 17:if(i=t.sent,a=i.done,u=i.value,!a){t.next=22;break}return t.abrupt("break",27);case 22:Array.from(u).forEach((function(t){return s.push(t)})),o+=u.length,this.progress=Math.floor(o/n*100),t.next=14;break;case 27:c=btoa(s.map((function(t){return String.fromCharCode(t)})).join("")),this.blob_url="data:image/gif;base64,"+c,this.toggling=!1;case 30:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},i=(r(241),r(0)),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{on:{click:t.toggleGif}},[t._v("\n    "+t._s(t.is_shown?"Hide":"Show")+" screenshot animation\n    "),t.is_shown&&100!==t.progress?r("span",[t._v(t._s(t.progress)+"%")]):t._e()]),t._v(" "),t.is_shown?r("img",{attrs:{src:t.blob_url}}):t._e()])}),[],!1,null,"1c7bd47b",null);e.default=a.exports},85:function(t,e,r){}}]);