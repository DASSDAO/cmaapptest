(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["61c1620b"],{"47b2":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("TitleBar",{attrs:{titleTx:t.title}}),n("q-input",{staticClass:"in-in-ma",attrs:{"float-label":"投入金额ETH",type:"number"},model:{value:t.toAmt,callback:function(e){t.toAmt=e},expression:"toAmt"}}),n("span",{staticClass:"curt-balance"},[t._v("需要消耗:"+t._s(.01*t.toAmt/t.global.mcoinPrice)+" CMAT")]),n("q-btn",{staticClass:"btn-next",attrs:{label:"下一步",color:"primary"},on:{click:t.toNext}})],1)},a=[];s._withStripped=!0;n("6b54");var i=n("9bfb"),o=n("e7ea"),l=n("a002"),c=n.n(l),r=n("96a1"),h=n("3452"),u={components:{TitleBar:i["a"]},data:function(){return{currentBalance:this.global.wallet.lastEthbalance,title:"参与投资",toAddress:"",toAmt:"",canInvest:!0,investBmobId:""}},mounted:function(){var t=this;if("true"===this.global.investDistrice24){var e={address:this.global.wallet.ethAddress};this.$axios.get(this.global.BmobRestAPIUrl+"invest?where="+encodeURI(JSON.stringify(e)),{headers:this.global.BmobRestAPIHeaders}).then(function(e){if(200===e.status){var n=e.data.results;0!==n.length&&(t.investBmobId=n[0].objectId,t.canInvest=(new Date).getTime()-n[0].time>=864e5)}})}},methods:{bmobAddOrUpdate:function(){""===this.investBmobId?this.addAInvest():this.updateInvestTime(this.investBmobId)},updateInvestTime:function(t){this.$axios.put(this.global.BmobRestAPIUrl+"invest/"+t,{time:(new Date).getTime()+""},{headers:this.global.BmobRestAPIHeaders}).then(function(t){})},addAInvest:function(){this.$axios.post(this.global.BmobRestAPIUrl+"invest",{address:this.global.wallet.ethAddress,time:(new Date).getTime()+""},{headers:this.global.BmobRestAPIHeaders}).then(function(t){})},toNext:function(){var t=this,e=this;this.canInvest?this.toAmt>=this.global.minPerInvest&&this.toAmt<=this.global.config.maxPerInvest?this.toAmt>this.global.wallet.lastEthbalance?toast("你的ETH余额不足，请先转入足量ETH"):.01*this.toAmt/this.global.mcoinPrice>this.global.wallet.lastMcoinBalance?this.$q.dialog({title:"",message:"CMAT余额不足，请先购买相应数量的CMAT"}).then(function(){e.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:t.global.wallet.lastMcoinBalance}})}).catch(function(){}):e.showPswdInputDialog():toast("单笔投入金额最少"+this.global.minPerInvest+"ETH,最多"+this.global.config.maxPerInvest+"ETH"):toast("同一账户24小时只能投资一次哦")},showPswdInputDialog:function(){var t=this;this.$q.dialog({title:this.itmeName1,message:"请输入你的钱包密码",prompt:{model:"",type:"text"},cancel:!0,color:"secondary"}).then(function(e){""===e?toast("密码不能为空哦"):(t.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50}),c.a.getItem("cryptMnemonic").then(function(n){null===n?(t.$q.loading.hide(),toast("当前没有可备份钱包，将跳到创建钱包页面"),t.$router.push("/walletfirst")):t.unlockWallet(n,e)}).catch(function(t){toast(t)}))}).catch(function(){})},unlockWallet:function(t,e){try{var n=h.AES.decrypt(t,e),s=n.toString(h.enc.Utf8),a=o["ethers"].Wallet.fromMnemonic(s),i=a.connect(this.global.defaultProvider);this.doInvest(i)}catch(t){console.log(t),toast("密码错误"),this.$q.loading.hide()}},doInvest:function(t){var e=this,n=this.global.m3gameContract.connect(t),s={value:o["ethers"].utils.parseEther(this.toAmt+"")};n.inverstAgain(s).then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog("已提交",t.hash),e.listen4InvestResult(t.hash)}).catch(function(t){e.global.reprotError2Bmob(e,"inverstAgain",t),e.$q.loading.hide()})},listen4InvestResult:function(t){var e=this;this.global.defaultProvider.once(t,function(t){console.log("----Transaction Minded:----"),console.log(t),1===t.status?(toast("投资成功"),e.bmobAddOrUpdate()):toast("投资失败，请重试")})},showInfoDialog:function(t,e){var n=this;this.$q.dialog({title:t,message:"",ok:"查看结果",cancel:"关闭"}).then(function(){n.$router.go(-1),Object(r["a"])(n.global.etherscanio+"tx/"+e)}).catch(function(){n.$router.go(-1)})}}},d=u,b=(n("ea97"),n("2877")),g=Object(b["a"])(d,s,a,!1,null,null,null);g.options.__file="Invest.vue";e["default"]=g.exports},"6fd7":function(t,e,n){},"9bfb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bar"},[n("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},a=[];s._withStripped=!0;var i={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},o=i,l=(n("a675"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null);c.options.__file="TitleBar.vue";e["a"]=c.exports},a675:function(t,e,n){"use strict";var s=n("ca51"),a=n.n(s);a.a},ca51:function(t,e,n){},ea97:function(t,e,n){"use strict";var s=n("6fd7"),a=n.n(s);a.a}}]);