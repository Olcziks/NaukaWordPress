(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[4862,1511],{62352:(t,e,r)=>{"use strict";r.r(e),r.d(e,{store:()=>Yt});var i={};r.r(i),r.d(i,{APPEND_TO_QUERY:()=>X,FAILED_CREATE_GROUP:()=>it,FAILED_DELETE_GROUP:()=>lt,FAILED_FETCH_GROUPS_SETTINGS:()=>_t,FAILED_PATCH_BULK_GROUP_SETTINGS:()=>bt,FAILED_UPDATE_GROUP:()=>ct,FAILED_UPDATE_GROUP_SETTINGS:()=>ft,FINISH_CREATE_GROUP:()=>rt,FINISH_DELETE_GROUP:()=>dt,FINISH_FETCH_GROUPS_SETTINGS:()=>Et,FINISH_PATCH_BULK_GROUP_SETTINGS:()=>mt,FINISH_UPDATE_GROUP:()=>ut,FINISH_UPDATE_GROUP_SETTINGS:()=>gt,GROUP_NOT_FOUND:()=>nt,RECEIVE_GROUP:()=>st,RECEIVE_GROUP_SETTINGS:()=>pt,RECEIVE_MATCHABLES:()=>tt,RECEIVE_QUERY:()=>z,START_CREATE_GROUP:()=>et,START_DELETE_GROUP:()=>at,START_FETCH_GROUPS_SETTINGS:()=>yt,START_PATCH_BULK_GROUP_SETTINGS:()=>St,START_UPDATE_GROUP:()=>ot,START_UPDATE_GROUP_SETTINGS:()=>ht,appendToQuery:()=>S,createGroup:()=>k,deleteGroup:()=>M,failedCreateGroup:()=>O,failedDeleteGroup:()=>F,failedFetchGroupsSettings:()=>V,failedPatchBulkGroupSettings:()=>Y,failedUpdateGroup:()=>A,failedUpdateGroupSettings:()=>L,fetchGroupsSettings:()=>x,finishCreateGroup:()=>U,finishDeleteGroup:()=>C,finishFetchGroupsSettings:()=>Q,finishPatchBulkGroupSettings:()=>J,finishUpdateGroup:()=>v,finishUpdateGroupSettings:()=>Z,groupNotFound:()=>T,patchBulkGroupSettings:()=>W,path:()=>E,processItem:()=>b,query:()=>_,receiveGroup:()=>I,receiveGroupSettings:()=>w,receiveMatchables:()=>P,receiveQuery:()=>m,saveGroupSettingsAsBatch:()=>q,saveGroups:()=>H,startCreateGroup:()=>G,startDeleteGroup:()=>N,startFetchGroupsSettings:()=>$,startPatchBulkGroupSettings:()=>K,startUpdateGroup:()=>R,startUpdateGroupSettings:()=>D,updateGroup:()=>B,updateGroupSettings:()=>j});var s={};r.r(s),r.d(s,{getGroup:()=>Ct,getGroupAttribute:()=>wt,getGroupSetting:()=>kt,getGroupSettings:()=>Zt,getGroups:()=>At,getGroupsBySetting:()=>Ht,getMatchableLabel:()=>Rt,getMatchableType:()=>Ut,getMatchables:()=>Ot,getQueriedObjectIds:()=>Nt,getSettingDefinitions:()=>xt,isBulkPatchingSettings:()=>Mt,isDeleting:()=>Lt,isGroupNotFound:()=>Ft,isUpdating:()=>Dt,isUpdatingSettings:()=>Bt});var n={};r.r(n),r.d(n,{getGroup:()=>Qt,getGroupSettings:()=>Wt,getGroupsBySetting:()=>Kt,getMatchables:()=>Vt});var o=r(48015),u=r(31600),c=r(87514),a=r.n(c),d=r(31511);function l(t){return{type:"API_FETCH",request:t}}const p={API_FETCH:({request:t})=>a()(t).catch(d.xJ)};var h=r(92819),g=r(19631),f=r.n(g),y=r(73470);const E="/ithemes-security/v1/user-groups";function*_(t,e){const r=yield l({path:(0,y.addQueryArgs)(E,e)});yield m(t,r);for(const t of r)yield*b(t);return r}function*S(t,e){yield{type:X,queryId:t,item:e},yield*b(e)}function m(t,e){return{type:z,queryId:t,items:e}}function*b(t){const e=(0,h.get)(t,["_embedded","ithemes-security:user-group-member"],[]),r=(0,h.get)(t,["_embedded","ithemes-security:user-matchable-settings",0]);for(const t of e)yield o.controls.dispatch("ithemes-security/core","receiveUser",t);r&&(yield w(t.id,r))}function I(t){return{type:st,group:t}}function T(t){return{type:nt,id:t}}function P(t){return{type:tt,matchables:t}}function G(t){return{type:et,group:t}}function O(t,e){return{type:it,group:t,error:e}}function U(t,e){return{type:rt,group:t,response:e}}function R(t,e){return{type:ot,id:t,group:e}}function A(t,e){return{type:ct,id:t,error:e}}function v(t,e){return{type:ut,id:t,response:e}}function N(t){return{type:at,id:t}}function F(t,e){return{type:lt,id:t,error:e}}function C(t){return{type:dt,id:t}}function w(t,e){return{type:pt,id:t,settings:e}}function D(t,e){return{type:ht,id:t,settings:e}}function L(t,e){return{type:ft,id:t,error:e}}function Z(t,e){return{type:gt,id:t,response:e}}function*k(t){let e;yield G(t);try{e=yield l({path:(0,y.addQueryArgs)(E,{_embed:1}),method:"POST",data:t})}catch(e){return yield O(t,e),e}return yield U(t,e),yield I(e),yield*b(e),e}function*B(t,e){let r;yield R(t,e);try{r=yield l({path:E+"/"+t,method:"PUT",data:e})}catch(e){return yield A(t,e),e}return yield v(t,r),yield I(r),r}function*M(t){yield N(t);try{yield l({path:`${E}/${t}`,method:"DELETE"})}catch(e){return yield F(t,e),e}return yield C(t),null}function*H({create:t=[],update:e=[],delete:r=[]}){const i=[];for(const t of e)i.push({method:"PUT",path:`${E}/${t.id}`,body:t}),yield R(t.id);for(const e of t)i.push({method:"POST",path:E,body:e}),yield G(e);for(const t of r)i.push({method:"DELETE",path:`${E}/${t}`}),yield N(t);let s;const n={};try{s=yield(0,u.apiFetchBatch)(i)}catch(i){for(const t of e)yield A(t.id,i);for(const e of t)yield O(e,i);for(const t of r)yield F(t,i);return i}for(let t=0;t<i.length;t++){const e=i[t],r=e.body,o=s[t],u=r?.id||o.body?.id||e.path.replace(`${E}/`,"");u&&(n[u]=o),o.status>=400?"PUT"===e.method?yield A(u,o.body):"DELETE"===e.method?yield F(u,o.body):yield O(r,o.body):("PUT"===e.method?yield v(u,o.body):"DELETE"===e.method?yield C(u):yield U(r,o.body),yield I(r))}return{responses:s,byId:n}}function*j(t,e){let r;yield D(t,e);try{r=yield l({path:`ithemes-security/v1/user-matchable-settings/${t}`,method:"PUT",data:e})}catch(e){return yield L(t,e),e}return yield Z(t,r),yield w(t,r),r}function*q(t){const e=[],r=Object.keys(t);for(const i of r)e.push({method:"PUT",path:`/ithemes-security/v1/user-matchable-settings/${i}`,body:t[i]}),yield D(i,t[i]);let i;try{i=yield(0,u.apiFetchBatch)(e)}catch(t){for(const e of r)yield L(e,t);return t}const s={};for(let t=0;t<e.length;t++){const e=r[t],n=i[t];s[e]=n.body,n.status>=400?yield L(e,n.body):(yield Z(e,n.body),yield w(e,n.body))}return{responses:i,byId:s}}function*x(t=[]){let e;yield $(t);try{let r="ithemes-security/v1/user-matchable-settings";t.length>0&&(r=(0,y.addQueryArgs)(r,{include:t})),e=yield l({path:r})}catch(e){return yield V(t,e),e}yield Q(t,e);for(const t in e)e.hasOwnProperty(t)&&(yield w(t,e[t]));return e}function $(t){return{type:yt,groupIds:t}}function Q(t,e){return{type:Et,groupIds:t,response:e}}function V(t,e){return{type:_t,groupIds:t,error:e}}function*W(t,e){let r;yield K(t,e);try{r=yield l({path:(0,y.addQueryArgs)("ithemes-security/v1/user-matchable-settings",{include:t}),method:"PATCH",data:e})}catch(r){return yield Y(t,e,r),r}yield J(t,e,r);const i=yield o.controls.resolveSelect("ithemes-security/core","getSchema","ithemes-security-user-group-settings"),s=(0,d.CO)(i,"self");if(!s)return r;const n=new(f())(s.href);for(const t of r){if(200!==t.status)continue;const e=n.fromUri(t.href);e.id&&(yield w(e.id,t.response))}return r}function K(t,e){return{type:St,groupIds:t,patch:e}}function J(t,e,r){return{type:mt,groupIds:t,patch:e,response:r}}function Y(t,e,r){return{type:bt,groupIds:t,patch:e,error:r}}const z="RECEIVE_QUERY",X="APPEND_TO_QUERY",tt="RECEIVE_MATCHABLES",et="START_CREATE_GROUP",rt="FINISH_CREATE_GROUP",it="FAILED_CREATE_GROUP",st="RECEIVE_GROUP",nt="GROUP_NOT_FOUND",ot="START_UPDATE_GROUP",ut="FINISH_UPDATE_GROUP",ct="FAILED_UPDATE_GROUP",at="START_DELETE_GROUP",dt="FINISH_DELETE_GROUP",lt="FAILED_DELETE_GROUP",pt="RECEIVE_GROUP_SETTINGS",ht="START_UPDATE_GROUP_SETTINGS",gt="FINISH_UPDATE_GROUP_SETTINGS",ft="FAILED_UPDATE_GROUP_SETTINGS",yt="START_FETCH_GROUPS_SETTINGS",Et="FINISH_FETCH_GROUPS_SETTINGS",_t="FAILED_FETCH_GROUPS_SETTINGS",St="START_PATCH_BULK_GROUP_SETTINGS",mt="FINISH_PATCH_BULK_GROUP_SETTINGS",bt="FAILED_PATCH_BULK_GROUP_SETTINGS";var It=r(28306),Tt=r(59588),Pt=r.n(Tt);const Gt="ithemes-security/user-groups",Ot=(0,It.Z)((t=>(0,h.filter)((0,h.map)(t.matchableIds,(e=>t.matchablesById[e])),h.isObject)),(t=>[t.matchablesById,t.matchableIds]));function Ut(t,e){return(t.matchablesById[e]||{}).type}function Rt(t,e){return(t.matchablesById[e]||{}).label}const At=(0,It.Z)(((t,e)=>(0,h.filter)((0,h.map)(t.queries[e],(e=>t.byId[e])),h.isObject)),((t,e)=>[t.queries[e],t.byId])),vt=[];function Nt(t,e){return t.queries[e]||vt}function Ft(t,e){return t.groupsNotFound.includes(e)}function Ct(t,e){return t.byId[e]}const wt=(0,o.createRegistrySelector)((t=>(e,r,i)=>{const s=t(Gt).getGroup(r);return s?s[i]:void 0}));function Dt(t,e){return t.updating.includes(e)}function Lt(t,e){return t.deleting.includes(e)}function Zt(t,e){return t.settings[e]}const kt=(0,o.createRegistrySelector)((t=>(e,r,i,s)=>{const n=t(Gt).getGroupSettings(r);return(0,h.get)(n,[i,s])}));function Bt(t,e){return t.updatingSettings.includes(e)}function Mt(t,e,r){const i=e.join("_");return t.bulkPatchingSettings[i]===r}function Ht(t){const e={};for(const r in t.settings)if(t.settings.hasOwnProperty(r))for(const i in t.settings[r])if(t.settings[r].hasOwnProperty(i))for(const s in t.settings[r][i])t.settings[r][i].hasOwnProperty(s)&&(e[i]||(e[i]={}),e[i][s]||(e[i][s]=[]),t.settings[r][i][s]&&e[i][s].push(r));return e}const jt=Pt()(((t,e,{skipConditions:r=!1},i,s,n)=>i.reduce(((o,u)=>{if("active"!==u.status.selected)return o;if(!(t=>!e.module||e.module===t.id)(u))return o;if("password-requirements"!==u.id&&(0,h.isEmpty)(u.user_groups))return o;const c=(0,h.pickBy)("password-requirements"===u.id?function(t){return Object.fromEntries(t.filter((t=>!(0,h.isEmpty)(t.password_requirements))).flatMap((t=>Object.entries(t.password_requirements).filter((([,t])=>t.hasOwnProperty("user-group"))).map((([e,r])=>[`requirement_settings.${e}.group`,{title:r.title||t.title,description:r.description||t.description}])))))}(i):u.user_groups,(e=>{if(!e.conditional||r)return!0;if(e.conditional["active-modules"])for(const t of e.conditional["active-modules"])if(!s.includes(t))return!1;return!(e.conditional.settings&&!t.compile(e.conditional.settings)(n[u.id]))}));return(0,h.isEmpty)(c)||o.push({id:u.id,title:u.title,description:u.description,settings:c}),o}),[])),{maxSize:1}),qt={},xt=(0,o.createRegistrySelector)((t=>(e,r,i=qt,s=qt)=>jt(r,i,s,t(u.MODULES_STORE_NAME).getEditedModules(),t(u.MODULES_STORE_NAME).getActiveModules(),t(u.MODULES_STORE_NAME).__unstableGetAllEditedSettings()))),$t={matchablesById:{},matchableIds:[],byId:{},groupsNotFound:[],queries:{},creating:[],updating:[],deleting:[],settings:{},updatingSettings:[],bulkPatchingSettings:{}},Qt={*fulfill(t){try{const e=yield l({path:`${E}/${t}?_embed=1`});yield I(e),yield*b(e)}catch(e){yield T(t)}},isFulfilled:(t,e)=>!!t.byId[e]},Vt={*fulfill(){const t=yield l({path:"/ithemes-security/v1/user-matchables?_embed=1"});for(const e of t){const t=(0,h.get)(e,["_embedded","self",0]),r=(0,h.get)(e,["_embedded","ithemes-security:user-matchable-settings",0]);t&&(yield I(t)),r&&(yield w(e.id,r))}yield P(t)},isFulfilled:t=>!(0,h.isEmpty)(t.matchablesById)},Wt={*fulfill(t){try{const e=yield l({path:`ithemes-security/v1/user-matchable-settings/${t}`});yield w(t,e)}catch(e){yield T(t)}},isFulfilled:(t,e)=>!!t.settings[e]},Kt={*fulfill(){yield o.controls.resolveSelect(Gt,"getMatchables")},isFulfilled:t=>!(0,h.isEmpty)(t.matchablesById)},Jt=(0,o.createReduxStore)(Gt,{controls:{...u.controls,...p},actions:i,selectors:s,resolvers:n,reducer:function(t=$t,e){switch(e.type){case tt:return{...t,matchableIds:(0,h.map)(e.matchables,"id"),matchablesById:(0,h.keyBy)(e.matchables,"id")};case z:return{...t,byId:{...t.byId,...(0,h.keyBy)(e.items,"id")},queries:{...t.queries,[e.queryId]:(0,h.map)(e.items,"id")}};case X:return{...t,byId:{...t.byId,[e.item.id]:e.item},queries:{...t.queries,[e.queryId]:[...t.queries[e.queryId]||[],e.item.id]}};case st:return{...t,byId:{...t.byId,[e.group.id]:e.group},matchablesById:t.matchablesById[e.group.id]?{...t.matchablesById,[e.group.id]:{...t.matchablesById[e.group.id],label:e.group.label}}:t.matchablesById};case nt:return{...t,groupsNotFound:t.groupsNotFound.includes(e.id)?t.groupsNotFound:[...t.groupsNotFound,e.id]};case et:return{...t,creating:[...t.creating,e.group]};case rt:return{...t,creating:t.creating.filter((t=>t!==e.group)),matchablesById:{...t.matchablesById,[e.response.id]:{id:e.response.id,label:e.response.label,type:"user-group"}},matchableIds:[...t.matchableIds,[e.response.id]]};case it:return{...t,creating:t.creating.filter((t=>t!==e.group))};case ot:return{...t,updating:[...t.updating,e.id]};case ut:case ct:return{...t,updating:t.updating.filter((t=>t!==e.id))};case at:return{...t,deleting:[...t.deleting,e.id]};case dt:return{...t,deleting:t.deleting.filter((t=>t!==e.id)),byId:(0,h.omit)(t.byId,[e.id]),matchablesById:(0,h.omit)(t.matchablesById,[e.id]),matchableIds:t.matchableIds.filter((t=>t!==e.id)),settings:(0,h.omit)(t.settings,[e.id])};case lt:return{...t,deleting:t.deleting.filter((t=>t!==e.id))};case pt:return{...t,settings:{...t.settings,[e.id]:e.settings}};case ht:return{...t,updatingSettings:[...t.updatingSettings,e.id]};case gt:case ft:return{...t,updatingSettings:t.updatingSettings.filter((t=>t!==e.id))};case St:return{...t,bulkPatchingSettings:{...t.bulkPatchingSettings,[e.groupIds.join("_")]:e.patch}};case mt:case bt:return{...t,bulkPatchingSettings:(0,h.omit)(t.bulkPatchingSettings,[e.groupIds.join("_")])};default:return t}}});(0,o.register)(Jt);const Yt=Jt;r.p=window.itsecWebpackPublicPath},31511:(t,e,r)=>{"use strict";r.d(e,{sE:()=>U,x4:()=>E,PN:()=>f,pL:()=>G,NC:()=>T,N4:()=>P,g4:()=>D,bK:()=>L,Rg:()=>v,CO:()=>N,AW:()=>A,SU:()=>R,k0:()=>I,ZE:()=>b,UC:()=>F,xJ:()=>O,z8:()=>m,VG:()=>w,Y3:()=>C,bv:()=>S});var i=r(92819),s=r(65096),n=r.n(s),o=r(6293),u=r(73470),c=r(95122),a=r(4942),d=r(13092),l=r(86033);function p(t,e,r){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,r)}var h=new WeakMap,g=new WeakMap;class f{constructor(t=void 0,e=void 0,r=void 0){p(this,h,{writable:!0,value:{}}),p(this,g,{writable:!0,value:{}}),(0,a.Z)(this,"add",((t,e,r)=>((0,l.Z)(this,h)[t]||((0,l.Z)(this,h)[t]=[]),(0,l.Z)(this,h)[t].push(e),r&&((0,l.Z)(this,g)[t]||((0,l.Z)(this,g)[t]=[]),(0,l.Z)(this,g)[t].push(r)),this))),(0,a.Z)(this,"hasErrors",(()=>this.getErrorCodes().length>0)),(0,a.Z)(this,"getErrorCodes",(()=>Object.keys((0,l.Z)(this,h)))),(0,a.Z)(this,"getErrorCode",(()=>this.getErrorCodes()[0])),(0,a.Z)(this,"getErrorMessages",((t=void 0)=>{if(t)return(0,l.Z)(this,h)[t];const e=[];for(const t in(0,l.Z)(this,h))(0,l.Z)(this,h).hasOwnProperty(t)&&e.concat((0,l.Z)(this,h)[t]);return e})),(0,a.Z)(this,"getErrorMessage",((t=void 0)=>(t=t||this.getErrorCode(),this.getErrorMessages(t)[0]))),(0,a.Z)(this,"getErrorData",((t=void 0)=>(t=t||this.getErrorCode(),(0,l.Z)(this,g)[t]))),(0,a.Z)(this,"getAllErrorMessages",(()=>{const t=[];for(const e in(0,l.Z)(this,h))(0,l.Z)(this,h).hasOwnProperty(e)&&t.push(...(0,l.Z)(this,h)[e]);return t})),t&&(e&&((0,l.Z)(this,h)[t]=[e]),r&&((0,l.Z)(this,g)[t]=r))}static fromPHPObject(t){const e=new f;return(0,d.Z)(e,h,t.errors),(0,d.Z)(e,g,t.error_data),e}static fromApiError(t){const e=new f;if((0,l.Z)(e,h)[t.code]=[t.message],(0,l.Z)(e,g)[t.code]=[t.data],t.additional_errors)for(const r of t.additional_errors)(0,l.Z)(e,h)[r.code]=[r.message],r.data&&((0,l.Z)(e,g)||(0,d.Z)(e,g,[]),(0,l.Z)(e,g)[r.code].push(r.data));return e}}class y extends Error{constructor(t,...e){super(t.message||(0,c.__)("An unknown error occurred.","better-wp-security"),...e),Error.captureStackTrace&&Error.captureStackTrace(this,y),this.__response=t;for(const e in t)t.hasOwnProperty(e)&&Object.defineProperty(this,e,{value:t[e],configurable:!0,enumerable:!0,writable:!0})}toString(){return this.__response.toString()}getResponse(){return this.__response}}class E{constructor(t,e,r,i=[],s=[],n=[]){(0,a.Z)(this,"type",void 0),(0,a.Z)(this,"error",void 0),(0,a.Z)(this,"data",void 0),(0,a.Z)(this,"success",void 0),(0,a.Z)(this,"info",void 0),(0,a.Z)(this,"warning",void 0),this.type=t,this.error=e,this.data=r,this.success=i,this.info=s,this.warning=n,Object.seal(this)}isSuccess(){return this.type===E.SUCCESS}static async fromResponse(t){const e=e=>{const r=t.headers?.get(`X-Messages-${e}`);return r?JSON.parse(r):[]},r=204!==t.status&&t.json?await t.json():null,i=T(r),s=i.hasErrors()?E.ERROR:E.SUCCESS,n=e("Success"),o=e("Info"),u=e("Warning");return new E(s,i,r,n,o,u)}}Object.defineProperty(E,"SUCCESS",{value:"success",writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(E,"ERROR",{value:"error",writable:!1,enumerable:!1,configurable:!1});const _=(0,o.createContext)({getUrl(t,e){t="settings"===t?"itsec":"itsec-"+t;const r=(0,u.removeQueryArgs)(document.location.href,...Object.keys((0,u.getQueryArgs)(document.location.href)));return(0,u.addQueryArgs)(r,e?{page:t,path:e}:{page:t})}});function S(t,e){const{getUrl:r}=(0,o.useContext)(_);return r(t,e)}function m(t){if(t<=999)return t.toString();if(t<=9999){const e=(t/1e3).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","k"):`${e}k`}if(t<=99999)return t.toString().substring(0,2)+"k";if(t<=999999)return t.toString().substring(0,3)+"k";if(t<=9999999){const e=(t/1e6).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","m"):`${e}m`}if(t<=99999999)return t.toString().substring(0,2)+"m";if(t<=999999999)return t.toString().substring(0,3)+"m";if(t<=9999999999){const e=(t/1e9).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","b"):`${e}b`}return t}function b(t){if(!(0,i.isPlainObject)(t))return!1;const e=Object.keys(t);return 2===e.length&&e.includes("errors")&&e.includes("error_data")}function I(t){if(!(0,i.isPlainObject)(t))return!1;const e=Object.keys(t);return(3===e.length||4===e.length)&&!(4===e.length&&!e.includes("additional_errors"))&&e.includes("code")&&e.includes("message")&&e.includes("data")}function T(t){return t instanceof f?t:b(t)?f.fromPHPObject(t):I(t)?f.fromApiError(t):new f}function P(t){const e={};for(const[r,i]of t)e[r]=i;return e}function G(t,e){const r=[[],[]];for(const i of t)r[e(i)?0:1].push(i);return r}function O(t){if(t instanceof Error)throw t;throw new y(t)}const U="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&f=y&r=g";function R(t,e,r=!0){return(0,i.get)(t,["_links","self",0,"targetHints",e],r?void 0:[])}function A(t){return v(t,"self")}function v(t,e){return(0,i.get)(t,["_links",e,0,"href"])}function N(t,e){if(t&&t.links)for(const r of t.links)if(r.rel===e)return r}function F(t,e){if("object"!==t.type)return t;let r;for(const s in e)e.hasOwnProperty(s)&&"hidden"===e[s]["ui:widget"]&&(r||(r=(0,i.cloneDeep)(t)),delete r.properties[s]);return r||t}function C(t){let e=[];if(!t)return e;const r=t instanceof f?t:T((0,i.pick)(t,["code","message","data"]));return"rest_invalid_param"===r.getErrorCode()&&(e=Object.values(r.getErrorData().params)),[...r.getAllErrorMessages(),...e]}function w(t){const e=new Date;if(t>e)return(0,c.__)("Online Recently","better-wp-security");const r=Math.floor((e-t)/1e3);let i=r/31536e3;return i>1?(0,c.sprintf)((0,c.__)("%s years","better-wp-security"),Math.floor(i)):(i=r/2592e3,i>1?(0,c.sprintf)((0,c.__)("%s months","better-wp-security"),Math.floor(i)):(i=r/86400,i>1?(0,c.sprintf)((0,c.__)("%s days","better-wp-security"),Math.floor(i)):(i=r/3600,i>1?(0,c.sprintf)((0,c.__)("%s hours","better-wp-security"),Math.floor(i)):(i=r/60,i>1?(0,c.sprintf)((0,c.__)("%s minutes","better-wp-security"),Math.floor(i)):(0,c.sprintf)((0,c.__)("%s seconds","better-wp-security"),Math.floor(i))))))}function D(){return D.instance||(D.instance=new(n())({schemaId:"id"}),D.instance.addMetaSchema(r(27171)),D.instance.addFormat("html",{type:"string",validate:()=>!0}),D.instance.addFormat("relative-file-path",{type:"string",validate:t=>!t.includes("../")}),D.instance.addFormat("file-path",{type:"string",validate:t=>!!t.startsWith("/")&&!t.includes("../")}),D.instance.addFormat("directory",{type:"string",validate:t=>!!t.startsWith("/")&&!t.includes("../")})),D.instance}function L(t){const e=t.toUpperCase().split("").map((t=>127397+t.charCodeAt()));return String.fromCodePoint(...e)}},31600:t=>{t.exports=function(){return this.itsec.packages.data}()},87514:t=>{t.exports=function(){return this.wp.apiFetch}()},48015:t=>{t.exports=function(){return this.wp.data}()},6293:t=>{t.exports=function(){return this.wp.element}()},95122:t=>{t.exports=function(){return this.wp.i18n}()},73470:t=>{t.exports=function(){return this.wp.url}()},92819:t=>{"use strict";t.exports=window.lodash}},t=>{t.O(0,[5307,2388],(()=>(62352,t(t.s=62352))));var e=t.O();((window.itsec=window.itsec||{})["user-groups"]=window.itsec["user-groups"]||{}).api=e}]);