(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setProxy-setProxy"],{"3b0b":function(e,t,a){"use strict";a.r(t);var n=a("c5ca"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"436a":function(e,t,a){e.exports=a.p+"static/img/new_song_bg.4ae7f32d.png"},6922:function(e,t,a){"use strict";var n=a("6b02"),i=a.n(n);i.a},"6b02":function(e,t,a){var n=a("f98a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("1c6af55c",n,!0,{sourceMap:!1,shadowMode:!1})},"8a0e":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"card_msg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playSong.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"image"},[n("v-uni-image",{attrs:{src:e.song.song_cover,mode:""}}),n("v-uni-image",{staticClass:"song_cover_bg",attrs:{src:a("436a"),mode:""}})],1),n("v-uni-view",{staticClass:"song_msg"},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"name",style:{width:e.nameWidth}},[e._v(e._s(e.songName(e.song.song_name)))]),n("v-uni-view",{staticClass:"tags"},e._l(5,(function(t){return n("v-uni-text",{key:t,staticClass:"song_tag"},[e._v("流行")])})),1)],1),e._t("priceTime")],2),e.userPhone?e._e():n("v-uni-view",{staticClass:"login_btn"},[n("v-uni-button",{staticClass:"btn",attrs:{"open-type":"getPhoneNumber",plain:!0},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}})],1)],1)},r=[]},ae02:function(e,t,a){e.exports=a.p+"static/img/luzhi.e306cb79.jpg"},b5e7:function(e,t,a){"use strict";a.r(t);var n=a("fe03"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},b6e0:function(e,t,a){"use strict";a.r(t);var n=a("b8d1"),i=a("b5e7");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("6922");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"26387c5e",null,!1,n["a"],s);t["default"]=c.exports},b8d1:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"set_proxy"},[a("v-uni-view",{},[a("top-bar",{attrs:{title:"发起助力",bg:"#262626"},on:{goBack:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"head same_padding"},[a("v-uni-view",{staticClass:"user_url"},[a("v-uni-image",{attrs:{src:e.userInfo&&e.userInfo.avatar,mode:""}})],1),a("v-uni-view",{staticClass:"user_name"},[e._v(e._s(e.userInfo&&e.userInfo.nickname)),a("v-uni-text",{staticClass:"msg"},[e._v(e._s(e.toDate())+" 发起了订单代付请求~")])],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"pay_card"},[a("v-uni-view",{},[e._v("选择金额")]),a("v-uni-view",{staticClass:"price"},e._l(e.priceList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"item",class:{select:t.select},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selectPriece(t)}}},[a("v-uni-text",{staticClass:"price_text"},[e._v(e._s(t.money))]),e._v("元")],1)})),1),a("v-uni-view",{},[e._v("单份金额")]),a("v-uni-view",{staticClass:"per_price"},e._l(e.payPriceList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"item",class:{select:t.select},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selectPerPrice(t)}}},[a("v-uni-text",{staticClass:"price_text"},[e._v(e._s(t.money))]),e._v("元/份")],1)})),1),a("v-uni-view",{staticClass:"card_btn"},[e.userPhone?a("v-uni-view",{},[e.canShare&&!e.selectChange?a("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{plain:!0}},[a("v-uni-text",{staticClass:"text"},[e._v("点击右上角分享给朋友/朋友圈")])],1):a("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.notShare.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"text"},[e._v("发起众筹")])],1)],1):a("v-uni-view",{},[a("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{"open-type":"getPhoneNumber",plain:!0},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"text"},[e._v("登录发起众筹")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"pay_tips"},[a("v-uni-view",{},[e._v("助力说明")]),a("v-uni-view",{staticClass:"text"},[e._v("1，选择需要助力的金额及单份金额，发送给粉丝发起代付。")]),a("v-uni-view",{staticClass:"text"},[e._v("2，助力金可抵扣相应歌曲费用，当助力金不足时，差额可用微信支付。")]),a("v-uni-view",{staticClass:"text"},[e._v("3，发起的助力项目永久有效。")])],1)],1)],1)},r=[]},bf8c:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.card_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:calc(100vw - %?80?%);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .image[data-v-05e8a382]{position:relative;min-width:%?150?%;min-height:%?150?%}.card_msg .image uni-image[data-v-05e8a382]{width:100%;height:100%;border-radius:%?10?%}.card_msg .image .song_cover_bg[data-v-05e8a382]{width:%?20?%!important}.card_msg .song_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;margin-left:%?40?%!important;font-size:%?32?%;width:100%}.card_msg .song_msg .name[data-v-05e8a382]{color:#262626;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .song_msg .tags[data-v-05e8a382]{height:%?20?%;line-height:0;margin-top:%?10?%}.card_msg .login_btn[data-v-05e8a382]{position:absolute;top:0;left:0;width:100%;height:100%}.card_msg .login_btn .btn[data-v-05e8a382]{background-color:transparent;width:100%;height:100%;border:none}',""]),e.exports=t},c5ca:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),r=n(a("ae02")),s=a("2f62"),o={props:{song:{type:Object,required:!0,default:{song_name:"歌曲名字",price:"0.00",song_cover:r.default}},songList:{type:Array,default:[]},play:{type:Boolean,default:!0},order:{type:Object,default:{}},canClick:{type:Boolean,default:!0},nameWidth:{type:String,default:"90%"}},computed:(0,i.default)({},(0,s.mapState)(["userPhone"])),created:function(){e.log("歌曲卡片验证登录123213214")},methods:(0,i.default)((0,i.default)((0,i.default)({},(0,s.mapMutations)(["setPlaySong","setCurrentOrder"])),(0,s.mapActions)(["login","wxCode","wxInfo"])),{},{songName:function(e){if(e){var t=e.split(".");return t[0]}},getPhoneNumber:function(e){this.login(e)},playSong:function(){this.userPhone&&this.canClick&&(this.play?(this.setPlaySong({song:this.song,songList:this.songList}),uni.navigateTo({url:"/pages/playSong/playSong"})):(this.setCurrentOrder(this.order),e.log("我购买的歌曲订单信息",this.order),uni.navigateTo({url:"/pages/newKeepPay/newKeepPay"})))}})};t.default=o}).call(this,a("5a52")["default"])},d3af:function(e,t,a){"use strict";var n=a("f356"),i=a.n(n);i.a},f334:function(e,t,a){"use strict";a.r(t);var n=a("8a0e"),i=a("3b0b");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("d3af");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"05e8a382",null,!1,n["a"],s);t["default"]=c.exports},f356:function(e,t,a){var n=a("bf8c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("87fd0fba",n,!0,{sourceMap:!1,shadowMode:!1})},f98a:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-26387c5e]{background-color:#262626}.set_proxy[data-v-26387c5e]{position:relative;height:100%}.set_proxy .same_style[data-v-26387c5e], .set_proxy .main .pay_card[data-v-26387c5e], .set_proxy .main .pay_tips[data-v-26387c5e]{padding:%?20?%;border-radius:%?20?%;margin-bottom:%?20?%;background-color:#fff}.set_proxy .head[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?200?%;background-color:#262626}.set_proxy .head .user_url[data-v-26387c5e]{width:%?88?%;height:%?88?%;border-radius:50%;overflow:hidden}.set_proxy .head .user_url uni-image[data-v-26387c5e]{width:100%;height:100%}.set_proxy .head .user_name[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?20?%;color:#fff!important}.set_proxy .head .user_name .msg[data-v-26387c5e]{font-size:%?22?%;font-weight:400;color:#fff}.set_proxy .main[data-v-26387c5e]{position:absolute;top:%?280?%;width:100%;background:#e5e5e5}.set_proxy .main .pay_card[data-v-26387c5e]{padding:%?40?% %?20?%}.set_proxy .main .pay_card .price[data-v-26387c5e], .set_proxy .main .pay_card .per_price[data-v-26387c5e]{color:red}.set_proxy .main .pay_card .card_msg[data-v-26387c5e], .set_proxy .main .pay_card .card_input[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex}.set_proxy .main .pay_card .card_msg .song_msg[data-v-26387c5e], .set_proxy .main .pay_card .card_input .song_msg[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?32?%;width:100%}.set_proxy .main .pay_card .card_msg .song_msg .name[data-v-26387c5e], .set_proxy .main .pay_card .card_input .song_msg .name[data-v-26387c5e]{color:#262626}.set_proxy .main .pay_card .card_msg .song_msg .tags[data-v-26387c5e], .set_proxy .main .pay_card .card_input .song_msg .tags[data-v-26387c5e]{height:%?20?%;line-height:0}.set_proxy .main .pay_card .card_msg .song_msg .price[data-v-26387c5e], .set_proxy .main .pay_card .card_input .song_msg .price[data-v-26387c5e], .set_proxy .main .pay_card .card_msg .song_msg .per_price[data-v-26387c5e], .set_proxy .main .pay_card .card_input .song_msg .per_price[data-v-26387c5e]{color:red;font-weight:700}.set_proxy .main .pay_card .card_input .inputs[data-v-26387c5e]{font-size:%?26?%}.set_proxy .main .pay_card .card_input .inputs .price_input[data-v-26387c5e], .set_proxy .main .pay_card .card_input .inputs .chat_input[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.set_proxy .main .pay_card .card_input .inputs .price_input .lable[data-v-26387c5e], .set_proxy .main .pay_card .card_input .inputs .chat_input .lable[data-v-26387c5e]{width:%?150?%}.set_proxy .main .pay_card .card_input .inputs .price_input .lable_right[data-v-26387c5e], .set_proxy .main .pay_card .card_input .inputs .chat_input .lable_right[data-v-26387c5e]{font-size:%?26?%;color:#262626;width:%?100?%;text-align:right}.set_proxy .main .pay_card .card_input .inputs .chat_input[data-v-26387c5e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?40?%}.set_proxy .main .pay_card .card_btn[data-v-26387c5e]{margin-top:%?40?%}.set_proxy .main .pay_card .card_btn .share[data-v-26387c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;border-radius:%?29?%;color:#fff;margin:0;border:none;box-shadow:0 2px 8px 0 rgba(167,26,26,.92)}.set_proxy .main .pay_card .card_btn .share .text[data-v-26387c5e]{margin-left:%?5?%;font-size:%?32?%;font-weight:400}.set_proxy .main .price[data-v-26387c5e], .set_proxy .main .per_price[data-v-26387c5e]{display:grid;grid-template-columns:repeat(3,auto);grid-template-rows:repeat(2,%?120?%);grid-gap:%?20?% %?30?%;color:#d8261c;font-size:%?32?%;border-radius:%?10?%;padding:%?40?% %?0?% %?80?%}.set_proxy .main .price .item[data-v-26387c5e], .set_proxy .main .per_price .item[data-v-26387c5e]{background-color:#fef4f4;text-align:center;line-height:%?120?%;border-radius:%?10?%}.set_proxy .main .price .item .price_text[data-v-26387c5e], .set_proxy .main .per_price .item .price_text[data-v-26387c5e]{font-size:%?48?%}.set_proxy .main .price .select[data-v-26387c5e], .set_proxy .main .per_price .select[data-v-26387c5e]{position:relative;box-shadow:%?0?% %?0?% %?1?% %?1?% #d8261c;border-radius:%?10?%}.set_proxy .main .price .select[data-v-26387c5e]::after, .set_proxy .main .per_price .select[data-v-26387c5e]::after{position:absolute;right:0;bottom:0;content:"";display:inline-block;width:%?0?%;height:%?0?%;border:%?20?% solid transparent;border-bottom-color:#d8261c;border-right-color:#d8261c}.set_proxy .main .price .select[data-v-26387c5e]::before, .set_proxy .main .per_price .select[data-v-26387c5e]::before{content:"✓";position:absolute;right:0;bottom:0;display:inline-block;width:%?20?%;height:%?20?%;z-index:99;line-height:%?20?%;font-size:%?20?%;color:#fff}.set_proxy .main .per_price[data-v-26387c5e]{grid-template-columns:repeat(3,auto);grid-template-rows:repeat(2,%?60?%);font-size:%?24?%}.set_proxy .main .per_price .item[data-v-26387c5e]{line-height:%?60?%}.set_proxy .main .per_price .item .price_text[data-v-26387c5e]{font-size:%?40?%}.set_proxy .main .pay_tips[data-v-26387c5e]{height:%?400?%;color:#707070;font-size:%?26?%}.set_proxy .main .pay_tips .text[data-v-26387c5e]{margin-top:%?30?%}body.?%PAGE?%[data-v-26387c5e]{background-color:#262626}',""]),e.exports=t},fe03:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("7db0"),a("4160"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530"));a("96cf");var r=n(a("1da1")),s=n(a("bd3a")),o=n(a("f334")),c=(n(a("ae02")),a("12df")),d=a("2f62"),l={components:{TopBar:s.default,SongCard:o.default},onLoad:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.log("设置代支付",t.userInfo),uni.$on("songOssUrl",(function(a){e.log("监听oss录音地址",a),t.ossUrl=a.ossUrl}));case 2:case"end":return a.stop()}}),a)})))()},onUnload:function(){e.log("发起助力页面卸载"),uni.$off("songOssUrl")},data:function(){return{crowdId:"",payPrice:"123",ossUrl:"",lastSelectMoney:1e3,lastSelectPerMoney:1,selectChange:!1,selectPerChange:!1,payPriceList:[{money:1,select:!0},{money:5},{money:10},{money:50},{money:100}],priceList:[{money:1e3,select:!0},{money:2e3},{money:3e3},{money:4e3},{money:5e3},{money:6e3}]}},computed:(0,i.default)((0,i.default)({},(0,d.mapState)(["userPhone","userInfo"])),{},{errorList:function(){var e=""==this.lastSelectPerMoney||0==this.lastSelectPerMoney,t="123"==this.ossUrl,a=this.lastSelectPerMoney-this.maxPrice>0,n=100*this.maxPrice%(100*this.lastSelectPerMoney)!=0;return[{key:e,msg:"代付金额不能为空"},{key:t,msg:"录制甜言蜜语更易成功"},{key:a,msg:"代付金额不能大于 ".concat(this.maxPrice)},{key:n,msg:"代付金额要能被 ".concat(this.maxPrice," 整除")}]},canShare:function(){var e=this.errorList.find((function(e){return e.key}));return!e&&""!=this.crowdId},maxPrice:function(){var e=this.priceList.find((function(e){return e.select}));return e.money}}),methods:(0,i.default)((0,i.default)({},(0,d.mapActions)(["login","configShare"])),{},{setCrowdFuc:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showToast({title:"创建中",icon:"none"}),t.next=3,(0,c.newSetCrowd)({subject:"来自一个好友的代付求助",amount:e.maxPrice,each_amount:e.lastSelectPerMoney,voice:e.ossUrl});case 3:a=t.sent,n=a.code,i=a.message,r=a.data,0==n?(e.selectChange=!1,e.selectPerChange=!1,e.crowdId=r.id,e.configShare({crowdId:e.crowdId,nickname:e.userInfo.nickname}),uni.showToast({title:"创建成功",icon:"none"})):uni.showToast({title:"".concat(i),icon:"none"});case 8:case"end":return t.stop()}}),t)})))()},getPhoneNumber:function(e){this.login(e)},selectPerPrice:function(e){var t=this;e.money==this.lastSelectPerMoney?this.selectPerChange=!1:(this.selectPerChange=!0,this.lastSelectPerMoney=e.money),this.payPriceList.forEach((function(a){a.money==e.money?t.$set(a,"select",!0):t.$set(a,"select",!1)}))},selectPriece:function(e){var t=this;e.money==this.lastSelectMoney?this.selectChange=!1:(this.selectChange=!0,this.lastSelectMoney=e.money),this.priceList.forEach((function(a){a.money==e.money?t.$set(a,"select",!0):t.$set(a,"select",!1)}))},goBack:function(){return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateBack();case 1:case"end":return e.stop()}}),e)})))()},notShare:function(){var e=this.errorList.find((function(e){return e.key}));e?uni.showToast({title:"".concat(e.msg),icon:"none"}):this.setCrowdFuc()}})};t.default=l}).call(this,a("5a52")["default"])}}]);