(window.webpackJsonp=window.webpackJsonp||[]).push([[40,12],{283:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("7efe9a53",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n(283)},286:function(t,e,n){var r=n(44)(!1);r.push([t.i,'.avatar[data-v-2592f4a9]{font-family:"Lato",sans-serif;width:128px;height:128px;display:block;position:relative;transition:border .15s ease-in}.avatar .edit-avatar[data-v-2592f4a9]{background:var(--bs-white);width:40px;height:40px;border-radius:50%;right:0;display:flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer}.avatar .edit-avatar[data-v-2592f4a9]:hover{background:var(--bs-gray-200)}.avatar img[data-v-2592f4a9]{-o-object-fit:cover;object-fit:cover;border-radius:50%}.list-group-item[data-v-2592f4a9]{background-color:transparent;border:0}.list-group-item.nuxt-link-exact-active[data-v-2592f4a9],.list-group-item[data-v-2592f4a9]:hover{color:var(--bs-dark);background-color:var(--bs-gray-300)}.bg-gray-200[data-v-2592f4a9]{background-color:var(--bs-gray-200)}',""]),t.exports=r},289:function(t,e,n){"use strict";n.r(e);n(17),n(37),n(94),n(9),n(55);var r={name:"Sidebar",props:{info:{default:function(){return{}},type:Object}},data:function(){return{defaultImg:"",imageSrc:"",user:{avatar:"",individual_competition:{name:""}},msg:""}},computed:{defaultImage:function(){var t,e;return"個人組/前端工程師"===(null===(t=this.info.individual_competition)||void 0===t?void 0:t.name)?n(203):"個人組/UI設計師"===(null===(e=this.info.individual_competition)||void 0===e?void 0:e.name)?n(204):n(205)}},watch:{info:{handler:function(){this.user.avatar="",this.user.avatar=this.info.avatar},deep:!0}},methods:{editAvatar:function(){var t=this,e=document.querySelector("input[type=file]").files[0],n=new FileReader;n.onload=function(e){var n=e.target.result.split(",")[1];if(n.length<1048576){t.$nuxt.$loading.start();t.$axios.post("/v1/users/info/avatar",{avatar:n}).then((function(e){t.user.avatar=e.data.avatar_url,t.msg={style:"success",icon:"fa-check-circle",content:"已更新成功！頭貼將於四小時內至一日內更新"},t.$emit("alert",t.msg),setTimeout((function(){window.location.reload()}),2e3)})).catch((function(e){t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.response.data.message||"更新失敗！"},t.$emit("alert",t.msg)})).finally((function(){t.$nuxt.$loading.finish()}))}else alert("圖片大小超過限制，圖片限制為 1 MB。")},n.onerror=function(t){alert(t)},n.readAsDataURL(e)}}},o=(n(285),n(36)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4 mb-5 mb-md-0"},[n("div",{staticClass:"bg-light py-6 px-6"},[n("div",{staticClass:"avatar mb-2 mx-auto"},[t._m(0),t._v(" "),n("input",{staticStyle:{visibility:"hidden",height:"0px",display:"block"},attrs:{id:"edit-avatar",type:"file",accept:".png,.jpg,.jpeg"},on:{change:t.editAvatar}}),t._v(" "),n("img",{staticClass:"w-100 h-100 d-block",attrs:{src:t.user.avatar||t.defaultImage,alt:"個人頭貼"}})]),t._v(" "),n("div",{staticClass:"text-center"},[n("small",{staticClass:"text-danger"},[t._v("圖片限制檔案大小為 1 MB")]),t._v(" "),n("p",{staticClass:"fw-bold mb-1"},[t._v(t._s(t.info.nickname))]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v(t._s(t.info.email))]),t._v(" "),t.info.individual_competition?n("p",{staticClass:"d-inline-block bg-white py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.individual_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.team_competition?n("p",{staticClass:"d-inline-block bg-white py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.team_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.medal_name?n("p",[n("img",{staticClass:"pe-1",attrs:{src:t.info.medal_image_url,alt:"徽章"}}),t._v("\n        "+t._s(t.info.medal_name)+"\n      ")]):t._e(),t._v(" "),n("hr")]),t._v(" "),n("div",{staticClass:"list-group mb-5 mt-5 bg-gray-200 p-4 rounded-0"},[n("nuxt-link",{staticClass:"list-group-item list-group-item-action p-4",attrs:{to:"/users/prepare"}},[n("i",{staticClass:"fas fa-grin"}),t._v(" 賽前準備")]),t._v(" "),n("nuxt-link",{staticClass:"list-group-item list-group-item-action p-4",attrs:{to:"/users"}},[n("i",{staticClass:"fas fa-edit"}),t._v(" 編輯個人資料")]),t._v(" "),n("nuxt-link",{staticClass:"list-group-item list-group-item-action p-4",attrs:{to:"/users/record"}},[n("i",{staticClass:"fas fa-file-alt"}),t._v(" 投稿紀錄\n      ")])],1),t._v(" "),n("div",{staticClass:"d-grid"},[n("nuxt-link",{staticClass:"btn btn-primary",class:{disabled:!t.info.user_id},attrs:{to:"/users/"+t.info.user_id,target:"_blank"}},[t._v("查看個人公開頁面")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"edit-avatar position-absolute",attrs:{for:"edit-avatar"}},[e("i",{staticClass:"fas fa-pencil-alt text-dark"})])}],!1,null,"2592f4a9",null);e.default=component.exports},428:function(t,e,n){"use strict";n.r(e);var r={name:"UserRecord",components:{Sidebar:n(289).default},middleware:"routerAuth",meta:{requiresAuth:!0,close:!1},data:function(){return{user:{team_competition:{is_leader:"",name:""}},worksList:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.getUserInfo(),t.getWorkList()}))},methods:{getUserInfo:function(){var t=this;this.$axios.get("/v1/users/info").then((function(e){t.user=e.data.user_info})).catch((function(e){t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.response.data.message||"更新失敗！"}}))},getWorkList:function(){var t=this;this.$axios.get("/v1/users/works").then((function(e){t.worksList=e.data.works_list})).catch((function(e){t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.response.data.message||"更新失敗！"}}))},editWorks:function(t){this.$router.push("/works/edit/".concat(t))},goRouter:function(t,e,n){this.$localStorage.set("team",{id:e,typeId:t,status:n}),this.$router.push("/works/team/".concat(e))}}},o=n(36),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row justify-content-center my-md-7"},[n("Sidebar",{attrs:{info:t.user},on:{edit:t.getUserInfo}}),t._v(" "),n("div",{staticClass:"col-md-6"},[n("h1",{staticClass:"fs-4 text-black mb-5"},[t._v("投稿紀錄")]),t._v(" "),t.worksList.length?[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("關卡名稱")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("作品網址")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("挑戰時間")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("挑戰結果")]),t._v(" "),t.user.individual_competition||t.user.team_competition.is_leader?n("th",{attrs:{scope:"col"}},[t._v("編輯")]):t._e()])]),t._v(" "),n("tbody",t._l(t.worksList,(function(e){return n("tr",{key:e.id},[n("td",{attrs:{scope:"row",width:"200"}},[t._v("\n                  Week"+t._s(e.stage_id)+"-"+t._s(e.stage_name)+"\n                  "),t.user.team_competition&&4===e.works_type_id?n("span",{staticClass:"badge rounded-pill bg-primary"},[n("small",[t._v("前端")])]):t._e(),t._v(" "),t.user.team_competition&&3===e.works_type_id?n("span",{staticClass:"badge rounded-pill bg-primary"},[n("small",[t._v("UI")])]):t._e()]),t._v(" "),n("td",{attrs:{scope:"row",width:"100"}},[n("a",{attrs:{href:e.online_url,target:"_blank"}},[t._v("作品連結")])]),t._v(" "),n("td",{attrs:{scope:"row",width:"120"}},[t._v("\n                  "+t._s(e.create_time.substring(0,10))+"\n                  "+t._s(e.create_time.substring(11,19))+"\n                ")]),t._v(" "),n("td",{attrs:{scope:"row"}},[t._v("\n                  "+t._s(e.is_clear?"成功":"超過提交期限")+"\n                ")]),t._v(" "),t.user.individual_competition||t.user.team_competition.is_leader?n("td",{staticClass:"text-info",attrs:{scope:"row"}},[t.user.team_competition&&t.user.team_competition.is_leader?n("a",{staticClass:"btn btn-sm btn-primary rounded-0",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.goRouter(e.works_type_id,e.id,!0)}}},[t._v("\n                    編輯\n                  ")]):t._e(),t._v(" "),t.user.individual_competition?n("a",{staticClass:"btn btn-sm btn-primary rounded-0",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.editWorks(e.id)}}},[t._v("\n                    編輯\n                  ")]):t._e()]):t._e()])})),0)])])]:[n("p",[t._v("您還沒有關卡資料哦！")])]],2)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);