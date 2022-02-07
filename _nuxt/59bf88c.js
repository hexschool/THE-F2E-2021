(window.webpackJsonp=window.webpackJsonp||[]).push([[44,5,13],{278:function(t,e,r){"use strict";r.r(e);r(55);var n={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},o=r(36),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.messages,(function(e,n){return r("div",{key:n,staticClass:"alert mb-6 my-2",class:"alert-"+e.style,attrs:{role:"alert"}},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"pe-1 fas",class:e.icon}),t._v(t._s(e.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){t.exports=r.p+"img/week1.1822666.png"},280:function(t,e,r){t.exports=r.p+"img/week2.3ba5070.png"},281:function(t,e,r){t.exports=r.p+"img/week3.4b175ab.png"},282:function(t,e,r){t.exports=r.p+"img/week4.71c10bb.png"},287:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("307f440e",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";r(287)},294:function(t,e,r){var n=r(44)(!1);n.push([t.i,".scrollBar[data-v-d798a2d6]::-webkit-scrollbar{display:none}",""]),t.exports=n},296:function(t,e,r){"use strict";r.r(e);r(202),r(46),r(38);var n={name:"Card",props:{worksList:{type:Array,default:function(){return[]}},userType:{type:Number,default:0},colNum:{type:Number,default:4}},data:function(){return{authStatus:!1}},created:function(){this.$cookies.get("t_sInR5cCI6IkpXVCJ_token")&&(this.authStatus=!0)},mounted:function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)}))},methods:{renderName:function(t){return 1===t?"UI Design":2===t?"Frontend":3===t?"Team-UI":4===t?"Team-Frontend":"發生系統錯誤"},popperName:function(t){return 1===t?"UI 設計":2===t?"前端工程":3===t?"團體組 UI 設計":4===t?"團體組前端工程":"發生系統錯誤"},defaultImg:function(t){return 1===t?r(279):2===t?r(280):3===t?r(281):4===t?r(282):void 0},defaultAvaterImg:function(t){return r(1===t?204:2===t?203:205)},onlineName:function(t){return 1===t||3===t?"線上標示文件":2===t||4===t?"線上觀看連結":"發生系統錯誤"}}},o=(r(293),r(36)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.worksList,(function(e){return r("div",{key:e.id,class:"col-lg-"+t.colNum+" col-md-6 mb-4"},[r("div",{staticClass:"card h-100 px-4 py-3"},[r("div",{staticClass:"card-header mb-2 d-flex justify-content-between"},[r("p",{staticClass:"mb-2 border-start border-3 ps-1",class:{"border-warning":1===e.works_types_id,"border-info":2===e.works_types_id,"border-primary":3===e.works_types_id||4===e.works_types_id},attrs:{"data-bs-placement":"top","data-bs-toggle":"popover","data-bs-trigger":"hover focus","data-bs-content":t.popperName(e.works_types_id),tabindex:"0"}},[t._v("\n          "+t._s(t.renderName(e.works_types_id))+"\n        ")]),t._v(" "),r("p",{staticClass:"mb-2"},[t._v("Week"+t._s(e.stage_id))])]),t._v(" "),r("div",{staticClass:"card-body d-flex flex-column"},[r("div",[r("nuxt-link",{staticClass:"d-flex align-items-center mb-2 text-decoration-none link-dark",attrs:{to:"/users/"+e.user_id,target:"_blank"}},[r("img",{staticClass:"rounded-circle",attrs:{src:e.avatar||t.defaultAvaterImg(e.works_types_id),width:"32",height:"32"}}),t._v(" "),1!==e.works_types_id||2!==e.works_types_id?r("p",{staticClass:"mb-0 mx-3 text-truncate"},[t._v(t._s(e.nickname))]):r("p",{staticClass:"mb-0 mx-3"},[t._v(t._s(e.nickname))])]),t._v(" "),r("nuxt-link",{staticClass:"h-100",attrs:{to:"/users/"+e.user_id,target:"_blank"}},[t._l(e.images,(function(e,n){return[e.is_cover?r("img",{key:"img"+n,staticClass:"img-fluid mb-2",attrs:{src:e.image_url}}):t._e()]})),t._v(" "),e.images.length?t._e():r("img",{staticClass:"img-fluid mb-2",attrs:{src:t.defaultImg(e.stage_id)}})],2)],1),t._v(" "),r("div",{staticClass:"d-flex flex-column",class:{"mt-auto":e.tags.length,"h-100":!e.tags.length}},[r("div",{class:{"mb-auto":!e.tags.length}},[r("div",{staticClass:"mb-2"},[t.authStatus?r("small",{staticClass:"mb-1 d-block"}):t._e(),t._v(" "),r("small",{staticClass:"me-4"},[t._v("\n                "+t._s(e.upvotes)+" 人喜歡\n                "),1===e.works_types_id?r("span",[t._v("｜ "+t._s(e.uses||0)+" 人採用")]):t._e()])]),t._v(" "),r("div",{staticClass:"mb-2 pb-2 d-flex overflow-auto scrollBar",class:{"border-bottom":e.tags.length}},t._l(e.tags,(function(e){return r("div",{key:"tag"+e.id,staticClass:"me-1",attrs:{href:"#"}},[r("span",{staticClass:"badge rounded-pill bg-light text-dark"},[t._v(t._s(e.name))])])})),0)]),t._v(" "),r("div",{staticClass:"d-grid gap-2"},[r("a",{staticClass:"btn btn-primary",class:e.online_url?"":"disabled",attrs:{href:e.online_url,target:"_blank"}},[t._v(t._s(t.onlineName(e.works_types_id)))]),t._v(" "),r("a",{staticClass:"btn btn-primary",class:e.file_url?"":"disabled btn-muted",attrs:{href:e.file_url,target:"_blank"}},[t._v("原始檔")])])])])])])})),0)}),[],!1,null,"d798a2d6",null);e.default=component.exports},431:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(27),r(17),r(37),r(142),r(56),r(296)),l=r(278),c={name:"Works",components:{Card:o.default,Alert:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.error,e.prev=1,e.next=4,r.get("/v1/dropdowns/works");case 4:return o=e.sent,e.next=7,r.get("/v1/works/group-list");case 7:return l=e.sent,e.abrupt("return",{dropdowns:o.data.dropdowns,grouplist:l.data.works_group_list});case 11:e.prev=11,e.t0=e.catch(1),n({statusCode:(null===(c=e.t0.response)||void 0===c?void 0:c.status)||500,message:(null===(d=e.t0.response)||void 0===d?void 0:d.data.message)||{},statusText:(null===(v=e.t0.response)||void 0===v?void 0:v.statusText)||"伺服器發生錯誤。"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},data:function(){return{nowRole:"前端個人組",worksList:[],cacheSearch:[],search:{sortBy:0,worksTypeId:0,stageId:0,tagId:0},pagination:{total_page:0},userType:0,msg:{}}},computed:{worksTagsList:function(){var t=[];return this.dropdowns.works_types.forEach((function(e){"個人組-前端"===e.name&&t.push({id:e.id,name:"前端個人組",sorts:e.sorts,tags:e.tags}),"個人組-UI"===e.name&&t.push({id:e.id,name:"UI 設計個人組",sorts:e.sorts,tags:e.tags}),"團體組-UI"===e.name&&t.push({id:e.id,name:"團體組 UI",sorts:e.sorts,tags:e.tags}),"團體組-前端"===e.name&&t.push({id:e.id,name:"團體組 前端",sorts:e.sorts,tags:e.tags})})),t}},mounted:function(){this.getWorksList(),"個人組/前端工程師"===sessionStorage.getItem("HbPeShUserVmYTyPe")&&(this.userType=2)},methods:{getWorksList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.page=e;var r=this.searchUrl();this.$axios.get(r).then((function(e){t.worksList=e.data.works_list,t.pagination=e.data.pagination}))},defaultSearch:function(){this.search=this.$options.data().search},switchSearch:function(t,data){this.search.sortBy=0,this.search.stageId=0,this.search.tagId=0,this.search.worksTypeId=t,this.cacheSearch=data},searchUrl:function(){var t=this.search,e=t.page,r=t.worksTypeId,n=t.stageId,o=t.tagId,l=t.sortBy,c="/v1/works/list?page=".concat(e);return r&&(c+="&works_type_id=".concat(r)),n&&(c+="&stage_id=".concat(n)),o&&(c+="&tag_id=".concat(o)),l&&(c+="&sort_by=".concat(l)),c},isUpvotes:function(t){var e=this,r=t.id,n="post";t.status&&(n="delete"),this.$axios[n]("/v1/works/".concat(r,"/upvote")).then((function(t){e.getWorksList(e.search.page)})).catch((function(){}))},isUse:function(t){var e=this,r=t.id,n="post";t.status&&(n="delete"),this.$axios[n]("/v1/works/".concat(r,"/use")).then((function(t){e.getWorksList(e.search.page)})).catch((function(t){window.scrollTo(0,0),e.msg={style:"danger",icon:"fa-exclamation-triangle",content:t.response.data.message||"採用失敗"}}))}}},d=r(36),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("Alert",{attrs:{message:t.msg}}),t._v(" "),r("div",{staticClass:"row my-7"},[r("div",{staticClass:"col-md-3"},[r("h1",{staticClass:"mb-4 fs-2 text-black"},[t._v("作品列表")]),t._v(" "),r("h4",{staticClass:"fs-6"},[t._v("組別")]),t._v(" "),r("div",{staticClass:"list-group mb-5"},[r("button",{staticClass:"list-group-item list-group-item-action",class:0===t.search.worksTypeId?"active":"",attrs:{type:"button","aria-current":"true"},on:{click:t.defaultSearch}},[t._v("\n            全部組別\n            "),r("span",{staticClass:"badge rounded-pill",class:0!==t.search.worksTypeId?"bg-dark":"bg-white text-dark"},[t._v(t._s(t.grouplist.all))])]),t._v(" "),t._l(t.worksTagsList,(function(e,n){return[r("button",{key:n,staticClass:"list-group-item list-group-item-action",class:t.search.worksTypeId===e.id?"active":"",attrs:{type:"button"},on:{click:function(r){return t.switchSearch(t.search.worksTypeId=e.id,e)}}},[t._v("\n              "+t._s(e.name)+"\n              "),r("span",{staticClass:"badge rounded-pill bg-dark",class:t.search.worksTypeId===e.id?"bg-white text-dark":"bg-dark"},[t._v(t._s(t.grouplist[e.id]))])])]}))],2),t._v(" "),r("h4",{staticClass:"fs-6"},[t._v("關卡")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.search.stageId,expression:"search.stageId"}],staticClass:"form-select mb-5",attrs:{"aria-label":"關卡下拉選單"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.search,"stageId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:0}},[t._v("請選擇要搜尋的關卡")]),t._v(" "),r("option",{domProps:{value:1}},[t._v("台灣旅遊景點導覽")]),t._v(" "),r("option",{domProps:{value:2}},[t._v("自行車道地圖資訊整合網")]),t._v(" "),r("option",{domProps:{value:3}},[t._v("全台公車動態時刻查詢應用服務")]),t._v(" "),r("option",{domProps:{value:4}},[t._v("薪資數據圖表調查")])]),t._v(" "),t.search.worksTypeId?r("div",[r("h4",{staticClass:"fs-6"},[t._v("排序")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.search.sortBy,expression:"search.sortBy"}],staticClass:"form-select mb-5",attrs:{"aria-label":"排序下拉選單"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.search,"sortBy",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:0}},[t._v("預設")]),t._v(" "),t._l(t.cacheSearch.sorts,(function(e,n){return r("option",{key:n,domProps:{value:e.name}},[t._v(t._s(e.cht_name))])}))],2),t._v(" "),r("h4",{staticClass:"fs-6"},[t._v("Tag")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.search.tagId,expression:"search.tagId"}],staticClass:"form-select mb-5",attrs:{"aria-label":"Tag下拉選單"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.search,"tagId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:0}},[t._v("全部")]),t._v(" "),t._l(t.cacheSearch.tags,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.getWorksList(1)}}},[t._v("搜尋")]),t._v(" "),r("div",{attrs:{id:"gtmUse"}})]),t._v(" "),r("div",{staticClass:"col-md-9 mt-md-0 mt-3"},[t.worksList.length?r("div",[r("Card",{attrs:{"user-type":t.userType,"works-list":t.worksList},on:{isUpvotes:t.isUpvotes,isUse:t.isUse}}),t._v(" "),r("div",{staticClass:"d-flex justify-content-center"},[r("Paginate",{attrs:{"page-count":t.pagination.total_page,"click-handler":t.getWorksList,"prev-text":"&laquo;","next-text":"&raquo;","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-link-class":"page-link","next-link-class":"page-link"}})],1)],1):r("p",[t._v("暫時沒有作品內容")])])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:r(278).default})}}]);