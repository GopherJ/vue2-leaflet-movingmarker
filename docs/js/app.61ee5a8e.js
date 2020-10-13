(function(t){function e(e){for(var a,o,l=e[0],u=e[1],c=e[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"2b5c":function(t,e,n){},"43de":function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"options"},[n("label",{staticClass:"duration",attrs:{for:"duration"}},[t._v("Duration")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{id:"duration",type:"number",name:"duration"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=e.target.value)}}}),n("div",{staticClass:"flex"},[n("label",{staticClass:"duration",attrs:{for:"duration"}},[t._v("Keep at center")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keepAtCenter,expression:"keepAtCenter"}],attrs:{id:"duration",type:"checkbox",name:"keepAtCenter"},domProps:{checked:Array.isArray(t.keepAtCenter)?t._i(t.keepAtCenter,null)>-1:t.keepAtCenter},on:{change:function(e){var n=t.keepAtCenter,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.keepAtCenter=n.concat([i])):o>-1&&(t.keepAtCenter=n.slice(0,o).concat(n.slice(o+1)))}else t.keepAtCenter=r}}})])]),n("Map",{attrs:{duration:t.durationInteger,"keep-at-center":t.keepAtCenter}})],1)},l=[],u=(n("e25e"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-map",{attrs:{zoom:14,center:t.initialLocation}},[n("l-icon-default"),n("l-tile-layer",{attrs:{url:t.mapData.url,attribution:t.mapData.attribution}}),t._l(t.locations,(function(e){return n("l-moving-marker",{key:e.id,attrs:{"lat-lng":e.latlng,duration:t.duration,"keep-at-center":t.keepAtCenter,icon:t.icon}},[n("l-popup",{attrs:{content:e.text}})],1)}))],2)}),c=[],s=(n("4160"),n("a9e3"),n("159b"),n("4795"),n("e11e")),p=n.n(s),d=n("2699"),f=n("a40a"),h=n("9762"),m=n("f60f"),b=n("5530"),g=n("4777"),v=n("503e"),y=n("ef62"),O=(n("7998"),{name:"LMarker",mixins:[g["a"],v["a"]],props:{pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],custom:!1,default:function(){return new s["Icon"].Default}},zIndexOffset:{type:Number,custom:!1,default:null},duration:{type:Number,required:!0},keepAtCenter:{type:Boolean,default:!1}},data:function(){return{ready:!1}},mounted:function(){var t=this,e=Object(y["c"])(Object(b["a"])(Object(b["a"])({},this.layerOptions),{},{icon:this.icon,zIndexOffset:this.zIndexOffset,draggable:this.draggable}),this);this.mapObject=Object(s["marker"])(this.latLng,e),s["DomEvent"].on(this.mapObject,this.$listeners),this.mapObject.on("move",Object(y["a"])(this.latLngSync,100)),Object(y["d"])(this,this.mapObject,this.$options.props),this.parentContainer=Object(y["b"])(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.ready=!0,this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{setDraggable:function(t){this.mapObject.dragging&&(t?this.mapObject.dragging.enable():this.mapObject.dragging.disable())},setLatLng:function(t){if(null!=t&&this.mapObject){var e=this.mapObject.getLatLng(),n=Object(s["latLng"])(t);n.lat===e.lat&&n.lng===e.lng||this.mapObject.slideTo(n,{duration:this.duration,keepAtCenter:this.keepAtCenter})}},latLngSync:function(t){this.$emit("update:latLng",t.latlng),this.$emit("update:lat-lng",t.latlng)}},render:function(t){return this.ready&&this.$slots["default"]?t("div",{style:{display:"none"}},this.$slots["default"]):null}}),k=O,j=n("2877"),A=n("43de"),C=n.n(A),L=Object(j["a"])(k,a,r,!1,null,null,null);"function"===typeof C.a&&C()(L);var x=L.exports;function w(t){var e=t+.01,n=t-.01;return Math.random()*(e-n)+n}for(var _=[],M=0;M<10;M++)_.push({id:M,latlng:p.a.latLng(w(48.8929425),w(2.3821873)),text:"Moving Marker #"+M});var $=p.a.icon({iconUrl:"https://s3-eu-west-1.amazonaws.com/ct-documents/emails/A-static.png",iconSize:[21,31],iconAnchor:[10.5,31],popupAnchor:[4,-25]}),P={components:{LMap:d["a"],LTileLayer:f["a"],LIconDefault:h["a"],LPopup:m["a"],LMovingMarker:x},props:{duration:{type:Number,default:2e3},keepAtCenter:{type:Boolean,default:!1}},data:function(){return{locations:_,icon:$,initialLocation:p.a.latLng(48.8929425,2.3821873),mapData:{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"},interval:null}},watch:{duration:{handler:function(t,e){var n=this;if(t!==e){clearInterval(this.interval);var a=function(){n.locations.forEach((function(t){t.latlng=p.a.latLng(w(48.8929425),w(2.3821873))}))};this.interval=setInterval((function(){a()}),t),a()}},immediate:!0}}},I=P,S=(n("61b5"),Object(j["a"])(I,u,c,!1,null,null,null)),D=S.exports,z={name:"App",components:{Map:D},data:function(){return{duration:2e3,keepAtCenter:!1}},computed:{durationInteger:function(){return parseInt(this.duration)}}},T=z,N=(n("034f"),Object(j["a"])(T,o,l,!1,null,null,null)),E=N.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"61b5":function(t,e,n){"use strict";var a=n("2b5c"),r=n.n(a);r.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.61ee5a8e.js.map