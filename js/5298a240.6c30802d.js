(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5298a240"],{"41d7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wc"},[s("div",{staticClass:"textinfo"},[s("span",{staticStyle:{color:"red"}},[t._v("重要提示：请务必将助记词抄写在安全的地方，以便恢复钱包使用")]),s("br"),s("br"),s("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(t.mnemonic))])]),s("q-input",{staticClass:"pswd",attrs:{type:"password","float-label":"请设置钱包密码"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}}),s("q-input",{staticClass:"pswd",attrs:{type:"password","float-label":"请再次确认密码"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),s("span",{staticClass:"curt-balance"},[t._v("请牢记密码，我们无法帮您找回")]),s("q-btn",{staticClass:"cbtn",attrs:{label:"加密钱包"},on:{click:t.encryptWalletClick}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.progressShow,expression:"progressShow"}],staticClass:"en-progress-tx"},[t._v(t._s(t.progress))])],1)},n=[];a._withStripped=!0;s("96cf");var r=s("c973"),o=s.n(r),c=(s("6b54"),s("079c"),s("e7ea")),l=s("a002"),i=s.n(l),p=s("3452"),u={data:function(){return{password1:"",password2:"",progress:"",progressShow:!1,mnemonic:"",randomWallet:null}},mounted:function(){this.createWallet()},methods:{encyptWallet:function(t){var e=this,s=t.mnemonic,a=p.AES.encrypt(s,this.password2);i.a.setItem("ethAddress",t.address).then(function(t){e.saveEncryptPrivateKey(a.toString())}).catch(function(t){toast(t)})},saveEncryptPrivateKey:function(t){var e=this;i.a.setItem("cryptMnemonic",t).then(function(t){toast("设置成功"),e.global.currentTab="wallet",e.randomWallet=null,e.mnemonic=null,e.$router.go(-2)}).catch(function(t){toast(t)})},mnemonicClick:function(){this.createWallet()},createWallet:function(){var t=this,e=function(){var t=o()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["ethers"].Wallet.createRandom();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();e().then(function(e){t.randomWallet=e,t.mnemonic=e.mnemonic,t.global.wallet.ethAddress=e.address}).catch(function(t){console.log(t)})},encryptWalletClick:function(){this.password1.length<6?toast("密码长度不能小于6位哦"):""!==this.password1&&""!==this.password2?this.password1===this.password2?this.encyptWallet(this.randomWallet):toast("两次输入密码不一致哦"):toast("密码不能为空哦")}}},d=u,w=(s("f266"),s("2877")),h=Object(w["a"])(d,a,n,!1,null,null,null);h.options.__file="WalletCreate.vue";e["default"]=h.exports},"735f":function(t,e,s){},f266:function(t,e,s){"use strict";var a=s("735f"),n=s.n(a);n.a}}]);