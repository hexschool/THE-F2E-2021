(window.webpackJsonp=window.webpackJsonp||[]).push([[35,11],{302:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("03310f96",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";n(302)},322:function(t,e,n){var o=n(44)(!1);o.push([t.i,'.avatar[data-v-8e1c0fa0]{font-family:"Lato",sans-serif;width:128px;height:128px;display:block;position:relative;transition:border .15s ease-in}.avatar .edit-avatar[data-v-8e1c0fa0]{background:var(--bs-white);width:40px;height:40px;border-radius:50%;right:0;display:flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer}.avatar .edit-avatar[data-v-8e1c0fa0]:hover{background:var(--bs-gray-200)}.avatar img[data-v-8e1c0fa0]{-o-object-fit:cover;object-fit:cover;border-radius:50%}.list-group-item[data-v-8e1c0fa0]{background-color:transparent;border:0}.list-group-item.active[data-v-8e1c0fa0],.list-group-item.nuxt-link-exact-active[data-v-8e1c0fa0],.list-group-item[data-v-8e1c0fa0]:hover{color:var(--bs-dark);background-color:var(--bs-gray-300)}.list-group-item.disabled[data-v-8e1c0fa0]{cursor:not-allowed}.bg-gray-200[data-v-8e1c0fa0]{background-color:var(--bs-gray-200)}',""]),t.exports=o},339:function(t,e,n){"use strict";n.r(e);n(202),n(17);var o={name:"PublicSideBar",props:{info:{default:function(){return{}},type:Object},week:{default:function(){return 0},type:Number},works:{default:function(){return[]},type:Array}},emits:["stageChange"],data:function(){return{user:{},nowWeek:0,worksList:[]}},computed:{defaultImage:function(){var t,e;return"個人組/前端工程師"===(null===(t=this.info.individual_competition)||void 0===t?void 0:t.name)?n(203):"個人組/UI設計師"===(null===(e=this.info.individual_competition)||void 0===e?void 0:e.name)?n(204):n(205)}},watch:{week:function(t){this.nowWeek=parseInt(t)}},mounted:function(){this.user=this.info,this.worksList=this.works,this.works.length>0&&(this.nowWeek=this.works[0].stage_id,this.$route.query.week&&(this.nowWeek=this.week))},methods:{checkStageHasData:function(t){return!this.worksList.some((function(e){return e.stage_id===t}))}}},r=(n(321),n(36)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"bg-light py-6 px-6"},[n("div",{staticClass:"avatar mb-2 mx-auto"},[n("img",{staticClass:"w-100 h-100",attrs:{src:t.user.avatar||t.defaultImage,alt:"個人頭貼"}})]),t._v(" "),n("div",{staticClass:"text-center"},[n("p",{staticClass:"fw-bold mb-1"},[t._v(t._s(t.info.nickname))]),t._v(" "),n("p",{staticClass:"my-2"},[t._v(t._s(t.info.email))]),t._v(" "),t.info.individual_competition?n("p",{staticClass:"d-inline-block bg-white py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.individual_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.team_competition?n("p",{staticClass:"d-inline-block bg-white py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.team_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.medal_name?n("p",[n("img",{staticClass:"pe-1",attrs:{src:t.info.medal_image_url,alt:"徽章"}}),t._v("\n        "+t._s(t.info.medal_name)+"\n      ")]):t._e(),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"text-start"},[t._v(t._s(t.info.description))])]),t._v(" "),n("div",{staticClass:"list-group mb-5 mt-5 bg-gray-200 p-4 rounded-0"},[n("a",{staticClass:"list-group-item list-group-item-action p-4",class:{active:1===t.nowWeek,disabled:t.checkStageHasData(1)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("stageChange",1)}}},[t._v("Week1-台灣旅遊景點導覽")]),t._v(" "),n("a",{staticClass:"list-group-item list-group-item-action p-4",class:{active:2===t.nowWeek,disabled:t.checkStageHasData(2)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("stageChange",2)}}},[t._v("Week2-自行車道地圖資訊整合網")]),t._v(" "),n("a",{staticClass:"list-group-item list-group-item-action p-4",class:{active:3===t.nowWeek,disabled:t.checkStageHasData(3)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("stageChange",3)}}},[t._v("Week3-全台公車動態時刻查詢應用服務")]),t._v(" "),n("a",{staticClass:"list-group-item list-group-item-action p-4",class:{active:4===t.nowWeek,disabled:t.checkStageHasData(4)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("stageChange",4)}}},[t._v("Week4-薪資數據圖表調查")])]),t._v(" "),t.info.facebook_url?n("a",{staticClass:"d-block text-center text-black text-decoration-none",attrs:{href:t.info.facebook_url,target:"_blank"}},[n("i",{staticClass:"fab fa-facebook-square pe-1"}),t._v("Facebook")]):t._e()])])}),[],!1,null,"8e1c0fa0",null);e.default=component.exports},429:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(56),n(37),n(94),n(140),n(95),n(141),n(39),n(47),n(41),n(339)),c=n(404),l={name:"UserID",components:{PublicSideBar:r.default,Work:c.default},middleware:"routerAuth",meta:{requiresAuth:!1,close:!1},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,d,f,h,m,v,i,k,_,w,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.query,o=t.params,r=t.redirect,c=t.$axios,l=t.error,t.req,d=t.app,e.prev=1,f="",(f=d.$cookies.get("t_sInR5cCI6IkpXVCJ_token"))&&c.setHeader("Authorization","Bearer "+f),m="",v=(h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,i=0;i<32;i+=1)m+=h.charAt(Math.floor(Math.random()*v));return e.next=12,c.get("/v1/users/".concat(o.id,"/info"),{headers:{Cookie:"xsrf-token=".concat(m),"xsrf-token":m}});case 12:return k=e.sent,{},w=0,y=0,k.data.works_list.length>0&&(n&&n.week&&n.type?(w=n.week,y=n.type):k.data.works_list.length>0?(w=k.data.works_list[0].stage_id,y=k.data.works_list[0].works_types_id):r("/works"),k.data.works_list.some((function(t){return t.stage_id===parseInt(w)&&t.works_types_id===parseInt(y)}))||r("/works")),_={title:"".concat(k.data.user_info.nickname," 的個人頁面 | The F2E 前端修練精神時光屋"),image:"https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2021%2F09%2F09%2FF2E-2021-og.png?alt=media&token=04bf41b4-1d3c-4f90-bec5-a5567ccf1fa3",description:k.data.user_info.description?k.data.user_info.description:""},e.abrupt("return",{headInfo:_,user:k.data.user_info,works:k.data.works_list,nowWeek:w,type:y});case 21:e.prev=21,e.t0=e.catch(1),l({statusCode:e.t0.response.status,message:e.t0.response.data.message,statusText:e.t0.response.statusText});case 24:case"end":return e.stop()}}),e,null,[[1,21]])})))()},data:function(){return{params:"",nowRole:"團體組",type:0,user:{},nowWeek:0}},head:function(){return{title:this.headInfo.title,meta:[{hid:"description",name:"description",content:this.headInfo.description},{hid:"og:image",property:"og:image",content:this.headInfo.image},{hid:"og:description",property:"og:description",content:this.headInfo.description},{hid:"og:title",property:"og:title",content:this.headInfo.title}]}},computed:{nowWorkData:function(){var t=this;return this.works.filter((function(e){return e.stage_id===parseInt(t.nowWeek)}))}},created:function(){this.params=this.$route.params.id},mounted:function(){this.getUserInfo(this.params)},methods:{getUserInfo:function(t){var e=this,n="/v1/users/".concat(t,"/info");this.$axios.get(n).then((function(t){e.user=t.data.user_info,e.works=t.data.works_list})).catch((function(){}))},stageChange:function(t){this.nowWeek=t}}},d=n(36),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row justify-content-center my-md-7"},[n("PublicSideBar",{attrs:{info:t.user,works:t.works,week:parseInt(t.nowWeek)},on:{stageChange:t.stageChange}}),t._v(" "),n("Work",{attrs:{info:t.user,"now-work":t.nowWorkData,week:parseInt(t.nowWeek),type:parseInt(t.type)}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);