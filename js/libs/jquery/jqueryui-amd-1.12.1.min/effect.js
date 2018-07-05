/*! jQuery UI - v1.12.1 - 2016-09-15
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){var e="ui-effects-",n="ui-effects-style",r="ui-effects-animated",o=t;return t.effects={effect:{}},function(t,e){function n(t,e,n){var r=l[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:0>t?0:r.max<t?r.max:t)}function r(e){var n=f(),r=n._rgba=[];return e=e.toLowerCase(),h(c,function(t,o){var i,s=o.re.exec(e),a=s&&o.parse(s),c=o.space||"rgba";if(a)return i=n[c](a),n[u[c].cache]=i[u[c].cache],r=n._rgba=i._rgba,!1}),r.length?("0,0,0,0"===r.join()&&t.extend(r,i.transparent),n):i[e]}function o(t,e,n){return n=(n+1)%1,6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}var i,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,c=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],f=t.Color=function(e,n,r,o){return new t.Color.fn.parse(e,n,r,o)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=f.support={},p=t("<p>")[0],h=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,h(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),f.fn=t.extend(f.prototype,{parse:function(o,s,a,c){if(o===e)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=t(o).css(s),s=e);var l=this,d=t.type(o),p=this._rgba=[];return s!==e&&(o=[o,s,a,c],d="array"),"string"===d?this.parse(r(o)||i._default):"array"===d?(h(u.rgba.props,function(t,e){p[e.idx]=n(o[e.idx],e)}),this):"object"===d?(o instanceof f?h(u,function(t,e){o[e.cache]&&(l[e.cache]=o[e.cache].slice())}):h(u,function(e,r){var i=r.cache;h(r.props,function(t,e){if(!l[i]&&r.to){if("alpha"===t||null==o[t])return;l[i]=r.to(l._rgba)}l[i][e.idx]=n(o[t],e,!0)}),l[i]&&t.inArray(null,l[i].slice(0,3))<0&&(l[i][3]=1,r.from&&(l._rgba=r.from(l[i])))}),this):void 0},is:function(t){var e=f(t),n=!0,r=this;return h(u,function(t,o){var i,s=e[o.cache];return s&&(i=r[o.cache]||o.to&&o.to(r._rgba)||[],h(o.props,function(t,e){if(null!=s[e.idx])return n=s[e.idx]===i[e.idx]})),n}),n},_space:function(){var t=[],e=this;return h(u,function(n,r){e[r.cache]&&t.push(n)}),t.pop()},transition:function(t,e){var r=f(t),o=r._space(),i=u[o],s=0===this.alpha()?f("transparent"):this,a=s[i.cache]||i.to(s._rgba),c=a.slice();return r=r[i.cache],h(i.props,function(t,o){var i=o.idx,s=a[i],f=r[i],u=l[o.type]||{};null!==f&&(null===s?c[i]=f:(u.mod&&(f-s>u.mod/2?s+=u.mod:s-f>u.mod/2&&(s-=u.mod)),c[i]=n((f-s)*e+s,o)))}),this[o](c)},blend:function(e){if(1===this._rgba[3])return this;var n=this._rgba.slice(),r=n.pop(),o=f(e)._rgba;return f(t.map(n,function(t,e){return(1-r)*o[e]+r*t}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===n[3]&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===n[3]&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(255*r)),"#"+t.map(n,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,r=t[0]/255,o=t[1]/255,i=t[2]/255,s=t[3],a=Math.max(r,o,i),c=Math.min(r,o,i),f=a-c,u=a+c,l=.5*u;return e=c===a?0:r===a?60*(o-i)/f+360:o===a?60*(i-r)/f+120:60*(r-o)/f+240,n=0===f?0:l<=.5?f/u:f/(2-u),[Math.round(e)%360,n,l,null==s?1:s]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],i=t[3],s=r<=.5?r*(1+n):r+n-r*n,a=2*r-s;return[Math.round(255*o(a,s,e+1/3)),Math.round(255*o(a,s,e)),Math.round(255*o(a,s,e-1/3)),i]},h(u,function(r,o){var i=o.props,s=o.cache,c=o.to,u=o.from;f.fn[r]=function(r){if(c&&!this[s]&&(this[s]=c(this._rgba)),r===e)return this[s].slice();var o,a=t.type(r),l="array"===a||"object"===a?r:arguments,d=this[s].slice();return h(i,function(t,e){var r=l["object"===a?t:e.idx];null==r&&(r=d[e.idx]),d[e.idx]=n(r,e)}),u?(o=f(u(d)),o[s]=d,o):f(d)},h(i,function(e,n){f.fn[e]||(f.fn[e]=function(o){var i,s=t.type(o),c="alpha"===e?this._hsla?"hsla":"rgba":r,f=this[c](),u=f[n.idx];return"undefined"===s?u:("function"===s&&(o=o.call(this,u),s=t.type(o)),null==o&&n.empty?this:("string"===s&&(i=a.exec(o),i&&(o=u+parseFloat(i[2])*("+"===i[1]?1:-1))),f[n.idx]=o,this[c](f)))})})}),f.hook=function(e){var n=e.split(" ");h(n,function(e,n){t.cssHooks[n]={set:function(e,o){var i,s,a="";if("transparent"!==o&&("string"!==t.type(o)||(i=r(o)))){if(o=f(i||o),!d.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===n?e.parentNode:e;(""===a||"transparent"===a)&&s&&s.style;)try{a=t.css(s,"backgroundColor"),s=s.parentNode}catch(t){}o=o.blend(a&&"transparent"!==a?a:"_default")}o=o.toRgbaString()}try{e.style[n]=o}catch(t){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=f(e.elem,n),e.end=f(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}})},f.hook(s),t.cssHooks.borderColor={expand:function(t){var e={};return h(["Top","Right","Bottom","Left"],function(n,r){e["border"+r+"Color"]=t}),e}},i=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(o),function(){function e(e){var n,r,o=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,i={};if(o&&o.length&&o[0]&&o[o[0]])for(r=o.length;r--;)n=o[r],"string"==typeof o[n]&&(i[t.camelCase(n)]=o[n]);else for(n in o)"string"==typeof o[n]&&(i[n]=o[n]);return i}function n(e,n){var r,o,s={};for(r in n)o=n[r],e[r]!==o&&(i[r]||!t.fx.step[r]&&isNaN(parseFloat(o))||(s[r]=o));return s}var r=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(o.style(t.elem,n,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(o,i,s,a){var c=t.speed(i,s,a);return this.queue(function(){var i,s=t(this),a=s.attr("class")||"",f=c.children?s.find("*").addBack():s;f=f.map(function(){var n=t(this);return{el:n,start:e(this)}}),i=function(){t.each(r,function(t,e){o[e]&&s[e+"Class"](o[e])})},i(),f=f.map(function(){return this.end=e(this.el[0]),this.diff=n(this.start,this.end),this}),s.attr("class",a),f=f.map(function(){var e=this,n=t.Deferred(),r=t.extend({},c,{queue:!1,complete:function(){n.resolve(e)}});return this.el.animate(this.diff,r),n.promise()}),t.when.apply(t,f.get()).done(function(){i(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),c.complete.call(s[0])})})},t.fn.extend({addClass:function(e){return function(n,r,o,i){return r?t.effects.animateClass.call(this,{add:n},r,o,i):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(n,r,o,i){return arguments.length>1?t.effects.animateClass.call(this,{remove:n},r,o,i):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(n,r,o,i,s){return"boolean"==typeof r||void 0===r?o?t.effects.animateClass.call(this,r?{add:n}:{remove:n},o,i,s):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},r,o,i)}}(t.fn.toggleClass),switchClass:function(e,n,r,o,i){return t.effects.animateClass.call(this,{add:n,remove:e},r,o,i)}})}(),function(){function o(e,n,r,o){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),t.isFunction(n)&&(o=n,r=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(o=r,r=n,n={}),t.isFunction(r)&&(o=r,r=null),n&&t.extend(e,n),r=r||n.duration,e.duration=t.fx.off?0:"number"==typeof r?r:r in t.fx.speeds?t.fx.speeds[r]:t.fx.speeds._default,e.complete=o||n.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function s(t,e){var n=e.outerWidth(),r=e.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,i=o.exec(t)||["",0,n,r,0];return{top:parseFloat(i[1])||0,right:"auto"===i[2]?n:parseFloat(i[2]),bottom:"auto"===i[3]?r:parseFloat(i[3]),left:parseFloat(i[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(n){return!!t(n).data(r)||e(n)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,n){for(var r=0,o=n.length;r<o;r++)null!==n[r]&&t.data(e+n[r],t[0].style[n[r]])},restore:function(t,n){for(var r,o=0,i=n.length;o<i;o++)null!==n[o]&&(r=t.data(e+n[o]),t.css(n[o],r))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var n={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},r=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:e.width(),height:e.height()},i=document.activeElement;try{i.id}catch(t){i=document.body}return e.wrap(r),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus"),r=e.parent(),"static"===e.css("position")?(r.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,r){n[r]=e.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(o),r.css(n).show()},removeWrapper:function(e){var n=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,n,r){return r||(r=n,n="effect"),t.effects.effect[e]=r,t.effects.effect[e].mode=n,r},scaledDimensions:function(t,e,n){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var r="horizontal"!==n?(e||100)/100:1,o="vertical"!==n?(e||100)/100:1;return{height:t.height()*o,width:t.width()*r,outerHeight:t.outerHeight()*o,outerWidth:t.outerWidth()*r}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var r=t.queue();e>1&&r.splice.apply(r,[1,0].concat(r.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(n,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(n)||"",t.removeData(n)},mode:function(t,e){var n=t.is(":hidden");return"toggle"===e&&(e=n?"show":"hide"),(n?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createPlaceholder:function(n){var r,o=n.css("position"),i=n.position();return n.css({marginTop:n.css("marginTop"),marginBottom:n.css("marginBottom"),marginLeft:n.css("marginLeft"),marginRight:n.css("marginRight")}).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()),/^(static|relative)/.test(o)&&(o="absolute",r=t("<"+n[0].nodeName+">").insertAfter(n).css({display:/^(inline|ruby)/.test(n.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:n.css("marginTop"),marginBottom:n.css("marginBottom"),marginLeft:n.css("marginLeft"),marginRight:n.css("marginRight"),float:n.css("float")}).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()).addClass("ui-effects-placeholder"),n.data(e+"placeholder",r)),n.css({position:o,left:i.left,top:i.top}),r},removePlaceholder:function(t){var n=e+"placeholder",r=t.data(n);r&&(r.remove(),t.removeData(n))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,n,r,o){return o=o||{},t.each(n,function(t,n){var i=e.cssUnit(n);i[0]>0&&(o[n]=i[0]*r+i[1])}),o}}),t.fn.extend({effect:function(){function e(e){function o(){c.removeData(r),t.effects.cleanUp(c),"hide"===n.mode&&c.hide(),a()}function a(){t.isFunction(f)&&f.call(c[0]),t.isFunction(e)&&e()}var c=t(this);n.mode=l.shift(),t.uiBackCompat===!1||s?"none"===n.mode?(c[u](),a()):i.call(c[0],n,o):(c.is(":hidden")?"hide"===u:"show"===u)?(c[u](),a()):i.call(c[0],n,a)}var n=o.apply(this,arguments),i=t.effects.effect[n.effect],s=i.mode,a=n.queue,c=a||"fx",f=n.complete,u=n.mode,l=[],d=function(e){var n=t(this),o=t.effects.mode(n,u)||s;n.data(r,!0),l.push(o),s&&("show"===o||o===s&&"hide"===o)&&n.show(),s&&"none"===o||t.effects.saveStyle(n),t.isFunction(e)&&e()};return t.fx.off||!i?u?this[u](n.duration,f):this.each(function(){f&&f.call(this)}):a===!1?this.each(d).each(e):this.queue(c,d).queue(c,e)},show:function(t){return function(e){if(i(e))return t.apply(this,arguments);var n=o.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(e){if(i(e))return t.apply(this,arguments);var n=o.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(e){if(i(e)||"boolean"==typeof e)return t.apply(this,arguments);var n=o.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var n=this.css(e),r=[];return t.each(["em","px","%","pt"],function(t,e){n.indexOf(e)>0&&(r=[parseFloat(n),e])}),r},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,n){var r=t(this),o=t(e.to),i="fixed"===o.css("position"),s=t("body"),a=i?s.scrollTop():0,c=i?s.scrollLeft():0,f=o.offset(),u={top:f.top-a,left:f.left-c,height:o.innerHeight(),width:o.innerWidth()},l=r.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:l.top-a,left:l.left-c,height:r.innerHeight(),width:r.innerWidth(),position:i?"fixed":"absolute"}).animate(u,e.duration,e.easing,function(){d.remove(),t.isFunction(n)&&n()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?n(2*t)/2:1-n(t*-2+2)/2}})}(),t.effects});