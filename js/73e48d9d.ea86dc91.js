(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["73e48d9d"],{3543:function(t,e,n){},"8b60":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TitleBar",{attrs:{titleTx:t.title}}),n("div",{domProps:{innerHTML:t._s(t.text)}})],1)},a=[];i._withStripped=!0;var o=n("9bfb"),l=n("a002"),s=n.n(l),c={components:{TitleBar:o["a"]},data:function(){return{title:this.$t("lookgg"),text:"zh-cn"===this.$i18n.locale?this.global.notify.value:this.global.notify.valueen}},mounted:function(){"zh-cn"===this.$i18n.locale?s.a.setItem("notifyUpdateAt",this.global.notify.updatedAt):(console.log(this.global.notify.updatedAten),s.a.setItem("notifyUpdateAten",this.global.notify.updatedAten))}},r=c,u=(n("dc35"),n("2877")),f=Object(u["a"])(r,i,a,!1,null,null,null);f.options.__file="WithDrawReadMe.vue";e["default"]=f.exports},"9bfb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bar"},[n("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},a=[];i._withStripped=!0;var o={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},l=o,s=(n("a675"),n("2877")),c=Object(s["a"])(l,i,a,!1,null,null,null);c.options.__file="TitleBar.vue";e["a"]=c.exports},a675:function(t,e,n){"use strict";var i=n("ca51"),a=n.n(i);a.a},ca51:function(t,e,n){},dc35:function(t,e,n){"use strict";var i=n("3543"),a=n.n(i);a.a}}]);