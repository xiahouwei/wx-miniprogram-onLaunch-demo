module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1685349464703, function(require, module, exports) {
function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"on",(function(e,n,r){var a={context:n,callback:r},i=t.event[e];Array.isArray(i)?i.push(a):t.event[e]=[a]})),n(this,"remove",(function(e,n){var r=t.event[e];Array.isArray(r)&&(t.event[e]=r.filter((function(e){return e.context!==n})))})),n(this,"emit",(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=t.event[e];Array.isArray(i)&&i.forEach((function(e){e.callback.apply(e.context,r)}))})),this.event={}}));function a(){return new r}module.exports={$fxEventBus:a(),$fxCreateEventBus:a};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1685349464703);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map