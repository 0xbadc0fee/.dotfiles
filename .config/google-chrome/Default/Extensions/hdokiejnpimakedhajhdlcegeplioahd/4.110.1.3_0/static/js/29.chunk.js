(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[29],{1249:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(910)),a=n(1631),s=n(1095),i=n(903),l=n.n(i),c=n(16),u=n(6),d=n(28),p={id:0,type:"AddYourFirstPassword",visible:!0,completed:null,seenAt:null,color:a.a.GREY},f={hideSkillDetailsDialog:jest.fn(),closeShowAllSkills:jest.fn(),openAddItemDialog:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}}),jest.mock("../../services/lp-vault",function(){return{LPVault:{extensionInstalled:function(){return!0}}}}),it("should render render the AddYourFirstPassword component without crashing",function(){var e=l()([])({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:c.a.Password,username:"test@test.com",record:{}}},user:{type:d.a.PREMIUM_TRIAL},secondaryOnboarding:{allSkillsModalOpened:!0}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(s.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1),t.unmount()}),it("should render the SiteComponent when extension is installed in AddYourFirstPassword component without crashing",function(){var e=l()([]),t=top.bg;top.bg={};var n=e({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:c.a.Password,username:"test@test.com",record:{}}},user:{type:d.a.PREMIUM_TRIAL},secondaryOnboarding:{allSkillsModalOpened:!0}}),a=Object(r.mount)(Object(o.jsx)(u.a,{store:n},Object(o.jsx)(s.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));expect(a.find(".site-name")).toHaveLength(6),a.unmount(),top.bg=t}),it("should render the AddYourFirstPassword component and click the Add Item button",function(){var e=l()([]),t={recordType:c.a.Password,username:"test@test.com",record:{}};top.bg=void 0;var n=e({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:t},user:{type:d.a.PREMIUM_TRIAL},secondaryOnboarding:{allSkillsModalOpened:!0}}),a=Object(r.mount)(Object(o.jsx)(u.a,{store:n},Object(o.jsx)(s.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));a.find(".add-item-button").at(1).simulate("click"),a.unmount(),expect(f.openAddItemDialog).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),expect(f.closeShowAllSkills).toHaveBeenCalled()}),it("should render the Add button when the User is business user",function(){var e=l()([]),t={recordType:c.a.Password,username:"test@test.com",record:{}};top.bg=void 0;var n=e({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:t},user:{type:d.a.ENTERPRISE_TRIAL},secondaryOnboarding:{allSkillsModalOpened:!0}}),a=Object(r.mount)(Object(o.jsx)(u.a,{store:n},Object(o.jsx)(s.default,{skill:p,expanded:!0,fromAllSkillsDialog:!1})));a.find(".add-item-button").at(1).simulate("click"),a.unmount(),expect(f.openAddItemDialog).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled()})},903:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return i(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,s.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return i(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!i(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(87),a=n(904),s=(o=a)&&o.__esModule?o:{default:o};var i=function(e){return"function"===typeof e}},904:function(e,t){var n="[object Object]";var o,r,a=Function.prototype,s=Object.prototype,i=a.toString,l=s.hasOwnProperty,c=i.call(Object),u=s.toString,d=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||u.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var o=l.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&i.call(o)==c}},908:function(e,t){},909:function(e,t){},911:function(e,t){},912:function(e,t){}}]);