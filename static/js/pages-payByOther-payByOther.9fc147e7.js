(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payByOther-payByOther"],{"09aa":function(e,t,a){"use strict";var n=a("0ccc"),i=a.n(n);i.a},"0aae":function(e,t,a){e.exports=a.p+"static/img/4.38a746a9.jpeg"},"0ccc":function(e,t,a){var n=a("ce05");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("5a387aaa",n,!0,{sourceMap:!1,shadowMode:!1})},"10c4":function(e,t,a){var n={"./playBg/1.jpeg":"9ac2","./playBg/3.jpeg":"5ad2","./playBg/4.jpeg":"0aae"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="10c4"},"3b0b":function(e,t,a){"use strict";a.r(t);var n=a("c5ca"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"42c3":function(e,t,a){"use strict";a.r(t);var n=a("bc71"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"436a":function(e,t,a){e.exports=a.p+"static/img/new_song_bg.4ae7f32d.png"},5026:function(e,t,a){var n={"./1.jpeg":"9ac2","./3.jpeg":"5ad2","./4.jpeg":"0aae"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="5026"},5316:function(e,t,a){"use strict";var n=a("8a92"),i=a.n(n);i.a},"5ad2":function(e,t,a){e.exports=a.p+"static/img/3.cde8da0b.jpeg"},6761:function(e,t,a){"use strict";a.r(t);var n=a("9e2b"),i=a("d65f");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("5316");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0cdbee39",null,!1,n["a"],r);t["default"]=c.exports},"8a0e":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"card_msg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playSong.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"image"},[n("v-uni-image",{attrs:{src:e.song.song_cover,mode:""}}),n("v-uni-image",{staticClass:"song_cover_bg",attrs:{src:a("436a"),mode:""}})],1),n("v-uni-view",{staticClass:"song_msg"},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"name",style:{width:e.nameWidth}},[e._v(e._s(e.songName(e.song.song_name)))]),n("v-uni-view",{staticClass:"tags"},e._l(5,(function(t){return n("v-uni-text",{key:t,staticClass:"song_tag"},[e._v("流行")])})),1)],1),e._t("priceTime")],2),e.userPhone?e._e():n("v-uni-view",{staticClass:"login_btn"},[n("v-uni-button",{staticClass:"btn",attrs:{"open-type":"getPhoneNumber",plain:!0},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}})],1)],1)},o=[]},"8a92":function(e,t,a){var n=a("ed51");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("65abe849",n,!0,{sourceMap:!1,shadowMode:!1})},9468:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("4de4"),a("7db0"),a("d81d"),a("d3b7"),a("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),o=n(a("5530")),r=n(a("bd3a")),s=n(a("f334")),c=n(a("c8fb")),d=(n(a("ae02")),a("2f62")),u={components:{TopBar:r.default,SongCard:s.default,PayCard:c.default},onLoad:function(t){var n=this;e.log("当前需要购买的歌曲--",t),this.song=JSON.parse(t.song),e.log("需要代支付的歌曲",this.song),this._getWallet(),uni.$on("songOssUrl",(function(t){e.log("监听oss录音地址",t),n.ossUrl=t.ossUrl}));var i=a("5026");this.bgList=i.keys().map((function(e){return a("10c4")("./playBg"+e.substr(1))}))},onUnload:function(){e.log("歌曲购买页面卸载"),uni.$off("songOssUrl")},data:function(){return{song:{},bgList:[],payPrice:"",ossUrl:"",phoneNumber:"10086",selectWX:!0,selectZL:!1}},computed:(0,o.default)((0,o.default)({},(0,d.mapState)(["wallet","userInfo"])),{},{pageBg:function(){var e=Math.floor(Math.random()*this.bgList.length);return this.bgList[e]},toProxyShow:function(){return this.selectZL&&!this.moneyEnough||this.wallet<=0},moneyEnough:function(){return this.wallet-this.song.price>=0},payWay:function(){var e=[{type:this.selectWX,way:"微信"},{type:this.selectZL,way:"助力"}];return e},errorList:function(){var e=""==this.payPrice||0==this.payPrice,t=""==this.ossUrl,a=this.payPrice-this.song.price>0,n=100*this.song.price%(100*this.payPrice)!=0;return[{key:e,msg:"代付价格不能为空"},{key:t,msg:"录制甜言蜜语更易成功"},{key:a,msg:"代付价格不能大于总价"},{key:n,msg:"代付价格要能被总价整除"}]},canShare:function(){var e=this.errorList.find((function(e){return e.key}));return!e}}),methods:(0,o.default)((0,o.default)({},(0,d.mapActions)(["payFuc","paySelf","_getWallet"])),{},{payIt:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.payWay.filter((function(e){return e.type})),a.length){t.next=4;break}return uni.showToast({title:"请选择支付方式",icon:"none"}),t.abrupt("return");case 4:n=e.selectZL&&e.wallet>0?{balance:e.moneyEnough?e.song.price:e.wallet}:{},e.payFuc(Object.assign(n,{song_id:e.song.id}));case 6:case"end":return t.stop()}}),t)})))()},wxChange:function(t){e.log("选择的",t,t.detail),this.moneyEnough&&(e.log("助力金足够"),this.selectZL=!1),this.selectWX=!!t.detail.value},zhuliClick:function(){this.wallet<=0&&uni.showToast({title:"助力金不可用,请先发起助力",icon:"none"})},zhuliChange:function(t){this.moneyEnough&&(e.log("助力金足够"),this.selectWX=!1),this.selectZL=!!t.detail.value},goBack:function(){return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateBack();case 1:case"end":return e.stop()}}),e)})))()},notShare:function(){var e=this.errorList.find((function(e){return e.key}));e&&uni.showToast({title:"".concat(e.msg),icon:"none"})},toHasBuy:function(){uni.navigateTo({url:"/pages/hasBuy/hasBuy?title=我购买的"})},toSetProxy:function(){this.song?uni.navigateTo({url:"/pages/setProxy/setProxy?song=".concat(JSON.stringify(this.song))}):uni.showToast({title:"请选择一首歌曲",icon:"none"})},makePhone:function(){uni.makePhoneCall({phoneNumber:this.phoneNumber})}})};t.default=u}).call(this,a("5a52")["default"])},"9ac2":function(e,t,a){e.exports=a.p+"static/img/1.3b4d0389.jpeg"},"9e2b":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uIcon:a("aa60").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"pay_other"},[a("v-uni-view",{staticClass:"bg"},[a("v-uni-image",{attrs:{src:e.pageBg,mode:""}})],1),a("v-uni-view",{staticClass:"head same_padding"},[a("v-uni-view",{staticClass:"user_url"},[a("v-uni-image",{attrs:{src:e.userInfo.avatar,mode:""}})],1),a("v-uni-view",{staticClass:"user_name"},[a("v-uni-text",[e._v(e._s(e.userInfo.nickname))]),a("v-uni-text",{staticClass:"msg"},[e._v(e._s(e.toDate())+" 发起了订单代付请求~")])],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"pay_card"},[a("song-card",{attrs:{song:e.song,nameWidth:"90%"},scopedSlots:e._u([{key:"priceTime",fn:function(){return[a("v-uni-view",{staticClass:"price"},[e._v(e._s(e.song.price)+"元")])]},proxy:!0}])})],1),a("v-uni-view",{staticClass:"wx_pay"},[a("v-uni-radio-group",{attrs:{name:"likeSongs"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.wxChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"checkbox"},[a("v-uni-view",{staticClass:"card"},[a("v-uni-image",{attrs:{src:"/static/image/newIcon/wx_pay.png",mode:""}}),a("v-uni-text",{staticClass:"wx_tips"},[e._v("微信支付")])],1),a("v-uni-checkbox",{staticClass:"box",attrs:{value:"wx",checked:e.selectWX}})],1)],1)],1),a("v-uni-view",{staticClass:"proxy_pay"},[a("v-uni-radio-group",{attrs:{name:"likeSongs"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.zhuliChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"checkbox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zhuliClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"zhuli_wraper"},[a("v-uni-image",{attrs:{src:"/static/image/newIcon/wallet.png",mode:""}}),a("v-uni-text",{staticClass:"wx_tips"},[e._v("助力金支付")])],1),a("v-uni-text",{staticClass:"zhuli_money"},[e._v("余额: "+e._s(e.wallet)+"元")])],1),a("v-uni-checkbox",{staticClass:"box",attrs:{value:"zhuli",checked:e.selectZL,disabled:e.wallet<=0}})],1)],1),e.toProxyShow?a("v-uni-view",{staticClass:"to_proxy"},[a("v-uni-view",{staticClass:"card",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSetProxy.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"zhuli_wraper"},[a("v-uni-text",{staticClass:"zhuli_tips"},[e._v("助力金不足,发起代付")])],1),a("v-uni-text",{staticClass:"zhuli_money"},[e._v("发起代付")])],1),a("v-uni-view",{},[a("u-icon",{attrs:{name:"arrow-right",top:"3"}})],1)],1):e._e()],1),a("v-uni-view",{staticClass:"pay_tips"},[a("v-uni-view",{},[e._v("购买说明")]),a("v-uni-view",{staticClass:"text"},[e._v("1.可微信支付一次性付款购买歌曲;")]),a("v-uni-view",{staticClass:"text"},[e._v("2.助力金可抵扣相应歌曲费用,当助力金不足时,差额可用微信支付;")]),a("v-uni-view",{staticClass:"text"},[e._v("3.单曲一经购买,不支持退款;")]),a("v-uni-view",{staticClass:"text"},[e._v("4.购买成功的歌曲可在"),a("v-uni-text",{staticClass:"my_store",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toHasBuy.apply(void 0,arguments)}}},[e._v("我购买的")]),e._v("查看;")],1),a("v-uni-view",{staticClass:"text"},[e._v("5.购买成功后联系客服"),a("v-uni-text",{staticClass:"tel_us",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.makePhone.apply(void 0,arguments)}}},[e._v(e._s(e.phoneNumber))]),e._v("进行歌曲交接;")],1)],1)],1),a("v-uni-view",{},[a("pay-card",{attrs:{song:e.song,bg:"#ffffff"},on:{payIt:function(t){arguments[0]=t=e.$handleEvent(t),e.payIt.apply(void 0,arguments)}}})],1)],1)},o=[]},ae02:function(e,t,a){e.exports=a.p+"static/img/luzhi.e306cb79.jpg"},bc71:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),o=n(a("5530")),r=(a("12df"),n(a("ae02"))),s=a("2f62"),c={props:{song:{type:Object,default:{price:"0.00",song_name:"歌曲名字"}},btnText:{type:String,default:"提交订单"},bg:{type:String,default:"rgba(255, 255, 255, .1)"},borderColor:{type:String,default:"rgba(255, 255, 255, .1)"},truePay:{type:Number,default:0},totalPay:{type:Number,default:0}},computed:(0,o.default)((0,o.default)({},(0,s.mapState)(["userPhone"])),{},{paySong:function(){return this.song?this.song:{price:"0.00",song_cover:r.default}},hasSong:function(){return this.song&&"歌曲名字"!=this.song.song_name}}),data:function(){return{btnStyle:{width:"168rpx",height:"58rpx",borderRadius:"29rpx",color:"#ffffff",fontSize:"26rpx",textAlign:"center",lineHeight:"58rpx",background:"#DBB01C"}}},created:function(){e.log("支付卡片验证登录"),e.log("支付卡片传入歌曲信息",this.song),this.userPhone||this.wxCode()},methods:(0,o.default)((0,o.default)({},(0,s.mapActions)(["login","wxCode","wxInfo"])),{},{getPhoneNumber:function(t){this.userPhone?uni.showToast({title:"已经登录"}):e.log("跳转到绑定手机")},payByOther:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.song){t.next=3;break}return uni.showToast({title:"请选择一首歌曲",icon:"none"}),t.abrupt("return");case 3:t.t0=e.btnText,t.next="发起众筹"===t.t0?6:"提交订单"===t.t0?8:10;break;case 6:return e.$emit("goBuy"),t.abrupt("break",11);case 8:return e.$emit("payIt"),t.abrupt("break",11);case 10:return t.abrupt("break",11);case 11:case"end":return t.stop()}}),t)})))()}})};t.default=c}).call(this,a("5a52")["default"])},bf8c:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.card_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:calc(100vw - %?80?%);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .image[data-v-05e8a382]{position:relative;min-width:%?150?%;min-height:%?150?%}.card_msg .image uni-image[data-v-05e8a382]{width:100%;height:100%;border-radius:%?10?%}.card_msg .image .song_cover_bg[data-v-05e8a382]{width:%?20?%!important}.card_msg .song_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;margin-left:%?40?%!important;font-size:%?32?%;width:100%}.card_msg .song_msg .name[data-v-05e8a382]{color:#262626;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .song_msg .tags[data-v-05e8a382]{height:%?20?%;line-height:0;margin-top:%?10?%}.card_msg .login_btn[data-v-05e8a382]{position:absolute;top:0;left:0;width:100%;height:100%}.card_msg .login_btn .btn[data-v-05e8a382]{background-color:transparent;width:100%;height:100%;border:none}',""]),e.exports=t},c5ca:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),o=n(a("ae02")),r=a("2f62"),s={props:{song:{type:Object,required:!0,default:{song_name:"歌曲名字",price:"0.00",song_cover:o.default}},songList:{type:Array,default:[]},play:{type:Boolean,default:!0},order:{type:Object,default:{}},canClick:{type:Boolean,default:!0},nameWidth:{type:String,default:"90%"}},computed:(0,i.default)({},(0,r.mapState)(["userPhone"])),created:function(){e.log("歌曲卡片验证登录123213214")},methods:(0,i.default)((0,i.default)((0,i.default)({},(0,r.mapMutations)(["setPlaySong","setCurrentOrder"])),(0,r.mapActions)(["login","wxCode","wxInfo"])),{},{songName:function(e){if(e){var t=e.split(".");return t[0]}},getPhoneNumber:function(e){this.login(e)},playSong:function(){this.userPhone&&this.canClick&&(this.play?(this.setPlaySong({song:this.song,songList:this.songList}),uni.navigateTo({url:"/pages/playSong/playSong"})):(this.setCurrentOrder(this.order),e.log("我购买的歌曲订单信息",this.order),uni.navigateTo({url:"/pages/newKeepPay/newKeepPay"})))}})};t.default=s}).call(this,a("5a52")["default"])},c8fb:function(e,t,a){"use strict";a.r(t);var n=a("f45a"),i=a("42c3");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("09aa");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"91507078",null,!1,n["a"],r);t["default"]=c.exports},ce05:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.song_buy[data-v-91507078]{position:fixed;height:%?120?%;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?0?% %?20?%}.song_buy .proxy_price[data-v-91507078]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start!important;-webkit-align-items:start!important;align-items:start!important;font-size:%?32?%}.song_buy .proxy_price .true_price[data-v-91507078]{color:#d8261c;margin-left:%?5?%}.song_buy .proxy_price .total_price[data-v-91507078]{color:#ea7a0c;font-size:%?26?%}.song_buy .buy_price[data-v-91507078]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.song_buy .buy_price uni-image[data-v-91507078]{width:%?70?%;height:%?70?%}.song_buy .buy_price .price[data-v-91507078]{font-size:%?32?%;color:#d8261c;font-weight:500;margin-left:%?20?%}.song_buy .buy_btns[data-v-91507078], .song_buy .buy_btns .btn_wraper[data-v-91507078]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.song_buy .buy_btns .same_style[data-v-91507078]{width:%?168?%;height:%?58?%;border-radius:%?29?%;color:#fff;font-size:%?26?%;text-align:center;line-height:%?58?%}.song_buy .buy_btns .pay_left[data-v-91507078]{color:#f5ab37;border:%?1?% solid #f5ab37}.song_buy .buy_btns .pay_right[data-v-91507078]{background:#d8261c;margin-left:%?20?%}',""]),e.exports=t},d3af:function(e,t,a){"use strict";var n=a("f356"),i=a.n(n);i.a},d65f:function(e,t,a){"use strict";a.r(t);var n=a("9468"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},ed51:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0cdbee39]{background-color:#e5e5e5}.pay_other[data-v-0cdbee39]{position:relative}.pay_other .bg[data-v-0cdbee39]{position:absolute;top:0;left:0;width:100%;height:100%}.pay_other .bg uni-image[data-v-0cdbee39]{width:100%;height:100%}.pay_other .same_style_buy_song[data-v-0cdbee39], .pay_other .main .pay_card[data-v-0cdbee39], .pay_other .main .pay_tips[data-v-0cdbee39], .pay_other .main .wx_pay[data-v-0cdbee39], .pay_other .main .proxy_pay[data-v-0cdbee39]{padding:0 %?20?%;border-radius:%?20?%;margin-bottom:%?15?%;background-color:#fff}.pay_other .head[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?200?%}.pay_other .head .user_url[data-v-0cdbee39]{width:%?88?%;height:%?88?%;border-radius:50%;overflow:hidden}.pay_other .head .user_url uni-image[data-v-0cdbee39]{width:100%;height:100%}.pay_other .head .user_name[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?20?%;color:#fff!important;z-index:9}.pay_other .head .user_name .msg[data-v-0cdbee39]{font-size:%?22?%;font-weight:400;color:#fff}.pay_other .main[data-v-0cdbee39]{height:calc(100vh - %?260?%);position:absolute;top:%?180?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%;padding:%?0?% %?20?%;background:transparent}.pay_other .main .pay_card[data-v-0cdbee39]{padding:%?40?% %?20?%}.pay_other .main .pay_card .price[data-v-0cdbee39]{color:red;font-weight:700}.pay_other .main .pay_card .card_msg[data-v-0cdbee39], .pay_other .main .pay_card .card_input[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex}.pay_other .main .pay_card .card_msg .image[data-v-0cdbee39], .pay_other .main .pay_card .card_input .image[data-v-0cdbee39]{width:%?150?%;height:%?150?%}.pay_other .main .pay_card .card_msg .image uni-image[data-v-0cdbee39], .pay_other .main .pay_card .card_input .image uni-image[data-v-0cdbee39]{width:100%;height:100%;border-radius:%?10?%}.pay_other .main .pay_card .card_msg .song_msg[data-v-0cdbee39], .pay_other .main .pay_card .card_input .song_msg[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;margin-left:%?20?%;font-size:%?32?%}.pay_other .main .pay_card .card_msg .song_msg .name[data-v-0cdbee39], .pay_other .main .pay_card .card_input .song_msg .name[data-v-0cdbee39]{color:#262626}.pay_other .main .pay_card .card_msg .song_msg .tags[data-v-0cdbee39], .pay_other .main .pay_card .card_input .song_msg .tags[data-v-0cdbee39]{height:%?20?%;line-height:0}.pay_other .main .pay_card .card_msg .song_msg .price[data-v-0cdbee39], .pay_other .main .pay_card .card_input .song_msg .price[data-v-0cdbee39]{color:red;font-weight:700}.pay_other .main .pay_card .card_input .inputs[data-v-0cdbee39]{font-size:%?26?%}.pay_other .main .pay_card .card_input .inputs .price_input[data-v-0cdbee39], .pay_other .main .pay_card .card_input .inputs .chat_input[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_other .main .pay_card .card_input .inputs .price_input .lable[data-v-0cdbee39], .pay_other .main .pay_card .card_input .inputs .chat_input .lable[data-v-0cdbee39]{width:%?150?%}.pay_other .main .pay_card .card_input .inputs .price_input .lable_right[data-v-0cdbee39], .pay_other .main .pay_card .card_input .inputs .chat_input .lable_right[data-v-0cdbee39]{font-size:%?26?%;color:#262626;width:%?100?%;margin-left:%?10?%}.pay_other .main .pay_card .card_input .inputs .chat_input[data-v-0cdbee39]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pay_other .main .pay_card .card_btn[data-v-0cdbee39]{margin-top:%?40?%}.pay_other .main .pay_card .card_btn .share[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;border-radius:%?29?%;color:#fff;margin:0;border:none;box-shadow:0 2px 8px 0 rgba(167,26,26,.92)}.pay_other .main .pay_card .card_btn .share .text[data-v-0cdbee39]{margin-left:%?5?%;font-size:%?32?%;font-weight:400}.pay_other .main .pay_tips[data-v-0cdbee39]{padding:%?20?%;color:#707070;font-size:%?26?%;overflow:scroll}.pay_other .main .pay_tips .text[data-v-0cdbee39]{margin-top:%?15?%}.pay_other .main .pay_tips .my_store[data-v-0cdbee39], .pay_other .main .pay_tips .tel_us[data-v-0cdbee39]{color:#ea7a0c}.pay_other .main .pay_tips .tel_us[data-v-0cdbee39]{text-decoration:underline}.pay_other .main .wx_pay[data-v-0cdbee39], .pay_other .main .proxy_pay[data-v-0cdbee39]{line-height:%?120?%}.pay_other .main .wx_pay .checkbox[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_other .main .wx_pay .checkbox .card[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .card[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_other .main .wx_pay .checkbox .card uni-image[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .card uni-image[data-v-0cdbee39]{width:%?32?%;height:%?32?%}.pay_other .main .wx_pay .checkbox .card .wx_tips[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .card .wx_tips[data-v-0cdbee39]{margin-left:%?13?%}.pay_other .main .wx_pay .checkbox .size[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .size[data-v-0cdbee39], .pay_other .main .wx_pay .checkbox .box[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .box[data-v-0cdbee39]{width:%?32?%;height:%?32?%}.pay_other .main .wx_pay .checkbox .box[data-v-0cdbee39], .pay_other .main .proxy_pay .checkbox .box[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_other .main .proxy_pay .card[data-v-0cdbee39]{width:90%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pay_other .main .proxy_pay .card .zhuli_wraper[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_other .main .proxy_pay .card .zhuli_money[data-v-0cdbee39]{color:#707070;font-size:%?32?%;font-weight:400}.pay_other .main .proxy_pay .to_proxy[data-v-0cdbee39], .pay_other .main .proxy_pay .to_proxy .card[data-v-0cdbee39]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pay_other .main .proxy_pay .to_proxy .card .zhuli_tips[data-v-0cdbee39]{color:#fac129;font-size:%?26?%;margin-left:%?45?%}body.?%PAGE?%[data-v-0cdbee39]{background-color:#e5e5e5}',""]),e.exports=t},f334:function(e,t,a){"use strict";a.r(t);var n=a("8a0e"),i=a("3b0b");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("d3af");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"05e8a382",null,!1,n["a"],r);t["default"]=c.exports},f356:function(e,t,a){var n=a("bf8c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("87fd0fba",n,!0,{sourceMap:!1,shadowMode:!1})},f45a:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"song_buy",style:{background:e.bg,borderTop:"1rpx solid "+e.borderColor}},[e.hasSong?a("v-uni-view",{staticClass:"buy_price"},[a("v-uni-image",{attrs:{src:e.paySong.song_cover,mode:""}}),a("v-uni-text",{staticClass:"price"},[e._v(e._s(e.paySong.price)+"元")])],1):a("v-uni-view",{staticClass:"buy_price proxy_price"},[a("v-uni-view",{},[e._v("实付:"),a("v-uni-text",{staticClass:"true_price"},[e._v(e._s(e.truePay)+"元")])],1),a("v-uni-view",{staticClass:"total_price"},[e._v("合计"+e._s(e.totalPay)+"元")])],1),a("v-uni-view",{staticClass:"buy_btns"},[e.userPhone?a("v-uni-view",{staticClass:"btn_wraper"},[a("v-uni-view",{staticClass:"pay_right same_style",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.payByOther.apply(void 0,arguments)}}},[e._v(e._s(e.btnText))])],1):a("v-uni-view",{staticClass:"btn_wraper"},[a("v-uni-button",{staticClass:"pay_right same_style",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}},[e._v(e._s(e.btnText))])],1)],1)],1)},o=[]}}]);