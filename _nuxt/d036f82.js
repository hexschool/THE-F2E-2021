(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{278:function(t,e,n){"use strict";n.r(e);n(55);var c={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},r=n(36),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.messages,(function(e,c){return n("div",{key:c,staticClass:"alert mb-6 my-2",class:"alert-"+e.style,attrs:{role:"alert"}},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"pe-1 fas",class:e.icon}),t._v(t._s(e.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);