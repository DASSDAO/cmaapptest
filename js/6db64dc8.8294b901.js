(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6db64dc8"],{"071e":function(t,i,a){},"52bd":function(t,i,a){"use strict";var e=a("8e7e"),o=a.n(e);o.a},"7b2e":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("q-dialog",{on:{show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(i){return a("div",{staticClass:"dialog-btn"},[t._e(),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.dialogData.ok},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(i){t.$set(t.dialogData,"show",i)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.title))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{placeholder:t.dialogData.placeholder},model:{value:t.text,callback:function(i){t.text=i},expression:"text"}})],1)])},o=[];e._withStripped=!0;a("96cf");var s=a("c973"),n=a.n(s),l={props:["dialogData"],data:function(){return{text:""}},methods:{onOk:function(){""!==this.text?(this.$emit("singleInputOk",this.text),this.dialogData.show=!1):toast(this.$t("nullinput"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=n()(regeneratorRuntime.mark(function t(i,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(i,a){return t.apply(this,arguments)}}()}},c=l,r=(a("7ff3"),a("2877")),h=Object(r["a"])(c,e,o,!1,null,"354d1386",null);h.options.__file="SingleInputDialog.vue";i["a"]=h.exports},"7ff3":function(t,i,a){"use strict";var e=a("8e8b"),o=a.n(e);o.a},"86c6":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{ref:"smitadpage",staticClass:"smitad-page"},[a("TitleBar",{attrs:{titleTx:t.title}}),a("div",{staticClass:"smitad-block"},[a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("adprice"))+"：")]),a("div",[a("span",{staticStyle:{color:"red"}},[a("b",[t._v(t._s(t.ethcny))])]),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("CNY")])])]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("floatratio"))+"：")]),a("div",[a("span",[t._v(t._s(t.floatrate))]),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("%")])])]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("overpriceset"))+"：")]),a("div",{staticClass:"smtad-yj"},[a("q-icon",{attrs:{name:"remove",color:"green"},nativeOn:{click:function(i){return t.yjratioSub(i)}}}),a("q-slider",{attrs:{color:"secondary",min:-50,max:50,label:""},model:{value:t.floatrate,callback:function(i){t.floatrate=i},expression:"floatrate"}}),a("q-icon",{attrs:{name:"add",color:"red"},nativeOn:{click:function(i){return t.yjratioAdd(i)}}})],1)]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("ucurtprice"))+"：")]),a("div",[a("span",[t._v(t._s(t.yourprice))]),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("CNY")])])]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("minprice"))+"：")]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("q-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.mylowest,callback:function(i){t.mylowest=i},expression:"mylowest"}}),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("CNY")])],1)]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("adamt"))+"：")]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("q-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.tradeamt,callback:function(i){t.tradeamt=i},expression:"tradeamt"}}),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("ETH")])],1)]),a("div",{staticClass:"smt-ipt-itm"},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("singmin"))+"：")]),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("q-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.singlemin,callback:function(i){t.singlemin=i},expression:"singlemin"}}),a("span",{staticStyle:{color:"gray"}},[t._v(" | ")]),a("span",{staticStyle:{color:"#44566B"}},[t._v("ETH")])],1)]),a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(t.$t("paymethod"))+"：")]),a("div",{staticStyle:{display:"flex","margin-top":"15px"}},[a("q-checkbox",{on:{input:t.alipayclick},model:{value:t.alipaychecked,callback:function(i){t.alipaychecked=i},expression:"alipaychecked"}}),a("img",{staticStyle:{height:"40px","margin-left":"5px"},attrs:{src:"statics/alipays.png"}}),a("q-checkbox",{staticStyle:{"margin-left":"20px"},on:{input:t.yinlianclick},model:{value:t.bankchecked,callback:function(i){t.bankchecked=i},expression:"bankchecked"}}),a("img",{staticStyle:{height:"40px","margin-left":"5px"},attrs:{src:"statics/bankcards.png"}}),a("q-checkbox",{staticStyle:{"margin-left":"20px"},on:{input:t.weixinclick},model:{value:t.wepaychecked,callback:function(i){t.wepaychecked=i},expression:"wepaychecked"}}),a("img",{staticStyle:{height:"40px","margin-left":"5px"},attrs:{src:"statics/wepay.png"}})],1)]),a("div",{staticStyle:{"margin-top":"20px","font-size":"13px",color:"#6F7D8E"},domProps:{innerHTML:t._s(t.$t("tradenote"))}}),a("q-btn",{staticStyle:{margin:"15px"},attrs:{rounded:"",label:t.$t("smitad"),color:"primary"},on:{click:t.submitAD}})],1),a("SingleInputDialog",{attrs:{dialogData:t.singleInputData},on:{singleInputOk:t.singleInputOk}}),a("MutiInputDialog",{attrs:{dialogData:t.mutiInputDialog},on:{mutiInputOk:t.mutiInputOk}}),a("SetWePayCodeDialog",{attrs:{dialogData:t.setWepayDialogData}})],1)},o=[];e._withStripped=!0;a("c5f6");var s=a("9bfb"),n=a("7b2e"),l=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("q-dialog",{on:{show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(i){return a("div",{staticClass:"dialog-btn"},[t._e(),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.dialogData.ok},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(i){t.$set(t.dialogData,"show",i)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.title))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{placeholder:t.dialogData.placeholder1,type:t.dialogData.type1},model:{value:t.text1,callback:function(i){t.text1=i},expression:"text1"}}),t.dialogData.show2?a("q-input",{attrs:{placeholder:t.dialogData.placeholder2},model:{value:t.text2,callback:function(i){t.text2=i},expression:"text2"}}):t._e()],1)])},c=[];l._withStripped=!0;a("7f7f"),a("96cf");var r=a("c973"),h=a.n(r),d={props:["dialogData"],data:function(){return{text1:"",text2:""}},methods:{onOk:function(){""!==this.text1&&(!0!==this.dialogData.show2||""!==this.text2)?("namesell"===this.dialogData.from||"modifysellprice"===this.dialogData.from)&&this.text1>50?toast(this.$t("namesellmax")):(this.$emit("mutiInputOk",{v1:this.text1,v2:this.text2,v3:this.dialogData.from}),this.dialogData.show=!1):toast(this.$t("nullinput"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=h()(regeneratorRuntime.mark(function t(i,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,i();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(a));case 7:case"end":return t.stop()}},t,this)}));return function(i,a){return t.apply(this,arguments)}}()}},p=d,u=(a("c394"),a("2877")),g=Object(u["a"])(p,l,c,!1,null,"31f7d798",null);g.options.__file="MutiInputDialog.vue";var m=g.exports,f=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("q-dialog",{on:{show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(i){return a("div",{staticClass:"dialog-btn"},[t._e(),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.$t("ok")},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(i){t.$set(t.dialogData,"show",i)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.title))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("span",[t._v("\n      请上传您的微信收款码（\n      "),a("span",{staticStyle:{color:"#3587F2"},on:{click:t.getwxCodetip}},[t._v("不知道如何获取收款码？点击查看")]),t._v("）\n    ")]),a("input",{staticStyle:{"margin-top":"10px"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.wximgShow,expression:"wximgShow"}],staticStyle:{"margin-top":"10px",width:"200px",height:"274px","align-self":"center"},attrs:{src:t.wximgsrc}})])])},b=[];f._withStripped=!0;var y={props:["dialogData"],data:function(){return{wximgsrc:"",wximgShow:!1,wximgbmobUrl:"",wximgfile:""}},methods:{getwxCodetip:function(){this.$q.dialog({message:"打开微信，依次点击【我】——【支付】——【收付款】，点击下方【二维码收款】，再点击【保存收款码】，然后回到以太金服，点击【选择文件】，选择刚才保存的收款码。",ok:!0})},onFileChange:function(t){var i=this,a=t.target.files||t.dataTransfer.files;if(a.length){var e=a[0];this.wximgfile=e;var o=new FileReader;o.readAsDataURL(e),o.onload=function(t){i.wximgsrc=t.target.result,i.wximgShow=!0}}},uploadimg2bmob:function(){this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50});var t=this;this.$axios.request({url:"https://api2.bmob.cn/2/files/"+this.global.wallet.ethAddress+".jpg",method:"post",headers:{"X-Bmob-Application-Id":"82b312a9c9155cf129c38fe9f60e2fe5","X-Bmob-REST-API-Key":"277543fc8062ea41172cfdc1bdd746c1","Content-Type":"image/jpeg"},data:this.wximgfile}).then(function(i){200===i.status&&(t.wximgbmobUrl=i.data.url,t.submitinfo2bmob()),t.$q.loading.hide()}).catch(function(i){console.error(i),t.$q.loading.hide()})},submitinfo2bmob:function(){var t=this;this.$axios.put(this.global.BmobRestAPIUrl+"classes/login/"+this.global.loginfo.objectId,{actualname:this.actualname,cardno:this.cardno,alipayno:this.alipayno,weixin:this.wximgbmobUrl,mobile:""===this.global.loginfo.mobile?this.mobile:this.global.loginfo.mobile},{headers:this.global.BmobRestAPIHeaders}).then(function(i){t.$q.loading.hide(),200===i.status&&(toast(t.$t("setsuccess")),""!==t.wximgbmobUrl&&(t.global.loginfo.weixin=t.wximgbmobUrl))})},onOk:function(){this.uploadimg2bmob(),this.dialogData.show=!1},onCancel:function(){},onShow:function(){},onHide:function(){}}},v=y,w=(a("52bd"),Object(u["a"])(v,f,b,!1,null,"a8030498",null));w.options.__file="SetWePayCodeDialog.vue";var x,k=w.exports,_={components:{TitleBar:s["a"],SingleInputDialog:n["a"],MutiInputDialog:m,SetWePayCodeDialog:k},data:function(){return{title:this.$t("smitad"),tradeamt:"",ethcny:"",floatrate:0,mylowest:"",bankchecked:!1,alipaychecked:!1,wepaychecked:!1,singlemin:"",singleInputData:{show:!1,ok:this.$t("ok"),title:this.$t("alipayno"),placeholder:""},mutiInputDialog:{show:!1,ok:this.$t("ok"),title:this.$t("setbankcardinfo"),placeholder1:this.$t("cardno"),show2:!1,type1:"text"},setWepayDialogData:{show:!1,title:this.$t("setwepayinfo")}}},computed:{yourprice:function(){return Number(this.ethcny*(1+this.floatrate/100)).toFixed(4)}},mounted:function(){var t=this,i=this;window.onresize=function(){var t=window.screen.height;i.$refs.smitadpage.style.height=t+"px",console.log(">>>>>>>>>"+t)},this.getETHPrice(),x=setInterval(function(){t.getETHPrice()},this.global.taskInterval)},methods:{mutiInputOk:function(t){this.updateLoginfo({cardno:t.v1},"mutiInputOk")},singleInputOk:function(t){this.updateLoginfo({alipayno:t},"singleInputOk")},updateLoginfo:function(t,i){var a=this;this.$axios.put(this.global.BmobRestAPIUrl+"classes/login/"+this.global.loginfo.objectId,t,{headers:this.global.BmobRestAPIHeaders}).then(function(e){console.log(e),200===e.status&&(toast(a.$t("setsuccess")),"singleInputOk"===i?a.global.loginfo.alipayno=t.alipayno:a.global.loginfo.cardno=t.cardno)})},alipayclick:function(){this.alipaychecked&&""===this.global.loginfo.alipayno&&(toast(this.$t("alipaynosettip")),this.singleInputData.show=!0)},yinlianclick:function(){this.bankchecked&&""===this.global.loginfo.cardno&&(toast(this.$t("cardnosettip")),this.mutiInputDialog.show=!0)},weixinclick:function(){this.wepaychecked&&""===this.global.loginfo.weixin&&(toast(this.$t("weixinnosettip")),this.setWepayDialogData.show=!0)},yjratioAdd:function(){this.floatrate++},yjratioSub:function(){this.floatrate--},getETHPrice:function(){var t=this,i="https://api.etherscan.io/api?module=stats&action=ethprice&apikey="+this.global.etherscanAPIKey;this.$axios.get(i).then(function(i){t.ethcny=Number(i.data.result.ethusd*parseFloat(t.global.config.usdcny)).toFixed(4)}).catch(function(t){}).then(function(){})},submitAD:function(){if(!this.mylowest>0)toast(this.$t("minprice")+this.$t("mustbiggerzero"));else if(!this.tradeamt>0)toast(this.$t("adamt")+this.$t("mustbiggerzero"));else if(!this.singlemin>0)toast(this.$t("singmin")+this.$t("mustbiggerzero"));else if(this.singlemin>this.yourprice)toast(this.$t("lowestpriceerror"));else{if(this.bankchecked||this.alipaychecked||this.wepaychecked)return this.alipaychecked&&""===this.global.loginfo.alipayno?(toast(this.$t("alipaynosettip")),void(this.singleInputData.show=!0)):this.bankchecked&&""===this.global.loginfo.cardno?(toast(this.$t("cardnosettip")),void(this.mutiInputDialog.show=!0)):this.wepaychecked&&""===this.global.loginfo.weixin?(toast(this.$t("weixinnosettip")),void(this.setWepayDialogData.show=!0)):void this.add2Bmob();toast(this.$t("mustchooseonepay"))}},add2Bmob:function(){var t=this;this.$axios.post(this.global.BmobRestAPIUrl+"classes/otcad",{address:this.global.wallet.ethAddress,floatrate:this.floatrate+"",lowestprice:this.mylowest+"",tradeamount:this.tradeamt+"",singmin:this.singlemin+"",mobile:this.global.loginfo.mobile,actualname:this.bankchecked?this.global.loginfo.actualname:"",cardno:this.bankchecked?this.global.loginfo.cardno:"",alipayno:this.alipaychecked?this.global.loginfo.alipayno:"",weixincodeUrl:this.wepaychecked?this.global.loginfo.weixin:"",ensname:this.global.ensname},{headers:this.global.BmobRestAPIHeaders}).then(function(i){console.log(i),201===i.status&&(toast(t.$t("pubsuccess")),t.$router.go(-1))})}},beforeDestroy:function(){clearInterval(x)}},S=_,$=(a("b22a"),Object(u["a"])(S,e,o,!1,null,"4a46ff58",null));$.options.__file="SubmitAD.vue";i["default"]=$.exports},"8e7e":function(t,i,a){},"8e8b":function(t,i,a){},"9bfb":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(i){return t.goBack(i)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},o=[];e._withStripped=!0;var s={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},n=s,l=(a("a675"),a("2877")),c=Object(l["a"])(n,e,o,!1,null,null,null);c.options.__file="TitleBar.vue";i["a"]=c.exports},a675:function(t,i,a){"use strict";var e=a("ca51"),o=a.n(e);o.a},b22a:function(t,i,a){"use strict";var e=a("c261"),o=a.n(e);o.a},c261:function(t,i,a){},c394:function(t,i,a){"use strict";var e=a("071e"),o=a.n(e);o.a},ca51:function(t,i,a){}}]);