/*! For license information please see index.js.LICENSE.txt */
"use strict";(self.webpackChunkConnect=self.webpackChunkConnect||[]).push([[2729],{46830:(t,e,i)=>{i.d(e,{$c:()=>j,Ig:()=>x,K0:()=>d,S1:()=>p,SU:()=>g,TD:()=>f,Vz:()=>$,Y8:()=>m,Y9:()=>S,_3:()=>T,_D:()=>L,b7:()=>h,bE:()=>l,ij:()=>P,lE:()=>c,lu:()=>F,nh:()=>v,o$:()=>q,v3:()=>_});i(41591);function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(t){var e=t.label,i=t.icon,r=t.tooltip,n=t.design,o=void 0===n?{color:"white",size:"md"}:n;return{label:e,icon:i,tooltip:r,design:o&&o.color||"white",size:o&&o.size||"md"}},l=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return s(s({},u({label:t,icon:e,tooltip:r,design:n})),{},{action:function(t){t.push({name:i,params:o,query:a})}})},c=function(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return s(s({},l(t,e,i,n,o,a,u)),{},{permissions:[r]})},f=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return s(s({},u({label:t,icon:e,tooltip:r,design:n})),{},{action:i})},h=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return f(t,e,(function(t,e){e.$emit(i.event,i.options)}),r,n)},d=function(t,e){return c($t("general.add_new"),"fas fa-plus",t,e)},p=function(t,e){return c($t("general.edit"),"fas fa-edit",t,e)},g=function(){return h("","fas fa-filter",{event:"TOGGLE_FILTER"},$t("general.filter"))},m=function(t,e){return c("","fas fa-cog",t,e,$t("general.config"))},y={storeName:"common",design:"white"},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s(s(s({},y),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:""}}].concat(r(e))})},b=function(t){return{label:t.label,icon:t.icon}},R=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return s(s({},b({label:t,icon:e})),{},{to:{name:i,params:r,query:n}})},E=function(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return s(s({},R(t,e,i,n,o)),{},{permissions:[r]})},w=function(t,e,i){return s(s({},b({label:t,icon:e})),{},{action:i})},O=function(t,e,i){return w(t,e,(function(t,e){e.$emit(i.event,i.options)}))},F=function(t,e){return E($t("general.import"),"fas fa-file-import",t,e)},L=function(t,e){return E($t("general.config"),"fas fa-cog",t,e)},P=function(){return O($t("general.save_draft"),"fas fa-file-upload",{event:"SAVE_DRAFT"})},$=function(){return O($t("general.fetch_saved_draft"),"fas fa-file-download",{event:"FETCH_SAVED_DRAFT"})},q=function(){return O($t("general.clear_saved_draft"),"far fa-minus-square",{event:"CLEAR_SAVED_DRAFT"})},T=function(){return O($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},_=function(){return O($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},x=function(){return O($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},S=function(){return O($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},C={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},k={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},j=s(s(s({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),C),k)},7331:(t,e,i)=>{i.d(e,{Z:()=>p});var r=i(46830),n=i(20629),o=i(34822),s=i(69470);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(){u=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,i){return t[e]=i}}function c(t,e,i,r){var n=e&&e.prototype instanceof d?e:d,o=Object.create(n.prototype),s=new L(r||[]);return o._invoke=function(t,e,i){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return $()}for(i.method=n,i.arg=o;;){var s=i.delegate;if(s){var a=w(s,i);if(a){if(a===h)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===r)throw r="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r="executing";var u=f(t,e,i);if("normal"===u.type){if(r=i.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(r="completed",i.method="throw",i.arg=u.arg)}}}(t,i,s),o}function f(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h={};function d(){}function p(){}function g(){}var m={};l(m,n,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(P([])));v&&v!==e&&i.call(v,n)&&(m=v);var b=g.prototype=d.prototype=Object.create(m);function R(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(n,o,s,u){var l=f(t[n],t,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==a(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(h).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,u)}))}u(l.arg)}var n;this._invoke=function(t,i){function o(){return new e((function(e,n){r(t,i,e,n)}))}return n=n?n.then(o,o):o()}}function w(t,e){var i=t.iterator[e.method];if(void 0===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:$}}function $(){return{value:void 0,done:!0}}return p.prototype=g,l(b,"constructor",g),l(g,"constructor",p),p.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},R(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,i,r,n,o){void 0===o&&(o=Promise);var s=new E(c(e,i,r,n),o);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},R(b),l(b,s,"Generator"),l(b,n,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),F(i),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;F(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:P(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),h}},t}function l(t,e,i,r,n,o,s){try{var a=t[o](s),u=a.value}catch(t){return void i(t)}a.done?e(u):Promise.resolve(u).then(r,n)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(r,n){var o=t.apply(e,i);function s(t){l(o,r,n,s,a,"next",t)}function a(t){l(o,r,n,s,a,"throw",t)}s(void 0)}))}}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const p={data:function(){return{uuid:null,entity:null,fields:[],preRequisite:{},preRequisiteFetchList:[],showFilters:!1,isInitialized:!1,isLoading:!1,isFetching:!1,noMoreData:!1,getInitialDataCalled:!1,gotError:!1,selectedRows:[],formErrors:{},customFilters:{},filtersCastBoolean:[],appendToQuery:{},filtersOptions:{name:""},sortOptions:{hasScroll:!1},columnsOptions:{hasScroll:!1},exportOptions:{},initUrl:"",initSubUrl:null,dataType:null,printOptions:null,headerButtons:null,headerFloaters:null,headerLinks:null,hideHeaderLinks:!1,hideSortOptions:!1,hideColumnOptions:!1,hideFilterButton:!1,feedTable:!1}},computed:h(h(h(h({},(0,n.Se)("common",["entities","feed","filters","columns","others"])),(0,n.Se)("config",["configs","uiConfigs","vars","allowExtraInput"])),(0,n.Se)("user",["hasRole","hasPermission","hasAnyPermission","profile"])),{},{isFiltered:function(){var t=this.$route.query;return"true"===t.filtered||"false"!==t.filtered&&t.filtered},selectAllRows:{get:function(){var t=this;return this.entities&&this.entities.data.every((function(e){var i=e.uuid;return-1!==t.selectedRows.indexOf(i)}))},set:function(t){var e=this.selectedRows;t?this.entities.data.forEach((function(t){-1===e.indexOf(t.uuid)&&e.push(t.uuid)})):this.entities.data.forEach((function(t){var i=e.indexOf(t.uuid);-1!==i&&e.splice(i,1)})),this.selectedRows=e}},showTagsForm:function(){return!!this.selectedRows.length},tableMeta:function(){if(this.uiConfigs.hideSecureContent&&this.filterFn&&_.isFunction(this.filterFn)){var t=this.entities.data.filter(this.filterFn);return t=t.length,h(h({},this.entities.meta),{},{to:this.entities.meta.to-t,total:this.entities.meta.total-t})}return this.entities.meta}}),watch:{$route:function(t,e){this.initSubUrl&&this.$route.params.uuid&&t.params.uuid!==e.params.uuid?(this.doInit(),this.getEntityData()):(this.updatePageMeta(),this.applyPageHeader())},columns:function(t,e){t.fields&&(this.fields=t.fields,this.refreshTable())}},methods:h(h(h({},(0,n.nv)("common",["Init","InitSub","Get","GetList","GetFeed","Destroy","Update","SetMeta","SetFilters","Custom","GetPreRequisite","ResetFilters","SetPageHeader"])),(0,n.nv)("config",["SetUiConfig","SetConfig"])),{},{itemsProvider:function(t){var e=this;this.isLoading=!0;var i=h(h(h({},this.filters),{},{currentPage:this.entities.meta.currentPage,perPage:this.entities.meta.perPage},this.appendToQuery),{},{sortBy:this.filters.sortBy?this.filters.sortBy.snakeCase():this.filters.sortBy});return this.gotError=!1,this.GetList(i).then((function(t){return t.data})).catch((function(t){return e.isLoading=!1,formUtil.handleErrors(t),e.gotError=!0,[]}))},getFeed:_.debounce((function(){var t=this;if(this.feedTable&&!this.noMoreData){this.isFetching=!0;var e=h(h(h({},this.filters),{},{perPage:this.feed.meta.perPage,cursor:this.feed.meta.cursor||!0},this.appendToQuery),{},{sortBy:this.filters.sortBy?this.filters.sortBy.snakeCase():this.filters.sortBy});return this.gotError=!1,this.GetFeed(e).then((function(e){return e.meta&&e.meta.hasMorePages&&e.data&&e.data.length?t.noMoreData=!1:t.noMoreData=!0,t.isInitialized=!0,t.isFetching=!1,t.isLoading=!1,e.data})).catch((function(e){return t.noMoreData=!1,t.isInitialized=!0,t.isFetching=!1,t.isLoading=!1,formUtil.handleErrors(e),t.gotError=!0,[]}))}}),1e3),updatePageMeta:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.$route.query,r={currentPage:parseInt(i.currentPage||1),perPage:parseInt(i.perPage||this.configs.system.perPage),cursor:i.cursor||this.entities.meta.cursor||!0},n=this.filters;i.objForEach((function(t,e){n[e]=t})),this.filtersCastBoolean&&this.filtersCastBoolean.length&&this.filtersCastBoolean.objForEach((function(t){n[t]="true"===n[t]||"false"!==n[t]&&n[t]})),this.customFilters&&this.customFilters.objForEach((function(t,e){n[e]=t})),this.SetMeta(r),this.SetFilters(n),t?this.isInitialized?(this.refreshTable(),this.isInitialized=!0):this.isInitialized=!0:e&&this.refreshTable()},refreshTable:function(){this.$refs&&this.$refs.hasOwnProperty("btable")&&this.$refs.btable&&this.$refs.btable.refresh(),this.getFeed()},refreshTableIfRoute:function(t){this.$route.name===t&&this.refreshTable(),this.getFeed()},toggleFilter:function(){this.showFilters=!this.showFilters},deleteEntity:function(t){var e=this;formUtil.confirmAction().then((function(i){i.value?(e.isLoading=!0,e.Destroy(t).then((function(t){e.isLoading=!1,e.$toasted.success(t.message,e.$toastConfig),e.$nextTick((function(){e.refreshTable(),"function"==typeof e.getInitialData&&e.getInitialDataCalled&&e.getInitialDataCalledAfterDeleting&&e.getInitialData()}))})).catch((function(t){e.isLoading=!1,e.isInitialized=!0,e.formErrors=formUtil.handleErrors(t)}))):(i.dismiss,o.ZP.DismissReason.cancel)}))},fillFilterPreRequisite:function(){var t=this;this.isFiltered&&this.filters&&this.preRequisiteFetchList&&this.preRequisiteFetchList.length&&this.preRequisiteFetchList.forEach((function(e){e.filterKey&&e.preRequisiteKey&&e.url&&t.Custom({url:e.url+t.filters[e.filterKey],method:"get"}).then((function(i){i&&t.preRequisite[e.preRequisiteKey].push(i)}))}))},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(i,r){e.preRequisite[r]=t.hasOwnProperty(r)?t[r]:i})),this.isLoading=!1},getInitialData:function(){var t=this;return c(u().mark((function e(){var i,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.getInitialDataCalled=!0,e.prev=2,i=t.$route.query,r={},t.isFiltered&&i&&t.preRequisiteFetchList&&t.preRequisiteFetchList.length&&t.preRequisiteFetchList.forEach((function(t){t.filterKey&&i[t.filterKey]&&(r[t.filterKey]=i[t.filterKey])})),e.next=8,t.GetPreRequisite(h(h({},t.customFilters),r));case 8:return n=e.sent,t.fillPreRequisite(n),t.updatePageMeta(),t.fillFilterPreRequisite(),"function"==typeof t.afterGetInitialData&&t.afterGetInitialData(),e.abrupt("return",n);case 16:throw e.prev=16,e.t0=e.catch(2),t.isLoading=!1,t.formErrors=formUtil.handleErrors(e.t0),e.t0;case 21:case"end":return e.stop()}}),e,null,[[2,16]])})))()},getEntityData:function(t){var e=this;if(this.isLoading=!0,this.initSubUrl&&this.$route.params.uuid)return this.uuid=this.$route.params.uuid,this.Get({uuid:this.uuid}).then((function(i){e.entity=i,i.name&&(e.pageTitle=i.name,e.subTitle=i.name?e.subTitle:"",e.applyPageHeader()),e.doInitSub(),e.updatePageMeta(),e.isLoading=!1,e.afterGetEntityData&&"function"==typeof e.afterGetEntityData&&e.afterGetEntityData(),t&&"function"==typeof t&&t()})).catch((function(t){e.isLoading=!1,formUtil.handleErrors(t),e.$router.back()}));this.isLoading=!1,this.$router.back()},reloadEntityData:function(t){var e=this;if(this.isLoading=!0,this.initSubUrl&&this.$route.params.uuid)return this.uuid=this.$route.params.uuid,this.Get({uuid:this.uuid}).then((function(i){e.entity=i,i.name&&(e.pageTitle=i.name,e.subTitle=i.name?e.subTitle:"",e.applyPageHeader()),e.isLoading=!1,t&&"function"==typeof t&&t()})).catch((function(t){e.isLoading=!1,formUtil.handleErrors(t),e.$router.back()}));this.isLoading=!1,this.$router.back()},applyTags:function(t){var e=this;this.Custom({url:"/tags",method:"post",data:h(h({},t),{},{type:(this.tagType||this.dataType).kebabCase(),uuids:this.selectedRows})}).then((function(t){e.selectedRows=[],e.$toasted.success(t.message,e.$toastConfig),e.refreshAfterTagsApplied&&e.$nextTick((function(){e.refreshTable()})),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.formErrors=formUtil.handleErrors(t)}))},getSortOptionsArray:function(){return this.fields.filter((function(t){return t.sort})).map((function(t){return{label:t.label,sort:t.sort,thClass:t.thClass,tdClass:t.tdClass}}))},getHeaderOptions:function(){var t=[];this.routesRequired&&this.routesRequired.add&&("object"===a(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.add?t.push(r.K0(this.routesRequired.add,this.permissionsRequired.add)):this.permissionsRequired?t.push(r.K0(this.routesRequired.add,this.permissionsRequired)):t.push(r.K0(this.routesRequired.add))),this.hideFilterButton||t.push(r.SU()),this.routesRequired&&this.routesRequired.config&&("object"===a(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.config?t.push(r.Y8(this.routesRequired.config,this.permissionsRequired.config)):this.permissionsRequired?t.push(r.Y8(this.routesRequired.config,this.permissionsRequired)):t.push(r.Y8(this.routesRequired.config))),this.headerButtons&&(t=t.concat(this.headerButtons));this.headerFloaters&&(headerFloaters=headerFloaters.concat(this.headerFloaters));var e=[];return this.routesRequired&&this.routesRequired.import&&("object"===a(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.import?e.push(r.lu(this.routesRequired.import,this.permissionsRequired.import)):this.permissionsRequired&&e.push(r.lu(this.routesRequired.import,this.permissionsRequired))),this.routesRequired&&this.routesRequired.config&&("object"===a(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.config?e.push(r._D(this.routesRequired.config,this.permissionsRequired.config)):this.permissionsRequired&&e.push(r._D(this.routesRequired.config,this.permissionsRequired))),e.push(r._3()),e.push(r.v3()),e.push(r.Y9()),e.push(r.Ig()),this.headerLinks&&(e=e.concat(this.headerLinks)),{hideLinks:this.hideHeaderLinks||!1,buttons:t,floaters:[],sort:!this.hideSortOptions&&r.nh(this.sortOptions||{},this.getSortOptionsArray()),links:e,columns:!this.hideColumnOptions&&this.columnsOptions,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){var t=h({},r.$c);return this.routesRequired&&this.routesRequired.add&&(t.key_a=this.routesRequired.add),t},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetPageHeader(t),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return c(u().mark((function r(){var n,o,s,a,l,c,f,h,d,p;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.isLoading=!0,r.next=3,i.e(419).then(i.bind(i,96290));case 3:if(n=r.sent,o=function(t,e){var i,r=e.split(".");return r&&r.length?r.forEach((function(e,r){i=i?i[e]:0===r?t[e]:null})):i=t[e],i},a=e.exportOptions||{},l=e.exportPdfFields||e.fields.filter((function(t){return(t.label||t.headerTitle)&&!t.cantExport})),e.uiConfigs.hideSecureContent&&(c=new RegExp("secure-content","igm"),l=l.filter((function(t){return!c.test(t.thClass)&&!c.test(t.tdClass)}))),f=[],!1,h="",d=moment().unix(),e.$route.meta.title&&(h=e.$route.meta.trans?$t(e.$route.meta.trans,{attribute:$t(e.$route.meta.title)}):$t(e.$route.meta.title),d=h.toLowerCase().replace(/\s+/g,"-")+"-"+d),"xls-csv"===t.type&&(t.type="csv",!0),"pdf"!==t.type&&"print"!==t.type){r.next=23;break}return r.next=17,i.e(1750).then(i.bind(i,42102));case 17:s=r.sent,p=l.map((function(t){return{header:t.label||t.headerTitle,dataKey:t.key}})),f=e.entities.data.map((function(t){var e={};return l.forEach((function(i){var r=i.transformer,s=o(t,i.key);r&&(s||!1===s)&&(r=_.isArray(r)?r:[r]).forEach((function(e){var r=_.isFunction(e)?e:n[e];s=i.transformerOpts?r(s,i.transformerOpts):r(s,t)})),e[i.key]=s||""})),e})),"pdf"===t.type?s.downloadPdfFile(d,h,p,f,a):s.printTable(h,p,f,a),r.next=28;break;case 23:return r.next=25,i.e(8581).then(i.bind(i,53792));case 25:s=r.sent,f=e.entities.data.map((function(t){var e={};return l.forEach((function(i){var r=i.transformer,s=o(t,i.key);r&&(s||!1===s)&&(r=_.isArray(r)?r:[r]).forEach((function(e){var r=_.isFunction(e)?e:n[e];s=i.transformerOpts?r(s,i.transformerOpts):r(s,t)})),e[i.label]=s||""})),e})),s.downloadFile(f,t.type,d);case 28:e.isLoading=!1;case 29:case"end":return r.stop()}}),r)})))()},doInitSub:function(){this.uuid=this.$route.params.uuid,this.uuid||(this.isLoading=!1,this.$router.back()),this.InitSub({url:this.uuid+"/"+this.initSubUrl,filters:this.filtersOptions,columns:this.fields})},doInit:function(){this.Init({url:this.initUrl,filters:this.filtersOptions,columns:this.fields}),this.applyPageHeader()},clearFilters:function(){var t=!1;this.filtersOptions.objForEach((function(e,i){""!==e&&(t=!0)})),t?(this.ResetFilters(),this.SetFilters(h(h({},this.filters),this.filtersOptions))):this.ResetFilters(),this.$route.query&&this.$route.query.filtered&&this.$router.push({path:this.$route.path}).catch((function(t){})),this.afterClearFilters&&_.isFunction(this.afterClearFilters)&&this.afterClearFilters()},rowClickHandler:function(t,e){if(t.action&&"function"==typeof t.action)t.action(t,e);else if(t.route)this.$router.push({name:t.route,params:{uuid:e.uuid}});else if(t.getRoute&&_.isFunction(t.getRoute)){var i=t.getRoute(e);i&&this.$router.push({name:i,params:{uuid:e.uuid}})}},getBalanceClass:function(t){var e=t>0?"text-success":"text-danger";return e=t&&0!=Number(t)?e:"text-muted",e+=" font-weight-600"},getPopoverContent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"list",i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"name",n=arguments.length>4?arguments[4]:void 0;if("list"===e&&i&&r){var o=this.getDetailsList(t[i],r);return o="<ul>".concat(o.join(),"</ul>")}if("custom"===e&&n&&"function"==typeof n)return n(t)},getDetailsList:function(t,e){return t.map((function(t){return"<li>".concat(t[e],"</li>")}))},momentFn:function(t,e,i){return moment(t,e||this.vars.serverDateFormat).format(i||this.vars.defaultDateFormat)}}),mounted:function(){s.Z.$off("REFRESH_TABLE",this.refreshTableIfRoute),s.Z.$on("REFRESH_TABLE",this.refreshTableIfRoute),s.Z.$off("TOGGLE_FILTER",this.toggleFilter),s.Z.$on("TOGGLE_FILTER",this.toggleFilter),s.Z.$off("CLEAR_FILTERS",this.clearFilters),s.Z.$on("CLEAR_FILTERS",this.clearFilters),s.Z.$off("EXPORT",this.export),s.Z.$on("EXPORT",this.export),this.isFiltered&&(this.showFilters=!0),this.doInit()},destroyed:function(){s.Z.$off("REFRESH_TABLE",this.refreshTableIfRoute),s.Z.$off("TOGGLE_FILTER",this.toggleFilter),s.Z.$off("CLEAR_FILTERS",this.clearFilters),s.Z.$off("EXPORT",this.export)}}},20947:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});const r={extends:i(7331).Z,data:function(){return{fields:[{key:"name",label:$t("config.role.props.name"),sort:"name"},{key:"isDefault",label:$t("config.role.props.is_default")},{key:"actions",label:"",cantHide:!0,tdClass:"actions-wrapper"}],permissionsRequired:"access-config",routesRequired:{add:"appConfigRoleAdd"},initUrl:"config/roles",dataType:"role",hideFilterButton:!0}},mounted:function(){this.updatePageMeta()}};const n=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-container",{staticClass:"p-0 flex-grow",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?i("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appConfigRoleAdd","entity-title":"config.role.roles","entities-title":"config.role.roles","entity-description":"config.role.module_description"}},[i("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(e){t.isLoading=e}},scopedSlots:t._u([{key:"cell(isDefault)",fn:function(e){return[e.item.isDefault?i("badge",{attrs:{rounded:"",type:"primary"}},[i("i",{staticClass:"fas fa-check"}),t._v(" "+t._s(t.$t("config.role.props.default")))]):t._e()]}},{key:"cell(actions)",fn:function(e){return[i("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Actions Buttons"}},[e.item.isDefault?t._e():i("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.d500",modifiers:{hover:!0,d500:!0}}],attrs:{type:"button",size:"sm",design:"dark",title:t.$t("global.delete",{attribute:t.$t("config.role.role")})},on:{click:function(i){return i.stopPropagation(),t.deleteEntity(e.item)}}},[i("i",{staticClass:"fas fa-trash"})])],1)]}}],null,!1,2016649260)})],1):t._e()],1)}),[],!1,null,null,null).exports}}]);