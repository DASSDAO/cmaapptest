(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,a){e.exports=a("2f39")},"034f":function(e,t,a){"use strict";var n=a("fb1c"),s=a.n(n);s.a},"1e5d":function(e,t,a){},"2f39":function(e,t,a){"use strict";a.r(t);a("ac6a"),a("a114"),a("d14b"),a("1e5d"),a("7e6d");var n=a("2b0e"),s=a("d1e7"),r=a("e84f"),o=a("4487"),i=a("7051"),l=a("46a9"),u=a("32a1"),p=a("c563"),c=a("db7b"),d=a("482e"),m=a("5d8b"),f=a("52b5"),b=a("1180"),h=a("506f"),y=a("b8d9"),g=a("0388"),w=a("d3e7"),v=a("1c93"),A=a("1526"),T=a("a9a0"),_=a("6780");n["a"].use(r["a"],{config:{cordova:{backButtonExit:!0}},i18n:s["a"],components:{QLayoutFooter:o["a"],QLayout:i["a"],QPageContainer:l["a"],QPage:u["a"],QTabs:p["a"],QTab:c["a"],QBtn:d["a"],QInput:m["a"],QIcon:f["a"],QList:b["a"],QItem:h["a"],QItemMain:y["a"],QDialog:g["a"],QProgress:w["a"],QRating:v["a"]},directives:{Ripple:A["a"]},plugins:{Loading:T["a"],Dialog:_["a"]}});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},x=[];k._withStripped=!0;a("7f7f"),a("4917");var P=a("e7ea"),C=a("a002"),I=a.n(C),R=a("96a1"),M={name:"App",data:function(){return{isGrayRelease:!1,latestVersionCode:0,updateTips:""}},created:function(){console.log("----app created")},mounted:function(){console.log("----app mounted"),this.openinWeixinQQtips(),this.global.defaultProvider=new P["ethers"].providers.InfuraProvider(this.global.ethersNet,this.global.infuraPROJECTID),this.global.m3gameContract=new P["ethers"].Contract(this.global.m3gameAddress,this.global.m3gameABI,this.global.defaultProvider),this.global.nabContract=new P["ethers"].Contract(this.global.nabAddress,this.global.nabABI,this.global.defaultProvider),this.checkAppUpdate()},methods:{openinWeixinQQtips:function(){var e=this;e.global.isWebVersion&&e.isWXQQBrowser()&&I.a.getItem("istip").then(function(t){null===t&&(e.$q.dialog({message:$t("openinqqtip"),color:"secondary"}),I.a.setItem("istip",!0))})},isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")},checkAppUpdate:function(){var e=this;this.$axios.get(this.global.BmobRestAPIUrl+"cmaconfig",{headers:this.global.BmobRestAPIHeaders}).then(function(t){if(200===t.status){for(var a=t.data.results,n=0;n<a.length;n++)switch(a[n].name){case"latestVersionCode":e.latestVersionCode=a[n].value;break;case"updateTips":e.updateTips=a[n].value;break;case"updateUrl":e.global.downloadUrl=a[n].value;break;case"referUrl":e.global.referUrl=a[n].value;break;case"investDistrice24":e.global.investDistrice24=a[n].value;break;case"grayScaleRelease":e.isGrayRelease="true"===a[n].value;break;case"minPerInvest":e.global.minPerInvest=a[n].value;break;case"notifyen":e.global.notify.valueen=a[n].value,e.global.notify.updatedAten=a[n].updatedAt;break}e.getLocalAddress()}})},getLocalAddress:function(){var e=this;I.a.getItem("ethAddress").then(function(t){null!==t&&(e.global.wallet.ethAddress=t.toLowerCase(),e.getBmobLoginfo(t.toLowerCase()))})},getBmobLoginfo:function(e){var t=this,a={address:e};this.$axios.get(this.global.BmobRestAPIUrl+"login?where="+encodeURI(JSON.stringify(a)),{headers:this.global.BmobRestAPIHeaders}).then(function(e){200===e.status&&(0===e.data.results.length?t.bmobLoginSave():(t.bmobLoginUpdate(e.data.results[0].objectId),t.global.isGrayUser="undefined"!==typeof e.data.results[0].AUser&&e.data.results[0].AUser,!t.global.isWebVersion&&t.latestVersionCode>t.global.versionCode&&(t.isGrayRelease?t.global.isGrayUser&&t.showUpdateDialog():t.showUpdateDialog())))})},showUpdateDialog:function(){var e=this;this.$q.dialog({title:e.$t("havenew"),message:e.updateTips,ok:e.$t("downnew"),cancel:e.$t("updatelater")}).then(function(){Object(R["a"])(e.global.downloadUrl)}).catch(function(){})},bmobLoginUpdate:function(e){this.$axios.put(this.global.BmobRestAPIUrl+"login/"+e,{appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(e){})},bmobLoginSave:function(){this.$axios.post(this.global.BmobRestAPIUrl+"login",{address:this.global.wallet.ethAddress,appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(e){})}}},B=M,E=(a("034f"),a("2877")),H=Object(E["a"])(B,k,x,!1,null,null,null);H.options.__file="App.vue";var U=H.exports,L=a("2f62"),Q={},S=a("a709"),N=a("8d6f"),D=a("5781"),V={namespaced:!0,state:Q,getters:S,mutations:N,actions:D};n["a"].use(L["a"]);var W=function(){var e=new L["a"].Store({modules:{example:V}});return e},j=a("8c4f"),q=[{path:"/",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("ea867686")]).then(a.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return a.e("7933fb6e").then(a.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("5298a240")]).then(a.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("88c4c078")]).then(a.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("2158a490")]).then(a.bind(null,"845e"))}},{path:"/receipteth",component:function(){return a.e("787323fa").then(a.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([a.e("c92045f6"),a.e("2d0a4887"),a.e("d9a73c08")]).then(a.bind(null,"33c5"))}},{path:"/invest",component:function(){return Promise.all([a.e("c92045f6"),a.e("61c1620b")]).then(a.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("5f7843b0")]).then(a.bind(null,"1e34"))}},{path:"/withdrawreadme",component:function(){return a.e("73e48d9d").then(a.bind(null,"8b60"))}},{path:"/transferdetail",component:function(){return a.e("9a7f2b10").then(a.bind(null,"6302"))}},{path:"/registeens",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("d33f6006")]).then(a.bind(null,"2348"))}}];q.push({path:"*",component:function(){return a.e("4b47640d").then(a.bind(null,"e51e"))}});var z,$,O,F,J,G,K,Y=q,X=a("a65d"),Z=a.n(X),ee=a("5938"),te=a("f50e"),ae="0xA923e6992ffE1323CBfCC5903482a271741f09ff",ne="0x7a45c9c1b3cef3865b8c165e10e0e341692e55f9",se="homestead",re=7162382,oe="1.6.0",ie=160,le=!0,ue="",pe="www.cmadao.com",ce=.001,de={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},me="https://api2.bmob.cn/1/classes/",fe={"X-Bmob-Application-Id":"82b312a9c9155cf129c38fe9f60e2fe5","X-Bmob-REST-API-Key":"277543fc8062ea41172cfdc1bdd746c1","Content-Type":"application/json"},be="302e28323be84e288f504f5d1ad75cce",he="HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",ye="homestead"===se?"https://api":"https://api-ropsten",ge="homestead"===se?"https://etherscan.io/":"https://ropsten.etherscan.io/",we="wallet",ve="0x0000000000000000000000000000000000000000",Ae=21e4,Te=3e3,_e=.1,ke={referLevel3Num:3,referLevel4Num:4,referLevel5Num:5,week1Ratio:100,week2Ratio:200,week3Ratio:300,week4Ratio:400,totolApproveAmt:1e3,maxPerInvest:10,handlingFee:100,intervalHours:1e16,referDrawInterval:24,referAwardsRatio1:100,referAwardsRatio2:100,referAwardsRatio3:100,referAwardsRatio4:100,referAwardsRatio5:100},xe={value:"",updatedAt:"",valueen:"",updatedAten:""},Pe=!1,Ce=!1;function Ie(e){function t(e){return e>9?e:"0"+e}var a=new Date(e),n=a.getFullYear(),s=t(a.getMonth()+1),r=t(a.getDate()),o=a.getHours();o=t(o);var i=t(a.getMinutes()),l=n+"-"+s+"-"+r+" "+o+":"+i;return l}function Re(e,t,a){(a+"").indexOf("insufficient funds")>=0?toast(e.$t("ethnotenough")):(a+"").indexOf("timeout")>=0?toast(e.$t("timeout")):toast(e.$t("error")),e.$axios.post(e.global.BmobRestAPIUrl+"errorlog",{address:e.global.wallet.ethAddress,error:a+"",method:t},{headers:e.global.BmobRestAPIHeaders}).then(function(e){console.log(e)})}var Me,Be,Ee={m3gameABI:ee,m3gameAddress:ae,defaultProvider:z,wallet:de,ethersNet:se,etherscanAPIKey:he,etherscanAPIPrefix:ye,m3gameContract:$,mcoinPrice:ce,currentTab:we,emptyAddress:ve,eventFromBlock:re,convertUTCTimeToLocalTime:Ie,totalPrincipal:F,totalInterest:J,ethPrice:G,config:ke,gasLimit:Ae,etherscanio:ge,taskInterval:Te,versionName:oe,versionCode:ie,downloadUrl:ue,referUrl:pe,notify:xe,infuraPROJECTID:be,isWebVersion:le,BmobRestAPIUrl:me,BmobRestAPIHeaders:fe,isGrayUser:Pe,nabAddress:ne,nabContract:O,nabABI:te,minPerInvest:_e,ensname:K,reprotError2Bmob:Re,isnameselling:Ce},He=Ee,Ue=Object(E["a"])(He,Me,Be,!1,null,null,null);Ue.options.__file="Global.vue";var Le=Ue.exports;n["a"].prototype.global=Le,n["a"].use(j["a"]),n["a"].use(Z.a),window.toast=function(e){n["a"].toasted.show(e,{theme:"bubble",position:"top-center",duration:3e3})},console.log("----route-indexjs");var Qe=function(){var e=new j["a"]({scrollBehavior:function(){return{y:0}},routes:Y,mode:"hash",base:""});return e},Se=function(){var e="function"===typeof W?W():W,t="function"===typeof Qe?Qe({store:e}):Qe;e.$router=t;var a={el:"#q-app",router:t,store:e,render:function(e){return e(U)}};return{app:a,store:e,router:t}},Ne=a("a925"),De={failed:"Action failed",success:"Action was successful",ok:"OK",cancel:"Cancel",buy:"Buy",trrecord:"Transaction log",txsubmiting:"Submitting transaction, please wait...",toastnowallet:"There is currently no backup wallet and will jump to the Create Wallet page.",submitted:"Submitted",passworderror:"Password Error",viewresults:"View Results",close:"Close",receive:"Receive",send:"Send",tinvestment:"Total investment",trevenue:"Total revenue",join:"Join",joinlog:"Join log",referral:"Referral award",curearned:"Currently earned",curprogress:"Current progress",myreferralnum:"My referral number",myrewardlevel:"My reward level",mrewardbal:"My reward balance",lastdrawt:"Last withdrawal time",withdraw:"Withdraw",submit:"submit",fillreferCode:"Please input referral code",referralcode:"referral code",canntrefself:"The referee cannot input yourself.",checking:"Checking,please wait...",invalidcode:"Invalid referral code",enterpswd:"Please enter your wallet password",pswdnull:"Password cannot be empty",referaward0:"Your referral award is 0.",cashonce24:"hours,Can only be cashed once.",drawsuccess:"Withdrawal successful",w:" W ",d:" D ",h:" H ",m:" M ",nodata:"No data",tipinputmnic:"Please enter a mnemonic, separated by a space",setpswd:"Please set the wallet password",confirmpswd:"Please confirm the password again",naojimima:"Please remember the password, we cant help you find it back.",importOK:"Successfully imported",mnicnull:"The mnemonic cannot be empty.",fillspacetip:"Multiple spaces entered at the {index} characters",pwsdless6:"The password length cannot be less than 6 characters.",twopswddiff:"Inconsistent input passwords twice",invlidmnic:"The mnemonic entered is invalid",beginimport:"Start importing",quickbuy:"Quick buy",customamt:"Or custom amount",ivamt:"Amount of investment",needcusum:"Need to consume",lookgg:"View announcement",joininv:"join in investment",singleinv:"Single investment amount minimum {min} ETH, up to {max} ETH",ethnotenough:"Your ETH balance is not enough, please transfer to sufficient ETH then try again.",gasfeeless:"Please reserve enough miners (eg: 0.001eth), otherwise the submit may fail.",cmatless:"Insufficient CMAT balance, please purchase the corresponding amount of CMAT first.",investsuccess:"Successful investment",investfail:"Investment failed, please try again",ivben:"Investing capital",ivstartt:"Starting time",ivprogress:"Current progress",candraw:"Currently available",repaytiptx:'Note: The current available is composed of the left of first three periods of the principal and interest: <span style="color:dodgerblue;">{leftCanDraw3}</span> ETH and the fourth period principal and interest: <span style="color:dodgerblue;">{bx4}</span> ETH，withdraw the fourth period need reinvest <span style="color:dodgerblue;">{iamt}</span> ETH',drawlog:"Withdraw log",ivdetail:"Invest Detail",candraw0:"The current available amount is 0",copyaddress:"Copy Address",alreadycpoy:"Address copied",noenstip:"You have not registered your Ethereum username, please register before recommending",ensinputtip:"Please enter the name you want to register",vinstructions:"View instructions",ensregsub:'Currently you have submitted the rname <span class="dodgerblue">{regName}</span> for registration , please wait for the network confirmation',vprogress:"View progress",reregtiptx:'Currently you have registered a name <span class="dodgerblue">{oldname}</span>。After registe new name<span class="dodgerblue"> {newname} </span>successful，The original name will be released immediately。',registename:"Registered Name",isee:"Got it",nullinput:"Input cannot be empty",namelengtip:"The length should between 5 and 12",namealrdused:"The name has been registered, please choose another",registestuction:"<p>1. Support 5 to 12 digits of any letter, number and their combinations. 5 digits, 6 digits have a registration fee of 0.001 ETH, and 7 or more names are free to register.</p><p>2. Each name is unique across the network, stored in the blockchain, and is permanently owned after registration. Subsequent transactions are possible</p><p>3. This name has the function of the Ethereum domain name, which can be used instead of the address when transferring funds</p> <p>4. This name can be used as your exclusive recommendation code</p>",registesuccess:"name {name} registed successful",registefailed:"Registration failed, please try again later",switchlang:"Switch language",checkupdate:"Check update (current version:{versionName})",refertofred:"Share",feedback:"Feedback",exitcut:"Exit",backupmnic:"Backup mnemonic",getingcode:"Please wait, I am getting your referral code...",advphrase:"A true smart contract opens your journey to wealth",refercode:"Recommendation code",longtouchcopy:"[long press copy]",aleadylatest:"Already the latest version",contactus:"If you encounter any problems during use, please take easy to send an email to: cmatservers@outlook.com, we will solve it for you in time.",havenew:"Have New！",downnew:"Download update",updatelater:"Try Later",cuationbackup:"Be sure to back up the mnemonic before exiting, otherwise you will not be able to restore your wallet.",mnemonic:"Mnemonic",from:"From",to:"To",gasfee:"Gas Fee",txhash:"Transaction #",block:"Block #",confirms:"Confirmation Number",txtime:"Transaction Time",ensoraddrs:"Receiver address or username",tramt:"Transfer amount",cbalance:"Current balance",addressnull:"The payment address cannot be empty.",tramtnull:"The transfer amount cannot be empty.",ensnoexist:"The name is not registered, please enter the address",wmnemonictip:"Important: Be sure to copy the mnemonics in a safe place to restore your wallet.",setsuccess:"Successful setup",cryptwallet:"Encrypted wallet",importwallet:"Import",createwallet:"Create",totalasset:"Total assets",openinqqtip:"Please open it in your mobile browser",timeout:"Network timeout, please try again later",error:"Error,Please try again later",nonetwork:"Currently no network",disconnect:"Disconnected",assets:"Assets",set:"Setting",inputbyamt:"Please enter the quantity purchased",drawamt:"Please enter the amount of cash",repayamt:"Please enter the reinvestment amount",cutprice:"Current price",payethnum:"You need to pay {num} ETH",numnull:"The quantity cannot be empty.",drawexceed:"The amount of cash raised cannot be greater than the amount available",repayinsuffit:"The amount of reinstatement cannot be less",drawexdtalivst:"The amount of cash raised cannot exceed the total investment amount.",cmatinsuft:"Insufficient CMAT balance, please purchase the corresponding amount of CMAT first.",settoptx:'“<span style="font-size:23px;">  Real Smart Contract</span><br>Open your<span style="font-size:23px;"> Wealth </span>tour ”',registe:"Registered",cantregnew:"You have a domain name in the sale, please cancel first or wait for selled ,then register a new one."},Ve=(a("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(e){return"已选择"+e+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(e,t,a){return e+"-"+t+" / "+a},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"},ok:"确定",cancel:"取消",buy:"买入",trrecord:"交易记录",txsubmiting:"正在提交交易，请稍后...",toastnowallet:"当前没有可备份钱包，将跳到创建钱包页面。",submitted:"已提交",passworderror:"密码错误",viewresults:"查看结果",close:"关闭",receive:"收款",send:"转账",tinvestment:"总投入本金",trevenue:"总收益",join:"参与",joinlog:"参与记录",referral:"推荐奖",curearned:"当前已赚",curprogress:"当前进度",myreferralnum:"我的推荐人数",myrewardlevel:"我的奖励等级",mrewardbal:"我的奖励余额",lastdrawt:"最近一次提现时间",withdraw:"提现",submit:"提交",fillreferCode:"填写推荐码",referralcode:"推荐码",canntrefself:"推荐人不能填写自己哦.",checking:"检测中，请稍后...",invalidcode:"推荐码无效",enterpswd:"请输入钱包密码",pswdnull:"密码不能为空哦",referaward0:"你的推荐奖为0",cashonce24:"小时，只能提现一次",drawsuccess:"提现成功",drawfailed:"提现失败,请稍后重试",w:"周",d:"天",h:"小时",m:"分",nodata:"无数据",tipinputmnic:"请输入助记词，按空格分隔",setpswd:"请设置钱包密码",confirmpswd:"请再次确认密码",naojimima:"请牢记密码，我们无法帮您找回",importOK:"导入成功",mnicnull:"助记词不能为空哦",fillspacetip:"第 {index} 个字符处输入了多个空格",pwsdless6:"密码长度不能小于6位哦",twopswddiff:"两次输入密码不一致哦",invlidmnic:"输入的助记词无效",beginimport:"开始导入",quickbuy:"快捷买入",customamt:"或自定义金额",ivamt:"投入金额",needcusum:"需要消耗",lookgg:"查看公告",joininv:"参与投资",singleinv:"单笔投入金额最少{min} ETH,最多{max} ETH",ethnotenough:"你的ETH余额不足，请先转入足量ETH再操作",gasfeeless:"请预留足够的矿工费(例如：0.001eth)，否则可能提交失败",cmatless:"CMAT余额不足，请先购买相应数量的CMAT",investsuccess:"投资成功",investfail:"投资失败，请重试",ivben:"投入本金",ivstartt:"起投时间",ivprogress:"当前进度",candraw:"当前可提",repaytiptx:'说明：当前可提包含前3期本息剩余可提: <span style="color:dodgerblue;">{leftCanDraw3}</span> ETH和第4期本息: <span style="color:dodgerblue;">{bx4}</span> ETH，提取第四期部分需复投当期本金(<span style="color:dodgerblue;">{iamt}</span> ETH)的金额',drawlog:"提现记录",ivdetail:"投入详情",candraw0:"当前可提金额为 0",copyaddress:"复制地址",alreadycpoy:"地址已复制",noenstip:"你还未注册以太坊用户名,请先注册后再进行推荐",ensinputtip:"请输入你想要注册的用户名",vinstructions:"查看说明",ensregsub:'当前你已提交注册 <span class="dodgerblue">{regName}</span>的用户名，请等待网络确认',vprogress:"查看进展",reregtiptx:'当前你已注册用户名<span class="dodgerblue">{oldname}</span>。注册新用户名<span class="dodgerblue">{newname}</span>成功后，原用户名会立即释放。',registename:"注册用户名",isee:"知道了",nullinput:"输入不能为空哦",namelengtip:"长度在5到12位之间哦",namealrdused:"名称已被注册,请重新选择一个",registestuction:"<p>1.支持填写5到12位任意字母，数字和汉字及其组合，其中5位，6位的名称注册费用0.001ETH,7位及以上名称免费注册</p><p>2.每个名称全网唯一，存储在区块链上，注册后永久拥有，后续可交易</p><p>3.该名称具有以太坊域名的功能，转账时可代替地址使用</p><p>4.该名称可做为你的专属推荐码</p>",registesuccess:"用户名 {name} 注册成功",registefailed:"注册失败，请稍后重试",switchlang:"切换语言",checkupdate:"检测更新(当前版本:{versionName})",refertofred:"推荐给好友",feedback:"问题反馈",exitcut:"退出当前账号",backupmnic:"备份助记词",getingcode:"请稍后，正在获取你的推荐码...",advphrase:"真正的智能合约开启你的财富之旅",refercode:"推荐码",longtouchcopy:"【长按复制】",aleadylatest:"已是最新版",contactus:"使用过程中遇到任何问题可发邮件到：cmatservers@outlook.com ，我们将及时为你解决。",havenew:"有新的版本！",downnew:"下载更新",updatelater:"暂不更新",cuationbackup:"务必先备份助记词后再退出,否则将无法恢复钱包",mnemonic:"助记词",from:"发款方",to:"收款方",gasfee:"矿工费用",txhash:"交易号",block:"区块",confirms:"确认数",txtime:"交易时间",ensoraddrs:"收款人地址或用户名",tramt:"转账金额",cbalance:"当前余额",addressnull:"收款地址不能为空哦",tramtnull:"转账金额不能为空哦",ensnoexist:"名称未注册，请输入地址",wmnemonictip:"重要提示：请务必将助记词抄写在安全的地方，以便恢复钱包使用",setsuccess:"设置成功",cryptwallet:"加密钱包",importwallet:"导入钱包",createwallet:"创建钱包",totalasset:"总资产",openinqqtip:"请用手机自带浏览器(或谷歌，火狐，UC，360等常用手机浏览器)打开，微信和QQ里面不具备标准浏览器的功能，无法正常使用。若不是在微信和QQ里面使用请忽略该提示",timeout:"网络超时，请稍后重试",error:"出错了,请稍后重试",nonetwork:"当前无网络",disconnect:"网络已断开",assets:"资产",set:"设置",inputbyamt:"请输入购买数量",drawamt:"请输入提现金额",repayamt:"请输入复投金额",cutprice:"当前价",payethnum:"你需要支付{num}个ETH",numnull:"数量不能为空哦",drawexceed:"提现金额不能大于可提数量",repayinsuffit:"复投金额不能少于",drawexdtalivst:"提现金额不能大于总投资金额哦",cmatinsuft:"CMAT余额不足，请先购买相应数量的CMAT",settoptx:'“<span style="font-size:23px;">  真正</span>的<span style="font-size:23px;">智能合约</span><br>开启你的<span style="font-size:23px;">财富</span>之旅 ”',registe:"注册",cantregnew:"你有域名正在出售中,请先取消或等成交后再注册新域名"}),We={"en-us":De,"zh-cn":Ve},je=function(e){var t=e.app,a=e.Vue;a.use(Ne["a"]),t.i18n=new Ne["a"]({locale:localStorage.getItem("lang")||("zh-cn"===navigator.language.toLowerCase()?"zh-cn":"en-us"),fallbackLocale:"en-us",messages:We})},qe=a("bc3a"),ze=a.n(qe),$e=function(e){var t=e.Vue;t.prototype.$axios=ze.a},Oe=Se(),Fe=Oe.app,Je=Oe.store,Ge=Oe.router;[je,$e].forEach(function(e){e({app:Fe,router:Ge,store:Je,Vue:n["a"],ssrContext:null})}),new n["a"](Fe)},5781:function(e,t){},5938:function(e){e.exports=[{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_referLevel3Num",type:"uint256"},{name:"_referLevel4Num",type:"uint256"},{name:"_referLevel5Num",type:"uint256"},{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"},{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReferRatio",outputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstAgain",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"inverstFirst",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"}]},"7e6d":function(e,t,a){},"8d6f":function(e,t){},a709:function(e,t){},f50e:function(e){e.exports=[{constant:!1,inputs:[{name:"name",type:"string"}],name:"registeNameByEth",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"ensname",type:"string"},{name:"recipient",type:"address"},{name:"mobile",type:"string"},{name:"name",type:"string"},{name:"payMethod1",type:"string"},{name:"payMethod2",type:"string"},{name:"payMethod3",type:"string"}],name:"registeNameWithNotify",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"_address",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_address",type:"address"}],name:"getName",outputs:[{name:"name",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getNameSellingInfo",outputs:[{name:"seller",type:"address"},{name:"price",type:"uint256"},{name:"isSelling",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}]},fb1c:function(e,t,a){}},[[0,"runtime","vendor"]]]);