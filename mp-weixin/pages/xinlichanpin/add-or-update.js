(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xinlichanpin/add-or-update"],{"31c4":function(n,e,t){"use strict";(function(n){t("b379"),t("921b");i(t("66fd"));var e=i(t("66c1"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"3f95":function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},"66c1":function(n,e,t){"use strict";t.r(e);var i=t("3f95"),r=t("dbc5");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("d464");var c,u=t("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"06c034f8",null,!1,i["a"],c);e["default"]=o.exports},a225:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,c){try{var u=n[a](c),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(i,r)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var c=n.apply(e,t);function u(n){a(c,i,r,u,o,"next",n)}function o(n){a(c,i,r,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("94e2"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{chanpinmingcheng:"",chanpinfenlei:"",chanpintupian:"",chanpinxiangqing:"",price:""},chanpinfenleiOptions:[],chanpinfenleiIndex:0,user:{},ro:{chanpinmingcheng:!1,chanpinfenlei:!1,chanpintupian:!1,chanpinxiangqing:!1,price:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=c(i.default.mark((function e(t){var r,a,c,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return a=e.sent,this.user=a.data,e.next=7,this.$api.option("chanpinfenlei","chanpinfenlei",{});case 7:if(a=e.sent,this.chanpinfenleiOptions=a.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=17;break}return this.ruleForm.id=t.id,e.next=15,this.$api.info("xinlichanpin",this.ruleForm.id);case 15:a=e.sent,this.ruleForm=a.data;case 17:if(!t.cross){e.next=44;break}c=n.getStorageSync("crossObj"),e.t0=i.default.keys(c);case 20:if((e.t1=e.t0()).done){e.next=44;break}if(u=e.t1.value,"chanpinmingcheng"!=u){e.next=26;break}return this.ruleForm.chanpinmingcheng=c[u],this.ro.chanpinmingcheng=!0,e.abrupt("continue",20);case 26:if("chanpinfenlei"!=u){e.next=30;break}return this.ruleForm.chanpinfenlei=c[u],this.ro.chanpinfenlei=!0,e.abrupt("continue",20);case 30:if("chanpintupian"!=u){e.next=34;break}return this.ruleForm.chanpintupian=c[u],this.ro.chanpintupian=!0,e.abrupt("continue",20);case 34:if("chanpinxiangqing"!=u){e.next=38;break}return this.ruleForm.chanpinxiangqing=c[u],this.ro.chanpinxiangqing=!0,e.abrupt("continue",20);case 38:if("price"!=u){e.next=42;break}return this.ruleForm.price=c[u],this.ro.price=!0,e.abrupt("continue",20);case 42:e.next=20;break;case 44:this.styleChange();case 45:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},chanpinfenleiChange:function(n){this.chanpinfenleiIndex=n.target.value,this.ruleForm.chanpinfenlei=this.chanpinfenleiOptions[this.chanpinfenleiIndex]},chanpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.chanpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=c(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.price){n.next=3;break}return this.$utils.msg("价格不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){n.next=6;break}return this.$utils.msg("价格应输入数字"),n.abrupt("return");case 6:if(!this.ruleForm.id){n.next=11;break}return n.next=9,this.$api.update("xinlichanpin",this.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,this.$api.add("xinlichanpin",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,t("543d")["default"])},c4ad:function(n,e,t){},d464:function(n,e,t){"use strict";var i=t("c4ad"),r=t.n(i);r.a},dbc5:function(n,e,t){"use strict";t.r(e);var i=t("a225"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a}},[["31c4","common/runtime","common/vendor"]]]);