webpackJsonp([5],{"34M+":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"banner",attrs:{id:"rank-banner"}},[a("div",{staticClass:"inner"},[a("h1",[e._v("前端 TOP 100")]),a("div",{staticClass:"filter"},[a("nuxt-link",{class:"hot"==e.sort?"active":"",attrs:{to:"?sort=hot"}},[a("icon",{attrs:{name:"hot"}},[e._v("热门")])],1),a("nuxt-link",{class:"trend"==e.sort?"active":"",attrs:{to:"?sort=trend"}},[a("icon",{attrs:{name:"trend"}},[e._v("趋势")])],1)],1)])]),a("div",{staticClass:"container"},[a("div",{staticClass:"list-group list-main"},[e._l(e.repos,function(t,i){return[a("div",{staticClass:"list-item"},[a("h3",{staticClass:"scord"},[e._v(e._s(i+1))]),a("nuxt-link",{attrs:{to:"/repo/"+t.owner+"/"+t.alia}},[a("img",{staticClass:"cover",attrs:{src:e.cdn(t.cover,"repo","subject_repo")}})]),a("div",{staticClass:"middle"},[a("nuxt-link",{attrs:{to:"/repo/"+t.owner+"/"+t.alia}},[a("h4",[e._v(e._s(t.name))])]),a("span",{staticClass:"sdesc"},[e._v(e._s(t.description_cn||t.description))])],1),a("fresh",{attrs:{time:t.pushed_at}})],1),10===i?a("div",{staticClass:"list-item"},[a("adsense")],1):e._e(),80===i?a("div",{staticClass:"list-item two-ads"},[a("div",{staticClass:"inner"},[e.showad?a("adsense"):e._e()],1),a("div",{staticClass:"inner"},[e.showad?a("adsense"):e._e()],1)]):e._e()]})],2)])])},n=[],s={render:i,staticRenderFns:n};t.a=s},"9B60":function(e,t){function a(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,a,i){return t+t+a+a+i+i});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function i(e,t,a){return Math.min(Math.max(e,t),a)}function n(e,t){return t.indexOf(e)>-1}var s=function(e,t){var s=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:s,w:s.offsetWidth,h:s.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var r=this.pJS;t&&Object.deepExtend(r,t),r.tmp.obj={size_value:r.particles.size.value,size_anim_speed:r.particles.size.anim.speed,move_speed:r.particles.move.speed,line_linked_distance:r.particles.line_linked.distance,line_linked_width:r.particles.line_linked.width,mode_grab_distance:r.interactivity.modes.grab.distance,mode_bubble_distance:r.interactivity.modes.bubble.distance,mode_bubble_size:r.interactivity.modes.bubble.size,mode_repulse_distance:r.interactivity.modes.repulse.distance},r.fn.retinaInit=function(){r.retina_detect&&window.devicePixelRatio>1?(r.canvas.pxratio=window.devicePixelRatio,r.tmp.retina=!0):(r.canvas.pxratio=1,r.tmp.retina=!1),r.canvas.w=r.canvas.el.offsetWidth*r.canvas.pxratio,r.canvas.h=r.canvas.el.offsetHeight*r.canvas.pxratio,r.particles.size.value=r.tmp.obj.size_value*r.canvas.pxratio,r.particles.size.anim.speed=r.tmp.obj.size_anim_speed*r.canvas.pxratio,r.particles.move.speed=r.tmp.obj.move_speed*r.canvas.pxratio,r.particles.line_linked.distance=r.tmp.obj.line_linked_distance*r.canvas.pxratio,r.interactivity.modes.grab.distance=r.tmp.obj.mode_grab_distance*r.canvas.pxratio,r.interactivity.modes.bubble.distance=r.tmp.obj.mode_bubble_distance*r.canvas.pxratio,r.particles.line_linked.width=r.tmp.obj.line_linked_width*r.canvas.pxratio,r.interactivity.modes.bubble.size=r.tmp.obj.mode_bubble_size*r.canvas.pxratio,r.interactivity.modes.repulse.distance=r.tmp.obj.mode_repulse_distance*r.canvas.pxratio},r.fn.canvasInit=function(){r.canvas.ctx=r.canvas.el.getContext("2d")},r.fn.canvasSize=function(){r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r&&r.interactivity.events.resize&&window.addEventListener("resize",function(){r.canvas.w=r.canvas.el.offsetWidth,r.canvas.h=r.canvas.el.offsetHeight,r.tmp.retina&&(r.canvas.w*=r.canvas.pxratio,r.canvas.h*=r.canvas.pxratio),r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r.particles.move.enable||(r.fn.particlesEmpty(),r.fn.particlesCreate(),r.fn.particlesDraw(),r.fn.vendors.densityAutoParticles()),r.fn.vendors.densityAutoParticles()})},r.fn.canvasPaint=function(){r.canvas.ctx.fillRect(0,0,r.canvas.w,r.canvas.h)},r.fn.canvasClear=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h)},r.fn.particle=function(e,t,i){if(this.radius=(r.particles.size.random?Math.random():1)*r.particles.size.value,r.particles.size.anim.enable&&(this.size_status=!1,this.vs=r.particles.size.anim.speed/100,r.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=i?i.x:Math.random()*r.canvas.w,this.y=i?i.y:Math.random()*r.canvas.h,this.x>r.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>r.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),r.particles.move.bounce&&r.fn.vendors.checkOverlap(this,i),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var n=e.value[Math.floor(Math.random()*r.particles.color.value.length)];this.color.rgb=a(n)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=a(this.color.value));this.opacity=(r.particles.opacity.random?Math.random():1)*r.particles.opacity.value,r.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=r.particles.opacity.anim.speed/100,r.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var s={};switch(r.particles.move.direction){case"top":s={x:0,y:-1};break;case"top-right":s={x:.5,y:-.5};break;case"right":s={x:1,y:-0};break;case"bottom-right":s={x:.5,y:.5};break;case"bottom":s={x:0,y:1};break;case"bottom-left":s={x:-.5,y:1};break;case"left":s={x:-1,y:0};break;case"top-left":s={x:-.5,y:-.5};break;default:s={x:0,y:0}}r.particles.move.straight?(this.vx=s.x,this.vy=s.y,r.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=s.x+Math.random()-.5,this.vy=s.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var o=r.particles.shape.type;if("object"==typeof o){if(o instanceof Array){var c=o[Math.floor(Math.random()*o.length)];this.shape=c}}else this.shape=o;if("image"==this.shape){var l=r.particles.shape;this.img={src:l.image.src,ratio:l.image.width/l.image.height},this.img.ratio||(this.img.ratio=1),"svg"==r.tmp.img_type&&void 0!=r.tmp.source_svg&&(r.fn.vendors.createSvgImg(this),r.tmp.pushing&&(this.img.loaded=!1))}},r.fn.particle.prototype.draw=function(){var e=this;if(void 0!=e.radius_bubble)var t=e.radius_bubble;else var t=e.radius;if(void 0!=e.opacity_bubble)var a=e.opacity_bubble;else var a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else var i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(r.canvas.ctx.fillStyle=i,r.canvas.ctx.beginPath(),e.shape){case"circle":r.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":r.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t/(r.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,1);break;case"star":r.fn.vendors.drawShape(r.canvas.ctx,e.x-2*t/(r.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==r.tmp.img_type)var n=e.img.obj;else var n=r.tmp.img_obj;n&&function(){r.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}()}r.canvas.ctx.closePath(),r.particles.shape.stroke.width>0&&(r.canvas.ctx.strokeStyle=r.particles.shape.stroke.color,r.canvas.ctx.lineWidth=r.particles.shape.stroke.width,r.canvas.ctx.stroke()),r.canvas.ctx.fill()},r.fn.particlesCreate=function(){for(var e=0;e<r.particles.number.value;e++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value))},r.fn.particlesUpdate=function(){for(var e=0;e<r.particles.array.length;e++){var t=r.particles.array[e];if(r.particles.move.enable){var a=r.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(r.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=r.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=r.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),r.particles.size.anim.enable&&(1==t.size_status?(t.radius>=r.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=r.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==r.particles.move.out_mode)var i={x_left:t.radius,x_right:r.canvas.w,y_top:t.radius,y_bottom:r.canvas.h};else var i={x_left:-t.radius,x_right:r.canvas.w+t.radius,y_top:-t.radius,y_bottom:r.canvas.h+t.radius};switch(t.x-t.radius>r.canvas.w?(t.x=i.x_left,t.y=Math.random()*r.canvas.h):t.x+t.radius<0&&(t.x=i.x_right,t.y=Math.random()*r.canvas.h),t.y-t.radius>r.canvas.h?(t.y=i.y_top,t.x=Math.random()*r.canvas.w):t.y+t.radius<0&&(t.y=i.y_bottom,t.x=Math.random()*r.canvas.w),r.particles.move.out_mode){case"bounce":t.x+t.radius>r.canvas.w?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>r.canvas.h?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(n("grab",r.interactivity.events.onhover.mode)&&r.fn.modes.grabParticle(t),(n("bubble",r.interactivity.events.onhover.mode)||n("bubble",r.interactivity.events.onclick.mode))&&r.fn.modes.bubbleParticle(t),(n("repulse",r.interactivity.events.onhover.mode)||n("repulse",r.interactivity.events.onclick.mode))&&r.fn.modes.repulseParticle(t),r.particles.line_linked.enable||r.particles.move.attract.enable)for(var s=e+1;s<r.particles.array.length;s++){var o=r.particles.array[s];r.particles.line_linked.enable&&r.fn.interact.linkParticles(t,o),r.particles.move.attract.enable&&r.fn.interact.attractParticles(t,o),r.particles.move.bounce&&r.fn.interact.bounceParticles(t,o)}}},r.fn.particlesDraw=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h),r.fn.particlesUpdate();for(var e=0;e<r.particles.array.length;e++){r.particles.array[e].draw()}},r.fn.particlesEmpty=function(){r.particles.array=[]},r.fn.particlesRefresh=function(){cancelRequestAnimFrame(r.fn.checkAnimFrame),cancelRequestAnimFrame(r.fn.drawAnimFrame),r.tmp.source_svg=void 0,r.tmp.img_obj=void 0,r.tmp.count_svg=0,r.fn.particlesEmpty(),r.fn.canvasClear(),r.fn.vendors.start()},r.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=r.particles.line_linked.distance){var s=r.particles.line_linked.opacity-n/(1/r.particles.line_linked.opacity)/r.particles.line_linked.distance;if(s>0){var o=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+s+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(t.x,t.y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}},r.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=r.particles.line_linked.distance){var n=a/(1e3*r.particles.move.attract.rotateX),s=i/(1e3*r.particles.move.attract.rotateY);e.vx-=n,e.vy-=s,t.vx+=n,t.vy+=s}},r.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},r.fn.modes.pushParticles=function(e,t){r.tmp.pushing=!0;for(var a=0;a<e;a++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value,{x:t?t.pos_x:Math.random()*r.canvas.w,y:t?t.pos_y:Math.random()*r.canvas.h})),a==e-1&&(r.particles.move.enable||r.fn.particlesDraw(),r.tmp.pushing=!1)},r.fn.modes.removeParticles=function(e){r.particles.array.splice(0,e),r.particles.move.enable||r.fn.particlesDraw()},r.fn.modes.bubbleParticle=function(e){function t(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function a(t,a,i,n,s){if(t!=a)if(r.tmp.bubble_duration_end){if(void 0!=i){var c=n-p*(n-t)/r.interactivity.modes.bubble.duration,l=t-c;v=t+l,"size"==s&&(e.radius_bubble=v),"opacity"==s&&(e.opacity_bubble=v)}}else if(o<=r.interactivity.modes.bubble.distance){if(void 0!=i)var d=i;else var d=n;if(d!=t){var v=n-p*(n-t)/r.interactivity.modes.bubble.duration;"size"==s&&(e.radius_bubble=v),"opacity"==s&&(e.opacity_bubble=v)}}else"size"==s&&(e.radius_bubble=void 0),"opacity"==s&&(e.opacity_bubble=void 0)}if(r.interactivity.events.onhover.enable&&n("bubble",r.interactivity.events.onhover.mode)){var i=e.x-r.interactivity.mouse.pos_x,s=e.y-r.interactivity.mouse.pos_y,o=Math.sqrt(i*i+s*s),c=1-o/r.interactivity.modes.bubble.distance;if(o<=r.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==r.interactivity.status){if(r.interactivity.modes.bubble.size!=r.particles.size.value)if(r.interactivity.modes.bubble.size>r.particles.size.value){var l=e.radius+r.interactivity.modes.bubble.size*c;l>=0&&(e.radius_bubble=l)}else{var d=e.radius-r.interactivity.modes.bubble.size,l=e.radius-d*c;e.radius_bubble=l>0?l:0}if(r.interactivity.modes.bubble.opacity!=r.particles.opacity.value)if(r.interactivity.modes.bubble.opacity>r.particles.opacity.value){var v=r.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(r.particles.opacity.value-r.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else t();"mouseleave"==r.interactivity.status&&t()}else if(r.interactivity.events.onclick.enable&&n("bubble",r.interactivity.events.onclick.mode)){if(r.tmp.bubble_clicking){var i=e.x-r.interactivity.mouse.click_pos_x,s=e.y-r.interactivity.mouse.click_pos_y,o=Math.sqrt(i*i+s*s),p=((new Date).getTime()-r.interactivity.mouse.click_time)/1e3;p>r.interactivity.modes.bubble.duration&&(r.tmp.bubble_duration_end=!0),p>2*r.interactivity.modes.bubble.duration&&(r.tmp.bubble_clicking=!1,r.tmp.bubble_duration_end=!1)}r.tmp.bubble_clicking&&(a(r.interactivity.modes.bubble.size,r.particles.size.value,e.radius_bubble,e.radius,"size"),a(r.interactivity.modes.bubble.opacity,r.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},r.fn.modes.repulseParticle=function(e){if(r.interactivity.events.onhover.enable&&n("repulse",r.interactivity.events.onhover.mode)&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,s=Math.sqrt(t*t+a*a),o={x:t/s,y:a/s},c=r.interactivity.modes.repulse.distance,l=i(1/c*(-1*Math.pow(s/c,2)+1)*c*100,0,50),d={x:e.x+o.x*l,y:e.y+o.y*l};"bounce"==r.particles.move.out_mode?(d.x-e.radius>0&&d.x+e.radius<r.canvas.w&&(e.x=d.x),d.y-e.radius>0&&d.y+e.radius<r.canvas.h&&(e.y=d.y)):(e.x=d.x,e.y=d.y)}else if(r.interactivity.events.onclick.enable&&n("repulse",r.interactivity.events.onclick.mode))if(r.tmp.repulse_finish||++r.tmp.repulse_count==r.particles.array.length&&(r.tmp.repulse_finish=!0),r.tmp.repulse_clicking){var c=Math.pow(r.interactivity.modes.repulse.distance/6,3),v=r.interactivity.mouse.click_pos_x-e.x,p=r.interactivity.mouse.click_pos_y-e.y,m=v*v+p*p,u=-c/m*1;m<=c&&function(){var t=Math.atan2(p,v);if(e.vx=u*Math.cos(t),e.vy=u*Math.sin(t),"bounce"==r.particles.move.out_mode){var a={x:e.x+e.vx,y:e.y+e.vy};a.x+e.radius>r.canvas.w?e.vx=-e.vx:a.x-e.radius<0&&(e.vx=-e.vx),a.y+e.radius>r.canvas.h?e.vy=-e.vy:a.y-e.radius<0&&(e.vy=-e.vy)}}()}else 0==r.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},r.fn.modes.grabParticle=function(e){if(r.interactivity.events.onhover.enable&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=r.interactivity.modes.grab.distance){var n=r.interactivity.modes.grab.line_linked.opacity-i/(1/r.interactivity.modes.grab.line_linked.opacity)/r.interactivity.modes.grab.distance;if(n>0){var s=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x,r.interactivity.mouse.pos_y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}}},r.fn.vendors.eventsListeners=function(){"window"==r.interactivity.detect_on?r.interactivity.el=window:r.interactivity.el=r.canvas.el,(r.interactivity.events.onhover.enable||r.interactivity.events.onclick.enable)&&(r.interactivity.el.addEventListener("mousemove",function(e){if(r.interactivity.el==window)var t=e.clientX,a=e.clientY;else var t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;r.interactivity.mouse.pos_x=t,r.interactivity.mouse.pos_y=a,r.tmp.retina&&(r.interactivity.mouse.pos_x*=r.canvas.pxratio,r.interactivity.mouse.pos_y*=r.canvas.pxratio),r.interactivity.status="mousemove"}),r.interactivity.el.addEventListener("mouseleave",function(e){r.interactivity.mouse.pos_x=null,r.interactivity.mouse.pos_y=null,r.interactivity.status="mouseleave"})),r.interactivity.events.onclick.enable&&r.interactivity.el.addEventListener("click",function(){if(r.interactivity.mouse.click_pos_x=r.interactivity.mouse.pos_x,r.interactivity.mouse.click_pos_y=r.interactivity.mouse.pos_y,r.interactivity.mouse.click_time=(new Date).getTime(),r.interactivity.events.onclick.enable)switch(r.interactivity.events.onclick.mode){case"push":r.particles.move.enable?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):1==r.interactivity.modes.push.particles_nb?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):r.interactivity.modes.push.particles_nb>1&&r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);break;case"remove":r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);break;case"bubble":r.tmp.bubble_clicking=!0;break;case"repulse":r.tmp.repulse_clicking=!0,r.tmp.repulse_count=0,r.tmp.repulse_finish=!1,setTimeout(function(){r.tmp.repulse_clicking=!1},1e3*r.interactivity.modes.repulse.duration)}})},r.fn.vendors.densityAutoParticles=function(){if(r.particles.number.density.enable){var e=r.canvas.el.width*r.canvas.el.height/1e3;r.tmp.retina&&(e/=2*r.canvas.pxratio);var t=e*r.particles.number.value/r.particles.number.density.value_area,a=r.particles.array.length-t;a<0?r.fn.modes.pushParticles(Math.abs(a)):r.fn.modes.removeParticles(a)}},r.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<r.particles.array.length;a++){var i=r.particles.array[a],n=e.x-i.x,s=e.y-i.y;Math.sqrt(n*n+s*s)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*r.canvas.w,e.y=t?t.y:Math.random()*r.canvas.h,r.fn.vendors.checkOverlap(e))}},r.fn.vendors.createSvgImg=function(e){var t=r.tmp.source_svg,a=/#([0-9A-F]{3,6})/gi,i=t.replace(a,function(t,a,i,n){if(e.color.rgb)var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return s}),n=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),s=window.URL||window.webkitURL||window,o=s.createObjectURL(n),c=new Image;c.addEventListener("load",function(){e.img.obj=c,e.img.loaded=!0,s.revokeObjectURL(o),r.tmp.count_svg++}),c.src=o},r.fn.vendors.destroypJS=function(){cancelAnimationFrame(r.fn.drawAnimFrame),s.remove(),pJSDom=null},r.fn.vendors.drawShape=function(e,t,a,i,n,s){var r=n*s,o=n/s,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var d=0;d<r;d++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},r.fn.vendors.exportImg=function(){window.open(r.canvas.el.toDataURL("image/png"),"_blank")},r.fn.vendors.loadImg=function(e){if(r.tmp.img_error=void 0,""!=r.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",r.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(r.tmp.source_svg=e.currentTarget.response,r.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),r.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",function(){r.tmp.img_obj=a,r.fn.vendors.checkBeforeDraw()}),a.src=r.particles.shape.image.src}else console.log("Error pJS - No image.src"),r.tmp.img_error=!0},r.fn.vendors.draw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type?r.tmp.count_svg>=r.particles.number.value?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):void 0!=r.tmp.img_obj?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame))},r.fn.vendors.checkBeforeDraw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type&&void 0==r.tmp.source_svg?r.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(r.tmp.checkAnimFrame),r.tmp.img_error||(r.fn.vendors.init(),r.fn.vendors.draw())):(r.fn.vendors.init(),r.fn.vendors.draw())},r.fn.vendors.init=function(){r.fn.retinaInit(),r.fn.canvasInit(),r.fn.canvasSize(),r.fn.canvasPaint(),r.fn.particlesCreate(),r.fn.vendors.densityAutoParticles(),r.particles.line_linked.color_rgb_line=a(r.particles.line_linked.color)},r.fn.vendors.start=function(){n("image",r.particles.shape.type)?(r.tmp.img_type=r.particles.shape.image.src.substr(r.particles.shape.image.src.length-3),r.fn.vendors.loadImg(r.tmp.img_type)):r.fn.vendors.checkBeforeDraw()},r.fn.vendors.eventsListeners(),r.fn.vendors.start()};Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var a=document.getElementById(e),i=a.getElementsByClassName("particles-js-canvas-el");if(i.length)for(;i.length>0;)a.removeChild(i[0]);var n=document.createElement("canvas");n.className="particles-js-canvas-el",n.style.width="100%",n.style.height="100%",null!=document.getElementById(e).appendChild(n)&&pJSDom.push(new s(e,t))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var n=JSON.parse(t.currentTarget.response);window.particlesJS(e,n),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()}},EeFA:function(e,t,a){t=e.exports=a("BkJT")(!1),t.push([e.i,".page-rank{background-color:#f7f8fa}.page-rank .body{padding:0}.page-rank .banner{text-align:center;height:400px;background-image:linear-gradient(135deg,#79f1a4,#0e5cad);color:#fff;overflow:hidden;position:relative}.page-rank .banner .inner{position:absolute;top:0;left:0;width:100%;height:100%;padding:220px 0;padding-top:50px}.page-rank .banner .inner h1{font-size:48px;font-size:3rem}.page-rank .banner .inner .filter{margin-top:30px}.page-rank .banner .inner .filter a{display:inline-block;background-color:none;border:1px solid #fff;margin:0 10px;padding:5px 12px;text-decoration:none;color:#fff}.page-rank .banner .inner .filter a.active{background-color:#fff;color:#0099c3}.page-rank .container{max-width:800px;padding-bottom:50px}.page-rank .list-main{margin-top:-200px}.page-rank .list-item{padding:20px;padding-left:0;border-bottom:1px dashed #ddd;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;color:#4e4f54;width:100%}.page-rank .list-item.two-ads{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:0}@media (max-width:576px){.page-rank .list-item.two-ads{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.page-rank .list-item.two-ads .inner{width:100%;padding:20px}.page-rank .list-item:first-child{display:block;height:200px;padding:0;text-align:center;padding:0 10px;overflow:hidden;background-color:rgba(8,105,132,.52);color:#60bed8;padding-top:5px;border:0}.page-rank .list-item:first-child .fresh,.page-rank .list-item:first-child .scord{display:none}.page-rank .list-item:first-child .cover{margin:20px 0;border-radius:100%;width:80px}.page-rank .list-item:first-child a{color:#60bed8}.page-rank .list-item:last-child{border-bottom:none}.page-rank .list-item .scord{-ms-flex-preferred-size:80px;flex-basis:80px;text-align:center;-ms-flex-negative:0;flex-shrink:0}.page-rank .list-item .cover{width:60px}.page-rank .list-item .middle{padding:0 10px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;word-break:keep-all;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-rank .list-item .middle .sdesc{line-height:30px}",""])},UYQP:function(e,t,a){t=e.exports=a("BkJT")(!1),t.push([e.i,".fresh[data-v-30e59c66]{display:inline-block;border-radius:100%;width:15px;height:15px;background-color:#eee;-ms-flex-negative:0;flex-shrink:0}.fresh.often[data-v-30e59c66]{background-color:#a4eda4}.fresh.outdated[data-v-30e59c66]{background-color:#ffbcbc}",""])},VB2n:function(e,t,a){"use strict";t.a={props:["time"],methods:{format:function(e){var t=(Date.parse(new Date)-Date.parse(new Date(e)))/1e3/60/60/24;return t<=20?"often":t<=210?"":"outdated"}}}},dL2a:function(e,t,a){var i=a("EeFA");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("XkoO")("68d4844c",i,!0)},g2WY:function(e,t,a){"use strict";function i(e){a("goXt")}var n=a("VB2n"),s=a("zHzG"),r=a("J0+h"),o=i,c=r(n.a,s.a,o,"data-v-30e59c66",null);t.a=c.exports},goXt:function(e,t,a){var i=a("UYQP");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("XkoO")("3fa010f2",i,!0)},uoq2:function(e,t,a){"use strict";function i(e){a("dL2a")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("xEKP"),s=a("34M+"),r=a("J0+h"),o=i,c=r(n.a,s.a,o,null,null);t.default=c.exports},xEKP:function(e,t,a){"use strict";var i=a("YFWx"),n=a("g2WY");t.a={layout:"blank",asyncData:function(e){var t=e.query;return Object(i.a)().get("repo/top100?sort="+t.sort).then(function(e){return{repos:e.data,sort:"trend"===t.sort?t.sort:"hot"}})},head:function(){return{title:"前端TOP100",meta:[{hid:"description",name:"description",content:"TOP100的前端框架排名"},{hid:"keywords",name:"keywords",content:"前端TOP,前端趋势,热门框架"}]}},data:function(){return{showad:!1}},components:{Fresh:n.a,Adsense:function(){return a.e(44).then(a.bind(null,"g05U"))}},mounted:function(){this.showad=!0,a("9B60"),window.particlesJS("rank-banner",{particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:30,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.2,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}}}},retina_detect:!0})}}},zHzG:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"fresh",class:e.format(e.time),attrs:{title:"更新于"+e.timeago(e.time)}})},n=[],s={render:i,staticRenderFns:n};t.a=s}});
//# sourceMappingURL=rank.f1296a167300db05bf23.js.map