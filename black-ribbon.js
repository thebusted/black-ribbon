/**
* BlackRibbon BETA v1.0
* 25 October 2016
* https://github.com/thebusted/black-ribbon/
*/
var BlackRibbon=function(){this.cdn="https://storage.googleapis.com/black-ribbon.appspot.com/img/";this.getPosition=function(){var a=window.brb||null;return{x:"left"===a.x||"right"===a.x?a.x:"left",y:"top"===a.y||"bottom"===a.y?a.y:"top"}};this.getImage=function(a,b){return cdn+"black_ribbon_"+a.y+"_"+a.x+".png"};this.createBlackRibbon=function(a){var b=document.createElement("img");b.src=getImage(a);b.style.position="fixed";b.style.width=70;b.style.zIndex="9999";"right"===a.x?b.style.right=0:b.style.left=
0;"bottom"===a.y?b.style.bottom=0:b.style.top=0;return b};this.render=function(){var a=getPosition(),a=createBlackRibbon(a);document.body.appendChild(a)};return{init:function(){render()}}}();BlackRibbon.init();
