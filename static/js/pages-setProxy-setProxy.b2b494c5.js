(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setProxy-setProxy"],{1511:function(t,e,n){"use strict";n.r(e);var a=n("8fa1"),i=n("4f5e");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("69c6");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5c361d36",null,!1,a["a"],r);e["default"]=c.exports},"3b0b":function(t,e,n){"use strict";n.r(e);var a=n("c5ca"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"436a":function(t,e,n){t.exports=n.p+"static/img/new_song_bg.4ae7f32d.png"},"4f5e":function(t,e,n){"use strict";n.r(e);var a=n("5427"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5427:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("8efb")),o={name:"u-input",mixins:[i.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"69c6":function(t,e,n){"use strict";var a=n("99d6"),i=n.n(a);i.a},"869f":function(t,e,n){"use strict";var a=n("9116"),i=n.n(a);i.a},"8a0e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"card_msg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playSong.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"image"},[a("v-uni-image",{attrs:{src:t.song.song_cover,mode:""}}),a("v-uni-image",{staticClass:"song_cover_bg",attrs:{src:n("436a"),mode:""}})],1),a("v-uni-view",{staticClass:"song_msg"},[a("v-uni-view",{},[a("v-uni-text",{staticClass:"name",style:{width:t.nameWidth}},[t._v(t._s(t.songName(t.song.song_name)))]),a("v-uni-view",{staticClass:"tags"},t._l(5,(function(e){return a("v-uni-text",{key:e,staticClass:"song_tag"},[t._v("流行")])})),1)],1),t._t("priceTime")],2),t.userPhone?t._e():a("v-uni-view",{staticClass:"login_btn"},[a("v-uni-button",{staticClass:"btn",attrs:{"open-type":"getPhoneNumber",plain:!0},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getPhoneNumber.apply(void 0,arguments)}}})],1)],1)},o=[]},"8efb":function(t,e,n){"use strict";function a(t,e,n){this.$children.map((function(i){t===i.$options.name?i.$emit.apply(i,[e].concat(n)):a.apply(i,[t,e].concat(n))}))}n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{dispatch:function(t,e,n){var a=this.$parent||this.$root,i=a.$options.name;while(a&&(!i||i!==t))a=a.$parent,a&&(i=a.$options.name);a&&a.$emit.apply(a,[e].concat(n))},broadcast:function(t,e,n){a.call(this,t,e,n)}}};e.default=i},"8fa1":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uIcon:n("aa60").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},9116:function(t,e,n){var a=n("bdda");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("dfffa9ca",a,!0,{sourceMap:!1,shadowMode:!1})},"99d6":function(t,e,n){var a=n("cd45");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2e437d05",a,!0,{sourceMap:!1,shadowMode:!1})},ae02:function(t,e,n){t.exports=n.p+"static/img/luzhi.e306cb79.jpg"},b483:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uInput:n("1511").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"set_proxy"},[n("v-uni-view",{},[n("top-bar",{attrs:{title:"发起助力",bg:"#262626"},on:{goBack:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"head same_padding"},[n("v-uni-view",{staticClass:"user_url"},[n("v-uni-image",{attrs:{src:t.userInfo.avatar,mode:""}})],1),n("v-uni-view",{staticClass:"user_name"},[t._v(t._s(t.userInfo.nickname)),n("v-uni-text",{staticClass:"msg"},[t._v(t._s(t.toDate())+" 发起了订单代付请求~")])],1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"pay_card"},[n("v-uni-view",{},[t._v("选择金额")]),n("v-uni-view",{staticClass:"price"},t._l(t.priceList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"item",class:{select:e.select},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectPriece(e)}}},[n("v-uni-text",{staticClass:"price_text"},[t._v(t._s(e.money))]),t._v("元")],1)})),1),n("v-uni-view",{staticClass:"card_input"},[n("v-uni-view",{staticClass:"inputs song_msg"},[n("v-uni-view",{staticClass:"price_input"},[n("v-uni-text",{staticClass:"lable"},[t._v("单份金额:")]),n("u-input",{attrs:{placeholder:"请输入金额","input-align":"right",type:"number","placeholder-style":"color:#878787;font-size:26rpx"},model:{value:t.payPrice,callback:function(e){t.payPrice=e},expression:"payPrice"}}),n("v-uni-text",{staticClass:"lable_right"},[t._v("元/份")])],1)],1)],1),n("v-uni-view",{staticClass:"card_btn"},[t.userPhone?n("v-uni-view",{},[t.canShare&&!t.selectChange?n("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{plain:!0}},[n("v-uni-text",{staticClass:"text"},[t._v("点击右上角分享给朋友/朋友圈")])],1):n("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notShare.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"text"},[t._v("发起众筹")])],1)],1):n("v-uni-view",{},[n("v-uni-button",{staticClass:"share",staticStyle:{background:"#D8261C"},attrs:{"open-type":"getPhoneNumber",plain:!0},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getPhoneNumber.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"text"},[t._v("登录发起众筹")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"pay_tips"},[n("v-uni-view",{},[t._v("助力说明")]),n("v-uni-view",{staticClass:"text"},[t._v("1，选择需要助力的金额及单份金额，发送给粉丝发起代付。")]),n("v-uni-view",{staticClass:"text"},[t._v("2，助力金可抵扣相应歌曲费用，当助力金不足时，差额可用微信支付。")]),n("v-uni-view",{staticClass:"text"},[t._v("3，发起的助力项目永久有效。")])],1)],1)],1)},o=[]},b5e7:function(t,e,n){"use strict";n.r(e);var a=n("fe03"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b6e0:function(t,e,n){"use strict";n.r(e);var a=n("b483"),i=n("b5e7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("869f");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5533adcd",null,!1,a["a"],r);e["default"]=c.exports},bdda:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5533adcd]{background-color:#262626}.set_proxy[data-v-5533adcd]{position:relative;height:100%}.set_proxy .same_style[data-v-5533adcd], .set_proxy .main .pay_card[data-v-5533adcd], .set_proxy .main .pay_tips[data-v-5533adcd]{padding:%?20?%;border-radius:%?20?%;margin-bottom:%?20?%;background-color:#fff}.set_proxy .head[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?200?%;background-color:#262626}.set_proxy .head .user_url[data-v-5533adcd]{width:%?88?%;height:%?88?%;border-radius:50%;overflow:hidden}.set_proxy .head .user_name[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?20?%;color:#fff!important}.set_proxy .head .user_name .msg[data-v-5533adcd]{font-size:%?22?%;font-weight:400;color:#fff}.set_proxy .main[data-v-5533adcd]{position:absolute;top:%?280?%;width:100%;background:#e5e5e5}.set_proxy .main .pay_card[data-v-5533adcd]{padding:%?40?% %?20?%}.set_proxy .main .pay_card .price[data-v-5533adcd]{color:red}.set_proxy .main .pay_card .card_msg[data-v-5533adcd], .set_proxy .main .pay_card .card_input[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex}.set_proxy .main .pay_card .card_msg .song_msg[data-v-5533adcd], .set_proxy .main .pay_card .card_input .song_msg[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?32?%;width:100%}.set_proxy .main .pay_card .card_msg .song_msg .name[data-v-5533adcd], .set_proxy .main .pay_card .card_input .song_msg .name[data-v-5533adcd]{color:#262626}.set_proxy .main .pay_card .card_msg .song_msg .tags[data-v-5533adcd], .set_proxy .main .pay_card .card_input .song_msg .tags[data-v-5533adcd]{height:%?20?%;line-height:0}.set_proxy .main .pay_card .card_msg .song_msg .price[data-v-5533adcd], .set_proxy .main .pay_card .card_input .song_msg .price[data-v-5533adcd]{color:red;font-weight:700}.set_proxy .main .pay_card .card_input .inputs[data-v-5533adcd]{font-size:%?26?%}.set_proxy .main .pay_card .card_input .inputs .price_input[data-v-5533adcd], .set_proxy .main .pay_card .card_input .inputs .chat_input[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.set_proxy .main .pay_card .card_input .inputs .price_input .lable[data-v-5533adcd], .set_proxy .main .pay_card .card_input .inputs .chat_input .lable[data-v-5533adcd]{width:%?150?%}.set_proxy .main .pay_card .card_input .inputs .price_input .lable_right[data-v-5533adcd], .set_proxy .main .pay_card .card_input .inputs .chat_input .lable_right[data-v-5533adcd]{font-size:%?26?%;color:#262626;width:%?100?%;text-align:right}.set_proxy .main .pay_card .card_input .inputs .chat_input[data-v-5533adcd]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?40?%}.set_proxy .main .pay_card .card_btn[data-v-5533adcd]{margin-top:%?40?%}.set_proxy .main .pay_card .card_btn .share[data-v-5533adcd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?88?%;border-radius:%?29?%;color:#fff;margin:0;border:none;box-shadow:0 2px 8px 0 rgba(167,26,26,.92)}.set_proxy .main .pay_card .card_btn .share .text[data-v-5533adcd]{margin-left:%?5?%;font-size:%?32?%;font-weight:400}.set_proxy .main .price[data-v-5533adcd]{display:grid;grid-template-columns:repeat(3,%?202?%);grid-template-rows:repeat(2,%?120?%);grid-gap:%?20?% %?30?%;color:#d8261c;font-size:%?32?%;border-radius:%?10?%;padding:%?40?% %?0?% %?80?%}.set_proxy .main .price .item[data-v-5533adcd]{background-color:#fef4f4;text-align:center;line-height:%?120?%;border-radius:%?10?%}.set_proxy .main .price .item .price_text[data-v-5533adcd]{font-size:%?48?%}.set_proxy .main .price .select[data-v-5533adcd]{position:relative;box-shadow:%?0?% %?0?% %?1?% %?1?% #d8261c;border-radius:%?10?%}.set_proxy .main .price .select[data-v-5533adcd]::after{position:absolute;right:0;bottom:0;content:"";display:inline-block;width:%?0?%;height:%?0?%;border:%?20?% solid transparent;border-bottom-color:#d8261c;border-right-color:#d8261c}.set_proxy .main .price .select[data-v-5533adcd]::before{content:"✓";position:absolute;right:0;bottom:0;display:inline-block;width:%?20?%;height:%?20?%;z-index:99;line-height:%?20?%;font-size:%?20?%;color:#fff}.set_proxy .main .pay_tips[data-v-5533adcd]{height:%?400?%;color:#707070;font-size:%?26?%}.set_proxy .main .pay_tips .text[data-v-5533adcd]{margin-top:%?30?%}body.?%PAGE?%[data-v-5533adcd]{background-color:#262626}',""]),t.exports=e},bf8c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.card_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:calc(100vw - %?80?%);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .image[data-v-05e8a382]{position:relative;min-width:%?150?%;min-height:%?150?%}.card_msg .image uni-image[data-v-05e8a382]{width:100%;height:100%;border-radius:%?10?%}.card_msg .image .song_cover_bg[data-v-05e8a382]{width:%?20?%!important}.card_msg .song_msg[data-v-05e8a382]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;margin-left:%?40?%!important;font-size:%?32?%;width:100%}.card_msg .song_msg .name[data-v-05e8a382]{color:#262626;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.card_msg .song_msg .tags[data-v-05e8a382]{height:%?20?%;line-height:0;margin-top:%?10?%}.card_msg .login_btn[data-v-05e8a382]{position:absolute;top:0;left:0;width:100%;height:100%}.card_msg .login_btn .btn[data-v-05e8a382]{background-color:transparent;width:100%;height:100%;border:none}',""]),t.exports=e},c5ca:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=a(n("ae02")),r=n("2f62"),s={props:{song:{type:Object,required:!0,default:{song_name:"歌曲名字",price:"0.00",song_cover:o.default}},songList:{type:Array,default:[]},play:{type:Boolean,default:!0},order:{type:Object,default:{}},canClick:{type:Boolean,default:!0},nameWidth:{type:String,default:"90%"}},computed:(0,i.default)({},(0,r.mapState)(["userPhone"])),created:function(){t.log("歌曲卡片验证登录123213214")},methods:(0,i.default)((0,i.default)((0,i.default)({},(0,r.mapMutations)(["setPlaySong","setCurrentOrder"])),(0,r.mapActions)(["login","wxCode","wxInfo"])),{},{songName:function(t){if(t){var e=t.split(".");return e[0]}},getPhoneNumber:function(t){this.login(t)},playSong:function(){this.userPhone&&this.canClick&&(this.play?(this.setPlaySong({song:this.song,songList:this.songList}),uni.navigateTo({url:"/pages/playSong/playSong"})):(this.setCurrentOrder(this.order),t.log("我购买的歌曲订单信息",this.order),uni.navigateTo({url:"/pages/newKeepPay/newKeepPay"})))}})};e.default=s}).call(this,n("5a52")["default"])},cd45:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},d3af:function(t,e,n){"use strict";var a=n("f356"),i=n.n(a);i.a},f334:function(t,e,n){"use strict";n.r(e);var a=n("8a0e"),i=n("3b0b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d3af");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"05e8a382",null,!1,a["a"],r);e["default"]=c.exports},f356:function(t,e,n){var a=n("bf8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("87fd0fba",a,!0,{sourceMap:!1,shadowMode:!1})},fe03:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("7db0"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("96cf");var o=a(n("1da1")),r=a(n("bd3a")),s=a(n("f334")),c=(a(n("ae02")),n("12df")),d=n("2f62"),u={components:{TopBar:r.default,SongCard:s.default},onLoad:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.log("设置代支付",e.userInfo),uni.$on("songOssUrl",(function(n){t.log("监听oss录音地址",n),e.ossUrl=n.ossUrl}));case 2:case"end":return n.stop()}}),n)})))()},onUnload:function(){t.log("发起助力页面卸载"),uni.$off("songOssUrl")},data:function(){return{crowdId:"",payPrice:"",ossUrl:"",lastSelectMoney:1e3,selectChange:!1,priceList:[{money:1e3,select:!0},{money:2e3},{money:3e3},{money:4e3},{money:5e3},{money:6e3}]}},computed:(0,i.default)((0,i.default)({},(0,d.mapState)(["userPhone","userInfo"])),{},{errorList:function(){var t=""==this.payPrice||0==this.payPrice,e="123"==this.ossUrl,n=this.payPrice-this.maxPrice>0,a=100*this.maxPrice%(100*this.payPrice)!=0;return[{key:t,msg:"代付金额不能为空"},{key:e,msg:"录制甜言蜜语更易成功"},{key:n,msg:"代付金额不能大于 ".concat(this.maxPrice)},{key:a,msg:"代付金额要能被 ".concat(this.maxPrice," 整除")}]},canShare:function(){var t=this.errorList.find((function(t){return t.key}));return!t&&""!=this.crowdId},maxPrice:function(){var t=this.priceList.find((function(t){return t.select}));return t.money}}),methods:(0,i.default)((0,i.default)({},(0,d.mapActions)(["login","configShare"])),{},{setCrowdFuc:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showToast({title:"创建中",icon:"none"}),e.next=3,(0,c.newSetCrowd)({subject:"来自一个好友的代付求助",amount:t.maxPrice,each_amount:t.payPrice,voice:t.ossUrl});case 3:n=e.sent,a=n.code,i=n.message,o=n.data,0==a?(t.selectChange=!1,t.crowdId=o.id,t.configShare({crowdId:t.crowdId,nickname:t.userInfo.nickname}),uni.showToast({title:"创建成功",icon:"none"})):uni.showToast({title:"".concat(i),icon:"none"});case 8:case"end":return e.stop()}}),e)})))()},getPhoneNumber:function(t){this.login(t)},selectPriece:function(t){var e=this;t.money==this.lastSelectMoney?this.selectChange=!1:(this.selectChange=!0,this.lastSelectMoney=t.money),this.priceList.forEach((function(n){n.money==t.money?e.$set(n,"select",!0):e.$set(n,"select",!1)}))},goBack:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.navigateBack();case 1:case"end":return t.stop()}}),t)})))()},notShare:function(){var t=this.errorList.find((function(t){return t.key}));t?uni.showToast({title:"".concat(t.msg),icon:"none"}):this.setCrowdFuc()}})};e.default=u}).call(this,n("5a52")["default"])}}]);