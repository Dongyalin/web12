"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var i=0,h=Array(t.length);i<t.length;i++)h[i]=t[i];return h}return Array.from(t)}$(document).ready(function(){function t(t){var i=this;t=t||{},this.main=t.main||{},this.ctx=t.ctx,this.vfx=t.vfx,this.position=t.position||{x:Math.random()*this.main.width+.25*this.main.width,y:Math.random()*-this.main.height*.25},this.rotation=t.rotation||2*Math.random()*Math.PI,this.velocity=t.velocity||{phi:.4*Math.random()-.2+.75*Math.PI,length:5*Math.random()+1,rotate:.1*Math.random()-.05},this.gravity=t.gravity||{phi:.5*Math.PI,length:.98},this.edge=t.edge||~~(Math.random()*this.velocity.length+2*this.velocity.length+2),this.color=t.color||["#300","#610","#fd2","#f62"],this.timescale=t.timescale||.5,this.ground=t.ground||this.main.height,this.accelerate=t.accelerate||{phi:{change:.015*Math.random()-.0075,min:.6*Math.PI,max:.9*Math.PI},friction:1.005},this.points=[].concat(_toConsumableArray(new Array(this.edge))).map(function(t,h){return{phi:h/i.edge*2*Math.PI+.4*Math.random()-.2,length:Math.random()*i.velocity.length*2+4*i.velocity.length}}),this.update=function(t){if(this.rotation+=this.velocity.rotate*this.timescale,this.position.x+=Math.cos(this.velocity.phi)*this.velocity.length*this.timescale,this.position.y+=Math.sin(this.velocity.phi)*this.velocity.length*this.timescale,this.position.x+=Math.cos(this.gravity.phi)*this.gravity.length*this.timescale,this.position.y+=Math.sin(this.gravity.phi)*this.gravity.length*this.timescale,this.velocity.phi+=this.accelerate.phi.change*this.timescale,(this.velocity.phi>this.accelerate.phi.max||this.velocity.phi<this.accelerate.phi.min)&&(this.accelerate.phi.change=-this.accelerate.phi.change),this.velocity.length*=this.accelerate.friction,this.position.y>this.ground){var i=this.vfx,o=this.position,e=this.edge,n=this.main;[].concat(_toConsumableArray(new Array(this.edge))).map(function(){return n.makeRock({position:{x:o.x,y:o.y},base:e})||h(i,o.x+10*Math.random()*e-5*e,o.y+6*Math.random()*e-3*e,e*Math.random()*30+30)}),this.main.meteors.splice(t,1),this.main.makeMeteor()}},this.render=function(){var t=this,i=this.ctx;i.strokeStyle=this.color[0],i.fillStyle=this.color[1],i.moveTo(this.position.x,this.position.y),i.beginPath(),this.points.forEach(function(h){var o=Math.cos(h.phi+t.rotation)*h.length+t.position.x,e=Math.sin(h.phi+t.rotation)*h.length+t.position.y;i.lineTo(o,e)}),i.closePath(),i.stroke(),i.fill();var h=this.vfx;h.globalAlpha=Math.random(),h.fillStyle=this.color[2+~~(Math.random()+.6)],h.moveTo(this.position.x,this.position.y),h.beginPath(),this.points.forEach(function(i){var o=Math.cos(i.phi+t.rotation*Math.random()*.2-.1)*i.length+Math.random()+t.position.x,e=Math.sin(i.phi+t.rotation*Math.random()*.2-.1)*i.length+Math.random()+t.position.y;h.lineTo(o,e)}),h.closePath(),h.fill()}}function i(t){var i=this;t=t||{},this.main=t.main||{},this.base=t.base||2,this.ctx=t.ctx,this.vfx=t.vfx,this.position=t.position||{x:Math.random()*this.main.width,y:Math.random()*this.main.height},this.rotation=t.rotation||2*Math.random()*Math.PI,this.velocity=t.velocity||{phi:Math.random()*Math.PI*.5+1.25*Math.PI,length:1.5*Math.random()*this.base+15,rotate:.2*Math.random()-.1},this.gravity=t.gravity||{phi:.5*Math.PI,length:5},this.edge=t.edge||~~(Math.random()*this.velocity.length+2*this.velocity.length+5),this.color=t.color||["#300","#510","#fd2","#f62"],this.timescale=t.timescale||1.5,this.lifespan=t.lifespan||~~(30*Math.random()+10),this.friction=.94,this.points=[].concat(_toConsumableArray(new Array(this.edge))).map(function(t,h){return{phi:h/i.edge*2*Math.PI+.4*Math.random()-.2,length:Math.random()*i.velocity.length*.1+.2*i.velocity.length}}),this.update=function(t){if(this.lifespan--<=0)return void this.main.meteors.splice(t,1);this.rotation+=this.velocity.rotate*this.timescale,this.position.x+=Math.cos(this.velocity.phi)*this.velocity.length*this.timescale,this.position.y+=Math.sin(this.velocity.phi)*this.velocity.length*this.timescale,this.position.x+=Math.cos(this.gravity.phi)*this.gravity.length*this.timescale,this.position.y+=Math.sin(this.gravity.phi)*this.gravity.length*this.timescale,this.velocity.length*=this.friction},this.render=function(){var t=this,i=this.ctx;i.globalAlpha=Math.random(),i.strokeStyle=this.color[0],i.fillStyle=this.color[1],i.moveTo(this.position.x,this.position.y),i.beginPath(),this.points.forEach(function(h){var o=Math.cos(h.phi+t.rotation)*h.length+t.position.x,e=Math.sin(h.phi+t.rotation)*h.length+t.position.y;i.lineTo(o,e)}),i.closePath(),i.stroke(),i.fill(),i.globalAlpha=1;var h=this.vfx;h.globalAlpha=Math.random(),h.fillStyle=this.color[2+~~(Math.random()+.6)],h.moveTo(this.position.x,this.position.y),h.beginPath(),this.points.forEach(function(i){var o=Math.cos(i.phi+t.rotation*Math.random()*.2-.1)*i.length+Math.random()+t.position.x,e=Math.sin(i.phi+t.rotation*Math.random()*.2-.1)*i.length+Math.random()+t.position.y;h.lineTo(o,e)}),h.closePath(),h.fill()}}function h(t,i,h,o){o=o||100;var e=Math.random()*o+o,n=t.createRadialGradient(i,h,0,i,h,e);n.addColorStop(0,"rgba(250, 200, 50, 0.4)"),n.addColorStop(.1,"rgba(250, 200, 50, 0.3)"),n.addColorStop(.4,"rgba(250, 200, 50, 0.2)"),n.addColorStop(.65,"rgba(250, 200, 50, 0.1)"),n.addColorStop(.8,"rgba(250, 200, 50, 0.05)"),n.addColorStop(1,"rgba(250, 200, 50, 0)"),t.globalAlpha=1,t.beginPath(),t.fillStyle=n,t.arc(i,h,e,0,2*Math.PI),t.fill(),t.closePath()}function o(t){var i=this;t=t||{},this.main=t.main||{},this.ctx=t.ctx,this.edge=t.edge||~~(10*Math.random()+40),this.color=t.color||["#222","#1e004e"],this.height=t.height||.16*this.main.height,this.points=[].concat(_toConsumableArray(new Array(this.edge))).map(function(t,h){var o=1/i.edge*i.main.width;return{x:h/i.edge*i.main.width+Math.random()*o-.5*o,y:i.main.height-i.height+Math.random()*i.height*.1}}),this.update=function(){},this.render=function(){var t=this.ctx;t.strokeStyle=this.color[0],t.fillStyle=this.color[1],t.beginPath(),t.moveTo(-this.height,this.main.height),this.points.forEach(function(i){return t.lineTo(i.x,i.y)}),t.lineTo(this.main.width+this.height,this.main.height),t.closePath(),t.stroke(),t.fill()}}var e={canvas:document.getElementById("canvas"),buffer:document.getElementById("buffer"),ctx:null,vfx:null,ground:null,meteors:[],count:8,width:window.innerWidth,height:window.innerHeight,init:function(){var t=this;this.registerEvents(),this.ctx=this.canvas.getContext("2d"),this.vfx=this.buffer.getContext("2d"),this.vfx.globalCompositeOperation="screen",this.resize(),this.ground=new o({ctx:this.ctx,main:this}),[].concat(_toConsumableArray(new Array(this.count))).map(function(){return t.makeMeteor()})},makeMeteor:function(){this.meteors.push(new t({ctx:this.ctx,vfx:this.vfx,ground:this.height-.8*this.ground.height,main:this}))},makeRock:function(t){t=t||{},this.meteors.push(new i({ctx:this.ctx,vfx:this.vfx,position:t.position,base:t.base,main:this}))},update:function(){this.meteors.forEach(function(t,i){return t.update(i)}),this.ground.update()},render:function(){this.ctx.clearRect(0,0,this.width,this.height),this.meteors.forEach(function(t){return t.render()}),this.ground.render(),this.vfx.fillStyle="#000000",this.vfx.globalAlpha=.12*Math.random(),this.vfx.fillRect(0,0,this.width,this.height)},resize:function(){this.width=1.5*window.innerWidth,this.height=1.5*window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.buffer.width=this.width,this.buffer.height=this.height},registerEvents:function(){var t=this;window.addEventListener("resize",function(){t.resize()},!1)}};e.init(),function t(){e.update(),e.render(),window.requestAnimationFrame(t)}()});