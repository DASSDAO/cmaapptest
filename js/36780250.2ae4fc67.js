(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["36780250"],{"0e15":function(t,e,s){},"7b4e":function(t,e,s){"use strict";var n=s("0e15"),a=s.n(n);a.a},"845e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("TitleBar",{attrs:{titleTx:t.title}}),s("div",{staticClass:"tr-eth-block"},[s("q-input",{staticClass:"input-data",attrs:{"float-label":t.$t("ensoraddrs")},model:{value:t.toAddress,callback:function(e){t.toAddress=e},expression:"toAddress"}}),""===t.global.ensname?s("span",{staticClass:"curt-balance",staticStyle:{color:"dodgerblue"},on:{click:t.toRegisteEns}},[s("u",[t._v(t._s(t.$t("registename")))])]):t._e(),s("q-input",{staticClass:"input-data",attrs:{"float-label":t.$t("tramt"),type:"number"},model:{value:t.toAmt,callback:function(e){t.toAmt=e},expression:"toAmt"}}),s("span",{staticClass:"curt-balance"},[t._v(t._s(t.$t("cbalance"))+":"+t._s(Number(t.currentBalance).toFixed(4)))]),s("q-btn",{staticClass:"btn-next",attrs:{rounded:"",label:t.$t("submit"),color:"primary"},on:{click:t.toNext}})],1)],1)},a=[];n._withStripped=!0;s("6b54"),s("96cf");var o=s("c973"),i=s.n(o),r=(s("f559"),s("9bfb")),l=(s("079c"),s("e7ea")),c=s("a002"),u=s.n(c),h=s("96a1"),d=s("3452"),f={components:{TitleBar:r["a"]},data:function(){return{currentBalance:"CMAT"===this.$route.query.p1?this.global.wallet.lastMcoinBalance:this.global.wallet.lastEthbalance,title:"CMAT"===this.$route.query.p1?"CMAT"+this.$t("send"):"ETH"+this.$t("send"),toAddress:"",toAddress2:"",toAmt:""}},mounted:function(){console.log("----"+this.$route.query.p1)},methods:{toRegisteEns:function(){this.$router.push({path:"registeens",query:{p1:"transfer"}})},toNext:function(){""!==this.toAddress?""!==this.toAmt?this.toAddress.startsWith("0x")?(this.toAddress2=this.toAddress,this.showPswdInputDialog()):this.getAddress(this.toAddress):toast(this.$t("tramtnull")):toast(this.$t("addressnull"))},getAddress:function(t){var e=this;e.$q.loading.show({message:this.$t("checking"),spinnerSize:50});var s=function(){var s=i()(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.global.nabContract.getAddress(t);case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},s,this)}));return function(){return s.apply(this,arguments)}}();s().then(function(t){e.$q.loading.hide(),t!==e.global.emptyAddress?(e.toAddress2=t,e.showPswdInputDialog()):toast(e.$t("ensnoexist"))})},showPswdInputDialog:function(){var t=this,e=this;this.$q.dialog({title:this.itmeName1,message:this.$t("enterpswd"),prompt:{model:"",type:"text"},ok:this.$t("ok"),cancel:this.$t("cancel"),color:"secondary"}).then(function(s){""===s?toast(t.$t("pswdnull")):(e.$q.loading.show({message:t.$t("txsubmiting"),spinnerSize:50}),u.a.getItem("cryptMnemonic").then(function(t){null===t?(e.$q.loading.hide(),toast(e.$t("toastnowallet")),e.$router.push("/walletfirst")):e.unlockWallet(t,s)}).catch(function(t){toast(t)}))}).catch(function(){})},unlockWallet:function(t,e){try{var s=d.AES.decrypt(t,e),n=s.toString(d.enc.Utf8),a=l["ethers"].Wallet.fromMnemonic(n),o=a.connect(this.global.defaultProvider);"ETH"===this.$route.query.p1?this.transferETH(o):this.tansferMcoin(o)}catch(t){console.log(t),toast(this.$t("passworderror")),this.$q.loading.hide()}},tansferMcoin:function(t){var e=this,s=this.global.m3gameContract.connect(t),n=18,a=l["ethers"].utils.parseUnits(e.toAmt+"",n);s.transfer(e.toAddress2,a).then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog(e.$t("submitted"),t.hash)}).catch(function(t){e.global.reprotError2Bmob(e,"TransferCMAT",t),e.$q.loading.hide()})},transferETH:function(t){var e=this,s={to:this.toAddress2,value:l["ethers"].utils.parseEther(this.toAmt+"")},n=t.sendTransaction(s);n.then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog(e.$t("submitted"),t.hash)}).catch(function(t){e.global.reprotError2Bmob(e,"TransferETH",t),e.$q.loading.hide()})},showInfoDialog:function(t,e){var s=this;this.$q.dialog({title:t,message:"",ok:s.$t("viewresults"),cancel:s.$t("close")}).then(function(){s.$router.go(-1),Object(h["a"])(s.global.etherscanio+"tx/"+e)}).catch(function(){s.$router.go(-1)})}}},p=f,g=(s("7b4e"),s("2877")),b=Object(g["a"])(p,n,a,!1,null,"5ebc1b34",null);b.options.__file="TransferEth.vue";e["default"]=b.exports},"9bfb":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-bar"},[s("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),s("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},a=[];n._withStripped=!0;var o={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},i=o,r=(s("a675"),s("2877")),l=Object(r["a"])(i,n,a,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,s){"use strict";var n=s("ca51"),a=s.n(n);a.a},ca51:function(t,e,s){}}]);