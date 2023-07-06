"use strict";(self.webpackChunkConnect=self.webpackChunkConnect||[]).push([[2144],{77673:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(20629),r=t(2599),i=t(77817),a=t(32544);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const p={components:{Box:r.Z,GuestHeader:i.Z,GuestFooter:a.Z},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,preRequisite:{},isLoading:!0,icons:{facebook:"fab fa-facebook-f",twitter:"fab fa-twitter",github:"fab fa-github",google:"fab fa-google"},btns:{facebook:"btn-facebook",twitter:"btn-twitter",github:"btn-github",google:"btn-google-plus"}}},computed:c(c(c({},(0,o.Se)("config",["configs","vars"])),(0,o.Se)("user",["twoFactorSet","hasRole"])),{},{selectedLocale:function(){var e=getQueryStringByParam("locale");return e||this.configs.system.locale},showLocaleSwitcher:function(){return this.configs.system.enableMultilingual&&this.configs.system.locales&&this.configs.system.locales.length>1}}),methods:c(c(c({},(0,o.nv)("config",["GetConfig"])),(0,o.nv)("user",["Register","SetCSRF","Logout","Login","LoginUsingOtp","ResetTwoFactorSet","RequestReset","ValidateResetPassword","ResetPassword","CheckTwoFactorCode"])),{},{withQuery:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.$route.query,r="";return e.hasOwnProperty("query")||(e.query={}),e.query.locale=o&&o.locale?o.locale:void 0,o&&o.locale&&(r="".concat(r,"?locale=").concat(o.locale)),!o||!o.ref||t&&t.hasOwnProperty("removeRef")&&t.removeRef||(e.query.ref=o.ref,r="?".concat(r,"&ref=").concat(o.ref),r="?".concat(r,"&ref=").concat(o.ref)),r="".concat(e.name).concat(r),n?r:e},switchLocale:function(e){var n=window.location.href;window.location.href=updateQueryStringParam(n,"locale",e.locale)}}),mounted:function(){this.initialFormData=_.cloneDeep(this.formData),this.isLoading=!1},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite}}},86338:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(94015),r=t.n(o),i=t(23645),a=t.n(i)()(r());a.push([e.id,".login-with-icons .btn[data-v-72146794]{align-items:center;display:inline-flex;font-size:.9rem;height:30px;justify-content:center;width:30px}","",{version:3,sources:["webpack://./resources/js/views/auth/login.vue"],names:[],mappings:"AAqKI,wCAII,kBAAA,CADA,mBAAA,CAGA,eAAA,CAJA,WAAA,CAGA,sBAAA,CAJA,UA/JR",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.login-with-icons {\n    .btn {\n        width: 30px;\n        height: 30px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 0.9rem;\n    }\n}\n\n"],sourceRoot:""}]);const s=a},97535:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(94015),r=t.n(o),i=t(23645),a=t.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);"]),a.push([e.id,".centered-box[data-v-9e2b7368]{display:flex;flex-direction:column;justify-content:center;margin:1.5rem auto 0;width:90vw}.centered-box>.card[data-v-9e2b7368]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)}.powered-logo[data-v-9e2b7368]{align-items:center;display:flex;font-size:.8rem;justify-content:center}.powered-logo span[data-v-9e2b7368]{line-height:10px}.powered-logo img[data-v-9e2b7368]{margin-left:8px;width:80px}@media (min-width:768px){.centered-box[data-v-9e2b7368]{width:400px}.centered-box.width-sm[data-v-9e2b7368]{width:350px}.centered-box.width-md[data-v-9e2b7368]{width:450px}.centered-box.width-xl[data-v-9e2b7368]{width:500px}.centered-box.width-xxl[data-v-9e2b7368]{width:550px}.centered-box.width-xxxl[data-v-9e2b7368]{width:600px}.centered-box.parent-design-boxed-left[data-v-9e2b7368],.centered-box.parent-design-boxed-right[data-v-9e2b7368]{flex-grow:1;margin-top:0}.centered-box.parent-design-boxed-left>.card[data-v-9e2b7368],.centered-box.parent-design-boxed-right>.card[data-v-9e2b7368]{box-shadow:none}}","",{version:3,sources:["webpack://./resources/js/views/auth/partials/box/centered-box.vue","webpack://./resources/js/core/assets/scss/libraries/bootstrap/scss/mixins/_breakpoints.scss"],names:[],mappings:"AAgDA,+BACI,YAAA,CACA,qBAAA,CAIA,sBAAA,CADA,oBAAA,CAFA,UA3CJ,CAgDI,qCACI,uCA9CR,CAkDA,+BAGI,kBAAA,CAFA,YAAA,CAGA,eAAA,CAFA,sBA7CJ,CAiDI,oCACI,gBA/CR,CAkDI,mCAEI,eAAA,CADA,UA/CR,CCmCI,yBDmBA,+BACI,WAlDN,CAoDM,wCACI,WAlDV,CAqDM,wCACI,WAnDV,CAsDM,wCACI,WApDV,CAuDM,yCACI,WArDV,CAwDM,0CACI,WAtDV,CAyDM,iHAEI,WAAA,CADA,YAtDV,CAyDU,6HACI,eAvDd,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '~@js/core/assets/scss/imports.scss';\n\n.centered-box {\n    display: flex;\n    flex-direction: column;\n    width: 90vw;\n    margin: 0px auto;\n    margin-top: 1.5rem;\n    justify-content: center;\n\n    > .card {\n        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);\n    }\n}\n\n.powered-logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8rem;\n\n    span {\n        line-height: 10px;\n    }\n\n    img {\n        width: 80px;\n        margin-left: 8px;\n    }\n}\n\n\n@include media-breakpoint-up(md) {\n    .centered-box {\n        width: 400px;\n\n        &.width-sm {\n            width: 350px;\n        }\n\n        &.width-md {\n            width: 450px;\n        }\n\n        &.width-xl {\n            width: 500px;\n        }\n\n        &.width-xxl {\n            width: 550px;\n        }\n\n        &.width-xxxl {\n            width: 600px;\n        }\n\n        &.parent-design-boxed-left, &.parent-design-boxed-right {\n            margin-top: 0;\n            flex-grow: 1;\n\n            > .card {\n                box-shadow: none;\n            }\n        }\n    }\n}\n\n",'// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    ""  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    "-sm"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint\'s minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n'],sourceRoot:""}]);const s=a},30825:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(94015),r=t.n(o),i=t(23645),a=t.n(i)()(r());a.push([e.id,".guest-footer p[data-v-5b42e22c]{color:#fff;opacity:.3}.guest-footer.parent-color-light p[data-v-5b42e22c]{color:#000}.guest-footer.parent-color-dark p[data-v-5b42e22c]{color:#fff}.guest-footer.parent-design-boxed-left p[data-v-5b42e22c],.guest-footer.parent-design-boxed-right p[data-v-5b42e22c]{color:#000}","",{version:3,sources:["webpack://./resources/js/views/layouts/partials/guest-footer.vue"],names:[],mappings:"AAmBI,iCACI,UAAA,CACA,UAlBR,CAqBI,oDACI,UAnBR,CAsBI,mDACI,UApBR,CAuBI,qHACI,UArBR",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.guest-footer {\n    p {\n        color: #ffffff;\n        opacity: 0.3;\n    }\n\n    &.parent-color-light p{\n        color: #000000;\n    }\n\n    &.parent-color-dark p{\n        color: #ffffff;\n    }\n\n    &.parent-design-boxed-left p, &.parent-design-boxed-right p{\n        color: #000000;\n    }\n}\n"],sourceRoot:""}]);const s=a},65034:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(20629);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const s={props:{tag:{type:String,default:"a"},place:{type:String,default:"normal"},size:{type:String,default:"normal"},appLogo:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},link:{type:String,default:""},assets:{type:Object}},data:function(){return{appLogoText:window.kmenv.name}},computed:i(i({},(0,o.Se)("config",["configs","uiConfigs"])),{},{computedUrl:function(){return"a"===this.tag&&(""!==this.link?this.link:"/")},orgLogo:function(){if(this.appLogo||!this.configs.assets&&!this.assets)return"navbar"===this.place||"sidebar"===this.place||"dark"===this.place?"/images/logo-light.png":"/images/logo.png";var e=this.assets&&this.assets.logo?this.assets.logo:this.configs.assets.logo?this.configs.assets.logo:"/images/logo.png";return(this.assets&&this.assets.logoLight||this.configs.assets.logoLight)&&("navbar"===this.place&&this.uiConfigs.topNavbarLogoLight||"sidebar"===this.place&&this.uiConfigs.leftSidebarLogoLight||"dark"===this.place)&&(e=this.assets&&this.assets.logoLight?this.assets.logoLight:this.configs.assets.logoLight),e},orgIcon:function(){return this.configs.assets||this.assets?this.assets&&this.assets.icon?this.assets.icon:this.configs.assets.icon?this.configs.assets.icon:"/images/icon.png":"/images/icon.png"},appTitle:function(){return this.configs.basic?this.configs.basic.appName:window.kmenv.name}})};const c=(0,t(51900).Z)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.tag,{tag:"component",class:["logo",e.place+"-logo",e.size+"-logo",e.orgLogo?"org-logo":"app-logo",e.inline?"inline-logo":""],attrs:{href:e.computedUrl}},[e.orgLogo?t("img",{staticClass:"logo-icon",attrs:{src:e.orgLogo,alt:e.appTitle}}):e._e(),e._v(" "),e.orgIcon?t("img",{staticClass:"logo-icon-mobile",attrs:{src:e.orgIcon,alt:e.appTitle}}):[t("span",{staticClass:"logo-text",attrs:{title:e.appTitle}},[e._v(e._s(e.appLogoText))])]],2)}),[],!1,null,null,null).exports},24933:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const a={extends:t(77673).Z,data:function(){return{formData:{email:"",password:""}}},methods:{submit:function(){var e=this;this.isLoading=!0;var n=this.$route.query;this.$gaEvent("engagement","login","Normal"),this.Login(this.formData).then((function(t){if(e.$toasted.success(t.message,e.$toastConfig),e.$gaEvent("activity","loggedin","Normal"),e.configs.auth.twoFactorSecurity&&e.twoFactorSet)e.$router.push({name:"authSecurity",query:n}),e.isLoading=!1;else{var o=t.reload?{name:"appDashboard",query:{reload:1}}:{name:"appDashboard"};n&&n.ref&&e.$router.resolve(n.ref)&&(o=e.$router.resolve(n.ref).route),e.hasRole("admin")&&e.configs.system&&e.configs.system.setupWizard&&(o={name:"setup"}),o=r(r({},o),{},{query:{locale:void 0}}),e.ResetTwoFactorSet().then((function(){e.$router.push(o)})).catch((function(n){e.isLoading=!1,e.formErrors=formUtil.handleErrors(n)}))}})).catch((function(n){e.isLoading=!1,e.formErrors=formUtil.handleErrors(n)}))},loginAs:function(e,n){this.formData.email=e+"@"+n+".com",this.formData.password="password",this.submit()}},mounted:function(){this.SetCSRF();var e=this.$route.query&&this.$route.query.cause?this.$route.query.cause:null;e&&"csrf_token_expired"===e&&(this.$toasted.error($t("general.csrf_token_expired"),this.$toastConfig.error),this.$router.push(this.withQuery({name:this.$route.name,replace:!0})))}};var s=t(93379),c=t.n(s),l=t(86338),p={insert:"head",singleton:!1};c()(l.Z,p);l.Z.locals;const u=(0,t(51900).Z)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"guest-page"},[t("box",[t("animated-loader",{attrs:{"is-loading":e.isLoading,"loader-color":e.vars.loaderColor}}),e._v(" "),t("guest-header",[t("h5",[e._v(e._s(e.$t("auth.login.page_title")))])]),e._v(" "),t("section",{attrs:{role:"main"}},[t("form",{on:{submit:function(n){return n.preventDefault(),e.submit.apply(null,arguments)}}},[t("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:e.$t("auth.login.props.email_username"),type:"text","addon-left-icon":"fas fa-envelope",error:e.formErrors.email},on:{"update:error":function(n){return e.$set(e.formErrors,"email",n)}},model:{value:e.formData.email,callback:function(n){e.$set(e.formData,"email",n)},expression:"formData.email"}}),e._v(" "),t("base-input",{staticClass:"mb-3",attrs:{label:e.$t("auth.login.props.password"),type:"password","addon-left-icon":"fas fa-key",error:e.formErrors.password,autocomplete:"current-password"},on:{"update:error":function(n){return e.$set(e.formErrors,"password",n)}},model:{value:e.formData.password,callback:function(n){e.$set(e.formData,"password",n)},expression:"formData.password"}}),e._v(" "),t("div",{staticClass:"text-center mt-4"},[t("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[e._v(e._s(e.$t("auth.login.login")))])],1),e._v(" "),e.configs&&e.configs.auth?[e.configs.auth.mobileOtpLogin||e.configs.auth.emailOtpLogin||e.configs.auth.socialLogin||e.configs.auth.facebook||e.configs.auth.twitter||e.configs.auth.github||e.configs.auth.google||e.showLocaleSwitcher?[t("div",{staticClass:"row mt-4"},[e.showLocaleSwitcher?t("div",{staticClass:"col-3 text-left locale-switcher"},[t("base-dropdown",{attrs:{tag:"div",direction:"up","menu-classes":"show-dropdown-up"}},[t("base-button",{staticClass:"text-uppercase",attrs:{slot:"title",type:"button",design:"light",block:"","data-toggle":"dropdown",role:"button",size:"sm"},slot:"title"},[t("span",{staticClass:"nav-link-inner--text"},[e._v(e._s(e.selectedLocale))]),e._v(" "),t("i",{staticClass:"fas fa-chevron-up m-l-5"})]),e._v(" "),e._l(e.configs.system.locales,(function(n){return t("button",{key:n.uuid,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return e.switchLocale(n)}}},[e._v(e._s(n.name)+" ("+e._s(n.locale)+")")])}))],2)],1):e._e(),e._v(" "),t("div",{class:[e.showLocaleSwitcher?"col-9":"col-12","text-right login-with-icons"]},[e.configs.auth.emailOtpLogin?t("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-gmail",attrs:{to:e.withQuery({name:"login-email-otp"}),title:e.$t("auth.login.login_using_email_otp")}},[t("i",{staticClass:"fas fa-envelope-open-text"})]):e._e(),e._v(" "),e.configs.auth.socialLogin&&e.configs.auth.socialLoginProviders&&e.configs.auth.socialLoginProviders.length?e._l(e.configs.auth.socialLoginProviders,(function(n){return t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:n,class:"btn btn-sm "+e.btns[n],attrs:{href:"/auth/login/"+n,title:e.$t("auth.login.login_with",{attribute:n})}},[t("i",{class:e.icons[n]})])})):e._e()],2)]),e._v(" "),t("div",{staticClass:"text-center"},[t("hr",{staticClass:"my-4"})])]:e._e(),e._v(" "),e.configs.auth.resetPassword||e.configs.auth.registration?t("div",{staticClass:"row mt-4"},[e.configs.auth.resetPassword?t("div",{class:["col-12 text-center",{"col-md-6 text-md-left":e.configs.auth.registration}]},[t("router-link",{staticClass:"text-primary m-l-5",attrs:{to:e.withQuery({name:"password"})}},[t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.$t("auth.password.forgot_password")))])])],1):e._e(),e._v(" "),e.configs.auth.registration?t("div",{class:["col-12 text-center",{"col-md-6 text-md-right":e.configs.auth.resetPassword}]},[t("router-link",{staticClass:"text-primary m-l-5",attrs:{to:e.withQuery({name:"register"})}},[t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.$t("auth.register.register_here")))])])],1):e._e()]):e._e()]:e._e()],2)])],1),e._v(" "),e.configs.system?t("guest-footer",{attrs:{"footer-credit":e.configs.system.footerCredit,version:e.configs.system.version}}):e._e()],1)}),[],!1,null,"72146794",null).exports},2599:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(65034),r=t(20629);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const c={props:{width:{type:String,default:"normal"}},components:{AppLogo:o.Z},data:function(){return{}},computed:a(a({},(0,r.Se)("config",["configs"])),{},{orgLogo:function(){return this.configs.image&&this.configs.image.logo?this.configs.image.logo:null}})};var l=t(93379),p=t.n(l),u=t(97535),g={insert:"head",singleton:!1};p()(u.Z,g);u.Z.locals;var f=t(51900);const d=(0,f.Z)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:["centered-box justify-content-center","width-"+e.width,e.configs.auth&&e.configs.auth.guestLayoutDesign?"parent-design-"+e.configs.auth.guestLayoutDesign:"",e.configs.auth&&e.configs.auth.guestLayoutColor?"parent-color-"+e.configs.auth.guestLayoutColor:""]},[t("card",{staticClass:"border-0",attrs:{type:"white","header-classes":"bg-white","body-classes":"px-lg-4 py-lg-4"}},[e._t("default"),e._v(" "),this.orgLogo?t("div",{staticClass:"powered-logo text-center"},[t("span",{staticClass:"text-muted mr-1"},[e._v(e._s(e.$t("general.powered_by"))+" ")]),e._v(" "),t("app-logo",{attrs:{"app-logo":"",inline:""}})],1):e._e()],2)],1)}),[],!1,null,"9e2b7368",null).exports,m={props:{name:{type:String,default:"CenteredBox"},width:{type:String,default:"normal"}},components:{CenteredBox:d}};const b=(0,f.Z)(m,(function(){var e=this,n=e.$createElement;return(e._self._c||n)(e.name,{tag:"component",attrs:{width:e.width}},[e._t("default")],2)}),[],!1,null,"ebb852f4",null).exports},32544:(e,n,t)=>{t.d(n,{Z:()=>p});function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const i={props:["footerCredit","version"],computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},(0,t(20629).Se)("config",["configs"]))};var a=t(93379),s=t.n(a),c=t(30825),l={insert:"head",singleton:!1};s()(c.Z,l);c.Z.locals;const p=(0,t(51900).Z)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{class:["guest-footer mt-2",e.configs.auth&&e.configs.auth.guestLayoutDesign?"parent-design-"+e.configs.auth.guestLayoutDesign:"",e.configs.auth&&e.configs.auth.guestLayoutColor?"parent-color-"+e.configs.auth.guestLayoutColor:""]},[t("p",{staticClass:"text-center mb-0 py-3"},[e._v(e._s(e.footerCredit)+" "+e._s(e.$t("product.version"))+" "+e._s(e.version))])])}),[],!1,null,"5b42e22c",null).exports},77817:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(65034),r=t(20629);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const s={components:{AppLogo:o.Z},data:function(){return{}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},(0,r.Se)("config",["configs"]))};const c=(0,t(51900).Z)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"guest-header text-center mb-4"},[t("div",{staticClass:"logo-wrapper text-center mb-4 pb-2"},[t("app-logo")],1),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports}}]);