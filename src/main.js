var console=function(n){return{log:function(o){n.log(o),customLog(o)},info:function(o){n.info(o),customLog(o)},warn:function(o){n.warn(o),customLog(o)},error:function(o){n.error(o),customLog(o)}}}(window.console);function customLog(n){null===document.getElementById("log4browserContainer")&&initializeLog(),document.getElementById("log4browserContainer").innerHTML+="- "+n+"\n"}function initializeLog(){if(null===document.getElementById("log4browserContainer")){var n=document.createElement("pre");n.setAttribute("id","log4browserContainer"),n.style.cssText="\n\t\tposition:absolute;\n\t\ttop:0px;\n\t\tleft:0px;\n\t\tcolor:greenyellow;\n\t\tpadding: 5px;\n\t\twhite-space: pre-wrap;\n\t\t",document.body.appendChild(n),window.onerror=function(n,o,t){return log("Error: \n"+n),!1}}}window.console=console;
const { createApp } = require('vue');
import App from "./App.vue";

createApp(App).mount("#app");
