/*
 tableExport.jquery.plugin
 Version 1.9.12
 Copyright (c) 2015-2018 hhurz, https://github.com/hhurz
 Original Work Copyright (c) 2014 Giri Raj
 Licensed under the MIT License
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(c,h,u){c instanceof String&&(c=String(c));for(var C=c.length,D=0;D<C;D++){var P=c[D];if(h.call(u,P,D,c))return{i:D,v:P}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,h,u){c!=Array.prototype&&c!=Object.prototype&&(c[h]=u.value)};
$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(c,h,u,C){if(h){u=$jscomp.global;c=c.split(".");for(C=0;C<c.length-1;C++){var D=c[C];D in u||(u[D]={});u=u[D]}c=c[c.length-1];C=u[c];h=h(C);h!=C&&null!=h&&$jscomp.defineProperty(u,c,{configurable:!0,writable:!0,value:h})}};
$jscomp.polyfill("Array.prototype.find",function(c){return c?c:function(c,u){return $jscomp.findInternal(this,c,u).v}},"es6","es3");
(function(c){c.fn.tableExport=function(h){function u(b){var d=[];C(b,"tbody").each(function(){d.push.apply(d,D(c(this),a.tbodySelector).toArray())});a.tfootSelector.length&&C(b,"tfoot").each(function(){d.push.apply(d,D(c(this),a.tfootSelector).toArray())});return d}function C(b,a){var d=b.parents("table").length;return b.find(a).filter(function(){return c(this).closest("table").parents("table").length===d})}function D(b,d){return b.find(d).filter(function(){return 0===a.maxNestedTables||c(this).find("table").length<
a.maxNestedTables&&c(this).parents("table").length<=a.maxNestedTables})}function P(b){var a=[];c(b).find("thead").first().find("th").each(function(b,d){void 0!==c(d).attr("data-field")?a[b]=c(d).attr("data-field"):a[b]=b.toString()});return a}function Q(b){var a="undefined"!==typeof b[0].cellIndex,e="undefined"!==typeof b[0].rowIndex,t=a||e?Ba(b):b.is(":visible"),g=b.data("tableexport-display");a&&"none"!==g&&"always"!==g&&(b=c(b[0].parentNode),e="undefined"!==typeof b[0].rowIndex,g=b.data("tableexport-display"));
e&&"none"!==g&&"always"!==g&&(g=b.closest("table").data("tableexport-display"));return"none"!==g&&(!0===t||"always"===g)}function Ba(b){var a=[];U&&(a=I.filter(function(){var a=!1;this.nodeType===b[0].nodeType&&("undefined"!==typeof this.rowIndex&&this.rowIndex===b[0].rowIndex?a=!0:"undefined"!==typeof this.cellIndex&&this.cellIndex===b[0].cellIndex&&"undefined"!==typeof this.parentNode.rowIndex&&"undefined"!==typeof b[0].parentNode.rowIndex&&this.parentNode.rowIndex===b[0].parentNode.rowIndex&&(a=
!0));return a}));return!1===U||0===a.length}function Ca(b,d,e){var t=!1;Q(b)?0<a.ignoreColumn.length&&(-1!==c.inArray(e,a.ignoreColumn)||-1!==c.inArray(e-d,a.ignoreColumn)||R.length>e&&"undefined"!==typeof R[e]&&-1!==c.inArray(R[e],a.ignoreColumn))&&(t=!0):t=!0;return t}function B(b,d,e,t,g){if("function"===typeof g){var l=!1;"function"===typeof a.onIgnoreRow&&(l=a.onIgnoreRow(c(b),e));if(!1===l&&-1===c.inArray(e,a.ignoreRow)&&-1===c.inArray(e-t,a.ignoreRow)&&Q(c(b))){var w=c(b).find(d),p=0;w.each(function(b){var a=
c(this),d,l=S(this),t=T(this);c.each(F,function(){if(e>=this.s.r&&e<=this.e.r&&p>=this.s.c&&p<=this.e.c)for(d=0;d<=this.e.c-this.s.c;++d)g(null,e,p++)});if(!1===Ca(a,w.length,b)){if(t||l)l=l||1,F.push({s:{r:e,c:p},e:{r:e+(t||1)-1,c:p+l-1}});g(this,e,p++)}if(l)for(d=0;d<l-1;++d)g(null,e,p++)});c.each(F,function(){if(e>=this.s.r&&e<=this.e.r&&p>=this.s.c&&p<=this.e.c)for(aa=0;aa<=this.e.c-this.s.c;++aa)g(null,e,p++)})}}}function na(b,d){if("string"===a.outputMode)return b.output();if("base64"===a.outputMode)return J(b.output());
if("window"===a.outputMode)window.URL=window.URL||window.webkitURL,window.open(window.URL.createObjectURL(b.output("blob")));else try{var e=b.output("blob");saveAs(e,a.fileName+".pdf")}catch(t){G(a.fileName+".pdf","data:application/pdf"+(d?"":";base64")+",",d?b.output("blob"):b.output())}}function oa(b,a,e){var d=0;"undefined"!==typeof e&&(d=e.colspan);if(0<=d){for(var g=b.width,c=b.textPos.x,w=a.table.columns.indexOf(a.column),p=1;p<d;p++)g+=a.table.columns[w+p].width;1<d&&("right"===b.styles.halign?
c=b.textPos.x+g-b.width:"center"===b.styles.halign&&(c=b.textPos.x+(g-b.width)/2));b.width=g;b.textPos.x=c;"undefined"!==typeof e&&1<e.rowspan&&(b.height*=e.rowspan);if("middle"===b.styles.valign||"bottom"===b.styles.valign)e=("string"===typeof b.text?b.text.split(/\r\n|\r|\n/g):b.text).length||1,2<e&&(b.textPos.y-=(2-1.15)/2*a.row.styles.fontSize*(e-2)/3);return!0}return!1}function pa(b,a,e){"undefined"!==typeof e.images&&a.each(function(){var a=c(this).children();if(c(this).is("img")){var d=qa(this.src);
e.images[d]={url:this.src,src:this.src}}"undefined"!==typeof a&&0<a.length&&pa(b,a,e)})}function Da(b,a){function d(b){if(b.url){var d=new Image;g=++l;d.crossOrigin="Anonymous";d.onerror=d.onload=function(){if(d.complete&&(0===d.src.indexOf("data:image/")&&(d.width=b.width||d.width||0,d.height=b.height||d.height||0),d.width+d.height)){var e=document.createElement("canvas"),c=e.getContext("2d");e.width=d.width;e.height=d.height;c.drawImage(d,0,0);b.src=e.toDataURL("image/jpeg")}--l||a(g)};d.src=b.url}}
var c,g=0,l=0;if("undefined"!==typeof b.images)for(c in b.images)b.images.hasOwnProperty(c)&&d(b.images[c]);(b=l)||(a(g),b=void 0);return b}function ra(b,d,e){d.each(function(){var d=c(this).children(),g=0;if(c(this).is("div")){var l=ba(K(this,"background-color"),[255,255,255]),w=ba(K(this,"border-top-color"),[0,0,0]),p=ca(this,"border-top-width",a.jspdf.unit),f=this.getBoundingClientRect(),h=this.offsetLeft*e.dw;g=this.offsetTop*e.dh;var k=f.width*e.dw;f=f.height*e.dh;e.doc.setDrawColor.apply(void 0,
w);e.doc.setFillColor.apply(void 0,l);e.doc.setLineWidth(p);e.doc.rect(b.x+h,b.y+g,k,f,p?"FD":"F")}else if(c(this).is("img")&&"undefined"!==typeof e.images&&(l=qa(this.src),l=e.images[l],"undefined"!==typeof l)){w=b.width/b.height;p=this.width/this.height;h=b.width;k=b.height;f=19.049976/25.4;p<=w?(k=Math.min(b.height,this.height),h=this.width*k/this.height):p>w&&(h=Math.min(b.width,this.width),k=this.height*h/this.width);h*=f;k*=f;k<b.height&&(g=(b.height-k)/2);try{e.doc.addImage(l.src,b.textPos.x,
b.y+g,h,k)}catch(Ha){}b.textPos.x+=h}"undefined"!==typeof d&&0<d.length&&ra(b,d,e)})}function sa(b,a,e){if("function"===typeof e.onAutotableText)e.onAutotableText(e.doc,b,a);else{var d=b.textPos.x,g=b.textPos.y,l={halign:b.styles.halign,valign:b.styles.valign};if(a.length){for(a=a[0];a.previousSibling;)a=a.previousSibling;for(var w=!1,p=!1;a;){var f=a.innerText||a.textContent||"";f=(f.length&&" "===f[0]?" ":"")+c.trim(f)+(1<f.length&&" "===f[f.length-1]?" ":"");c(a).is("br")&&(d=b.textPos.x,g+=e.doc.internal.getFontSize());
c(a).is("b")?w=!0:c(a).is("i")&&(p=!0);(w||p)&&e.doc.setFontType(w&&p?"bolditalic":w?"bold":"italic");var h=e.doc.getStringUnitWidth(f)*e.doc.internal.getFontSize();if(h){if("linebreak"===b.styles.overflow&&d>b.textPos.x&&d+h>b.textPos.x+b.width){if(0<=".,!%*;:=-".indexOf(f.charAt(0))){var k=f.charAt(0);h=e.doc.getStringUnitWidth(k)*e.doc.internal.getFontSize();d+h<=b.textPos.x+b.width&&(e.doc.autoTableText(k,d,g,l),f=f.substring(1,f.length));h=e.doc.getStringUnitWidth(f)*e.doc.internal.getFontSize()}d=
b.textPos.x;g+=e.doc.internal.getFontSize()}if("visible"!==b.styles.overflow)for(;f.length&&d+h>b.textPos.x+b.width;)f=f.substring(0,f.length-1),h=e.doc.getStringUnitWidth(f)*e.doc.internal.getFontSize();e.doc.autoTableText(f,d,g,l);d+=h}if(w||p)c(a).is("b")?w=!1:c(a).is("i")&&(p=!1),e.doc.setFontType(w||p?w?"bold":"italic":"normal");a=a.nextSibling}b.textPos.x=d;b.textPos.y=g}else e.doc.autoTableText(b.text,b.textPos.x,b.textPos.y,l)}}function da(b,a,e){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,
"\\$1"),"g"),e)}function ha(b){b=da(b||"0",a.numbers.html.thousandsSeparator,"");b=da(b,a.numbers.html.decimalMark,".");return"number"===typeof b||!1!==jQuery.isNumeric(b)?b:!1}function Ea(b){-1<b.indexOf("%")?(b=ha(b.replace(/%/g,"")),!1!==b&&(b/=100)):b=!1;return b}function z(b,d,e){var t="";if(null!==b){var g=c(b);if(g[0].hasAttribute("data-tableexport-value"))var l=(l=g.data("tableexport-value"))?l+"":"";else if(l=g.html(),"function"===typeof a.onCellHtmlData)l=a.onCellHtmlData(g,d,e,l);else if(""!==
l){var f=c.parseHTML(l),p=0,h=0;l="";c.each(f,function(){if(c(this).is("input"))l+=g.find("input").eq(p++).val();else if(c(this).is("select"))l+=g.find("select option:selected").eq(h++).text();else if("undefined"===typeof c(this).html())l+=c(this).text();else if(void 0===jQuery().bootstrapTable||!0!==c(this).hasClass("filterControl")&&0===c(b).parents(".detail-view").length)l+=c(this).html()})}if(!0===a.htmlContent)t=c.trim(l);else if(l&&""!==l)if(""!==c(b).data("tableexport-cellformat")){var k=l.replace(/\n/g,
"\u2028").replace(/<br\s*[\/]?>/gi,"\u2060"),m=c("<div/>").html(k).contents();f=!1;k="";c.each(m.text().split("\u2028"),function(b,a){0<b&&(k+=" ");k+=c.trim(a)});c.each(k.split("\u2060"),function(b,a){0<b&&(t+="\n");t+=c.trim(a).replace(/\u00AD/g,"")});if("json"===a.type||"excel"===a.type&&"xmlss"===a.mso.fileFormat||!1===a.numbers.output)f=ha(t),!1!==f&&(t=Number(f));else if(a.numbers.html.decimalMark!==a.numbers.output.decimalMark||a.numbers.html.thousandsSeparator!==a.numbers.output.thousandsSeparator)if(f=
ha(t),!1!==f){m=(""+f.substr(0>f?1:0)).split(".");1===m.length&&(m[1]="");var n=3<m[0].length?m[0].length%3:0;t=(0>f?"-":"")+(a.numbers.output.thousandsSeparator?(n?m[0].substr(0,n)+a.numbers.output.thousandsSeparator:"")+m[0].substr(n).replace(/(\d{3})(?=\d)/g,"$1"+a.numbers.output.thousandsSeparator):m[0])+(m[1].length?a.numbers.output.decimalMark+m[1]:"")}}else t=l;!0===a.escape&&(t=escape(t));"function"===typeof a.onCellData&&(t=a.onCellData(g,d,e,t))}return t}function ta(b){return!0===a.preventInjection&&
0<="=+-@".indexOf(b.charAt(0))?"'"+b:b}function Fa(b,a,e){return a+"-"+e.toLowerCase()}function ba(b,a){(b=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(b))&&(a=[parseInt(b[1]),parseInt(b[2]),parseInt(b[3])]);return a}function ua(b){var a=K(b,"text-align"),e=K(b,"font-weight"),c=K(b,"font-style"),g="";"start"===a&&(a="rtl"===K(b,"direction")?"right":"left");700<=e&&(g="bold");"italic"===c&&(g+=c);""===g&&(g="normal");a={style:{align:a,bcolor:ba(K(b,"background-color"),[255,255,255]),color:ba(K(b,
"color"),[0,0,0]),fstyle:g},colspan:S(b),rowspan:T(b)};null!==b&&(b=b.getBoundingClientRect(),a.rect={width:b.width,height:b.height});return a}function S(a){var b=c(a).data("tableexport-colspan");"undefined"===typeof b&&c(a).is("[colspan]")&&(b=c(a).attr("colspan"));return parseInt(b)||0}function T(a){var b=c(a).data("tableexport-rowspan");"undefined"===typeof b&&c(a).is("[rowspan]")&&(b=c(a).attr("rowspan"));return parseInt(b)||0}function K(a,d){try{return window.getComputedStyle?(d=d.replace(/([a-z])([A-Z])/,
Fa),window.getComputedStyle(a,null).getPropertyValue(d)):a.currentStyle?a.currentStyle[d]:a.style[d]}catch(e){}return""}function ca(a,d,e){d=K(a,d).match(/\d+/);if(null!==d){d=d[0];a=a.parentElement;var b=document.createElement("div");b.style.overflow="hidden";b.style.visibility="hidden";a.appendChild(b);b.style.width=100+e;e=100/b.offsetWidth;a.removeChild(b);return d*e}return 0}function ia(){if(!(this instanceof ia))return new ia;this.SheetNames=[];this.Sheets={}}function va(a){for(var b=new ArrayBuffer(a.length),
e=new Uint8Array(b),c=0;c!==a.length;++c)e[c]=a.charCodeAt(c)&255;return b}function Ga(a){for(var b={},e={s:{c:1E7,r:1E7},e:{c:0,r:0}},c=0;c!==a.length;++c)for(var g=0;g!==a[c].length;++g){e.s.r>c&&(e.s.r=c);e.s.c>g&&(e.s.c=g);e.e.r<c&&(e.e.r=c);e.e.c<g&&(e.e.c=g);var l={v:a[c][g]};if(null!==l.v){var f=XLSX.utils.encode_cell({c:g,r:c});if("number"===typeof l.v)l.t="n";else if("boolean"===typeof l.v)l.t="b";else if(l.v instanceof Date){l.t="n";l.z=XLSX.SSF._table[14];var p=l;var h=(Date.parse(l.v)-
new Date(Date.UTC(1899,11,30)))/864E5;p.v=h}else l.t="s";b[f]=l}}1E7>e.s.c&&(b["!ref"]=XLSX.utils.encode_range(e));return b}function qa(a){var b=0,c;if(0===a.length)return b;var f=0;for(c=a.length;f<c;f++){var g=a.charCodeAt(f);b=(b<<5)-b+g;b|=0}return b}function G(a,c,e){var b=window.navigator.userAgent;if(!1!==a&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(new Blob([e]),a);else if(!1!==a&&(0<b.indexOf("MSIE ")||b.match(/Trident.*rv\:11\./))){if(c=document.createElement("iframe")){document.body.appendChild(c);
c.setAttribute("style","display:none");c.contentDocument.open("txt/plain","replace");c.contentDocument.write(e);c.contentDocument.close();c.contentDocument.focus();switch(a.substr(a.lastIndexOf(".")+1)){case "doc":case "json":case "png":case "pdf":case "xls":case "xlsx":a+=".txt"}c.contentDocument.execCommand("SaveAs",!0,a);document.body.removeChild(c)}}else{var d=document.createElement("a");if(d){var l=null;d.style.display="none";!1!==a?d.download=a:d.target="_blank";"object"===typeof e?(window.URL=
window.URL||window.webkitURL,l=window.URL.createObjectURL(e),d.href=l):0<=c.toLowerCase().indexOf("base64,")?d.href=c+J(e):d.href=c+encodeURIComponent(e);document.body.appendChild(d);if(document.createEvent)null===ea&&(ea=document.createEvent("MouseEvents")),ea.initEvent("click",!0,!1),d.dispatchEvent(ea);else if(document.createEventObject)d.fireEvent("onclick");else if("function"===typeof d.onclick)d.onclick();setTimeout(function(){l&&window.URL.revokeObjectURL(l);document.body.removeChild(d)},100)}}}
function J(a){var b,c="",f=0;if("string"===typeof a){a=a.replace(/\x0d\x0a/g,"\n");var g="";for(b=0;b<a.length;b++){var l=a.charCodeAt(b);128>l?g+=String.fromCharCode(l):(127<l&&2048>l?g+=String.fromCharCode(l>>6|192):(g+=String.fromCharCode(l>>12|224),g+=String.fromCharCode(l>>6&63|128)),g+=String.fromCharCode(l&63|128))}a=g}for(;f<a.length;){var h=a.charCodeAt(f++);g=a.charCodeAt(f++);b=a.charCodeAt(f++);l=h>>2;h=(h&3)<<4|g>>4;var p=(g&15)<<2|b>>6;var k=b&63;isNaN(g)?p=k=64:isNaN(b)&&(k=64);c=c+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)}return c}var a={csvEnclosure:'"',csvSeparator:",",csvUseBOM:!0,displayTableName:!1,escape:!1,exportHiddenCells:!1,fileName:"tableExport",htmlContent:!1,ignoreColumn:[],ignoreRow:[],jsonScope:"all",
jspdf:{orientation:"p",unit:"pt",format:"a4",margins:{left:20,right:10,top:10,bottom:10},onDocCreated:null,autotable:{styles:{cellPadding:2,rowHeight:12,fontSize:8,fillColor:255,textColor:50,fontStyle:"normal",overflow:"ellipsize",halign:"left",valign:"middle"},headerStyles:{fillColor:[52,73,94],textColor:255,fontStyle:"bold",halign:"center"},alternateRowStyles:{fillColor:245},tableExport:{doc:null,onAfterAutotable:null,onBeforeAutotable:null,onAutotableText:null,onTable:null,outputImages:!0}}},maxNestedTables:1,
mso:{fileFormat:"xlshtml",onMsoNumberFormat:null,pageFormat:"a4",pageOrientation:"portrait",rtl:!1,styles:[],worksheetName:""},numbers:{html:{decimalMark:".",thousandsSeparator:","},output:{decimalMark:".",thousandsSeparator:","}},onCellData:null,onCellHtmlData:null,onIgnoreRow:null,outputMode:"file",pdfmake:{enabled:!1,docDefinition:{pageOrientation:"portrait",defaultStyle:{font:"Roboto"}},fonts:{}},preventInjection:!0,tbodySelector:"tr",tfootSelector:"tr",theadSelector:"tr",tableName:"Table",type:"csv"},
L={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,
1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]},v=this,ea=null,q=[],r=[],m=0,n="",R=[],F=[],I=[],U=!1;c.extend(!0,a,h);"xlsx"===a.type&&(a.mso.fileFormat=a.type,a.type="excel");"undefined"!==typeof a.excelFileFormat&&"undefined"===a.mso.fileFormat&&
(a.mso.fileFormat=a.excelFileFormat);"undefined"!==typeof a.excelPageFormat&&"undefined"===a.mso.pageFormat&&(a.mso.pageFormat=a.excelPageFormat);"undefined"!==typeof a.excelPageOrientation&&"undefined"===a.mso.pageOrientation&&(a.mso.pageOrientation=a.excelPageOrientation);"undefined"!==typeof a.excelRTL&&"undefined"===a.mso.rtl&&(a.mso.rtl=a.excelRTL);"undefined"!==typeof a.excelstyles&&"undefined"===a.mso.styles&&(a.mso.styles=a.excelstyles);"undefined"!==typeof a.onMsoNumberFormat&&"undefined"===
a.mso.onMsoNumberFormat&&(a.mso.onMsoNumberFormat=a.onMsoNumberFormat);"undefined"!==typeof a.worksheetName&&"undefined"===a.mso.worksheetName&&(a.mso.worksheetName=a.worksheetName);a.mso.pageOrientation="l"===a.mso.pageOrientation.substr(0,1)?"landscape":"portrait";a.maxNestedTables=0<=a.maxNestedTables?a.maxNestedTables:1;R=P(v);if("csv"===a.type||"tsv"===a.type||"txt"===a.type){var M="",X=0;F=[];m=0;var ja=function(b,d,e){b.each(function(){n="";B(this,d,m,e+b.length,function(b,c,d){var e=n,g="";
if(null!==b)if(b=z(b,c,d),c=null===b||""===b?"":b.toString(),"tsv"===a.type)b instanceof Date&&b.toLocaleString(),g=da(c,"\t"," ");else if(b instanceof Date)g=a.csvEnclosure+b.toLocaleString()+a.csvEnclosure;else if(g=ta(c),g=da(g,a.csvEnclosure,a.csvEnclosure+a.csvEnclosure),0<=g.indexOf(a.csvSeparator)||/[\r\n ]/g.test(g))g=a.csvEnclosure+g+a.csvEnclosure;n=e+(g+("tsv"===a.type?"\t":a.csvSeparator))});n=c.trim(n).substring(0,n.length-1);0<n.length&&(0<M.length&&(M+="\n"),M+=n);m++});return b.length};
X+=ja(c(v).find("thead").first().find(a.theadSelector),"th,td",X);C(c(v),"tbody").each(function(){X+=ja(D(c(this),a.tbodySelector),"td,th",X)});a.tfootSelector.length&&ja(c(v).find("tfoot").first().find(a.tfootSelector),"td,th",X);M+="\n";if("string"===a.outputMode)return M;if("base64"===a.outputMode)return J(M);if("window"===a.outputMode){G(!1,"data:text/"+("csv"===a.type?"csv":"plain")+";charset=utf-8,",M);return}try{var A=new Blob([M],{type:"text/"+("csv"===a.type?"csv":"plain")+";charset=utf-8"});
saveAs(A,a.fileName+"."+a.type,"csv"!==a.type||!1===a.csvUseBOM)}catch(b){G(a.fileName+"."+a.type,"data:text/"+("csv"===a.type?"csv":"plain")+";charset=utf-8,"+("csv"===a.type&&a.csvUseBOM?"\ufeff":""),M)}}else if("sql"===a.type){m=0;F=[];var x="INSERT INTO `"+a.tableName+"` (";q=c(v).find("thead").first().find(a.theadSelector);q.each(function(){B(this,"th,td",m,q.length,function(a,c,e){x+="'"+z(a,c,e)+"',"});m++;x=c.trim(x).substring(0,x.length-1)});x+=") VALUES ";r=u(c(v));c(r).each(function(){n=
"";B(this,"td,th",m,q.length+r.length,function(a,c,e){n+="'"+z(a,c,e)+"',"});3<n.length&&(x+="("+n,x=c.trim(x).substring(0,x.length-1),x+="),");m++});x=c.trim(x).substring(0,x.length-1);x+=";";if("string"===a.outputMode)return x;if("base64"===a.outputMode)return J(x);try{A=new Blob([x],{type:"text/plain;charset=utf-8"}),saveAs(A,a.fileName+".sql")}catch(b){G(a.fileName+".sql","data:application/sql;charset=utf-8,",x)}}else if("json"===a.type){var V=[];F=[];q=c(v).find("thead").first().find(a.theadSelector);
q.each(function(){var a=[];B(this,"th,td",m,q.length,function(b,c,f){a.push(z(b,c,f))});V.push(a)});var ka=[];r=u(c(v));c(r).each(function(){var a={},d=0;B(this,"td,th",m,q.length+r.length,function(b,c,g){V.length?a[V[V.length-1][d]]=z(b,c,g):a[d]=z(b,c,g);d++});!1===c.isEmptyObject(a)&&ka.push(a);m++});h="";h="head"===a.jsonScope?JSON.stringify(V):"data"===a.jsonScope?JSON.stringify(ka):JSON.stringify({header:V,data:ka});if("string"===a.outputMode)return h;if("base64"===a.outputMode)return J(h);
try{A=new Blob([h],{type:"application/json;charset=utf-8"}),saveAs(A,a.fileName+".json")}catch(b){G(a.fileName+".json","data:application/json;charset=utf-8;base64,",h)}}else if("xml"===a.type){m=0;F=[];var N='<?xml version="1.0" encoding="utf-8"?>';N+="<tabledata><fields>";q=c(v).find("thead").first().find(a.theadSelector);q.each(function(){B(this,"th,td",m,q.length,function(a,c,e){N+="<field>"+z(a,c,e)+"</field>"});m++});N+="</fields><data>";var wa=1;r=u(c(v));c(r).each(function(){var a=1;n="";B(this,
"td,th",m,q.length+r.length,function(b,c,f){n+="<column-"+a+">"+z(b,c,f)+"</column-"+a+">";a++});0<n.length&&"<column-1></column-1>"!==n&&(N+='<row id="'+wa+'">'+n+"</row>",wa++);m++});N+="</data></tabledata>";if("string"===a.outputMode)return N;if("base64"===a.outputMode)return J(N);try{A=new Blob([N],{type:"application/xml;charset=utf-8"}),saveAs(A,a.fileName+".xml")}catch(b){G(a.fileName+".xml","data:application/xml;charset=utf-8;base64,",N)}}else if("excel"===a.type&&"xmlss"===a.mso.fileFormat){var la=
[],E=[];c(v).filter(function(){return Q(c(this))}).each(function(){function b(a,b,d){var e=[];c(a).each(function(){var b=0,g=0;n="";B(this,"td,th",m,d+a.length,function(a,d,l){if(null!==a){var f="";d=z(a,d,l);l="String";if(!1!==jQuery.isNumeric(d))l="Number";else{var h=Ea(d);!1!==h&&(d=h,l="Number",f+=' ss:StyleID="pct1"')}"Number"!==l&&(d=d.replace(/\n/g,"<br>"));h=S(a);a=T(a);c.each(e,function(){if(m>=this.s.r&&m<=this.e.r&&g>=this.s.c&&g<=this.e.c)for(var a=0;a<=this.e.c-this.s.c;++a)g++,b++});
if(a||h)a=a||1,h=h||1,e.push({s:{r:m,c:g},e:{r:m+a-1,c:g+h-1}});1<h&&(f+=' ss:MergeAcross="'+(h-1)+'"',g+=h-1);1<a&&(f+=' ss:MergeDown="'+(a-1)+'" ss:StyleID="rsp1"');0<b&&(f+=' ss:Index="'+(g+1)+'"',b=0);n+="<Cell"+f+'><Data ss:Type="'+l+'">'+c("<div />").text(d).html()+"</Data></Cell>\r";g++}});0<n.length&&(H+='<Row ss:AutoFitHeight="0">\r'+n+"</Row>\r");m++});return a.length}var d=c(this),e="";"string"===typeof a.mso.worksheetName&&a.mso.worksheetName.length?e=a.mso.worksheetName+" "+(E.length+
1):"undefined"!==typeof a.mso.worksheetName[E.length]&&(e=a.mso.worksheetName[E.length]);e.length||(e=d.find("caption").text()||"");e.length||(e="Table "+(E.length+1));e=c.trim(e.replace(/[\\\/[\]*:?'"]/g,"").substring(0,31));E.push(c("<div />").text(e).html());!1===a.exportHiddenCells&&(I=d.find("tr, th, td").filter(":hidden"),U=0<I.length);m=0;R=P(this);H="<Table>\r";e=0;e+=b(d.find("thead").first().find(a.theadSelector),"th,td",e);b(u(d),"td,th",e);H+="</Table>\r";la.push(H)});h={};for(var y={},
k,O,W=0,aa=E.length;W<aa;W++)k=E[W],O=h[k],O=h[k]=null==O?1:O+1,2===O&&(E[y[k]]=E[y[k]].substring(0,29)+"-1"),1<h[k]?E[W]=E[W].substring(0,29)+"-"+h[k]:y[k]=W;h='<?xml version="1.0" encoding="UTF-8"?>\r<?mso-application progid="Excel.Sheet"?>\r<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"\r xmlns:o="urn:schemas-microsoft-com:office:office"\r xmlns:x="urn:schemas-microsoft-com:office:excel"\r xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\r xmlns:html="http://www.w3.org/TR/REC-html40">\r<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">\r  <Created>'+
(new Date).toISOString()+'</Created>\r</DocumentProperties>\r<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">\r  <AllowPNG/>\r</OfficeDocumentSettings>\r<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">\r  <WindowHeight>9000</WindowHeight>\r  <WindowWidth>13860</WindowWidth>\r  <WindowTopX>0</WindowTopX>\r  <WindowTopY>0</WindowTopY>\r  <ProtectStructure>False</ProtectStructure>\r  <ProtectWindows>False</ProtectWindows>\r</ExcelWorkbook>\r<Styles>\r  <Style ss:ID="Default" ss:Name="Normal">\r    <Alignment ss:Vertical="Bottom"/>\r    <Borders/>\r    <Font/>\r    <Interior/>\r    <NumberFormat/>\r    <Protection/>\r  </Style>\r  <Style ss:ID="rsp1">\r    <Alignment ss:Vertical="Center"/>\r  </Style>\r  <Style ss:ID="pct1">\r    <NumberFormat ss:Format="Percent"/>\r  </Style>\r</Styles>\r';
for(y=0;y<la.length;y++)h+='<Worksheet ss:Name="'+E[y]+'" ss:RightToLeft="'+(a.mso.rtl?"1":"0")+'">\r'+la[y],h=a.mso.rtl?h+'<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">\r<DisplayRightToLeft/>\r</WorksheetOptions>\r':h+'<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"/>\r',h+="</Worksheet>\r";h+="</Workbook>\r";if("string"===a.outputMode)return h;if("base64"===a.outputMode)return J(h);try{A=new Blob([h],{type:"application/xml;charset=utf-8"}),saveAs(A,a.fileName+
".xml")}catch(b){G(a.fileName+".xml","data:application/xml;charset=utf-8;base64,",h)}}else if("excel"===a.type&&"xlsx"===a.mso.fileFormat){var xa=[],ma=[];m=0;r=c(v).find("thead").first().find(a.theadSelector).toArray();r.push.apply(r,u(c(v)));c(r).each(function(){var b=[];B(this,"th,td",m,r.length,function(d,e,f){if("undefined"!==typeof d&&null!==d){f=z(d,e,f);e=S(d);d=T(d);c.each(ma,function(){if(m>=this.s.r&&m<=this.e.r&&b.length>=this.s.c&&b.length<=this.e.c)for(var a=0;a<=this.e.c-this.s.c;++a)b.push(null)});
if(d||e)e=e||1,ma.push({s:{r:m,c:b.length},e:{r:m+(d||1)-1,c:b.length+e-1}});"function"!==typeof a.onCellData&&""!==f&&f===+f&&(f=+f);b.push(""!==f?f:null);if(e)for(d=0;d<e-1;++d)b.push(null)}});xa.push(b);m++});h=new ia;y=Ga(xa);y["!merges"]=ma;XLSX.utils.book_append_sheet(h,y,a.mso.worksheetName);h=XLSX.write(h,{type:"binary",bookType:a.mso.fileFormat,bookSST:!1});try{A=new Blob([va(h)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),saveAs(A,a.fileName+
"."+a.mso.fileFormat)}catch(b){G(a.fileName+"."+a.mso.fileFormat,"data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8,",va(h))}}else if("excel"===a.type||"xls"===a.type||"word"===a.type||"doc"===a.type){h="excel"===a.type||"xls"===a.type?"excel":"word";y="excel"===h?"xls":"doc";k='xmlns:x="urn:schemas-microsoft-com:office:'+h+'"';var H="",Y="";c(v).filter(function(){return Q(c(this))}).each(function(){var b=c(this);""===Y&&(Y=a.mso.worksheetName||b.find("caption").text()||
"Table",Y=c.trim(Y.replace(/[\\\/[\]*:?'"]/g,"").substring(0,31)));!1===a.exportHiddenCells&&(I=b.find("tr, th, td").filter(":hidden"),U=0<I.length);m=0;F=[];R=P(this);H+="<table><thead>";q=b.find("thead").first().find(a.theadSelector);q.each(function(){n="";B(this,"th,td",m,q.length,function(b,e,f){if(null!==b){var d="";n+="<th";for(var l in a.mso.styles)if(a.mso.styles.hasOwnProperty(l)){var h=c(b).css(a.mso.styles[l]);""!==h&&"0px none rgb(0, 0, 0)"!==h&&"rgba(0, 0, 0, 0)"!==h&&(d+=""===d?'style="':
";",d+=a.mso.styles[l]+":"+h)}""!==d&&(n+=" "+d+'"');d=S(b);0<d&&(n+=' colspan="'+d+'"');d=T(b);0<d&&(n+=' rowspan="'+d+'"');n+=">"+z(b,e,f)+"</th>"}});0<n.length&&(H+="<tr>"+n+"</tr>");m++});H+="</thead><tbody>";r=u(b);c(r).each(function(){var b=c(this);n="";B(this,"td,th",m,q.length+r.length,function(d,f,g){if(null!==d){var e=z(d,f,g),h="",k=c(d).data("tableexport-msonumberformat");"undefined"===typeof k&&"function"===typeof a.mso.onMsoNumberFormat&&(k=a.mso.onMsoNumberFormat(d,f,g));"undefined"!==
typeof k&&""!==k&&(h="style=\"mso-number-format:'"+k+"'");for(var m in a.mso.styles)a.mso.styles.hasOwnProperty(m)&&(k=c(d).css(a.mso.styles[m]),""===k&&(k=b.css(a.mso.styles[m])),""!==k&&"0px none rgb(0, 0, 0)"!==k&&"rgba(0, 0, 0, 0)"!==k&&(h+=""===h?'style="':";",h+=a.mso.styles[m]+":"+k));n+="<td";""!==h&&(n+=" "+h+'"');f=S(d);0<f&&(n+=' colspan="'+f+'"');d=T(d);0<d&&(n+=' rowspan="'+d+'"');"string"===typeof e&&""!==e&&(e=ta(e),e=e.replace(/\n/g,"<br>"));n+=">"+e+"</td>"}});0<n.length&&(H+="<tr>"+
n+"</tr>");m++});a.displayTableName&&(H+="<tr><td></td></tr><tr><td></td></tr><tr><td>"+z(c("<p>"+a.tableName+"</p>"))+"</td></tr>");H+="</tbody></table>"});k='<html xmlns:o="urn:schemas-microsoft-com:office:office" '+k+' xmlns="http://www.w3.org/TR/REC-html40">'+('<meta http-equiv="content-type" content="application/vnd.ms-'+h+'; charset=UTF-8">')+"<head>";"excel"===h&&(k+="\x3c!--[if gte mso 9]>",k+="<xml>",k+="<x:ExcelWorkbook>",k+="<x:ExcelWorksheets>",k+="<x:ExcelWorksheet>",k+="<x:Name>",k+=
Y,k+="</x:Name>",k+="<x:WorksheetOptions>",k+="<x:DisplayGridlines/>",a.mso.rtl&&(k+="<x:DisplayRightToLeft/>"),k+="</x:WorksheetOptions>",k+="</x:ExcelWorksheet>",k+="</x:ExcelWorksheets>",k+="</x:ExcelWorkbook>",k+="</xml>",k+="<![endif]--\x3e");k+="<style>";k+="@page { size:"+a.mso.pageOrientation+"; mso-page-orientation:"+a.mso.pageOrientation+"; }";k+="@page Section1 {size:"+L[a.mso.pageFormat][0]+"pt "+L[a.mso.pageFormat][1]+"pt";k+="; margin:1.0in 1.25in 1.0in 1.25in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}";
k+="div.Section1 {page:Section1;}";k+="@page Section2 {size:"+L[a.mso.pageFormat][1]+"pt "+L[a.mso.pageFormat][0]+"pt";k+=";mso-page-orientation:"+a.mso.pageOrientation+";margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}";k+="div.Section2 {page:Section2;}";k+="br {mso-data-placement:same-cell;}";k+="</style>";k+="</head>";k+="<body>";k+='<div class="Section'+("landscape"===a.mso.pageOrientation?"2":"1")+'">';k+=H;k+="</div>";k+="</body>";k+="</html>";
if("string"===a.outputMode)return k;if("base64"===a.outputMode)return J(k);try{A=new Blob([k],{type:"application/vnd.ms-"+a.type}),saveAs(A,a.fileName+"."+y)}catch(b){G(a.fileName+"."+y,"data:application/vnd.ms-"+h+";base64,",k)}}else if("png"===a.type)html2canvas(c(v)[0]).then(function(b){b=b.toDataURL();for(var c=atob(b.substring(22)),e=new ArrayBuffer(c.length),f=new Uint8Array(e),g=0;g<c.length;g++)f[g]=c.charCodeAt(g);if("string"===a.outputMode)return c;if("base64"===a.outputMode)return J(b);
if("window"===a.outputMode)window.open(b);else try{A=new Blob([e],{type:"image/png"}),saveAs(A,a.fileName+".png")}catch(l){G(a.fileName+".png","data:image/png,",A)}});else if("pdf"===a.type)if(!0===a.pdfmake.enabled){h=[];var ya=[];m=0;F=[];y=function(a,d,e){var b=0;c(a).each(function(){var a=[];B(this,d,m,e,function(b,c,d){if("undefined"!==typeof b&&null!==b){var e=S(b),g=T(b);b=z(b,c,d)||" ";1<e||1<g?a.push({colSpan:e||1,rowSpan:g||1,text:b}):a.push(b)}else a.push(" ")});a.length&&ya.push(a);b<
a.length&&(b=a.length);m++});return b};q=c(this).find("thead").first().find(a.theadSelector);k=y(q,"th,td",q.length);for(O=h.length;O<k;O++)h.push("*");r=u(c(this));y(r,"th,td",q.length+r.length);h={content:[{table:{headerRows:q.length,widths:h,body:ya}}]};c.extend(!0,h,a.pdfmake.docDefinition);pdfMake.fonts={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Medium.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-MediumItalic.ttf"}};c.extend(!0,pdfMake.fonts,a.pdfmake.fonts);pdfMake.createPdf(h).getBuffer(function(b){try{var c=
new Blob([b],{type:"application/pdf"});saveAs(c,a.fileName+".pdf")}catch(e){G(a.fileName+".pdf","data:application/pdf;base64,",b)}})}else if(!1===a.jspdf.autotable){h={dim:{w:ca(c(v).first().get(0),"width","mm"),h:ca(c(v).first().get(0),"height","mm")},pagesplit:!1};var za=new jsPDF(a.jspdf.orientation,a.jspdf.unit,a.jspdf.format);za.addHTML(c(v).first(),a.jspdf.margins.left,a.jspdf.margins.top,h,function(){na(za,!1)})}else{var f=a.jspdf.autotable.tableExport;if("string"===typeof a.jspdf.format&&
"bestfit"===a.jspdf.format.toLowerCase()){var fa="",Z="",Aa=0;c(v).each(function(){if(Q(c(this))){var a=ca(c(this).get(0),"width","pt");if(a>Aa){a>L.a0[0]&&(fa="a0",Z="l");for(var d in L)L.hasOwnProperty(d)&&L[d][1]>a&&(fa=d,Z="l",L[d][0]>a&&(Z="p"));Aa=a}}});a.jspdf.format=""===fa?"a4":fa;a.jspdf.orientation=""===Z?"w":Z}if(null==f.doc&&(f.doc=new jsPDF(a.jspdf.orientation,a.jspdf.unit,a.jspdf.format),"function"===typeof a.jspdf.onDocCreated))a.jspdf.onDocCreated(f.doc);!0===f.outputImages&&(f.images=
{});"undefined"!==typeof f.images&&(c(v).filter(function(){return Q(c(this))}).each(function(){var b=0;F=[];!1===a.exportHiddenCells&&(I=c(this).find("tr, th, td").filter(":hidden"),U=0<I.length);q=c(this).find("thead").find(a.theadSelector);r=u(c(this));c(r).each(function(){B(this,"td,th",q.length+b,q.length+r.length,function(a){if("undefined"!==typeof a&&null!==a){var b=c(a).children();"undefined"!==typeof b&&0<b.length&&pa(a,b,f)}});b++})}),q=[],r=[]);Da(f,function(){c(v).filter(function(){return Q(c(this))}).each(function(){var b;
m=0;F=[];!1===a.exportHiddenCells&&(I=c(this).find("tr, th, td").filter(":hidden"),U=0<I.length);R=P(this);f.columns=[];f.rows=[];f.rowoptions={};if("function"===typeof f.onTable&&!1===f.onTable(c(this),a))return!0;a.jspdf.autotable.tableExport=null;var d=c.extend(!0,{},a.jspdf.autotable);a.jspdf.autotable.tableExport=f;d.margin={};c.extend(!0,d.margin,a.jspdf.margins);d.tableExport=f;"function"!==typeof d.beforePageContent&&(d.beforePageContent=function(a){if(1===a.pageCount){var b=a.table.rows.concat(a.table.headerRow);
c.each(b,function(){0<this.height&&(this.height+=(2-1.15)/2*this.styles.fontSize,a.table.height+=(2-1.15)/2*this.styles.fontSize)})}});"function"!==typeof d.createdHeaderCell&&(d.createdHeaderCell=function(a,b){a.styles=c.extend({},b.row.styles);if("undefined"!==typeof f.columns[b.column.dataKey]){var e=f.columns[b.column.dataKey];if("undefined"!==typeof e.rect){a.contentWidth=e.rect.width;if("undefined"===typeof f.heightRatio||0===f.heightRatio){var g=b.row.raw[b.column.dataKey].rowspan?b.row.raw[b.column.dataKey].rect.height/
b.row.raw[b.column.dataKey].rowspan:b.row.raw[b.column.dataKey].rect.height;f.heightRatio=a.styles.rowHeight/g}g=b.row.raw[b.column.dataKey].rect.height*f.heightRatio;g>a.styles.rowHeight&&(a.styles.rowHeight=g)}"undefined"!==typeof e.style&&!0!==e.style.hidden&&(a.styles.halign=e.style.align,"inherit"===d.styles.fillColor&&(a.styles.fillColor=e.style.bcolor),"inherit"===d.styles.textColor&&(a.styles.textColor=e.style.color),"inherit"===d.styles.fontStyle&&(a.styles.fontStyle=e.style.fstyle))}});
"function"!==typeof d.createdCell&&(d.createdCell=function(a,b){b=f.rowoptions[b.row.index+":"+b.column.dataKey];"undefined"!==typeof b&&"undefined"!==typeof b.style&&!0!==b.style.hidden&&(a.styles.halign=b.style.align,"inherit"===d.styles.fillColor&&(a.styles.fillColor=b.style.bcolor),"inherit"===d.styles.textColor&&(a.styles.textColor=b.style.color),"inherit"===d.styles.fontStyle&&(a.styles.fontStyle=b.style.fstyle))});"function"!==typeof d.drawHeaderCell&&(d.drawHeaderCell=function(a,b){var c=
f.columns[b.column.dataKey];return(!0!==c.style.hasOwnProperty("hidden")||!0!==c.style.hidden)&&0<=c.rowIndex?oa(a,b,c):!1});"function"!==typeof d.drawCell&&(d.drawCell=function(a,b){var c=f.rowoptions[b.row.index+":"+b.column.dataKey];if(oa(a,b,c))if(f.doc.rect(a.x,a.y,a.width,a.height,a.styles.fillStyle),"undefined"!==typeof c&&"undefined"!==typeof c.kids&&0<c.kids.length){b=a.height/c.rect.height;if(b>f.dh||"undefined"===typeof f.dh)f.dh=b;f.dw=a.width/c.rect.width;b=a.textPos.y;ra(a,c.kids,f);
a.textPos.y=b;sa(a,c.kids,f)}else sa(a,{},f);return!1});f.headerrows=[];q=c(this).find("thead").find(a.theadSelector);q.each(function(){b=0;f.headerrows[m]=[];B(this,"th,td",m,q.length,function(a,c,d){var e=ua(a);e.title=z(a,c,d);e.key=b++;e.rowIndex=m;f.headerrows[m].push(e)});m++});if(0<m)for(var e=m-1;0<=e;)c.each(f.headerrows[e],function(){var a=this;0<e&&null===this.rect&&(a=f.headerrows[e-1][this.key]);null!==a&&0<=a.rowIndex&&(!0!==a.style.hasOwnProperty("hidden")||!0!==a.style.hidden)&&f.columns.push(a)}),
e=0<f.columns.length?-1:e-1;var h=0;r=[];r=u(c(this));c(r).each(function(){var a=[];b=0;B(this,"td,th",m,q.length+r.length,function(d,e,g){if("undefined"===typeof f.columns[b]){var k={title:"",key:b,style:{hidden:!0}};f.columns.push(k)}"undefined"!==typeof d&&null!==d?(k=ua(d),k.kids=c(d).children()):(k=c.extend(!0,{},f.rowoptions[h+":"+(b-1)]),k.colspan=-1);f.rowoptions[h+":"+b++]=k;a.push(z(d,e,g))});a.length&&(f.rows.push(a),h++);m++});if("function"===typeof f.onBeforeAutotable)f.onBeforeAutotable(c(this),
f.columns,f.rows,d);f.doc.autoTable(f.columns,f.rows,d);if("function"===typeof f.onAfterAutotable)f.onAfterAutotable(c(this),d);a.jspdf.autotable.startY=f.doc.autoTableEndPosY()+d.margin.top});na(f.doc,"undefined"!==typeof f.images&&!1===jQuery.isEmptyObject(f.images));"undefined"!==typeof f.headerrows&&(f.headerrows.length=0);"undefined"!==typeof f.columns&&(f.columns.length=0);"undefined"!==typeof f.rows&&(f.rows.length=0);delete f.doc;f.doc=null})}return this}})(jQuery);