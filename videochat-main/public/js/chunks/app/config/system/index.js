/*! For license information please see index.js.LICENSE.txt */
"use strict";(self.webpackChunkConnect=self.webpackChunkConnect||[]).push([[4292],{78248:(t,e,r)=>{r.d(e,{Z:()=>u});var o=r(20629),n=r(17107);r(10013);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var n=e&&e.prototype instanceof d?e:d,a=Object.create(n.prototype),i=new $(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return L()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=u(t,e,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var m={};function d(){}function p(){}function h(){}var v={};c(v,n,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(k([])));y&&y!==e&&r.call(y,n)&&(v=y);var g=h.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function o(n,i,s,l){var c=u(t[n],t,i);if("throw"!==c.type){var f=c.arg,m=f.value;return m&&"object"==a(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,s,l)}),(function(t){o("throw",t,s,l)})):e.resolve(m).then((function(t){f.value=t,s(f)}),(function(t){return o("throw",t,s,l)}))}l(c.arg)}var n;this._invoke=function(t,r){function a(){return new e((function(e,n){o(t,r,e,n)}))}return n=n?n.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(D.prototype),c(D.prototype,s,(function(){return this})),t.AsyncIterator=D,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new D(f(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,l,"Generator"),c(g,n,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=k,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function s(t,e,r,o,n,a,i){try{var s=t[a](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(o,n)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,useUserPreference:!1,dataType:null,configType:""}},computed:c(c({},(0,o.Se)("config",{configsWithPreference:"configs",configs:"configsOriginal",vars:"vars",allowExtraInput:"allowExtraInput"})),{},{formHasErrors:function(){var t=!1;return this.formErrors.objForEach((function(e){t=""!==e||t})),t}}),methods:c(c(c(c(c({},(0,o.nv)("config",["GetConfig"])),(0,o.nv)("user",["GetUser"])),(0,o.nv)("navigation",["Generate"])),(0,o.nv)("common",["Custom"])),{},{findActualValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[r]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.hasOwnProperty("type")&&(this.formData.type=this.formData.type.snakeCase());var r=!0===e||this.useUserPreference?n.sS:"module"===this.configType?n.DE:n.Vx;if(this.beforeSubmit&&"function"==typeof this.beforeSubmit){var o=this.beforeSubmit();if(!1===o)return void(this.isLoading=!1)}r(this.formData).then((function(r){(!0===e||t.useUserPreference?t.GetUser:t.GetConfig)().then((function(){t.$toasted.success(r.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitSuccess&&t.afterSubmitSuccess()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(r,o){e.preRequisite[o]=t.hasOwnProperty(o)?t[o]:r})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0;var e=this.useUserPreference?this.configsWithPreference:this.configs;this.formData.type&&e[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,e[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(r){t.formData=formUtil.assignValues(t.formData,e[r])})),this.formData.override&&this.formData.objForEach((function(r,o){r&&_.isObject(r)?t.formData[o]=formUtil.assignValues(t.formData[o],e[o]):t.formData[o]=e[o]?e[o]:r})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,r=this;return(e=i().mark((function e(){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.isLoading=!0,e.prev=1,e.next=4,n.B_(Object.keys(r.preRequisite).join(","));case 4:return o=e.sent,r.fillPreRequisite(o),t&&r.$nextTick((function(){t()})),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(1),r.isLoading=!1,r.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(t){s(a,o,n,i,l,"next",t)}function l(t){s(a,o,n,i,l,"throw",t)}i(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,r){this.unsavedCheck(r)}}},57701:(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});var o=r(78248),n=r(86908);const a={extends:o.Z,components:{CollapseTransition:n.A1},data:function(){return{now:moment(),formData:{dateFormat:"",timeFormat:"",timezone:"",fyStart:"",perPage:10,locale:"",currency:"",footerCredit:"",https:!1,errorDisplay:!1,printPreview:!0,frontendWebsite:!1,ipFilter:!1,emailLog:!1,emailTemplate:!1,todo:!1,enableAthsAlert:!1,backup:!1,dateTimeAlwaysEng:!1,maintenanceMode:!1,allowDateInput:!1,enableTour:!1,enableMultilingual:!0,enableMes:!1,allowedFileExtensions:"",maintenanceModeMessage:"",type:"system"},preRequisite:{dateFormats:[],timeFormats:[],timezones:[],locales:[],currencies:[],paginations:[]}}},methods:{regenerateNavigation:function(){var t=this;this.Generate().then((function(){t.isLoading=!1}))},beforeSubmit:function(){if(this.formData.allowedFileExtensions=this.formData.allowedFileExtensions.replace(/\s+|\r?\n|\r/gim,""),!this.formData.allowedFileExtensions)return this.$toasted.error(this.$t("global.required",{attribute:$t("config.system.allowed_file_extensions")}),this.$toastConfig.error),!1},afterSubmit:function(){this.regenerateNavigation()}},mounted:function(){this.getInitialData()}};const i=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_todo")}},[r("base-switch",{model:{value:t.formData.todo,callback:function(e){t.$set(t.formData,"todo",e)},expression:"formData.todo"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_maintenance_mode")}},[r("base-switch",{model:{value:t.formData.maintenanceMode,callback:function(e){t.$set(t.formData,"maintenanceMode",e)},expression:"formData.maintenanceMode"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_aths_alert")}},[r("base-switch",{model:{value:t.formData.enableAthsAlert,callback:function(e){t.$set(t.formData,"enableAthsAlert",e)},expression:"formData.enableAthsAlert"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.allow_date_input")}},[r("base-switch",{model:{value:t.formData.allowDateInput,callback:function(e){t.$set(t.formData,"allowDateInput",e)},expression:"formData.allowDateInput"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_tour")}},[r("base-switch",{model:{value:t.formData.enableTour,callback:function(e){t.$set(t.formData,"enableTour",e)},expression:"formData.enableTour"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_print_preview")}},[r("base-switch",{model:{value:t.formData.printPreview,callback:function(e){t.$set(t.formData,"printPreview",e)},expression:"formData.printPreview"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_multilingual")}},[r("base-switch",{model:{value:t.formData.enableMultilingual,callback:function(e){t.$set(t.formData,"enableMultilingual",e)},expression:"formData.enableMultilingual"}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3 secure-content"},[r("switch-wrapper",{attrs:{label:t.$t("config.system.enable_mes")}},[r("base-switch",{model:{value:t.formData.enableMes,callback:function(e){t.$set(t.formData,"enableMes",e)},expression:"formData.enableMes"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.dateFormats,label:t.$t("config.system.date_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function(e){var o=e.option;return[t._v(t._s(t._f("moment")(t.now,o.uuid))+" "),r("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}},{key:"listOption",fn:function(e){var o=e.option;return[t._v("\n                            "+t._s(t._f("moment")(t.now,o.uuid))+" "),r("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}}]),model:{value:t.formData.dateFormat,callback:function(e){t.$set(t.formData,"dateFormat",e)},expression:"formData.dateFormat"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.timeFormats,label:t.$t("config.system.time_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function(e){var o=e.option;return[t._v(t._s(t._f("moment")(t.now,o.uuid))+" "),r("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}},{key:"listOption",fn:function(e){var o=e.option;return[t._v("\n                            "+t._s(t._f("moment")(t.now,o.uuid))+" "),r("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}}]),model:{value:t.formData.timeFormat,callback:function(e){t.$set(t.formData,"timeFormat",e)},expression:"formData.timeFormat"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.timezones,label:t.$t("config.system.timezone"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.timezone,callback:function(e){t.$set(t.formData,"timezone",e)},expression:"formData.timezone"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.locales,label:t.$t("config.system.locale"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.locale,callback:function(e){t.$set(t.formData,"locale",e)},expression:"formData.locale"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.currencies,"track-by":"name","show-by":"description",label:t.$t("config.system.currency"),"allow-empty":!1,disabled:t.isLoading,required:""},model:{value:t.formData.currency,callback:function(e){t.$set(t.formData,"currency",e)},expression:"formData.currency"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.paginations,label:t.$t("config.system.page_length"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function(e){var r=e.option;return[t._v(t._s(t.$t("config.system.per_page",{attribute:r.name})))]}},{key:"listOption",fn:function(e){var r=e.option;return[t._v("\n                            "+t._s(t.$t("config.system.per_page",{attribute:r.name}))+"\n                        ")]}}]),model:{value:t.formData.perPage,callback:function(e){t.$set(t.formData,"perPage",e)},expression:"formData.perPage"}})],1),t._v(" "),r("collapse-transition",[r("div",{staticClass:"col-12"},[r("base-input",{staticClass:"mb-5",attrs:{label:t.$t("config.system.footer_credit"),type:"text",error:t.formErrors.footerCredit},on:{"update:error":function(e){return t.$set(t.formErrors,"footerCredit",e)}},model:{value:t.formData.footerCredit,callback:function(e){t.$set(t.formData,"footerCredit",e)},expression:"formData.footerCredit"}})],1)]),t._v(" "),r("collapse-transition",[r("div",{staticClass:"col-12"},[r("base-textarea",{staticClass:"mb-4",attrs:{rows:"4",label:t.$t("config.system.allowed_file_extensions"),error:t.formErrors.allowedFileExtensions},on:{"update:error":function(e){return t.$set(t.formErrors,"allowedFileExtensions",e)}},model:{value:t.formData.allowedFileExtensions,callback:function(e){t.$set(t.formData,"allowedFileExtensions",e)},expression:"formData.allowedFileExtensions"}})],1)]),t._v(" "),r("collapse-transition",[t.formData.maintenanceMode?r("div",{staticClass:"col-12"},[r("base-textarea",{staticClass:"mb-4",attrs:{rows:"4",label:t.$t("config.system.maintenance_mode_message"),error:t.formErrors.maintenanceModeMessage},on:{"update:error":function(e){return t.$set(t.formErrors,"maintenanceModeMessage",e)}},model:{value:t.formData.maintenanceModeMessage,callback:function(e){t.$set(t.formData,"maintenanceModeMessage",e)},expression:"formData.maintenanceModeMessage"}})],1):t._e()])],1),t._v(" "),r("div",{staticClass:"text-right mt-5"},[r("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),r("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,null,null).exports}}]);