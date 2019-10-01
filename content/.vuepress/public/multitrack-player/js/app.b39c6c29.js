(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/multitrack-player/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a55":function(t,e,a){"use strict";var i=a("4dcd"),n=a.n(i);n.a},"26d4":function(t,e,a){},"3ffa":function(t,e,a){"use strict";var i=a("e4fa"),n=a.n(i);n.a},"4dcd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.loading?a("VProgressLinear",{attrs:{indeterminate:""}}):a("VApp",[a("VAppBar",{staticClass:"app-bar",attrs:{height:"auto"}},[a("v-toolbar-title",{staticClass:"headline d-none d-md-flex"},[t._v("\n        Multitrack Player\n      ")]),a("Controls")],1),a("v-content",[a("router-view")],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VRow",{attrs:{justify:"end",align:"center"}},[a("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("playPause")}}},[a("VIcon",[t._v(t._s(t.playPauseIcon))])],1),a("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("stop")}}},[a("VIcon",[t._v(t._s(t.mdiStop))])],1),a("VBtn",{attrs:{text:"",icon:"",outlined:t.$store.state.clickActive},on:{click:function(e){return t.$store.dispatch("toggleClickActive")}}},[a("VIcon",[t._v(t._s(t.mdiMetronome))])],1),a("VTextField",{staticClass:"input-thin",attrs:{"single-line":"","hide-details":""},model:{value:t.clickBpm,callback:function(e){t.clickBpm=e},expression:"clickBpm"}}),a("VTextField",{staticClass:"input-thin",attrs:{"single-line":"","hide-details":""},model:{value:t.clickTimeSignature,callback:function(e){t.clickTimeSignature=e},expression:"clickTimeSignature"}}),a("Clock"),a("VSlider",{staticClass:"gain",attrs:{"hide-details":"",min:"0",max:"1.25",step:"0.01"},model:{value:t.gain,callback:function(e){t.gain=e},expression:"gain"}}),a("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("toggleSettingsDialog")}}},[a("VIcon",[t._v(t._s(t.mdiWrench))])],1),a("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("toggleAboutDialog")}}},[a("VIcon",[t._v(t._s(t.mdiInformation))])],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VRow",{staticClass:"text-center container"},[a("VCol",{attrs:{cols:"3"}},[t._v(t._s(t.minutes))]),a("VCol",{attrs:{cols:"1"}},[t._v(":")]),a("VCol",{attrs:{cols:"3"}},[t._v(t._s(t.seconds))]),a("VCol",{attrs:{cols:"1"}},[t._v(":")]),a("VCol",{attrs:{cols:"3"}},[t._v(t._s(t.milliseconds))])],1)},l=[],u={computed:{playPosition(){return this.$store.state.playPosition},minutes(){return Math.floor(this.playPosition/60)},seconds(){return Math.floor(this.playPosition%60)},milliseconds(){return Math.floor(this.playPosition%1*10)}}},d=u,p=(a("0a55"),a("2877")),m=a("6544"),k=a.n(m),g=a("62ad"),h=a("0fd9"),f=Object(p["a"])(d,c,l,!1,null,"08def8a6",null),v=f.exports;k()(f,{VCol:g["a"],VRow:h["a"]});var V=a("94ed"),b={components:{Clock:v},data(){return{mdiStop:V["c"],mdiMetronome:V["b"],mdiWrench:V["d"],mdiInformation:V["a"]}},computed:{playPauseIcon(){return{playing:"mdi-pause",paused:"mdi-play",stopped:"mdi-play"}[this.$store.state.playState]},gain:{get(){return this.$store.state.masterGainValue},set(t){this.$store.dispatch("setMasterGainValue",t)}},clickBpm:{get(){return this.$store.state.clickBpm},set(t){this.$store.dispatch("setClickBpm",t)}},clickTimeSignature:{get(){const{beats:t,unit:e}=this.$store.state.clickTimeSignature;return`${t}/${e}`},set(t){const[e,a]=t.split("/");this.$store.dispatch("setClickTimeSignature",{beats:Number(e)||"",unit:Number(a)||""})}}}},y=b,C=(a("c386"),a("ad66"),a("8336")),T=a("132d"),S=a("ba0d"),P=a("8654"),x=Object(p["a"])(y,o,s,!1,null,"6c12e360",null),_=x.exports;k()(x,{VBtn:C["a"],VIcon:T["a"],VRow:h["a"],VSlider:S["a"],VTextField:P["a"]});var w={components:{Controls:_}},$=w,A=(a("3ffa"),a("7496")),B=a("40dc"),G=a("a75b"),O=a("8e36"),j=a("2a7f"),D=Object(p["a"])($,n,r,!1,null,"7239566a",null),E=D.exports;k()(D,{VApp:A["a"],VAppBar:B["a"],VContent:G["a"],VProgressLinear:O["a"],VToolbarTitle:j["a"]});var M=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VContainer",[a("SettingsDialog"),a("AboutDialog"),a("TrackManager")],1)},N=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("VFileInput",{attrs:{label:"Tracks",value:t.files,multiple:"",placeholder:"Add audio files"},on:{change:t.addTracks}}),t._l(t.$store.state.tracks,(function(t,e){return a("Track",{key:t.id,attrs:{track:t,number:e+1}})}))],2)},L=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VCard",{staticClass:"mb-4"},[a("VCardText",[a("VRow",{attrs:{"no-gutters":""}},[a("VCol",{staticClass:"pr-4",attrs:{cols:"3"}},[a("VTextField",{model:{value:t.track.name,callback:function(e){t.$set(t.track,"name",e)},expression:"track.name"}}),a("VRow",{attrs:{dense:"",justify:"space-between"}},[a("VBtn",{attrs:{outlined:!t.track.active,color:t.activeColor},on:{click:t.toggleActive}},[t._v(t._s(t.number))]),a("VBtn",{attrs:{outlined:!t.solo,color:"primary"},on:{click:t.toggleSolo}},[t._v("Solo")]),a("VBtn",{attrs:{icon:""},on:{click:t.remove}},[a("VIcon",[t._v("mdi-delete")])],1)],1),a("VSlider",{staticClass:"mt-4",attrs:{"hide-details":"",min:"0",max:"1.5",step:"0.01"},model:{value:t.gain,callback:function(e){t.gain=e},expression:"gain"}}),a("audio",{ref:"audio",attrs:{src:""}})],1),a("VCol",{attrs:{cols:"9"}},[t.track.ready?t._e():a("VProgressCircular",{attrs:{indeterminate:""}}),a("div",{ref:"waveformContainer"})],1)],1)],1)],1)},J=[],W=a("a1d3"),q=a.n(W);let H=0;class K{constructor({arrayBuffer:t,audioContext:e,stereoPannerNode:a}){this.id=H++,this.name=`Track ${H}`,this.audioContext=e,this.stereoPannerNode=a,this.ready=!1,this.gainNode=e.createGain(),this.gainValue=1,this.active=!0,e.decodeAudioData(t,t=>{this.audioBuffer=t,this.initAudioSource(),this.ready=!0})}initAudioSource(){this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.gainNode).connect(this.stereoPannerNode).connect(this.audioContext.destination)}play(t,e=0){this.audioSource.start(t,e)}pause(t){this.audioSource.stop(t),this.initAudioSource()}stop(t){this.audioSource.stop(t),this.initAudioSource()}setPeaksPlayheadTime(t){this.peaksOverview._playheadLayer.stop(t)}initPeaks(t){this.peaks=q.a.init({...t,webAudio:{audioBuffer:this.audioSource.buffer}},()=>{this.peaksOverview=this.peaks.views.getView("overview")})}isSoloOrActive(t){return t===this||null===t&&this.active}setGain(t,e){this.gainNode.gain.value=this.isSoloOrActive(e)?t+this.gainValue-1:0}eventLoop(t){this.peaksOverview&&this.setPeaksPlayheadTime(t)}}var z={props:{number:Number,track:K},mounted(){},computed:{gain:{get(){return this.track.gainValue},set(t){return this.$store.dispatch("setTrackGainValue",{track:this.track,value:t})}},solo(){return this.$store.state.soloTrack===this.track},activeColor(){const t=this.$store.state.soloTrack;return t===this.track||null===t?"primary":"accent"}},watch:{"track.ready"(){this.track.initPeaks({mediaElement:this.$refs.audio,containers:{overview:this.$refs.waveformContainer},height:150})},active(t){this.track.setGainValue(t?this.gain:0)}},methods:{remove(){this.$store.dispatch("removeTrack",this.track)},toggleActive(){this.$store.dispatch("setTrackActive",{track:this.track,value:!this.track.active})},toggleSolo(){this.$store.dispatch("setSoloTrack",this.solo?null:this.track)}}},Q=z,U=(a("8976"),a("b0af")),X=a("99d9"),Y=a("490a"),Z=Object(p["a"])(Q,R,J,!1,null,"193020f0",null),tt=Z.exports;k()(Z,{VBtn:C["a"],VCard:U["a"],VCardText:X["b"],VCol:g["a"],VIcon:T["a"],VProgressCircular:Y["a"],VRow:h["a"],VSlider:S["a"],VTextField:P["a"]});var et={components:{Track:tt},data(){return{files:[]}},methods:{addTracks(t){t.length&&(t.forEach(t=>{const e=new FileReader;e.readAsArrayBuffer(t),e.addEventListener("load",()=>{this.$store.dispatch("addTrack",e.result)})}),this.files=[])}}},at=et,it=a("23a7"),nt=Object(p["a"])(at,F,L,!1,null,null,null),rt=nt.exports;k()(nt,{VFileInput:it["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VDialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("VCard",[a("VCardTitle",[t._v("Settings")]),a("VCardText",[a("VForm",[a("VSelect",{attrs:{items:t.outputs,label:"Track output"},model:{value:t.trackPanning,callback:function(e){t.trackPanning=e},expression:"trackPanning"}}),a("VSelect",{attrs:{items:t.outputs,label:"Click output"},model:{value:t.clickPanning,callback:function(e){t.clickPanning=e},expression:"clickPanning"}}),a("VSlider",{attrs:{label:"Click volume",min:"0",max:"2",step:"0.01"},model:{value:t.clickGain,callback:function(e){t.clickGain=e},expression:"clickGain"}})],1)],1),a("VCardActions",[a("VSpacer"),a("VBtn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)},st=[],ct={data(){return{outputs:[{text:"1/2 (Stereo)",value:0},{text:"1 (Mono)",value:-1},{text:"2 (Mono)",value:1}]}},computed:{dialog:{get(){return"settings"===this.$store.state.dialog},set(){return this.$store.dispatch("toggleSettingsDialog")}},trackPanning:{get(){return this.$store.state.trackPanning},set(t){return this.$store.dispatch("setTrackPanning",t)}},clickPanning:{get(){return this.$store.state.clickPanning},set(t){return this.$store.dispatch("setClickPanning",t)}},clickGain:{get(){return this.$store.state.clickGainValue},set(t){this.$store.dispatch("setClickGainValue",t)}}}},lt=ct,ut=a("169a"),dt=a("4bd4"),pt=a("b974"),mt=a("2fa4"),kt=Object(p["a"])(lt,ot,st,!1,null,null,null),gt=kt.exports;k()(kt,{VBtn:C["a"],VCard:U["a"],VCardActions:X["a"],VCardText:X["b"],VCardTitle:X["c"],VDialog:ut["a"],VForm:dt["a"],VSelect:pt["a"],VSlider:S["a"],VSpacer:mt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VDialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("VCard",[a("VCardTitle",[t._v("About")]),a("VCardText",{staticClass:"text-center"},[a("p",[t._v("Created by David Hulme")]),a("p",[a("a",{attrs:{href:"https://github.com/dhulme/multitrack-player"}},[t._v("github.com/dhulme/multitrack-player")]),a("br"),a("a",{attrs:{href:"http://dhulme.co.uk"}},[t._v("dhulme.co.uk")]),a("br"),a("a",{attrs:{href:"https://twitter.com/hulmed"}},[t._v("@hulmed")])]),a("p",[t._v("Version "+t._s(t.version))])])],1)],1)},ft=[],vt={data(){return{version:"0.1.0"}},computed:{dialog:{get(){return"about"===this.$store.state.dialog},set(){return this.$store.dispatch("toggleAboutDialog")}}}},Vt=vt,bt=Object(p["a"])(Vt,ht,ft,!1,null,null,null),yt=bt.exports;k()(bt,{VCard:U["a"],VCardText:X["b"],VCardTitle:X["c"],VDialog:ut["a"]});var Ct={components:{TrackManager:rt,SettingsDialog:gt,AboutDialog:yt},name:"home",data(){return{publicPath:"/multitrack-player/"}}},Tt=Ct,St=a("a523"),Pt=Object(p["a"])(Tt,I,N,!1,null,null,null),xt=Pt.exports;k()(Pt,{VContainer:St["a"]}),i["a"].use(M["a"]);var _t=new M["a"]({routes:[{path:"/",name:"home",component:xt}]}),wt=a("2f62");const $t=new AudioContext,At=new StereoPannerNode($t,{pan:0}),Bt=$t.createGain();let Gt=null,Ot=null,jt=0;async function Dt(t){const e=await fetch("./click.wav"),a=await e.arrayBuffer(),i=await fetch("./click-accent.wav"),n=await i.arrayBuffer();$t.decodeAudioData(a,e=>{Gt=e,$t.decodeAudioData(n,e=>{Ot=e,t.commit("setLoading",!1)})})}function Et(t){const{beats:e,unit:a}=t.state.clickTimeSignature;if(!e||!a)return;const i=60/(t.state.clickBpm/(a/4));if(t.state.playPosition/jt>i){const t=$t.createBufferSource();t.connect(Bt).connect(At).connect($t.destination),jt%e===0?(t.buffer=Ot,t.start()):(t.buffer=Gt,t.start()),jt++}}function Mt(t){At.pan.value=t}function It(){jt=0}function Nt(t){Bt.gain.value=t}i["a"].use(wt["a"]);const Ft=new AudioContext,Lt=new StereoPannerNode(Ft,{pan:0});let Rt=Ft.currentTime,Jt=0;const Wt=new wt["a"].Store({state:{playState:"stopped",playPosition:0,tracks:[],clickActive:!1,clickBpm:102,clickGainValue:1,masterGainValue:1,soloTrack:null,dialog:null,trackPanning:0,clickPanning:0,loading:!0,clickTimeSignature:{beats:4,unit:4}},getters:{getTrack(t){return e=>t.tracks.find(t=>t===e)}},mutations:{setPlayState(t,e){t.playState=e},addTrack(t,e){t.tracks.push(e)},removeTrack(t,e){t.tracks.splice(t.tracks.indexOf(e),1)},setClickActive(t,e){t.clickActive=e},setPlayPosition(t,e){t.playPosition=e},setMasterGainValue(t,e){t.masterGainValue=e},setClickGainValue(t,e){t.clickGainValue=e},setTrackGainValue(t,{track:e,value:a}){e.gainValue=a},setTrackActive(t,{track:e,value:a}){e.active=a},setSoloTrack(t,e){t.soloTrack=e},setDialog(t,e){t.dialog=e},setTrackPanning(t,e){t.trackPanning=e},setClickPanning(t,e){t.clickPanning=e},setClickBpm(t,e){t.clickBpm=e},setLoading(t,e){t.loading=e},setClickTimeSignature(t,e){t.clickTimeSignature=e}},actions:{playPause({state:t,commit:e}){const a={stopped:"playing",paused:"playing",playing:"paused"},i=a[t.playState];e("setPlayState",i),"suspended"===Ft.state&&Ft.resume(),"playing"===i?(Rt=Ft.currentTime,Jt=0,t.tracks.forEach(e=>e.play(Ft.currentTime,t.playPosition))):t.tracks.forEach(t=>t.pause())},stop({commit:t,state:e}){"playing"===e.playState&&e.tracks.forEach(t=>t.stop()),t("setPlayState","stopped"),t("setPlayPosition",0),It(),e.tracks.forEach(t=>t.eventLoop(Wt.state.playPosition))},addTrack({commit:t},e){const a=new K({arrayBuffer:e,audioContext:Ft,stereoPannerNode:Lt,store:Wt});t("addTrack",a)},removeTrack({commit:t},e){t("removeTrack",e)},toggleClickActive({commit:t,state:e}){t("setClickActive",!e.clickActive)},setMasterGainValue({commit:t,state:e},a){t("setMasterGainValue",a),e.tracks.forEach(qt)},setTrackGainValue({commit:t},{track:e,value:a}){t("setTrackGainValue",{track:e,value:a}),qt(e)},setTrackActive({commit:t},{track:e,value:a}){t("setTrackActive",{track:e,value:a}),qt(e)},setSoloTrack({commit:t,state:e},a){t("setSoloTrack",a),e.tracks.forEach(qt)},toggleSettingsDialog({commit:t,state:e}){t("setDialog","settings"===e.dialog?null:"settings")},toggleAboutDialog({commit:t,state:e}){t("setDialog","about"===e.dialog?null:"about")},setTrackPanning({commit:t},e){t("setTrackPanning",e),Lt.pan.value=e},setClickPanning({commit:t},e){t("setClickPanning",e),Mt(e)},setClickBpm({commit:t},e){t("setClickBpm",e)},setClickGainValue({commit:t},e){t("setClickGainValue",e),Nt(e)},setClickTimeSignature({commit:t},e){t("setClickTimeSignature",e)}}});function qt(t){t.setGain(Wt.state.masterGainValue,Wt.state.soloTrack)}Dt(Wt);const Ht=.01;function Kt(){Wt.commit("setPlayPosition",Wt.state.playPosition+Ht),Wt.state.tracks.forEach(t=>t.eventLoop(Wt.state.playPosition))}setInterval(()=>{if("playing"===Wt.state.playState){const t=Ft.currentTime-Rt;t/Jt>Ht&&(Kt(),Jt++),Et(Wt)}},1);var zt=Wt,Qt=a("9483");Object(Qt["a"])("/multitrack-player/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Ut=a("f309");i["a"].use(Ut["a"]);var Xt=new Ut["a"]({icons:{iconfont:"mdiSvg"}});i["a"].config.productionTip=!1,new i["a"]({router:_t,store:zt,vuetify:Xt,render:t=>t(E)}).$mount("#app")},8976:function(t,e,a){"use strict";var i=a("9699"),n=a.n(i);n.a},9699:function(t,e,a){},ad66:function(t,e,a){"use strict";var i=a("26d4"),n=a.n(i);n.a},afdc:function(t,e,a){},c386:function(t,e,a){"use strict";var i=a("afdc"),n=a.n(i);n.a},e4fa:function(t,e,a){}});