(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{368:function(t,e,n){t.exports=n.p+"img/ui@2.9042882.png"},369:function(t,e,n){t.exports=n.p+"img/frontend@2.89336bc.png"},406:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(56),{mixins:[{data:function(){return{teamAuth:!1}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/v1/users/info");case 3:n=e.sent,data=n.data,data.user_info.team_competition.is_leader||t.$router.push("/users"),t.teamAuth=!0,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}}],middleware:"routerAuth",meta:{requiresAuth:!0,close:!0},methods:{goRouter:function(t,e){this.$localStorage.set("team",{id:t,status:e}),this.$router.push("/works/team/create")}}}),o=n(36),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("div",{staticClass:"row justify-content-center my-md-7"},[r("h2",{staticClass:"fs-4 text-center mb-7"},[t._v("投稿關卡 - 團體組")]),t._v(" "),r("div",{staticClass:"col-md-4 col-lg-3 d-flex justify-content-center mb-5 mb-md-0"},[r("a",{staticClass:"text-decoration-none link-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goRouter(3,!1)}}},[r("img",{staticClass:"img-fluid mb-2",staticStyle:{height:"306px","object-fit":"contain"},attrs:{src:n(368),alt:""}}),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-md-4 col-lg-3 d-flex justify-content-center"},[r("a",{staticClass:"text-decoration-none link-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goRouter(4,!1)}}},[r("img",{staticClass:"img-fluid mb-2",staticStyle:{height:"306px","object-fit":"contain"},attrs:{src:n(369),alt:""}}),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"fs-5 text-center"},[t._v("\n          投稿團體組 UI"),n("i",{staticClass:"fas fa-arrow-right ps-2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"fs-5 text-center"},[t._v("\n          投稿團體組前端"),n("i",{staticClass:"fas fa-arrow-right ps-2"})])}],!1,null,null,null);e.default=component.exports}}]);