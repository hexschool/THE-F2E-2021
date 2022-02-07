(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5],{278:function(t,e,n){"use strict";n.r(e);n(55);var o={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.messages,(function(e,o){return n("div",{key:o,staticClass:"alert mb-6 my-2",class:"alert-"+e.style,attrs:{role:"alert"}},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"pe-1 fas",class:e.icon}),t._v(t._s(e.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){t.exports=n.p+"img/login-img.9b26552.png"},326:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("8383740c",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(326)},343:function(t,e,n){var o=n(44)(!1);o.push([t.i,".bg-login{background-image:url(https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/blog%2F2021%2F09%2F09%2FF2E-2021-og.png?alt=media&token=04bf41b4-1d3c-4f90-bec5-a5567ccf1fa3);background-size:cover;background-position:50%;background-repeat:no-repeat;background-color:hsla(0,0%,100%,.8);background-blend-mode:overlay}",""]),t.exports=o},407:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 d-md-block d-none",staticStyle:{height:"calc(78vh)"}},[e("img",{staticClass:"img-fluid h-100 w-100",staticStyle:{"object-fit":"cover"},attrs:{src:n(284),alt:"Login"}})])}],r=n(74),l=n(278),c={name:"Login",components:{ValidationObserver:r.a,ValidationProvider:r.b,Alert:l.default},data:function(){return{user:{account:"",password:""},msg:{}}},mounted:function(){this.$cookies.get("t_sInR5cCI6IkpXVCJ_token")&&this.$router.push("/users")},methods:{login:function(){var t=this;this.$axios.post("/v1/users/login",this.user).then((function(e){var n=e.data.access_token;t.$cookies.set("t_sInR5cCI6IkpXVCJ_token",n,5184e3),t.$router.push("/users"),t.msg={style:"success",icon:"fa-check-circle",content:"登入成功！"}})).catch((function(e){t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.response.data.message||"登入失敗！"}}))}}},d=(n(342),n(36)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-login d-flex align-items-center"},[n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-10"},[n("Alert",{attrs:{message:t.msg}})],1)]),t._v(" "),n("div",{staticClass:"row justify-content-center g-0"},[t._m(0),t._v(" "),n("div",{staticClass:"\n          col-md-5\n          bg-white\n          d-flex\n          flex-column\n          justify-content-center\n          px-6\n          py-md-3 py-7\n        ",staticStyle:{height:"calc(78vh)"}},[n("h1",{staticClass:"fs-2 mb-5"},[t._v("登入")]),t._v(" "),n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[n("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[n("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"form-label",attrs:{for:"account"}},[t._v("帳號（Email）*")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.account,expression:"user.account"}],staticClass:"form-control rounded-0",class:{"is-invalid":o[0]},attrs:{id:"account",name:"帳號",type:"email",placeholder:"name@example.com"},domProps:{value:t.user.account},on:{input:function(e){e.target.composing||t.$set(t.user,"account",e.target.value)}}}),t._v(" "),n("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("密碼*")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control rounded-0",class:{"is-invalid":o[0]},attrs:{id:"password",name:"密碼",type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),n("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),n("div",{staticClass:"d-grid"},[n("button",{staticClass:"btn btn-primary rounded-0",attrs:{type:"submit",disabled:o}},[t._v("\n                登入\n              ")])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between py-3"},[n("nuxt-link",{staticClass:"link-muted",attrs:{to:"/password"}},[t._v("忘記密碼？")]),t._v(" "),n("nuxt-link",{staticClass:"link-muted",attrs:{to:"/signup/check"}},[t._v("重發驗證信")])],1)],1)]}}])})],1)])])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:n(278).default})}}]);