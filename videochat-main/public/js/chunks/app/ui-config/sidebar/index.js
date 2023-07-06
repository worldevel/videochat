/*! For license information please see index.js.LICENSE.txt */
(self.webpackChunkConnect=self.webpackChunkConnect||[]).push([[7811],{85412:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var r=a(17107),o=a(86908),i=a(20629),n=a(72238);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){s=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,a){return t[e]=a}}function d(t,e,a,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),n=new w(r||[]);return i._invoke=function(t,e,a){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return $()}for(a.method=o,a.arg=i;;){var n=a.delegate;if(n){var l=y(n,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=f(t,e,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(t,a,n),i}function f(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u={};function m(){}function h(){}function g(){}var b={};c(b,o,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(x([])));p&&p!==e&&a.call(p,o)&&(b=p);var _=g.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,n,s){var c=f(t[o],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==l(u)&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,n,s)}),(function(t){r("throw",t,n,s)})):e.resolve(u).then((function(t){d.value=t,n(d)}),(function(t){return r("throw",t,n,s)}))}s(c.arg)}var o;this._invoke=function(t,a){function i(){return new e((function(e,o){r(t,a,e,o)}))}return o=o?o.then(i,i):i()}}function y(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=f(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:void 0,done:!0}}return h.prototype=g,c(_,"constructor",g),c(g,"constructor",h),h.displayName=c(g,n,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,n,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},S(C.prototype),c(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,a,r,o,i){void 0===i&&(i=Promise);var n=new C(d(e,a,r,o),i);return t.isGeneratorFunction(a)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},S(_),c(_,n,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=x,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return n.type="throw",n.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],n=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),D(a),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var o=r.arg;D(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:x(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},t}function c(t,e,a,r,o,i,n){try{var l=t[i](n),s=l.value}catch(t){return void a(t)}l.done?e(s):Promise.resolve(s).then(r,o)}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const m={components:{CollapseTransition:o.A1},data:function(){return{formData:f(f({},n.Z),{},{type:"ui"}),actions:{leftSidebarStyle:{"push-content":{leftSidebarBackdrop:!1,leftSidebarShadow:!1,leftSidebarShow:!0},push:{leftSidebarShow:!0},over:{leftSidebarBackdrop:!0,leftSidebarShadow:!0,leftSidebarShow:!0},folded:{leftSidebarBackdrop:!0,leftSidebarShow:!1},"off-canvas":{leftSidebarShow:!0}},topNavbarHide:{true:{leftSidebarHeight:"full"}},leftSidebarHeight:{normal:{topNavbarHide:!1}},pageHeaderIsBoxed:{true:{pageHeaderBackgroundColor:"primary",colorScheme:"custom"}},pageHeaderBackgroundColor:{transparent:{pageHeaderIsBoxed:!1},any:{colorScheme:"custom"}},pageBackgroundColor:{any:{colorScheme:"custom"}},pageContainerBackgroundColor:{any:{colorScheme:"custom"}},leftSidebarColor:{any:{colorScheme:"custom"}},rightSidebarColor:{any:{colorScheme:"custom"}},modalSidebarColor:{any:{colorScheme:"custom"}},specialSidebarColor:{any:{colorScheme:"custom"}},topNavbarColor:{any:{colorScheme:"custom"}},colorScheme:{default:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"secondary",topNavbarColor:"black",topNavbarLogoLight:!0},white:{pageBackgroundColor:"white",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1},light:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"light",topNavbarColor:"white",topNavbarLogoLight:!1},dark:{pageBackgroundColor:"black",pageContainerBackgroundColor:"gray-darkest",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darkest",modalSidebarColor:"black",specialSidebarColor:"black",topNavbarColor:"gray-darkest",topNavbarLogoLight:!0},"semi-dark":{pageBackgroundColor:"gray-darkest",pageContainerBackgroundColor:"gray-darker",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darker",modalSidebarColor:"gray-darker",specialSidebarColor:"primary",topNavbarColor:"black",topNavbarLogoLight:!0},casual:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"success",topNavbarColor:"dark-primary",topNavbarLogoLight:!0},business:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1}}},formErrors:{},preRequisite:{},colors:[{key:"primary",title:"Primary"},{key:"dark-primary",title:"Dark Primary"},{key:"secondary",title:"Secondary"},{key:"success",title:"Success"},{key:"info",title:"Info"},{key:"warning",title:"Warning"},{key:"danger",title:"Danger"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"gray-darker",title:"Darker"},{key:"gray-darkest",title:"Darkest"},{key:"black",title:"Black"}],colorSchemes:[{key:"default",title:"Default"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"semi-dark",title:"Semi Dark"},{key:"casual",title:"Casual"},{key:"business",title:"Business"}],initialFormData:null,emptyFormData:null,readyForAction:!1,isLoading:!0,getInitialDataCalled:!1}},computed:f(f({},(0,i.Se)("config",["vars","uiConfigs"])),{},{computedFormData:function(){return _.cloneDeep(this.formData)}}),watch:{computedFormData:{deep:!0,handler:_.debounce((function(t,e){var a=this;this.readyForAction&&(t=this.processActions(t,e),this.formData.objForEach((function(e,r){a.formData[r]=t[r]})),this.SetUiConfig(t)),"function"==typeof this.afterSettingConfig&&this.$nextTick((function(){a.afterSettingConfig()})),this.readyForAction=!0}),500)}},methods:f(f(f({},(0,i.nv)("config",["GetConfig"])),(0,i.nv)("config",["SetUiConfig"])),{},{processActions:function(t,e){return this.actions.objForEach((function(a,r){if(t[r]!==e[r]){var o=a[t[r]];o&&o.objForEach((function(e,a){t[a]=e}));var i=a.any;i&&i.objForEach((function(e,a){t[a]=e}))}})),t},findActualValue:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[a]===t}))||null},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,r.Vx(this.formData).then((function(e){t.GetConfig().then((function(){t.isLoading=!1,t.getInitialDataCalled&&t.getInitialData(),t.$toasted.success(e.message,t.$toastConfig.success),t.initialFormData=Object.assign({},t.formData)})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)}))})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){var e=this;formUtil.unsavedCheckAlert(this.initialFormData,this.formData,(function(a){a?(e.SetUiConfig(e.initialFormData),t()):!1!==a&&t()}))},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(a,r){e.preRequisite[r]=t.hasOwnProperty(r)?t[r]:a})),this.isLoading=!1},fillFormData:function(){this.isLoading=!0,this.uiConfigs&&(this.formData=formUtil.assignValues(this.formData,this.uiConfigs)),this.isLoading=!1},getInitialData:function(t){var e,a=this;return(e=s().mark((function e(){var o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.isLoading=!0,a.getInitialDataCalled=!0,e.prev=2,e.next=5,r.B_(Object.keys(a.preRequisite).join(","));case 5:return o=e.sent,a.fillPreRequisite(o),t&&a.$nextTick((function(){t()})),e.abrupt("return",o);case 11:throw e.prev=11,e.t0=e.catch(2),a.isLoading=!1,a.formErrors=formUtil.handleErrors(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var t=this,a=arguments;return new Promise((function(r,o){var i=e.apply(t,a);function n(t){c(i,r,o,n,l,"next",t)}function l(t){c(i,r,o,n,l,"throw",t)}n(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,a){this.unsavedCheck(a)}}},50258:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var r=a(94015),o=a.n(r),i=a(23645),n=a.n(i)()(o());n.push([t.id,".color-item[data-v-14c30fd6]{width:100%}.color-list[data-v-14c30fd6]{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between}.color-list>.color-item[data-v-14c30fd6]{flex:0 50%}","",{version:3,sources:["webpack://./resources/js/views/app/ui-config/sidebar/index.vue"],names:[],mappings:"AAkVA,6BACI,UAjVJ,CAoVA,6BAEI,kBAAA,CADA,YAAA,CAGA,cAAA,CADA,6BAhVJ,CAmVI,yCACI,UAjVR",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.color-item {\n    width: 100%;\n}\n\n.color-list {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    > .color-item {\n        flex: 0 50%;\n    }\n}\n\n"],sourceRoot:""}]);const l=n},37134:t=>{t.exports="/images/sidebar_left_height_full.jpg?cd7ee0e75960b48016364516a41d54ae"},94675:t=>{t.exports="/images/sidebar_left_height_normal.jpg?7f3721d0fcba903d1b1aa81e948bea0d"},74379:t=>{t.exports="/images/sidebar_left_style_folded.jpg?a5455346a2423116cc03891e5a3f59c9"},68948:t=>{t.exports="/images/sidebar_left_style_off_canvas.jpg?c4cedb503772e97a7db71658784cbb50"},12765:t=>{t.exports="/images/sidebar_left_style_over.jpg?230d2744f35bec2301f8284ce291057e"},17754:t=>{t.exports="/images/sidebar_left_style_push.jpg?dd10d526a6418b1ed3c51df736ff75c6"},20411:t=>{t.exports="/images/sidebar_left_style_push_content.jpg?1ff45f553ea73c4d8d375beb95f78988"},47850:t=>{t.exports="/images/sidebar_right_height_full.jpg?2e8215157afff6e2ad7d9b820fd3866d"},4543:t=>{t.exports="/images/sidebar_right_height_normal.jpg?038b05883515cd3b85578a324a6e0ad2"},65883:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>x});var r=a(94675),o=a.n(r),i=a(37134),n=a.n(i),l=a(20411),s=a.n(l),c=a(17754),d=a.n(c),f=a(12765),u=a.n(f),m=a(74379),h=a.n(m),g=a(68948),b=a.n(g),v=a(4543),p=a.n(v),_=a(47850),S=a.n(_);const C={extends:a(85412).Z,data:function(){return{sidebarLeftHeightNormal:o(),sidebarLeftHeightFull:n(),sidebarLeftStylePushContent:s(),sidebarLeftStylePush:d(),sidebarLeftStyleOver:u(),sidebarLeftStyleFolded:h(),sidebarLeftStyleOffCanvas:b(),sidebarRightHeightNormal:p(),sidebarRightHeightFull:S()}},methods:{getWallpaper:function(){this.$store.dispatch("config/getWallpaper")}}};var y=a(93379),k=a.n(y),D=a(50258),w={insert:"head",singleton:!1};k()(D.Z,w);D.Z.locals;const x=(0,a(51900).Z)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("h4",[t._v(t._s(t.$t("config.ui.left_sidebar")))]),t._v(" "),a("hr",{staticClass:"mt-3 mb-4"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.height")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"normal",inline:"","has-image":""},model:{value:t.formData.leftSidebarHeight,callback:function(e){t.$set(t.formData,"leftSidebarHeight",e)},expression:"formData.leftSidebarHeight"}},[a("img",{attrs:{src:t.sidebarLeftHeightNormal}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.normal")))])]),t._v(" "),a("base-radio",{attrs:{value:"full",inline:"","has-image":""},model:{value:t.formData.leftSidebarHeight,callback:function(e){t.$set(t.formData,"leftSidebarHeight",e)},expression:"formData.leftSidebarHeight"}},[a("img",{attrs:{src:t.sidebarLeftHeightFull}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.full")))])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.leftSidebarBackdrop,callback:function(e){t.$set(t.formData,"leftSidebarBackdrop",e)},expression:"formData.leftSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.leftSidebarBackdrop,callback:function(e){t.$set(t.formData,"leftSidebarBackdrop",e)},expression:"formData.leftSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.shadow")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.leftSidebarShadow,callback:function(e){t.$set(t.formData,"leftSidebarShadow",e)},expression:"formData.leftSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.leftSidebarShadow,callback:function(e){t.$set(t.formData,"leftSidebarShadow",e)},expression:"formData.leftSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)])]),t._v(" "),a("div",{staticClass:"alert alert-outline-info text-center"},[t._v(t._s(t.$t("config.ui.backdrop_helper")))])]),t._v(" "),a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.style")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"push-content",inline:"","has-image":""},model:{value:t.formData.leftSidebarStyle,callback:function(e){t.$set(t.formData,"leftSidebarStyle",e)},expression:"formData.leftSidebarStyle"}},[a("img",{attrs:{src:t.sidebarLeftStylePushContent}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.push_content")))])]),t._v(" "),a("base-radio",{attrs:{value:"push",inline:"","has-image":""},model:{value:t.formData.leftSidebarStyle,callback:function(e){t.$set(t.formData,"leftSidebarStyle",e)},expression:"formData.leftSidebarStyle"}},[a("img",{attrs:{src:t.sidebarLeftStylePush}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.push")))])])],1),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"over",inline:"","has-image":""},model:{value:t.formData.leftSidebarStyle,callback:function(e){t.$set(t.formData,"leftSidebarStyle",e)},expression:"formData.leftSidebarStyle"}},[a("img",{attrs:{src:t.sidebarLeftStyleOver}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.over")))])]),t._v(" "),a("base-radio",{attrs:{value:"folded",inline:"","has-image":""},model:{value:t.formData.leftSidebarStyle,callback:function(e){t.$set(t.formData,"leftSidebarStyle",e)},expression:"formData.leftSidebarStyle"}},[a("img",{attrs:{src:t.sidebarLeftStyleFolded}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.folded")))])])],1),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"off-canvas",inline:"","has-image":""},model:{value:t.formData.leftSidebarStyle,callback:function(e){t.$set(t.formData,"leftSidebarStyle",e)},expression:"formData.leftSidebarStyle"}},[a("img",{attrs:{src:t.sidebarLeftStyleOffCanvas}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.off_canvas")))])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.color")))]),t._v(" "),a("div",{staticClass:"color-list mt-3"},[t._l(t.colors,(function(e){return a("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:t.formData.leftSidebarColor,callback:function(e){t.$set(t.formData,"leftSidebarColor",e)},expression:"formData.leftSidebarColor"}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])})),t._v(" "),a("base-radio",{staticClass:"color-item mb-2",attrs:{value:"wallpaper"},on:{change:t.getWallpaper},model:{value:t.formData.leftSidebarColor,callback:function(e){t.$set(t.formData,"leftSidebarColor",e)},expression:"formData.leftSidebarColor"}},[t._v("\n                        "+t._s(t.$t("config.ui.wallpaper"))+"\n                    ")])],2)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.light_logo")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.leftSidebarLogoLight,callback:function(e){t.$set(t.formData,"leftSidebarLogoLight",e)},expression:"formData.leftSidebarLogoLight"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.leftSidebarLogoLight,callback:function(e){t.$set(t.formData,"leftSidebarLogoLight",e)},expression:"formData.leftSidebarLogoLight"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop_color")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:"transparent",inline:""},model:{value:t.formData.leftSidebarBackdropColor,callback:function(e){t.$set(t.formData,"leftSidebarBackdropColor",e)},expression:"formData.leftSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.transparent"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"light",inline:""},model:{value:t.formData.leftSidebarBackdropColor,callback:function(e){t.$set(t.formData,"leftSidebarBackdropColor",e)},expression:"formData.leftSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.light"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"dark",inline:""},model:{value:t.formData.leftSidebarBackdropColor,callback:function(e){t.$set(t.formData,"leftSidebarBackdropColor",e)},expression:"formData.leftSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.dark"))+"\n                            ")])],1)])])])]),t._v(" "),a("h4",[t._v(t._s(t.$t("config.ui.right_sidebar")))]),t._v(" "),a("hr",{staticClass:"mt-3 mb-4"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.height")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"normal",inline:"","has-image":""},model:{value:t.formData.rightSidebarHeight,callback:function(e){t.$set(t.formData,"rightSidebarHeight",e)},expression:"formData.rightSidebarHeight"}},[a("img",{attrs:{src:t.sidebarRightHeightNormal}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.normal")))])]),t._v(" "),a("base-radio",{attrs:{value:"full",inline:"","has-image":""},model:{value:t.formData.rightSidebarHeight,callback:function(e){t.$set(t.formData,"rightSidebarHeight",e)},expression:"formData.rightSidebarHeight"}},[a("img",{attrs:{src:t.sidebarRightHeightFull}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.full")))])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.rightSidebarBackdrop,callback:function(e){t.$set(t.formData,"rightSidebarBackdrop",e)},expression:"formData.rightSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.rightSidebarBackdrop,callback:function(e){t.$set(t.formData,"rightSidebarBackdrop",e)},expression:"formData.rightSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.shadow")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.rightSidebarShadow,callback:function(e){t.$set(t.formData,"rightSidebarShadow",e)},expression:"formData.rightSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.rightSidebarShadow,callback:function(e){t.$set(t.formData,"rightSidebarShadow",e)},expression:"formData.rightSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.color")))]),t._v(" "),a("div",{staticClass:"color-list mt-3"},t._l(t.colors,(function(e){return a("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:t.formData.rightSidebarColor,callback:function(e){t.$set(t.formData,"rightSidebarColor",e)},expression:"formData.rightSidebarColor"}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])})),1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop_color")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:"transparent",inline:""},model:{value:t.formData.rightSidebarBackdropColor,callback:function(e){t.$set(t.formData,"rightSidebarBackdropColor",e)},expression:"formData.rightSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.transparent"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"light",inline:""},model:{value:t.formData.rightSidebarBackdropColor,callback:function(e){t.$set(t.formData,"rightSidebarBackdropColor",e)},expression:"formData.rightSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.light"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"dark",inline:""},model:{value:t.formData.rightSidebarBackdropColor,callback:function(e){t.$set(t.formData,"rightSidebarBackdropColor",e)},expression:"formData.rightSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.dark"))+"\n                            ")])],1)])])])]),t._v(" "),a("h4",[t._v(t._s(t.$t("config.ui.modal_sidebar")))]),t._v(" "),a("hr",{staticClass:"mt-3 mb-4"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.height")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[a("base-radio",{attrs:{value:"normal",inline:"","has-image":""},model:{value:t.formData.modalSidebarHeight,callback:function(e){t.$set(t.formData,"modalSidebarHeight",e)},expression:"formData.modalSidebarHeight"}},[a("img",{attrs:{src:t.sidebarRightHeightNormal}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.normal")))])]),t._v(" "),a("base-radio",{attrs:{value:"full",inline:"","has-image":""},model:{value:t.formData.modalSidebarHeight,callback:function(e){t.$set(t.formData,"modalSidebarHeight",e)},expression:"formData.modalSidebarHeight"}},[a("img",{attrs:{src:t.sidebarRightHeightFull}}),t._v(" "),a("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.full")))])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.modalSidebarBackdrop,callback:function(e){t.$set(t.formData,"modalSidebarBackdrop",e)},expression:"formData.modalSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.modalSidebarBackdrop,callback:function(e){t.$set(t.formData,"modalSidebarBackdrop",e)},expression:"formData.modalSidebarBackdrop"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.shadow")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.modalSidebarShadow,callback:function(e){t.$set(t.formData,"modalSidebarShadow",e)},expression:"formData.modalSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.modalSidebarShadow,callback:function(e){t.$set(t.formData,"modalSidebarShadow",e)},expression:"formData.modalSidebarShadow"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.color")))]),t._v(" "),a("div",{staticClass:"color-list mt-3"},t._l(t.colors,(function(e){return a("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:t.formData.modalSidebarColor,callback:function(e){t.$set(t.formData,"modalSidebarColor",e)},expression:"formData.modalSidebarColor"}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])})),1)]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-5"},[a("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.backdrop_color")))]),t._v(" "),a("div",{staticClass:"d-flex align-items-center mt-3"},[a("base-radio",{attrs:{value:"transparent",inline:""},model:{value:t.formData.modalSidebarBackdropColor,callback:function(e){t.$set(t.formData,"modalSidebarBackdropColor",e)},expression:"formData.modalSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.transparent"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"light",inline:""},model:{value:t.formData.modalSidebarBackdropColor,callback:function(e){t.$set(t.formData,"modalSidebarBackdropColor",e)},expression:"formData.modalSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.light"))+"\n                            ")]),t._v(" "),a("base-radio",{attrs:{value:"dark",inline:""},model:{value:t.formData.modalSidebarBackdropColor,callback:function(e){t.$set(t.formData,"modalSidebarBackdropColor",e)},expression:"formData.modalSidebarBackdropColor"}},[t._v("\n                                "+t._s(t.$t("config.ui.dark"))+"\n                            ")])],1)])])])]),t._v(" "),a("div",{staticClass:"text-right mt-5"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,"14c30fd6",null).exports}}]);