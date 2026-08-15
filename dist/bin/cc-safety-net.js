#!/usr/bin/env node
import{$ as rr,$a as e1,A as H2,Aa as Y2,B as W2,Ba as K3,C as un,Ca as Se,D as y3,Da as Ue,E as P,Ea as sr,F as C,Fa as Ce,G as It,Ga as Oe,H as Vt,Ha as O,I as zn,Ia as Ct,J as Gt,Ja as Nt,K as z2,Ka as nr,L as g2,La as T,M as An,Ma as z3,N as tr,Na as bn,O as s2,Oa as V3,P as J1,Pa as qe,Q as ir,Qa as G3,R as Vn,Ra as S3,S as Z1,Sa as U3,T as Q1,Ta as pt,U as Un,Ua as C3,V as Cn,Va as O3,W as yn,Wa as f1,X as wn,Xa as y1,Y as c1,Ya as w1,Z as pn,Za as h1,_ as D2,_a as $3,aa as V2,ab as a1,b as i,ba as X1,bb as Ot,c as Je,ca as cr,cb as l1,d as Ze,da as H1,db as d1,e as W,ea as W1,eb as o2,f as Qe,fa as L1,fb as $2,g as Wt,ga as Me,gb as l2,h as Ge,ha as u1,hb as s1,i as A,ia as p1,ib as M,j as D,ja as v1,jb as fn,k as ln,ka as er,kb as vn,l as g,la as Ke,lb as R1,m as x2,ma as m,mb as hn,n as Pe,na as ar,nb as i2,o as R2,oa as Y1,ob as C1,p as sn,pa as d2,pb as Gn,q as k3,qa as on,r as zt,ra as lr,s as Ie,sa as dr,t as cn,ta as o1,u as Ne,ua as b1,v as Pt,va as ze,w as n1,wa as M2,x as t1,xa as St,y as _,ya as Ut,z as E,za as r1}from"../chunks/index-00wqv7dp.js";var N3=["-h","--help"];function F(n,t){let r=Object.entries(n.booleans??{}),e=Object.entries(n.values??{}),a=Object.fromEntries(r.map(([u])=>[u,!1])),l={},d=[],s=[],c=!1,L=-1;for(let[u,p]of t.entries()){if(u<=L)continue;if(p==="--"){d.push(...t.slice(u+1));break}if(N3.includes(p)){c=!0;continue}let f=r.find(([,o])=>o.includes(p));if(f){a[f[0]]=!0;continue}let v=e.find(([,o])=>o.includes(p));if(v){let o=t[u+1];if(o===void 0||o.startsWith("-")){s.push(`${p} requires a value`);continue}l[v[0]]=o,L=u+1;continue}if(p.startsWith("-")){s.push(`Unknown option for ${n.label}: ${p}`);continue}if(n.positionals==="tail"){d.push(...t.slice(u));break}d.push(p)}if(n.positionals!=="list"&&n.positionals!=="tail")s.push(...d.map((u)=>`Unexpected argument for ${n.label}: ${u}`));return{flags:a,values:l,positionals:d,help:c,errors:s}}function e2(n){for(let t of n)console.error(t);return n.length>0}import{readdirSync as Kd,statSync as $1,unlinkSync as zd}from"node:fs";import{basename as g1,dirname as Vd,join as Gd,resolve as Sd}from"node:path";function B(n){return Array.from(n,(t)=>{let r=t.charCodeAt(0);if(r<=31||r>=127&&r<=159)return`\\x${r.toString(16).padStart(2,"0")}`;return t}).join("")}var Yt=(n)=>{let t=Date.now()-new Date(n).getTime();if(!Number.isFinite(t))return"";let r=Math.floor(t/60000),e=Math.floor(r/60),a=Math.floor(e/24);if(a>0)return`${a}d ago`;if(e>0)return`${e}h ago`;if(r>0)return`${r}m ago`;return"just now"},Q2=(n)=>{let t=(n??"").trim().split(/\s+/).filter((a)=>a&&!/^[A-Za-z_][A-Za-z0-9_]*=/.test(a)),r=t[0]?.split("/").pop();if(!r)return null;let e=t[1];return e&&/^[a-z][a-z0-9-]*$/.test(e)?`${r} ${e}`:r};import{existsSync as nd,readdirSync as td,readFileSync as rd}from"node:fs";import{join as ed}from"node:path";function v2(n,t){try{return td(n,{withFileTypes:!0,encoding:"utf8"}).flatMap((r)=>{let e=ed(n,r.name);if(r.isDirectory())return v2(e,t);if(r.name.endsWith(".jsonl"))return[e];return[]})}catch{if(t&&nd(n))t.count++;return[]}}function Rt(n){let t=(a)=>`${a.sessionId}
${Q2(a.segment||a.command)}`,r=n.filter((a)=>a.decision!=="allow"),e=r.filter((a)=>a.sessionId).reduce((a,l)=>a.set(t(l),(a.get(t(l))??0)+1),new Map);return new Set(r.filter((a)=>a.failureStage||(e.get(t(a))??0)>=2))}function an(n,t){try{return rd(n,"utf-8").split(`
`).filter(Boolean).flatMap((r)=>{try{let e=An.safeParse(JSON.parse(r));if(e.success)return[e.data];if(t)t.count++;return[]}catch{if(t)t.count++;return[]}})}catch{if(t)t.count++;return[]}}import{resolve as Qd}from"node:path";var ad=["AKIA","ASIA","ghp_","gho_","ghu_","ghs_","ghr_","github_pat_","glpat-","xox","npm_","pypi-","rk_","sk-","sk_","gsk_","xai-","pplx-","bastn_","tgp_v1_","flp_","wfr_","fw_","fwp_","tp-","psk-"];function Xe(n){let t=0,r={allocateSegment(){return t++},getNextSegmentIndex(){return t},recordGlobal(e){n.record({kind:"step",scope:"global",step:e})},recordSegment(e,a=r.currentSegmentIndex){if(a===void 0)return;n.record({kind:"step",scope:"segment",segmentIndex:a,step:e})}};return r}function Ye(n={}){let t=[],r=n.maxEvents??512,e={maxTextLength:n.maxTextLength??2048,maxListLength:n.maxListLength??128,maxObjectProperties:n.maxObjectProperties??n.maxListLength??128,maxDepth:n.maxDepth??16},a=0,l,d=new Set;return{record(s){if(l)return;try{if(!s||t.length>=r){a++;return}t.push(Ht(ld(s,e,d)))}catch{a++}},finish(s){if(l)return l;try{l=Ht({events:Object.freeze(t),droppedEvents:a,terminal:dd(s,e,d)})}catch{a++,l=Object.freeze({events:Object.freeze(t),droppedEvents:a,terminal:Object.freeze({result:"blocked",reason:"trace unavailable".slice(0,e.maxTextLength),segment:"trace unavailable".slice(0,e.maxTextLength)})})}return l}}}function ld(n,t,r){if(n.kind!=="step")throw TypeError("invalid trace event");let{scope:e,step:a}=n;Hn(a,r,t);let l=At(a,t,r);if(e==="global")return{kind:"step",scope:"global",step:l};if(e!=="segment")throw TypeError("invalid trace event scope");return{kind:"step",scope:"segment",segmentIndex:n.segmentIndex,step:l}}function dd(n,t,r){let e=n.result;if(e==="allowed")return Object.freeze({result:"allowed"});if(e!=="blocked")throw TypeError("invalid trace terminal");let a=n.ruleId,l={result:"blocked",reason:X2(n.reason,t,r),segment:X2(n.segment,t,r)};if(a)return Object.freeze({...l,ruleId:X2(a,t,r)});return Object.freeze(l)}function Hn(n,t,r,e=0,a=new WeakSet){if(Ae(n)){let s=n.slice(0,r.maxTextLength);if(!Wt(s))return;for(let c of Qe(s))for(let L of c.match(/[^\s"'()$]+/g)??[])t.add(Re(L));return}if(!He(n)||e>=r.maxDepth||a.has(n))return;if(a.add(n),We(n)){let s=Math.min(n.length,r.maxListLength);for(let c=0;c<s;c++)Hn(n[c],t,r,e+1,a);return}let l=0,d=new Set;for(let s in n){if(!Object.hasOwn(n,s))continue;if(l>=r.maxObjectProperties)break;l++,Hn(s,t,r);let c=X2(s,r,t);if(d.has(c))continue;d.add(c),Hn(n[s],t,r,e+1,a)}}function At(n,t,r,e=0,a=new WeakSet){if(Ae(n))return X2(n,t,r);if(!He(n))return n;if(e>=t.maxDepth)return;if(a.has(n))return;if(a.add(n),We(n)){let s=[],c=Math.min(n.length,t.maxListLength);for(let L=0;L<c;L++)s.push(At(n[L],t,r,e+1,a));return s}let l={},d=0;for(let s in n){if(!Object.hasOwn(n,s))continue;if(d>=t.maxObjectProperties)break;d++;let c=X2(s,t,r);if(Object.hasOwn(l,c))continue;Object.defineProperty(l,c,{value:At(n[s],t,r,e+1,a),enumerable:!0,configurable:!0,writable:!0})}return l}function X2(n,t,r){let e=n.slice(0,t.maxTextLength),a=Wt(e)?Ze(e):e,l=r.size>0?id(a,r):a;return(sd(l)?Je(l):l).slice(0,t.maxTextLength)}function sd(n){return n.includes("PRIVATE KEY")||n.includes("://")||n.includes("eyJ")||n.includes(":")&&/(?:authorization|cookie|x-api-key|api-key|(?:^|\s)(?:-u|--user)(?:\s|=))/i.test(n)||n.length>=14&&ad.some((t)=>n.includes(t))||n.length>=49&&/\b[a-f0-9]{32}\.[A-Za-z0-9]{16}\b/.test(n)}function id(n,t){return n.replace(/[^\s"'()$]+/g,(r)=>t.has(Re(r))?"<redacted>":r)}function Re(n){let t=2166136261,r=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619),r=Math.imul(r^n.charCodeAt(n.length-e-1),16777619);return`${t>>>0}:${r>>>0}:${n.length}`}function Ht(n){if(n!==null&&n!==void 0&&!Object.isFrozen(n)){for(let t of Object.values(n))Ht(t);Object.freeze(n)}return n}function Ae(n){return n!==Object(n)&&Object.prototype.toString.call(n)==="[object String]"}function He(n){return n!==null&&Object(n)===n}function We(n){return Array.isArray(n)}function Ve(n,t,r,e){let a=e??Me(),l=r??a.getCommandProgram(n,t.shell??"auto"),d=Ye(),s=Xe(d),c=l.dialect==="powershell"?a.getCommandProgram(n,"posix"):l,L=Ke(c);s.recordGlobal({type:"parse",input:n,segments:L.map((v)=>[...v])});let u=ze(n,{...t,analyzePartialProgram:!0,trace:s},l,a),p=s.getNextSegmentIndex();if(u&&p>0&&p<L.length)s.recordSegment({type:"segment-skipped",index:p,reason:"prior-segment-blocked"},p);let f=u?u.ruleId?{result:"blocked",reason:u.reason,segment:u.evidence.find((v)=>v.kind==="command")?.segment??n,ruleId:u.ruleId}:{result:"blocked",reason:u.reason,segment:u.evidence.find((v)=>v.kind==="command")?.segment??n}:{result:"allowed"};return Object.freeze({decision:u,trace:d.finish(f),program:l})}import{resolve as cd}from"node:path";function Mt(n){let t=Se().safeParse(n);if(!t.success)return{ok:!1,errors:Ce(t.error.issues)};return{ok:!0,config:{version:1,rules:t.data.rules??[]}}}function Ld(n){let t=Mt(n);return{errors:t.ok?[]:t.errors,ruleNames:new Set(Ue(n).map((r)=>r.toLowerCase()))}}function Kt(n){let t=Te(n);if(!t.ok)return t.result;return Ld(t.parsed)}function Te(n){try{return ud(Ge(n)?n:ln(n))}catch(t){let r=t instanceof Error?t.message:String(t);return Wn(t instanceof SyntaxError?"Invalid JSON":r)}}function ud(n){try{let t=g(n);if(t===null)return Wn(`File not found: ${n.path}`);if(!t.trim())return Wn("Config file is empty");return{ok:!0,parsed:i.json().parse(JSON.parse(t))}}catch(t){let r=t instanceof Error?t.message:String(t);return Wn(t instanceof SyntaxError?"Invalid JSON":r)}}function Wn(n){return{ok:!1,result:{errors:[n],ruleNames:new Set}}}function _e(n){return cd(n??process.cwd(),".safety-net.json")}function a2(n){let t=Te(n);if(!t.ok)return t.result;let r=Oe(t.parsed);return{errors:r.errors,ruleNames:r.sources}}import{isAbsolute as pd,join as Mn,relative as vd,resolve as Ee,sep as od}from"node:path";async function A2(n={}){let t=_t(n);return bd(t,await Kn(t,Y2()))}function bd(n,t){if(!t.ok)return t;let r=C(n),e=[...new Set(l2(r.configPath,r.lockPath,n,r.filesystemScope))];if(e.length===0)return t;return{ok:!1,errors:e,warnings:t.warnings,entries:t.entries}}async function Kn(n,t,r,e={}){let a=null,l=!1;try{let d=C(n),s=Ct(d.configTarget);if(!s.ok)return s.result;let c=s.config;if(n.check)return $d(c,d,n);a={target:d.lockTarget,content:g(d.lockTarget)};let L=Ot(d.lockTarget);if(L.errors.some((h)=>h.startsWith("Unable to access ")))return{ok:!1,errors:L.errors,warnings:[],entries:[]};if(n.only&&L.errors.length>0)return{ok:!1,errors:L.errors,warnings:[],entries:[]};let u=L.errors.length>0?null:L.lock,p=n.only?e1(c,u,n.only):{ok:!0,specs:c.rules};if(!p.ok)return p.result;if(n.only&&!u&&p.specs.length<c.rules.length)return{ok:!1,errors:[`No lockfile available for partial update; run ${t1}`],warnings:[],entries:[]};let f=(await yd(p.specs,(h)=>l1(h,d.configDir,n,u,d.filesystemScope,t),t)).map((h)=>gd(h,u,r));for(let h of f)qd(h.content,h.entry,d.configDir,n,d.filesystemScope);let v=n.only?Dd(c,u,f):f.map((h)=>h.entry);l=!0,T(d.lockTarget,{version:1,rulebooks:v},void 0,e._testAfterPolicyRename);let o=new Map(f.map((h)=>[h.entry.spec,h.rulebook.rules.length])),b=kd(v,d.configDir,n,d.filesystemScope,e);return{ok:!0,errors:[],warnings:b,entries:v.map((h)=>md(h,o))}}catch(d){if(l&&a){let s=i1(a);if(s)return s}return Ln(d instanceof Error?d:Error(String(d)))}}async function Tt(n,t={}){return fd(n,_t(t),Y2())}async function fd(n,t,r,e={}){let a=null,l=!1;try{let d=C(t),s=g(d.configTarget);a={target:d.configTarget,content:s};let c=Ct(d.configTarget);if(!c.ok)return c.result;let L=c.config,u=n1(n)?await d1(n,r):[{spec:n}],p=u.map((o)=>o.spec),f=[...new Set([...L.rules,...p])];if(f.length>St)return wd();if(f.length!==L.rules.length)l=!0,T(d.configTarget,{version:1,rules:f,overrides:L.overrides??{},transparent_wrappers:L.transparent_wrappers??[]},void 0,e._testAfterPolicyRename);let v=await Kn(t,r,new Map(u.filter((o)=>!!o.display_ref).map((o)=>[o.spec,o.display_ref])),e);if(!v.ok)dn(d.configTarget,s);return v}catch(d){if(l&&a){let s=i1(a);if(s)return s}return Ln(d instanceof Error?d:Error(String(d)))}}async function yd(n,t,r=Y2()){if(n.length>St)throw Error(Ut);let e=n.map((c,L)=>({source:c,index:L})),a=[],l=0,d,s=Array.from({length:Math.min(n.length,r1.concurrency)},async()=>{while(!d){let c=e[l];if(!c)return;l++;try{a[c.index]=await t(c.source,c.index,r.controller.signal)}catch(L){if(!d)d={value:L},l=e.length,r.controller.abort(L);return}}});if(await Promise.all(s),d)throw d.value;return a}function wd(){return{ok:!1,errors:[Ut],warnings:[],entries:[]}}function _t(n){return{cwd:n.cwd,cacheConfigDir:n.cacheConfigDir,userConfigDir:n.userConfigDir,userConfigPath:n.userConfigPath,projectConfigPath:n.projectConfigPath,global:n.global,check:n.check,only:n.only,refresh:n.refresh}}function hd(n){return{..._t(n),deleteSource:n.deleteSource}}async function Et(n,t={}){try{return await xd(n,hd(t),{})}catch(r){return Ln(r instanceof Error?r:Error(String(r)))}}async function xd(n,t,r){let e=C(t),a=O(e.configTarget);if(a.errors.length>0)return{ok:!1,errors:a.errors,warnings:[],entries:[]};if(!a.config)return{ok:!1,errors:[`No config found at ${e.configPath}`],warnings:[],entries:[]};let l=Ot(e.lockTarget);if(l.errors.length>0)return{ok:!1,errors:l.errors,warnings:[],entries:[]};let d=a1(a.config.rules,l.lock,n);if(!d.ok)return d.result;let s=t.deleteSource?jd(e.configDir,d.specs,l.lock,e.filesystemScope):{ok:!0,dirs:[]};if(!s.ok)return s.result;let c=g(e.configTarget);if(c===null)return Ln(Error("Rules config is unavailable."));try{T(e.configTarget,{version:1,rules:a.config.rules.filter((p)=>!d.specs.includes(p)),overrides:a.config.overrides??{},transparent_wrappers:a.config.transparent_wrappers??[]},void 0,r._testAfterPolicyRename)}catch(p){throw dn(e.configTarget,c),p}let L=await Kn(t,Y2(),void 0,r);if(!L.ok)return dn(e.configTarget,c),L;let u=Bd(s.dirs,r,e.filesystemScope);if(!u.ok){dn(e.configTarget,c);let p=await Kn(t,Y2(),void 0,r);if(!p.ok)return{ok:!1,errors:[...u.result.errors,...p.errors],warnings:p.warnings,entries:p.entries};return u.result}return L}async function $d(n,t,r){let e=s1(n,t.lockPath,t.configDir,r,r.global?"user":"project",t.filesystemScope);return{ok:e.errors.length===0&&e.warnings.length===0,errors:[...e.errors,...e.warnings],warnings:[],entries:e.entries}}function gd(n,t,r){let e=t?.rulebooks.find((l)=>l.spec===n.entry.spec&&l.kind==="github"),a=r?.get(n.entry.spec)??(e?.kind==="github"?e.display_ref:void 0);if(!a||n.entry.kind!=="github")return n;return{...n,entry:{...n.entry,display_ref:a}}}function Dd(n,t,r){let e=new Set(n.rules),a=new Set(t?.rulebooks.map((d)=>d.spec)??[]),l=new Map(r.map((d)=>[d.entry.spec,d.entry]));return[...(t?.rulebooks.filter((d)=>e.has(d.spec))??[]).map((d)=>l.get(d.spec)??d),...r.filter((d)=>!a.has(d.entry.spec)).map((d)=>d.entry)]}function md(n,t){return{...n,ruleCount:t.get(n.spec)}}function qd(n,t,r,e,a){let l=Vt(t,Gt(r,e));x2(D(a,l),n)}function kd(n,t,r,e,a){let l=Gt(t,r),d=zn(l),s=D(e,d),c=R2(s);if(!c)return[];let L=n.map((p)=>D(e,Vt(p,l))),u=c.filter((p)=>p.kind==="directory").map((p)=>({directory:D(e,Mn(d,p.name)),identity:D(e,Mn(d,p.name,Ne))})).filter((p)=>!L.some((f)=>Pe(p.identity,f))).map((p)=>p.directory);for(let p of u)Ie(p);return u.flatMap((p)=>{try{return Jd(p,a),[]}catch{return["Unable to prune rules policy cache safely."]}})}function jd(n,t,r,e){let a=new Map(r?.rulebooks.map((L)=>[L.spec,L])??[]),l=t.flatMap((L)=>{let u=a.get(L);if(!u)return cn.test(L)?[]:["--delete-source can only delete local rulebook sources"];return u.kind==="local-directory"?[]:["--delete-source can only delete local rulebook sources"]}),d=t.map((L)=>{let u=a.get(L);return Mn(n,u?.kind==="local-directory"?u.path:L)}),s=l.length>0?[]:d.flatMap((L)=>Fd(n,L,e)),c=[...l,...s];return c.length>0?{ok:!1,result:{ok:!1,errors:c,warnings:[],entries:[]}}:{ok:!0,dirs:d}}function Fd(n,t,r){let e=Ee(n),a=Ee(t),l=vd(e,a);if(l===""||l===".."||l.startsWith(`..${od}`)||pd(l))return[`Refusing to delete local rulebook source outside ${n}: ${t}`];let d=D(r,a),s=R2(d);if(!s)return[`Local rulebook source directory not found: ${t}`];let c=s.find((L)=>L.name==="rulebook.json");if(!c)return[`Local rulebook source directory is missing rulebook.json: ${t}`];if(c.kind!=="file")throw new A(r.label);if(g(D(r,Mn(a,"rulebook.json"))),s.length>1)return[`Local rulebook source directory contains extra files: ${t}. delete manually if you really want to remove the directory.`];return[]}function Bd(n,t,r){let e=n.flatMap((a)=>{try{return Zd(D(r,a),t),[]}catch(l){return[`Failed to delete local rulebook source ${a}: ${l instanceof Error?l.message:String(l)}`]}});return e.length>0?{ok:!1,result:{ok:!1,errors:e,warnings:[],entries:[]}}:{ok:!0}}function Jd(n,t){if(t._testPruneRulebookCacheDir){t._testPruneRulebookCacheDir(n.path);return}zt(n)}function Zd(n,t){if(t._testDeleteLocalSourceDir){t._testDeleteLocalSourceDir(n.path);return}zt(n)}function dn(n,t){if(t===null){sn(n);return}x2(n,t)}function i1(n){try{dn(n.target,n.content)}catch(t){return Ln(t instanceof Error?t:Error(String(t)))}return}function Ln(n){return{ok:!1,errors:[n.message],warnings:[],entries:[]}}function K2(n,t){let r=Yd(t),e=o1(r),a={effectiveLevel:e.effectiveLevel,selectedPreset:r.policySnapshot.policy.safety.level??"standard",effectiveCapabilities:e.effectiveCapabilities,destructiveCommandRuleOverrides:r.policySnapshot.policy.destructiveCommandRuleOverrides},{configSource:l,configValid:d}=Xd({cwd:t?.cwd,userConfigDir:t?.userConfigDir});if(!n||!n.trim())return{trace:{steps:[{type:"error",message:"No command provided"}],segments:[]},result:"allowed",configSource:l,configValid:d,...a};let s=Rd(n,r);if(s){let o={trace:{steps:[],segments:[{index:0,steps:[{type:"rule-check",ruleModule:s.ruleModule,ruleFunction:s.ruleFunction,matched:!0,reason:s.reason}]}]},result:"blocked",reason:W(s.reason),segment:W(s.target),configSource:l,configValid:d,...a};if(s.ruleId)o.ruleId=W(s.ruleId);return o}let c=Ve(n,r),L=c.decision,u=L?.ruleId??Ad(n,r),p=pn.find((o)=>o.id===u&&o.activationCapability),f=p?e.policy.effectiveDestructiveCommandRules[p.id]:void 0,v={trace:Wd(c.trace),result:L?"blocked":"allowed",reason:L?W(L.reason):void 0,segment:L?W(L.evidence.find((o)=>o.kind==="command")?.segment??n):void 0,ruleId:L?.ruleId?W(L.ruleId):void 0,customRule:Hd(Md(L?.ruleId,r.policySnapshot)),configSource:l,configValid:d,...a};if(p&&f)v.ruleActivation={id:p.id,...f};return v}function Xd(n){let t=_(n?.cwd),r=n?.userConfigPath??E(n),e=P({cwd:n?.cwd,userConfigDir:n?.userConfigDir,userConfigPath:n?.userConfigPath});try{if(g(e.projectConfigTarget)!==null){if(a2(e.projectConfigTarget).errors.length===0)return{configSource:t,configValid:!0};return{configSource:t,configValid:!1}}}catch(a){if(a instanceof A)return{configSource:t,configValid:!1};throw a}try{if(g(e.userConfigTarget)!==null){let a=a2(e.userConfigTarget);return{configSource:r,configValid:a.errors.length===0}}return{configSource:null,configValid:!0}}catch(a){if(a instanceof A)return{configSource:r,configValid:!1};throw a}}function Yd(n){let t=Qd(n?.cwd??process.cwd()),r=n?.policySnapshot??M({cwd:t,userConfigDir:n?.userConfigDir}),e=d2(r.policy);return{cwd:t,effectiveCwd:t,policySnapshot:r,environment:c1(),protectedGitMetadata:v1(t),effectiveCapabilities:e.capabilities,strict:n?.strict??e.strict,paranoidRm:e.paranoidRm,paranoidInterpreters:e.paranoidInterpreters,worktreeMode:e.worktreeMode}}function Rd(n,t){let r=t.cwd??process.cwd(),e=L1(M2("",{command:n},{kind:"command",shell:"posix"},{executionCwd:r,configCwd:r},n)),a=y1(e);if(a)return{reason:f1,target:a.target,ruleId:"policy-protection",ruleModule:"policy-protection",ruleFunction:"findPolicyConfigMutationTarget"};let l=p1(e,t.protectedGitMetadata);if(l)return{reason:u1,target:l.target,ruleId:"git-metadata-protection",ruleModule:"git-metadata-protection",ruleFunction:"findGitMetadataMutationTarget"};let d=t.policySnapshot.policy,s=d.secretProtection.enabled===!1?null:h1(e,d.secretProtection,{strict:t.strict});if(s)return{reason:w1,target:s.target,ruleId:s.ruleId,ruleModule:"secret-protection",ruleFunction:"findSensitiveTarget"};return null}function Ad(n,t){let r=t.policySnapshot.policy,e=vn({...r,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:{...r.destructiveCommandRuleOverrides,...Object.fromEntries(pn.flatMap((a)=>a.activationCapability?[[a.id,"on"]]:[]))}},t.policySnapshot.state==="degraded"?{diagnostics:t.policySnapshot.diagnostics,reason:t.policySnapshot.reason}:void 0);return b1(n,{...t,policySnapshot:e,strict:!0,paranoidRm:!0,paranoidInterpreters:!0})?.ruleId}function Hd(n){if(!n)return;let t={id:W(n.id)};if(n.rulebook)t.rulebook={name:W(n.rulebook.name),version:W(n.rulebook.version)};if(n.source)t.source=W(n.source);if(n.override)t.override={type:"reason",reason:W(n.override.reason)};return t}function Wd(n){let t=n.events.flatMap((e)=>e.kind==="step"&&e.scope==="global"?[e.step]:[]),r=new Map;for(let e of n.events){if(e.kind!=="step"||e.scope!=="segment")continue;let a=r.get(e.segmentIndex)??{index:e.segmentIndex,steps:[]};a.steps.push(e.step),r.set(e.segmentIndex,a)}return{steps:t,segments:[...r.values()]}}function Md(n,t){let r=n?.replace(/^custom\./,"");if(!r||!t.policy.rules.some((e)=>e.name===r))return;return t.ruleMetadata[r]??Object.freeze({id:r})}function Ud(n){let t=z2(),r=F({label:"logs",booleans:{all:["--all"],suspect:["--suspect"],json:["--json"],pruneLegacy:["--prune-legacy"],dryRun:["--dry-run"]},values:{id:["--id"],limit:["--limit"],since:["--since"],agent:["--agent"],rule:["--rule"],session:["--session"],project:["--project"]}},n);if(e2(r.errors))return null;if(r.values.id!==void 0&&!/^[a-f0-9]{16}$/.test(r.values.id))return console.error("--id must be 16 hexadecimal characters"),null;let e=r.values.limit===void 0?20:x1(r.values.limit);if(e===null)return console.error("--limit must be a positive number"),null;let a=r.values.since===void 0?Math.min(30,t):x1(r.values.since);if(a===null||a>t)return console.error(`--since must be a positive number of days no greater than ${t}`),null;let l={limit:e,limitExplicit:r.values.limit!==void 0,since:a,sinceExplicit:r.values.since!==void 0,all:r.flags.all,json:r.flags.json,suspect:r.flags.suspect,pruneLegacy:r.flags.pruneLegacy,dryRun:r.flags.dryRun,id:r.values.id,agent:r.values.agent,rule:r.values.rule,session:r.values.session,project:r.values.project===void 0?void 0:Sd(r.values.project)};if(l.id&&(l.agent!==void 0||l.rule!==void 0||l.session!==void 0||l.project!==void 0||l.suspect||l.sinceExplicit||l.limitExplicit))return console.error("--id cannot be combined with --agent, --rule, --session, --project, --suspect, --since, or --limit"),null;if(l.pruneLegacy&&(l.id!==void 0||l.agent!==void 0||l.rule!==void 0||l.session!==void 0||l.project!==void 0||l.suspect||l.all||l.sinceExplicit||l.limitExplicit))return console.error("--prune-legacy cannot be combined with --id, --agent, --rule, --session, --project, --suspect, --all, --since, or --limit"),null;if(l.dryRun&&!l.pruneLegacy)return console.error("--dry-run requires --prune-legacy"),null;return l}async function D1(n,t={}){let r=Ud(n);if(!r)return 1;let e=t.logsDir??s2();if(r.pruneLegacy)return Cd(e,r.json,r.dryRun);if(!e)return console.log(r.json?"[]":r.id?`No retained audit log entry found for id ${B(r.id)}.`:"No audit log entries found."),0;g2(e);let a={count:0},l=v2(e,a).flatMap((u)=>an(u,a).map((p)=>({entry:p,file:u})));if(a.count>0)console.error(`warning: ${a.count} audit log ${a.count===1?"source":"sources"} could not be read; these results are incomplete`);if(r.id)return Ed(l,r,t.timeZone);let d=Date.now()-r.since*24*60*60*1000,s=l.filter((u)=>Pd(u,r,e,d)),c=r.suspect?Rt(s.map((u)=>u.entry)):null,L=(c?s.filter((u)=>c.has(u.entry)):s).sort((u,p)=>Date.parse(p.entry.ts)-Date.parse(u.entry.ts)).slice(0,r.limit);if(r.json)return console.log(JSON.stringify(L.map((u)=>u.entry),null,2)),0;if(L.length===0)return console.log("No audit log entries found."),0;for(let u of L)console.log(ns(u.entry,t.timeZone));return 0}function Cd(n,t,r){let e=n?Td(n).map((s)=>Gd(n,s)):[];if(r)return Od(e,t);let a=[],l=0,d=0;for(let s of e){let c=$1(s,{throwIfNoEntry:!1})?.size??0,L=_d(s);if(L){a.push(`${g1(s)}: ${L}`);continue}l++,d+=c}if(t)return console.log(JSON.stringify({removedFiles:l,removedBytes:d,failedFiles:a.length})),a.length===0?0:1;console.log(l===0&&a.length===0?"No legacy audit log files found.":`Removed ${l} legacy audit log ${l===1?"file":"files"} (${m1(d)}).`);for(let s of a)console.error(`Could not remove ${B(s)}`);if(console.log("Nested v2 audit logs were not changed."),l>0)console.log("This deletion cannot be undone.");return a.length===0?0:1}function Od(n,t){let r=n.reduce((e,a)=>e+($1(a,{throwIfNoEntry:!1})?.size??0),0);if(t)return console.log(JSON.stringify({dryRun:!0,files:n.length,bytes:r})),0;if(console.log(n.length===0?"No legacy audit log files found.":`Would remove ${n.length} legacy audit log ${n.length===1?"file":"files"} (${m1(r)}).`),console.log("Nested v2 audit logs are not included."),n.length>0)console.log("Run the same command without --dry-run to delete them.");return 0}function Td(n){try{return Kd(n,{withFileTypes:!0}).filter((t)=>t.isFile()&&t.name.endsWith(".jsonl")).map((t)=>t.name)}catch{return[]}}function _d(n){try{return zd(n),null}catch(t){return t instanceof Error?t.message:String(t)}}function m1(n){let t=["B","KiB","MiB","GiB"],r=Math.min(Math.floor(Math.log2(Math.max(n,1))/10),t.length-1);return`${Math.round(n/1024**r*10)/10} ${t[r]}`}function Ed(n,t,r){let e=n.filter((l)=>l.entry.id===t.id);if(e.length>1)return console.error(`Multiple audit log entries found for id ${B(t.id??"")}.`),1;if(t.json)return console.log(JSON.stringify(e.map((l)=>l.entry),null,2)),0;let a=e[0];if(!a)return console.log(`No retained audit log entry found for id ${B(t.id??"")}.`),0;return console.log(ts(a.entry,r)),0}function Pd(n,t,r,e){if(!t.all&&n.entry.decision==="allow")return!1;if(Date.parse(n.entry.ts)<e)return!1;if(t.agent!==void 0&&n.entry.agent!==t.agent)return!1;if(t.rule!==void 0&&n.entry.ruleId!==t.rule)return!1;if(t.session!==void 0&&!Id(n,r,t.session))return!1;if(t.project!==void 0&&!Nd(n.entry.cwd,t.project))return!1;return!0}function Id(n,t,r){if(n.entry.sessionId===r)return!0;return Vd(n.file)===t&&g1(n.file,".jsonl")===r}function Nd(n,t){if(!n)return!1;return n===t||n.startsWith(`${t}/`)}function ns(n,t){let r=B(n.id??"-"),e=B(n.decision??"deny"),a=n.cwd?`  [${B(n.cwd)}]`:"",l=n.segment||n.command,d=l===n.command?"":"↳ ",s=l.length>50?`${l.slice(0,50)}…`:l;return`${r.padEnd(16)}  ${B(q1(n.ts,t))}  ${e.padEnd(5)}  ${B(n.agent??"-").padEnd(15)}  ${B(n.ruleId??"-").padEnd(20)}  ${d}${B(s)}${a}`}function ts(n,t){let r=(a)=>B(a===void 0||a===null||a===""?"-":a),e=n.shape?`${n.agent??"-"} (shape: ${n.shape})`:n.agent??"-";return[`id:        ${r(n.id)}`,`ts:        ${r(q1(n.ts,t))}`,`decision:  ${r(n.decision)}`,`agent:     ${r(e)}`,`level:     ${r(n.level)}`,`tool:      ${r(n.toolName)}`,`rule:      ${r(n.ruleId)}`,`intent:    ${r(n.intent)}`,`stage:     ${r(n.failureStage)}`,`error:     ${r(n.errorCode)}`,`session:   ${r(n.sessionId)}`,`cwd:       ${r(n.cwd)}`,`version:   ${r(n.v)}`,`truncated: ${r(n.truncated===!0?"yes":void 0)}`,`reason:    ${r(n.reason)}`,`command:   ${r(n.command)}`,`segment:   ${r(n.segment)}`].join(`
`)}function q1(n,t){let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return new Intl.DateTimeFormat("sv-SE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:t}).format(r)}function x1(n){let t=Number(n);return Number.isFinite(t)&&t>0?t:null}var k1={name:"doctor",aliases:["--doctor"],description:"Run diagnostic checks to verify installation and configuration",usage:"doctor [options]",options:[{flags:"--json",description:"Output diagnostics as JSON"},{flags:"--skip-update-check",description:"Skip npm registry version check"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net doctor","cc-safety-net doctor --json","cc-safety-net doctor --skip-update-check"]};var j1={name:"explain",description:"Show step-by-step analysis trace of how a command would be analyzed",usage:"explain [options] <command>",argument:"<command>",options:[{flags:"--json",description:"Output analysis as JSON"},{flags:"--cwd",argument:"<path>",description:"Use custom working directory"},{flags:"-h, --help",description:"Show this help"}],examples:['cc-safety-net explain "git reset --hard"','cc-safety-net explain --json "rm -rf /"','cc-safety-net explain --cwd /tmp "git status"']};var F1={name:"gui",description:"Open the local policy editor GUI",usage:"gui [options]",options:[{flags:"--no-open",description:"Print the URL without opening a browser"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net gui","cc-safety-net gui --no-open"]};import{isAbsolute as M1,relative as bs}from"node:path";var B1=i.json(),rs=i.looseObject({}),A1=i.string(),es=i.union([i.string().transform((n)=>Buffer.from(n,"utf-8")),i.instanceof(Uint8Array).transform((n)=>Buffer.from(n))]),as=i.looseObject({cwd:i.string().optional(),tool_input:B1.optional(),toolCall:i.looseObject({args:B1.optional()}).optional()}),ls=i.looseObject({cwd:i.string().optional(),toolCall:i.looseObject({args:i.looseObject({Cwd:i.string().optional()}).optional()}).optional()}),ds=8388608;function ss(n,t){console.log(JSON.stringify(n(Z1(t))))}async function is(n){let t;try{t=(await Lr(process.stdin)).trim()}catch{n({reason:"Failed to parse hook input JSON."});return}if(!t){n({reason:"Missing hook input JSON."});return}return ur(t,n,"Failed to parse hook input JSON.")}async function Lr(n){let t=[],r=0;for await(let e of n){let a=es.parse(e);if(r+=a.byteLength,r>ds)throw cs(n),Error("hook input byte limit exceeded");t.push(a)}return Buffer.concat(t,r).toString("utf-8")}function cs(n){try{if(n.destroy){Promise.resolve(n.destroy()).catch(()=>{});return}if(n.cancel)Promise.resolve(n.cancel()).catch(()=>{})}catch{}}function ur(n,t,r){try{return JSON.parse(n)}catch{t({reason:r});return}}function X(n,t){let r=t.get(n);return r?{kind:"command",shell:r}:{kind:X1(n)}}function I(n,t,r,e){let a=n===void 0?process.cwd():n,l=A1.safeParse(a),d=l.success&&l.data.trim()!==""?i2([l.data]):void 0;if(d)return{configCwd:d,executionCwd:d};return H(e,t,r,l.success?l.data:void 0),null}function H(n,t,r,e){let a;try{a=cr(t)}catch(l){if(!(l instanceof V2))throw l}n(Vn({command:a,segment:e,toolName:r}))}async function Ls(n){let t=await is(n.outputDeny);if(t===void 0)return;if(!rs.safeParse(t).success){H(n.outputDeny);return}if(!n.isSupported(t))return;let r=n.getAgent?.(t)??n.agent,e=n.agent===r?void 0:n.agent,a=os(t),l=(o,b)=>{J1(o,()=>n.getSessionId(t),{agent:r,["shape"]:e,toolName:b,cwd:a}),n.outputDeny(o)},d=n.getToolName(t),s=A1.safeParse(d);if(!s.success||s.data.trim()===""){H((o)=>l(o),vs(t));return}let c=s.data,L=(o)=>l(o,c),u;try{u=n.getToolInput(t,c,L)}catch(o){if(!(o instanceof V2))throw o;H(L,void 0,c);return}if(!u.ok)return;let p=n.getContext(t,u.input,c,L);if(!p)return;let f;try{f=cr(u.input)}catch(o){if(!(o instanceof V2))throw o;H(L,void 0,c);return}let v=M2(c,u.input,u.route,p,f??null);try{let o=Gn(v,{guard:{auditAllowed:Y1(),dependencies:n.guardDependencies},audit:{agent:r,["shape"]:e,getSessionId:()=>n.getSessionId(t)}}),b=ir(o,{includeEvidence:!0,toolName:o.stage==="command-analysis"?void 0:c});if(b){n.outputDeny(b);return}n.outputAllow?.()}catch(o){if(!(o instanceof R1))throw o;us(o);let b=ir(o.evaluation,{includeEvidence:!0,toolName:o.evaluation.stage==="command-analysis"?void 0:c});if(b)n.outputDeny(b);return}}function us(n){if(!on(m.debug))return;console.error(`CC Safety Net debug: ${ps(n.stage)}: ${Q1(n.cause)}`)}function ps(n){if(n==="policy-protection")return"hook policy protection failed";if(n==="config-load")return"hook config loading failed";if(n==="secret-protection")return"hook secret protection failed";return"hook analysis failed"}function vs(n){let t=as.safeParse(n);if(!t.success)return;if(t.data.tool_input!==void 0)return t.data.tool_input;return t.data.toolCall?.args}function os(n){let t=ls.safeParse(n);if(!t.success)return null;return t.data.cwd??t.data.toolCall?.args?.Cwd??null}async function Y(n){let t=(a)=>ss(n.createDenyOutput,a),r=n.createAllowOutput;await Ls({...n,outputDeny:t,outputAllow:r?()=>console.log(JSON.stringify(r())):void 0})}var fs=i.record(i.string(),i.json()),Sn=i.object({toolCall:i.object({name:i.string().optional(),args:fs.optional()}).optional(),stepIdx:i.number().optional(),conversationId:i.string().optional(),workspacePaths:i.array(i.string()).optional(),transcriptPath:i.string().optional(),artifactDirectoryPath:i.string().optional()}),t7=i.union([i.json(),i.undefined()]),ys=new Map([["run_command","auto"]]),ws=new Set(["absolutepath","directorypath","file_path","filepath","path","searchdirectory","searchpath","target_file","targetfile"]);function K1(n){return X(n,ys)}async function z1(){await Y({agent:"antigravity-cli",createDenyOutput:(n)=>({decision:"deny",reason:n}),isSupported:()=>!0,getToolName:(n)=>Sn.safeParse(n).data?.toolCall?.name,getToolInput:(n,t)=>({ok:!0,input:Ds(Sn.safeParse(n).data?.toolCall?.args,t),route:K1(t)}),getContext:(n,t,r,e)=>{let a=Sn.safeParse(n);if(!a.success)return b2(e,t,r),null;return hs(a.data,t,r,e)},getSessionId:(n)=>Sn.safeParse(n).data?.conversationId})}function hs(n,t,r,e){let l=gs(n).flatMap((u)=>{let p=i2([u]);return p?[p]:[]});if(!l[0])return b2(e,t,r),null;if(r!=="run_command"){let u;try{u=xs(t,r,l)}catch(p){if(p instanceof V2)return b2(e,void 0,r),null;if(!(p instanceof Un))throw p;return b2(e,t,r),null}if(!u)return b2(e,t,r),null;return{configCwd:u,executionCwd:u,policyConfigCwds:l}}let d=n.toolCall?.args;if(!d||!Object.hasOwn(d,"Cwd"))return{configCwd:l[0],executionCwd:l[0],policyConfigCwds:l};let s=d.Cwd,c=i.string().refine((u)=>u.trim()!=="").safeParse(s);if(!c.success)return b2(e,t,r),null;let L=hn(c.data,l);if(L){let u=V1(L,l);if(!u)return b2(e,t,r,c.data),null;return{configCwd:u,executionCwd:L,policyConfigCwds:l}}return b2(e,t,r,c.data),null}function xs(n,t,r){let e=K1(t),a=[...H1(n,ws),...e.kind==="patch"?W1(n):[]].filter(M1),l=Cn(),d=new Set(a.flatMap((s)=>{let c=V1(yn(s,wn,l),r);return c?[c]:[]}));if(d.size>1)return null;return[...d][0]??r[0]??null}function V1(n,t){return t.filter((r)=>$s(n,r)).reduce((r,e)=>e.length>r.length?e:r,"")||null}function $s(n,t){let r=bs(t,n);return r===""||!r.startsWith("..")&&!M1(r)}function b2(n,t,r,e){let a=i.string().safeParse(t?.command).data;n(Vn({command:a,segment:e,toolName:r}))}function gs(n){if(n.workspacePaths===void 0)return[process.cwd()];let t=n.workspacePaths?.filter((r)=>r.trim()!=="")??[];return i2(t)?t:[]}function Ds(n,t){if(!n)return;if(t!=="run_command")return n;let r=i.string().min(1).safeParse(n.CommandLine).data;if(r)return{...n,command:r};return Object.fromEntries(Object.entries(n).filter(([e])=>e!=="command"))}var G2=[{id:"antigravity-cli",displayName:"Antigravity CLI",doctorOrder:3,runtime:{order:1,flags:["-ac","--agy-cli"],description:"Run as Antigravity CLI PreToolUse hook",legacyTopLevelFlags:[]},install:{order:2,flag:"--agy-cli",installLabel:"Antigravity CLI",helpTarget:"Antigravity CLI hook config",probeCommand:["agy","--version"]}},{id:"claude-code",displayName:"Claude Code",doctorOrder:1,runtime:{order:2,displayName:"Coding CLI",flags:["-cc","--coding-cli"],legacyFlags:["--claude-code"],description:"Run as Coding CLI PreToolUse hook",legacyTopLevelFlags:["-cc","--claude-code"]},install:{order:3,flag:"--claude-code",installLabel:"Claude Code",helpTarget:"Claude Code plugin",probeCommand:["claude","--version"]}},{id:"codex",displayName:"Codex",doctorOrder:4,install:{order:4,flag:"--codex",installLabel:"Codex",helpTarget:"Codex plugin",probeCommand:["codex","--version"]}},{id:"copilot-cli",displayName:"GitHub Copilot CLI",doctorOrder:7,runtime:{order:5,flags:["-cp","--copilot-cli"],description:"Run as GitHub Copilot CLI PreToolUse hook",legacyTopLevelFlags:["-cp","--copilot-cli"]},install:{order:7,flag:"--copilot-cli",installLabel:"GitHub Copilot CLI",helpTarget:"GitHub Copilot CLI plugin",probeCommand:["copilot","--binary-version"]}},{id:"gemini-cli",displayName:"Gemini CLI",doctorOrder:6,runtime:{order:4,flags:["-gc","--gemini-cli"],description:"Run as Gemini CLI BeforeTool hook",legacyTopLevelFlags:["-gc","--gemini-cli"]},install:{order:6,flag:"--gemini-cli",installLabel:"Gemini CLI",helpTarget:"Gemini CLI extension",probeCommand:["gemini","--version"]}},{id:"hermes-agent",displayName:"Hermes Agent",doctorOrder:8,runtime:{order:6,flags:["-ha","--hermes-agent"],description:"Run as Hermes Agent pre_tool_call hook",legacyTopLevelFlags:[]},install:{order:8,flag:"--hermes-agent",installLabel:"Hermes Agent",helpTarget:"Hermes Agent plugin",probeCommand:["hermes","--version"]}},{id:"kimi-code",displayName:"Kimi Code",doctorOrder:9,runtime:{order:7,flags:["-kc","--kimi-code"],description:"Run as Kimi Code PreToolUse hook",legacyTopLevelFlags:[]},install:{order:9,flag:"--kimi-code",installLabel:"Kimi Code",helpTarget:"Kimi Code hook config",probeCommand:["kimi","--version"]}},{id:"openclaw",displayName:"OpenClaw",doctorOrder:10,install:{order:10,flag:"--openclaw",installLabel:"OpenClaw",helpTarget:"OpenClaw plugin",probeCommand:["openclaw","--version"]}},{id:"opencode",displayName:"OpenCode",doctorOrder:11,install:{order:11,flag:"--opencode",installLabel:"OpenCode",helpTarget:"OpenCode plugin",probeCommand:["opencode","--version"]}},{id:"pi",displayName:"Pi",doctorOrder:12,install:{order:12,flag:"--pi",installLabel:"Pi",helpTarget:"Pi package",probeCommand:["pi","--version"]}},{id:"cursor",displayName:"Cursor",doctorOrder:5,runtime:{order:3,flags:["-cu","--cursor"],description:"Run as Cursor preToolUse hook",legacyTopLevelFlags:[]},install:{order:5,flag:"--cursor",installLabel:"Cursor",helpTarget:"Cursor hook config",probeCommand:["cursor","--version"]}},{id:"amp",displayName:"Amp Code",doctorOrder:2,install:{order:1,flag:"--amp",installLabel:"Amp Code",helpTarget:"Amp Code plugin",probeCommand:["amp","--version"]}}],G1=G2.slice().sort((n,t)=>n.doctorOrder-t.doctorOrder).map((n)=>n.id),S1=G2.filter((n)=>("runtime"in n)).slice().sort((n,t)=>n.runtime.order-t.runtime.order).map((n)=>({id:n.id,displayName:"displayName"in n.runtime?n.runtime.displayName:n.displayName,flags:n.runtime.flags,legacyFlags:"legacyFlags"in n.runtime?n.runtime.legacyFlags:[],description:n.runtime.description,legacyTopLevelFlags:n.runtime.legacyTopLevelFlags})),c2=G2.slice().sort((n,t)=>n.install.order-t.install.order).map((n)=>({id:n.id,...n.install})).map(({order:n,...t})=>t),e7=Object.fromEntries(G2.map((n)=>[n.id,n.displayName]));function f2(n){return G2.find((t)=>t.id===n)?.displayName??n}function y2(n){return G2.find((t)=>t.id===n)?.install.installLabel??n}import{homedir as ms}from"node:os";import{isAbsolute as U1,join as pr}from"node:path";function O1(n){if(n!==void 0&&n!==null&&!U1(n))return"unknown";try{let t=Cn(),r=n?yn(n,wn,t):void 0,e=process.env.HOME||ms(),a=[["codex",process.env.CODEX_HOME||pr(e,".codex")],["copilot-cli",process.env.COPILOT_HOME||pr(e,".copilot")],["claude-code",process.env.CLAUDE_CONFIG_DIR||pr(e,".claude")]],l=r?a.flatMap(([d,s])=>{if(!U1(s))return[];return C1(r,yn(s,wn,t))?[d]:[]}):[];if(l.length===1)return l[0]??"unknown";if(l.length>1)return"unknown"}catch(t){if(t instanceof Un)return"unknown";return"unknown"}if(process.env.CLAUDECODE==="1"||Boolean(process.env.CLAUDE_CODE_ENTRYPOINT))return"claude-code";return"unknown"}var vr="PreToolUse",T1="BeforeTool",_1="pre_tool_call",or="PreToolUse";var qs=new Map([["Bash","posix"],["PowerShell","powershell"]]);function ks(n){return X(n,qs)}async function E1(){await Y({agent:"claude-code",getAgent:(n)=>O1(n.transcript_path),createDenyOutput:(n)=>({hookSpecificOutput:{hookEventName:vr,permissionDecision:"deny",permissionDecisionReason:n}}),isSupported:(n)=>n.hook_event_name===vr,getToolName:(n)=>n.tool_name,getToolInput:(n,t)=>({ok:!0,input:n.tool_input,route:ks(t)}),getContext:(n,t,r,e)=>I(n.cwd,t,r,e),getSessionId:(n)=>n.session_id})}var js=new Map([["bash","auto"],["Bash","auto"]]),Fs=i.string(),Bs=i.string().trim().min(1);function Js(n){return X(n,js)}async function P1(){await Y({agent:"copilot-cli",createDenyOutput:(n)=>({permissionDecision:"deny",permissionDecisionReason:n}),isSupported:()=>!0,getToolName:(n)=>n.toolName,getToolInput:(n,t,r)=>{let e=Fs.safeParse(n.toolArgs).data;if(!e)return r({reason:"Failed to parse toolArgs JSON."}),{ok:!1};let a=ur(e,r,"Failed to parse toolArgs JSON.");if(a===void 0)return{ok:!1};return{ok:!0,input:a,route:Js(t)}},getContext:(n,t,r,e)=>I(n.cwd,t,r,e),getSessionId:(n)=>Bs.safeParse(n.sessionId).data})}var x7=i.looseObject({conversation_id:i.json().optional(),hook_event_name:i.json().optional(),tool_name:i.json().optional(),tool_input:i.json().optional(),cwd:i.json().optional(),workspace_roots:i.json().optional()}),Zs=i.looseObject({working_directory:i.json().optional()}),S2=i.string(),Qs=i.array(i.json()),Xs=new Map([["Shell","auto"]]);function Ys(n){return X(n,Xs)}async function I1(){await Y({agent:"cursor",createDenyOutput:(n)=>({permission:"deny",user_message:n,agent_message:n}),createAllowOutput:()=>({permission:"allow"}),isSupported:()=>!0,getToolName:(n)=>n.tool_name,getToolInput:(n,t)=>({ok:!0,input:n.tool_input,route:Ys(t)}),getContext:Rs,getSessionId:(n)=>{let t=S2.safeParse(n.conversation_id);return t.success?t.data:void 0}})}function Rs(n,t,r,e){let a=As(n);if(!a[0])return H(e,t,r),null;let l=hn(Ws(n.cwd),a);if(!l){let L=S2.safeParse(n.cwd);return H(e,t,r,L.success?L.data:void 0),null}let d=Zs.safeParse(t);if(!d.success)return{configCwd:l,executionCwd:l,policyConfigCwds:a};if(!Object.hasOwn(d.data,"working_directory"))return{configCwd:l,executionCwd:l,policyConfigCwds:a};let s=S2.safeParse(d.data.working_directory);if(!s.success||s.data.trim()==="")return H(e,t,r),null;let c=hn(s.data,a);if(!c)return H(e,t,r,s.data),null;return{configCwd:l,executionCwd:c,policyConfigCwds:a}}function As(n){return Hs(n).flatMap((t)=>{let r=i2([t]);return r?[r]:[]})}function Hs(n){if(n.workspace_roots===void 0){let r=S2.safeParse(n.cwd);return r.success&&r.data.trim()!==""?[r.data]:[]}let t=Qs.safeParse(n.workspace_roots);if(!t.success)return[];return t.data.flatMap((r)=>{let e=S2.safeParse(r);return e.success&&e.data.trim()!==""?[e.data]:[]})}function Ws(n){let t=S2.safeParse(n);return t.success&&t.data.trim()!==""?t.data:"."}var Ms=new Map([["run_shell_command","auto"]]);function Ks(n){return X(n,Ms)}async function N1(){await Y({agent:"gemini-cli",createDenyOutput:(n)=>({decision:"deny",reason:n,systemMessage:n}),isSupported:(n)=>n.hook_event_name===T1,getToolName:(n)=>n.tool_name,getToolInput:(n,t)=>({ok:!0,input:n.tool_input,route:Ks(t)}),getContext:(n,t,r,e)=>I(n.cwd,t,r,e),getSessionId:(n)=>n.session_id})}import{resolve as zs}from"node:path";var Vs=i.looseObject({workdir:i.json().optional()}),Gs=new Map([["terminal","posix"]]);async function n0(){await Y({agent:"hermes-agent",createDenyOutput:(n)=>({action:"block",message:n}),isSupported:(n)=>n.hook_event_name===_1,getToolName:(n)=>n.tool_name,getToolInput:(n,t)=>({ok:!0,input:Vs.safeParse(n.tool_input).data??{},route:X(t,Gs)}),getContext:Ss,getSessionId:(n)=>n.session_id})}function Ss(n,t,r,e){let a=I(n.cwd,t,r,e);if(!a)return null;if(!Object.hasOwn(t,"workdir"))return a;let l=i.string().trim().min(1).safeParse(t.workdir).data;if(!l)return H(e,t,r),null;let d=i2([zs(a.configCwd,l)]);if(!d)return H(e,t,r,l),null;return{...a,executionCwd:d}}var Us=new Map([["Bash","posix"]]);function Cs(n){return X(n,Us)}async function t0(){await Y({agent:"kimi-code",createDenyOutput:(n)=>({hookSpecificOutput:{hookEventName:or,permissionDecision:"deny",permissionDecisionReason:n}}),isSupported:(n)=>n.hook_event_name===or,getToolName:(n)=>n.tool_name,getToolInput:(n,t)=>({ok:!0,input:n.tool_input,route:Cs(t)}),getContext:(n,t,r,e)=>I(n.cwd,t,r,e),getSessionId:(n)=>n.session_id})}var Os={"antigravity-cli":z1,"claude-code":E1,"copilot-cli":P1,cursor:I1,"gemini-cli":N1,"hermes-agent":n0,"kimi-code":t0},U2=S1.map((n)=>({...n,run:Os[n.id]}));function r0(n){let t=F({label:"hook",booleans:Object.fromEntries(U2.map((e)=>[e.id,[...e.flags,...e.legacyFlags]]))},n);if(t.errors.length>0)return;let r=U2.filter((e)=>t.flags[e.id]);return r.length===1?r[0]:void 0}function e0(n){return U2.find((t)=>t.legacyTopLevelFlags.some((r)=>r===n))}var Ts=U2.map((n)=>({flags:n.flags.join(", "),description:n.description})),_s=U2.flatMap((n)=>n.flags.map((t)=>`cc-safety-net hook ${t}`)),a0={name:"hook",description:"Run as an agent CLI hook (reads JSON from stdin)",usage:"hook INTEGRATION_FLAG",options:[...Ts,{flags:"-h, --help",description:"Show this help"}],examples:_s};var l0={name:"install",description:"Install CC Safety Net into a coding agent CLI",usage:"install [TARGET_FLAG]",options:[...c2.map((n)=>({flags:n.flag,description:`Install ${n.helpTarget}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net install",...c2.map((n)=>`cc-safety-net install ${n.flag}`)]},d0={name:"uninstall",description:"Uninstall CC Safety Net from a coding agent CLI",usage:"uninstall [TARGET_FLAG]",options:[...c2.map((n)=>({flags:n.flag,description:`Uninstall ${n.helpTarget}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net uninstall",...c2.map((n)=>`cc-safety-net uninstall ${n.flag}`)]},s0={name:"update",description:"Update every installed CC Safety Net integration to the latest version",usage:"update",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net update"]};var i0={name:"logs",description:"Browse audit log entries recorded by hooks",usage:"logs [options]",options:[{flags:"--id",argument:"<id>",description:"Show one entry from retained history by its 16-character id (not guaranteed once it is older than the configured retention)"},{flags:"--limit",argument:"<n>",description:"Maximum entries to print",default:"20"},{flags:"--since",argument:"<days>",description:"Only include entries newer than this many days (max: the configured audit retention, 1-365)",default:"30"},{flags:"--agent",argument:"<name>",description:"Filter by agent name"},{flags:"--rule",argument:"<ruleId>",description:"Filter by rule id"},{flags:"--session",argument:"<id>",description:"Filter by session id"},{flags:"--project",argument:"<path>",description:"Filter by project path"},{flags:"--suspect",description:"Only denials that look like false positives"},{flags:"--all",description:"Include allow entries"},{flags:"--prune-legacy",description:"Permanently delete all legacy root-level logs; nested logs are untouched"},{flags:"--dry-run",description:"With --prune-legacy, report what would be deleted and delete nothing"},{flags:"--json",description:"Output entries as JSON"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net logs --id 3fa9c2d1a70e8b42","cc-safety-net logs --agent claude-code","cc-safety-net logs --project . --since 7","cc-safety-net logs --suspect --since 7","cc-safety-net logs --json","cc-safety-net logs --prune-legacy --dry-run","cc-safety-net logs --prune-legacy"]};var C2={name:"rule",description:"Manage CC Safety Net rule config and rulebook sources",usage:"rule <subcommand>",subcommands:[{usage:"init [--example]",description:"Create inert rule config"},{usage:"add <source>",description:"Add a rulebook source and sync"},{usage:"remove <source>",description:"Remove a rulebook source and sync"},{usage:"update [source]",description:"Refresh rulebook lock/cache state"},{usage:"sync",description:"Sync configured rulebooks"},{usage:"list",description:"List active rulebooks"},{usage:"wrapper add <command>",description:"Trust a transparent command wrapper"},{usage:"wrapper remove <command>",description:"Remove a transparent command wrapper"},{usage:"wrapper list",description:"List transparent command wrappers"},{usage:"migrate [--cleanup]",description:"Migrate legacy inline rules"},{usage:"doc",description:"Print the rulebook authoring guide"},{usage:"verify",description:"Validate rule config files"}],options:[{flags:"-g, --global",description:"Use user-scope rule config"},{flags:"--check",description:"Check without changing lock/cache state"},{flags:"--cleanup",description:"Delete legacy files after rule migrate verifies them"},{flags:"--delete-source",description:"Delete clean local source directory on remove"},{flags:"--example",description:"Create an inactive example rulebook with rule init"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net rule init","cc-safety-net rule init --example","cc-safety-net rule wrapper add rtk","cc-safety-net rule add project-rules","cc-safety-net rule sync","cc-safety-net rule migrate --cleanup","cc-safety-net rule verify"]};var c0={name:"status",description:"Show what the runtime is enforcing right now",usage:"status",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net status"]};var L0={name:"statusline",description:"Print status line with mode indicators for shell integration",usage:"statusline --claude-code",options:[{flags:"-cc, --claude-code",description:"Print status line for Claude Code"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net statusline -cc","cc-safety-net statusline --claude-code"]};var u0=[c0,k1,i0,j1,C2,l0,s0,d0,a0,F1,L0];function Es(n){return n.aliases??[]}function Ps(n){return!n.hidden}function On(n){let t=n.toLowerCase();return u0.find((r)=>r.name.toLowerCase()===t||Es(r).some((e)=>e.toLowerCase()===t))}function p0(){return u0.filter(Ps)}import{readFileSync as Is}from"node:fs";import{basename as Ns}from"node:path";function Tn(n=7,t=s2()){let r=Date.now()-n*24*60*60*1000,e=[],a=new Set,l=0,d,s,c,L;if(t)g2(t);let u={count:0},p=t?v2(t,u):[];for(let v of p)try{let b=Is(v,"utf-8").trim().split(`
`).filter(Boolean);for(let h of b)try{let $=An.parse(JSON.parse(h));if($.decision==="allow")continue;let x=new Date($.ts).getTime();if(x>=r){if(l++,a.add($.sessionId??Ns(v,".jsonl")),s===void 0||x<=s)d=$.ts,s=x;if(L===void 0||x>L)c=$.ts,L=x;ni(e,$,x)}}catch{u.count++}}catch{u.count++}let f=e.map((v)=>({timestamp:v.ts,command:v.command,reason:v.reason,relativeTime:Yt(new Date(v.ts))}));return{totalBlocked:l,sessionCount:a.size,recentEntries:f,oldestEntry:d,newestEntry:c,unreadable:u.count}}function ni(n,t,r){let e=n.findIndex((a)=>r>new Date(a.ts).getTime());if(e===-1){if(n.length<3)n.push(t);return}if(n.splice(e,0,t),n.length>3)n.pop()}import{dirname as ti}from"node:path";function v0(n,t,r,e,a){let l;try{if(g(e)===null)return{path:n,exists:!1,valid:!1,ruleCount:0};l=a2(e),l.errors.push(...l2(n,t,{userConfigDir:r},a))}catch(s){if(!(s instanceof A))throw s;l={errors:[s.message],ruleNames:new Set}}let d={path:n,exists:!0,valid:l.errors.length===0,ruleCount:l.ruleNames.size};if(l.errors.length>0)d.errors=l.errors;return d}function ri(n,t){return{source:t,name:n.name,command:n.command,subcommand:n.subcommand,blockArgs:[...n.block_args],reason:n.reason}}function o0(n,t){let r=t?.userConfigPath??E(),e=t?.projectConfigPath??_(n),a=ti(r),l=o2({cwd:n,userConfigPath:r,projectConfigPath:e,userConfigDir:a}),d=P({cwd:n,userConfigPath:r,projectConfigPath:e,userConfigDir:a}),s=new Map(l.rulebooks.flatMap((c)=>c.rules.map((L)=>[L,c.source])));return{userConfig:v0(r,H2({userConfigPath:r}),a,d.userConfigTarget,d.userScope),projectConfig:v0(e,W2(e),a,d.projectConfigTarget,d.projectScope),effectiveRules:l.rules.map((c)=>ri(c,s.get(c.name)??"project")),shadowedRules:[]}}var ei=[{flag:m.level,description:"Safety level preset: standard, strict, or paranoid",defaultBehavior:"standard"},{flag:m.strict,description:"Legacy; equivalent to safety.overrides.fail_closed",defaultBehavior:"permissive"},{flag:m.paranoid,description:"Legacy; equivalent to safety.overrides.paranoid_rm and paranoid_interpreters",defaultBehavior:"off"},{flag:m.paranoidRm,description:"Legacy; equivalent to safety.overrides.paranoid_rm",defaultBehavior:"off"},{flag:m.paranoidInterpreters,description:"Legacy; equivalent to safety.overrides.paranoid_interpreters",defaultBehavior:"off"},{flag:m.worktree,description:"Allow local git discards in linked worktrees",defaultBehavior:"off"},{flag:m.debug,description:"Print diagnostic messages to stderr",defaultBehavior:"off"},{flag:m.auditScope,description:"Command decisions recorded: all, or blocked (privacy-minimizing, denials only)",defaultBehavior:"all"}];function b0(){return[...ei.map((n)=>({name:n.flag.name,value:lr(n.flag),isSet:dr(n.flag),legacyName:n.flag.legacyName,legacyValue:n.flag.legacyName?process.env[n.flag.legacyName]:void 0,legacyIsSet:n.flag.legacyName?process.env[n.flag.legacyName]!==void 0:void 0,description:n.description,defaultBehavior:n.defaultBehavior})),{name:"CC_SAFETY_NET_HOME",value:process.env.CC_SAFETY_NET_HOME,isSet:process.env.CC_SAFETY_NET_HOME!==void 0,description:"Override user-scope config/cache directory",defaultBehavior:"~/.cc-safety-net"}]}var f0={error:0,warning:1,info:2},ai=["policy","config","audit"];function li(n){return n.map((t)=>{if(t==="ownership")return"is not owned by the current user";if(t==="permissions")return"has unsafe permissions";if(t==="symlink")return"is a symbolic link";return"is not a directory"}).join(" and ")}var di=[{derive:(n)=>n.hooks.length>0&&n.hooks.every((t)=>!t.configured)?[{checkId:"integration.none-configured",severity:"error",title:"No integration configured",detail:"CC Safety Net is not connected to any supported coding-agent integration.",fixHint:"Run `cc-safety-net install` and configure at least one integration."}]:[]},{derive:(n)=>n.hooks.filter((t)=>t.inspectionStatus==="failed").map((t)=>{let r=f2(t.platform);return{checkId:"integration.inspection-failed",severity:"error",title:`${r} inspection failed`,detail:`Doctor could not verify the ${r} integration configuration.`,fixHint:`Correct the reported ${r} configuration error, then run \`cc-safety-net doctor\` again.`,integration:t.platform}})},{derive:(n)=>n.userConfig.exists&&!n.userConfig.valid?[{checkId:"config.user-invalid",severity:"error",title:"User configuration is invalid",detail:"Doctor could not load a valid user rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:n.userConfig.path}]:[]},{derive:(n)=>n.projectConfig.exists&&!n.projectConfig.valid?[{checkId:"config.project-invalid",severity:"error",title:"Project configuration is invalid",detail:"Doctor could not load a valid project rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:n.projectConfig.path}]:[]},{derive:(n)=>n.configState.state==="degraded"?[{checkId:"config.runtime-degraded",severity:"warning",title:"Runtime is enforcing a fallback configuration",detail:`The rejected candidate configuration is not active: ${n.configState.reason}`,fixHint:"Correct the named source, run `cc-safety-net rule sync` for a rule source, then rerun doctor."}]:[]},{derive:(n)=>{let t=n.environment.find((r)=>r.name==="CC_SAFETY_NET_AUDIT_SCOPE");return ar(t?.value)==="invalid"?[{checkId:"environment.audit-scope-invalid",severity:"warning",title:"Audit scope value is invalid",detail:"CC_SAFETY_NET_AUDIT_SCOPE is not `all` or `blocked`, so allowed command decisions are not recorded.",fixHint:"Set CC_SAFETY_NET_AUDIT_SCOPE to `all` or `blocked`, then restart the integration."}]:[]}},...ai.map((n)=>({derive:(t)=>t.posture.directories.filter((r)=>r.kind===n&&r.status==="unsafe").map((r)=>{let e={checkId:`posture.${n}-directory-unsafe`,severity:"error",title:`${n[0]?.toUpperCase()}${n.slice(1)} directory is unsafe`,detail:`The ${n} directory ${li(r.issues)}.`,fixHint:"Ensure this is a real directory owned by the current user with no group or other write access, then rerun doctor."};if(r.path)e.path=r.path;return e})})),{derive:(n)=>{let t=[...n.effectiveSafety.weakenedRuleOverrides].sort();return t.length>0?[{checkId:"posture.rule-overrides-weaken-preset",severity:"warning",title:"Rule overrides weaken the selected preset",detail:`Explicit overrides disable rules the resolved preset would enable: ${t.join(", ")}.`,fixHint:`Remove these \`off\` overrides or set them to \`on\`: ${t.join(", ")}.`}]:[]}}];function y0(n){return di.flatMap((t,r)=>t.derive(n).map((e,a)=>({finding:e,catalogOrder:r,occurrence:a}))).sort((t,r)=>f0[t.finding.severity]-f0[r.finding.severity]||t.catalogOrder-r.catalogOrder||t.occurrence-r.occurrence).map((t)=>t.finding)}function N(){return Boolean(process.stdout.isTTY&&!process.env.NO_COLOR)}var si=(n)=>N()?`\x1B[32m${n}\x1B[0m`:n,ii=(n)=>N()?`\x1B[33m${n}\x1B[0m`:n,ci=(n)=>N()?`\x1B[34m${n}\x1B[0m`:n,Li=(n)=>N()?`\x1B[35m${n}\x1B[0m`:n,ui=(n)=>N()?`\x1B[36m${n}\x1B[0m`:n,pi=(n)=>N()?`\x1B[31m${n}\x1B[0m`:n,vi=(n)=>N()?`\x1B[2m${n}\x1B[0m`:n,oi=(n)=>N()?`\x1B[1m${n}\x1B[0m`:n,y={green:si,yellow:ii,blue:ci,magenta:Li,cyan:ui,red:pi,dim:vi,bold:oi},bi="\x1B[0m",fi=[39,82,198,226,208,51,196,46,201,214,93,154,220,27,49,190,200,33,129,227,45,160,63,118,123,202];function yi(n){let t=n;return()=>{return t=(t*1664525+1013904223)%4294967296,t/4294967296}}function wi(n){let t=[...fi],r=yi(n);for(let e=t.length-1;e>0;e--){let a=Math.floor(r()*(e+1)),l=t.splice(a,1,...t.slice(e,e+1));t.splice(e,1,...l)}return t}function hi(n,t=0){if(!N())return"";let r=wi(t);return`\x1B[38;5;${r[n%r.length]}m`}function w0(n,t,r=0){if(!N())return`"${n}"`;return`${hi(t,r)}"${n}"${bi}`}var xi=new RegExp("\x1B\\[[0-9;]*m","g"),br=(n)=>n.replace(xi,"").length;function m2(n){let t=(n.headers??n.rows[0]??[]).map((d,s)=>{let c=Math.max(...n.rows.map((L)=>br(L[s]??"")));return Math.max(br(d),c)}),r=(d,s)=>d+" ".repeat(Math.max(0,s-br(d))),e=(d,s)=>s[0]+t.map((c)=>d.repeat(c+2)).join(s[1])+s[2],a=(d)=>`│ ${d.map((s,c)=>r(s,t[c]??0)).join(" │ ")} │`,l=n.headers?[`   ${a(n.headers)}`,`   ${e("─",["├","┼","┤"])}`]:[];return[`   ${e("─",["┌","┬","┐"])}`,...l,...n.rows.map((d)=>`   ${a(d)}`),`   ${e("─",["└","┴","┘"])}`].join(`
`)}function h0(n){let t=[];t.push("Hook Integration"),t.push($i(n));let r=[],e=[];for(let a of n){let l=f2(a.platform);if(a.errors&&a.errors.length>0)for(let d of a.errors)if(a.configured)r.push({platform:l,message:d});else e.push({platform:l,message:d})}for(let a of r)t.push(`   Warning (${a.platform}): ${a.message}`);for(let a of e)t.push(y.red(`   Error (${a.platform}): ${a.message}`));return t.join(`
`)}function $i(n){let t=["Platform","Discovery","Configuration","Inspection"],r=n.map((e)=>{let a=f2(e.platform);if(e.inspectionStatus==="not-inspected"){let c=y.dim("Not inspected");return[a,c,c,c]}let l=e.detected?y.green("Detected"):e.inspectionStatus==="failed"?y.red("Unknown"):y.dim("Not detected"),d=e.configured?y.green("Configured"):e.detected?y.yellow("Not configured"):e.inspectionStatus==="failed"?y.red("Unknown"):y.dim("Not applicable"),s=e.inspectionStatus==="verified"?y.green("Verified"):e.inspectionStatus==="failed"?y.red("Failed"):y.dim("Not applicable");return[a,l,d,s]});return m2({headers:t,rows:r})}function x0(n){let r=["Guard Engine Verification",`   Synthetic self-test: ${n.failed>0?y.red(`${n.passed}/${n.total} FAIL`):y.green(`${n.passed}/${n.total} passed`)}`],e=n.results.filter((a)=>!a.passed);if(e.length>0){r.push(""),r.push(y.red("   Failures:"));for(let a of e)r.push(y.red(`   • ${a.description}`)),r.push(y.red(`     expected ${a.expected}, got ${a.actual}`))}return r.join(`
`)}function gi(n){if(n.length===0)return"   (no custom rules)";let t=["Source","Name","Command","Block Args"],r=n.map((e)=>[e.source,e.name,e.subcommand?`${e.command} ${e.subcommand}`:e.command,e.blockArgs.join(", ")]);return m2({headers:t,rows:r})}function $0(n){let t=[];if(t.push("Configuration"),t.push(Di(n.userConfig,n.projectConfig)),t.push(""),n.effectiveRules.length>0)t.push(`   Effective rules (${n.effectiveRules.length} total):`),t.push(gi(n.effectiveRules));else t.push("   Effective rules: (none - using built-in rules only)");for(let r of n.shadowedRules)t.push(""),t.push(`   Note: Project rule "${r.name}" shadows user rule with same name`);return t.join(`
`)}function Di(n,t){let r=["Scope","Status"],e=(l)=>{if(!l.exists)return y.dim("N/A");if(!l.valid)return y.red(`Invalid (${l.errors?.[0]??"unknown error"})`);return y.green("Configured")},a=[["User",e(n)],["Project",e(t)]];return m2({headers:r,rows:a})}function g0(n){let t=[];return t.push("Environment"),t.push(mi(n)),t.join(`
`)}function D0(n){let t=["Effective Safety",`   Selected preset: ${n.effectiveSafety.selectedPreset}`,`   Effective: ${n.effectiveSafety.level}`],r=[["fail_closed","fail_closed"],["paranoid_rm","paranoid_rm"],["paranoid_interpreters","paranoid_interpreters"]];for(let[e,a]of r){let l=n.effectiveSafety.capabilities[e],d=l.enabled?y.green("ON"):y.dim("OFF"),s=l.sources.length>0?` (${l.sources.join(", ")})`:"";t.push(`   ${a}: ${d} via ${l.source}${s}`)}t.push(`   Stored rule customizations: ${n.effectiveSafety.ruleCounts.stored}`),t.push(`   Effective rule customizations: ${n.effectiveSafety.ruleCounts.effective}`);for(let[e,a]of Object.entries(n.effectiveSafety.ruleOverrides))t.push(`   ${e}: ${a}`);return t.join(`
`)}function m0(n){let t=["Findings"];if(n.length===0)return t.push("   No findings from inspected doctor facts."),t.join(`
`);for(let r of n){let e=`[${r.severity.toUpperCase()}] ${r.checkId}: ${B(r.title)}`,a=r.severity==="error"?y.red:r.severity==="warning"?y.yellow:y.blue;if(t.push(`   ${a(e)}`),t.push(`      ${B(r.detail)}`),r.path)t.push(`      Path: ${B(r.path)}`);if(r.fixHint)t.push(`      Fix: ${B(r.fixHint)}`)}return t.join(`
`)}function mi(n){let t=["Variable","Status","Legacy"],r=n.map((e)=>{let a=e.isSet?y.green("✓"):y.dim("✗"),l=e.legacyName&&e.legacyIsSet?`${e.legacyName} ${y.green("✓")}`:e.legacyName??"";return[e.name,a,l]});return m2({headers:t,rows:r})}function q0(n){let t=[];if(n.totalBlocked===0)t.push("Recent Activity"),t.push("   No blocked commands in the last 7 days"),t.push("   Tip: This is normal for new installations");else t.push(`Recent Activity · last 7 days (${n.totalBlocked} blocked / ${n.sessionCount} sessions)`),t.push(qi(n.recentEntries));if(n.unreadable>0)t.push(`   Warning: ${n.unreadable} audit log ${n.unreadable===1?"source":"sources"} could not be read; this summary is incomplete`);return t.join(`
`)}function qi(n){let t=["Time","Command"],r=n.map((e)=>{let a=B(e.command.replace(/\r\n|\r|\n/g," ↵ ").replace(/\t/g," ")),l=a.length>40?`${a.slice(0,37)}...`:a;return[e.relativeTime,l]});return m2({headers:t,rows:r})}function k0(n){let t=[];if(t.push("Update Check"),n.latestVersion===null&&!n.error)return t.push(_n([["Status",y.dim("Skipped")],["Installed",n.currentVersion]])),t.join(`
`);if(n.error)return t.push(_n([["Status",`${y.yellow("⚠")} Error`],["Installed",n.currentVersion],["Error",y.dim(n.error)]])),t.join(`
`);if(n.updateAvailable)return t.push(_n([["Status",`${y.yellow("⚠")} Update Available`],["Current",n.currentVersion],["Latest",y.green(n.latestVersion??"")]])),t.push(""),t.push("   Run: bunx cc-safety-net@latest doctor"),t.push("   Or:  npx cc-safety-net@latest doctor"),t.join(`
`);return t.push(_n([["Status",`${y.green("✓")} Up to date`],["Version",n.currentVersion]])),t.join(`
`)}function _n(n){return m2({rows:n})}function j0(n){let t=[];return t.push("System Info"),t.push(ki(n)),t.join(`
`)}function ki(n){let t=["Component","Version"],r=(l)=>{if(l===null)return y.dim("not found");return l},a=[{label:"cc-safety-net",value:n.version},{label:"Claude Code",value:n.claudeCodeVersion},{label:"Amp Code",value:n.ampVersion},{label:"Antigravity CLI",value:n.antigravityCliVersion},{label:"Codex",value:n.codexCliVersion},{label:"Cursor",value:n.cursorVersion},{label:"Gemini CLI",value:n.geminiCliVersion},{label:"GitHub Copilot CLI",value:n.copilotCliVersion},{label:"Hermes Agent",value:n.hermesAgentVersion},{label:"Kimi Code",value:n.kimiCodeVersion},{label:"OpenClaw",value:n.openClawVersion},{label:"OpenCode",value:n.openCodeVersion},{label:"Pi",value:n.piCliVersion},{label:"Node.js",value:n.nodeVersion},{label:"npm",value:n.npmVersion},{label:"Bun",value:n.bunVersion},{label:"Platform",value:n.platform}].map((l)=>[l.label,r(l.value)]);return m2({headers:t,rows:a})}function F0(n){if(n.findings.length===0)return y.green(`
No findings from inspected doctor facts.`);let t={error:n.findings.filter((l)=>l.severity==="error").length,warning:n.findings.filter((l)=>l.severity==="warning").length,info:n.findings.filter((l)=>l.severity==="info").length},r=["error","warning","info"].filter((l)=>t[l]>0).map((l)=>`${t[l]} ${l}`),e=n.findings.length===1?"finding":"findings",a=`
${n.findings.length} ${e}: ${r.join(", ")}.`;if(t.error>0)return y.red(a);if(t.warning>0)return y.yellow(a);return y.blue(a)}import{lstatSync as ji}from"node:fs";import{dirname as fr}from"node:path";var Fi=i.object({getuid:i.function({output:i.number()})}),Bi=i.object({code:i.string().optional()});function yr(n,t){try{let r=ji(t);if(r.isSymbolicLink())return{kind:n,path:t,status:"unsafe",issues:["symlink"]};if(!r.isDirectory())return{kind:n,path:t,status:"unsafe",issues:["not-directory"]};if(process.platform==="win32")return{kind:n,path:t,status:"unknown",issues:[]};let e=Fi.safeParse(process);if(!e.success)return{kind:n,path:t,status:"unknown",issues:[]};let a=[...r.uid!==e.data.getuid()?["ownership"]:[],...(r.mode&18)!==0?["permissions"]:[]];return{kind:n,path:t,status:a.length>0?"unsafe":"safe",issues:a}}catch(r){if(Bi.safeParse(r).data?.code==="ENOENT")return{kind:n,path:t,status:"not-applicable",issues:[]};return{kind:n,path:t,status:"unknown",issues:[]}}}function B0(n){let t=s2();return{directories:[yr("policy",fr(fr(n))),yr("config",fr(n)),...t?[yr("audit",t)]:[{kind:"audit",status:"unknown",issues:[]}]]}}import{spawn as Ji}from"node:child_process";import{existsSync as J0}from"node:fs";import{delimiter as Zi,extname as Qi,join as Xi}from"node:path";import{stripVTControlCharacters as Z0}from"node:util";var Yi=i.string(),X0=Hi(),Ri=5000,Ai="_CC_SAFETY_NET_TEST_SPAWN_PLATFORM";function Hi(){try{return Yi.parse("2.0.5")}catch{return"dev"}}function j(){return X0}function wr(n,t){let r=n[t];if(r)return r;let e=Object.keys(n).find((a)=>a.toLowerCase()===t.toLowerCase()&&!!n[a]);return e?n[e]:r}function Wi(n){return(wr(n,"PATHEXT")||".COM;.EXE;.BAT;.CMD").split(";").filter((t)=>t.length>0)}function Mi(n,t){let r=Qi(n)?[n]:[...Wi(t).map((e)=>`${n}${e}`),n];if(n.includes("/")||n.includes("\\"))return r.find((e)=>J0(e))??n;return(wr(t,"PATH")??"").split(Zi).flatMap((e)=>r.map((a)=>Xi(e,a))).find((e)=>J0(e))??n}function Q0(n){if(!/[\s"&|<>^]/.test(n))return n;return`"${n.replace(/"/g,'""')}"`}function w2(n,t){let[r,...e]=n,a=t[Ai]==="win32"?"win32":process.platform;if(!r||a!=="win32")return{cmd:r??"",args:e};let l=Mi(r,t);if(!/\.(?:bat|cmd)$/i.test(l))return{cmd:l,args:e};return{cmd:wr(t,"COMSPEC")??"cmd.exe",args:["/d","/c",["call",Q0(l),...e.map(Q0)].join(" ")]}}var O2=async(n,t=Ri)=>{let r=await Ki(n,{timeoutMs:t});if(r.code!==0)return null;return Z0(r.stdout).trim()||Z0(r.stderr).trim()||null};function Ki(n,t){let[r,...e]=n;if(!r)return Promise.resolve({code:null,stdout:"",stderr:""});return new Promise((a)=>{try{let l=w2([r,...e],process.env),d=Ji(l.cmd,l.args,{stdio:["ignore","pipe","pipe"]}),s=!1,c="",L="";d.stdout.on("data",(f)=>{c+=f.toString()}),d.stderr.on("data",(f)=>{L+=f.toString()});let u=(f)=>{if(s)return;s=!0,clearTimeout(p),a(f)},p=setTimeout(()=>{d.kill(),u({code:null,stdout:c,stderr:L})},t.timeoutMs);d.on("close",(f)=>{u({code:f,stdout:c,stderr:L})}),d.on("error",()=>{u({code:null,stdout:c,stderr:L})})}catch{a({code:null,stdout:"",stderr:""})}})}function Q(n){if(!n)return null;let t=/Claude Code\s+(\d+\.\d+\.\d+)/i.exec(n);if(t)return t[1]??null;let r=/v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/i.exec(n);if(r)return r[1]??null;return n.split(`
`)[0]?.trim()||null}async function xn(n=O2){let[t,r,e,a,l,d,s,c,L,u,p,f,v,o,b,h,$]=await Promise.all([n(["claude","--version"]),n(["agy","--version"]),n(["opencode","--version"]),n(["codex","--version"]),n(["codex","plugin","list"]),n(["gemini","--version"]),n(["copilot","--binary-version"]),n(["hermes","--version"]),n(["kimi","--version"]),n(["openclaw","--version"]),n(["pi","--version"]),n(["cursor","--version"]),n(["amp","--version"]),n(["amp","plugins","list"],30000),n(["node","--version"]),n(["npm","--version"]),n(["bun","--version"])]);return{version:X0,claudeCodeVersion:Q(t),antigravityCliVersion:Q(r),openCodeVersion:Q(e),codexCliVersion:Q(a),codexPluginListOutput:l,geminiCliVersion:Q(d),copilotCliVersion:Q(s),hermesAgentVersion:Q(c),kimiCodeVersion:Q(L),openClawVersion:Q(u),piCliVersion:Q(p),cursorVersion:Q(f),ampVersion:Q(v),ampPluginListOutput:o,nodeVersion:Q(b),npmVersion:Q(h),bunVersion:Q($),platform:`${process.platform} ${process.arch}`}}var zi=i.object({version:i.string()});function hr(n,t){if(t==="dev")return!1;let r=n.split(".").map(Number),e=t.split(".").map(Number),[a=0,l=0,d=0]=r,[s=0,c=0,L=0]=e;if(a!==s)return a>s;if(l!==c)return l>c;return d>L}async function T2(){let n=j(),t=new AbortController,r=setTimeout(()=>t.abort(),3000);try{let e=await fetch("https://registry.npmjs.org/cc-safety-net/latest",{signal:t.signal});if(!e.ok)return{currentVersion:n,latestVersion:null,updateAvailable:!1,error:`npm registry returned ${e.status}`};let a=zi.parse(await e.json()),l=hr(a.version,n);return{currentVersion:n,latestVersion:a.version,updateAvailable:l}}catch(e){return{currentVersion:n,latestVersion:null,updateAvailable:!1,error:e instanceof Error?e.message:"Network error"}}finally{clearTimeout(r)}}import*as z0 from"node:readline";var H0=(n)=>`\x1B[${n}B`,Vi=(n)=>`\x1B[${n}A`;var Y0=["░","▒","▓","╱","╲","┃","━","┏","┓","┗","┛","╋"];function Gi(n){return new Promise((t)=>setTimeout(t,n))}function Si(n,t,r){if(!r)return t(n);if(r.aborted)return Promise.resolve();return new Promise((e,a)=>{let l=()=>r.removeEventListener("abort",d),d=()=>{l(),e()};r.addEventListener("abort",d,{once:!0}),t(n).then(()=>{l(),e()},(s)=>{l(),a(s)})})}function $n(n,t){return n&&n>0?n:t}function En(n){return Math.max(0,Math.min(1,n))}function _2(n){return Math.max(0,Math.min(255,Math.round(n)))}function xr(n){return n<=0.0031308?12.92*n:1.055*n**0.4166666666666667-0.055}function Ui(n,t,r){let e=r*Math.PI/180,a=t*Math.cos(e),l=t*Math.sin(e),d=(n+0.3963377774*a+0.2158037573*l)**3,s=(n-0.1055613458*a-0.0638541728*l)**3,c=(n-0.0894841775*a-1.291485548*l)**3;return{blue:_2(xr(En(-0.0041960863*d-0.7034186147*s+1.707614701*c))*255),green:_2(xr(En(-1.2684380046*d+2.6097574011*s-0.3413193965*c))*255),red:_2(xr(En(4.0767416621*d-3.3077115913*s+0.2309699292*c))*255)}}function $r(n,t){let r=(t*n*180/Math.PI%360+360)%360;return Ui(0.72,0.15,r)}function W0(n,t=0.1){let r=$r(t,n);return`\x1B[38;2;${r.red};${r.green};${r.blue}m`}function Ci(n,t){return{blue:_2(n.blue+(255-n.blue)*t),green:_2(n.green+(255-n.green)*t),red:_2(n.red+(255-n.red)*t)}}function M0(n,t,r){let e=Math.imul(n+2654435769,2246822507)^Math.imul(t+3266489909,668265263)^Math.imul(r+374761393,2654435761),a=e^e>>>15,l=Math.imul(a,739982445),d=l^l>>>12,s=Math.imul(d,695872825);return((s^s>>>15)>>>0)/4294967296}function Oi(n,t,r){let e=Math.floor(M0(n,t,r)*Y0.length);return Y0[e]??"░"}function R0(n){let t=En(n);return t*t*t*(t*(t*6-15)+10)}function Ti(n){if(n.length===0)return"";let t=[],r=!1,e="";for(let a of n){let l=`${a.red};${a.green};${a.blue}`;if(a.bold!==r)t.push(a.bold?"\x1B[1m":"\x1B[22m"),r=a.bold;if(l!==e)t.push(`\x1B[38;2;${l}m`),e=l;t.push(a.character)}return`${t.join("")}\x1B[22m\x1B[39m`}function _i(n,t,r,e,a){return n.map((l,d)=>({...$r(r,e+t+d/a),bold:!1,character:l}))}function Ei(n,t,r,e,a,l,d,s){let c=Math.max(1,e*0.75),L=Math.min(1,r/c),u=a*R0(L),p=Math.max(0,(r-c)/Math.max(1,e-c)),f=(1-R0(r/e))*s*2,v=0.35*Math.max(0,1-p*2),o=L>=1,b=Math.min(n.length,Math.ceil(u+2+1));return n.slice(0,b).map((h,$)=>{let x=$r(l,d+t+$/s+f),w=$+M0(t,$,7919)*2-1;if(w>u+2)return{...x,bold:!1,character:" "};let Z=u-w,Z2=0.8*Math.exp(-(Z*Z)/12.5),en=Math.min(0.9,Z2+v),Qt=!o&&w>u-4;return{...Ci(x,en),bold:en>0.3,character:Qt?Oi(t,$,r):h}})}function A0(n){return`\x1B[?2026h${n.map((t,r)=>`\x1B8${r>0?H0(r):""}${Ti(t)}`).join("")}\x1B[?2026l`}async function gr(n,t={}){if(!n)return;let r=t.output??process.stdout,e=t.sleep??Gi,a=$n(t.frequency,0.1),l=t.seed??0,d=$n(t.speed,40),s=$n(t.spread,3),c=$n(t.frameRate,60),L=Math.max(1,Math.floor($n(t.duration,12))),u=n.split(`
`).map((b)=>Array.from(b)),p=Math.max(...u.map((b)=>b.length)),f=1000*L*u.filter((b)=>b.length>0).length/d,v=p>0?Math.max(1,Math.ceil(f/(1000/c))):0,o=v>0?f/v:0;r.write(`\x1B[?25l${u.length>1?`${`
`.repeat(u.length-1)}${Vi(u.length-1)}`:""}\x1B7`);try{for(let b=1;b<=v;b+=1){if(t.signal?.aborted)break;r.write(A0(u.map((h,$)=>Ei(h,$,b,v,p,a,l,s)))),await Si(o,e,t.signal)}}finally{if(r.write(A0(u.map((b,h)=>_i(b,h,a,l,s)))),r.write("\x1B8"),u.length>1)r.write(H0(u.length-1));r.write(`
\x1B[0m\x1B[?25h`)}}var K0=["┏━┛┏━┛  ┏━┛┏━┃┏━┛┏━┛━┏┛┃ ┃  ┏━ ┏━┛━┏┛","┃  ┃    ━━┃┏━┃┏━┛┏━┛ ┃ ━┏┛  ┃ ┃┏━┛ ┃ ","━━┛━━┛  ━━┛┛ ┛┛  ━━┛ ┛  ┛   ┛ ┛━━┛ ┛ "].join(`
`);function Pi(n){return Boolean(n.isTTY)}async function gn(n={}){let t=n.output??process.stdout;if(!Pi(t))return;let r=n.input??process.stdin,e={duration:n.duration,frequency:n.frequency,output:t,seed:n.seed??Math.random()*8192,sleep:n.sleep,speed:n.speed,spread:n.spread};if(!r.isTTY){await gr(K0,e);return}let a=new AbortController,l=r.readableFlowing===!0,d=r.isRaw===!0,s=!1,c=(L,u)=>{if(u.ctrl&&u.name==="c")s=!0;if(s||u.name==="return"||u.name==="enter")a.abort()};z0.emitKeypressEvents(r),r.on("keypress",c),r.setRawMode(!0),r.resume();try{await gr(K0,{...e,signal:a.signal})}finally{if(r.off("keypress",c),r.setRawMode(d),!l)r.pause()}if(!s)return;if(n.onInterrupt){n.onInterrupt();return}process.kill(process.pid,"SIGINT")}var V0="\r\x1B[2K",Ii="\x1B[?25l",Ni="\x1B[39m",nc="\x1B[?25h",tc=100,rc=0.55,ec=80,G0=["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];function ac(n){return new Promise((t)=>setTimeout(t,n))}async function Pn(n,t={}){let r=t.output??process.stdout;if(!r.isTTY)return n;let e=t.sleep??ac,a=!1,l=n.then((s)=>{return a=!0,s},(s)=>{throw a=!0,s});if(await Promise.race([l.then(()=>!0),e(tc).then(()=>!1)]))return l;r.write(Ii);try{for(let s=0;!a;s+=1)r.write(`${V0}${W0(s*rc)}${G0[s%G0.length]}${Ni} ${t.loadingMessage??"Loading…"}`),await Promise.race([l,e(ec)]);return await l}finally{r.write(`${V0}${nc}`)}}async function Dn(n,t,r,e={}){let a=t();if(n)await r();if(n&&a.ready)await Pn(a.ready,e);return a.finish()}import{homedir as RL}from"node:os";import{stripVTControlCharacters as lc}from"node:util";var In="amp plugins list",dc=/^\s*[✓✗]\s+cc-safety-net(?:\.ts)?\s+\(User Plugins\)\s+(\S+)\s*$/;function S0(n){if(!n.ampPluginListOutput)return{platform:"amp",status:"n/a"};let t=lc(n.ampPluginListOutput).split(`
`).map((r)=>dc.exec(r)?.[1]).find((r)=>r!==void 0);if(!t)return{platform:"amp",status:"n/a"};if(t!=="active")return{platform:"amp",status:"disabled",method:In,configPath:In,errors:[`Amp personal plugin cc-safety-net is ${t}; run "plugins: reload" in Amp or reinstall with install --amp`]};return{platform:"amp",status:"configured",method:In,configPath:In}}import{existsSync as ic,readFileSync as cc}from"node:fs";import{join as sc}from"node:path";function mn(n){return sc(n,".gemini","config","hooks.json")}var Lc=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*(?:--agy-cli|-ac)(\s|["']|$)/,uc=i.object({command:i.string()}),pc=i.object({hooks:i.array(i.json())}),vc=i.object({enabled:i.json().optional(),PreToolUse:i.array(i.json())}),oc=i.record(i.string(),i.json());function bc(n){return Object.values(n).flatMap((t)=>{let r=vc.safeParse(t);if(!r.success)return[];return r.data.PreToolUse.flatMap((e)=>{let a=pc.safeParse(e);if(!a.success)return[];return a.data.hooks.flatMap((l)=>{let d=uc.safeParse(l);if(!d.success||!Lc.test(d.data.command))return[];return[{command:d.data.command,enabled:r.data.enabled!==!1}]})})})}function U0(n){let t=mn(n.homeDir);if(!ic(t))return{platform:"antigravity-cli",status:"n/a",configPath:t};let r;try{let e=oc.safeParse(JSON.parse(cc(t,"utf-8")));r=e.success?bc(e.data):[]}catch(e){return{platform:"antigravity-cli",status:"n/a",configPath:t,errors:[`Failed to parse Antigravity hooks config ${t}: ${e instanceof Error?e.message:String(e)}`]}}if(r.some((e)=>e.enabled))return{platform:"antigravity-cli",status:"configured",method:"hook config",configPath:t};if(r.length>0)return{platform:"antigravity-cli",status:"disabled",method:"hook config",configPath:t};return{platform:"antigravity-cli",status:"n/a",configPath:t}}import{join as C0}from"node:path";import{existsSync as fc,lstatSync as yc,readFileSync as wc}from"node:fs";function n2(n,t=(r)=>r){if(!fc(n))return{kind:"missing"};try{let r=i.json().safeParse(JSON.parse(t(wc(n,"utf-8"))));return r.success?{kind:"ok",value:r.data}:{kind:"unreadable"}}catch{return{kind:"unreadable"}}}function R(n){try{return yc(n)}catch{return}}function Nn(n,t){let r=R(t);if(!r)return{platform:n,status:"n/a",configPath:t};if(!r.isSymbolicLink()&&r.isDirectory())return;return{platform:n,status:"n/a",configPath:t,errors:[`${t} is a symlink or not a directory; move or remove it before installing`]}}var Dr="cc-safety-net@cc-marketplace",hc=i.object({plugins:i.record(i.string(),i.array(i.json()))}),xc=i.object({enabledPlugins:i.record(i.string(),i.boolean())});function O0(n){return C0(n,".claude","plugins","installed_plugins.json")}function T0(n,t){return(hc.safeParse(n).data?.plugins?.[t]?.length??0)>0}function nt(n,t){let r=n2(O0(n));return r.kind==="ok"&&T0(r.value,t)}function mr(n){let t=O0(n),r=n2(t);if(r.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(r.kind==="missing")return{platform:"claude-code",status:"n/a"};if(!T0(r.value,Dr))return{platform:"claude-code",status:"n/a"};let e=C0(n,".claude","settings.json"),a=n2(e);if(a.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(!(a.kind==="ok"&&xc.safeParse(a.value).data?.enabledPlugins[Dr]===!0))return{platform:"claude-code",status:"disabled",method:"plugin config",configPath:e,errors:[`${Dr} is installed but not enabled in Claude Code`]};return{platform:"claude-code",status:"configured",method:"plugin config",configPath:t}}function _0(n){return mr(n.homeDir)}function E0(n){if(!n.codexPluginListOutput)return{platform:"codex",status:"n/a"};let t=n.codexPluginListOutput.split(`
`).find((r)=>r.includes("https://github.com/kenryu42/cc-safety-net.git"));if(!t)return{platform:"codex",status:"n/a"};if(!t.includes("installed, enabled"))return{platform:"codex",status:"disabled",method:"codex plugin list",configPath:"codex plugin list",errors:["Codex plugin line for https://github.com/kenryu42/cc-safety-net.git must contain installed, enabled."]};return{platform:"codex",status:"configured",method:"codex plugin list",configPath:"codex plugin list"}}import{existsSync as et,readdirSync as $c,readFileSync as gc}from"node:fs";import{join as V}from"node:path";var t2="cc-safety-net@cc-marketplace",tt=["cc-marketplace","cc-safety-net"],P0=["_direct","copilot-safety-net"],I0=["cc-marketplace","safety-net"],N0="safety-net@cc-marketplace";function rt(n,t){let r=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(^|[^a-z0-9-])${r}([^a-z0-9-]|$)`,"m").test(n??"")}function na(n){return rt(n,"cc-safety-net@cc-marketplace")}function ta(n){return rt(n,"cc-marketplace")}function ra(n){return rt(n,"copilot-safety-net")}function ea(n){return rt(n,"safety-net@cc-marketplace")}function K(n){let t="",r=0,e=!1,a=!1,l=-1;while(r<n.length){let d=n.charAt(r),s=n[r+1];if(a){t+=d,a=!1,r++;continue}if(d==='"'&&!e){e=!0,l=-1,t+=d,r++;continue}if(d==='"'&&e){e=!1,t+=d,r++;continue}if(d==="\\"&&e){a=!0,t+=d,r++;continue}if(e){t+=d,r++;continue}if(d==="/"&&s==="/"){while(r<n.length&&n[r]!==`
`)r++;continue}if(d==="/"&&s==="*"){r+=2;while(r<n.length-1){if(n[r]==="*"&&n[r+1]==="/"){r+=2;break}r++}continue}if(d===","){l=t.length,t+=d,r++;continue}if(d==="}"||d==="]"){if(l!==-1){let c=t.slice(l+1);if(/^\s*$/.test(c))t=t.slice(0,l)+c}l=-1,t+=d,r++;continue}if(!/\s/.test(d))l=-1;t+=d,r++}return t}var Dc=i.object({disableAllHooks:i.boolean().optional(),hooks:i.object({preToolUse:i.array(i.object({type:i.string().optional(),bash:i.string().optional(),powershell:i.string().optional(),command:i.string().optional()})).optional()}).optional()}),mc=i.object({enabledPlugins:i.record(i.string(),i.boolean())});function qr(n){if(!n?.includes("cc-safety-net"))return!1;return/(^|\s)hook\s+(?:[^\s]+\s+)*(--copilot-cli|-cp)(\s|$)/.test(n)}function la(n,t){if(!n)return null;let r=n.match(/(\d+)\.(\d+)\.(\d+)/);if(!r)return null;let e=[Number(r[1]),Number(r[2]),Number(r[3])];for(let a=0;a<t.length;a++){let l=e[a]??0,d=t[a]??0;if(l!==d)return l>d}return!0}function qc(n){return la(n,[0,0,422])}function kc(n){return la(n,[1,0,8])}function qn(n){return process.env.COPILOT_HOME||V(n,".copilot")}function jr(n){return(n.hooks?.preToolUse??[]).some((r)=>{if(r.type!=="command")return!1;return qr(r.command)||qr(r.bash)||qr(r.powershell)})}function Fr(n,t){try{return Dc.parse(JSON.parse(K(gc(n,"utf-8"))))}catch(r){t?.push(`Failed to parse ${n}: ${r instanceof Error?r.message:String(r)}`);return}}function da(n,t){try{return $c(n).filter((r)=>r.endsWith(".json")).sort((r,e)=>r.localeCompare(e))}catch(r){return t?.push(`Failed to read ${n}: ${r instanceof Error?r.message:String(r)}`),[]}}function jc(n,t){if(!et(n))return[];let r=[];for(let e of da(n,t)){let a=V(n,e),l=Fr(a,t);if(l&&jr(l))r.push(a)}return r}function kr(n,t){if(!et(n))return;let r=Fr(n,t);if(!r)return;return{path:n,config:r}}function aa(n,t,r,e){if(t){n.push(`GitHub Copilot CLI ${t} does not support ${r}; requires ${e}+`);return}n.push(`GitHub Copilot CLI version unavailable; skipping ${r} because it requires ${e}+`)}function Fc(n){let t=[n.localSettings,n.repoSettings,n.userConfig];for(let r of t){if(r?.config.disableAllHooks===!0)return r.path;if(r?.config.disableAllHooks===!1)return}return}function Bc(n,t,r,e){let a=qn(n),l=V(t,".github","hooks"),d=V(a,"hooks"),s=V(t,".github","copilot"),c=kc(r),L=c===!0?e:void 0,u={userConfig:kr(V(a,"config.json"),L),repoSettings:kr(V(s,"settings.json"),L),localSettings:kr(V(s,"settings.local.json"),L)};if(c!==!1){let x=Fc(u);if(x){if(c===null)e.push(`GitHub Copilot CLI version unavailable; treating disableAllHooks in ${x} as active`);return{activeConfigPaths:[],disabledBy:x}}}let p=jc(l,e),f=qc(r),v=f===!0?e:void 0,o=et(d)?da(d,v):[],b=[];for(let x of o){let w=V(d,x),Z=Fr(w,v);if(Z&&jr(Z))b.push(w)}if(f!==!0&&b.length>0)aa(e,r,`user hook files in ${d}`,"0.0.422"),b.length=0;let h=[],$=[u.localSettings,u.repoSettings,u.userConfig];for(let x of $){if(!x)continue;if(!jr(x.config))continue;if(c===!0){h.push(x.path);continue}aa(e,r,"inline hook definitions in Copilot config files","1.0.8");break}return{activeConfigPaths:[...h.filter((x)=>x.endsWith("settings.local.json")),...h.filter((x)=>x.endsWith("settings.json")),...p,...h.filter((x)=>x.endsWith("config.json")),...b]}}function sa(n){let t=[],r=Bc(n.homeDir,n.cwd,n.copilotCliVersion,t);if(r.disabledBy)return{platform:"copilot-cli",status:"disabled",method:"hook config",configPath:r.disabledBy,configPaths:[r.disabledBy],errors:t.length>0?t:void 0};let e=qn(n.homeDir),a=V(e,"installed-plugins",...tt),l=et(a),d=V(e,"settings.json"),s=n2(d,K);if(l&&s.kind==="unreadable")return{platform:"copilot-cli",status:"not-inspected"};if(l&&s.kind==="ok"&&mc.safeParse(s.value).data?.enabledPlugins[t2]===!1)return{platform:"copilot-cli",status:"disabled",method:"plugin config",configPath:d,errors:[`${t2} is installed but not enabled in Copilot CLI`]};if(l||r.activeConfigPaths.length>0){let c=l,L=r.activeConfigPaths[0];return{platform:"copilot-cli",status:"configured",method:c?"plugin config":"hook config",configPath:L??(c?a:void 0),configPaths:r.activeConfigPaths.length>0?r.activeConfigPaths:void 0,errors:t.length>0?t:void 0}}return{platform:"copilot-cli",status:"n/a",errors:t.length>0?t:void 0}}import{existsSync as zc,readFileSync as Vc}from"node:fs";import{existsSync as ia,mkdirSync as Qc,readFileSync as Xc}from"node:fs";import{dirname as Yc,join as Rc}from"node:path";import{renameSync as Jc,writeFileSync as Zc}from"node:fs";function J(n,t){let r=`${n}.${process.pid}.tmp`;Zc(r,t),Jc(r,n)}var kn="npx -y cc-safety-net hook --cursor",ca=30,at=i.looseObject({command:i.json().optional(),timeout:i.json().optional(),failClosed:i.json().optional()}),Ac=i.looseObject({preToolUse:i.json().optional()}),Jr=i.looseObject({preToolUse:i.array(i.json()).optional()}),Hc=i.looseObject({version:i.json().optional(),hooks:i.json().optional()});function lt(n){return Rc(n,".cursor","hooks.json")}function Br(){return{command:kn,timeout:ca,failClosed:!0}}function Zr(n){return n.command===kn}function Wc(n){let t=at.safeParse(n);if(!t.success)return!1;return Object.keys(t.data).length===3&&t.data.command===kn&&t.data.timeout===ca&&t.data.failClosed===!0}function Mc(n){try{return i.json().parse(JSON.parse(Xc(n,"utf-8")))}catch(t){if(t instanceof SyntaxError)throw Error(`Failed to parse Cursor hooks config ${n}: ${t.message}`);throw t}}function La(n){let t=Mc(n),r=Hc.safeParse(t);if(!r.success)throw Error(`Cursor hooks config ${n} must be a JSON object`);if(r.data.version!==1)throw Error(`Cursor hooks config ${n} must set "version": 1`);let e=Ac.safeParse(r.data.hooks);if(r.data.hooks!==void 0&&!e.success)throw Error(`Cursor hooks config ${n} "hooks" must be an object`);if(e.success&&e.data.preToolUse!==void 0){if(!i.array(i.json()).safeParse(e.data.preToolUse).success)throw Error(`Cursor hooks config ${n} "hooks.preToolUse" must be an array`)}return r.data}function ua(n){let t=Jr.safeParse(n.hooks);if(!t.success||t.data.preToolUse===void 0)return[];return t.data.preToolUse}function Kc(n){let t=(r)=>{let e=at.safeParse(r);return e.success&&Zr(e.data)};if(!n.some(t))return[...n,Br()];return n.reduce((r,e)=>{if(!t(e))return r.result.push(e),r;if(!r.inserted)r.result.push(Br()),r.inserted=!0;return r},{result:[],inserted:!1}).result}function pa(n,t,r){let e=Jr.safeParse(t.hooks),a=e.success?e.data:{},l={...t,hooks:{...a,preToolUse:r}};J(n,`${JSON.stringify(l,null,2)}
`)}function va(n){let t=lt(n);if(!ia(t))return Qc(Yc(t),{recursive:!0}),J(t,`${JSON.stringify({version:1,hooks:{preToolUse:[Br()]}},null,2)}
`),{path:t,alreadyInstalled:!1};let r=La(t),e=ua(r),a=e.filter((d)=>{let s=at.safeParse(d);return s.success&&Zr(s.data)});if(Jr.safeParse(r.hooks).success&&a.length===1&&a[0]!==void 0&&Wc(a[0]))return{path:t,alreadyInstalled:!0};return pa(t,r,Kc(e)),{path:t,alreadyInstalled:!1}}function oa(n){let t=lt(n);if(!ia(t))return{path:t,alreadyInstalled:!1};let r=La(t),e=ua(r),a=e.filter((l)=>{let d=at.safeParse(l);return!d.success||!Zr(d.data)});if(a.length===e.length)return{path:t,alreadyInstalled:!1};return pa(t,r,a),{path:t,alreadyInstalled:!0}}var Gc=i.looseObject({command:i.json().optional(),failClosed:i.json().optional(),timeout:i.json().optional()}),Sc=i.looseObject({hooks:i.looseObject({preToolUse:i.array(i.json()).optional()}).optional()});function Uc(n){return(n.hooks?.preToolUse??[]).flatMap((r)=>{let e=Gc.safeParse(r);return e.success&&e.data.command===kn?[e.data]:[]})}function Cc(n){let t=[];if(n.length>1)t.push("Multiple managed cc-safety-net hooks found; reinstall to collapse duplicates");let r=n[0];if(r&&r.failClosed!==!0)t.push('Managed hook is missing "failClosed": true; reinstall to repair');if(r&&r.timeout!==30)t.push('Managed hook "timeout" is not 30; reinstall to repair');return t}function ba(n){let t=lt(n.homeDir);if(!zc(t))return{platform:"cursor",status:"n/a",configPath:t};let r;try{r=Sc.parse(JSON.parse(Vc(t,"utf-8")))}catch(l){return{platform:"cursor",status:"n/a",configPath:t,errors:[`Failed to parse Cursor hooks config ${t}: ${l instanceof Error?l.message:String(l)}`]}}let e=Uc(r);if(e.length===0)return{platform:"cursor",status:"n/a",configPath:t};let a=Cc(e);return{platform:"cursor",status:"configured",method:"hook config",configPath:t,errors:a.length>0?a:void 0}}import{existsSync as Oc}from"node:fs";import{join as Qr}from"node:path";var Xr="gemini-safety-net",Tc=i.record(i.string(),i.object({overrides:i.array(i.string()).optional()}));function Yr(n){let t=Qr(n,".gemini","extensions"),r=Qr(t,Xr);if(!Oc(r))return{platform:"gemini-cli",status:"n/a"};let e=Qr(t,"extension-enablement.json"),a=n2(e);if(a.kind==="unreadable")return{platform:"gemini-cli",status:"not-inspected"};if((a.kind==="ok"?Tc.safeParse(a.value).data?.[Xr]?.overrides:void 0)?.some((s)=>s.startsWith("!"))??!1)return{platform:"gemini-cli",status:"disabled",method:"extension config",configPath:e,errors:[`${Xr} is disabled in Gemini CLI`]};return{platform:"gemini-cli",status:"configured",method:"extension config",configPath:r}}function fa(n){return Yr(n.homeDir)}import{readFileSync as qa}from"node:fs";import{join as ka}from"node:path";var G="cc-safety-net",ya="# cc-safety-net managed Hermes Agent plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --hermes-agent";function wa(n){return`# cc-safety-net managed Hermes Agent plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --hermes-agent
# version: ${n}
`}function _c(n){return`${wa(n)}name: cc-safety-net
version: "${n}"
description: "Block destructive commands and secret-file access before Hermes runs a tool."
author: "cc-safety-net"
provides_hooks:
  - pre_tool_call
`}function Ec(n){return`${wa(n)}"""CC Safety Net guard for Hermes Agent.

Registers pre_tool_call and forwards the tool call to the packaged CC Safety Net
adapter (cc-safety-net hook --hermes-agent) over JSON stdin. The adapter prints nothing
when the call is allowed and an {"action": "block", ...} directive when it is denied.
Hermes ignores a callback that raises, so every transport and analysis failure is turned
into an explicit block here instead.
"""

import json
import os
import shutil
import signal
import subprocess

HOOK_EVENT = "pre_tool_call"
SUPPORTED_TOOLS = ("patch", "read_file", "terminal", "write_file")
ANALYZER = ["npx", "-y", "cc-safety-net", "hook", "--hermes-agent"]
TIMEOUT_SECONDS = ${"30"}


def _block(detail):
    return {"action": "block", "message": "CC Safety Net failed closed: " + detail}


def _terminal_cwd(task_id, process_cwd):
    """Return the directory Hermes will run this terminal command in.

    A \`terminal\` call without \`workdir\` runs in the session's own cwd RECORD, not in the
    Hermes process directory: \`_resolve_command_cwd\` in tools/terminal_tool.py returns
    \`workdir or get_session_cwd(session_key) or default_cwd\`, and that record is rewritten
    after every completed command, so it IS the session's \`cd\` state. The session key is
    derived exactly as terminal_tool derives it: the contextvar when set, the raw task_id
    otherwise. No record yet (first command of a session) means the process directory.
    """
    from tools.approval import get_current_session_key
    from tools.terminal_tool import get_session_cwd

    return get_session_cwd(get_current_session_key(default="") or (task_id or "")) or process_cwd


def _pre_tool_call(tool_name="", args=None, session_id="", task_id="", **_):
    if tool_name not in SUPPORTED_TOOLS:
        return None

    executable = shutil.which(ANALYZER[0])
    if executable is None:
        return _block(ANALYZER[0] + " was not found on PATH.")

    try:
        cwd = os.getcwd()
    except OSError as error:
        return _block("the working directory could not be resolved (%s)." % error)

    if tool_name == "terminal":
        try:
            cwd = _terminal_cwd(task_id, cwd)
        except ImportError as error:
            # Without the session record we cannot tell which directory the command runs in,
            # and analysing the wrong one clears every path-scoped protection.
            return _block(
                "the Hermes session directory could not be read (%s). Update cc-safety-net and "
                "reinstall the plugin with: npx -y cc-safety-net install --hermes-agent." % error
            )

    payload = json.dumps(
        {
            "hook_event_name": HOOK_EVENT,
            "tool_name": tool_name,
            "tool_input": args if isinstance(args, dict) else None,
            "session_id": session_id if isinstance(session_id, str) else "",
            "cwd": cwd,
        }
    )

    try:
        process = subprocess.Popen(
            [executable] + ANALYZER[1:],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            # Decode explicitly: the analyzer writes UTF-8, and a locale decoder would raise
            # UnicodeDecodeError on output it cannot read — an exception Hermes swallows by
            # allowing the tool call. "replace" turns that into unreadable output, which blocks.
            encoding="utf-8",
            errors="replace",
            # Resolve the analyzer from a neutral directory: npx prefers a repository-local
            # node_modules/.bin/cc-safety-net, so inheriting Hermes' working directory would
            # let workspace contents stand in for the analyzer. The payload's "cwd" above is
            # still the real Hermes working directory, which the analysis needs.
            cwd=os.path.expanduser("~"),
            # Own process group so the timeout below can kill the whole tree: npx's descendants
            # outlive a kill aimed at npx alone and keep holding the pipes captured here.
            start_new_session=True,
        )
    except OSError as error:
        return _block("analysis could not start (%s)." % error)

    try:
        stdout, _ = process.communicate(payload, timeout=TIMEOUT_SECONDS)
    except subprocess.TimeoutExpired:
        try:
            os.killpg(process.pid, signal.SIGKILL)
        except OSError:
            pass
        try:
            process.communicate(timeout=TIMEOUT_SECONDS)
        except subprocess.TimeoutExpired:
            pass
        return _block("analysis timed out after %ss." % TIMEOUT_SECONDS)

    if process.returncode != 0:
        return _block("analysis exited with status %s." % process.returncode)

    directive = (stdout or "").strip()
    if not directive:
        return None

    try:
        parsed = json.loads(directive)
    except ValueError:
        return _block("analysis returned unreadable output.")

    if isinstance(parsed, dict) and parsed.get("action") == "block":
        message = parsed.get("message")
        if isinstance(message, str) and message:
            return parsed
    return _block("analysis returned an unexpected directive.")


def register(ctx):
    ctx.register_hook("pre_tool_call", _pre_tool_call)
`}function jn(n){return[{name:"__init__.py",content:Ec(n)},{name:"plugin.yaml",content:_c(n)}]}import{mkdirSync as Pc,readdirSync as Ic,readFileSync as Nc,rmSync as Rr}from"node:fs";import{join as q2}from"node:path";var nL="__pycache__";function Ar(n){let t=process.env.HERMES_HOME?.trim();return t?t:q2(n,".hermes")}function Hr(n){return q2(Ar(n),"plugins",G)}function Wr(n){return n.startsWith(ya)}function Mr(n,t){let r=Hr(n),e=R(r);if(e&&(e.isSymbolicLink()||!e.isDirectory()))throw Error(`Refusing to ${t} ${r}: not a regular directory. Move or remove it and rerun ${t==="install"?"install":"uninstall"} --hermes-agent.`);return r}function ha(n,t){let r=R(n);if(!r)return;if(r.isSymbolicLink()||!r.isFile())throw Error(`Refusing to ${t} ${n}: not a regular file. Move or remove it.`);let e=Nc(n,"utf-8");if(!Wr(e))throw Error(`Refusing to ${t} unmanaged file at ${n}. Move or remove it.`);return e}function xa(n){let t=Mr(n,"install"),r=jn(j());if(r.map((a)=>ha(q2(t,a.name),"overwrite")).every((a,l)=>a===r[l]?.content))return{path:t,alreadyInstalled:!0};return Pc(t,{recursive:!0}),r.forEach((a)=>{J(q2(t,a.name),a.content)}),{path:t,alreadyInstalled:!1}}function Kr(n){let t=Mr(n,"remove");if(!R(t))return[];return jn(j()).filter((r)=>ha(q2(t,r.name),"remove")!==void 0)}function $a(n){let t=Mr(n,"remove");if(!R(t))return{path:t,alreadyInstalled:!1};let r=Kr(n);if(r.forEach((e)=>{Rr(q2(t,e.name))}),Rr(q2(t,nL),{recursive:!0,force:!0}),Ic(t).length===0)Rr(t,{recursive:!0});return{path:t,alreadyInstalled:r.length>0}}var dt="hermes-agent",ga=/^([^\s#][^:]*):/,tL=/^\s+([A-Za-z_][\w-]*):/,Da=/^\s+-\s*(.*)$/;function rL(n){return n.trim().replace(/^(["'])(.*)\1$/,"$2")}function eL(n){let t=n.split(/\r?\n/),r=t.findIndex((l)=>ga.exec(l)?.[1]?.trim()==="plugins");if(r===-1)return[];let e=t.slice(r+1),a=e.findIndex((l)=>ga.test(l));return a===-1?e:e.slice(0,a)}function ma(n,t){let r=eL(n),e=r.findIndex((d)=>tL.exec(d)?.[1]===t);if(e===-1)return[];let a=r.slice(e+1),l=a.findIndex((d)=>!Da.test(d));return(l===-1?a:a.slice(0,l)).map((d)=>rL(Da.exec(d)?.[1]??""))}function aL(n){try{return qa(ka(Ar(n),"config.yaml"),"utf-8")}catch{return}}function zr(n){let t=aL(n)??"";return ma(t,"enabled").includes(G)&&!ma(t,"disabled").includes(G)}function ja(n){return/^# version:\s*(.+)$/m.exec(n)?.[1]?.trim()}function lL(n,t){let r=R(n);if(!r)return{error:`${t.name} is missing from ${n}; run install --hermes-agent`};if(r.isSymbolicLink()||!r.isFile())return{error:`${n} is a symlink or not a regular file; move or remove it`};try{let e=qa(n,"utf-8");if(!Wr(e))return{error:`Unmanaged ${t.name} occupies ${n}; move or remove it`};if(ja(e)===j()&&e!==t.content)return{error:`Modified ${t.name} occupies ${n}; run install --hermes-agent to restore it`};return{content:e}}catch(e){return{error:`Failed to read ${n}: ${e instanceof Error?e.message:String(e)}`}}}function Fa(n){let t=Hr(n.homeDir),r=Nn(dt,t);if(r)return r;let e=jn(j()).map((s)=>lL(ka(t,s.name),s)),a=e.flatMap((s)=>("error"in s)?[s.error]:[]);if(a.length>0)return{platform:dt,status:"n/a",configPath:t,errors:a};let l=e.some((s)=>("content"in s)&&ja(s.content)!==j()),d=l?["Installed Hermes Agent plugin is outdated; run install --hermes-agent to update"]:[];if(!zr(n.homeDir))return{platform:dt,status:"disabled",method:"plugin directory",configPath:t,errors:[`${G} is not enabled in Hermes; run \`hermes plugins enable ${G}\``,...d]};return{platform:dt,status:"configured",method:"plugin directory",configPath:t,errors:l?d:void 0}}import{existsSync as dL,readFileSync as sL}from"node:fs";import{join as Ba}from"node:path";var iL=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*--kimi-code(\s|["']|$)/;function cL(n){return Ba(process.env.KIMI_CODE_HOME||Ba(n,".kimi-code"),"config.toml")}function Fn(n){let t=cL(n.homeDir);if(!dL(t))return{platform:"kimi-code",status:"n/a",configPath:t};try{if(!iL.test(sL(t,"utf-8")))return{platform:"kimi-code",status:"n/a",configPath:t}}catch(r){return{platform:"kimi-code",status:"n/a",configPath:t,errors:[`Failed to read ${t}: ${r instanceof Error?r.message:String(r)}`]}}return{platform:"kimi-code",status:"configured",method:"hook config",configPath:t}}import{readFileSync as Wa}from"node:fs";import{join as Jn}from"node:path";var k="cc-safety-net",S="index.js",E2="openclaw.plugin.json",P2="package.json";var st="// cc-safety-net managed OpenClaw plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --openclaw";import{existsSync as pL,lstatSync as vL,readdirSync as oL,readFileSync as bL}from"node:fs";import{dirname as Qa,join as k2}from"node:path";import{fileURLToPath as fL}from"node:url";import{spawn as LL}from"node:child_process";function uL(n){return n.join(" ")}function Vr(n,t,r){return[`Failed to run ${uL(n)}${t===null?"":` (exit ${t})`}.`,r.trim()].filter(Boolean).join(`
`)}function Gr(n){let t={stdout:"",stderr:""};return n.stdout.setEncoding("utf-8"),n.stderr.setEncoding("utf-8"),n.stdout.on("data",(r)=>{t.stdout+=r}),n.stderr.on("data",(r)=>{t.stderr+=r}),t}function r2(n,t){return new Promise((r,e)=>{let a=w2([...n],process.env),l=LL(a.cmd,a.args,{stdio:["ignore","pipe","pipe"]}),d=Gr(l),s=()=>[d.stdout,d.stderr].filter(Boolean).join(`
`),c=t?.timeoutMs??120000,L=setTimeout(()=>{l.kill(),e(Error(Vr(n,null,`Timed out after ${c}ms.
${s()}`.trim())))},c);l.on("error",(u)=>{clearTimeout(L),e(Error(Vr(n,null,`${u.message}
${s()}`.trim())))}),l.on("close",(u)=>{if(clearTimeout(L),u!==0){e(Error(Vr(n,u,s())));return}r(t?.stdoutOnly?d.stdout:s())})})}async function Sr(n){for(let t of n)await r2(t)}async function Ja(n){for(let t of n)try{await r2(t)}catch(r){console.warn(r instanceof Error?r.message:String(r))}}var Za=k2("openclaw",k),yL=i.object({plugin:i.object({status:i.string()})}),wL=[S,E2,P2];function Xa(n){let t=process.env.OPENCLAW_STATE_DIR?.trim();if(t)return t;let r=process.env.OPENCLAW_CONFIG_PATH?.trim();return r?Qa(r):k2(n,".openclaw")}function Ya(n){let t=process.env.OPENCLAW_CONFIG_PATH?.trim();return t?t:k2(Xa(n),"openclaw.json")}function Ur(n){return k2(Xa(n),"extensions",k)}function hL(n){let t=oL(n);if(t.length===0)return!0;if(t.some((a)=>!wL.includes(a)))return!1;let r=k2(n,S),e=R(r);return e!==void 0&&!e.isSymbolicLink()&&e.isFile()&&bL(r,"utf-8").startsWith(st)}function Cr(n){let t=Ur(n),r=R(t);if(!r)return;if(!r.isSymbolicLink()&&r.isDirectory()&&hL(t))return;throw Error(`Refusing to modify ${t}: it does not hold a cc-safety-net managed OpenClaw plugin. Move or remove it, then run the command again.`)}function Ra(){let n=Qa(fL(import.meta.url));return[k2(n,"..",Za),k2(n,"..","..","..","dist",Za)]}function Or(n=Ra()){return n.find((t)=>pL(t)&&vL(t).isDirectory())}function xL(n=Ra()){let t=Or(n);if(!t)throw Error("Packaged OpenClaw plugin directory not found. Reinstall cc-safety-net and try again.");return t}function Aa(n=xL()){return[["openclaw","plugins","install",n,"--force"],["openclaw","plugins","enable",k]]}function $L(n){let t=(()=>{try{return JSON.parse(n)}catch{return}})(),r=yL.safeParse(t);return r.success?r.data.plugin.status:void 0}async function Ha(){let n=$L(await r2(["openclaw","plugins","inspect",k,"--runtime","--json"],{stdoutOnly:!0}));if(n==="loaded")return;throw Error(`${n===void 0?`The ${k} plugin's load state could not be verified: OpenClaw's runtime inspect report was unreadable.`:`OpenClaw reports the ${k} plugin with status "${n}".`} Run \`openclaw plugins inspect ${k} --runtime\` for details.`)}var it="openclaw",Bn=`run \`openclaw plugins enable ${k}\``,gL=i.object({id:i.string()}),DL=i.object({openclaw:i.object({extensions:i.array(i.string())})}),mL=i.object({plugins:i.object({enabled:i.boolean().optional(),allow:i.array(i.string()).optional(),deny:i.array(i.string()).optional(),entries:i.record(i.string(),i.object({enabled:i.boolean().optional()})).optional()}).optional()});function I2(n,t){let r=Jn(n,t),e=R(r);if(!e)return{error:`${t} is missing from ${r}; run install --openclaw`};if(e.isSymbolicLink()||!e.isFile())return{error:`${r} is a symlink or not a regular file; move or remove it`};try{return{content:Wa(r,"utf-8")}}catch(a){return{error:`Failed to read ${r}: ${a instanceof Error?a.message:String(a)}`}}}function Ma(n){try{return i.json().safeParse(JSON.parse(K(n))).data}catch{return}}function qL(n){let t=I2(n,E2);if("error"in t)return t.error;if(gL.safeParse(Ma(t.content)).data?.id===k)return;return`${Jn(n,E2)} is not a valid ${k} manifest; run install --openclaw`}function kL(n){let t=I2(n,P2);if("error"in t)return t.error;if(DL.safeParse(Ma(t.content)).data?.openclaw.extensions?.includes(`./${S}`))return;return`${Jn(n,P2)} does not point OpenClaw at ${S}; run install --openclaw`}function jL(n){let t=Ya(n);if(!R(t))return`${k} is not enabled; ${Bn}`;let r=(()=>{try{return mL.parse(JSON.parse(K(Wa(t,"utf-8"))))}catch{return}})();if(r===void 0)return`Failed to read ${t}; fix it, then ${Bn}`;let e=r.plugins;if(e?.enabled===!1)return`plugins.enabled is false in ${t}; no OpenClaw plugin loads`;let a=e?.entries?.[k]?.enabled;if(e?.deny?.includes(k)||a===!1)return`${k} is disabled in ${t}; ${Bn}`;let l=e?.allow??[];if(l.length>0&&!l.includes(k))return`plugins.allow in ${t} does not list ${k}; add it, then ${Bn}`;if(l.includes(k)||a===!0)return;return`${k} is not enabled; ${Bn}`}function Ka(n){return/^\/\/ version:\s*(.+)$/m.exec(n)?.[1]?.trim()}function FL(n,t,r){if(r===void 0)return[];let e=I2(r,S);if("error"in e||Ka(e.content)!==t)return[];return[S,E2,P2].flatMap((a)=>{let l=I2(n,a),d=I2(r,a);if("error"in l||"error"in d||l.content===d.content)return[];return[`Modified ${a} occupies ${Jn(n,a)}; run install --openclaw to restore it`]})}function za(n){let t=Ur(n.homeDir),r=Nn(it,t);if(r)return r;let e=I2(t,S),l=["error"in e?e.error:e.content.startsWith(st)?void 0:`Unmanaged ${S} occupies ${Jn(t,S)}; move or remove it`,qL(t),kL(t)].filter((u)=>u!==void 0),d="content"in e?Ka(e.content):void 0,s=l.length>0?l:FL(t,d,Or());if(s.length>0)return{platform:it,status:"n/a",configPath:t,errors:s};let c=d===j()?[]:["Installed OpenClaw plugin is outdated; run install --openclaw to update"],L=jL(n.homeDir);if(L)return{platform:it,status:"disabled",method:"plugin directory",configPath:t,errors:[L,...c]};return{platform:it,status:"configured",method:"plugin directory",configPath:t,errors:c.length>0?c:void 0}}import{existsSync as BL,readFileSync as JL}from"node:fs";import{join as Va}from"node:path";var ZL=i.object({plugin:i.array(i.string()).optional()});function Ga(n){let t=[],r=Va(n.homeDir,".config","opencode"),e=["opencode.json","opencode.jsonc"];for(let a of e){let l=Va(r,a);if(BL(l))try{let d=JL(l,"utf-8"),s=K(d);if((ZL.parse(JSON.parse(s)).plugin??[]).some((p)=>p.includes("cc-safety-net")))return{platform:"opencode",status:"configured",method:"plugin array",configPath:l,errors:t.length>0?t:void 0}}catch(d){t.push(`Failed to parse ${a}: ${d instanceof Error?d.message:String(d)}`)}}return{platform:"opencode",status:"n/a",errors:t.length>0?t:void 0}}import{join as QL}from"node:path";var XL=i.union([i.string().transform((n)=>({source:n,extensions:void 0})),i.object({source:i.string(),extensions:i.array(i.string()).optional()})]),YL=i.object({packages:i.array(i.json())});function Tr(n){return QL(n,".pi","agent","settings.json")}function _r(n){return n==="npm:cc-safety-net"||n.startsWith("npm:cc-safety-net@")}function Sa(n){let t=Tr(n.homeDir),r=n2(t);if(r.kind==="unreadable")return{platform:"pi",status:"not-inspected"};if(r.kind==="missing")return{platform:"pi",status:"n/a"};let e=YL.safeParse(r.value).data?.packages;if(!e)return{platform:"pi",status:"n/a"};let l=e.flatMap((s)=>{let c=XL.safeParse(s);return c.success?[c.data]:[]}).find((s)=>_r(s.source));if(l===void 0)return{platform:"pi",status:"n/a"};if(l.extensions?.some((s)=>s.startsWith("-"))??!1)return{platform:"pi",status:"disabled",method:"package config",configPath:t,errors:["npm:cc-safety-net is installed but its extension is disabled in Pi settings"]};return{platform:"pi",status:"configured",method:"package config",configPath:t}}var AL={amp:S0,"antigravity-cli":U0,"claude-code":_0,codex:E0,"copilot-cli":sa,cursor:ba,"gemini-cli":fa,"hermes-agent":Fa,"kimi-code":Fn,openclaw:za,opencode:Ga,pi:Sa};function N2(n,t){let r={...t,cwd:n,homeDir:t?.homeDir??RL()};return G1.map((e)=>HL(AL[e](r)))}function HL(n){if(n.status==="not-inspected")return{platform:n.platform,detected:!1,configured:!1,inspectionStatus:"not-inspected"};return{platform:n.platform,detected:n.status!=="n/a",configured:n.status==="configured",inspectionStatus:n.status!=="n/a"?"verified":n.errors&&n.errors.length>0?"failed":"not-applicable",method:n.method,configPath:n.configPath,configPaths:n.configPaths,errors:n.errors}}import{tmpdir as WL}from"node:os";import{join as ML}from"node:path";var KL=Object.freeze([{command:"git reset --hard",description:"git reset --hard",expectBlocked:!0},{command:"rm -rf /",description:"rm -rf /",expectBlocked:!0},{command:"rm -rf ./node_modules",description:"rm in cwd (safe)",expectBlocked:!1}]),zL=Object.freeze({state:"ready",diagnostics:Object.freeze([]),ruleMetadata:Object.freeze({}),policy:Object.freeze({rules:Object.freeze([]),transparentWrappers:Object.freeze([]),safety:Object.freeze({}),worktreeMode:!1,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:Object.freeze({}),destructiveCommandAllowPaths:Object.freeze([]),secretProtection:Object.freeze({enabled:!0,disabledRules:Object.freeze([]),denyPaths:Object.freeze([])})})}),Er=()=>({enabled:!1,source:"preset",sources:[]}),VL={strict:!1,paranoidRm:!1,paranoidInterpreters:!1,worktreeMode:!1,effectiveLevel:"standard",capabilities:{fail_closed:Er(),paranoid_rm:Er(),paranoid_interpreters:Er()},sources:{failClosed:[],paranoidRm:[],paranoidInterpreters:[],worktreeMode:[]}};function Ua(){let n=ML(WL(),"cc-safety-net-self-test"),t=KL.map((r)=>{let e=Gn(M2("self-test",{command:r.command},{kind:"command",shell:"auto"},{configCwd:n,executionCwd:n},r.command),{guard:{dependencies:{loadPolicySnapshot:()=>zL,getModes:()=>VL,findPolicyMutation:()=>null}},audit:{agent:"self-test",getSessionId:()=>{return}}}),a=r.expectBlocked?"blocked":"allowed",l=e.decision.kind==="deny"?"blocked":"allowed";return{command:r.command,description:r.description,expected:a,actual:l,passed:a===l,reason:e.decision.kind==="deny"?e.decision.reason:void 0,ruleId:e.decision.kind==="deny"?e.decision.ruleId:void 0}});return{passed:t.filter((r)=>r.passed).length,failed:t.filter((r)=>!r.passed).length,total:t.length,results:t}}function Pr(n){let t=F({label:"doctor",booleans:{json:["--json"],skipUpdateCheck:["--skip-update-check"]}},n);if(e2(t.errors))return null;return{json:t.flags.json,skipUpdateCheck:t.flags.skipUpdateCheck}}async function Ca(n={}){let t=await Dn(!n.json,()=>{let r=GL(n);return{ready:r,finish:()=>r}},()=>gn(),{loadingMessage:"Checking system status…"});if(n.json)console.log(JSON.stringify(t,null,2));else UL(t);return SL(t.hooks,t.engineSelfTest,{userConfig:t.userConfig,projectConfig:t.projectConfig})?1:0}async function GL(n){let t=n.cwd??process.cwd(),r=await xn(),e=N2(t,{ampPluginListOutput:r.ampPluginListOutput,codexPluginListOutput:r.codexPluginListOutput,copilotCliVersion:r.copilotCliVersion}),a=o0(t),l=b0(),d=M({cwd:t}),s=d.policy,c=d2(s),L=D2(s,c.capabilities),u=Tn(7),p=n.skipUpdateCheck?{currentVersion:j(),latestVersion:null,updateAvailable:!1}:await T2(),f={hooks:e,engineSelfTest:Ua(),userConfig:a.userConfig,projectConfig:a.projectConfig,configState:fn(d),effectiveRules:a.effectiveRules,shadowedRules:a.shadowedRules,environment:l,effectiveSafety:{selectedPreset:s.safety.level??"standard",level:c.effectiveLevel,capabilities:c.capabilities,ruleOverrides:s.destructiveCommandRuleOverrides,weakenedRuleOverrides:Object.entries(L).filter(([,v])=>v.source==="rule_override"&&v.override==="off"&&v.inheritedEnabled&&v.changesInherited).map(([v])=>v),ruleCounts:{stored:Object.keys(s.destructiveCommandRuleOverrides).length,effective:Object.values(L).filter((v)=>v.changesInherited).length}},posture:B0(a.userConfig.path),activity:u,update:p,system:r};return{...f,findings:y0(f)}}function SL(n,t,r){return n.length>0&&n.every((e)=>!e.configured)||n.some((e)=>e.inspectionStatus==="failed")||t.failed>0||r.userConfig.exists&&!r.userConfig.valid||r.projectConfig.exists&&!r.projectConfig.valid}function UL(n){console.log(),console.log(h0(n.hooks)),console.log(),console.log(x0(n.engineSelfTest)),console.log(),console.log($0(n)),console.log(),console.log(g0(n.environment)),console.log(),console.log(D0(n)),console.log(),console.log(m0(n.findings)),console.log(),console.log(q0(n.activity)),console.log(),console.log(j0(n.system)),console.log(),console.log(k0(n.update)),console.log(F0(n))}import{existsSync as CL}from"node:fs";var OL=/^[A-Za-z0-9_@%+=:,./-]+$/,Oa="Usage: cc-safety-net explain [--json] [--cwd <path>] <command>";function Ir(n){let t=F({label:"explain",booleans:{json:["--json"]},values:{cwd:["--cwd"]},positionals:"tail"},n);if(e2(t.errors))return console.error(Oa),console.error("Pass -- before a command that starts with dashes."),null;if(t.values.cwd!==void 0&&!CL(t.values.cwd))return console.error(`Error: --cwd path does not exist: ${t.values.cwd}`),null;let r=t.positionals.length===1?t.positionals[0]:t.positionals.map((e)=>OL.test(e)?e:`'${e.replaceAll("'","'\\''")}'`).join(" ");if(!r)return console.error("Error: No command provided"),console.error(Oa),null;return{json:t.flags.json,cwd:t.values.cwd,command:r}}function Ta(n){if(n)return{dh:"=",dv:"|",dtl:"+",dtr:"+",dbl:"+",dbr:"+",h:"-",v:"|",tl:"+",tr:"+",bl:"+",br:"+",sh:"="};return{dh:"═",dv:"║",dtl:"╔",dtr:"╗",dbl:"╚",dbr:"╝",h:"─",v:"│",tl:"┌",tr:"┐",bl:"└",br:"┘",sh:"━"}}function _a(n,t){let e=t-18;return[`${n.dtl}${n.dh.repeat(t)}${n.dtr}`,`${n.dv}  Command Analysis${" ".repeat(e)}${n.dv}`,`${n.dbl}${n.dh.repeat(t)}${n.dbr}`]}function Nr(n){return JSON.stringify(n)}function Ea(n,t=0){return`[${n.map((e,a)=>w0(e,a,t)).join(",")}]`}function ct(n,t,r=70){let e=n.split(" "),a=[],l="";for(let d of e)if(l&&l.length+d.length+1>r)a.push(l),l=d;else l=l?`${l} ${d}`:d;if(l)a.push(l);return a.map((d,s)=>s===0?d:`${t}${d}`)}function Pa(n,t,r){let e=[];switch(n.type){case"parse":return null;case"env-strip":{e.push(""),e.push(`STEP ${t} ${r.h} Strip environment variables`);let a=Object.keys(n.envVars);return e.push(`  Removed: ${a.map((l)=>`${l}=<redacted>`).join(", ")}`),e.push(`  Tokens:  ${Nr(n.output)}`),{lines:e,incrementStep:!0}}case"leading-tokens-stripped":return e.push(""),e.push(`STEP ${t} ${r.h} Strip wrappers`),e.push(`  Removed: ${n.removed.join(", ")}`),e.push(`  Tokens:  ${Nr(n.output)}`),{lines:e,incrementStep:!0};case"shell-wrapper":return e.push(""),e.push(`STEP ${t} ${r.h} Detect shell wrapper`),e.push(`  Wrapper: ${n.wrapper} -c`),e.push(`  Inner:   ${n.innerCommand}`),{lines:e,incrementStep:!0};case"interpreter":{if(e.push(""),e.push(`STEP ${t} ${r.h} Detect interpreter`),e.push(`  Interpreter: ${n.interpreter}`),e.push(`  Code:        ${n.codeArg}`),n.paranoidBlocked)e.push("  Result:      ✗ BLOCKED (paranoid mode)");return{lines:e,incrementStep:!0}}case"busybox":return e.push(""),e.push(`STEP ${t} ${r.h} Busybox wrapper`),e.push(`  Subcommand: ${n.subcommand}`),{lines:e,incrementStep:!0};case"transparent-wrapper":return e.push(""),e.push(`STEP ${t} ${r.h} Transparent wrapper`),e.push(`  Wrapper: ${n.wrapper}`),e.push(`  Tokens:  ${Nr(n.output)}`),{lines:e,incrementStep:!0};case"recurse":return{lines:[],incrementStep:!1};case"rule-check":{e.push(""),e.push(`STEP ${t} ${r.h} Match rules`);let a=`${n.ruleModule}:${n.ruleFunction}()`;if(e.push(`  Rule:   ${a}`),n.matched)e.push("  Result: MATCHED");else e.push("  Result: No match");return{lines:e,incrementStep:!0}}case"worktree-relaxation":return e.push(""),e.push(`STEP ${t} ${r.h} Worktree relaxation`),e.push(`  Mode:   ${m.worktree.name}`),e.push(`  Git cwd: ${n.gitCwd}`),e.push("  Result: Allowed local discard in linked worktree"),{lines:e,incrementStep:!0};case"tmpdir-check":return null;case"fallback-scan":{if(n.embeddedCommandFound)return e.push(""),e.push(`STEP ${t} ${r.h} Fallback scan`),e.push(`  Found: ${n.embeddedCommandFound}`),{lines:e,incrementStep:!0};return null}case"custom-rules-check":{if(n.rulesChecked){if(e.push(""),e.push(`STEP ${t} ${r.h} Custom rules`),n.matched)e.push("  Result: MATCHED");else e.push("  Result: No match");return{lines:e,incrementStep:!0}}return null}case"cwd-change":return null;case"dangerous-text":{if(n.matched)return e.push(""),e.push(`STEP ${t} ${r.h} Dangerous text check`),e.push(`  Token:  ${n.token}`),e.push("  Result: MATCHED"),{lines:e,incrementStep:!0};return null}case"strict-unparseable":return e.push(""),e.push(`STEP ${t} ${r.h} Strict mode check`),e.push(`  Command: ${n.rawCommand}`),e.push("  Result:  ✗ UNPARSEABLE"),{lines:e,incrementStep:!0};case"segment-skipped":return null;case"error":return e.push(""),e.push(`ERROR: ${n.message}`),{lines:e,incrementStep:!1};default:return null}}function ne(n,t){let r=Ta(t?.asciiOnly??!1),e=58,a=[],l=1;a.push(..._a(r,58)),a.push("");let d=n.trace.steps.find((v)=>v.type==="error");if(d&&d.type==="error"){a.push("ERROR"),a.push(`  ${d.message}`),a.push(""),a.push("RESULT"),a.push(`  Status: ${n.result==="blocked"?y.red("BLOCKED"):y.green("ALLOWED")}`),a.push(""),a.push("CONFIG");let v=n.configSource??"none";return a.push(`  Path: ${v}`),a.join(`
`)}let s=n.trace.steps.find((v)=>v.type==="parse");if(s&&s.type==="parse"){a.push("INPUT"),a.push(`  ${s.input}`),a.push(""),a.push(`STEP ${l} ${r.h} Split shell commands`),l++;for(let v=0;v<s.segments.length;v++){let o=s.segments[v];if(o){let b=Math.random();a.push(`  Segment ${v+1}: ${Ea(o,b)}`)}}}let c=n.trace.segments,L=c.length>1;for(let v of c){if(L){a.push("");let $="";if(s&&s.type==="parse"){let Xt=s.segments[v.index];if(Xt)$=Xt.join(" ")}let x=54,w=$,Z=` Segment ${v.index+1}: `,Z2=" ";if($){if(Z.length+$.length+Z2.length>x){let I3=x-Z.length-Z2.length;w=`${$.substring(0,I3-1)}…`}}let en=$?`${Z}${w}${Z2}`:` Segment ${v.index+1} `,Qt=$?`${Z}${y.cyan(w)}${Z2}`:en,Fe=58-en.length,Be=Math.floor(Fe/2),P3=Fe-Be;a.push(`${r.sh.repeat(Be)}${Qt}${r.sh.repeat(P3)}`)}if(v.steps.find(($)=>$.type==="segment-skipped")){a.push(""),a.push("  (skipped — prior segment blocked)");continue}let b=!1,h=!1;for(let $ of v.steps){let x=Pa($,l,r);if(x){if(h=!0,$.type==="recurse"){a.push("");let w=" RECURSING ",Z=58-w.length-4;a.push(`  ${r.tl}${r.h}${w}${r.h.repeat(Z)}`),a.push(`  ${r.v}`),b=!0;continue}for(let w of x.lines)if(b)a.push(`  ${r.v} ${w}`);else a.push(w);if(x.incrementStep)l++}}if(b)a.push(`  ${r.v}`),a.push(`  ${r.bl}${r.h.repeat(56)}`),b=!1;if(!h)a.push(""),a.push(`  ${y.green("✓")} Allowed (no matching rules)`)}if(a.push(""),a.push("RESULT"),n.result==="blocked"){if(a.push(`  Status: ${y.red("BLOCKED")}`),n.customRule){if(a.push(`  Rule: ${n.customRule.id}`),n.customRule.rulebook)a.push(`  Rulebook: ${n.customRule.rulebook.name} ${n.customRule.rulebook.version}`);if(n.customRule.source)a.push(`  Source: ${n.customRule.source}`);if(n.customRule.override)a.push(`  Override: reason ${n.customRule.override.reason}`)}if(n.reason){let v=ct(n.reason,"          ");a.push(`  Reason: ${v[0]}`);for(let o=1;o<v.length;o++)a.push(v[o]??"")}}else a.push(`  Status: ${y.green("ALLOWED")}`);a.push(""),a.push("CONFIG");let u=n.configSource??"none",p=n.configValid?"":" (invalid)";a.push(`  Path: ${u}${p}`),a.push(`  Safety preset: ${n.selectedPreset??"standard"}`),a.push(`  Effective capabilities: ${n.effectiveLevel}`);let f=Object.entries(n.destructiveCommandRuleOverrides??{});if(a.push(`  Rule customizations: ${f.length}`),n.ruleActivation)a.push(`  Rule activation: ${n.ruleActivation.id} — ${n.ruleActivation.enabled?"on":"off"} via ${n.ruleActivation.source}`);return a.join(`
`)}function te(n){return JSON.stringify(n,null,2)}var Ia=import.meta.filename.endsWith(".ts")?"dev":"2.0.5",U="  ",j2="cc-safety-net";function Na(n){return n.argument?`${n.flags} ${n.argument}`:n.flags}function TL(n){return Math.max(...n.map((t)=>Na(t).length))}function _L(n){return Math.max(...n.map((t)=>t.usage.length))}function EL(n){return Math.max(...n.map((t)=>`${j2} ${t.usage}`.length))}function PL(n,t){let r=`${j2} ${n.usage}`;return`${U}${r.padEnd(t+2)}${n.description}`}function L2(n,t){return`${U}${n.padEnd(Math.max(40,n.length+2))}${t}`}function Lt(n,t=console.log){let r=[];if(r.push(`${j2} ${n.name}`),r.push(""),r.push(`${U}${n.description}`),r.push(""),r.push("USAGE:"),r.push(`${U}${j2} ${n.usage}`),r.push(""),n.subcommands&&n.subcommands.length>0){r.push("SUBCOMMANDS:");let e=_L(n.subcommands);for(let a of n.subcommands)r.push(`${U}${a.usage.padEnd(e+2)}${a.description}`);r.push("")}if(n.options.length>0){r.push("OPTIONS:");let e=TL(n.options);for(let a of n.options){let l=Na(a),d=a.default?`${a.description} (default: ${a.default})`:a.description;r.push(`${U}${l.padEnd(e+2)}${d}`)}r.push("")}if(n.examples&&n.examples.length>0){r.push("EXAMPLES:");for(let e of n.examples)r.push(`${U}${e}`)}t(r.join(`
`))}function re(){let n=p0(),t=EL(n),r=[];r.push(`${j2} v${Ia}`),r.push(""),r.push("Blocks destructive commands and secret access."),r.push(""),r.push("COMMANDS:");for(let e of n)r.push(PL(e,t));r.push(""),r.push("GLOBAL OPTIONS:"),r.push(`${U}-h, --help       Show help (use with command for command-specific help)`),r.push(`${U}-V, --version    Show version`),r.push(""),r.push("HELP:"),r.push(`${U}${j2} help <command>     Show help for a specific command`),r.push(`${U}${j2} <command> --help   Show help for a specific command`),r.push(""),r.push("ENVIRONMENT VARIABLES:"),r.push(L2(`${m.level.name}=standard|strict|paranoid`,"Set session safety level")),r.push(L2(`${m.worktree.name}=1`,"Allow local git discards in linked worktrees")),r.push(L2(`${m.debug.name}=1`,"Print diagnostic messages to stderr")),r.push(L2(`${m.auditScope.name}=all|blocked`,"Record all command decisions, or denials only")),r.push(L2("CC_SAFETY_NET_HOME","Override rule config home directory")),r.push(""),r.push("LEGACY ENVIRONMENT VARIABLES (STILL SUPPORTED):"),r.push(L2(`${m.strict.name}=1`,"Force safety.overrides.fail_closed on")),r.push(L2(`${m.paranoid.name}=1`,"Force paranoid_rm and paranoid_interpreters on")),r.push(L2(`${m.paranoidRm.name}=1`,"Force safety.overrides.paranoid_rm on")),r.push(L2(`${m.paranoidInterpreters.name}=1`,"Force safety.overrides.paranoid_interpreters on")),r.push(""),r.push("Documentation:        https://ccsafetynet.com/docs"),console.log(r.join(`
`))}function nl(){console.log(Ia)}function Zn(n,t=console.log){let r=On(n);if(!r)return!1;if(r.hidden||r.name.toLowerCase()!==n.toLowerCase())return!1;return Lt(r,t),!0}import{existsSync as we,readFileSync as d3}from"node:fs";import{homedir as a8}from"node:os";import{join as fe}from"node:path";import*as h2 from"node:readline";function IL(n){return n==="install"?"Install":"Uninstall"}function NL(n){return n==="install"?"Installing":"Uninstalling"}function n5(n){return n==="install"?"into":"from"}function el(n){return n?.available===!0}function t5(n,t){let r=new Set(t);return n.filter((e)=>r.has(e.target)).map((e)=>e.target)}function tl(n,t,r){if(n.every((e)=>!e.available))return t;return Array.from({length:n.length},(e,a)=>a+1).map((e)=>(t+e*r+n.length)%n.length).find((e)=>el(n[e]))??t}function r5(n,t,r){if(r.ctrl&&r.name==="c")return"interrupt";if(r.name==="escape"||t==="q")return"abort";if(n==="install"&&(t==="u"||t==="U"))return"update";if(r.name==="up"||t==="k")return"up";if(r.name==="down"||t==="j")return"down";if(r.name==="space"||t===" ")return"toggle";if(r.name==="return"||r.name==="enter")return"confirm";return null}function e5(n){return{cursor:n.findIndex((t)=>t.available),selected:[]}}function a5(n,t,r){if(r==="confirm"||r==="update"||r==="abort"||r==="interrupt")return{state:n,done:r};if(r==="up")return{state:{...n,cursor:tl(t,n.cursor,-1)}};if(r==="down")return{state:{...n,cursor:tl(t,n.cursor,1)}};let e=t[n.cursor];if(!el(e))return{state:n};let a=n.selected.includes(e.target)?n.selected.filter((l)=>l!==e.target):t5(t,[...n.selected,e.target]);return{state:{...n,selected:a}}}var al="◉",ll="◯",dl=">",sl=" ";function l5(n,t,r,e={}){let a=e.color!==!1,l=a?y.dim:(c)=>c,d=a?y.green:(c)=>c,s=a?y.bold:(c)=>c;return["",`${IL(n)} CC Safety Net ${n5(n)}:`,"",...t.map((c,L)=>{let u=r.selected.includes(c.target),p=L===r.cursor,f=u?al:ll,v=p?dl:sl,o=c.available?"":` (${c.unavailableReason??"not installed"})`,b=`${f} ${c.label}${o}`,h=!c.available?l(b):u?d(b):p?s(b):b;return`${v} ${h}`}),"",n==="install"?"Space: select  Enter: confirm  u: update installed  Up/Down: move  q/Esc: cancel":t.some((c)=>c.available)?"Space: select  Enter: confirm  Up/Down: move  q/Esc: cancel":`No selectable integrations found for ${n}. q/Esc: close`].join(`
`)}var rl=["global-hook","plugin"];function d5(n,t,r={}){let e=r.color!==!1?y.bold:(l)=>l;return["","Install the Kimi Code integration as:","",...[`Global hook — ${t?"already installed; selecting it reports the current state":"write the hook into ~/.kimi-code/config.toml now"}`,"Native Kimi plugin — print the steps to run inside Kimi Code"].map((l,d)=>{let s=d===n,c=`${s?al:ll} ${l}`;return`${s?dl:sl} ${s?e(c):c}`}),"","Enter: confirm  Up/Down: move  q/Esc: cancel"].join(`
`)}function il(n){let{input:t,output:r}=n;h2.emitKeypressEvents(t);let e=t.isRaw===!0;t.setRawMode(!0),t.resume();let a=0,l=()=>{if(a===0)return;h2.moveCursor(r,0,-a),h2.cursorTo(r,0),h2.clearScreenDown(r)},d=()=>{l();let s=n.render();r.write(`${s}
`),a=s.split(`
`).length};return new Promise((s)=>{let c=(u)=>{t.off("keypress",L),t.setRawMode(e),t.pause(),l(),s(u)};function L(u,p){n.onKey(u,p,{finish:c,draw:d})}t.on("keypress",L),d()})}function cl(n={}){let t=0;return il({input:n.input??process.stdin,output:n.output??process.stdout,render:()=>d5(t,n.globalHookInstalled===!0),onKey:(r,e,a)=>{if(e.ctrl&&e.name==="c"){a.finish(null),(n.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(e.name==="escape"||r==="q")return a.finish(null);if(e.name==="return"||e.name==="enter"){let l=rl[t];if(l)return a.finish(l)}if(e.name==="up"||e.name==="down"||r==="k"||r==="j")t=(t+1)%rl.length,a.draw()}})}function ee(n=process.stdin,t=process.stdout){return Boolean(n.isTTY&&t.isTTY)}function Ll(n,t,r={}){let e=r.output??process.stdout,a=e5(t);return il({input:r.input??process.stdin,output:e,render:()=>l5(n,t,a),onKey:(l,d,s)=>{let c=r5(n,l,d);if(!c)return;let L=a5(a,t,c);if(a=L.state,L.done==="interrupt"){s.finish(null),(r.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(L.done==="abort")return s.finish(null);if(L.done==="update")return s.finish("update");if(L.done==="confirm"){if(a.selected.length===0){e.write("\x07"),s.draw();return}s.finish([...a.selected]),e.write(`${NL(n)} selected integrations...
`);return}s.draw()}})}import{existsSync as pl,lstatSync as vl,mkdtempSync as c5,readFileSync as vt,rmSync as ol}from"node:fs";import{tmpdir as L5}from"node:os";import{dirname as u5,join as F2}from"node:path";import{fileURLToPath as p5}from"node:url";var ae="// cc-safety-net managed Amp plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --amp";import{spawn as s5}from"node:child_process";var i5=i.object({code:i.string().optional()}),le=(n,t)=>{let r=w2([...n],process.env);return new Promise((e)=>{let a=s5(r.cmd,r.args,{cwd:t,stdio:["ignore","pipe","pipe"]}),l=Gr(a),d=!1,s=setTimeout(()=>{d=!0,a.kill()},120000);a.on("error",(c)=>{clearTimeout(s),e({status:null,errorCode:i5.safeParse(c).data?.code,stdout:l.stdout,stderr:[c.message,l.stderr].filter(Boolean).join(`
`)})}),a.on("close",(c)=>{clearTimeout(s),e({status:d?null:c,errorCode:d?"ETIMEDOUT":void 0,stdout:l.stdout,stderr:l.stderr})})})};var ul=F2("amp","cc-safety-net.ts"),u2="cc-safety-net.ts";function v5(n){return F2(n,".config","amp","plugins",u2)}function o5(){let n=u5(p5(import.meta.url));return[F2(n,"..",ul),F2(n,"..","..","..","dist",ul)]}function b5(n=o5()){let t=n.find((r)=>pl(r)&&vl(r).isFile());if(!t)throw Error("Packaged Amp plugin artifact not found. Reinstall cc-safety-net and try again.");return t}function bl(n){try{return vl(n)}catch{return}}var f5=i.record(i.string(),i.json()),y5=i.object({scope:i.literal("user"),exists:i.literal(!0),viewerCanWrite:i.literal(!0),cloneRef:i.string().min(1)}),w5=i.array(i.json()).transform((n)=>n.flatMap((t)=>{let r=y5.safeParse(t);return r.success?[r.data]:[]}));function h5(n){try{return f5.safeParse(JSON.parse(n)).data}catch{return}}function x5(n){try{return w5.safeParse(JSON.parse(n)).data??[]}catch{return[]}}function fl(n){return n.subarray(0,Buffer.byteLength(ae)).toString("utf-8")===ae}async function Qn(n,t,r){let e=await n(t,r);if(e.status===0)return e;throw Error([`Failed to run ${t.join(" ")}${e.status===null?"":` (exit ${e.status})`}.`,[e.stdout,e.stderr].filter(Boolean).join(`
`).trim()].filter(Boolean).join(`
`))}async function yl(n){let t=await n(["amp","plugins","repositories","--json"]);if(t.status===null)throw Error(`${t.errorCode==="ENOENT"?'Amp CLI not found. Install the amp CLI, sign in with "amp login", and rerun install --amp.':`amp plugins repositories --json did not finish (${t.errorCode??"terminated"}). Check that the amp CLI responds and rerun install --amp.`}
${t.stderr}`.trim());if(t.status!==0)throw Error(`Failed to run amp plugins repositories --json (exit ${t.status}). Sign in with "amp login" and rerun install --amp.
${[t.stdout,t.stderr].filter(Boolean).join(`
`)}`.trim());let r=x5(t.stdout)[0]?.cloneRef;if(!r)throw Error('Your Amp account has no writable Personal Plugins repository. Sign in with "amp login", open Amp once to create it, and rerun install --amp.');return r}async function wl(n,t){let r=c5(F2(L5(),"cc-safety-net-amp-"));try{return await Qn(n,["amp","clone","user-plugins",r]),await t(r)}finally{ol(r,{recursive:!0,force:!0})}}function hl(n,t){let r=F2(n,u2),e=bl(r);if(!e)return;if(e.isSymbolicLink()||!e.isFile())throw Error(`Refusing to ${t} ${u2} in your Amp personal plugins repository: not a regular file. Remove it there and rerun install --amp.`);let a=vt(r);if(fl(a))return a;throw Error(`Refusing to ${t} unmanaged file ${u2} in your Amp personal plugins repository. Remove it there and rerun install --amp.`)}async function xl(n,t,r,e){if(await Qn(n,r,t),(await Qn(n,["git","status","--porcelain"],t)).stdout.trim()==="")return!1;return await Qn(n,["git","-c","commit.gpgsign=false","-c","user.name=cc-safety-net","-c","user.email=cc-safety-net@localhost","commit","-m",e],t),await Qn(n,["git","push","origin","HEAD"],t),!0}function ut(n,t){let r=v5(n),e=bl(r);if(!e)return;if(!e.isSymbolicLink()&&e.isFile()&&fl(vt(r))){ol(r);return}if(t==="keep")return;throw Error(`Local Amp plugin ${r} is not a managed copy and masks the personal plugin. Remove it and rerun install --amp.`)}function $5(){let n=bn();if(!pl(n))return"";let t=h5(vt(n,"utf-8"));if(!t)return"";return`;globalThis.__CC_SAFETY_NET_EMBEDDED_POLICY__ = ${JSON.stringify(pt(t))};
`}async function $l(n,t=b5(),r=le){let e=Buffer.concat([vt(t),Buffer.from($5(),"utf-8")]),a=await yl(r);return wl(r,async(l)=>{let d=`${a}/${u2}`;if(hl(l,"overwrite")?.equals(e))return ut(n,"fail"),{path:d,alreadyInstalled:!0};J(F2(l,u2),e);let s=await xl(r,l,["git","add",u2],`chore: update cc-safety-net plugin to v${j()}`);return ut(n,"fail"),{path:d,alreadyInstalled:!s}})}async function gl(n,t=le){let r=await yl(t);return wl(t,async(e)=>{let a=`${r}/${u2}`;if(!hl(e,"remove"))return ut(n,"keep"),{path:a,alreadyInstalled:!1};return await xl(t,e,["git","rm",u2],`chore: remove cc-safety-net plugin v${j()}`),ut(n,"keep"),{path:a,alreadyInstalled:!0}})}import{existsSync as Dl,mkdirSync as g5,readFileSync as D5}from"node:fs";import{dirname as m5}from"node:path";var de="npx -y cc-safety-net hook --agy-cli",p2="cc-safety-net",q5=i.object({command:i.json().optional()}).catchall(i.json()),ml=i.array(q5),ql=i.object({hooks:i.json().optional()}).catchall(i.json()),ft=i.array(ql),se=i.object({enabled:i.json().optional(),PreToolUse:i.json().optional()}).catchall(i.json()),k5=i.record(i.string(),i.json()),kl=i.string();function bt(){return{PreToolUse:[{hooks:[{type:"command",command:de,timeout:30}]}]}}function jl(n){try{let t=k5.safeParse(JSON.parse(D5(n,"utf-8")));if(!t.success)throw Error("Antigravity hooks config must be a JSON object");return t.data}catch(t){if(t instanceof SyntaxError)throw Error(`Failed to parse Antigravity hooks config ${n}: ${t.message}`);throw t}}function Fl(n){let t=n[p2];if(t===void 0)return n[p2]=bt(),n[p2];let r=se.safeParse(t);if(!r.success)throw Error(`Antigravity hooks config entry "${p2}" must be an object`);let e=ft.safeParse(r.data.PreToolUse);return r.data.PreToolUse=e.success?e.data:[],n[p2]=r.data,r.data}function Bl(n){let t=ft.safeParse(n.PreToolUse);if(!t.success)return!1;return t.data.some((r)=>{let e=ml.safeParse(r.hooks);return e.success&&e.data.some((a)=>kl.safeParse(a.command).data===de)})}function j5(n){return Object.values(n).some((t)=>{let r=se.safeParse(t);return r.success&&r.data.enabled!==!1&&Bl(r.data)})}function F5(n){if(n[p2]===void 0)return!1;let t=Fl(n);if(t.enabled!==!1||!Bl(t))return!1;return t.enabled=!0,!0}function B5(n){if(n[p2]===void 0){n[p2]=bt();return}let t=Fl(n),r=ft.parse(t.PreToolUse);t.enabled=!0,r.push(ql.parse(bt().PreToolUse[0])),t.PreToolUse=r}function J5(n){let t=!1;return Object.entries(n).forEach(([r,e])=>{let a=se.safeParse(e);if(!a.success)return;let l=ft.safeParse(a.data.PreToolUse);if(!l.success)return;a.data.PreToolUse=l.data.flatMap((d)=>{let s=ml.safeParse(d.hooks);if(!s.success)return[d];let c=s.data.filter((L)=>kl.safeParse(L.command).data!==de);if(c.length!==s.data.length)t=!0;return c.length===0?[]:[{...d,hooks:c}]}),n[r]=a.data}),t}function ot(n,t){J(n,`${JSON.stringify(t,null,2)}
`)}function Jl(n){let t=mn(n);if(g5(m5(t),{recursive:!0}),!Dl(t))return ot(t,{[p2]:bt()}),{path:t,alreadyInstalled:!1};let r=jl(t);if(j5(r))return{path:t,alreadyInstalled:!0};if(F5(r))return ot(t,r),{path:t,alreadyInstalled:!1};return B5(r),ot(t,r),{path:t,alreadyInstalled:!1}}function Zl(n){let t=mn(n);if(!Dl(t))return{path:t,alreadyInstalled:!1};let r=jl(t);if(!J5(r))return{path:t,alreadyInstalled:!1};return ot(t,r),{path:t,alreadyInstalled:!0}}import{spawn as Z5,spawnSync as Q5}from"node:child_process";var z=c2.map((n)=>({target:n.id,flag:n.flag,label:n.installLabel,probeCommand:n.probeCommand})),Ql=new Map(z.map((n)=>[n.flag,n.target]));function ie(n){let t=new Set(n);return z.map((r)=>r.target).filter((r)=>t.has(r))}async function Xl(n,t){for(let r of n)await t(r)}var Yl=5000;function X5(n){let t=w2([...n],process.env),r=Q5(t.cmd,t.args,{env:process.env,stdio:"ignore",timeout:Yl});return!r.error&&r.status===0}function Le(n){return new Promise((t)=>{let r=w2([...n],process.env),e=Z5(r.cmd,r.args,{env:process.env,stdio:"ignore"}),a=!1,l=(s)=>{if(a)return;a=!0,clearTimeout(d),t(s)},d=setTimeout(()=>{e.kill(),l(!1)},Yl);e.on("error",()=>l(!1)),e.on("close",(s)=>l(s===0))})}function Y5(n=X5,t={}){let r=new Set(t.configuredTargets??[]);if(t.async)return Promise.all(z.map(async(e)=>({target:e.target,flag:e.flag,label:e.label,...ce(t.action,await n(e.probeCommand),r.has(e.target))})));return z.map((e)=>({target:e.target,flag:e.flag,label:e.label,...ce(t.action,i.boolean().safeParse(n(e.probeCommand)).data??!1,r.has(e.target))}))}function Rl(n=Le,t={}){return Y5(n,{...t,async:!0})}function Al(n,t){let r=new Set(t.configuredTargets??[]);return n.map((e)=>({...e,...ce(t.action,e.available,r.has(e.target))}))}function ce(n,t,r){if(n==="uninstall")return r?{available:!0}:{available:!1,unavailableReason:"not installed"};if(n==="install"&&r)return{available:!1,unavailableReason:"already installed"};if(!t)return{available:!1,unavailableReason:"CLI not installed"};return{available:!0}}import{existsSync as Hl,readdirSync as R5,rmSync as A5}from"node:fs";import{join as nn}from"node:path";function yt(n,t=process.platform){let r=nn(process.env.npm_config_cache||(t==="win32"?nn(process.env.LOCALAPPDATA||nn(n,"AppData","Local"),"npm-cache"):nn(n,".npm")),"_npx");if(!Hl(r))return;R5(r).filter((e)=>Hl(nn(r,e,"node_modules","cc-safety-net"))).forEach((e)=>{A5(nn(r,e),{recursive:!0,force:!0})})}import{existsSync as zl,mkdirSync as W5,readFileSync as Vl}from"node:fs";import{dirname as M5,join as Kl}from"node:path";function Wl(n){return n!==void 0&&/\s/.test(n)}function H5(n,t,r){let e=t+1,a=!1;while(e<n.length){let l=n[e];if(a){a=!1,e++;continue}if(l==="\\"){a=!0,e++;continue}if(l==='"')return e+1;e++}throw Error(r)}function wt(n,t,r){let e=n[t],a=e==="["?"]":"}",l=0,d=t;while(d<n.length){let s=r.skipComment?.(n,d)??d;if(s!==d){d=s;continue}if(n[d]==='"'){d=H5(n,d,r.stringError);continue}if(n[d]===e)l++;if(n[d]===a){if(l--,l===0)return d}d++}throw Error(r.bracketError)}function Ml(n,t){let r=n.lastIndexOf(`
`,t)+1;return/^[ \t]*/.exec(n.slice(r))?.[0]??""}function ht(n,t){let{start:r,end:e,end:a}=t;while(Wl(n[a]))a++;if(n[a]===","){if(e=a+1,n[e]===`
`)e++;return`${n.slice(0,r)}${n.slice(e)}`}a=t.start-1;while(Wl(n[a]))a--;if(n[a]===","){r=a;let l=n.lastIndexOf(`
`,r-1);if(l!==-1&&/^\s*$/.test(n.slice(l+1,r)))r=l}return`${n.slice(0,r)}${n.slice(e)}`}var Xn="npx -y cc-safety-net hook --kimi-code",ue=`[[hooks]]
event = "PreToolUse"
command = "${Xn}"`,pe=`{ event = "PreToolUse", command = "${Xn}" }`;function Gl(n){return Kl(process.env.KIMI_CODE_HOME??Kl(n,".kimi-code"),"config.toml")}function K5(n){return n.split(`
`).reduce((r,e)=>{if(/^\s*\[/.test(e))return r.activeTable=!0,r.lines.push(e),r;if(!r.activeTable&&/^\s*hooks\s*=\s*\[\s*]\s*(?:#.*)?$/.test(e))return r;return r.lines.push(e),r},{activeTable:!1,lines:[]}).lines.join(`
`)}function z5(n,t){if(n[t]!=="#")return t;let r=n.indexOf(`
`,t+1);return r===-1?n.length:r+1}function V5(n,t){return wt(n,t,{skipComment:z5,stringError:"Unterminated string in Kimi Code config",bracketError:"Unmatched hooks array in Kimi Code config"})}function Sl(n){let t=!1,r=0;while(r<n.length){let e=n.indexOf(`
`,r),a=e===-1?n.length:e,l=n.slice(r,a);if(/^\s*\[/.test(l))t=!0;if(!t){let d=/^(\s*)hooks\s*=\s*\[/.exec(l);if(d){let s=r+d[0].lastIndexOf("[");return{start:s,end:V5(n,s)}}}r=e===-1?n.length:e+1}return}function G5(n,t){let r=n.slice(0,t.end).trimEnd(),e=Ml(n,t.end),a=e===""?"     ":`${e}  `,l=!r.endsWith("[")&&!r.endsWith(",");return`${r}${l?",":""}
${a}${pe}${n.slice(t.end)}`}function S5(n){let t=Sl(n);if(t&&n.slice(t.start+1,t.end).trim())return G5(n,t);let r=K5(n).trimEnd();if(r==="")return`${ue}
`;return`${r}

${ue}
`}function U5(n){return n.split(/(?=^\s*\[)/m).filter((r)=>!/^\s*\[\[hooks]]\s*$/m.test(r)||!r.includes(Xn)).join("").trimEnd()}function C5(n,t){let r=n.indexOf(pe,t.start);if(r===-1||r>t.end)return n;return ht(n,{start:r,end:r+pe.length})}function Ul(n){let t=Gl(n);if(W5(M5(t),{recursive:!0}),!zl(t))return J(t,`${ue}
`),{path:t,alreadyInstalled:!1};let r=Vl(t,"utf-8");if(r.includes(Xn))return{path:t,alreadyInstalled:!0};return J(t,S5(r)),{path:t,alreadyInstalled:!1}}function Cl(n){let t=Gl(n);if(!zl(t))return{path:t,alreadyInstalled:!1};let r=Vl(t,"utf-8");if(!r.includes(Xn))return{path:t,alreadyInstalled:!1};let e=Sl(r),a=e?C5(r,e):`${U5(r)}
`;return J(t,a),{path:t,alreadyInstalled:!0}}import{existsSync as Ol,readFileSync as O5,rmSync as T5}from"node:fs";import{join as ve}from"node:path";var oe="cc-safety-net",_5=`${oe}@latest`,_l=["opencode.json","opencode.jsonc"],El=i.string(),E5=i.object({plugin:i.array(i.json()).optional()}).loose().transform((n)=>({hasManagedPlugin:n.plugin?.some((t)=>{let r=El.safeParse(t);return r.success&&r.data.includes(oe)})??!1})).or(i.json().transform(()=>({hasManagedPlugin:!1})));function P5(n){return ve(n,".config","opencode",_l[0])}function I5(n){return _l.map((t)=>ve(n,".config","opencode",t))}function N5(n){return ve(n,".cache","opencode","packages",_5)}function be(n){T5(N5(n),{recursive:!0,force:!0})}function xt(n,t){if(n[t]==="/"&&n[t+1]==="/"){let r=n.indexOf(`
`,t+2);return r===-1?n.length:r+1}if(n[t]==="/"&&n[t+1]==="*"){let r=n.indexOf("*/",t+2);return r===-1?n.length:r+2}return t}function Tl(n,t){let r=t;while(r<n.length){if(/\s/.test(n[r]??"")){r++;continue}let e=xt(n,r);if(e===r)return r;r=e}return r}function Pl(n,t){let r=t+1,e=!1;while(r<n.length){if(e){e=!1,r++;continue}if(n[r]==="\\"){e=!0,r++;continue}if(n[r]==='"')return r+1;r++}throw Error("Unterminated string in OpenCode config")}function Il(n,t,r){return El.parse(JSON.parse(n.slice(t,r)))}function n8(n,t){return wt(n,t,{skipComment:xt,stringError:"Unterminated string in OpenCode config",bracketError:"Unmatched plugin array in OpenCode config"})}function t8(n){let t=0,r=0;while(r<n.length){let e=xt(n,r);if(e!==r){r=e;continue}if(n[r]==='"'){let a=Pl(n,r);if(t===1&&Il(n,r,a)==="plugin"){let l=Tl(n,a),d=Tl(n,l+1);if(n[l]===":"&&n[d]==="[")return{start:d,end:n8(n,d)}}r=a;continue}if(n[r]==="{"||n[r]==="[")t++;if(n[r]==="}"||n[r]==="]")t--;r++}return}function r8(n,t){let r=[],e=t.start+1;while(e<t.end){let a=xt(n,e);if(a!==e){e=a;continue}if(n[e]==='"'){let l=Pl(n,e);if(Il(n,e,l).includes(oe))r.push({start:e,end:l});e=l;continue}e++}return r}function Nl(n,t){try{return E5.parse(JSON.parse(K(n)))}catch(r){if(r instanceof SyntaxError)throw Error(`Failed to parse OpenCode config ${t}: ${r.message}`);throw r}}function e8(n,t){let r=t8(n);if(!r)throw Error(`Failed to locate OpenCode plugin array in ${t}`);let e=[...r8(n,r)].reverse().reduce(ht,n);return Nl(e,t),e}function n3(n){be(n);let t=I5(n),r=t.find((a)=>Ol(a)),e=[];for(let a of t){if(!Ol(a))continue;try{let l=O5(a,"utf-8");if(!Nl(l,a).hasManagedPlugin)continue;return J(a,e8(l,a)),{path:a,alreadyInstalled:!0}}catch(l){e.push(l instanceof Error?l.message:String(l))}}if(e.length>0)throw Error(e.join(`
`));return{path:r??P5(n),alreadyInstalled:!1}}var ye="safety-net@cc-marketplace",t3=new Set(["claude-code","codex","copilot-cli","gemini-cli","hermes-agent","openclaw","opencode","pi"]),r3=new Set(["antigravity-cli","cursor","hermes-agent","kimi-code"]);function he(n){return/^\s*safety-net@cc-marketplace[^a-z0-9-][^\n]*installed,/m.test(n??"")}function s3(n){return/^\s*cc-safety-net[^a-z0-9-][^\n]*installed,/m.test(n??"")}function l8(n){return/^Marketplace `cc-marketplace`\s*$/m.test(n??"")}var i3={"claude-code":{installCommands:(n)=>{let t=nt(n,"cc-safety-net@cc-marketplace");return{commands:[...t?[["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","update","cc-safety-net@cc-marketplace"]]:[["claude","plugin","marketplace","add","kenryu42/cc-marketplace"],["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","install","cc-safety-net@cc-marketplace"]],...mr(n).status==="disabled"?[["claude","plugin","enable","cc-safety-net@cc-marketplace"]]:[]],cleanupCommands:nt(n,ye)?[["claude","plugin","uninstall",ye]]:[],update:t}},uninstallCommands:[["claude","plugin","uninstall","cc-safety-net@cc-marketplace"],["claude","plugin","marketplace","remove","cc-marketplace"]]},codex:{installCommands:async(n,t)=>{let r=t??await r2(["codex","plugin","list"]),e=s3(r);return{commands:[e||l8(r)?["codex","plugin","marketplace","upgrade","cc-marketplace"]:["codex","plugin","marketplace","add","kenryu42/cc-marketplace"],["codex","plugin","add","cc-safety-net@cc-marketplace"]],cleanupCommands:he(r)?[["codex","plugin","remove","safety-net@cc-marketplace"]]:[],update:e}},uninstallCommands:[["codex","plugin","remove","cc-safety-net@cc-marketplace"],["codex","plugin","marketplace","remove","cc-marketplace"]],postInstallMessage:"Start Codex, open `/hooks`, select the cc-safety-net PreToolUse hook, and press `t` to trust it."},"copilot-cli":{installCommands:async()=>{let n=await r2(["copilot","plugin","list"]),t=[...ra(n)?[["copilot","plugin","uninstall","copilot-safety-net"]]:[],...ea(n)?[["copilot","plugin","uninstall",N0]]:[]];if(na(n))return{commands:[["copilot","plugin","marketplace","update","cc-marketplace"],["copilot","plugin","update",t2]],cleanupCommands:t,update:!0};return{commands:[ta(await r2(["copilot","plugin","marketplace","list"]))?["copilot","plugin","marketplace","update","cc-marketplace"]:["copilot","plugin","marketplace","add","kenryu42/cc-marketplace"],["copilot","plugin","install",t2]],cleanupCommands:t}},uninstallCommands:[["copilot","plugin","uninstall","cc-safety-net@cc-marketplace"],["copilot","plugin","marketplace","remove","cc-marketplace"]]},"gemini-cli":{installCommands:(n)=>{let t=Yr(n);if(t.status==="configured")return{commands:[["gemini","extensions","update","gemini-safety-net"]],update:!0};if(t.status==="disabled")return{commands:[["gemini","extensions","update","gemini-safety-net"],["gemini","extensions","enable","gemini-safety-net"]],update:!0};return{commands:[["gemini","extensions","install","https://github.com/kenryu42/gemini-safety-net","--consent"]]}},uninstallCommands:[["gemini","extensions","uninstall","gemini-safety-net"]]},openclaw:{beforeInstall:Cr,installCommands:()=>({commands:Aa()}),uninstallCommands:[["openclaw","plugins","uninstall",k,"--force"]],postInstallMessage:["Restart the OpenClaw Gateway to apply the change.","If plugins.allow is set in openclaw.json, it must also list cc-safety-net."].join(`
`)},opencode:{beforeInstall:be,installCommands:()=>({commands:[["opencode","plugin","-g","-f","cc-safety-net@latest"]]})},pi:{installCommands:()=>({commands:[["pi","install","npm:cc-safety-net"]]}),uninstallCommands:[["pi","uninstall","npm:cc-safety-net"]]}};function mt(){return process.env.HOME??a8()}var d8=i.object({}).loose(),s8=i.object({enabledPlugins:i.record(i.string(),i.unknown())}).loose(),i8=i.object({packages:i.array(i.unknown())}).loose(),c8=i.object({source:i.string(),extensions:i.unknown().optional()}).loose();function c3(n,t=(r)=>r){try{let r=JSON.parse(t(d3(n,"utf-8"))),e=d8.safeParse(r);if(!e.success)throw Error(`Settings file ${n} must be a JSON object`);return e.data}catch(r){if(r instanceof SyntaxError)throw Error(`Failed to parse ${n}: ${r.message}`);throw r}}function L8(n){let t=fe(qn(n),"settings.json");if(!we(t))return;let r=s8.safeParse(c3(t,K));if(!r.success)return;let e=r.data,a=e.enabledPlugins;if(a[t2]!==!1)return;let l=d3(t,"utf-8"),d=l.replace(new RegExp(`("${t2}"\\s*:\\s*)false`),"$1true");return a[t2]=!0,J(t,d!==l?d:`${JSON.stringify(e,null,2)}
`),`Enabled ${t2} plugin in ${t}`}function u8(n){let t=Tr(n);if(!we(t))return;let r=i8.safeParse(c3(t));if(!r.success)return;let e=r.data,a=e.packages.map((s)=>c8.safeParse(s)),l=a.findIndex((s)=>s.success&&_r(s.data.source)&&s.data.extensions!==void 0),d=a[l];if(!d?.success)return;return delete d.data.extensions,e.packages[l]=d.data,J(t,`${JSON.stringify(e,null,2)}
`),`Enabled npm:cc-safety-net extensions in ${t}`}function e3(n,t){let r=F({label:t,booleans:{amp:["--amp"],"antigravity-cli":["--agy-cli"],"claude-code":["--claude-code"],codex:["--codex"],"copilot-cli":["--copilot-cli"],cursor:["--cursor"],"gemini-cli":["--gemini-cli"],"hermes-agent":["--hermes-agent"],"kimi-code":["--kimi-code"],openclaw:["--openclaw"],opencode:["--opencode"],pi:["--pi"]}},n),e=r.errors[0];if(e)throw Error(e);let a=z.filter((d)=>r.flags[d.target]).map((d)=>d.target),l=a[0];if(a.length!==1||!l)throw Error(`Choose exactly one ${t} target: ${[...Ql.keys()].join(", ")}`);return l}async function L3(n=mt(),t=O2){let[r,e,a]=await Promise.all([t(["amp","plugins","list"],30000),t(["codex","plugin","list"],30000),t(["copilot","--binary-version"])]);return{codexPluginListOutput:e,hooks:N2(process.cwd(),{homeDir:n,ampPluginListOutput:r,codexPluginListOutput:e,copilotCliVersion:a})}}async function p8(n,t=O2){let r=await L3(mt(),t);return r.hooks.filter((e)=>n==="install"?e.configured:e.detected||e.inspectionStatus==="not-inspected").filter((e)=>e.platform!=="codex"||!he(r.codexPluginListOutput)||s3(r.codexPluginListOutput)).flatMap((e)=>{let a=z.find((l)=>l.target===e.platform);return a?[a.target]:[]})}function v8(n,t,r){if(t.length>0)return{finish:async()=>[e3(t,n)]};if(!r.selectTargets&&!ee(r.input,r.output))return{finish:async()=>[e3(t,n)]};let e=r.detectConfiguredTargets??(()=>p8(n,r.fetchVersion)),a=Promise.all([Rl(r.probeTargets),e()]);return{ready:a,finish:async()=>{let[l,d]=await a,s=Al(l,{action:n,configuredTargets:d}),c=r.selectTargets?await r.selectTargets(n,l3(n,s)):await Ll(n,l3(n,s),{input:r.input,output:r.output});if(c==="update")return c;if(!c||c.length===0)return null;return ie(c)}}}async function B2(n,t,r=!1,e){let a=i3[n];a.beforeInstall?.(t);let l=await a.installCommands(t,e);return await Sr(l.commands),await Ja(l.cleanupCommands??[]),[`${l.update||r?"Updated":"Installed"} ${y2(n)} integration`,a.postInstallMessage].filter(Boolean).join(`
`)}async function tn(n){let t=i3[n];if(!t.uninstallCommands)throw Error(`${y2(n)} uninstall is not supported`);return await Sr(t.uninstallCommands),`Uninstalled ${y2(n)} integration`}function o8(n){let t=n3(n);return t.alreadyInstalled?`Uninstalled OpenCode plugin from ${t.path}`:`OpenCode plugin not installed in ${t.path}`}var b8={"antigravity-cli":{install:Jl,uninstall:Zl},cursor:{install:va,uninstall:oa},"kimi-code":{install:Ul,uninstall:Cl}};function rn(n,t,r,e=!1){if(n==="install"&&!e)yt(r);let a=b8[t][n](r),l=y2(t),d=n!=="install"?"Uninstalled":e?"Updated":"Installed";return n==="install"&&a.alreadyInstalled?e?`${l} hook up to date in ${a.path}`:`${l} hook already installed in ${a.path}`:n==="uninstall"&&!a.alreadyInstalled?`${l} hook not installed in ${a.path}`:`${d} ${l} hook ${n==="install"?"in":"from"} ${a.path}`}var f8={amp:{install:$l,uninstall:gl,restartNote:'Amp personal plugins apply to every Amp session, including Orb threads. Restart Amp or run "plugins: reload" to apply the change.'},"hermes-agent":{install:xa,uninstall:$a,afterInstall:async(n)=>{let t=zr(n);return await r2(["hermes","plugins","enable",G,"--no-allow-tool-override"]),!t},beforeUninstall:async(n)=>{Kr(n);try{await r2(["hermes","plugins","disable",G])}catch(t){console.warn(`${t instanceof Error?t.message:String(t)}
Removing the plugin files anyway; ${G} may still be listed in the Hermes config.`)}},restartNote:"Restart Hermes to apply the change."}};async function $t(n,t,r,e=!1){let a=f8[t];if(n==="uninstall")await a.beforeUninstall?.(r);let l=n==="install"?await a.install(r):await a.uninstall(r),d=n==="install"&&await a.afterInstall?.(r),s=y2(t),c=!d&&(n==="install"&&l.alreadyInstalled||n==="uninstall"&&!l.alreadyInstalled);return[c?n==="install"?`${s} plugin ${e?"up to date":"already installed"} at ${l.path}`:`${s} plugin not installed at ${l.path}`:`${n!=="install"?"Uninstalled":e?"Updated":"Installed"} ${s} plugin ${n==="install"?"at":"from"} ${l.path}`,c?void 0:a.restartNote].filter(Boolean).join(`
`)}var y8={amp:{install:(n,t)=>$t("install","amp",n,t),uninstall:(n)=>$t("uninstall","amp",n)},"antigravity-cli":{install:(n,t)=>rn("install","antigravity-cli",n,t),uninstall:(n)=>rn("uninstall","antigravity-cli",n)},"claude-code":{install:(n,t)=>B2("claude-code",n,t),uninstall:()=>tn("claude-code")},codex:{install:(n,t,r)=>B2("codex",n,t,r),uninstall:()=>tn("codex")},"copilot-cli":{install:async(n,t)=>[await B2("copilot-cli",n,t),L8(n)].filter(Boolean).join(`
`),uninstall:()=>tn("copilot-cli")},cursor:{install:(n,t)=>rn("install","cursor",n,t),uninstall:(n)=>rn("uninstall","cursor",n)},"gemini-cli":{install:(n,t)=>B2("gemini-cli",n,t),uninstall:()=>tn("gemini-cli")},"hermes-agent":{install:(n,t)=>{if(!t)yt(n);return $t("install","hermes-agent",n,t)},uninstall:(n)=>$t("uninstall","hermes-agent",n)},"kimi-code":{install:(n,t)=>rn("install","kimi-code",n,t),uninstall:(n)=>rn("uninstall","kimi-code",n)},openclaw:{install:async(n,t)=>{let r=await B2("openclaw",n,t);return await Ha(),r},uninstall:(n)=>{return Cr(n),tn("openclaw")}},opencode:{install:(n,t)=>B2("opencode",n,t),uninstall:(n)=>o8(n)},pi:{install:async(n,t)=>[await B2("pi",n,t),u8(n)].filter(Boolean).join(`
`),uninstall:()=>tn("pi")}},a3=["Install CC Safety Net as a native Kimi Code plugin:","","  1. Start Kimi Code and run: /plugins install https://github.com/kenryu42/cc-safety-net","     Confirm the trust prompt; it defaults to cancel.","  2. Run /reload, or start a new session.","","Note: Kimi Code hooks are fail-open. When the hook process cannot start, crashes, or times","out, Kimi Code allows the tool call."].join(`
`);function w8(n){if(Fn({homeDir:n,cwd:process.cwd()}).status!=="configured")return a3;return[a3,"",y.red(["CAUTION: the global Kimi Code hook is installed and will run alongside the plugin.","After the plugin is active, remove it with: cc-safety-net uninstall --kimi-code"].join(`
`))].join(`
`)}function l3(n,t){return t.map((r)=>n==="install"&&r.target==="kimi-code"&&r.unavailableReason==="already installed"?{...r,available:!0,unavailableReason:void 0,label:`${r.label} (global hook installed)`}:r)}function h8(n,t){if(n.selectKimiInstallMethod)return n.selectKimiInstallMethod();if(!ee(n.input,n.output))return Promise.resolve("global-hook");return cl({input:n.input,output:n.output,globalHookInstalled:Fn({homeDir:t,cwd:process.cwd()}).status==="configured"})}async function u3(n,t,r,e=!1,a){return y8[t][n](r,e,a)}function x8(n){let t=F({label:"update"},n).errors[0];if(t)throw Error(t)}async function $8(n,t=O2){let r=await L3(n,t),e=fe(qn(n),"installed-plugins");return{targets:ie([...r.hooks.filter((l)=>l.platform!=="copilot-cli"&&l.detected).flatMap((l)=>{let d=z.find((s)=>s.target===l.platform);return d?[d.target]:[]}),...[tt,I0,P0].flatMap((l)=>we(fe(e,...l))?["copilot-cli"]:[]),...nt(n,ye)?["claude-code"]:[],...he(r.codexPluginListOutput)?["codex"]:[]]),codexPluginListOutput:r.codexPluginListOutput}}async function g8(n){let t=mt(),r=n.output??process.stdout,e=$8(t,n.fetchVersion??O2).then(async(s)=>{let c=new Set(s.targets);return{targets:s.targets,codexPluginListOutput:s.codexPluginListOutput,available:new Map(await Promise.all(z.filter((L)=>c.has(L.target)&&t3.has(L.target)).map(async(L)=>[L.target,await Le(L.probeCommand)])))}}),a=await Dn(n.showBanner??!0,()=>({ready:e,finish:()=>e}),()=>gn({input:n.input??process.stdin,output:r}),{loadingMessage:"Checking installed integrations…",output:r});if(a.targets.length===0)return r.write("No installed integrations found. Run `cc-safety-net install` to set one up.\n"),0;let l=a.targets.some((s)=>r3.has(s))?await Promise.resolve().then(()=>{return yt(t),null}).catch((s)=>Dt(gt.parse(s))):null,d=await Pn(Promise.all(a.targets.map((s)=>{if(t3.has(s)&&!a.available.get(s))return Promise.resolve({message:`${y2(s)} not found; skipped`,failed:!1});if(l!==null&&r3.has(s))return Promise.resolve({message:l,failed:!0});return u3("install",s,t,!0,a.codexPluginListOutput).then((c)=>({message:c,failed:!1}),(c)=>({message:Dt(gt.parse(c)),failed:!0}))})),{loadingMessage:`Updating ${a.targets.length} integration${a.targets.length===1?"":"s"}…`,output:r});return d.forEach((s)=>{if(s.failed){console.error(s.message);return}r.write(`${s.message}
`)}),d.some((s)=>s.failed)?1:0}function xe(n,t={}){return Promise.resolve().then(()=>x8(n)).then(()=>g8(t)).catch((r)=>{return console.error(Dt(gt.parse(r))),1})}async function Yn(n,t,r={}){try{let e=await Dn(!0,()=>v8(n,t,r),()=>gn({input:r.input??process.stdin,output:r.output??process.stdout}),{loadingMessage:n==="install"?"Checking available integrations…":"Checking installed integrations…",output:r.output??process.stdout});if(!e)return(r.output??process.stdout).write(`Cancelled: nothing was ${n}ed.
`),0;if(e==="update")return(r.runUpdate??(()=>xe([],{fetchVersion:r.fetchVersion,input:r.input,output:r.output,showBanner:!1})))();let a=mt(),l=r.output??process.stdout;return await Xl(e,async(d)=>{if(d==="kimi-code"&&n==="install"){let c=await h8(r,a);if(c===null){l.write(`Cancelled: Kimi Code integration was not installed.
`);return}if(c==="plugin"){l.write(`${w8(a)}
`);return}}let s=await Pn(u3(n,d,a),{loadingMessage:`${n==="install"?"Installing":"Uninstalling"} ${y2(d)} integration…`,output:l});l.write(`${s}
`)}),0}catch(e){return console.error(Dt(gt.parse(e))),1}}var D8=i.object({code:i.unknown().optional()}),gt=i.union([i.instanceof(Error).transform((n)=>({message:n.message,code:D8.parse(n).code??null})),i.unknown().transform((n)=>({message:String(n),code:null}))]);function Dt(n){let{message:t,code:r}=n;if(r==="EACCES"||r==="EPERM")return`${t}
Check file permissions for the target config file and parent directory.`;if(r==="ENOENT")return`${t}
Check that the target config path and parent directory exist.`;if(r==="ENOTDIR")return`${t}
Check that every parent path component is a directory.`;return t}import{join as u4}from"node:path";var p3="# Custom Rules Reference\n\nAgent reference for generating CC Safety Net rulebook configuration.\n\n## Config Locations\n\n| Scope | Config path | Rulebook path | Cache path | Priority |\n|-------|-------------|---------------|------------|----------|\n| User | `~/.cc-safety-net/rules/rule.json` | `~/.cc-safety-net/rules/<rulebook-name>/rulebook.json` | `~/.cc-safety-net/cache/rulebooks/` | First |\n| Project | `.cc-safety-net/rules/rule.json` | `.cc-safety-net/rules/<rulebook-name>/rulebook.json` | `.cc-safety-net/cache/rulebooks/` | Second |\n| GitHub source | Listed in a local `rule.json` | `.cc-safety-net/rules/<rulebook-name>/rulebook.json` in the source repository | Consumer local cache | Source order |\n\nUser scope is evaluated before project scope; within a scope, sources apply in `rules` array order. A duplicate active rulebook name keeps the first claim and ignores the later rulebook with a warning, so a user-scoped name shadows a project-scoped one.\n\nUse `cc-safety-net rule init` to create an inert local config. Use `--global` for user scope. Use `cc-safety-net rule init --example` to also create an inactive example rulebook. `CC_SAFETY_NET_HOME` overrides the `~/.cc-safety-net` user root.\n\nLegacy inline `.safety-net.json` and `~/.cc-safety-net/config.json` files are not loaded at runtime. Convert them with `cc-safety-net rule migrate`.\n\n## rule.json Schema\n\n```json\n{\n  \"version\": 1,\n  \"rules\": [\"project-rules\", \"owner/repo#main/team-rules\"],\n  \"overrides\": {\n    \"project-rules/block-docker-system-prune\": {\n      \"reason\": \"Use targeted Docker cleanup commands.\"\n    },\n    \"team-rules/block-npm-global\": \"off\"\n  },\n  \"transparent_wrappers\": [\"rtk\"]\n}\n```\n\n- `version`: Required. Must be `1`.\n- `$schema`: Optional. `cc-safety-net rule verify` inserts it into a valid `rule.json` that lacks it.\n- `rules`: Optional array of rulebook source strings. Missing `rules` is treated as `[]`.\n- `overrides`: Optional object keyed by `<rulebook-name>/<rule-name>`.\n- `overrides` values are either `\"off\"` to disable a rule or an object with a required `reason` (replacement block reason) and an optional `intent` (one of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain`).\n- A project override cannot target a user-scoped rule: only that override is ignored, the user rule keeps its configured state, and `rule sync`/`rule verify` report the diagnostic as a failure.\n- `transparent_wrappers`: Optional array of command names that transparently execute a visible child command.\n- Transparent wrappers have no built-in defaults. Configure only wrappers you intentionally trust, such as `\"rtk\"`.\n- Use `cc-safety-net rule wrapper add rtk` to configure RTK without manually editing `rule.json`.\n\n## Rulebook Sources\n\n- Local sources are bare rulebook names such as `project-rules`; the rulebook file is `.cc-safety-net/rules/project-rules/rulebook.json`.\n- GitHub sources use `owner/repo#ref/<rulebook-name>`.\n- GitHub refs must be one path segment, such as a tag, SHA, or branch name without `/`.\n- The GitHub source name, the repository directory name, and the rulebook `name` must match exactly.\n- Rulebook source strings must be unique in a config.\n\n## rulebook.json Schema\n\n```json\n{\n  \"rulebook_version\": 1,\n  \"name\": \"project-rules\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Project-specific CC Safety Net rules.\",\n  \"author\": \"project\",\n  \"allowed_commands\": [\"docker\"],\n  \"rules\": [\n    {\n      \"name\": \"block-docker-system-prune\",\n      \"command\": \"docker\",\n      \"subcommand\": \"system\",\n      \"block_args\": [\"prune\"],\n      \"reason\": \"Use targeted cleanup instead.\"\n    }\n  ],\n  \"tests\": [\n    {\n      \"command\": \"docker system prune\",\n      \"expect\": \"blocked\",\n      \"rule\": \"block-docker-system-prune\"\n    },\n    {\n      \"command\": \"docker ps\",\n      \"expect\": \"allowed\"\n    }\n  ]\n}\n```\n\n### Rulebook Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `rulebook_version` | Yes | Must be `1` |\n| `name` | Yes | `^[a-zA-Z][a-zA-Z0-9_-]{0,63}$` |\n| `version` | Yes | Non-empty string |\n| `description` | No | Free text; not type-checked at runtime |\n| `author` | No | Free text; not type-checked at runtime |\n| `allowed_commands` | Yes | Unique command names matching `^[a-zA-Z][a-zA-Z0-9_-]*$` |\n| `rules` | Yes | Array of rule objects |\n| `tests` | No | Array of fixtures |\n\n### Rule Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `name` | Yes | Unique within the rulebook (case-insensitive); same pattern as rulebook `name` |\n| `command` | Yes | Must be listed in `allowed_commands`; basename only, not path |\n| `subcommand` | No | Same pattern as `command`; omit to match any subcommand |\n| `intent` | No | One of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain` |\n| `block_args` | Yes | Non-empty array of non-empty strings |\n| `reason` | Yes | Non-empty string, max 256 chars |\n\n### Test Fixture Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `command` | Yes | Non-empty shell command string |\n| `expect` | Yes | `\"blocked\"` or `\"allowed\"` |\n| `rule` | Required for blocked fixtures | Rule name expected to block the command |\n\nFixtures are optional documentation of intended behavior. Fixtures are shape-validated only; CC Safety Net does not execute them.\n\n## Matching Behavior\n\n- **Command**: Normalized to lowercase basename with any trailing `.exe` removed (`/usr/bin/git` → `git`).\n- **Subcommand**: The first command token after recognized Git and Docker global options and their values; `--` ends option parsing. An unrecognized option without `=` may consume the following token as its value.\n- **Arguments**: Each `block_args` value is compared literally against every command token, including expanded short options. The command is blocked if **any** item matches.\n- **Short options**: Expanded (`-Ap` matches `-A`).\n- **Long options**: Exact match (`--all-files` does not match `--all`).\n- **Execution order**: Built-in rules first, then custom rulebooks. Custom rules only add restrictions.\n- **Transparent wrappers**: A configured wrapper such as `rtk` lets `rtk git commit` be analyzed as `git commit` only when `git` is protected by built-in analyzers or active custom rules. `rtk -- git commit` is also supported.\n\n## Workflow\n\n1. Run `cc-safety-net rule init` or create `rule.json` manually.\n2. Optionally run `cc-safety-net rule init --example` to create an inactive example rulebook.\n3. Use `cc-safety-net rule wrapper add rtk` for trusted transparent wrappers.\n4. Run `cc-safety-net rule add <source>` after creating or choosing a rulebook source; it adds the source and syncs it.\n5. Run `cc-safety-net rule sync` after manual `rule.json` changes or local rulebook edits.\n6. Run `cc-safety-net rule verify` to validate config, lock/cache state, local rulebooks, and shareable GitHub-source rulebook directories in the current repository (it does not fetch remote content).\n7. Run `cc-safety-net rule list` to inspect active rulebooks and transparent wrappers.\n\nAn edited or invalid local rulebook keeps its last synced, digest-verified cached version enforced until `cc-safety-net rule sync` validates the edit. A missing lock entry or cache, a cache digest mismatch, or an invalid cached rulebook makes that source inactive; a missing lockfile or an unreadable or invalid `rule.json` makes every source in its scope inactive. Inactive sources stop applying their rules while other custom rules and all built-in protections stay active. Repair the reported condition, then run `cc-safety-net rule sync`. Run `cc-safety-net status` to see degraded sources.\n";function Rn(n,t){if(!n.ok){j8(n);return}F8(n),console.log(t),console.log("Rule config synced."),console.log(""),m8(n.entries)}function m8(n){if(n.length===0){console.log("Active rulebooks: (none)");return}console.log(`Active rulebooks (${n.length}):`);for(let t of n)console.log(`  - ${t.name} ${t.version} (${q8(t.ruleCount??0)})`),console.log(`    Source: ${It(t)}`)}function q8(n){return`${n} ${n===1?"rule":"rules"}`}function o3(n,t){J2("Active sources",n.rulebooks,(r)=>[`[${r.source}] ${r.name} ${r.version}`,`  Source: ${t[r.source].get(r.spec)??r.spec}`]),J2("Active rules",n.rules,(r)=>[`[${k8(n,r.name)}] ${r.name}`,`  Command: ${r.subcommand?`${r.command} ${r.subcommand}`:r.command}`,`  Block args: ${r.block_args.join(", ")}`,`  Reason: ${r.reason}`]),J2("Disabled rules",v3(n,"off"),(r)=>[r.key]),J2("Reason overrides",v3(n,"reason"),(r)=>[r.key,`  Reason: ${r.value.reason}`]),J2("Transparent wrappers",n.transparent_wrappers,(r)=>[r]),J2("Issues",n.errors,(r)=>[r]),J2("Warnings",n.warnings,(r)=>[r])}function J2(n,t,r){if(t.length===0){console.log(`${n}: (none)`);return}console.log(`${n} (${t.length}):`);for(let e of t){let[a,...l]=r(e);console.log(`  - ${a}`);for(let d of l)console.log(`    ${d}`)}}function k8(n,t){return n.rulebooks.find((r)=>r.rules.includes(t))?.source??"project"}function v3(n,t){return Object.entries({...n.userConfig?.overrides,...n.projectConfig?.overrides}).filter((r)=>{if(t==="off")return r[1]==="off";return r[1]!=="off"}).map(([r,e])=>({key:r,value:e}))}function j8(n){for(let t of n.errors)console.error(t)}function F8(n){if(!n.warnings||n.warnings.length===0)return;for(let t of n.warnings)console.warn(t)}import{dirname as b3,join as qt}from"node:path";var B8=".safety-net.json",J8="~/.cc-safety-net/config.json",Z8=i.object({migrated_from:i.string(),rules:i.array(i.custom())}),Q8=i.object({migrated_from:i.string()});async function w3(n){return[await f3({legacyPath:y3({cwd:n.cwd}),configPath:_(n.cwd),defaultRulebookName:"project-rules",migratedFrom:B8,cleanup:n.cleanup,syncOptions:{cwd:n.cwd}}),await f3({legacyPath:un(),configPath:E(),defaultRulebookName:"user-rules",migratedFrom:J8,cleanup:n.cleanup,syncOptions:{cwd:n.cwd,global:!0}})].every((r)=>r)?0:1}async function f3(n){let t=C(n.syncOptions),r=D(t.filesystemScope,n.legacyPath),e=g(r);if(e===null)return console.log(`No legacy config found at ${n.legacyPath}`),!0;let a=Y8(e);if(!a.ok){for(let f of a.errors)console.error(f);return!1}let l=O(t.configTarget);if(l.errors.length>0){for(let f of l.errors)console.error(f);return!1}let d=l.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},s=R8(b3(n.configPath),d.rules,n.defaultRulebookName,n.migratedFrom,t.filesystemScope),c=qt(b3(n.configPath),s,"rulebook.json"),L=D(t.filesystemScope,c),u=[$e(t.configTarget),$e(L),$e(t.lockTarget)],p=await X8(n,t.configTarget,L,s,a.config.rules,d.rules.includes(s)?d.rules:[...d.rules,s],d.overrides??{},d.transparent_wrappers??[]);if(!p.ok){W8(u);for(let f of p.errors)console.error(f);return!1}if(!n.cleanup)return console.log(`Migrated legacy config at ${n.legacyPath}. Legacy file is no longer used.`),!0;if(!H8(t.configTarget,L,s,n.migratedFrom,a.config.rules))return console.error(`Migration cleanup verification failed for ${n.legacyPath}`),!1;return sn(r),console.log(`Deleted legacy config at ${n.legacyPath}`),!0}async function X8(n,t,r,e,a,l,d,s){try{return T(t,{version:1,rules:l,overrides:d,transparent_wrappers:s}),T(r,A8(e,n.migratedFrom,a)),await A2(n.syncOptions)}catch(c){return{ok:!1,errors:[c instanceof Error?c.message:String(c)]}}}function Y8(n){try{return Mt(JSON.parse(n))}catch{return{ok:!1,errors:["Invalid JSON"]}}}function R8(n,t,r,e,a){let l=t.find((d)=>M8(D(a,qt(n,d,"rulebook.json")))===e);if(l)return l;if(g(D(a,qt(n,r,"rulebook.json")))===null)return r;for(let d=2;;d++){let s=`${r}-${d}`;if(g(D(a,qt(n,s,"rulebook.json")))===null)return s}}function A8(n,t,r){return{rulebook_version:1,name:n,version:"1.0.0",description:"Migrated CC Safety Net rules.",author:"project",migrated_from:t,allowed_commands:[...new Set(r.map((e)=>e.command))],rules:r,tests:r.map((e)=>({command:[e.command,e.subcommand,e.block_args[0]].filter(Boolean).join(" "),expect:"blocked",rule:e.name}))}}function H8(n,t,r,e,a){if(!O(n).config?.rules.includes(r))return!1;try{let d=g(t);if(d===null)return!1;let s=Z8.parse(JSON.parse(d));return s.migrated_from===e&&JSON.stringify(s.rules)===JSON.stringify(a)}catch{return!1}}function $e(n){return{target:n,content:g(n)}}function W8(n){for(let t of n){if(t.content===null){sn(t.target);continue}x2(t.target,t.content)}}function M8(n){let t=g(n);if(t===null)return null;try{let r=Q8.safeParse(JSON.parse(t));return r.success?r.data.migrated_from:null}catch{return null}}import{mkdir as K8,readFile as z8,writeFile as V8}from"node:fs/promises";import{dirname as G8,join as S8}from"node:path";var U8=86400000,C8=604800000,O8=i.object({lastCheck:i.number().optional(),latestVersion:i.string().optional(),notifiedVersion:i.string().optional(),notifiedAt:i.number().optional()});async function x3(n=Date.now()){if(process.env.CC_SAFETY_NET_NO_UPDATE_CHECK)return null;let t=tr();if(!t)return null;let r=S8(t,".cc-safety-net","update-check.json"),e=await T8(r,n);if(!e.lastCheck||n-e.lastCheck>U8){let d=await T2();if(e.lastCheck=n,d.latestVersion)e.latestVersion=d.latestVersion;if(!await h3(r,e))return null;if(d.error)return null}let a=e.latestVersion,l=j();if(!a||!hr(a,l))return null;if(e.notifiedVersion===a&&e.notifiedAt!==void 0&&n-e.notifiedAt<C8)return null;if(e.notifiedVersion=a,e.notifiedAt=n,!await h3(r,e))return null;return`UPDATE_AVAILABLE: cc-safety-net v${a} is available (running v${l}). Ask the user once whether to run \`npx -y cc-safety-net@latest update\`; continue the current task either way and do not raise this again.`}async function T8(n,t){let r=await z8(n,"utf8").then((a)=>O8.safeParse(JSON.parse(a))).catch(()=>{return});if(!r?.success)return{};let e=(a)=>a!==void 0&&Number.isFinite(a)&&a<=t?a:void 0;return{lastCheck:e(r.data.lastCheck),latestVersion:r.data.latestVersion,notifiedVersion:r.data.notifiedVersion,notifiedAt:e(r.data.notifiedAt)}}async function h3(n,t){return K8(G8(n),{recursive:!0,mode:448}).then(()=>V8(n,JSON.stringify(t),{mode:384})).then(()=>!0).catch(()=>!1)}import{dirname as _8,join as E8,resolve as ge}from"node:path";var g3="CC Safety Net Config",P8="═".repeat(g3.length),I8="https://raw.githubusercontent.com/kenryu42/cc-safety-net/main/assets/cc-safety-net.schema.json",N8=new Set(["rule.json","rule.lock","cache"]),n4=i.object({$schema:i.unknown().optional()}).loose();function D3(n={}){try{return t4(n)}catch(t){if(t instanceof A)return console.error(t.message),1;throw t}}function t4(n){let t=n.cwd??process.cwd(),r=n.userConfigPath??E(),e=n.projectConfigPath??_(t),a=n.legacyUserConfigPath??un(),l=n.legacyProjectConfigPath??_e(t),d=ge(t,Pt),s=_8(r),c=P({cwd:t,userConfigPath:r,projectConfigPath:e}),L=P({cwd:t}),u=D(c.userScope,r),p=D(c.projectScope,e),f=n.legacyUserConfigPath?ln(n.legacyUserConfigPath,"user policy"):D(L.userScope,a),v=n.legacyProjectConfigPath?ln(n.legacyProjectConfigPath,"project policy"):D(L.projectScope,l),o=!1,b=!1,h=[],$=[],x=r4(D(L.projectScope,d));if(a4(),g(u)!==null){let w=a2(u);if(w.errors.push(...l2(r,H2({userConfigDir:s}),{userConfigDir:s},c.userScope)),h.push({scope:"User",path:r,result:w,schema:"rules",sourceDisplayMap:$2(r,c.userScope),target:u}),w.errors.length>0)o=!0}if(g(f)!==null)if(b=!0,g(u)!==null)$.push(kt("user","cleanup"));else{let w=Kt(f);if(h.push({scope:"User",path:a,result:w,schema:"legacy",sourceDisplayMap:new Map,inactive:!0,target:f}),$.push(kt("user",w.errors.length>0?"fix-or-delete":"migrate")),w.errors.length>0)o=!0}if(g(p)!==null){let w=a2(p);if(w.errors.push(...l2(e,W2(e),{userConfigDir:s},c.projectScope)),h.push({scope:"Project",path:ge(e),result:w,schema:"rules",sourceDisplayMap:$2(e,c.projectScope),target:p}),w.errors.length>0)o=!0;if(g(v)!==null)b=!0,$.push(kt("project","cleanup"))}else if(g(v)!==null){b=!0,o=!0;let w=Kt(v);h.push({scope:"Project",path:ge(l),result:w,schema:"legacy",sourceDisplayMap:new Map,inactive:!0,target:v}),$.push(kt("project",w.errors.length>0?"fix-or-delete":"migrate"))}if(x?.result.errors.length)o=!0;if(h.length===0&&!x)return console.log(`
No config files found. Using built-in rules only.`),0;for(let w of h)if(w.inactive)d4(w.scope,w.path,w.result,w.sourceDisplayMap);else if(w.result.errors.length>0)s4(w.scope,w.path,w.result.errors);else{if(w.schema==="rules"&&L4(w.target))console.log(`
Added $schema to ${w.scope.toLowerCase()} config.`);l4(w.scope,w.path,w.result,w.schema,w.sourceDisplayMap)}for(let w of $)console.error(`
${y.red(w)}`);if(x)if(x.result.errors.length>0)c4(x.path,x.result.errors);else i4(x.path,x.result);if(o)return console.error(`
Config validation failed.`),1;return console.log(b?`
Configs valid with warnings.`:`
All configs valid.`),0}function kt(n,t){let r=`legacy ${n} config`;if(t==="cleanup")return`Warning: Legacy ${n} config is no longer needed. Run \`npx -y cc-safety-net rule migrate --cleanup\` to clean it up safely.`;if(t==="migrate")return`Warning: Legacy ${n} config is ignored by CC Safety Net. Run \`npx -y cc-safety-net rule migrate\`.`;return`Warning: Legacy ${n} config is no longer supported. Fix or delete the ${r}, then run \`npx -y cc-safety-net rule migrate\`.`}function r4(n){if(R2(n)===null)return null;let t=e4(n);if(t.ruleNames.size===0&&t.errors.length===0)return null;return{path:n.path,result:t}}function e4(n){let t=[],r=new Set,e=(R2(n)??[]).filter((a)=>!N8.has(a.name)).sort((a,l)=>a.name.localeCompare(l.name));if(e.length===0)return{errors:t,ruleNames:r};for(let a of e){if(!cn.test(a.name)){t.push(`rulebook directory names must match ${cn}: ${a.name}`);continue}if(a.kind!=="directory"){t.push(`${a.name} must be a rulebook directory`);continue}let l=D(n.scope,E8(n.path,a.name,"rulebook.json")),d=g(l);if(d===null){t.push(`${a.name}/rulebook.json is required`);continue}try{let s;try{s=JSON.parse(d)}catch{t.push(`${a.name}/rulebook.json: invalid JSON`);continue}let c=$3(s);if(c.name!==a.name){t.push(`rulebook name "${c.name}" must match folder "${a.name}"`);continue}r.add(a.name)}catch(s){t.push(s instanceof Error?`${a.name}/rulebook.json: ${s.message}`:`${a.name}/rulebook.json: ${String(s)}`)}}return{errors:t,ruleNames:r}}function a4(){console.log(g3),console.log(P8)}function l4(n,t,r,e,a){if(console.log(`
✓ ${n} config: ${t}`),console.log(`  Schema: ${e==="rules"?"rulebook sources":"legacy inline rules"}`),r.ruleNames.size>0){console.log(`  ${e==="rules"?"Sources":"Rules"}:`);let l=1;for(let d of r.ruleNames)console.log(`    ${l}. ${a.get(d)??d}`),l++}else console.log(`  ${e==="rules"?"Sources":"Rules"}: (none)`)}function d4(n,t,r,e){if(console.error(`
✗ Legacy ${n.toLowerCase()} config: ${t}`),console.error("  Schema: legacy inline rules"),console.error("  Status: ignored by CC Safety Net"),r.errors.length>0){console.error("  Errors:");let a=1;for(let l of r.errors)for(let d of l.split("; "))console.error(`    ${a}. ${d}`),a++;return}if(r.ruleNames.size>0){console.error("  Rules:");let a=1;for(let l of r.ruleNames)console.error(`    ${a}. ${e.get(l)??l}`),a++;return}console.error("  Rules: (none)")}function s4(n,t,r){m3(`${n} config`,t,r)}function i4(n,t){console.log(`
✓ GitHub source rules: ${n}`),console.log("  Rulebooks:");let r=1;for(let e of t.ruleNames)console.log(`    ${r}. ${e}`),r++}function c4(n,t){m3("GitHub source rules",n,t)}function m3(n,t,r){console.error(`
✗ ${n}: ${t}`),console.error("  Errors:");let e=1;for(let a of r)for(let l of a.split("; "))console.error(`    ${e}. ${l}`),e++}function L4(n){try{let t=g(n);if(t===null)return!1;let r=n4.parse(JSON.parse(t));if(r.$schema)return!1;return x2(n,JSON.stringify({$schema:I8,...r},null,2)),!0}catch(t){if(t instanceof A)throw t;return!1}}var q3=new Set(["init","add","remove","update","sync","list","wrapper","migrate","doc","verify"]),p4=new Set(["add","remove","list"]);async function j3(n){try{return await v4(n)}catch(t){if(t instanceof A)return console.error(t.message),1;throw t}}async function v4(n){let t=b4(n),r=t.help?o4(t.positionals):null;if(r)return Lt(r),0;if(t.errors.length>0){for(let d of t.errors)console.error(d);return 1}let e=t.positionals[0];if(!e)return Lt(C2,console.error),1;let a=t.positionals[1],l={global:t.global,check:t.check};if(e==="init"){let d=C(l),s=d.configDir;w4(d.configTarget),k3(D(d.filesystemScope,zn({...l,cacheConfigDir:s})));let c=u4(s,"example-rules","rulebook.json"),L=D(d.filesystemScope,c);if(t.example&&g(L)===null)nr(L,"example-rules");let u=await A2(l);return Rn(u,"Rule config initialized."),u.ok?0:1}if(e==="add"){if(!a)return console.error("rule add requires a source"),1;let d=await Tt(a,l);return Rn(d,`Added rulebook source: ${a}`),d.ok?0:1}if(e==="remove"){if(!a)return console.error("rule remove requires a source"),1;let d=await Et(a,{...l,deleteSource:t.deleteSource});return Rn(d,`Removed rulebook source: ${a}`),d.ok?0:1}if(e==="update"||e==="sync"){let d=await A2({...l,only:e==="update"?a:void 0});return Rn(d,t.check?"Rule config checked.":"Rule config synced."),d.ok?0:1}if(e==="list"){let d=o2(),s=P({});return o3(d,{user:$2(d.userConfigPath,s.userScope),project:$2(d.projectConfigPath,s.projectScope)}),d.errors.length>0?1:0}if(e==="wrapper")return h4(t);if(e==="migrate")return w3({cleanup:t.cleanup,cwd:process.cwd()});if(e==="doc"){console.log(p3);let d=await x3();if(d)console.error(d);return 0}if(e==="verify")return D3();return 1}function o4(n){if(n.length===0)return C2;let t=C2.subcommands.filter((e)=>e.usage.split(" ")[0]===n[0]);if(t.length===0)return null;if(n.length===1&&t.length>1)return{name:`rule ${n[0]}`,description:`Subcommands of rule ${n[0]}`,usage:`rule ${n[0]} <subcommand>`,subcommands:t,options:[]};let r=n.length===1?t[0]:t.find((e)=>e.usage.split(" ")[1]===n[1]);if(!r)return null;return{name:`rule ${n[0]}`,description:r.description,usage:`rule ${r.usage}`,options:[]}}function b4(n){let t=F({label:"rule",booleans:{global:["-g","--global"],check:["--check"],cleanup:["--cleanup"],deleteSource:["--delete-source"],example:["--example"]},positionals:"list"},n),r={...t.flags,help:t.help,positionals:t.positionals,errors:t.errors};return f4(r),r}function f4(n){let[t]=n.positionals;if(t&&!q3.has(t))n.errors.push(`Unknown rule subcommand: ${t}`);if(n.deleteSource&&t!=="remove")if(t&&q3.has(t))n.errors.push(`Unknown option for rule ${t}: --delete-source`);else n.errors.push("--delete-source is only valid with 'rule remove'");if(n.cleanup&&t!=="migrate")n.errors.push(jt(t,"--cleanup"));if(n.example&&t!=="init")n.errors.push(jt(t,"--example"));if(t==="migrate"){if(n.global)n.errors.push(jt(t,"--global"));if(n.check)n.errors.push(jt(t,"--check"));if(n.positionals.length>1)n.errors.push(`Unexpected rule migrate argument: ${n.positionals[1]}`)}else if(t==="wrapper")y4(n);else if(n.positionals.length>2)n.errors.push(`Unexpected rule argument: ${n.positionals[2]}`);if(t==="list"&&n.global)n.errors.push("Unknown option for rule list: --global")}function jt(n,t){return n?`Unknown option for rule ${n}: ${t}`:`Unknown option for rule: ${t}`}function y4(n){let t=n.positionals[1],r=n.positionals[2];if(!t){n.errors.push("rule wrapper requires add, remove, or list");return}if(!p4.has(t)){n.errors.push(`Unknown rule wrapper action: ${t}`);return}if(t==="list"){if(r)n.errors.push(`Unexpected rule wrapper argument: ${r}`);return}if(!r){n.errors.push(`rule wrapper ${t} requires a command`);return}if(n.positionals.length>3)n.errors.push(`Unexpected rule wrapper argument: ${n.positionals[3]}`)}function w4(n){if(g(n)===null){Nt(n);return}let t=O(n);if(!t.config)return;T(n,{version:1,rules:t.config.rules,overrides:t.config.overrides??{},transparent_wrappers:t.config.transparent_wrappers??[]})}async function h4(n){let t=n.positionals[1],r=n.positionals[2],e=C({global:n.global}).configTarget;if(t==="list"){let s=O(e);if(s.errors.length>0){for(let c of s.errors)console.error(c);return 1}return x4(s.config?.transparent_wrappers??[]),0}if(!r||!rr.test(r))return console.error("transparent wrapper must match command pattern"),1;if(er(r))return console.error(`reserved command "${r}" cannot be a wrapper`),1;let a=O(e);if(a.errors.length>0){for(let s of a.errors)console.error(s);return 1}let l=a.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},d=t==="add"?[...new Set([...l.transparent_wrappers??[],r])]:(l.transparent_wrappers??[]).filter((s)=>s!==r);return T(e,{version:1,rules:l.rules,overrides:l.overrides??{},transparent_wrappers:d}),console.log(t==="add"?`Added transparent wrapper: ${r}`:`Removed transparent wrapper: ${r}`),0}function x4(n){if(n.length===0){console.log("Transparent wrappers: (none)");return}console.log(`Transparent wrappers (${n.length}):`);for(let t of n)console.log(`  - ${t}`)}import{homedir as F3}from"node:os";import{existsSync as $4,readFileSync as g4}from"node:fs";import{homedir as D4}from"node:os";import{join as m4}from"node:path";async function q4(n){if(n.isTTY)return null;return(await Lr(n).catch(()=>null))?.trim()||null}function k4(){if(process.env.CLAUDE_SETTINGS_PATH)return process.env.CLAUDE_SETTINGS_PATH;return m4(D4(),".claude","settings.json")}var j4=i.object({enabledPlugins:i.record(i.string(),i.boolean()).optional()});function De(){let n=k4();if(!$4(n))return!1;try{let t=g4(n,"utf-8"),r=j4.parse(JSON.parse(t));if(!r.enabledPlugins)return!1;let e="cc-safety-net@cc-marketplace";if(!(e in r.enabledPlugins))return!1;return r.enabledPlugins[e]===!0}catch(t){if(on(m.debug))console.error(`CC Safety Net debug: failed to read Claude settings: ${n}: ${t instanceof Error?t.message:String(t)}`);return!1}}async function me(n=process.stdin){let t=De(),r;if(!t)r="\uD83D\uDEE1️ CC Safety Net ❌";else{let a=M({cwd:process.cwd()}),l=a.policy,d=d2(l),s=Object.values(D2(l,d.capabilities)).some((L)=>L.changesInherited);r=`\uD83D\uDEE1️ CC Safety Net ${{standard:"✅",strict:"\uD83D\uDD12",paranoid:"\uD83D\uDC41️",custom:"\uD83D\uDD27"}[s?"custom":d.effectiveLevel]}${d.worktreeMode?"\uD83C\uDF33":""}${a.state==="degraded"?"⚠️":""}`}let e=await q4(n);if(e&&!e.startsWith("{"))console.log(`${e} | ${r}`);else console.log(r)}function B3(){let n=M({cwd:process.cwd()}),t=n.policy,r=d2(t),e=!!process.env.NO_COLOR||!process.stdout.isTTY,a=Math.min(process.stdout.columns||80,100),l=e?"ok":"✔",d=e?"OFF":"✘",s=(v,o)=>{let b=`  ${v.padEnd(13)}${o}`;return(b.length>a?`${b.slice(0,a-1)}…`:b).replaceAll(d,y.red(d))},c=Object.values(D2(t,r.capabilities)).some((v)=>v.changesInherited),L=bn(),u={ready:y.green,degraded:y.yellow}[n.state],p=[...De()?[]:["plugin cc-safety-net@cc-marketplace is disabled in Claude Code; nothing is enforced in Claude Code until it is re-enabled. Other integrations are not affected."],...n.diagnostics],f=e?"-":"·";console.log([`${e?"":"\uD83D\uDEE1️  "}CC Safety Net — ${u(n.state)}`,"",s("Protection",`destructive ${t.destructiveCommandProtectionEnabled?l:d}   secrets ${t.secretProtection.enabled?l:d}`),s("Level",c?`${r.effectiveLevel} (customised)`:r.effectiveLevel),s("Rules",t.rules.length===0?"none active":`${t.rules.length} active`),s("Policy",L.startsWith(F3())?`~${L.slice(F3().length)}`:L),...r.worktreeMode?[s("Worktree","relaxations active")]:[],"",...p.length===0?["  Everything configured is active."]:["  Not active",...p.flatMap((v)=>ct(v,"      ",a-6).map((o,b)=>b===0?`    ${f} ${o}`:o)),"","  Full report: cc-safety-net doctor"]].join(`
`))}import{spawn as T3}from"node:child_process";import{randomBytes as M4}from"node:crypto";import{createServer as K4}from"node:http";import{homedir as F4}from"node:os";var Ft=500,B4=i.object({ts:i.string(),command:i.string()});function J4(n){let t=n.filter((a)=>a.decision!=="allow"),r=n.filter((a)=>a.decision==="allow"),e=Math.min(t.length,Math.max(Ft-r.length,Math.ceil(Ft/2)));return[...t.slice(0,e),...r.slice(0,Ft-e)]}function J3(n,t=s2()){if(t)g2(t);let r=(b)=>new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime(),e=r(new Date),a=new Date(e);a.setDate(a.getDate()-(n-1));let l=a.getTime(),d=[],s={count:0};for(let b of t?v2(t,s):[])for(let h of an(b,s)){if(!B4.safeParse(h).success)continue;let $=new Date(h.ts).getTime();if(!Number.isFinite($))continue;if($>=l)d.push(h)}d.sort((b,h)=>new Date(h.ts).getTime()-new Date(b.ts).getTime());let c=Array.from({length:n},()=>0),L=Array.from({length:n},()=>0),u={},p={},f={},v=0,o=0;for(let b of d){let h=b.agent||"unknown";u[h]=(u[h]??0)+1;let $=Math.round((e-r(new Date(b.ts)))/86400000),x=n-1-$,w=$>=0&&$<n;if(w)L[x]=(L[x]??0)+1;if(b.decision!=="allow"){if(v++,b.ruleId)p[b.ruleId]=(p[b.ruleId]??0)+1;let Z=Q2(b.segment||b.command);if(Z)f[Z]=(f[Z]??0)+1;if(b.failureStage)o++;if(w)c[x]=(c[x]??0)+1}}return{days:n,logsDir:t,homeDir:F4(),totalInWindow:d.length,truncated:d.length>Ft,unreadable:s.count,counts:{blocked:v,allowed:d.length-v,agents:u,blockedByDay:c,analyzedByDay:L,rules:p,commands:f,errors:o},entries:J4(d).sort((b,h)=>new Date(h.ts).getTime()-new Date(b.ts).getTime())}}import{spawn as Z4}from"node:child_process";import{existsSync as Z3,statSync as Q4}from"node:fs";import{delimiter as X4,join as Y4}from"node:path";var R4=120000,Bt="Choose the project folder",A4=`try
  return POSIX path of (choose folder with prompt "${Bt}")
on error number -128
  return ""
end try`,H4=`Add-Type -AssemblyName System.Windows.Forms
$dialog = New-Object System.Windows.Forms.FolderBrowserDialog
$dialog.Description = '${Bt}'
if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.Write($dialog.SelectedPath) }`,Q3=[{binary:"zenity",args:["--file-selection","--directory",`--title=${Bt}`]},{binary:"kdialog",args:["--getexistingdirectory",".","--title",Bt]}],X3=(n,t)=>(t.PATH??"").split(X4).some((r)=>r.length>0&&Z3(Y4(r,n)));function Y3(n,t){if(n==="darwin"||n==="win32")return!0;if(n!=="linux")return!1;if(!t.DISPLAY&&!t.WAYLAND_DISPLAY)return!1;return Q3.some((r)=>X3(r.binary,t))}function W4(n,t){if(n==="darwin")return{cmd:"osascript",args:["-e",A4]};if(n==="win32")return{cmd:"powershell.exe",args:["-NoProfile","-STA","-Command",H4]};let r=Q3.find((e)=>X3(e.binary,t));return r?{cmd:r.binary,args:r.args}:null}function R3(n=process.platform,t=process.env){let r=W4(n,t);if(!r)return Promise.resolve({error:"No folder dialog is available on this system"});return new Promise((e)=>{let a=Z4(r.cmd,r.args,{env:t,stdio:["ignore","pipe","pipe"]}),l="",d=!1,s=(L)=>{if(d)return;d=!0,clearTimeout(c),e(L)},c=setTimeout(()=>{a.kill(),s({error:"The folder dialog timed out"})},R4);a.stdout.on("data",(L)=>{l+=L.toString()}),a.on("error",()=>s({error:`Could not open the folder dialog (${r.cmd})`})),a.on("close",()=>{let L=l.trim().replace(/\/+$/,"");if(!L)return s({cancelled:!0});if(!Z3(L)||!Q4(L).isDirectory())return s({error:"That selection is not a folder on disk"});s({path:L})})})}var A3=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CC Safety Net</title>
  <link rel="icon" href="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221254%22%20height%3D%221254%22%20viewBox%3D%2254%2023%201140%201140%22%20role%3D%22img%22%20aria-label%3D%22Safety%20net%20logo%20mesh%20variant%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spot-0%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f8fafc%22%20stop-opacity%3D%220.68%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2256%25%22%20stop-color%3D%22%23f8fafc%22%20stop-opacity%3D%220.29%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f8fafc%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FradialGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spot-1%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237dd3fc%22%20stop-opacity%3D%220.58%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2256%25%22%20stop-color%3D%22%237dd3fc%22%20stop-opacity%3D%220.24%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237dd3fc%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FradialGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spot-2%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2364748b%22%20stop-opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2256%25%22%20stop-color%3D%22%2364748b%22%20stop-opacity%3D%220.29%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2364748b%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FradialGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%22spot-3%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f172a%22%20stop-opacity%3D%220.9%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2256%25%22%20stop-color%3D%22%230f172a%22%20stop-opacity%3D%220.38%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230f172a%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FradialGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22edge%22%20x1%3D%2214%25%22%20y1%3D%228%25%22%20x2%3D%2288%25%22%20y2%3D%2294%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23bae6fd%22%20stop-opacity%3D%220.24%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e293b%22%20stop-opacity%3D%220.86%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cmask%20id%3D%22net-mask%22%20maskUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221254%22%20height%3D%221254%22%20fill%3D%22black%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-46.32%22%20y%3D%22-47.38%22%20width%3D%2292.63%22%20height%3D%2294.75%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.75%20127.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-66.82%22%20y%3D%22-41.01%22%20width%3D%22133.64%22%20height%3D%2282.02%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(713.75%20230.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-134.00%22%20width%3D%2279.90%22%20height%3D%22267.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(588.00%20275.50)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-65.05%22%20width%3D%2279.20%22%20height%3D%22130.11%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(444.50%20320.50)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.29%22%20y%3D%22-40.31%22%20width%3D%22266.58%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(759.75%20369.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.07%22%20y%3D%22-39.24%22%20width%3D%22154.15%22%20height%3D%2278.49%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(533.25%20407.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.10%22%20y%3D%22-39.74%22%20width%3D%22134.21%22%20height%3D%2279.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(895.22%20413.86)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.84%22%20y%3D%22-134.04%22%20width%3D%2279.68%22%20height%3D%22268.08%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(401.36%20461.24)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-74.60%22%20width%3D%2279.20%22%20height%3D%22149.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(812.25%20500.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-77.43%22%20width%3D%2279.20%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(625.75%20500.75)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-67.18%22%20width%3D%2278.49%22%20height%3D%22134.35%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(263.25%20505.75)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.28%22%20y%3D%22-40.02%22%20width%3D%22266.56%22%20height%3D%2280.04%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(941.36%20551.76)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-54.80%22%20y%3D%22-53.74%22%20width%3D%22109.60%22%20height%3D%22107.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(1096.75%20593.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.43%22%20y%3D%22-40.31%22%20width%3D%22154.86%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(719.75%20594.25)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-51.97%22%20y%3D%22-54.45%22%20width%3D%22103.94%22%20height%3D%22108.89%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(155.25%20594.75)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-76.37%22%20y%3D%22-40.31%22%20width%3D%22152.74%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(534.50%20595.50)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-135.12%22%20y%3D%22-40.16%22%20width%3D%22270.23%22%20height%3D%2280.32%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(307.96%20634.94)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-70.64%22%20width%3D%2280.05%22%20height%3D%22141.27%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(989.66%20680.72)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-38.90%22%20y%3D%22-77.27%22%20width%3D%2277.80%22%20height%3D%22154.54%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(442.49%20687.00)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-77.43%22%20width%3D%2279.90%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.50%20689.00)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.40%22%20y%3D%22-134.46%22%20width%3D%2278.80%22%20height%3D%22268.92%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(853.69%20727.31)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-69.65%22%20y%3D%22-38.18%22%20width%3D%22139.30%22%20height%3D%2276.37%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(353.25%20771.75)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-78.44%22%20y%3D%22-39.44%22%20width%3D%22156.88%22%20height%3D%2278.88%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(720.61%20782.02)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.77%22%20y%3D%22-39.86%22%20width%3D%22267.53%22%20height%3D%2279.71%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(493.85%20820.81)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-66.82%22%20width%3D%2278.49%22%20height%3D%22133.64%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(806.50%20868.00)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-133.39%22%20width%3D%2280.05%22%20height%3D%22266.79%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(666.35%20914.10)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.18%22%20y%3D%22-39.60%22%20width%3D%22134.35%22%20height%3D%2279.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(540.00%20960.00)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-49.85%22%20y%3D%22-49.50%22%20width%3D%2299.70%22%20height%3D%2298.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(627.25%201064.75)%20rotate(-45.00)%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2Fmask%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Cg%20mask%3D%22url(%23net-mask)%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221254%22%20height%3D%221254%22%20fill%3D%22%2307090d%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22360%22%20cy%3D%22240%22%20r%3D%22430%22%20fill%3D%22url(%23spot-0)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22820%22%20cy%3D%22300%22%20r%3D%22430%22%20fill%3D%22url(%23spot-1)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22760%22%20cy%3D%22830%22%20r%3D%22500%22%20fill%3D%22url(%23spot-2)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22300%22%20cy%3D%22780%22%20r%3D%22390%22%20fill%3D%22url(%23spot-3)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221254%22%20height%3D%221254%22%20fill%3D%22url(%23edge)%22%20opacity%3D%220.18%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20stroke%3D%22url(%23edge)%22%20stroke-width%3D%2214%22%20stroke-linejoin%3D%22round%22%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-46.32%22%20y%3D%22-47.38%22%20width%3D%2292.63%22%20height%3D%2294.75%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.75%20127.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-66.82%22%20y%3D%22-41.01%22%20width%3D%22133.64%22%20height%3D%2282.02%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(713.75%20230.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-134.00%22%20width%3D%2279.90%22%20height%3D%22267.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(588.00%20275.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-65.05%22%20width%3D%2279.20%22%20height%3D%22130.11%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(444.50%20320.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.29%22%20y%3D%22-40.31%22%20width%3D%22266.58%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(759.75%20369.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.07%22%20y%3D%22-39.24%22%20width%3D%22154.15%22%20height%3D%2278.49%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(533.25%20407.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.10%22%20y%3D%22-39.74%22%20width%3D%22134.21%22%20height%3D%2279.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(895.22%20413.86)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.84%22%20y%3D%22-134.04%22%20width%3D%2279.68%22%20height%3D%22268.08%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(401.36%20461.24)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-74.60%22%20width%3D%2279.20%22%20height%3D%22149.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(812.25%20500.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-77.43%22%20width%3D%2279.20%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(625.75%20500.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-67.18%22%20width%3D%2278.49%22%20height%3D%22134.35%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(263.25%20505.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.28%22%20y%3D%22-40.02%22%20width%3D%22266.56%22%20height%3D%2280.04%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(941.36%20551.76)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-54.80%22%20y%3D%22-53.74%22%20width%3D%22109.60%22%20height%3D%22107.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(1096.75%20593.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.43%22%20y%3D%22-40.31%22%20width%3D%22154.86%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(719.75%20594.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-51.97%22%20y%3D%22-54.45%22%20width%3D%22103.94%22%20height%3D%22108.89%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(155.25%20594.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-76.37%22%20y%3D%22-40.31%22%20width%3D%22152.74%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(534.50%20595.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-135.12%22%20y%3D%22-40.16%22%20width%3D%22270.23%22%20height%3D%2280.32%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(307.96%20634.94)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-70.64%22%20width%3D%2280.05%22%20height%3D%22141.27%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(989.66%20680.72)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-38.90%22%20y%3D%22-77.27%22%20width%3D%2277.80%22%20height%3D%22154.54%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(442.49%20687.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-77.43%22%20width%3D%2279.90%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.50%20689.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.40%22%20y%3D%22-134.46%22%20width%3D%2278.80%22%20height%3D%22268.92%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(853.69%20727.31)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-69.65%22%20y%3D%22-38.18%22%20width%3D%22139.30%22%20height%3D%2276.37%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(353.25%20771.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-78.44%22%20y%3D%22-39.44%22%20width%3D%22156.88%22%20height%3D%2278.88%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(720.61%20782.02)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.77%22%20y%3D%22-39.86%22%20width%3D%22267.53%22%20height%3D%2279.71%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(493.85%20820.81)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-66.82%22%20width%3D%2278.49%22%20height%3D%22133.64%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(806.50%20868.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-133.39%22%20width%3D%2280.05%22%20height%3D%22266.79%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(666.35%20914.10)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.18%22%20y%3D%22-39.60%22%20width%3D%22134.35%22%20height%3D%2279.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(540.00%20960.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-49.85%22%20y%3D%22-49.50%22%20width%3D%2299.70%22%20height%3D%2298.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(627.25%201064.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-opacity%3D%220.2%22%20stroke-width%3D%225%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(-10%20-14)%22%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-46.32%22%20y%3D%22-47.38%22%20width%3D%2292.63%22%20height%3D%2294.75%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.75%20127.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-66.82%22%20y%3D%22-41.01%22%20width%3D%22133.64%22%20height%3D%2282.02%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(713.75%20230.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-134.00%22%20width%3D%2279.90%22%20height%3D%22267.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(588.00%20275.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-65.05%22%20width%3D%2279.20%22%20height%3D%22130.11%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(444.50%20320.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.29%22%20y%3D%22-40.31%22%20width%3D%22266.58%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(759.75%20369.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.07%22%20y%3D%22-39.24%22%20width%3D%22154.15%22%20height%3D%2278.49%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(533.25%20407.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.10%22%20y%3D%22-39.74%22%20width%3D%22134.21%22%20height%3D%2279.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(895.22%20413.86)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.84%22%20y%3D%22-134.04%22%20width%3D%2279.68%22%20height%3D%22268.08%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(401.36%20461.24)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-74.60%22%20width%3D%2279.20%22%20height%3D%22149.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(812.25%20500.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.60%22%20y%3D%22-77.43%22%20width%3D%2279.20%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(625.75%20500.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-67.18%22%20width%3D%2278.49%22%20height%3D%22134.35%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(263.25%20505.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.28%22%20y%3D%22-40.02%22%20width%3D%22266.56%22%20height%3D%2280.04%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(941.36%20551.76)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-54.80%22%20y%3D%22-53.74%22%20width%3D%22109.60%22%20height%3D%22107.48%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(1096.75%20593.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-77.43%22%20y%3D%22-40.31%22%20width%3D%22154.86%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(719.75%20594.25)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-51.97%22%20y%3D%22-54.45%22%20width%3D%22103.94%22%20height%3D%22108.89%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(155.25%20594.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-76.37%22%20y%3D%22-40.31%22%20width%3D%22152.74%22%20height%3D%2280.61%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(534.50%20595.50)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-135.12%22%20y%3D%22-40.16%22%20width%3D%22270.23%22%20height%3D%2280.32%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(307.96%20634.94)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-70.64%22%20width%3D%2280.05%22%20height%3D%22141.27%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(989.66%20680.72)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-38.90%22%20y%3D%22-77.27%22%20width%3D%2277.80%22%20height%3D%22154.54%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(442.49%20687.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.95%22%20y%3D%22-77.43%22%20width%3D%2279.90%22%20height%3D%22154.86%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(628.50%20689.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.40%22%20y%3D%22-134.46%22%20width%3D%2278.80%22%20height%3D%22268.92%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(853.69%20727.31)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-69.65%22%20y%3D%22-38.18%22%20width%3D%22139.30%22%20height%3D%2276.37%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(353.25%20771.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-78.44%22%20y%3D%22-39.44%22%20width%3D%22156.88%22%20height%3D%2278.88%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(720.61%20782.02)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-133.77%22%20y%3D%22-39.86%22%20width%3D%22267.53%22%20height%3D%2279.71%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(493.85%20820.81)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-39.24%22%20y%3D%22-66.82%22%20width%3D%2278.49%22%20height%3D%22133.64%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(806.50%20868.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-40.02%22%20y%3D%22-133.39%22%20width%3D%2280.05%22%20height%3D%22266.79%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(666.35%20914.10)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-67.18%22%20y%3D%22-39.60%22%20width%3D%22134.35%22%20height%3D%2279.20%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(540.00%20960.00)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%22-49.85%22%20y%3D%22-49.50%22%20width%3D%2299.70%22%20height%3D%2298.99%22%20rx%3D%2212.00%22%20ry%3D%2212.00%22%20transform%3D%22translate(627.25%201064.75)%20rotate(-45.00)%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A">
  <script>
    (() => {
      const stored = localStorage.getItem('cc-safety-net-theme');
      if (stored === 'light' || stored === 'dark') document.documentElement.style.colorScheme = stored;
    })();
  </script>
  <style>
/* cc-safety-net-gui-custom-css */
:root {
  color-scheme: light dark;

  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --bg: light-dark(#f3f4f6, #0c0e11);
  --surface: light-dark(#ffffff, #16191d);
  --surface-2: light-dark(#f6f7f9, #1c2025);
  --btn-hover-fill: light-dark(#e9ebef, #282c33);
  --field-bg: light-dark(#ffffff, #101317);

  --ink: light-dark(#171a1f, #e7eaed);
  --muted: light-dark(#5b626c, #99a1ac);
  --meta: light-dark(#6b7280, #838b95);

  --border: light-dark(#e3e6ea, #292d33);
  --border-strong: light-dark(#cfd4da, #363b42);

  /* Both track tones clear 3:1 against --surface so an off switch, and the knob
     inside it, stay visible without relying on the accent. */
  --switch-track: light-dark(#8b929c, #626973);
  --switch-track-hover: #767d87;
  --switch-knob: #ffffff;

  /* Neutral, not accent-tinted: the ring is a position indicator, not a state.
     Solid rather than a translucent mix so its contrast does not depend on
     whichever surface the focused control happens to sit on. */
  --focus-ring: var(--ink);

  --accent: light-dark(#166534, #3fb950);
  --safe: #14532d;
  --safe-hover: #0f3d20;
  --danger: #7f1d1d;
  --danger-hover: #641414;

  --star: light-dark(#b7791f, #f2c94c);

  --ok-fg: light-dark(#15803d, #4ade80);
  --ok-bg: light-dark(#edfaf1, #10251a);
  --ok-border: light-dark(#b7e4c7, #1f5133);

  --err-fg: light-dark(#b42318, #ff8078);
  --err-bg: light-dark(#fef2f1, #2b1512);
  --err-border: light-dark(#f2c9c4, #5c2620);

  --warn-fg: light-dark(#b45309, #fbbf24);
  --warn-bg: light-dark(#fefaf0, #2a2008);
  --warn-border: light-dark(#f2ddb0, #5c4a1d);

  --master: light-dark(#1d4ed8, #4c8dff);
  --master-fg: light-dark(#1e40af, #9ec3ff);
  --master-bg: light-dark(#eef4fe, #101a2b);
  --master-border: light-dark(#c5d6f6, #23446e);

  --strict-fg: light-dark(#1e40af, #9ec3ff);
  --strict-bg: light-dark(#eef4fe, #101a2b);
  --strict-border: light-dark(#c5d6f6, #23446e);
  --paranoid-fg: light-dark(#6b21a8, #d8b4fe);
  --paranoid-bg: light-dark(#faf5ff, #21152c);
  --paranoid-border: light-dark(#e4ccf4, #513064);

  --radius-sm: 6px;
  --radius: 8px;
  --radius-lg: 12px;

  --topbar-h: 58px;

  font-family: var(--font-sans);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-size: 13px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}

.app-shell {
  display: grid;
  grid-template-columns: 224px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 14px;
  background: var(--surface);
  border-right: 1px solid var(--border);
}

.brand {
  padding: 0 10px;
}

h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.brand-logo {
  display: flex;
  color: var(--ink);
}

.brand-home {
  display: flex;
  color: inherit;
}

.brand-logo svg {
  width: auto;
  height: 30px;
}

.sidenav {
  display: grid;
  gap: 2px;
}

.sidenav a {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 10px;
  border-radius: var(--radius);
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.sidenav a:hover {
  background: var(--surface-2);
  color: var(--ink);
}

/* One step above the hover fill, so the selected item stays readable while a
   sibling is hovered. */
.sidenav a[aria-current="page"] {
  background: var(--btn-hover-fill);
  color: var(--ink);
}

.sidenav svg {
  width: 15px;
  height: 15px;
  flex: none;
}

.sidebar-foot {
  margin-top: auto;
  display: grid;
  gap: 10px;
  padding: 0 10px;
}

.sidebar-links {
  display: grid;
  gap: 5px;
  font-size: 12px;
}

.sidebar-links a {
  color: var(--meta);
  text-decoration: none;
}

.sidebar-links a:hover {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.sidebar-links a:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 3px;
}

.content {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.app-foot {
  display: none;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  min-height: var(--topbar-h);
  padding: 12px 28px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.topbar-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex: 1;
  max-width: 1040px;
  margin: 0 auto;
}

.topbar-title {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.app-status {
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
  line-height: 1.25;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}

.app-status:empty {
  display: none;
}

.app-status.ok {
  color: var(--ok-fg);
  border-color: var(--ok-border);
  background: var(--ok-bg);
}

.app-status.error {
  color: var(--err-fg);
  border-color: var(--err-border);
  background: var(--err-bg);
}

.dirty-chip {
  padding: 6px 12px;
  border: 1px solid var(--warn-border);
  border-radius: 999px;
  background: var(--warn-bg);
  color: var(--warn-fg);
  font-size: 12px;
  font-weight: 650;
  white-space: nowrap;
}

.view-search {
  display: flex;
  align-items: center;
  flex: 1 1 240px;
  min-width: 180px;
  max-width: 380px;
}

.topbar-search {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 440px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Everything clickable gets the pointer cursor. Links already get it from the
   user agent; buttons, selects, and the label rows that wrap a control do not. */
button:not(:disabled),
select,
label.row:not(.row-disabled),
label.rule-control,
input[type="checkbox"]:not(:disabled),
input[type="radio"]:not(:disabled) {
  cursor: pointer;
}

button {
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 8px 14px;
  background: var(--surface);
  color: var(--ink);
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
}

button:hover:not(:disabled) {
  background: var(--surface-2);
  border-color: var(--muted);
}

/* Borderless ghost buttons with a soft filled-square hover. */
#theme-toggle,
#raw-copy,
#activity-refresh,
#integrations-refresh,
#rules-refresh,
#tester-run,
#reset-rule-customizations,
#reset-secret-customizations,
.rule-example-button {
  border-color: transparent;
}

#theme-toggle:hover:not(:disabled),
#raw-copy:hover:not(:disabled),
#activity-refresh:hover:not(:disabled),
#integrations-refresh:hover:not(:disabled),
#rules-refresh:hover:not(:disabled),
#tester-run:hover:not(:disabled),
#reset-rule-customizations:hover:not(:disabled),
#reset-secret-customizations:hover:not(:disabled),
.rule-example-button:hover:not(:disabled) {
  background: var(--btn-hover-fill);
  border-color: transparent;
}

button:disabled {
  opacity: 0.6;
  cursor: progress;
}

button.primary {
  background: var(--safe);
  border-color: var(--safe);
  color: #fff;
}

button.primary:hover:not(:disabled) {
  background: var(--safe-hover);
  border-color: var(--safe-hover);
}

button.danger {
  background: var(--danger);
  border-color: var(--danger);
  color: #fff;
}

button.danger:hover:not(:disabled) {
  background: var(--danger-hover);
  border-color: var(--danger-hover);
}

#theme-toggle {
  display: inline-flex;
  align-items: center;
  align-self: flex-end;
  gap: 7px;
  color: var(--muted);
}

#theme-toggle:hover {
  color: var(--ink);
}

#theme-toggle svg {
  width: 15px;
  height: 15px;
}

button.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  color: var(--muted);
}

button.icon-button:hover:not(:disabled) {
  color: var(--ink);
}

button.icon-button.copied {
  color: var(--ok-fg);
}

button.icon-button.copied:hover:not(:disabled) {
  color: var(--ok-fg);
}

button.icon-button svg {
  width: 16px;
  height: 16px;
}

:where(button, input, textarea):focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

main {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px 28px 48px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.view {
  display: grid;
  gap: 18px;
}

.view[hidden] {
  display: none;
}

.view-head .panel-sub {
  margin-top: 0;
}

.policy-savebar {
  position: sticky;
  top: var(--topbar-h);
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--surface-2);
}

.savebar-actions {
  display: flex;
  gap: 8px;
}

.retention-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 12.5px;
  font-weight: 600;
}

.retention-row input {
  width: 84px;
  text-align: right;
}

.retention-note {
  margin: 8px 0 0;
  font-size: 12px;
}

/* States the window once for the row, so each tile label stays a single word. */
.tiles-window {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 11.5px;
  font-weight: 600;
}

.tiles-window:empty {
  display: none;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 10px;
}

.tiles:empty {
  display: none;
}

/* Count and label stack on the left, series on the right: seven bars stretched
   across a half-width tile read as blocks rather than a trend. */
.tile {
  display: grid;
  grid-template-columns: 1fr minmax(0, 168px);
  grid-template-areas:
    "value spark"
    "label spark";
  align-items: center;
  gap: 3px 16px;
  padding: 14px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.tile strong {
  grid-area: value;
  align-self: end;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.tile span {
  grid-area: label;
  align-self: start;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--muted);
}

.view-all-link {
  align-self: center;
  padding: 8px 14px;
  border-radius: var(--radius);
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.view-all-link:hover {
  background: var(--btn-hover-fill);
  color: var(--ink);
}

.protection-warning {
  border-color: var(--err-border);
  background: color-mix(in srgb, var(--err-bg) 60%, var(--surface));
}

.dual-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

@media (max-width: 720px) {
  .dual-panels {
    grid-template-columns: 1fr;
  }
}

/* minmax(0, 1fr), not the implicit auto track: rule IDs are nowrap, and their
   min-content would otherwise widen the whole Overview grid past the viewport. */
#top-rules,
#top-commands {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2px;
}

.top-rule,
.top-command {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 7px 10px;
  border-color: transparent;
  background: transparent;
  border-radius: var(--radius-sm);
  text-align: left;
}

.top-rule:hover:not(:disabled),
.top-command:hover:not(:disabled) {
  background: var(--btn-hover-fill);
  border-color: transparent;
}

.top-rule .rule-id,
.top-command .rule-id {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.guard-errors {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--warn-border);
  border-radius: var(--radius);
  background: var(--warn-bg);
  color: var(--warn-fg);
  font-size: 12.5px;
  font-weight: 600;
  text-align: left;
}

.activity-controls {
  display: grid;
  gap: 10px;
  margin-bottom: 14px;
}

.activity-controls-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.activity-days {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 650;
  color: var(--muted);
}

.activity-refresh {
  margin-left: auto;
}

@keyframes activity-refresh-spin {
  to {
    transform: rotate(360deg);
  }
}

.activity-refresh.spinning svg {
  animation: activity-refresh-spin 0.6s linear infinite;
}

.integrations-refresh,
.rules-refresh {
  margin-left: auto;
}

.integrations-refresh.spinning svg,
.rules-refresh.spinning svg {
  animation: activity-refresh-spin 0.6s linear infinite;
}

#integrations-list {
  display: grid;
  gap: 8px;
}

.integration-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.integration-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;
}

.integration-row .status {
  grid-column: 1 / -1;
}

.integration-row button.primary,
.integration-row button.danger {
  min-width: 88px;
  background: transparent;
  border-color: transparent;
  color: var(--ink);
}

.integration-row button.primary:hover:not(:disabled),
.integration-row button.danger:hover:not(:disabled) {
  color: #fff;
}

/* The panel stacks bare .field blocks rather than wrapping them in a gapped
   grid, so each label would otherwise sit flush against the control above it. */
#rules-composer-panel .field + .field,
.rules-composer-actions {
  margin-top: 14px;
}

.rules-path-row {
  display: flex;
  gap: 8px;
}

.rules-path-row input {
  flex: 1 1 auto;
  min-width: 0;
}

.rules-path-row button {
  flex: none;
}

/* Picked, not typed: the value is a dialog result, so it reads as a fact rather
   than an editable field until the picker turns out to be unusable. */
#rules-project-path[readonly] {
  border-color: var(--border);
  color: var(--muted);
}

.rules-composer-actions {
  display: flex;
  justify-content: flex-end;
}

#rules-list,
#rules-diagnostics {
  display: grid;
  gap: 8px;
}

.rulebook-card {
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.rulebook-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;
  font-size: 12px;
  color: var(--muted);
}

/* minmax(0, 1fr), not the implicit auto track: nowrap custom.<name> ids would
   otherwise widen the card past the viewport. */
.rulebook-rule {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
}

.rulebook-head code,
.rulebook-rule code {
  font-family: var(--font-mono);
  font-size: 12px;
  overflow-wrap: anywhere;
}

.rulebook-rule .rule-id {
  color: var(--muted);
}

.rulebook-rule p {
  margin: 0;
  font-size: 12px;
  color: var(--muted);
}

/* The jumped-to rule is scrolled to the middle of a list of near-identical
   rows, so the marker needs an edge, not just a surface shade. */
.rulebook-rule.rules-focus {
  margin: 0 -8px;
  padding: 10px 8px;
  background: var(--surface-2);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
}

select {
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 8px 10px;
  background: var(--field-bg);
  color: var(--ink);
  font: inherit;
}

.chip-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.chip-row:empty {
  display: none;
}

button.chip {
  padding: 4px 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
}

button.chip[aria-pressed="true"] {
  background: var(--master-bg);
  border-color: var(--master-border);
  color: var(--master-fg);
}

.chip-count {
  font-variant-numeric: tabular-nums;
}

button.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: var(--master-bg);
  border-color: var(--master-border);
  color: var(--master-fg);
}

button.filter-pill code {
  font-family: var(--font-mono);
}

.filter-pill-x {
  opacity: 0.7;
}

.feed-list {
  display: grid;
  gap: 8px;
}

.feed-item {
  display: grid;
  gap: 7px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.feed-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 11px;
  color: var(--meta);
}

.feed-meta time {
  margin-left: auto;
  white-space: nowrap;
}

.feed-copy,
.feed-report {
  width: 26px;
  height: 26px;
  margin: -4px 0;
  border: 0;
  background: transparent;
}

.feed-copy:hover:not(:disabled),
.feed-report:hover:not(:disabled) {
  background: transparent;
}

.feed-copy svg,
.feed-report svg {
  width: 14px;
  height: 14px;
}

.feed-copy.copied svg {
  width: 12px;
  height: 12px;
}

.feed-meta .rule-id {
  font-family: var(--font-mono);
  color: var(--muted);
  overflow-wrap: anywhere;
}

/* button.rule-id drops to font: inherit, and the tester renders a custom rule
   id as a button next to a <code> built-in id, so the face has to be restored
   or the same slot changes typeface with the rule that fired. */
#tester-result .rule-id {
  font-family: var(--font-mono);
}

button.rule-id {
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  text-align: left;
}

button.rule-id:hover {
  color: var(--ink);
  text-decoration: underline;
}

.decision-badge {
  padding: 1px 8px;
  border: 1px solid;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.decision-badge.deny {
  color: var(--err-fg);
  background: var(--err-bg);
  border-color: var(--err-border);
}

.decision-badge.allow {
  color: var(--ok-fg);
  background: var(--ok-bg);
  border-color: var(--ok-border);
}

.decision-badge.error {
  color: var(--warn-fg);
  background: var(--warn-bg);
  border-color: var(--warn-border);
}

.agent-badge {
  padding: 1px 8px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
}

.feed-command,
.rule-example-popover code {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  font-family: var(--font-mono);
  font-size: 12px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.feed-command {
  padding: 8px 10px;
  max-width: 85ch;
  max-height: 7.2em;
  overflow: hidden;
}

.feed-command.clamped {
  mask-image: linear-gradient(180deg, #000 calc(100% - 1.6em), transparent);
}

.feed-command.expanded {
  max-height: none;
  mask-image: none;
}

.feed-toggle {
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  font-weight: 650;
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* .feed-toggle is sized for its usual slot below the command. In .feed-meta it
   has to drop to the row's 11px and stop overriding the row's centre alignment. */
.feed-block {
  align-self: center;
  font-size: 11px;
}

.feed-day-sep {
  padding-top: 6px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.tile-spark {
  grid-area: spark;
  display: flex;
  align-items: stretch;
  gap: 2px;
  width: 100%;
  height: 40px;
}

/* Full-height hover column so short bars are easy to target; the visible bar
   sits at the bottom and the tooltip anchors at a consistent height. */
.spark-col {
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 1 1 0;
  min-width: 1px;
}

.spark-bar {
  width: 100%;
  background: var(--accent);
  border-radius: 1px;
}

.spark-bar.spark-zero {
  background: var(--border-strong);
}

.spark-col::after {
  content: attr(data-count);
  position: absolute;
  left: 50%;
  bottom: calc(100% + 6px);
  transform: translateX(-50%);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--border-strong);
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}

.spark-col:hover::after,
.spark-col:focus-visible::after {
  opacity: 1;
}

.spark-col:focus-visible {
  border-radius: var(--radius-sm);
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.feed-reason {
  margin: 0;
  max-width: 85ch;
  font-size: 12px;
}

.activity-count {
  margin: 12px 0 0;
  font-size: 12px;
}

.activity-count:empty {
  display: none;
}

.info-rows {
  display: grid;
  gap: 10px;
}

.info-row {
  display: grid;
  gap: 3px;
}

.info-row > span {
  font-size: 12px;
  font-weight: 650;
  color: var(--muted);
}

.info-row code {
  font-family: var(--font-mono);
  font-size: 12px;
  overflow-wrap: anywhere;
}

.danger-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.danger-row strong {
  font-size: 13px;
}

.danger-row p {
  margin: 4px 0 0;
  font-size: 12px;
}

.status {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  font-size: 13px;
  line-height: 1.45;
  white-space: pre-wrap;
}

.status:empty {
  display: none;
}

.protection-banner {
  padding: 10px 14px;
  border: 1px solid var(--err-fg);
  border-radius: var(--radius);
  background: var(--err-bg);
  color: var(--err-fg);
  font-weight: 600;
}

.status.ok {
  color: var(--ok-fg);
  background: var(--ok-bg);
  border-color: var(--ok-border);
}

.status.error {
  color: var(--err-fg);
  background: var(--err-bg);
  border-color: var(--err-border);
}

.health-strip strong {
  color: var(--ink);
  font-weight: 650;
}

.recovery {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px;
  border: 1px solid var(--err-border);
  border-radius: var(--radius);
  background: var(--surface);
}

.recovery[hidden] {
  display: none;
}

.recovery strong {
  display: block;
  font-size: 13px;
}

.recovery p {
  margin: 4px 0 0;
}

.muted {
  color: var(--muted);
  line-height: 1.45;
}

.confirm-dialog {
  width: min(420px, calc(100vw - 32px));
  padding: 0;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--surface);
  color: var(--ink);
}

.rule-example-popover {
  position: fixed;
  inset: auto;
  width: min(360px, calc(100vw - 24px));
  margin: 0;
  padding: 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--ink);
  box-shadow: 0 4px 8px rgb(0 0 0 / 18%);
}

.rule-example-popover::backdrop {
  background: transparent;
}

.rule-example-popover > * {
  display: block;
}

.rule-example-label {
  margin-bottom: 3px;
  color: var(--muted);
  font-size: 11px;
}

.rule-example-popover strong {
  margin-bottom: 10px;
  font-size: 13px;
}

.rule-example-popover code {
  padding: 9px 10px;
}

.confirm-dialog::backdrop {
  background: rgb(0 0 0 / 48%);
}

.confirm-dialog form {
  display: grid;
  gap: 12px;
  padding: 18px;
}

.confirm-dialog h2 {
  margin: 0;
}

.confirm-dialog p {
  margin: 0;
}

.dialog-detail {
  padding: 9px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-2);
  overflow-wrap: anywhere;
}

.dialog-detail code {
  font-family: var(--font-mono);
  font-size: 12px;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
}

.report-dialog {
  width: min(680px, calc(100vw - 32px));
}

.report-field {
  display: grid;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
}

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.panel-title {
  min-width: 0;
}

.raw-json-head {
  flex-wrap: nowrap;
}

.raw-json-head .panel-title {
  flex: 1 1 auto;
}

.raw-json-head #raw-copy {
  flex: none;
}

.panel-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: -4px 0;
  padding: 4px 6px 4px 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
}

.panel-toggle:hover {
  background: transparent;
  color: var(--ink);
}

.panel-chevron {
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
  transition: transform 0.15s ease;
}

.panel-toggle[aria-expanded="false"] .panel-chevron,
:is(.rule-tier-head, .tier-collapse)[aria-expanded="false"] .panel-chevron {
  transform: rotate(-45deg);
}

h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.panel-sub {
  margin: 4px 0 0;
  font-size: 12.5px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 8px;
}

label.row {
  display: flex;
  gap: 12px;
}

label.row,
.rule-row {
  align-items: flex-start;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
}

label.row:hover {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

label.row.row-disabled {
  cursor: not-allowed;
  opacity: 0.62;
}

label.row.row-disabled:hover {
  border-color: var(--border);
  background: var(--surface);
}

:is(label.row, .rule-control) input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  margin: 1px 0 0;
  width: 34px;
  height: 20px;
  flex: none;
  border: 1px solid var(--switch-track);
  border-radius: 999px;
  background: var(--switch-track);
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease;
}

:is(label.row, .rule-control) input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--switch-knob);
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  transition: transform 0.18s ease;
}

:is(label.row, .rule-control) input[type="checkbox"]:checked {
  background: var(--accent);
  border-color: var(--accent);
}

:is(label.row, .rule-control) input[type="checkbox"]:checked::before {
  transform: translateX(14px);
}

:is(label.row, .rule-control):hover input[type="checkbox"]:not(:checked) {
  border-color: var(--switch-track-hover);
  background: var(--switch-track-hover);
}

label.row.safety-override-row {
  display: grid;
  gap: 8px;
}

label.row.safety-override-row select {
  width: 100%;
}

:is(label.row, .rule-control) span {
  display: block;
  min-width: 0;
}

:is(label.row, .rule-control) strong {
  font-weight: 650;
  font-size: 13px;
}

:is(label.row, .rule-control) .rule-id {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  margin-top: 2px;
  word-break: break-all;
}

:is(label.row, .rule-control) small {
  display: block;
  margin-top: 4px;
  font-size: 11.5px;
  color: var(--muted);
  line-height: 1.45;
}

#destructive-command > label.row {
  margin-bottom: 16px;
}

.preset-status {
  margin-bottom: 10px;
  font-weight: 700;
}

#safety-preset-status:empty {
  display: none;
}

.preset-status.customized {
  color: var(--master-fg);
}

/* The picker is the most consequential control in the console, and it named
   the same three tiers the rule sections below already color. The selected
   card now speaks that vocabulary; unselected cards stay neutral. */
.preset-standard {
  --preset-fg: var(--ok-fg);
  --preset-bg: var(--ok-bg);
  --preset-border: var(--ok-border);
}

.preset-strict {
  --preset-fg: var(--strict-fg);
  --preset-bg: var(--strict-bg);
  --preset-border: var(--strict-border);
}

.preset-paranoid {
  --preset-fg: var(--paranoid-fg);
  --preset-bg: var(--paranoid-bg);
  --preset-border: var(--paranoid-border);
}

#safety-level label.row:has(input:checked),
#safety-level label.row:has(input:checked):hover {
  border-color: var(--preset-border);
  background: var(--preset-bg);
  accent-color: var(--preset-fg);
}

#safety-level label.row:has(input:checked) strong {
  color: var(--preset-fg);
}

.panel-head-action {
  flex: none;
}

.rule-tier {
  overflow: clip;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
}

.rule-tier + .rule-tier,
#destructive-command-rules + .rule-tier {
  margin-top: 10px;
}

.rule-tier-enforced {
  border-color: var(--ok-border);
}

.rule-tier-strict {
  border-color: var(--strict-border);
}

.rule-tier-paranoid {
  border-color: var(--paranoid-border);
}

.rule-tier-head {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  padding: 9px 10px;
  border: 0;
  border-radius: 0;
  background: var(--surface-2);
  color: var(--ink);
  text-align: left;
}

.rule-tier-head:hover:not(:disabled) {
  background: var(--surface-2);
}

/* The secret group head carries a bulk action, so the collapse control is a
   button inside the head rather than the head itself. The negative margin
   cancels the head's padding and the stretch spans the taller switch beside it,
   so the button covers the whole head band and the layout stays where it was;
   without them the head's padding is a dead zone. */
.tier-collapse {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: center;
  align-self: stretch;
  gap: 12px;
  margin: -9px -10px;
  padding: 9px 10px;
  border: 0;
  border-radius: 0;
  background: none;
  color: inherit;
  text-align: left;
}

/* A thin track with a knob that overhangs it. The rule switches are a filled
   pill, so the group control does not read as one more rule. */
.tier-switch {
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  width: 30px;
  height: 16px;
  flex: none;
  padding: 0;
  border: 0;
  background: none;
}

.tier-switch::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 6px;
  transform: translateY(-50%);
  border-radius: 999px;
  background: var(--switch-track);
  transition: background-color 0.18s ease;
}

/* Above the track, which paints later in the pseudo-element order. */
.tier-switch::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--switch-knob);
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  transition: transform 0.18s ease;
}

.tier-switch:checked::after {
  background: color-mix(in srgb, var(--accent) 45%, transparent);
}

.tier-switch:checked::before {
  transform: translateX(14px);
  background: var(--accent);
}

/* The tiers that can be switched off carried the only hues, leaving the tier
   that can never be switched off as the quietest thing on the panel. */
.rule-tier-enforced .rule-tier-head,
.rule-tier-enforced .rule-tier-head:hover:not(:disabled) {
  background: var(--ok-bg);
  color: var(--ok-fg);
}

.rule-tier-strict .rule-tier-head,
.rule-tier-strict .rule-tier-head:hover:not(:disabled) {
  background: var(--strict-bg);
  color: var(--strict-fg);
}

.rule-tier-paranoid .rule-tier-head,
.rule-tier-paranoid .rule-tier-head:hover:not(:disabled) {
  background: var(--paranoid-bg);
  color: var(--paranoid-fg);
}

.tier-label {
  display: grid;
  min-width: 0;
  flex: 1;
  gap: 1px;
}

.tier-label small,
.tier-counts {
  color: inherit;
  font-size: 11px;
}

.tier-counts {
  flex: none;
  font-weight: 500;
  text-align: right;
}

.tier-counts .count-off {
  color: var(--warn-fg);
}

.tier-content {
  padding: 12px;
  border-top: 1px solid var(--border);
}

.rule-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
}

.rule-row:hover {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

.rule-row.row-disabled {
  background: var(--surface);
}

.rule-control {
  display: flex;
  min-width: 0;
  flex: 1;
  align-items: flex-start;
  gap: 12px;
}

.rule-row.row-disabled .rule-control {
  cursor: not-allowed;
  opacity: 0.62;
}

.rule-example-button {
  position: relative;
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  line-height: 1;
}

.rule-example-button::before {
  content: "";
  position: absolute;
  inset: -9px;
}

.rule-example-button:hover:not(:disabled) {
  color: var(--ink);
}

.inherit-button {
  grid-column: 1 / -1;
  justify-self: end;
  padding: 5px 8px;
  font-size: 11px;
}

label.row.master {
  align-items: center;
  padding: 12px 14px;
  border-color: var(--err-border);
  background: color-mix(in srgb, var(--err-bg) 60%, var(--surface));
}

label.row.master:hover {
  border-color: color-mix(in srgb, var(--err-fg) 34%, var(--err-border));
  background: var(--err-bg);
}

label.row.master:not(:has(input:checked)) {
  border-left: 3px solid var(--err-fg);
}

label.row.master:has(input:checked) {
  border-color: var(--master-border);
  background: color-mix(in srgb, var(--master-bg) 72%, var(--surface));
}

label.row.master:has(input:checked):hover {
  border-color: color-mix(in srgb, var(--master) 42%, var(--master-border));
  background: var(--master-bg);
}

label.row.master strong {
  font-size: 15px;
}

label.row.master input[type="checkbox"] {
  margin: 0;
  width: 44px;
  height: 24px;
}

label.row.master input[type="checkbox"]:checked {
  background: var(--master);
  border-color: var(--master);
}

label.row.master input[type="checkbox"]::before {
  width: 18px;
  height: 18px;
}

label.row.master input[type="checkbox"]:checked::before {
  transform: translateX(20px);
}

.master-badge {
  flex: none;
  margin-left: auto;
  padding: 2px 9px;
  border: 1px solid var(--err-border);
  border-radius: 999px;
  background: var(--err-bg);
  color: var(--err-fg);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

label.row.master:has(input:checked) .master-badge {
  border-color: var(--master-border);
  background: var(--master-bg);
  color: var(--master-fg);
}

.state-active {
  color: var(--ok-fg);
  font-weight: 700;
}

.state-disabled {
  color: var(--err-fg);
  font-weight: 700;
}

.destructive-command-group + .destructive-command-group {
  margin-top: 24px;
}

.destructive-command-group h3 {
  margin: 0 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
}

.empty {
  margin: 0;
  padding: 16px;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius);
  color: var(--muted);
  text-align: center;
}

#secret {
  display: grid;
  gap: 14px;
}

.field {
  display: grid;
  gap: 4px;
}

.field-toggle .panel-toggle {
  justify-self: start;
  margin: -2px 0;
  padding: 2px 6px 2px 0;
  font-weight: 650;
}

#safety-level + .field,
.foldable-field-content + .field {
  margin-top: 14px;
}

#safety-overrides,
#workflow {
  margin-top: 4px;
}

.foldable-field-content {
  display: grid;
  gap: 4px;
}

.foldable-field-content > p {
  margin: 0;
  font-size: 12px;
}

.paths-content:not([hidden]) {
  display: grid;
  gap: 10px;
}

.paths-content > p.muted {
  margin: 0;
  font-size: 12px;
}

.field > span {
  font-size: 13px;
  font-weight: 650;
}

.field small {
  font-size: 11.5px;
  color: var(--muted);
  font-weight: 400;
  line-height: 1.45;
}

input[type="search"],
input[type="text"],
textarea {
  width: 100%;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 9px 11px;
  background: var(--field-bg);
  color: var(--ink);
  font: inherit;
  transition: border-color 0.15s ease;
}

input[type="search"]:hover,
input[type="text"]:hover,
textarea:hover {
  border-color: var(--muted);
}

/* Text fields carry no focus ring. \`outline: none\` is load-bearing rather than
   redundant: without it these fall back to the browser's default focus-visible
   outline. Buttons, links, and the sparkline columns keep theirs. */
input[type="search"]:focus,
input[type="text"]:focus,
textarea:focus {
  border-color: var(--muted);
  outline: none;
}

input[type="text"]:disabled {
  cursor: not-allowed;
  opacity: 0.62;
}

.tester-row {
  display: flex;
  gap: 8px;
}

.tester-row input[type="text"] {
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.tester-row button {
  flex: none;
  align-self: center;
}

#tester-result {
  margin-top: 12px;
}

.tester-segment {
  margin-top: 6px;
}

.paths-add {
  display: flex;
  gap: 8px;
}

.paths-add input[type="text"] {
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.paths-add button {
  flex: none;
  align-self: center;
}

.paths-hint {
  margin: -6px 0 0;
  color: var(--err-fg);
  font-size: 12px;
  overflow-wrap: anywhere;
}

.paths-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}

.path-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.path-item code {
  flex: 1 1 auto;
  min-width: 0;
  padding: 9px 11px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 12.5px;
  overflow-wrap: anywhere;
}

.path-item button:hover:not(:disabled) {
  color: var(--err-fg);
  border-color: var(--err-border);
  background: var(--err-bg);
}

.path-item.row-disabled {
  opacity: 0.62;
}

.path-item.row-disabled button {
  cursor: not-allowed;
}

.path-item button {
  flex: none;
}

textarea {
  min-height: 96px;
  resize: vertical;
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.55;
}

#raw {
  min-height: 280px;
}

.star-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-2);
}

.star-pitch {
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  color: var(--ink);
  font-size: 12.5px;
  line-height: 1.45;
}

.star-pitch strong {
  font-variant-numeric: tabular-nums;
}

.star-mechanism {
  display: block;
  margin-top: 2px;
  color: var(--meta);
  font-size: 11.5px;
}

#star-slot {
  display: inline-flex;
  flex: none;
}

.star-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: none;
  white-space: nowrap;
  padding: 8px 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--surface);
  border-color: var(--border-strong);
  color: var(--muted);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
}

.star-cta:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--star) 45%, var(--border-strong));
  background: var(--surface-2);
  color: var(--ink);
}

.star-cta:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.star-icon {
  display: inline-flex;
  width: 15px;
  height: 15px;
  color: var(--star);
}

.star-icon svg {
  width: 15px;
  height: 15px;
}

.star-count {
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  border-left: 1px solid var(--border-strong);
  padding-left: 8px;
  color: var(--muted);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

.star-cta.starred:disabled {
  opacity: 1;
  cursor: default;
}

/* !important and the pseudo-element selectors are load-bearing: the universal
   selector loses to every class-level transition in this file, and does not
   match the switch knob's ::before at all. */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    /* biome-ignore lint/complexity/noImportantStyles: reduced-motion must win over every class-level transition */
    transition: none !important;
  }

  .activity-refresh.spinning svg,
  .integrations-refresh.spinning svg,
  .rules-refresh.spinning svg {
    animation: none;
  }
}

@media (max-width: 900px) {
  .tiles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .app-shell {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
  }

  .sidebar {
    z-index: 100;
    height: var(--topbar-h);
    flex-direction: row;
    align-items: center;
    gap: 14px;
    padding: 0 16px;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  /* The bar's six nav items sit at their minimum width, so the wordmark is
     what has to give for the row to fit a 320px viewport. */
  .brand-logo svg {
    height: 20px;
  }

  .topbar {
    position: static;
    z-index: auto;
  }

  /* On views with a search, the top bar becomes a slim sticky search row
     pinned directly below the nav bar. */
  .topbar.has-search {
    position: sticky;
    top: var(--topbar-h);
    z-index: 95;
  }

  .policy-savebar {
    top: calc(var(--topbar-h) * 2);
  }

  .brand {
    flex: none;
    padding: 0;
  }

  main {
    flex: 1;
  }

  .app-foot {
    display: flex;
    justify-content: center;
    gap: 28px;
    padding: 16px;
    border-top: 1px solid var(--border);
    font-size: 12px;
  }

  .app-foot a {
    color: var(--meta);
    text-decoration: none;
  }

  .app-foot a:hover {
    color: var(--ink);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .sidenav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: 2px;
  }

  /* Vertical padding fills the bar for a taller touch target; the horizontal
     side stays tight because the row already has no width to spare at 320px. */
  .sidenav a {
    padding: 15px 7px;
  }

  .sr-only-collapse {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .sidebar-foot {
    display: none;
  }
}

@media (max-width: 640px) {
  .topbar {
    padding: 10px 16px;
  }

  .topbar-row {
    flex-wrap: wrap;
  }

  .topbar.has-search .topbar-row {
    flex-wrap: nowrap;
  }

  main {
    padding: 18px 16px 40px;
  }

  .topbar-search {
    max-width: none;
  }

  .panel {
    padding: 16px;
  }

  .star-row {
    flex-wrap: wrap;
  }

  .star-row .star-cta,
  .star-row #star-slot {
    flex: 1 1 100%;
    justify-content: center;
  }

  .panel-head {
    flex-direction: column;
  }

  .raw-json-head,
  .panel-head:has(.view-all-link) {
    flex-direction: row;
    align-items: center;
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  /* The counts wrap to their own line below the label. The destructive tiers
     and secret groups nest the label and counts inside .tier-collapse, so the
     wrap must be enabled there as well, not only on the head. */
  .rule-tier-head,
  .tier-collapse {
    flex-wrap: wrap;
  }

  .rule-row {
    align-items: start;
  }

  .tier-counts {
    flex: 1 1 100%;
    padding-left: 20px;
    text-align: left;
  }

  .inherit-button {
    align-self: flex-start;
  }
}

@media (min-width: 1440px) {
  body[data-view="overview"] main,
  body[data-view="overview"] .topbar-row {
    max-width: 1200px;
  }
}

[hidden] {
  display: none;
}

  </style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <h1 class="brand-logo"><a class="brand-home" href="#overview" title="Overview"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 512" role="img" aria-label="CC Safety Net">
  <path d="M 1439 165 L 1411 165 L 1409 166 L 1408 168 L 1403 173 L 1403 174 L 1398 179 L 1398 180 L 1395 183 L 1394 183 L 1394 184 L 1385 194 L 1385 195 L 1381 199 L 1381 200 L 1378 202 L 1378 203 L 1374 207 L 1374 208 L 1367 215 L 1367 216 L 1358 226 L 1358 227 L 1352 233 L 1352 234 L 1347 239 L 1347 240 L 1341 246 L 1341 247 L 1336 252 L 1336 253 L 1332 257 L 1332 258 L 1325 265 L 1325 266 L 1319 272 L 1319 273 L 1314 278 L 1314 279 L 1309 284 L 1309 285 L 1303 291 L 1303 292 L 1299 296 L 1299 297 L 1294 302 L 1291 299 L 1290 300 L 1290 301 L 1293 301 L 1294 302 L 1288 309 L 1287 308 L 1288 309 L 1286 312 L 1285 311 L 1285 306 L 1286 305 L 1286 303 L 1288 299 L 1288 296 L 1289 295 L 1289 292 L 1290 291 L 1290 287 L 1291 286 L 1291 284 L 1293 280 L 1293 277 L 1294 276 L 1294 272 L 1295 271 L 1295 269 L 1297 265 L 1297 262 L 1298 261 L 1298 258 L 1299 257 L 1299 253 L 1300 252 L 1300 250 L 1301 249 L 1301 247 L 1303 243 L 1303 238 L 1304 237 L 1304 235 L 1305 234 L 1305 232 L 1307 228 L 1307 224 L 1308 223 L 1308 221 L 1309 220 L 1309 217 L 1310 216 L 1310 214 L 1312 210 L 1312 205 L 1314 202 L 1314 199 L 1316 195 L 1317 188 L 1318 187 L 1318 185 L 1319 184 L 1319 182 L 1321 178 L 1321 173 L 1323 169 L 1323 166 L 1296 166 L 1296 168 L 1294 171 L 1294 174 L 1293 175 L 1293 178 L 1292 179 L 1291 186 L 1290 187 L 1290 189 L 1289 190 L 1289 192 L 1287 196 L 1287 200 L 1285 204 L 1285 207 L 1283 211 L 1283 215 L 1282 216 L 1282 218 L 1281 219 L 1281 222 L 1279 226 L 1279 229 L 1278 230 L 1278 234 L 1277 235 L 1277 237 L 1276 238 L 1276 240 L 1274 244 L 1274 249 L 1273 250 L 1273 252 L 1271 256 L 1271 259 L 1270 260 L 1270 263 L 1269 264 L 1269 268 L 1268 269 L 1268 271 L 1266 275 L 1266 278 L 1265 279 L 1265 284 L 1264 285 L 1264 287 L 1262 291 L 1262 294 L 1261 295 L 1261 298 L 1260 299 L 1259 306 L 1258 307 L 1258 309 L 1257 310 L 1257 313 L 1256 314 L 1256 318 L 1254 322 L 1254 325 L 1273 325 L 1274 327 L 1273 328 L 1272 327 L 1273 328 L 1269 332 L 1269 333 L 1265 337 L 1265 338 L 1261 341 L 1261 342 L 1252 352 L 1252 353 L 1247 358 L 1247 359 L 1242 364 L 1242 365 L 1239 367 L 1239 368 L 1224 385 L 1224 386 L 1220 390 L 1220 391 L 1216 395 L 1216 396 L 1214 397 L 1214 399 L 1247 399 L 1249 397 L 1249 396 L 1259 385 L 1259 384 L 1263 380 L 1263 379 L 1265 377 L 1266 377 L 1266 376 L 1271 371 L 1271 370 L 1278 363 L 1278 362 L 1283 357 L 1283 356 L 1294 344 L 1294 343 L 1298 339 L 1298 338 L 1305 331 L 1305 330 L 1309 326 L 1309 325 L 1312 323 L 1313 320 L 1315 319 L 1316 317 L 1321 312 L 1322 312 L 1321 311 L 1330 301 L 1330 300 L 1335 295 L 1335 294 L 1337 292 L 1338 292 L 1339 289 L 1342 287 L 1342 286 L 1346 282 L 1346 281 L 1352 275 L 1352 274 L 1361 264 L 1361 263 L 1370 253 L 1370 252 L 1375 247 L 1375 246 L 1380 241 L 1380 240 L 1387 233 L 1387 232 L 1402 215 L 1402 214 L 1406 210 L 1406 209 L 1408 207 L 1409 207 L 1409 206 L 1413 202 L 1413 201 L 1418 196 L 1418 195 L 1422 191 L 1422 190 L 1427 185 L 1427 184 L 1431 180 L 1431 179 L 1440 169 L 1441 167 Z
M 1129 179 L 1126 178 L 1125 176 L 1124 176 L 1116 170 L 1114 170 L 1107 166 L 1105 166 L 1104 165 L 1101 165 L 1100 164 L 1096 164 L 1095 163 L 1091 163 L 1090 162 L 1081 162 L 1080 161 L 1076 161 L 1075 162 L 1066 162 L 1065 163 L 1061 163 L 1060 164 L 1057 164 L 1056 165 L 1051 165 L 1050 166 L 1045 167 L 1040 170 L 1038 170 L 1028 175 L 1023 179 L 1021 179 L 1017 183 L 1016 183 L 1012 187 L 1011 187 L 999 199 L 999 200 L 996 203 L 996 204 L 994 205 L 993 208 L 990 211 L 981 229 L 981 231 L 980 232 L 980 234 L 979 235 L 979 237 L 977 241 L 977 244 L 976 245 L 976 254 L 975 255 L 975 265 L 976 266 L 976 273 L 977 274 L 977 277 L 980 283 L 981 288 L 984 292 L 985 295 L 988 298 L 989 301 L 998 310 L 1001 311 L 1004 314 L 1007 315 L 1009 317 L 1013 319 L 1015 319 L 1018 321 L 1020 321 L 1024 323 L 1027 323 L 1028 324 L 1035 324 L 1036 325 L 1054 325 L 1055 324 L 1062 324 L 1063 323 L 1067 323 L 1068 322 L 1071 322 L 1077 319 L 1080 319 L 1087 315 L 1089 315 L 1093 313 L 1095 311 L 1098 310 L 1103 306 L 1106 305 L 1116 296 L 1117 296 L 1115 292 L 1113 290 L 1112 290 L 1111 288 L 1109 286 L 1108 286 L 1107 284 L 1100 278 L 1098 279 L 1090 286 L 1089 286 L 1086 289 L 1074 295 L 1072 295 L 1068 297 L 1065 297 L 1064 298 L 1061 298 L 1060 299 L 1041 299 L 1040 298 L 1037 298 L 1036 297 L 1031 296 L 1028 294 L 1026 294 L 1024 292 L 1020 290 L 1010 280 L 1008 275 L 1006 273 L 1005 271 L 1005 268 L 1004 267 L 1004 264 L 1003 263 L 1003 248 L 1004 247 L 1005 238 L 1008 233 L 1008 231 L 1010 227 L 1012 225 L 1013 222 L 1018 216 L 1018 215 L 1030 203 L 1031 203 L 1044 194 L 1046 194 L 1053 190 L 1056 190 L 1057 189 L 1060 189 L 1061 188 L 1064 188 L 1065 187 L 1071 187 L 1072 186 L 1076 186 L 1077 187 L 1083 187 L 1084 188 L 1087 188 L 1088 189 L 1090 189 L 1091 190 L 1096 191 L 1100 194 L 1103 195 L 1106 198 L 1107 198 L 1109 200 L 1109 201 L 1114 206 L 1114 207 L 1116 209 L 1118 213 L 1118 216 L 1120 220 L 1120 225 L 1116 227 L 1111 227 L 1110 228 L 1103 228 L 1102 229 L 1097 229 L 1096 230 L 1091 230 L 1090 231 L 1086 231 L 1085 232 L 1077 232 L 1076 233 L 1072 233 L 1071 234 L 1066 234 L 1065 235 L 1061 235 L 1060 236 L 1053 236 L 1052 237 L 1047 237 L 1047 240 L 1046 241 L 1046 243 L 1045 244 L 1045 247 L 1044 248 L 1044 250 L 1043 251 L 1043 254 L 1042 255 L 1042 260 L 1041 261 L 1041 263 L 1044 263 L 1045 262 L 1050 262 L 1051 261 L 1058 261 L 1059 260 L 1063 260 L 1064 259 L 1068 259 L 1069 258 L 1073 258 L 1074 257 L 1080 257 L 1081 256 L 1086 256 L 1087 255 L 1092 255 L 1093 254 L 1097 254 L 1098 253 L 1103 253 L 1104 252 L 1111 252 L 1112 251 L 1116 251 L 1117 250 L 1121 250 L 1122 249 L 1126 249 L 1127 248 L 1133 248 L 1134 247 L 1139 247 L 1140 246 L 1144 246 L 1146 243 L 1146 240 L 1147 239 L 1147 231 L 1148 230 L 1148 220 L 1147 219 L 1147 211 L 1146 210 L 1146 207 L 1144 204 L 1144 202 L 1143 201 L 1143 199 L 1141 195 L 1139 193 L 1138 190 L 1134 186 L 1133 183 L 1132 183 L 1129 180 Z
M 1779 171 L 1767 165 L 1765 165 L 1764 164 L 1762 164 L 1758 162 L 1755 162 L 1754 161 L 1747 161 L 1746 160 L 1729 160 L 1728 161 L 1722 161 L 1721 162 L 1718 162 L 1717 163 L 1715 163 L 1711 165 L 1707 165 L 1687 175 L 1685 177 L 1681 179 L 1672 187 L 1671 187 L 1661 197 L 1661 198 L 1657 202 L 1657 203 L 1652 209 L 1651 212 L 1649 214 L 1644 224 L 1643 229 L 1640 235 L 1640 238 L 1639 239 L 1639 244 L 1638 245 L 1638 250 L 1637 251 L 1637 267 L 1638 268 L 1638 273 L 1639 274 L 1639 278 L 1640 279 L 1640 282 L 1648 298 L 1652 302 L 1652 303 L 1655 306 L 1657 307 L 1657 308 L 1659 310 L 1660 310 L 1663 313 L 1669 316 L 1671 318 L 1673 319 L 1675 319 L 1676 320 L 1678 320 L 1684 323 L 1688 323 L 1689 324 L 1696 324 L 1697 325 L 1715 325 L 1716 324 L 1723 324 L 1724 323 L 1728 323 L 1729 322 L 1732 322 L 1738 319 L 1741 319 L 1748 315 L 1750 315 L 1754 313 L 1758 310 L 1759 311 L 1760 309 L 1761 309 L 1764 306 L 1765 306 L 1771 301 L 1772 301 L 1778 295 L 1761 278 L 1760 278 L 1756 282 L 1755 282 L 1751 286 L 1750 286 L 1745 290 L 1737 294 L 1732 295 L 1729 297 L 1726 297 L 1725 298 L 1721 298 L 1720 299 L 1703 299 L 1702 298 L 1698 298 L 1697 297 L 1692 296 L 1684 292 L 1682 290 L 1681 290 L 1673 282 L 1671 278 L 1668 275 L 1668 273 L 1667 272 L 1667 270 L 1666 269 L 1666 267 L 1664 263 L 1664 246 L 1665 245 L 1665 242 L 1666 241 L 1666 239 L 1668 235 L 1668 232 L 1670 228 L 1672 226 L 1673 224 L 1673 222 L 1680 214 L 1680 213 L 1690 203 L 1691 203 L 1694 200 L 1695 200 L 1700 196 L 1712 190 L 1715 190 L 1716 189 L 1718 189 L 1722 187 L 1725 187 L 1726 186 L 1744 186 L 1745 187 L 1747 187 L 1748 188 L 1750 188 L 1751 189 L 1756 190 L 1758 191 L 1761 194 L 1764 195 L 1773 204 L 1773 205 L 1777 210 L 1777 212 L 1778 213 L 1778 215 L 1780 219 L 1780 223 L 1781 225 L 1780 226 L 1775 226 L 1774 227 L 1768 227 L 1767 228 L 1759 228 L 1758 229 L 1753 229 L 1752 230 L 1747 230 L 1746 231 L 1742 231 L 1741 232 L 1733 232 L 1732 233 L 1727 233 L 1726 234 L 1722 234 L 1721 235 L 1717 235 L 1716 236 L 1709 236 L 1707 238 L 1707 241 L 1706 242 L 1706 246 L 1705 247 L 1705 250 L 1703 254 L 1703 258 L 1702 259 L 1702 262 L 1706 262 L 1707 261 L 1714 261 L 1715 260 L 1724 259 L 1725 258 L 1728 258 L 1729 257 L 1735 257 L 1736 256 L 1742 256 L 1743 255 L 1747 255 L 1748 254 L 1752 254 L 1753 253 L 1757 253 L 1758 252 L 1765 252 L 1766 251 L 1771 251 L 1772 250 L 1776 250 L 1777 249 L 1781 249 L 1782 248 L 1789 248 L 1790 247 L 1794 247 L 1795 246 L 1804 245 L 1805 243 L 1805 240 L 1806 239 L 1807 240 L 1807 243 L 1809 244 L 1809 241 L 1808 241 L 1806 238 L 1806 232 L 1807 231 L 1807 217 L 1806 216 L 1806 210 L 1805 209 L 1805 206 L 1802 200 L 1802 198 L 1800 194 L 1798 192 L 1797 189 L 1790 181 L 1790 180 L 1788 179 Z
M 714 187 L 712 189 L 712 190 L 708 193 L 708 194 L 704 198 L 704 199 L 700 203 L 700 204 L 695 210 L 695 212 L 693 214 L 690 220 L 690 222 L 686 229 L 686 233 L 684 237 L 684 240 L 683 241 L 683 245 L 682 246 L 682 268 L 683 269 L 683 273 L 684 274 L 684 276 L 686 280 L 686 283 L 692 295 L 699 303 L 699 304 L 701 306 L 702 306 L 704 308 L 704 309 L 707 310 L 711 314 L 716 316 L 718 318 L 720 319 L 722 319 L 725 321 L 730 322 L 731 323 L 734 323 L 735 324 L 740 324 L 741 325 L 749 325 L 750 326 L 759 326 L 760 325 L 767 325 L 768 324 L 775 324 L 776 323 L 780 323 L 788 319 L 791 319 L 792 318 L 794 318 L 798 315 L 800 315 L 810 309 L 812 310 L 812 313 L 811 314 L 811 319 L 810 320 L 809 325 L 836 325 L 839 319 L 839 316 L 840 315 L 840 310 L 841 309 L 841 307 L 842 306 L 842 303 L 844 299 L 844 295 L 845 294 L 846 287 L 847 286 L 847 284 L 849 280 L 849 275 L 850 274 L 850 271 L 851 270 L 851 268 L 853 264 L 854 255 L 855 254 L 855 252 L 856 251 L 856 248 L 857 247 L 857 244 L 858 243 L 858 217 L 857 216 L 857 212 L 854 206 L 853 201 L 851 197 L 849 195 L 849 193 L 846 190 L 844 186 L 835 177 L 834 177 L 831 174 L 830 174 L 825 170 L 823 170 L 814 165 L 811 165 L 808 163 L 805 163 L 804 162 L 800 162 L 799 161 L 793 161 L 792 160 L 773 160 L 772 161 L 765 161 L 764 162 L 757 163 L 753 165 L 750 165 L 743 169 L 741 169 L 735 172 L 733 174 L 730 175 L 728 177 L 724 179 L 715 187 Z
M 806 192 L 808 194 L 811 195 L 815 199 L 816 199 L 822 206 L 822 207 L 824 209 L 827 215 L 827 217 L 829 221 L 829 226 L 830 227 L 830 240 L 829 241 L 829 246 L 828 247 L 828 250 L 827 251 L 827 253 L 825 256 L 825 258 L 823 262 L 821 264 L 820 267 L 817 270 L 817 271 L 808 281 L 807 281 L 803 285 L 799 287 L 796 290 L 794 290 L 788 294 L 786 294 L 785 295 L 783 295 L 782 296 L 780 296 L 776 298 L 773 298 L 772 299 L 748 299 L 747 298 L 744 298 L 743 297 L 738 296 L 735 294 L 733 294 L 731 292 L 727 290 L 717 280 L 717 279 L 715 277 L 712 271 L 712 269 L 710 265 L 710 262 L 709 261 L 709 245 L 710 244 L 710 240 L 711 239 L 711 237 L 712 236 L 713 231 L 717 223 L 719 221 L 720 218 L 724 214 L 724 213 L 734 203 L 735 203 L 739 199 L 742 198 L 744 196 L 756 190 L 758 190 L 762 188 L 765 188 L 766 187 L 769 187 L 770 186 L 788 186 L 789 187 L 792 187 L 796 189 L 799 189 L 800 190 L 802 190 Z
M 1192 121 L 1190 122 L 1190 124 L 1189 125 L 1189 129 L 1188 130 L 1188 132 L 1186 136 L 1186 139 L 1185 140 L 1184 147 L 1183 148 L 1183 150 L 1181 154 L 1181 157 L 1180 158 L 1180 162 L 1179 163 L 1179 165 L 1178 166 L 1178 168 L 1176 172 L 1176 176 L 1175 177 L 1175 179 L 1173 183 L 1173 186 L 1172 187 L 1171 194 L 1170 195 L 1170 197 L 1168 201 L 1168 204 L 1167 205 L 1167 209 L 1166 210 L 1166 212 L 1164 216 L 1164 219 L 1163 220 L 1162 227 L 1160 231 L 1160 234 L 1159 235 L 1158 242 L 1157 243 L 1157 245 L 1155 249 L 1155 252 L 1154 253 L 1154 259 L 1153 260 L 1153 276 L 1154 277 L 1154 282 L 1155 283 L 1155 286 L 1158 292 L 1158 294 L 1161 298 L 1162 301 L 1173 313 L 1174 313 L 1182 319 L 1184 319 L 1189 322 L 1191 322 L 1195 324 L 1199 324 L 1200 325 L 1236 325 L 1236 323 L 1237 322 L 1237 319 L 1238 318 L 1238 315 L 1239 314 L 1239 311 L 1240 310 L 1240 307 L 1241 306 L 1241 303 L 1242 302 L 1242 300 L 1241 299 L 1209 299 L 1208 298 L 1205 298 L 1195 293 L 1187 285 L 1186 282 L 1183 278 L 1183 275 L 1182 274 L 1182 271 L 1181 270 L 1181 257 L 1182 256 L 1182 253 L 1183 252 L 1183 248 L 1184 247 L 1184 245 L 1186 241 L 1186 238 L 1187 237 L 1187 233 L 1188 232 L 1188 230 L 1189 229 L 1189 227 L 1191 223 L 1191 220 L 1192 219 L 1192 215 L 1193 214 L 1193 211 L 1195 207 L 1195 204 L 1196 203 L 1196 199 L 1197 198 L 1197 195 L 1198 194 L 1198 192 L 1200 190 L 1278 190 L 1279 189 L 1279 187 L 1281 183 L 1281 180 L 1282 179 L 1282 177 L 1283 176 L 1283 174 L 1285 170 L 1285 166 L 1286 165 L 1285 164 L 1269 164 L 1268 165 L 1239 165 L 1238 164 L 1221 164 L 1220 165 L 1210 165 L 1209 164 L 1207 164 L 1206 163 L 1207 162 L 1207 159 L 1209 155 L 1209 152 L 1210 151 L 1210 147 L 1211 146 L 1211 144 L 1213 140 L 1214 133 L 1216 129 L 1217 122 L 1216 121 Z
M 997 121 L 978 121 L 977 122 L 960 122 L 959 123 L 952 124 L 948 126 L 945 126 L 938 130 L 936 130 L 931 134 L 928 135 L 925 138 L 922 139 L 917 144 L 916 144 L 907 153 L 907 154 L 903 158 L 903 159 L 897 166 L 888 184 L 888 186 L 886 190 L 886 193 L 884 197 L 884 200 L 882 204 L 882 209 L 881 210 L 881 213 L 880 214 L 880 216 L 878 220 L 878 224 L 877 225 L 876 232 L 875 233 L 875 235 L 873 239 L 873 244 L 871 248 L 871 251 L 869 255 L 869 259 L 868 260 L 868 263 L 867 264 L 867 266 L 866 267 L 866 270 L 864 274 L 864 279 L 863 280 L 863 282 L 862 283 L 862 285 L 860 289 L 860 294 L 859 295 L 859 298 L 857 301 L 857 304 L 856 305 L 856 308 L 855 309 L 855 313 L 854 314 L 854 316 L 853 317 L 853 320 L 851 324 L 852 325 L 878 325 L 879 324 L 879 322 L 880 321 L 880 317 L 881 316 L 881 314 L 883 310 L 883 307 L 884 306 L 885 299 L 887 295 L 887 292 L 888 291 L 889 284 L 891 280 L 891 277 L 892 276 L 892 273 L 893 272 L 894 265 L 896 261 L 896 258 L 897 257 L 897 254 L 898 253 L 898 249 L 899 248 L 899 246 L 901 242 L 901 239 L 902 238 L 903 231 L 905 227 L 905 224 L 906 223 L 906 219 L 907 218 L 908 211 L 910 207 L 910 204 L 911 203 L 911 199 L 912 198 L 912 196 L 914 194 L 980 194 L 982 192 L 982 188 L 983 187 L 984 180 L 986 176 L 986 173 L 988 172 L 987 170 L 987 168 L 930 168 L 929 167 L 937 159 L 938 159 L 941 156 L 942 156 L 944 154 L 946 154 L 948 152 L 952 150 L 955 150 L 956 149 L 959 149 L 960 148 L 964 148 L 965 147 L 992 147 L 993 146 L 993 144 L 995 140 L 995 136 L 996 135 L 996 130 L 998 126 L 998 122 Z
M 1844 120 L 1842 124 L 1842 127 L 1841 128 L 1841 131 L 1840 132 L 1840 136 L 1839 137 L 1839 140 L 1838 141 L 1838 144 L 1837 145 L 1837 149 L 1835 153 L 1835 157 L 1834 158 L 1834 161 L 1832 165 L 1832 168 L 1831 169 L 1831 173 L 1830 174 L 1830 177 L 1828 181 L 1828 184 L 1827 185 L 1827 188 L 1826 189 L 1826 193 L 1824 197 L 1824 200 L 1823 201 L 1823 204 L 1822 205 L 1822 209 L 1821 210 L 1821 213 L 1820 214 L 1820 216 L 1819 217 L 1819 220 L 1818 221 L 1818 224 L 1817 225 L 1817 230 L 1815 234 L 1815 237 L 1813 241 L 1813 245 L 1812 246 L 1812 249 L 1811 250 L 1811 253 L 1810 254 L 1810 259 L 1809 260 L 1809 275 L 1810 276 L 1810 280 L 1811 281 L 1811 284 L 1812 285 L 1812 287 L 1813 288 L 1814 293 L 1817 297 L 1818 300 L 1821 303 L 1821 304 L 1831 314 L 1834 315 L 1839 319 L 1841 319 L 1849 323 L 1852 323 L 1853 324 L 1858 324 L 1859 325 L 1890 325 L 1891 324 L 1891 321 L 1892 320 L 1892 317 L 1893 316 L 1893 313 L 1894 312 L 1894 309 L 1895 308 L 1896 299 L 1865 299 L 1864 298 L 1861 298 L 1854 294 L 1852 294 L 1848 290 L 1847 290 L 1846 288 L 1842 284 L 1841 281 L 1839 279 L 1837 275 L 1837 270 L 1836 269 L 1836 258 L 1837 257 L 1837 250 L 1838 249 L 1838 246 L 1840 242 L 1840 239 L 1841 238 L 1841 235 L 1842 234 L 1842 230 L 1844 226 L 1844 223 L 1845 222 L 1845 219 L 1846 218 L 1846 214 L 1847 213 L 1847 210 L 1848 209 L 1848 207 L 1849 206 L 1849 203 L 1850 202 L 1850 199 L 1851 198 L 1851 193 L 1853 189 L 1924 189 L 1925 188 L 1925 185 L 1926 184 L 1926 180 L 1927 179 L 1927 176 L 1928 175 L 1928 172 L 1929 171 L 1930 164 L 1929 163 L 1860 163 L 1859 162 L 1860 161 L 1861 154 L 1862 153 L 1862 151 L 1863 150 L 1863 147 L 1864 146 L 1864 141 L 1865 140 L 1865 138 L 1866 137 L 1866 134 L 1868 130 L 1868 126 L 1869 125 L 1869 120 Z
M 675 120 L 575 120 L 574 121 L 567 121 L 566 122 L 563 122 L 562 123 L 559 123 L 558 124 L 556 124 L 555 125 L 550 126 L 538 132 L 536 134 L 532 136 L 528 140 L 527 140 L 526 142 L 522 145 L 522 146 L 518 150 L 516 154 L 513 157 L 513 159 L 508 168 L 508 173 L 507 174 L 507 177 L 506 178 L 506 194 L 507 195 L 508 202 L 510 205 L 510 207 L 512 209 L 514 214 L 517 217 L 517 218 L 520 221 L 521 221 L 522 223 L 523 223 L 529 228 L 533 230 L 535 230 L 538 232 L 543 233 L 544 234 L 551 234 L 552 235 L 615 235 L 616 234 L 618 234 L 619 235 L 624 235 L 625 236 L 627 236 L 635 240 L 641 247 L 643 251 L 643 253 L 644 254 L 644 267 L 643 268 L 643 271 L 642 272 L 642 274 L 641 276 L 639 278 L 637 282 L 630 289 L 629 289 L 627 291 L 626 291 L 622 294 L 620 294 L 616 296 L 613 296 L 612 297 L 487 297 L 485 299 L 485 302 L 483 306 L 483 310 L 482 311 L 482 314 L 481 315 L 481 319 L 480 320 L 480 325 L 607 325 L 608 324 L 614 324 L 615 323 L 619 323 L 627 319 L 630 319 L 634 317 L 636 315 L 638 315 L 640 313 L 641 313 L 649 306 L 650 306 L 653 303 L 654 301 L 655 301 L 655 300 L 662 292 L 662 290 L 664 288 L 667 282 L 667 280 L 668 279 L 668 277 L 670 273 L 670 270 L 671 269 L 671 248 L 670 247 L 670 244 L 669 243 L 668 238 L 665 232 L 662 229 L 661 226 L 655 220 L 654 220 L 648 215 L 640 211 L 638 211 L 637 210 L 633 210 L 632 209 L 627 209 L 626 208 L 553 208 L 552 207 L 550 207 L 544 204 L 537 197 L 535 193 L 534 188 L 533 187 L 533 180 L 534 179 L 534 176 L 537 170 L 537 168 L 539 166 L 539 165 L 549 155 L 554 153 L 558 150 L 561 150 L 562 149 L 565 149 L 566 148 L 570 148 L 571 147 L 670 147 L 671 146 L 671 141 L 672 140 L 672 137 L 674 133 L 674 129 L 675 128 L 675 124 L 676 123 L 676 121 Z
M 333 132 L 331 134 L 328 135 L 326 137 L 321 139 L 311 148 L 310 148 L 296 163 L 296 164 L 290 172 L 288 177 L 286 179 L 286 181 L 282 188 L 281 193 L 279 196 L 279 198 L 277 202 L 277 206 L 276 207 L 276 212 L 275 213 L 275 220 L 274 221 L 274 237 L 275 238 L 275 244 L 276 245 L 277 254 L 278 255 L 279 260 L 281 263 L 282 268 L 286 276 L 288 278 L 289 281 L 294 287 L 294 288 L 305 300 L 306 300 L 311 305 L 315 307 L 318 310 L 320 310 L 323 313 L 327 315 L 329 315 L 336 319 L 339 319 L 340 320 L 342 320 L 343 321 L 345 321 L 349 323 L 353 323 L 354 324 L 363 324 L 364 325 L 434 325 L 435 324 L 435 319 L 436 318 L 436 309 L 437 308 L 437 301 L 438 300 L 438 298 L 437 297 L 364 297 L 363 296 L 354 295 L 348 292 L 346 292 L 340 289 L 338 287 L 335 286 L 332 283 L 331 283 L 322 275 L 322 274 L 315 266 L 312 260 L 310 258 L 310 256 L 306 249 L 306 245 L 305 244 L 305 241 L 304 240 L 304 237 L 303 236 L 303 216 L 304 215 L 304 211 L 305 210 L 306 203 L 315 185 L 317 183 L 319 179 L 324 174 L 324 173 L 326 172 L 329 168 L 330 168 L 334 164 L 337 163 L 340 160 L 345 158 L 347 156 L 351 154 L 356 153 L 359 151 L 361 151 L 362 150 L 367 150 L 368 149 L 373 149 L 374 148 L 445 148 L 447 144 L 447 136 L 448 135 L 448 124 L 449 122 L 447 120 L 378 120 L 377 121 L 367 121 L 366 122 L 362 122 L 361 123 L 358 123 L 357 124 L 350 125 L 342 129 L 340 129 L 337 131 L 335 131 Z
M 181 132 L 179 134 L 174 136 L 172 138 L 168 140 L 165 143 L 164 143 L 159 148 L 158 148 L 156 150 L 156 151 L 154 152 L 152 154 L 152 155 L 147 160 L 147 161 L 143 165 L 143 166 L 139 171 L 138 174 L 136 176 L 130 188 L 130 190 L 129 191 L 129 193 L 128 194 L 128 196 L 126 200 L 126 203 L 125 204 L 125 208 L 124 209 L 124 213 L 123 214 L 123 222 L 122 223 L 122 232 L 123 233 L 123 241 L 124 242 L 124 246 L 125 247 L 125 252 L 126 253 L 126 256 L 129 262 L 130 267 L 135 277 L 137 279 L 138 282 L 144 289 L 144 290 L 156 302 L 157 302 L 160 305 L 164 307 L 167 310 L 167 311 L 169 310 L 174 314 L 176 315 L 178 315 L 185 319 L 188 319 L 189 320 L 191 320 L 195 322 L 198 322 L 199 323 L 204 323 L 205 324 L 214 324 L 215 325 L 286 325 L 287 324 L 287 319 L 288 318 L 288 302 L 289 301 L 289 298 L 288 297 L 214 297 L 213 296 L 208 296 L 207 295 L 200 294 L 195 291 L 193 291 L 189 289 L 187 287 L 184 286 L 178 281 L 177 281 L 168 272 L 168 271 L 164 267 L 163 264 L 159 259 L 159 257 L 155 250 L 155 248 L 154 247 L 154 243 L 152 239 L 152 233 L 151 232 L 151 221 L 152 220 L 152 214 L 153 213 L 153 210 L 154 209 L 154 205 L 157 199 L 157 197 L 159 194 L 159 192 L 163 187 L 163 185 L 167 181 L 168 178 L 170 177 L 171 175 L 184 163 L 185 163 L 190 159 L 200 154 L 202 154 L 205 152 L 207 152 L 210 150 L 215 150 L 216 149 L 222 149 L 223 148 L 295 148 L 296 147 L 296 140 L 297 139 L 297 128 L 298 127 L 298 121 L 297 120 L 227 120 L 226 121 L 215 121 L 214 122 L 209 122 L 208 123 L 205 123 L 201 125 L 198 125 L 197 126 L 192 127 L 185 131 L 183 131 Z
M 1506 121 L 1499 127 L 1497 131 L 1497 138 L 1496 139 L 1496 143 L 1495 144 L 1495 147 L 1494 148 L 1494 151 L 1493 152 L 1493 155 L 1492 156 L 1491 163 L 1489 167 L 1489 170 L 1488 171 L 1488 175 L 1487 176 L 1487 179 L 1485 183 L 1485 186 L 1484 187 L 1484 190 L 1483 191 L 1483 195 L 1482 196 L 1482 199 L 1481 200 L 1481 202 L 1480 203 L 1480 206 L 1479 207 L 1479 212 L 1478 213 L 1478 216 L 1476 220 L 1476 223 L 1475 224 L 1475 227 L 1474 228 L 1474 232 L 1473 233 L 1472 240 L 1470 244 L 1470 249 L 1469 250 L 1468 257 L 1466 261 L 1466 265 L 1465 266 L 1465 270 L 1464 271 L 1464 274 L 1463 275 L 1463 277 L 1462 278 L 1462 281 L 1461 282 L 1461 287 L 1460 288 L 1460 290 L 1459 291 L 1459 294 L 1457 298 L 1456 307 L 1455 308 L 1455 311 L 1454 312 L 1454 314 L 1453 315 L 1453 318 L 1452 319 L 1452 325 L 1478 325 L 1479 324 L 1479 321 L 1481 317 L 1481 312 L 1482 311 L 1482 308 L 1483 307 L 1483 304 L 1484 303 L 1484 300 L 1485 299 L 1485 296 L 1486 295 L 1486 290 L 1488 286 L 1488 283 L 1489 282 L 1489 279 L 1490 278 L 1490 274 L 1491 273 L 1491 270 L 1492 269 L 1492 267 L 1493 266 L 1493 263 L 1494 262 L 1495 253 L 1496 252 L 1496 249 L 1497 248 L 1497 245 L 1498 244 L 1498 241 L 1499 240 L 1499 235 L 1500 234 L 1500 232 L 1502 228 L 1502 225 L 1503 224 L 1503 220 L 1504 219 L 1504 216 L 1506 212 L 1506 209 L 1507 208 L 1507 205 L 1508 204 L 1508 199 L 1509 198 L 1509 195 L 1511 191 L 1511 188 L 1512 187 L 1512 183 L 1513 182 L 1513 179 L 1515 175 L 1516 168 L 1517 167 L 1519 169 L 1519 171 L 1520 172 L 1521 170 L 1521 167 L 1519 165 L 1518 167 L 1517 166 L 1518 159 L 1520 156 L 1522 159 L 1522 162 L 1523 163 L 1524 170 L 1525 171 L 1525 173 L 1527 177 L 1527 180 L 1528 181 L 1528 183 L 1530 187 L 1530 190 L 1532 194 L 1532 197 L 1533 198 L 1533 200 L 1534 201 L 1534 203 L 1536 207 L 1536 211 L 1537 212 L 1537 215 L 1538 216 L 1538 218 L 1539 219 L 1539 221 L 1541 225 L 1541 229 L 1542 230 L 1542 232 L 1543 233 L 1543 235 L 1545 239 L 1546 246 L 1547 247 L 1547 249 L 1548 250 L 1548 252 L 1550 256 L 1550 261 L 1551 262 L 1551 264 L 1552 265 L 1552 267 L 1554 271 L 1555 278 L 1556 279 L 1556 281 L 1558 285 L 1558 288 L 1559 289 L 1560 296 L 1561 297 L 1561 299 L 1563 303 L 1563 307 L 1564 308 L 1564 310 L 1566 314 L 1568 316 L 1568 317 L 1570 319 L 1571 319 L 1573 321 L 1577 323 L 1579 323 L 1580 324 L 1595 324 L 1596 323 L 1598 323 L 1606 318 L 1610 310 L 1610 306 L 1612 302 L 1612 299 L 1613 298 L 1613 296 L 1614 295 L 1614 292 L 1615 291 L 1615 287 L 1616 286 L 1616 284 L 1617 283 L 1617 280 L 1619 276 L 1619 272 L 1620 271 L 1620 269 L 1621 268 L 1621 265 L 1623 261 L 1623 258 L 1624 257 L 1624 253 L 1625 252 L 1625 250 L 1627 246 L 1627 243 L 1628 242 L 1628 238 L 1629 237 L 1629 235 L 1631 231 L 1631 228 L 1632 227 L 1632 223 L 1633 222 L 1633 220 L 1634 219 L 1634 216 L 1635 215 L 1635 213 L 1637 209 L 1637 205 L 1638 204 L 1638 202 L 1639 201 L 1639 198 L 1641 194 L 1641 190 L 1642 189 L 1642 186 L 1643 185 L 1643 183 L 1645 179 L 1646 172 L 1647 171 L 1647 169 L 1648 168 L 1648 165 L 1650 161 L 1650 157 L 1651 156 L 1651 154 L 1652 153 L 1652 151 L 1654 147 L 1654 144 L 1655 143 L 1655 139 L 1656 138 L 1656 136 L 1657 135 L 1657 133 L 1659 129 L 1659 125 L 1661 122 L 1661 120 L 1660 119 L 1635 119 L 1632 123 L 1632 125 L 1631 126 L 1631 129 L 1630 130 L 1630 134 L 1629 135 L 1629 137 L 1627 141 L 1627 144 L 1626 145 L 1626 149 L 1625 150 L 1625 152 L 1624 153 L 1624 155 L 1622 159 L 1622 162 L 1621 163 L 1621 167 L 1620 168 L 1620 170 L 1618 174 L 1618 177 L 1617 178 L 1617 182 L 1616 183 L 1616 185 L 1614 189 L 1614 192 L 1612 196 L 1612 200 L 1611 201 L 1611 203 L 1610 204 L 1610 207 L 1608 211 L 1608 215 L 1606 219 L 1606 222 L 1604 226 L 1604 229 L 1603 230 L 1602 237 L 1600 241 L 1600 244 L 1599 245 L 1599 249 L 1598 250 L 1598 253 L 1597 254 L 1597 256 L 1595 260 L 1595 264 L 1594 265 L 1594 268 L 1592 272 L 1592 275 L 1590 278 L 1588 274 L 1587 274 L 1587 277 L 1590 281 L 1590 284 L 1588 288 L 1586 287 L 1586 285 L 1585 284 L 1585 281 L 1583 277 L 1583 273 L 1582 272 L 1582 270 L 1581 269 L 1581 267 L 1579 263 L 1579 260 L 1578 259 L 1578 256 L 1577 255 L 1577 253 L 1575 249 L 1575 246 L 1574 245 L 1573 238 L 1572 237 L 1572 235 L 1570 231 L 1569 224 L 1568 223 L 1568 221 L 1566 217 L 1565 210 L 1564 209 L 1564 207 L 1562 203 L 1562 200 L 1561 199 L 1560 192 L 1559 191 L 1559 189 L 1557 185 L 1557 182 L 1556 181 L 1556 179 L 1555 178 L 1555 176 L 1553 172 L 1552 165 L 1550 161 L 1550 158 L 1548 154 L 1548 151 L 1547 150 L 1547 147 L 1545 143 L 1545 140 L 1544 139 L 1543 134 L 1541 130 L 1534 123 L 1530 121 L 1528 121 L 1524 119 L 1513 119 L 1512 120 L 1509 120 L 1508 121 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/>
</svg>
</a></h1>
      </div>
      <nav class="sidenav" aria-label="Sections">
        <a href="#overview" data-nav="overview" title="Overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1.5"></rect><rect x="14" y="3" width="7" height="5" rx="1.5"></rect><rect x="14" y="12" width="7" height="9" rx="1.5"></rect><rect x="3" y="16" width="7" height="5" rx="1.5"></rect></svg><span class="sr-only-collapse">Overview</span></a>
        <a href="#activity" data-nav="activity" title="Activity"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"></path></svg><span class="sr-only-collapse">Activity</span></a>
        <a href="#policy" data-nav="policy" title="Policy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z"></path></svg><span class="sr-only-collapse">Policy</span></a>
        <a href="#rules" data-nav="rules" title="Rules"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"></path><path d="M15 3v4h4"></path><path d="M9 12h6M9 16h4"></path></svg><span class="sr-only-collapse">Rules</span></a>
        <a href="#integrations" data-nav="integrations" title="Integrations"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5"></path></svg><span class="sr-only-collapse">Integrations</span></a>
        <a href="#settings" data-nav="settings" title="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h10M18 8h2M4 16h2M10 16h10"></path><circle cx="16" cy="8" r="2.2"></circle><circle cx="8" cy="16" r="2.2"></circle></svg><span class="sr-only-collapse">Settings</span></a>
      </nav>
      <div class="sidebar-foot">
        <div class="sidebar-links">
          <a href="https://github.com/kenryu42/cc-safety-net" target="_blank" rel="noopener">GitHub</a>
          <a href="https://ccsafetynet.com/docs" target="_blank" rel="noopener">Documentation</a>
        </div>
      </div>
    </aside>
    <div class="content">
      <header class="topbar" id="topbar">
        <div class="topbar-row">
          <h2 class="topbar-title" id="topbar-title">Overview</h2>
          <label class="view-search topbar-search" data-search-view="activity" hidden>
            <span class="sr-only">Filter activity</span>
            <input type="search" id="activity-search" autocomplete="off" placeholder="Filter by rule or command">
          </label>
          <label class="view-search topbar-search" data-search-view="policy" hidden>
            <span class="sr-only">Search all protections</span>
            <input type="search" id="policy-search" autocomplete="off" placeholder="Filter by name, category, or rule ID">
          </label>
          <div class="topbar-actions">
            <div class="app-status" id="app-status" role="status" aria-live="polite">Loading...</div>
            <button type="button" class="dirty-chip" id="dirty-chip" hidden>Unsaved policy changes · Review</button>
          </div>
        </div>
      </header>
      <main>
        <div class="protection-banner" id="protection-banner" role="alert" hidden></div>
        <div class="status" id="status" role="status" aria-live="polite"></div>

        <section class="view" data-view="overview">
          <div class="view-head">
            <p class="panel-sub muted">What CC Safety Net has been doing on this machine.</p>
          </div>
          <div class="status health-strip" id="health-strip" hidden></div>
          <p class="tiles-window" id="overview-window"></p>
          <div class="tiles" id="overview-tiles"></div>
          <div class="star-row" id="star-row" hidden>
            <p class="star-pitch"><span id="star-pitch-text"></span> <span class="star-mechanism" id="star-mechanism" hidden>One click via your GitHub CLI. No redirect.</span></p>
            <span id="star-slot"></span>
          </div>
          <section class="panel" id="protection-card" hidden></section>
          <div class="dual-panels">
            <section class="panel">
              <div class="panel-head">
                <div class="panel-title">
                  <h2>Top blocked commands</h2>
                </div>
              </div>
              <div id="top-commands"></div>
            </section>
            <section class="panel">
              <div class="panel-head">
                <div class="panel-title">
                  <h2>Top blocked rules</h2>
                </div>
              </div>
              <div id="top-rules"></div>
            </section>
          </div>
          <button type="button" class="guard-errors" id="guard-errors" hidden></button>
        </section>

        <section class="view" data-view="activity" hidden>
          <div class="view-head">
            <p class="panel-sub muted">Audited commands from the local log, newest first. Commands are secret-redacted at write time.</p>
          </div>
          <section class="panel">
            <div class="activity-controls">
              <div class="activity-controls-row">
                <label class="activity-days"><span>Window</span>
                  <select id="activity-days"></select>
                </label>
                <button type="button" class="icon-button activity-refresh" id="activity-refresh" aria-label="Refresh activity" title="Refresh activity"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg></button>
              </div>
              <div class="chip-row" id="activity-decision" role="group" aria-label="Filter by decision"></div>
              <div class="chip-row" id="activity-agents" role="group" aria-label="Filter by agent"></div>
              <div class="chip-row" id="activity-command-filter"></div>
            </div>
            <div id="activity-feed"></div>
            <p class="muted activity-count" id="activity-count"></p>
          </section>
        </section>

        <section class="view" data-view="policy" hidden>
          <div class="view-head">
            <p class="panel-sub muted">Choose what CC Safety Net blocks. Changes apply after you save.</p>
          </div>
          <div class="policy-savebar" id="policy-savebar" hidden><span>Unsaved changes</span><div class="savebar-actions"><button type="button" id="discard-changes">Discard</button><button class="primary" id="save">Save</button></div></div>
          <div class="recovery" id="recovery" hidden>
            <div>
              <strong>Policy repair available</strong>
              <p class="muted">Repair writes canonical JSON by preserving valid settings. If the JSON cannot be parsed, defaults are restored.</p>
            </div>
            <button class="primary" id="repair" type="button">Repair</button>
          </div>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2 id="tester-label">Test a command</h2>
                <p class="panel-sub muted">Paste a shell command to see whether it is blocked under your current unsaved edits. Custom rulebook rules are enforced here too.</p>
              </div>
            </div>
            <div class="tester-row">
              <input type="text" id="tester-input" autocomplete="off" spellcheck="false" placeholder="Paste a shell command and press Enter" aria-labelledby="tester-label">
              <button type="button" id="tester-run">Test</button>
            </div>
            <div id="tester-result" class="status" hidden></div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Safety preset</h2>
                <p class="panel-sub muted">Choose inherited protection defaults, then customize only what this workspace needs.</p>
              </div>
            </div>
            <div id="safety-preset-status" class="preset-status"></div>
            <div id="environment-overrides" class="status" hidden></div>
            <div class="grid" id="safety-level"></div>
            <div class="field field-toggle">
              <button class="panel-toggle" type="button" aria-expanded="false" aria-controls="safety-overrides-content"><span class="panel-chevron" aria-hidden="true"></span><span>Advanced overrides</span></button>
            </div>
            <div class="foldable-field-content" id="safety-overrides-content" hidden>
              <p class="muted">Inherit from the selected level unless a capability needs an explicit exception.</p>
              <div class="grid" id="safety-overrides"></div>
            </div>
            <div class="field">
              <span>Workflow</span>
              <small>Workflow exceptions are separate from safety level.</small>
            </div>
            <div class="grid" id="workflow"></div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Destructive Command Protection</h2>
                <p class="panel-sub muted" id="destructive-command-summary"></p>
              </div>
              <button type="button" id="reset-rule-customizations" class="panel-head-action">Restore defaults</button>
            </div>
            <div id="destructive-command"></div>
          </section>
          <section class="panel">
            <header class="panel-head">
              <div class="panel-title">
                <h2>Secret Protection</h2>
                <p class="panel-sub muted" id="secret-summary">Default sensitive paths and coding CLI credential locations can be disabled individually. Deny paths are blocked while Secret protection is on.</p>
              </div>
              <button type="button" id="reset-secret-customizations" class="panel-head-action">Restore defaults</button>
            </header>
            <div id="secret"></div>
          </section>
        </section>

        <section class="view" data-view="rules" hidden>
          <div class="view-head">
            <p class="panel-sub muted">Custom rulebook rules enforced on this machine, and a prompt to hand rule authoring to your coding agent.</p>
          </div>
          <section class="panel" id="rules-composer-panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Create a rule</h2>
                <p class="panel-sub muted">CC Safety Net never writes rulebooks from here. Copy the prompt and paste it into your coding agent.</p>
              </div>
            </div>
            <div class="field">
              <span>Scope</span>
              <div class="chip-row" role="group" aria-label="Rule scope">
                <button type="button" class="chip" data-rules-scope="project" aria-pressed="true">Project</button>
                <button type="button" class="chip" data-rules-scope="user" aria-pressed="false">All projects</button>
              </div>
            </div>
            <div class="field" id="rules-project-path-field">
              <span id="rules-project-path-label">Project path</span>
              <div class="rules-path-row">
                <input type="text" id="rules-project-path" spellcheck="false" autocomplete="off" aria-labelledby="rules-project-path-label" aria-describedby="rules-project-path-hint">
                <button type="button" id="rules-choose-directory" hidden>Choose…</button>
              </div>
              <small id="rules-project-path-hint">Where the rulebook is written. Defaults to the directory this GUI was launched from.</small>
            </div>
            <div class="field">
              <span id="rules-composer-label">Request</span>
              <textarea id="rules-composer-input" spellcheck="false" placeholder="Describe the custom rules you want..." aria-labelledby="rules-composer-label" aria-describedby="rules-composer-hint"></textarea>
              <small id="rules-composer-hint">Rules match a command, an optional subcommand, and exact arguments - not file paths or patterns.</small>
            </div>
            <div class="field">
              <span>Examples</span>
              <div class="chip-row">
                <button type="button" class="chip" data-rules-example="read my package.json and suggest blocking rules">Suggest rules</button>
                <button type="button" class="chip" data-rules-example="set up rules to block all terraform destroy commands">Block a command</button>
                <button type="button" class="chip" data-rules-example="verify my rules and fix any errors">Verify rules</button>
              </div>
            </div>
            <div class="rules-composer-actions">
              <button type="button" class="primary" id="rules-copy-prompt">Copy prompt</button>
            </div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Rulebooks</h2>
                <p class="panel-sub muted">Read-only. Rules are shown as enforced, after overrides.</p>
              </div>
              <button type="button" class="icon-button rules-refresh" id="rules-refresh" aria-label="Refresh rules" title="Refresh rules"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg></button>
            </div>
            <div id="rules-list"><p class="empty">Loading rules…</p></div>
          </section>
          <section class="panel" id="rules-diagnostics-panel" hidden>
            <div class="panel-head">
              <div class="panel-title">
                <h2>Diagnostics</h2>
                <p class="panel-sub muted">Errors mean a rulebook was dropped and its rules are not enforced.</p>
              </div>
            </div>
            <div id="rules-diagnostics"></div>
          </section>
        </section>

        <section class="view" data-view="settings" hidden>
          <div class="view-head">
            <p class="panel-sub muted">Appearance, file locations, and maintenance.</p>
          </div>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Appearance</h2>
                <p class="panel-sub muted">Theme preference is stored in this browser.</p>
              </div>
              <button type="button" id="theme-toggle"></button>
            </div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Files</h2>
                <p class="panel-sub muted">Where CC Safety Net reads and writes on this machine.</p>
              </div>
            </div>
            <div class="info-rows">
              <div class="info-row"><span>Policy file</span><code id="policy-path"></code></div>
              <div class="info-row"><span>Audit logs</span><code id="logs-path"></code></div>
            </div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Audit log retention</h2>
                <p class="panel-sub muted">How long decisions are kept before the sweep deletes them. Every analyzed command is recorded, so a long window grows the log.</p>
              </div>
            </div>
            <label class="retention-row">
              <span>Keep for</span>
              <input type="number" id="retention-days" min="1" max="365" step="1" inputmode="numeric" aria-describedby="retention-note">
              <span id="retention-unit">days</span>
            </label>
            <p class="muted retention-note" id="retention-note"></p>
          </section>
          <section class="panel">
            <div class="panel-head raw-json-head">
              <div class="panel-title">
                <h2>Policy JSON</h2>
                <p class="panel-sub muted" id="raw-source">Read-only mirror of the policy controls.</p>
              </div>
              <button class="icon-button" id="raw-copy" type="button" aria-label="Copy raw JSON to clipboard"></button>
            </div>
            <textarea id="raw" aria-label="Raw policy JSON" aria-describedby="raw-source" readonly></textarea>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Version</h2>
              </div>
            </div>
            <div class="info-rows">
              <div class="info-row"><code id="app-version"></code></div>
            </div>
          </section>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Danger zone</h2>
                <p class="panel-sub muted">Actions that discard saved configuration.</p>
              </div>
            </div>
            <div class="danger-row">
              <div>
                <strong>Reset policy</strong>
                <p class="muted">Restore the default policy JSON at the configured path.</p>
              </div>
              <button class="danger" id="reset">Reset</button>
            </div>
          </section>
        </section>

        <section class="view" data-view="integrations" hidden>
          <div class="view-head">
            <p class="panel-sub muted">Install or remove the cc-safety-net hook for each coding agent on this machine.</p>
          </div>
          <section class="panel">
            <div class="panel-head">
              <div class="panel-title">
                <h2>Agents</h2>
                <p class="panel-sub muted">Detected CLIs and hook status.</p>
              </div>
              <button type="button" class="icon-button integrations-refresh" id="integrations-refresh" aria-label="Refresh integrations" title="Refresh integrations"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg></button>
            </div>
            <div id="integrations-list"><p class="empty">Checking integrations…</p></div>
          </section>
          <section class="panel" id="integrations-system" hidden>
            <div class="panel-head">
              <div class="panel-title">
                <h2>System</h2>
                <p class="panel-sub muted">Runtime detected on this machine.</p>
              </div>
            </div>
            <div class="info-rows">
              <div class="info-row"><span>cc-safety-net</span><code id="integrations-pkg-version"></code></div>
              <div class="info-row"><span>Node.js</span><code id="integrations-node-version"></code></div>
              <div class="info-row"><span>Platform</span><code id="integrations-platform"></code></div>
            </div>
          </section>
        </section>
      </main>
      <footer class="app-foot">
        <a href="https://github.com/kenryu42/cc-safety-net" target="_blank" rel="noopener">GitHub</a>
        <a href="https://ccsafetynet.com/docs" target="_blank" rel="noopener">Documentation</a>
      </footer>
    </div>
  </div>
  <div class="rule-example-popover" id="rule-example-popover" popover="auto" role="dialog" aria-labelledby="rule-example-title" aria-describedby="rule-example-command">
    <span class="rule-example-label" id="rule-example-label">Blocked command example</span>
    <strong id="rule-example-title"></strong>
    <code id="rule-example-command"></code>
  </div>
  <dialog class="confirm-dialog" id="confirm-dialog" aria-labelledby="confirm-dialog-title" aria-describedby="confirm-dialog-body confirm-dialog-detail">
    <form method="dialog">
      <h2 id="confirm-dialog-title"></h2>
      <p class="muted" id="confirm-dialog-body"></p>
      <p class="dialog-detail"><code id="confirm-dialog-detail"></code></p>
      <div class="dialog-actions">
        <button type="submit" id="confirm-dialog-cancel" value="cancel">Cancel</button>
        <button type="submit" class="danger" id="confirm-dialog-confirm" value="confirm"></button>
      </div>
    </form>
  </dialog>
  <dialog class="confirm-dialog report-dialog" id="report-dialog" aria-labelledby="report-dialog-title" aria-describedby="report-dialog-body">
    <form method="dialog">
      <h2 id="report-dialog-title">Report false positive</h2>
      <p class="muted" id="report-dialog-body">This opens a prefilled GitHub issue form — it is public, and nothing is submitted until you submit it there. Paths were replaced with <code>&lt;project&gt;</code> and <code>~</code>; edit anything else you would rather not publish.</p>
      <label class="report-field"><span>Blocked command</span><textarea id="report-command" spellcheck="false"></textarea></label>
      <label class="report-field"><span>Audit log entry</span><textarea id="report-entry" spellcheck="false"></textarea></label>
      <div class="dialog-actions">
        <button type="submit" id="report-dialog-cancel" value="cancel">Cancel</button>
        <button type="submit" class="primary" id="report-dialog-open" value="report">Open GitHub form</button>
      </div>
    </form>
  </dialog>
  <script id="ccsn-data" type="application/json"></script>
  <script>
// src/engine/audit-display.ts
var formatRelativeTime = (value) => {
  const diff = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(diff))
    return "";
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0)
    return \`\${days}d ago\`;
  if (hours > 0)
    return \`\${hours}h ago\`;
  if (minutes > 0)
    return \`\${minutes}m ago\`;
  return "just now";
};
var commandSignature = (source) => {
  const tokens = (source ?? "").trim().split(/\\s+/).filter((token) => token && !/^[A-Za-z_][A-Za-z0-9_]*=/.test(token));
  const binary = tokens[0]?.split("/").pop();
  if (!binary)
    return null;
  const next = tokens[1];
  return next && /^[a-z][a-z0-9-]*$/.test(next) ? \`\${binary} \${next}\` : binary;
};
// src/integrations/catalog.ts
var catalog = [
  {
    id: "antigravity-cli",
    displayName: "Antigravity CLI",
    doctorOrder: 3,
    runtime: {
      order: 1,
      flags: ["-ac", "--agy-cli"],
      description: "Run as Antigravity CLI PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 2,
      flag: "--agy-cli",
      installLabel: "Antigravity CLI",
      helpTarget: "Antigravity CLI hook config",
      probeCommand: ["agy", "--version"]
    }
  },
  {
    id: "claude-code",
    displayName: "Claude Code",
    doctorOrder: 1,
    runtime: {
      order: 2,
      displayName: "Coding CLI",
      flags: ["-cc", "--coding-cli"],
      legacyFlags: ["--claude-code"],
      description: "Run as Coding CLI PreToolUse hook",
      legacyTopLevelFlags: ["-cc", "--claude-code"]
    },
    install: {
      order: 3,
      flag: "--claude-code",
      installLabel: "Claude Code",
      helpTarget: "Claude Code plugin",
      probeCommand: ["claude", "--version"]
    }
  },
  {
    id: "codex",
    displayName: "Codex",
    doctorOrder: 4,
    install: {
      order: 4,
      flag: "--codex",
      installLabel: "Codex",
      helpTarget: "Codex plugin",
      probeCommand: ["codex", "--version"]
    }
  },
  {
    id: "copilot-cli",
    displayName: "GitHub Copilot CLI",
    doctorOrder: 7,
    runtime: {
      order: 5,
      flags: ["-cp", "--copilot-cli"],
      description: "Run as GitHub Copilot CLI PreToolUse hook",
      legacyTopLevelFlags: ["-cp", "--copilot-cli"]
    },
    install: {
      order: 7,
      flag: "--copilot-cli",
      installLabel: "GitHub Copilot CLI",
      helpTarget: "GitHub Copilot CLI plugin",
      probeCommand: ["copilot", "--binary-version"]
    }
  },
  {
    id: "gemini-cli",
    displayName: "Gemini CLI",
    doctorOrder: 6,
    runtime: {
      order: 4,
      flags: ["-gc", "--gemini-cli"],
      description: "Run as Gemini CLI BeforeTool hook",
      legacyTopLevelFlags: ["-gc", "--gemini-cli"]
    },
    install: {
      order: 6,
      flag: "--gemini-cli",
      installLabel: "Gemini CLI",
      helpTarget: "Gemini CLI extension",
      probeCommand: ["gemini", "--version"]
    }
  },
  {
    id: "hermes-agent",
    displayName: "Hermes Agent",
    doctorOrder: 8,
    runtime: {
      order: 6,
      flags: ["-ha", "--hermes-agent"],
      description: "Run as Hermes Agent pre_tool_call hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 8,
      flag: "--hermes-agent",
      installLabel: "Hermes Agent",
      helpTarget: "Hermes Agent plugin",
      probeCommand: ["hermes", "--version"]
    }
  },
  {
    id: "kimi-code",
    displayName: "Kimi Code",
    doctorOrder: 9,
    runtime: {
      order: 7,
      flags: ["-kc", "--kimi-code"],
      description: "Run as Kimi Code PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 9,
      flag: "--kimi-code",
      installLabel: "Kimi Code",
      helpTarget: "Kimi Code hook config",
      probeCommand: ["kimi", "--version"]
    }
  },
  {
    id: "openclaw",
    displayName: "OpenClaw",
    doctorOrder: 10,
    install: {
      order: 10,
      flag: "--openclaw",
      installLabel: "OpenClaw",
      helpTarget: "OpenClaw plugin",
      probeCommand: ["openclaw", "--version"]
    }
  },
  {
    id: "opencode",
    displayName: "OpenCode",
    doctorOrder: 11,
    install: {
      order: 11,
      flag: "--opencode",
      installLabel: "OpenCode",
      helpTarget: "OpenCode plugin",
      probeCommand: ["opencode", "--version"]
    }
  },
  {
    id: "pi",
    displayName: "Pi",
    doctorOrder: 12,
    install: {
      order: 12,
      flag: "--pi",
      installLabel: "Pi",
      helpTarget: "Pi package",
      probeCommand: ["pi", "--version"]
    }
  },
  {
    id: "cursor",
    displayName: "Cursor",
    doctorOrder: 5,
    runtime: {
      order: 3,
      flags: ["-cu", "--cursor"],
      description: "Run as Cursor preToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 5,
      flag: "--cursor",
      installLabel: "Cursor",
      helpTarget: "Cursor hook config",
      probeCommand: ["cursor", "--version"]
    }
  },
  {
    id: "amp",
    displayName: "Amp Code",
    doctorOrder: 2,
    install: {
      order: 1,
      flag: "--amp",
      installLabel: "Amp Code",
      helpTarget: "Amp Code plugin",
      probeCommand: ["amp", "--version"]
    }
  }
];
var doctorIntegrationOrder = catalog.slice().sort((a, b) => a.doctorOrder - b.doctorOrder).map((integration) => integration.id);
var runtimeHookIntegrationMetadata = catalog.filter((integration) => ("runtime" in integration)).slice().sort((a, b) => a.runtime.order - b.runtime.order).map((integration) => ({
  id: integration.id,
  displayName: "displayName" in integration.runtime ? integration.runtime.displayName : integration.displayName,
  flags: integration.runtime.flags,
  legacyFlags: "legacyFlags" in integration.runtime ? integration.runtime.legacyFlags : [],
  description: integration.runtime.description,
  legacyTopLevelFlags: integration.runtime.legacyTopLevelFlags
}));
var installIntegrationMetadata = catalog.slice().sort((a, b) => a.install.order - b.install.order).map((integration) => ({ id: integration.id, ...integration.install })).map(({ order: _, ...integration }) => integration);
var integrationDisplayNames = Object.fromEntries(catalog.map((integration) => [integration.id, integration.displayName]));

// src/gui/frontend/main.ts
var token = JSON.parse(document.getElementById("ccsn-data")?.textContent ?? "").token;
var fallbackRepoUrl = "https://github.com/kenryu42/cc-safety-net";
var safetyLevels = {
  standard: [
    "Standard",
    "Blocks recognizable destructive commands and sensitive content access while allowing metadata-only sensitive-path checks. Recommended for normal coding."
  ],
  strict: [
    "Strict",
    "Standard, plus blocks dynamic or unparseable commands and metadata-only sensitive-path discovery. Occasional false positives on advanced shell."
  ],
  paranoid: [
    "Paranoid",
    "Strict, plus blocks rm -rf inside your project and interpreter one-liners. Expect friction; for untrusted agents or high-stakes repos."
  ]
};
var safetyLevelNames = ["standard", "strict", "paranoid"];
var safetyOverrides = {
  fail_closed: ["Fail closed", "Block commands the parser cannot fully understand."],
  paranoid_rm: ["Paranoid rm -rf checks", "Block non-temp rm -rf inside the project."],
  paranoid_interpreters: ["Paranoid interpreters", "Block interpreter one-liners."]
};
var capabilityNames = ["fail_closed", "paranoid_rm", "paranoid_interpreters"];
var rawCopyIcons = {
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"></path></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>'
};
var starIcons = {
  outline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>',
  filled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>'
};
var reportIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22v-7"></path></svg>';
var pathListIcons = {
  add: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>',
  remove: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M10 11v6M14 11v6"></path></svg>'
};
var state;
var draftPolicy;
var preview;
var previewRequestId = 0;
var dirty = false;
var searchActive = false;
var OVERVIEW_DAYS = 7;
var DEFAULT_RETENTION_DAYS = 30;
var MAX_RETENTION_DAYS = 365;
var overview = null;
var activity = null;
var knownRuleIds = new Set;
var activityFilters = { days: 7, decision: "all", agent: "all", query: "", command: "" };
var tierExpanded = new Map([
  ["enforced", false],
  ["normal", false],
  ["strict", false],
  ["paranoid", false]
]);
var searchCollapsedTiers = new Set;
var secretGroupExpanded = new Map;
var searchCollapsedSecretGroups = new Set;
var rawCopyResetTimer = null;
var feedCopyResetTimer = null;
var activityQueryTimer;
var renderedFeedEntries = [];
var suspects = new Set;
var activeStarContext = { starred: null, starCount: null, blockedTotal: 0 };
var integrations = null;
var integrationsRequested = false;
var integrationBusy = new Set;
var rulesData = null;
var rulesRequested = false;
var rulesScope = "project";
var pendingRuleFocus = null;
var directoryPickerFailed = false;
var api = (path, init = {}) => fetch(\`\${path}\${path.includes("?") ? "&" : "?"}token=\${encodeURIComponent(token)}\`, {
  ...init,
  headers: {
    "content-type": "application/json",
    "x-cc-safety-net-token": token,
    ...init.headers
  }
});
var requestJson = async (path, init) => {
  try {
    const response = await api(path, init);
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      data: text ? JSON.parse(text) : {},
      error: undefined
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      data: undefined,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
var errorText = (result) => result.error ?? (Array.isArray(result.data?.errors) && result.data.errors.length ? result.data.errors.join(\`
\`) : null) ?? result.data?.error ?? \`Request failed (status \${result.status}).\`;
var isWriteSuccess = (result) => result.ok && !(Array.isArray(result.data?.errors) && result.data.errors.length > 0);
var isPolicyState = (value) => !!value && !!value.policy && !!value.policy.safety && !!value.policy.workflow && !!value.policy.secret_protection && Array.isArray(value.destructiveCommandRules) && Array.isArray(value.secretPatterns) && (value.preview === null || !!value.preview) && Array.isArray(value.errors);
var qs = (id) => {
  const element = document.querySelector(\`#\${CSS.escape(id)}\`);
  if (!element)
    throw new Error(\`Missing page element: \${id}\`);
  return element;
};
var setDetailStatus = (text, kind = "") => {
  qs("status").textContent = text;
  qs("status").className = \`status \${kind}\`;
};
var appStatusTimer;
var setAppStatus = (text, kind = "") => {
  qs("app-status").textContent = text;
  qs("app-status").className = \`app-status \${kind}\`;
  clearTimeout(appStatusTimer);
  if (kind === "ok")
    appStatusTimer = setTimeout(() => setAppStatus(""), 4000);
};
var busy = false;
var updateActions = () => {
  const hasErrors = (state?.errors.length ?? 0) > 0;
  qs("save").disabled = busy || !state || hasErrors;
  qs("reset").disabled = busy || !state;
  qs("repair").disabled = busy || !hasErrors;
};
var runExclusive = async (pendingText, fn) => {
  if (busy)
    return;
  busy = true;
  updateActions();
  setAppStatus(pendingText);
  setDetailStatus("");
  try {
    await fn();
  } finally {
    busy = false;
    updateActions();
  }
};
var checkbox = (checked) => checked ? "checked" : "";
var dayCount = (days) => \`\${days} day\${days === 1 ? "" : "s"}\`;
var syncMasterBadges = () => {
  document.querySelectorAll("label.row.master input").forEach((input) => {
    const badge = input.closest("label")?.querySelector(".master-badge");
    if (badge)
      badge.textContent = input.checked ? "On" : "Off";
  });
};
var escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char] ?? char);
var clonePolicy = (policy) => JSON.parse(JSON.stringify(policy));
var pathLines = (value) => value.split(\`
\`).map((line) => line.trim()).filter(Boolean);
var formatPolicy = (policy) => \`\${JSON.stringify(policy, null, 2)}
\`;
var collectFormPolicy = () => ({
  version: 1,
  safety: {
    level: draftPolicy.safety.level,
    overrides: {
      fail_closed: draftPolicy.safety.overrides.fail_closed,
      paranoid_rm: draftPolicy.safety.overrides.paranoid_rm,
      paranoid_interpreters: draftPolicy.safety.overrides.paranoid_interpreters
    }
  },
  workflow: draftPolicy.workflow,
  destructive_command_protection: draftPolicy.destructive_command_protection,
  secret_protection: {
    enabled: draftPolicy.secret_protection.enabled,
    overrides: draftPolicy.secret_protection.overrides,
    deny_paths: draftPolicy.secret_protection.deny_paths
  },
  audit: draftPolicy.audit
});
var requestPolicyPreview = (policy = collectFormPolicy()) => requestJson("/api/policy/preview", {
  method: "POST",
  body: JSON.stringify(policy)
});
var viewNames = ["overview", "activity", "policy", "rules", "integrations", "settings"];
var viewTitles = {
  overview: "Overview",
  activity: "Activity",
  policy: "Policy",
  rules: "Rules",
  integrations: "Integrations",
  settings: "Settings"
};
var currentView = () => {
  const hash = location.hash.replace("#", "");
  return viewNames.find((view) => view === hash) ?? "overview";
};
var applyView = () => {
  const view = currentView();
  document.body.dataset.view = view;
  const hasSearch = view === "activity" || view === "policy";
  qs("topbar-title").textContent = viewTitles[view];
  qs("topbar-title").classList.toggle("sr-only", hasSearch);
  document.querySelectorAll(".topbar-search").forEach((el) => {
    el.hidden = el.dataset.searchView !== view;
  });
  qs("topbar").classList.toggle("has-search", hasSearch);
  document.title = \`\${viewTitles[view]} · CC Safety Net\`;
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.hidden = section.dataset.view !== view;
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === view)
      link.setAttribute("aria-current", "page");
    else
      link.removeAttribute("aria-current");
  });
  qs("dirty-chip").hidden = !dirty || view === "policy";
  if (view === "activity")
    applyFeedClamps(qs("activity-feed"));
  if (view === "integrations" && !integrationsRequested) {
    integrationsRequested = true;
    loadIntegrations();
  }
  if (view === "rules" && !rulesRequested) {
    rulesRequested = true;
    loadRules();
  }
  if (view === "rules" && rulesData && pendingRuleFocus)
    renderRules();
};
var isActivityFeed = (value) => !!value && Array.isArray(value.entries) && !!value.counts && !Array.isArray(value.counts);
var agentLabels = integrationDisplayNames;
var tierCountHtml = (segments) => {
  const parts = segments.filter(([count]) => count > 0).map(([count, label, tone]) => tone ? \`<span class="count-\${tone}">\${count} \${label}</span>\` : \`\${count} \${label}\`);
  return parts.length > 0 ? parts.join(" · ") : "0 on";
};
var feedItemHtml = (entry, index) => {
  const deny = entry.decision !== "allow";
  const badgeClass = entry.failureStage ? "error" : deny ? "deny" : "allow";
  const badgeLabel = entry.failureStage ? "Error" : deny ? "Blocked" : "Allowed";
  return \`<article class="feed-item">
    <div class="feed-meta">
      <span class="decision-badge \${badgeClass}">\${badgeLabel}</span>
      \${entry.agent && entry.agent !== "unknown" ? \`<span class="agent-badge">\${escapeHtml(agentLabels[entry.agent] ?? entry.agent)}</span>\` : ""}
      \${entry.ruleId ? knownRuleIds.has(entry.ruleId) ? \`<button type="button" class="rule-id" data-jump-rule="\${escapeHtml(entry.ruleId)}" title="Show this rule in Policy">\${escapeHtml(entry.ruleId)}</button>\` : \`<code class="rule-id">\${escapeHtml(entry.ruleId)}</code>\` : ""}
      <time datetime="\${escapeHtml(entry.ts)}" title="\${escapeHtml(entry.ts)}">\${formatRelativeTime(entry.ts)}</time>
      <button type="button" class="icon-button feed-copy" data-log-copy="\${index}" aria-label="Copy log entry as JSON">\${rawCopyIcons.copy}</button>
      \${deny ? \`<button type="button" class="icon-button feed-report" data-report-fp="\${index}" aria-label="Report false positive" title="Report false positive">\${reportIcon}</button>\` : \`<button type="button" class="feed-toggle feed-block" data-block-future="\${index}">Block this in future</button>\`}
    </div>
    <code class="feed-command">\${escapeHtml(entry.segment || entry.command || "(no command recorded)")}</code>
    \${entry.reason && entry.reason !== "allowed" ? \`<p class="feed-reason muted">\${escapeHtml(entry.reason)}</p>\` : ""}
  </article>\`;
};
var applyFeedClamps = (root) => {
  const overflowing = [...root.querySelectorAll(".feed-command")].filter((command) => !command.classList.contains("clamped") && command.scrollHeight > command.clientHeight + 1);
  overflowing.forEach((command) => {
    command.classList.add("clamped");
    command.insertAdjacentHTML("afterend", '<button type="button" class="feed-toggle" data-feed-toggle aria-expanded="false">Show more</button>');
  });
};
var dayLabel = (ts) => {
  const date = new Date(ts);
  if (date.toDateString() === new Date().toDateString())
    return "Today";
  if (date.toDateString() === new Date(Date.now() - 86400000).toDateString())
    return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
var renderOverviewActivity = () => {
  if (!overview)
    return;
  const tile = (value, label, extra) => \`<div class="tile"><strong>\${escapeHtml(value.toLocaleString("en-US"))}</strong><span>\${escapeHtml(label)}</span>\${extra}</div>\`;
  const dayAgoLabel = (daysAgo) => daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : \`\${daysAgo} days ago\`;
  const sparkline = (byDay, noun) => {
    const max = Math.max(...byDay, 1);
    return \`<div class="tile-spark" role="group" aria-label="Commands \${noun} per day, most recent \${dayCount(byDay.length)}">\${byDay.map((count, index) => {
      const label = \`\${dayAgoLabel(byDay.length - 1 - index)}: \${count.toLocaleString("en-US")} \${noun}\`;
      return \`<div class="spark-col" role="img" tabindex="0" data-count="\${count.toLocaleString("en-US")}" aria-label="\${escapeHtml(label)}"><div class="spark-bar\${count === 0 ? " spark-zero" : ""}" aria-hidden="true" style="height:\${count === 0 ? 2 : Math.max(2, Math.round(count / max * 40))}px"></div></div>\`;
    }).join("")}</div>\`;
  };
  qs("overview-window").textContent = \`Last \${dayCount(overview.days)}\`;
  qs("overview-tiles").innerHTML = [
    tile(overview.counts.blocked, "Blocked", sparkline(overview.counts.blockedByDay, "blocked")),
    tile(overview.totalInWindow, "Analyzed", sparkline(overview.counts.analyzedByDay, "analyzed"))
  ].join("");
};
var retentionDays = () => state?.policy?.audit?.retention_days ?? DEFAULT_RETENTION_DAYS;
var overviewDays = () => Math.min(OVERVIEW_DAYS, retentionDays());
var renderRetention = (loaded) => {
  qs("retention-days").value = String(loaded.policy.audit.retention_days);
  qs("retention-unit").textContent = loaded.policy.audit.retention_days === 1 ? "day" : "days";
  qs("retention-note").textContent = "Saved on change. Lowering this deletes anything already older than the new window; the Activity tab can only look back as far as it.";
};
var activityWindowOptions = () => {
  const retained = retentionDays();
  const windows = [7, 30, 90, 180, 365].filter((days) => days < retained);
  return [...windows, retained];
};
var configStateNotice = () => {
  const configState = state?.configState;
  if (!configState || configState.state === "ready")
    return null;
  return \`A fallback configuration is being enforced: \${configState.reason}\`;
};
var setProtectionBanner = (notices) => {
  const text = notices.filter(Boolean).join(" ");
  qs("protection-banner").textContent = text;
  qs("protection-banner").hidden = text === "";
};
var renderProtectionCard = () => {
  const configNotice = configStateNotice();
  if (!state?.preview) {
    qs("protection-card").hidden = true;
    setProtectionBanner([configNotice]);
    return;
  }
  const policy = state.policy;
  const customized = state.preview.counts.effectiveCustomizations > 0 || capabilityNames.some((key) => policy.safety.overrides[key] !== levelCapabilities(policy.safety.level)[key]);
  const commandsOn = policy.destructive_command_protection.enabled;
  const secretsOn = policy.secret_protection.enabled;
  const off = [
    commandsOn ? null : "Destructive command protection is off — configurable destructive command rules are not being enforced (catastrophic and custom rules remain active)",
    secretsOn ? null : "Secret protection is off — sensitive paths and deny paths are not being blocked"
  ].filter(Boolean);
  setProtectionBanner([
    off.length > 0 ? \`\${off.join(". ")}. Re-enable \${off.length > 1 ? "them" : "it"} in Policy.\` : null,
    configNotice
  ]);
  qs("protection-card").hidden = false;
  qs("protection-card").classList.toggle("protection-warning", !commandsOn || !secretsOn);
  qs("protection-card").innerHTML = \`<div class="panel-head"><div class="panel-title"><h2>Protection status</h2></div><a class="panel-head-action view-all-link" href="#policy">Configure</a></div>\` + \`<p>\${escapeHtml(safetyLevels[policy.safety.level][0])}\${customized ? " · Customized" : ""}</p>\` + \`<p\${commandsOn ? "" : ' class="state-disabled"'}>\${commandsOn ? \`\${state.preview.counts.enabled} rules active\` : "Destructive command protection is OFF"}</p>\` + \`<p\${secretsOn ? "" : ' class="state-disabled"'}>\${secretsOn ? "Secret protection on" : "Secret protection is OFF"}</p>\`;
};
var renderTopList = (containerId, counts, className, dataAttr) => {
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  qs(containerId).innerHTML = top.length === 0 ? '<p class="empty">No blocked commands in this window.</p>' : top.map(([key, count]) => \`<button type="button" class="\${className}" \${dataAttr}="\${escapeHtml(key)}"><code class="rule-id">\${escapeHtml(key)}</code><span class="chip-count">\${count.toLocaleString("en-US")}</span></button>\`).join("");
};
var renderTopRules = () => {
  if (!overview)
    return;
  renderTopList("top-rules", overview.counts.rules, "top-rule", "data-rule-id");
};
var findSuspects = (entries) => {
  const signatureKey = (entry) => \`\${entry.sessionId}
\${commandSignature(entry.segment || entry.command)}\`;
  const repeats = entries.filter((entry) => entry.decision !== "allow" && entry.sessionId).reduce((counts, entry) => {
    const key = signatureKey(entry);
    return counts.set(key, (counts.get(key) ?? 0) + 1);
  }, new Map);
  return new Set(entries.filter((entry) => entry.decision !== "allow" && (entry.failureStage || (repeats.get(signatureKey(entry)) ?? 0) >= 2)));
};
var clearCommandFilter = () => {
  if (!activityFilters.command)
    return false;
  activityFilters.command = "";
  return true;
};
var jumpToActivityRule = (ruleId) => {
  activityFilters.command = "";
  activityFilters.query = ruleId.toLowerCase();
  qs("activity-search").value = ruleId;
  if (activity) {
    renderActivityControls();
    renderActivityFeed();
  }
  location.hash = "activity";
};
var renderTopCommands = () => {
  if (!overview)
    return;
  renderTopList("top-commands", overview.counts.commands, "top-command", "data-command");
};
var renderTopLists = () => {
  renderTopCommands();
  renderTopRules();
};
var renderGuardErrors = () => {
  if (!overview)
    return;
  qs("guard-errors").hidden = overview.counts.errors === 0;
  if (overview.counts.errors === 0)
    return;
  qs("guard-errors").textContent = \`\${overview.counts.errors.toLocaleString("en-US")} guard error\${overview.counts.errors === 1 ? "" : "s"} in the last \${dayCount(overview.days)} — commands blocked because evaluation failed, not by policy. Click to view.\`;
};
var renderActivityControls = () => {
  if (!activity)
    return;
  const agentCounts = activity.counts.agents;
  const chipHtml = (kind, value, label, count) => \`<button type="button" class="chip" data-activity-chip="\${kind}" data-chip-value="\${escapeHtml(value)}" aria-pressed="\${activityFilters[kind] === value}">\${escapeHtml(label)}\${count === undefined ? "" : \` <span class="chip-count">\${count.toLocaleString("en-US")}</span>\`}</button>\`;
  qs("activity-decision").innerHTML = [
    chipHtml("decision", "all", "All", activity.totalInWindow),
    chipHtml("decision", "deny", "Blocked", activity.counts.blocked),
    chipHtml("decision", "allow", "Allowed", activity.counts.allowed),
    ...activity.counts.errors > 0 ? [chipHtml("decision", "error", "Errors", activity.counts.errors)] : [],
    ...suspects.size > 0 ? [chipHtml("decision", "suspect", "Likely false positive", suspects.size)] : []
  ].join("");
  const agentNames = Object.keys(agentCounts).filter((name) => name !== "unknown").sort();
  qs("activity-agents").innerHTML = agentNames.length < 2 ? "" : [
    chipHtml("agent", "all", "All agents"),
    ...agentNames.map((name) => chipHtml("agent", name, agentLabels[name] ?? name, agentCounts[name]))
  ].join("");
  qs("activity-command-filter").innerHTML = activityFilters.command ? \`<button type="button" class="filter-pill" data-clear-command aria-label="Clear command filter">Command: <code>\${escapeHtml(activityFilters.command)}</code><span class="filter-pill-x" aria-hidden="true">✕</span></button>\` : "";
  qs("activity-days").innerHTML = activityWindowOptions().map((days) => \`<option value="\${days}">Last \${dayCount(days)}</option>\`).join("");
  qs("activity-days").value = String(activity.days);
};
var renderActivityFeed = () => {
  if (!activity)
    return;
  const matchesFilters = (entry) => {
    if (activityFilters.decision === "deny" && entry.decision === "allow")
      return false;
    if (activityFilters.decision === "allow" && entry.decision !== "allow")
      return false;
    if (activityFilters.decision === "error" && !entry.failureStage)
      return false;
    if (activityFilters.decision === "suspect" && !suspects.has(entry))
      return false;
    if (activityFilters.agent !== "all" && (entry.agent || "unknown") !== activityFilters.agent)
      return false;
    if (activityFilters.command) {
      if (entry.decision === "allow")
        return false;
      return commandSignature(entry.segment || entry.command) === activityFilters.command;
    }
    if (!activityFilters.query)
      return true;
    return [entry.ruleId, entry.segment || entry.command].filter(Boolean).join(" ").toLowerCase().includes(activityFilters.query);
  };
  const entries = activity.entries.filter(matchesFilters);
  renderedFeedEntries = entries;
  qs("activity-feed").innerHTML = entries.length === 0 ? '<p class="empty">No audit log entries match.</p>' : \`<div class="feed-list">\${entries.map((entry, index) => {
    const label = dayLabel(entry.ts);
    const previous = entries[index - 1];
    const separator = previous && label === dayLabel(previous.ts) ? "" : \`<div class="feed-day-sep">\${escapeHtml(label)}</div>\`;
    return separator + feedItemHtml(entry, index);
  }).join("")}</div>\`;
  applyFeedClamps(qs("activity-feed"));
  qs("activity-count").textContent = \`Showing \${entries.length.toLocaleString("en-US")} of \${activity.totalInWindow.toLocaleString("en-US")} entries from the last \${dayCount(activity.days)}\${activity.truncated ? " (capped at 500, newest of each decision)" : ""}.\${activity.unreadable > 0 ? \` \${activity.unreadable.toLocaleString("en-US")} audit log source\${activity.unreadable === 1 ? "" : "s"} could not be read, so this list is incomplete.\` : ""}\`;
};
var loadOverview = async () => {
  const result = await requestJson(\`/api/activity?days=\${overviewDays()}\`);
  if (!result.ok || !isActivityFeed(result.data)) {
    const message = \`<p class="empty">Could not load activity: \${escapeHtml(errorText(result))}</p>\`;
    qs("overview-window").textContent = "";
    qs("overview-tiles").innerHTML = "";
    qs("top-rules").innerHTML = message;
    qs("guard-errors").hidden = true;
    return;
  }
  overview = result.data;
  qs("logs-path").textContent = overview.logsDir ?? "Not available";
  renderOverviewActivity();
  renderTopLists();
  renderGuardErrors();
};
var loadActivity = async () => {
  const result = await requestJson(\`/api/activity?days=\${activityFilters.days}\`);
  if (!result.ok || !isActivityFeed(result.data)) {
    const message = \`<p class="empty">Could not load activity: \${escapeHtml(errorText(result))}</p>\`;
    qs("activity-feed").innerHTML = message;
    qs("activity-count").textContent = "";
    return;
  }
  activity = result.data;
  suspects = findSuspects(activity.entries);
  if (activityFilters.agent !== "all" && !(activityFilters.agent in activity.counts.agents)) {
    activityFilters.agent = "all";
  }
  if (activityFilters.decision === "error" && activity.counts.errors === 0) {
    activityFilters.decision = "all";
  }
  if (activityFilters.decision === "suspect" && suspects.size === 0) {
    activityFilters.decision = "all";
  }
  renderActivityControls();
  renderActivityFeed();
};
var refreshActivity = async () => {
  const button = qs("activity-refresh");
  if (button.disabled)
    return;
  button.disabled = true;
  button.classList.add("spinning");
  await Promise.all([
    loadOverview(),
    loadActivity(),
    new Promise((resolve) => setTimeout(resolve, 600))
  ]);
  button.classList.remove("spinning");
  button.disabled = false;
};
var renderIntegrations = () => {
  const loaded = integrations;
  if (!loaded)
    return;
  qs("integrations-list").innerHTML = loaded.targets.map((row) => {
    const busy2 = integrationBusy.has(row.target);
    const version = row.version === null ? '<span class="muted">not detected</span>' : \`<span class="agent-badge">v\${escapeHtml(row.version)}</span>\`;
    const status = row.status === "active" ? '<span class="state-active">Installed</span>' : row.status === "disabled" ? '<span class="state-disabled">Disabled</span>' : row.status === "not-inspected" ? \`<span class="muted" title="This runtime's state file could not be read, so its status is unknown.">Not inspected</span>\` : '<span class="muted">Not installed</span>';
    const uninstall = row.status === "active";
    const busyLabel = uninstall ? "Uninstalling…" : "Installing…";
    const action = row.version === null ? "" : \`<button type="button" class="\${uninstall ? "danger" : "primary"}" data-integration-action="\${uninstall ? "uninstall" : "install"}" data-integration-target="\${escapeHtml(row.target)}"\${busy2 ? " disabled" : ""}>\${busy2 ? busyLabel : uninstall ? "Uninstall" : row.status === "disabled" ? "Enable" : "Install"}</button>\`;
    const note = row.note ? \`<div class="status \${row.note.kind}">\${escapeHtml(row.note.text)}</div>\` : "";
    return \`<div class="integration-row">
        <span class="integration-info"><strong>\${escapeHtml(row.label)}</strong> \${version} \${status}</span>
        \${action}
        \${note}
      </div>\`;
  }).join("");
};
var loadHealth = async () => {
  const result = await requestJson("/api/health");
  if (!result.ok || !Array.isArray(result.data?.hooks))
    return;
  const active = result.data.hooks.filter((hook) => hook.configured);
  const inactive = result.data.hooks.filter((hook) => !hook.configured);
  const attention = inactive.length > 0 || active.length === 0;
  const parts = [];
  const labelHtml = (hook) => \`<strong>\${escapeHtml(hook.label)}</strong>\`;
  if (active.length)
    parts.push(\`Hook active in \${active.map(labelHtml).join(", ")}\`);
  if (inactive.length)
    parts.push(\`\${inactive.map(labelHtml).join(", ")} detected without an active hook\`);
  if (!parts.length)
    parts.push("No agent hooks detected");
  if (result.data.update?.updateAvailable)
    parts.push(\`v\${escapeHtml(result.data.update.latestVersion)} available\`);
  const link = attention ? ' <a class="view-all-link" href="#integrations">Fix in Integrations</a>' : "";
  const el = qs("health-strip");
  el.className = attention ? "status health-strip error" : "status health-strip ok";
  el.innerHTML = parts.join(" · ") + link;
  el.hidden = false;
};
var loadIntegrations = async () => {
  const result = await requestJson("/api/integrations");
  if (!result.ok || !Array.isArray(result.data?.targets)) {
    qs("integrations-list").innerHTML = \`<p class="empty">Could not load integrations: \${escapeHtml(errorText(result))}</p>\`;
    integrationsRequested = false;
    return;
  }
  integrations = result.data;
  renderIntegrations();
  qs("integrations-pkg-version").textContent = result.data.system.version;
  qs("integrations-node-version").textContent = result.data.system.nodeVersion ?? "unknown";
  qs("integrations-platform").textContent = result.data.system.platform;
  qs("integrations-system").hidden = false;
};
var refreshIntegrations = async () => {
  const button = qs("integrations-refresh");
  if (button.disabled)
    return;
  button.disabled = true;
  button.classList.add("spinning");
  integrationsRequested = true;
  await Promise.all([loadIntegrations(), new Promise((resolve) => setTimeout(resolve, 600))]);
  button.classList.remove("spinning");
  button.disabled = false;
};
var renderRules = () => {
  const loaded = rulesData;
  if (!loaded)
    return;
  if (!qs("rules-project-path").value)
    qs("rules-project-path").value = loaded.projectPath;
  const canPick = loaded.canPickDirectory && !directoryPickerFailed;
  qs("rules-project-path").readOnly = canPick;
  qs("rules-choose-directory").hidden = !canPick;
  qs("rules-list").innerHTML = loaded.rulebooks.length === 0 ? loaded.errors.length > 0 ? '<p class="empty">Every configured rulebook was dropped, so no custom rule is enforced. See Diagnostics below.</p>' : '<p class="empty">No custom rulebooks. Run <code>npx -y cc-safety-net rule init</code> to create one, or see the <a href="https://ccsafetynet.com/docs" target="_blank" rel="noopener">documentation</a>.</p>' : loaded.rulebooks.map((rulebook) => \`<div class="rulebook-card">
    <div class="rulebook-head">
      <strong>\${escapeHtml(rulebook.name)}</strong>
      <span class="agent-badge">v\${escapeHtml(rulebook.version)}</span>
      \${rulebook.spec === rulebook.name ? "" : \`<code>\${escapeHtml(rulebook.spec)}</code>\`}
      <span>\${rulebook.source === "user" ? "All projects" : "This project"}</span>
      <span>\${rulebook.rules.length} rule\${rulebook.rules.length === 1 ? "" : "s"}</span>
    </div>
    \${rulebook.rules.map((rule) => \`<div class="rulebook-rule\${pendingRuleFocus === rule.name ? " rules-focus" : ""}">
      <code class="rule-id">custom.\${escapeHtml(rule.name)}</code>
      <code>\${escapeHtml([rule.command, rule.subcommand].filter(Boolean).join(" "))}</code>
      <p>Blocked arguments (any one matches): \${rule.block_args.map((arg) => \`<code>\${escapeHtml(arg)}</code>\`).join(" ")}</p>
      <p>\${escapeHtml(rule.reason)}</p>
    </div>\`).join("")}
  </div>\`).join("");
  const diagnostics = [
    ...loaded.errors.map((text) => \`<div class="status error">\${escapeHtml(text)}</div>\`),
    ...loaded.warnings.map((text) => \`<div class="status">\${escapeHtml(text)}</div>\`)
  ];
  qs("rules-diagnostics").innerHTML = diagnostics.join("");
  qs("rules-diagnostics-panel").hidden = diagnostics.length === 0;
  if (!pendingRuleFocus)
    return;
  const focused = qs("rules-list").querySelector(".rules-focus");
  if (focused)
    focused.scrollIntoView({ block: "center" });
  if (!focused)
    setAppStatus(\`custom.\${pendingRuleFocus} is not in any rulebook\`, "error");
  pendingRuleFocus = null;
};
var loadRules = async () => {
  const result = await requestJson("/api/rules");
  if (!result.ok || !Array.isArray(result.data?.rulebooks)) {
    qs("rules-list").innerHTML = \`<p class="empty">Could not load rules: \${escapeHtml(errorText(result))}</p>\`;
    rulesData = null;
    qs("rules-diagnostics-panel").hidden = true;
    rulesRequested = false;
    return;
  }
  rulesData = result.data;
  renderRules();
};
var refreshRules = async () => {
  const button = qs("rules-refresh");
  if (button.disabled)
    return;
  button.disabled = true;
  button.classList.add("spinning");
  rulesRequested = true;
  await Promise.all([loadRules(), new Promise((resolve) => setTimeout(resolve, 600))]);
  button.classList.remove("spinning");
  button.disabled = false;
};
var jumpToRulesRule = (ruleId) => {
  pendingRuleFocus = ruleId.replace(/^custom\\./, "");
  location.hash = "rules";
};
var openRuleComposer = (command) => {
  qs("rules-composer-input").value = command;
  location.hash = "rules";
};
var setRulesScope = (scope) => {
  rulesScope = scope;
  document.querySelectorAll("[data-rules-scope]").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.rulesScope === scope));
  });
  qs("rules-project-path-field").hidden = scope !== "project";
};
var rulePromptText = () => {
  const names = rulesData?.rulebooks.map((rulebook) => rulebook.name) ?? [];
  return [
    "Use the cc-safety-net skill for this request.",
    "If that skill is not available, run \`npx -y cc-safety-net rule doc\` first and treat its output as the source of truth for schema, paths, and validation.",
    "",
    rulesScope === "project" ? \`Scope: this project - \${qs("rules-project-path").value.trim()}\` : "Scope: all projects (user scope)",
    \`Existing rulebooks (names must stay unique across both scopes): \${names.length > 0 ? names.join(", ") : "none"}\`,
    "",
    qs("rules-composer-input").value.trim()
  ].join(\`
\`);
};
var chooseProjectDirectory = async () => {
  const button = qs("rules-choose-directory");
  if (button.disabled)
    return;
  button.disabled = true;
  const result = await requestJson("/api/rules/choose-directory", { method: "POST" });
  button.disabled = false;
  if (result.ok && result.data.path) {
    qs("rules-project-path").value = result.data.path;
    return;
  }
  if (result.ok && result.data.cancelled)
    return;
  directoryPickerFailed = true;
  qs("rules-project-path").readOnly = false;
  button.hidden = true;
  setAppStatus(\`\${result.ok ? result.data.error : errorText(result)} - type the project path instead\`, "error");
};
var copyRulePrompt = async () => {
  if (!rulesData) {
    setAppStatus("Rules have not loaded yet - refresh the Rulebooks panel", "error");
    return;
  }
  if (!qs("rules-composer-input").value.trim()) {
    setAppStatus("Describe what you want first", "error");
    return;
  }
  if (rulesScope === "project" && !qs("rules-project-path").value.trim()) {
    setAppStatus("Enter the project path the rule belongs to", "error");
    return;
  }
  qs("rules-copy-prompt").disabled = true;
  try {
    await navigator.clipboard.writeText(rulePromptText());
    qs("rules-composer-input").value = "";
    setAppStatus("Prompt copied - paste it into your coding CLI", "ok");
  } catch {
    setAppStatus("Copy failed", "error");
  } finally {
    qs("rules-copy-prompt").disabled = false;
  }
};
var runIntegrationAction = async (button) => {
  const target = button.dataset.integrationTarget;
  if (!target || integrationBusy.has(target))
    return;
  integrationBusy.add(target);
  const action = button.dataset.integrationAction;
  renderIntegrations();
  const result = await requestJson(\`/api/\${action}\`, {
    method: "POST",
    body: JSON.stringify({ target })
  });
  integrationBusy.delete(target);
  const row = integrations?.targets.find((entry) => entry.target === target);
  if (!row)
    return;
  const ok = result.ok && result.data.ok === true;
  if (ok)
    row.status = action === "install" ? "active" : "not-installed";
  row.note = {
    kind: ok ? "ok" : "error",
    text: ok ? result.data.output : result.data?.output || errorText(result)
  };
  if (!ok)
    setAppStatus(action === "install" ? "Install failed" : "Uninstall failed", "error");
  renderIntegrations();
};
var confirmDialog = (() => {
  const dialog = qs("confirm-dialog");
  const confirm = qs("confirm-dialog-confirm");
  const cancel = qs("confirm-dialog-cancel");
  let resolvePending = null;
  dialog.addEventListener("close", () => {
    if (!resolvePending)
      return;
    resolvePending(dialog.returnValue === "confirm");
    resolvePending = null;
  });
  dialog.addEventListener("cancel", () => {
    dialog.returnValue = "cancel";
  });
  return (options) => new Promise((resolve) => {
    if (resolvePending) {
      resolve(false);
      return;
    }
    qs("confirm-dialog-title").textContent = options.title;
    qs("confirm-dialog-body").textContent = options.body;
    qs("confirm-dialog-detail").textContent = options.detail ?? "";
    const detailRow = qs("confirm-dialog-detail").parentElement;
    if (detailRow)
      detailRow.hidden = !options.detail;
    confirm.textContent = options.confirmLabel;
    confirm.className = options.confirmClass ?? "danger";
    dialog.returnValue = "cancel";
    resolvePending = resolve;
    dialog.showModal();
    cancel.focus();
  });
})();
var confirmProtectionDisable = (options) => confirmDialog({
  title: options.title,
  body: options.body,
  detail: options.detail,
  confirmLabel: "Disable protection"
});
var togglePanel = (button) => {
  const controls = button.getAttribute("aria-controls");
  if (!controls)
    return;
  const expanded = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(expanded));
  qs(controls).hidden = !expanded;
};
var syncSearchState = () => {
  const active = qs("policy-search").value.trim().length > 0;
  if (active === searchActive)
    return;
  searchActive = active;
  if (active)
    return;
  searchCollapsedTiers.clear();
  searchCollapsedSecretGroups.clear();
};
var updateRawSource = () => {
  qs("raw-source").textContent = state?.errors.length ? "Read-only original policy JSON. Repair preserves valid settings and writes canonical JSON." : "Read-only mirror of the controls.";
};
var setRawCopyCopied = (copied) => {
  qs("raw-copy").innerHTML = copied ? rawCopyIcons.check : rawCopyIcons.copy;
  qs("raw-copy").classList.toggle("copied", copied);
  qs("raw-copy").setAttribute("aria-label", copied ? "Copied raw JSON" : "Copy raw JSON to clipboard");
};
var resetFeedCopy = () => {
  document.querySelectorAll(".feed-copy.copied").forEach((button) => {
    button.classList.remove("copied");
    button.innerHTML = rawCopyIcons.copy;
    button.setAttribute("aria-label", "Copy log entry as JSON");
  });
};
var reportIssueUrl = "https://github.com/kenryu42/cc-safety-net/issues/new?template=false_positive.yml";
var reportUrlLimit = 8000;
var endsAtPathBoundary = (following) => following === "" || /^[/\\\\\\s'"]/.test(following);
var scrubReportPaths = (text, cwd, home) => [
  [cwd, "<project>"],
  [home, "~"]
].reduce((scrubbed, [from, to]) => from ? scrubbed.split(from).reduce((joined, part) => joined + (endsAtPathBoundary(part) ? to : from) + part) : scrubbed, text);
var buildReportUrl = (fields) => {
  const url = new URL(reportIssueUrl);
  Object.entries(fields).filter(([, value]) => value).forEach(([field, value]) => {
    url.searchParams.set(field, value);
  });
  return url.toString();
};
var buildReportRequest = (fields, dropped = []) => {
  const url = buildReportUrl(fields);
  if (url.length <= reportUrlLimit)
    return { url, dropped };
  const largest = Object.entries(fields).filter(([, value]) => value).sort((left, right) => right[1].length - left[1].length)[0];
  if (!largest)
    return { url, dropped };
  return buildReportRequest({ ...fields, [largest[0]]: "" }, [...dropped, largest[0]]);
};
var openReportDialog = (button) => {
  const entry = renderedFeedEntries[Number(button.dataset.reportFp)];
  if (!entry)
    return;
  const scrub = (text) => scrubReportPaths(text, entry.cwd, activity?.homeDir);
  qs("report-command").value = scrub(entry.command || entry.segment || "");
  qs("report-entry").value = JSON.stringify({
    ...entry,
    ts: scrub(entry.ts),
    decision: scrub(entry.decision),
    agent: entry.agent ? scrub(entry.agent) : entry.agent,
    ruleId: entry.ruleId ? scrub(entry.ruleId) : entry.ruleId,
    segment: entry.segment ? scrub(entry.segment) : entry.segment,
    command: entry.command ? scrub(entry.command) : entry.command,
    reason: entry.reason ? scrub(entry.reason) : entry.reason,
    failureStage: entry.failureStage ? scrub(entry.failureStage) : entry.failureStage,
    sessionId: entry.sessionId ? scrub(entry.sessionId) : entry.sessionId,
    cwd: entry.cwd ? scrub(entry.cwd) : entry.cwd
  }, null, 2);
  qs("report-dialog").returnValue = "cancel";
  qs("report-dialog").showModal();
};
var openFalsePositiveForm = async () => {
  const fields = {
    command: qs("report-command").value,
    entry: qs("report-entry").value
  };
  const request = buildReportRequest(fields);
  const copying = request.dropped.length ? navigator.clipboard.writeText(request.dropped.map((field) => \`### \${field}
\${field === "command" ? fields.command : fields.entry}\`).join(\`

\`)) : null;
  window.open(request.url, "_blank", "noopener");
  if (!copying)
    return;
  const names = request.dropped.join(" and ");
  setAppStatus(await copying.then(() => true).catch(() => false) ? \`Report too long to prefill — \${names} copied to your clipboard. Paste into the form on GitHub.\` : \`Report too long to prefill — \${names} left out. Copy the entry from the feed and paste it into the form on GitHub.\`, "error");
};
qs("report-dialog").addEventListener("close", () => {
  if (qs("report-dialog").returnValue === "report")
    openFalsePositiveForm();
});
var copyFeedEntry = async (button) => {
  const entry = renderedFeedEntries[Number(button.dataset.logCopy)];
  if (!entry)
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(entry, null, 2));
    if (feedCopyResetTimer)
      clearTimeout(feedCopyResetTimer);
    resetFeedCopy();
    button.classList.add("copied");
    button.innerHTML = rawCopyIcons.check;
    button.setAttribute("aria-label", "Copied log entry");
    feedCopyResetTimer = setTimeout(resetFeedCopy, 2000);
  } catch {
    setAppStatus("Copy failed", "error");
  }
};
var copyRawToClipboard = async () => {
  qs("raw-copy").disabled = true;
  try {
    await navigator.clipboard.writeText(qs("raw").value);
    setRawCopyCopied(true);
    if (rawCopyResetTimer)
      clearTimeout(rawCopyResetTimer);
    rawCopyResetTimer = setTimeout(() => setRawCopyCopied(false), 2000);
  } catch (error) {
    setAppStatus("Copy failed", "error");
    setDetailStatus(\`Error: Could not copy Raw JSON: \${error instanceof Error ? error.message : String(error)}\`, "error");
  } finally {
    qs("raw-copy").disabled = false;
  }
};
var formatStarCount = (count) => {
  if (count === null)
    return "";
  if (count >= 1000)
    return \`\${(count / 1000).toFixed(1).replace(/\\.0$/, "")}k\`;
  return String(count);
};
var starCountHtml = (count) => {
  const formatted = formatStarCount(count);
  return formatted ? \`<span class="star-count">\${escapeHtml(formatted)}</span>\` : "";
};
var hideStarCta = () => {
  qs("star-row").hidden = true;
  qs("star-slot").innerHTML = "";
};
var renderStarPitch = (context, starred = false) => {
  const evidence = context.blockedTotal > 0 ? \`CC Safety Net has blocked <strong>\${escapeHtml(context.blockedTotal.toLocaleString("en-US"))}</strong> risky command\${context.blockedTotal === 1 ? "" : "s"} on this machine in its retained \${escapeHtml(dayCount(retentionDays()))} history.\` : "";
  if (starred) {
    qs("star-pitch-text").innerHTML = evidence;
    return;
  }
  qs("star-pitch-text").innerHTML = evidence ? \`\${evidence} If it saved your work, star it on GitHub.\` : "If CC Safety Net is useful to you, star it on GitHub.";
};
var renderStarLink = (context, href = fallbackRepoUrl) => {
  qs("star-slot").innerHTML = \`<a class="star-cta" href="\${escapeHtml(href)}" target="_blank" rel="noopener" aria-label="Star CC Safety Net on GitHub (opens github.com)">
      <span class="star-icon" aria-hidden="true">\${starIcons.outline}</span>
      <span class="star-label">Star on GitHub</span>
      \${starCountHtml(context.starCount)}
    </a>\`;
  qs("star-row").hidden = false;
};
var renderStarCta = (context) => {
  activeStarContext = context;
  if (context.starred === true) {
    hideStarCta();
    return;
  }
  renderStarPitch(context);
  qs("star-mechanism").hidden = context.starred !== false;
  if (context.starred === null) {
    renderStarLink(context);
    return;
  }
  qs("star-slot").innerHTML = \`<button type="button" class="star-cta" aria-label="Star CC Safety Net on GitHub. One click via your GitHub CLI.">
      <span class="star-icon" aria-hidden="true">\${starIcons.outline}</span>
      <span class="star-label">Star on GitHub</span>
      \${starCountHtml(context.starCount)}
    </button>\`;
  qs("star-row").hidden = false;
};
var starRepo = async (button) => {
  button.disabled = true;
  const result = await requestJson("/api/star", { method: "POST" });
  if (result.ok && result.data?.ok === true) {
    const icon = button.querySelector(".star-icon");
    const label = button.querySelector(".star-label");
    if (icon)
      icon.innerHTML = starIcons.filled;
    if (label)
      label.textContent = "Starred. Thank you.";
    button.setAttribute("aria-label", "CC Safety Net starred on GitHub");
    button.classList.add("starred");
    qs("star-mechanism").hidden = true;
    renderStarPitch(activeStarContext, true);
    setAppStatus("Starred on GitHub", "ok");
    setDetailStatus("");
    return;
  }
  qs("star-mechanism").hidden = true;
  renderStarLink(activeStarContext, result.data?.fallbackUrl ?? fallbackRepoUrl);
};
var loadStarContext = async () => {
  const result = await requestJson("/api/star/context");
  renderStarCta(result.ok && result.data ? result.data : { starred: null, starCount: null, blockedTotal: 0 });
};
var syncRawFromForm = () => {
  if (state?.errors.length)
    return;
  qs("raw").value = formatPolicy(collectFormPolicy());
  updateRawSource();
};
var updateDirtyStatus = () => {
  if (!state || state.errors.length)
    return;
  const draftJson = JSON.stringify(collectFormPolicy());
  dirty = draftJson !== JSON.stringify(state.policy);
  qs("policy-savebar").hidden = !dirty;
  qs("dirty-chip").hidden = !dirty || currentView() === "policy";
  if (dirty)
    sessionStorage.setItem("cc-safety-net-draft", draftJson);
  if (!dirty)
    sessionStorage.removeItem("cc-safety-net-draft");
  setDetailStatus("");
  updateActions();
};
var createPathList = (prefix, config) => {
  const setHint = (text) => {
    qs(\`\${prefix}-hint\`).textContent = text;
    qs(\`\${prefix}-hint\`).hidden = !text;
  };
  const render = () => {
    const paths = config.getPaths();
    const disabled = config.isDisabled();
    qs(\`\${prefix}-count\`).textContent = \`\${paths.length} path\${paths.length === 1 ? "" : "s"}\`;
    qs(\`\${prefix}-input\`).disabled = disabled;
    qs(\`\${prefix}-add-button\`).disabled = disabled;
    qs(\`\${prefix}-list\`).innerHTML = paths.length === 0 ? \`<li class="empty">No \${config.itemLabel}s configured.</li>\` : paths.map((path, index) => \`<li class="path-item \${disabled ? "row-disabled" : ""}">
          <code>\${escapeHtml(path)}</code>
          <button type="button" class="icon-button" data-path-list="\${prefix}" data-path-remove="\${index}" \${disabled ? "disabled" : ""} aria-label="Remove \${config.itemLabel} \${escapeHtml(path)}">\${pathListIcons.remove}</button>
        </li>\`).join("");
  };
  let adding = false;
  const add = async (value) => {
    if (adding)
      return;
    const entries = [...new Set(pathLines(value))];
    if (entries.length === 0)
      return;
    const submitted = qs(\`\${prefix}-input\`).value;
    const additions = entries.filter((entry) => !config.getPaths().includes(entry));
    if (config.validateAdditions && additions.length) {
      adding = true;
      try {
        const error = await config.validateAdditions([...config.getPaths(), ...additions]);
        if (error) {
          setHint(\`Not added: \${additions.join(", ")} — \${error}\`);
          return;
        }
      } finally {
        adding = false;
      }
    }
    const current = config.getPaths();
    const duplicates = entries.filter((entry) => current.includes(entry));
    config.setPaths([...current, ...additions.filter((entry) => !current.includes(entry))]);
    if (qs(\`\${prefix}-input\`).value === submitted)
      qs(\`\${prefix}-input\`).value = "";
    setHint(duplicates.length ? \`Already listed: \${duplicates.join(", ")}\` : "");
    render();
    syncRawFromForm();
    updateDirtyStatus();
    qs(\`\${prefix}-input\`).focus();
  };
  const remove = (index) => {
    config.setPaths(config.getPaths().filter((_, position) => position !== index));
    setHint("");
    render();
    syncRawFromForm();
    updateDirtyStatus();
  };
  return { render, add, remove };
};
var pathLists = {
  "deny-paths": createPathList("deny-paths", {
    getPaths: () => draftPolicy.secret_protection.deny_paths,
    setPaths: (paths) => {
      draftPolicy.secret_protection.deny_paths = paths;
    },
    isDisabled: () => !draftPolicy.secret_protection.enabled,
    itemLabel: "deny path",
    validateAdditions: async (paths) => {
      const candidate = collectFormPolicy();
      candidate.secret_protection = {
        ...candidate.secret_protection,
        deny_paths: paths
      };
      const result = await requestPolicyPreview(candidate);
      if (result.ok && result.data?.preview)
        return null;
      return errorText(result);
    }
  }),
  "allow-paths": createPathList("allow-paths", {
    getPaths: () => draftPolicy.destructive_command_protection.allow_paths,
    setPaths: (paths) => {
      draftPolicy.destructive_command_protection.allow_paths = paths;
    },
    isDisabled: () => !draftPolicy.destructive_command_protection.enabled,
    itemLabel: "allow path",
    validateAdditions: async (paths) => {
      const candidate = collectFormPolicy();
      candidate.destructive_command_protection = {
        ...candidate.destructive_command_protection,
        allow_paths: paths
      };
      const result = await requestPolicyPreview(candidate);
      if (result.ok && result.data?.preview)
        return null;
      return errorText(result);
    }
  })
};
var pathListFor = (name) => name === "deny-paths" || name === "allow-paths" ? pathLists[name] : null;
var secretRuleIsActive = (rule, overrides) => overrides[rule.id] ? overrides[rule.id] === "on" : !rule.defaultOff;
var setSecretOverride = (rule, active) => {
  if (active === !rule.defaultOff) {
    delete draftPolicy.secret_protection.overrides[rule.id];
    return;
  }
  draftPolicy.secret_protection.overrides[rule.id] = active ? "on" : "off";
};
var groupRules = (rules) => {
  const initialGroups = [];
  return rules.reduce((groups, rule) => {
    const group = groups.find((item) => item.category === rule.category);
    if (group) {
      group.rules.push(rule);
      return groups;
    }
    groups.push({ category: rule.category, rules: [rule] });
    return groups;
  }, initialGroups);
};
var renderSecretPatterns = () => {
  if (!state)
    return;
  const loaded = state;
  const query = qs("policy-search").value.trim().toLowerCase();
  const rules = state.secretPatterns.filter((rule) => [rule.category, rule.label, rule.id, rule.description, ...rule.paths ?? []].join(" ").toLowerCase().includes(query));
  const overrides = draftPolicy.secret_protection.overrides;
  const disabled = !draftPolicy.secret_protection.enabled;
  const disabledCount = state.secretPatterns.filter((rule) => !secretRuleIsActive(rule, overrides)).length;
  qs("secret-summary").textContent = disabled ? "Protection disabled. Saved rule settings and deny paths are preserved." : \`\${state.secretPatterns.length - disabledCount} active, \${disabledCount} disabled\`;
  qs("secret-patterns").innerHTML = rules.length === 0 ? '<p class="empty">No secret protections match the search.</p>' : groupRules(rules).map((group) => {
    const expanded = secretGroupExpanded.get(group.category) || searchActive && !searchCollapsedSecretGroups.has(group.category);
    const contentId = \`secret-group-\${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}\`;
    const allGroupRules = loaded.secretPatterns.filter((rule) => rule.category === group.category);
    const onCount = disabled ? 0 : allGroupRules.filter((rule) => secretRuleIsActive(rule, overrides)).length;
    return \`
      <section class="rule-tier">
        <div class="rule-tier-head">
          <button type="button" class="tier-collapse" data-secret-group-toggle="\${escapeHtml(group.category)}" aria-expanded="\${expanded}" aria-controls="\${contentId}">
            <span class="panel-chevron" aria-hidden="true"></span>
            <span class="tier-label"><strong>\${escapeHtml(group.category)}</strong></span>
            <span class="tier-counts">\${tierCountHtml([
      [onCount, "on"],
      [allGroupRules.length - onCount, "off", "off"]
    ])}</span>
          </button>
          <input type="checkbox" class="tier-switch" data-secret-group-active="\${escapeHtml(group.category)}" \${checkbox(allGroupRules.some((rule) => secretRuleIsActive(rule, overrides)))} \${disabled ? "disabled" : ""} aria-label="\${escapeHtml(\`All \${group.category} protections\`)}">
        </div>
        <div id="\${contentId}" class="tier-content" \${expanded ? "" : "hidden"}>
        <div class="grid">\${group.rules.map((rule) => {
      const active = secretRuleIsActive(rule, overrides);
      const ruleState = active && !disabled ? { label: "Active", className: "state-active" } : { label: "Disabled", className: "state-disabled" };
      const control = \`<input type="checkbox" data-secret-active="\${escapeHtml(rule.id)}" \${checkbox(active)} \${disabled ? "disabled" : ""}>
            <span>
              <strong>\${escapeHtml(rule.label)}</strong>
              <button type="button" class="rule-id" data-rule-activity="\${escapeHtml(rule.id)}" title="Show recent blocks in Activity">\${escapeHtml(rule.id)}</button>
              <small><span class="\${ruleState.className}">\${ruleState.label}</span> \${escapeHtml(rule.description ?? "")}</small>
            </span>\`;
      if (!rule.paths) {
        return \`<label class="row \${disabled ? "row-disabled" : ""}">\${control}</label>\`;
      }
      return \`<div class="row rule-row \${disabled ? "row-disabled" : ""}">
            <label class="rule-control">\${control}</label>
            <button type="button" class="rule-example-button" data-secret-paths="\${escapeHtml(rule.id)}" aria-label="\${escapeHtml(\`Show protected paths for \${rule.label}\`)}" aria-haspopup="dialog" aria-controls="rule-example-popover">?</button>
          </div>\`;
    }).join("")}</div>
        </div>
      </section>
    \`;
  }).join("");
};
var levelCapabilities = (level) => ({
  fail_closed: level === "strict" || level === "paranoid",
  paranoid_rm: level === "paranoid",
  paranoid_interpreters: level === "paranoid"
});
var presetName = () => safetyLevels[draftPolicy.safety.level][0];
var renderPresetStatus = () => {
  if (!preview)
    return;
  const customized = preview.counts.effectiveCustomizations > 0 || capabilityNames.some((key) => draftPolicy.safety.overrides[key] !== levelCapabilities(draftPolicy.safety.level)[key]);
  qs("safety-preset-status").textContent = customized ? \`\${presetName()} · Customized\` : "";
  qs("safety-preset-status").classList.toggle("customized", customized);
};
var renderSafety = () => {
  const environmentSources = preview ? [
    ...new Set(Object.values(preview.capabilities).filter((capability) => capability.source === "environment").flatMap((capability) => capability.sources.filter((source) => source.startsWith("env "))))
  ] : [];
  qs("environment-overrides").hidden = environmentSources.length === 0;
  qs("environment-overrides").textContent = environmentSources.length ? \`Environment-raised protection: \${environmentSources.join(", ")}\` : "";
  qs("safety-level").innerHTML = Object.entries(safetyLevels).map(([level, meta]) => \`<label class="row preset-\${level}"><input type="radio" name="safety-level" value="\${level}" \${checkbox(draftPolicy.safety.level === level)}><span><strong>\${meta[0]}</strong><small>\${meta[1]}</small></span></label>\`).join("");
  const inherited = levelCapabilities(draftPolicy.safety.level);
  qs("safety-overrides").innerHTML = capabilityNames.map((key) => {
    const meta = safetyOverrides[key];
    const value = draftPolicy.safety.overrides[key];
    const inheritedText = inherited[key] ? "on" : "off";
    return \`<label class="row safety-override-row"><span><strong>\${meta[0]}</strong><small>\${meta[1]}</small></span><select data-safety-override="\${key}">
      <option value="inherit" \${value === undefined ? "selected" : ""}>Inherit from preset (\${inheritedText})</option>
      <option value="true" \${value === true ? "selected" : ""}>Force on</option>
      <option value="false" \${value === false ? "selected" : ""}>Force off</option>
    </select></label>\`;
  }).join("");
  qs("workflow").innerHTML = \`<label class="row"><input type="checkbox" data-workflow-worktree \${checkbox(draftPolicy.workflow.worktree_mode)}><span><strong>Allow discarding local changes in linked git worktrees</strong><small>Only relaxes linked worktree discard checks.</small></span></label>\`;
  renderPresetStatus();
};
var tierForRule = (rule) => {
  if (!rule.activationCapability)
    return "normal";
  return rule.activationCapability === "fail_closed" ? "strict" : "paranoid";
};
var tierMeta = {
  normal: ["Available in every preset", "No additional capability required"],
  strict: ["Strict tier", "Inherits from Fail closed"],
  paranoid: ["Paranoid tier", "Inherits from Paranoid rm or Paranoid interpreters"]
};
var tiers = ["normal", "strict", "paranoid"];
var ruleStateText = (rule, effective, capabilities) => {
  const capability = rule.activationCapability;
  if (effective.source === "master_disabled")
    return "Off — destructive-command protection disabled";
  if (effective.source === "rule_override")
    return \`\${effective.enabled ? "On" : "Off"} — user rule override\`;
  if (effective.source === "built_in_default")
    return "On — available in every preset";
  if (effective.source === "environment") {
    const sources = capability ? capabilities[capability]?.sources ?? [] : [];
    const source = [...sources].reverse().find((item) => item.startsWith("env "));
    return \`\${effective.enabled ? "On" : "Off"} — environment\${source ? \`; \${source.slice(4)}\` : ""}\`;
  }
  if (effective.source === "capability_override" && capability) {
    return \`\${effective.enabled ? "On" : "Off"} — capability override; \${safetyOverrides[capability][0]} forced \${effective.enabled ? "on" : "off"}\`;
  }
  if (effective.enabled)
    return \`On — \${presetName()} preset\`;
  return \`Off — \${presetName()} preset; requires \${tierForRule(rule) === "strict" ? "Strict" : "Paranoid"}\`;
};
var showRulePopover = (button, label, title, body) => {
  const popover = qs("rule-example-popover");
  qs("rule-example-label").textContent = label;
  qs("rule-example-title").textContent = title;
  qs("rule-example-command").textContent = body;
  if (!popover.matches(":popover-open"))
    popover.showPopover();
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const gap = 8;
  const edge = 12;
  const below = buttonRect.bottom + gap;
  const top = below + popoverRect.height <= window.innerHeight - edge ? below : Math.max(edge, buttonRect.top - gap - popoverRect.height);
  const left = Math.min(window.innerWidth - popoverRect.width - edge, Math.max(edge, buttonRect.right - popoverRect.width));
  popover.style.top = \`\${top}px\`;
  popover.style.left = \`\${left}px\`;
};
var openRuleExample = (button) => {
  const rule = state?.destructiveCommandRules.find((item) => item.id === button.dataset.ruleExample);
  if (!rule)
    return;
  showRulePopover(button, "Blocked command example", rule.label, rule.example);
};
var openSecretPaths = (button) => {
  const rule = state?.secretPatterns.find((item) => item.id === button.dataset.secretPaths);
  if (!rule?.paths)
    return;
  showRulePopover(button, "Protected paths", rule.label, rule.paths.join(\`
\`));
};
var renderDestructiveCommands = () => {
  if (!state || !preview)
    return;
  const loaded = state;
  const effectiveState = preview;
  const query = qs("policy-search").value.trim().toLowerCase();
  const matchingRules = state.destructiveCommandRules.filter((rule) => [rule.category, rule.label, rule.id, rule.description, tierMeta[tierForRule(rule)][0]].join(" ").toLowerCase().includes(query));
  qs("destructive-command-summary").textContent = draftPolicy.destructive_command_protection.enabled ? \`\${preview.counts.enabled} active, \${preview.counts.disabled} disabled\` : "Configurable protection disabled. Catastrophic protections remain active; saved rule settings and allow paths are preserved.";
  const enforcedRules = matchingRules.filter((rule) => rule.catastrophic);
  const configurableRules = matchingRules.filter((rule) => !rule.catastrophic);
  const enforcedExpanded = tierExpanded.get("enforced") || searchActive && !searchCollapsedTiers.has("enforced");
  const enforcedSection = enforcedRules.length === 0 ? "" : \`<section class="rule-tier rule-tier-enforced">
        <div class="rule-tier-head">
          <button type="button" class="tier-collapse" data-tier-toggle="enforced" aria-expanded="\${enforcedExpanded}" aria-controls="destructive-tier-enforced">
            <span class="panel-chevron" aria-hidden="true"></span>
            <span class="tier-label"><strong>Always enforced</strong><small>Cannot be disabled by any preset, rule override, or allow path</small></span>
            <span class="tier-counts">\${enforcedRules.length} protection\${enforcedRules.length === 1 ? "" : "s"}</span>
          </button>
        </div>
        <div id="destructive-tier-enforced" class="tier-content" \${enforcedExpanded ? "" : "hidden"}>
          \${groupRules(enforcedRules).map((group) => \`<section class="destructive-command-group">
            <h3>\${escapeHtml(group.category)}</h3>
            <div class="grid">\${group.rules.map((rule) => \`<div class="row rule-row">
                <span class="rule-control">
                  <span>
                    <strong>\${escapeHtml(rule.label)}</strong>
                    <button type="button" class="rule-id" data-rule-activity="\${escapeHtml(rule.id)}" title="Show recent blocks in Activity">\${escapeHtml(rule.id)}</button>
                    <small><span class="state-active">Always enforced</span> \${escapeHtml(rule.description)}</small>
                  </span>
                </span>
                <button type="button" class="rule-example-button" data-rule-example="\${escapeHtml(rule.id)}" aria-label="\${escapeHtml(\`Show blocked example for \${rule.label}\`)}" aria-haspopup="dialog" aria-controls="rule-example-popover">?</button>
              </div>\`).join("")}</div>
          </section>\`).join("")}
        </div>
      </section>\`;
  qs("destructive-command-rules").innerHTML = matchingRules.length === 0 ? '<p class="empty">No built-in protections match the search.</p>' : enforcedSection + tiers.map((tier) => {
    const rules = configurableRules.filter((rule) => tierForRule(rule) === tier);
    if (rules.length === 0)
      return "";
    const allTierRules = loaded.destructiveCommandRules.filter((rule) => !rule.catastrophic && tierForRule(rule) === tier);
    const tierStates = allTierRules.flatMap((rule) => effectiveState.rules[rule.id] ?? []);
    const expanded = tierExpanded.get(tier) || searchActive && !searchCollapsedTiers.has(tier);
    const contentId = \`destructive-tier-\${tier}\`;
    return \`<section class="rule-tier rule-tier-\${tier}">
        <div class="rule-tier-head">
          <button type="button" class="tier-collapse" data-tier-toggle="\${tier}" aria-expanded="\${expanded}" aria-controls="\${contentId}">
            <span class="panel-chevron" aria-hidden="true"></span>
            <span class="tier-label"><strong>\${tierMeta[tier][0]}</strong><small>\${tierMeta[tier][1]}</small></span>
            <span class="tier-counts">\${tierCountHtml([
      [tierStates.filter((item) => item.enabled).length, "on"],
      [tierStates.filter((item) => !item.enabled).length, "off", "off"]
    ])}</span>
          </button>
          <input type="checkbox" class="tier-switch" data-destructive-tier-active="\${tier}" \${checkbox(tierStates.some((item) => item.enabled))} \${!draftPolicy.destructive_command_protection.enabled ? "disabled" : ""} aria-label="\${escapeHtml(\`All \${tierMeta[tier][0]} protections\`)}">
        </div>
        <div id="\${contentId}" class="tier-content" \${expanded ? "" : "hidden"}>
          \${groupRules(rules).map((group) => \`<section class="destructive-command-group">
            <h3>\${escapeHtml(group.category)}</h3>
            <div class="grid">\${group.rules.map((rule) => {
      const effective = effectiveState.rules[rule.id];
      if (!effective)
        return "";
      const override = draftPolicy.destructive_command_protection.overrides[rule.id];
      const status = ruleStateText(rule, effective, effectiveState.capabilities);
      const disabled = !draftPolicy.destructive_command_protection.enabled;
      return \`<div class="row rule-row \${disabled ? "row-disabled" : ""}">
                <label class="rule-control">
                  <input type="checkbox" data-destructive-command-active="\${escapeHtml(rule.id)}" \${checkbox(effective.enabled)} \${disabled ? "disabled" : ""} aria-label="\${escapeHtml(\`\${rule.label}: \${status}\`)}">
                  <span>
                    <strong>\${escapeHtml(rule.label)}</strong>
                    <button type="button" class="rule-id" data-rule-activity="\${escapeHtml(rule.id)}" title="Show recent blocks in Activity">\${escapeHtml(rule.id)}</button>
                    <small><span class="\${effective.enabled ? "state-active" : "state-disabled"}">\${escapeHtml(status)}</span> \${escapeHtml(rule.description)}</small>
                  </span>
                </label>
                <button type="button" class="rule-example-button" data-rule-example="\${escapeHtml(rule.id)}" aria-label="\${escapeHtml(\`Show blocked example for \${rule.label}\`)}" aria-haspopup="dialog" aria-controls="rule-example-popover">?</button>
                \${override && !effective.changesInherited ? \`<button type="button" class="inherit-button" data-use-inherited="\${escapeHtml(rule.id)}">Use inherited setting</button>\` : ""}
              </div>\`;
    }).join("")}</div>
          </section>\`).join("")}
        </div>
      </section>\`;
  }).join("");
};
var refreshPolicyPreview = async () => {
  const requestId = ++previewRequestId;
  const result = await requestPolicyPreview();
  if (requestId !== previewRequestId)
    return false;
  if (!result.ok || !result.data?.preview) {
    setAppStatus("Preview failed", "error");
    setDetailStatus(\`Error: \${errorText(result)}\`, "error");
    return false;
  }
  preview = result.data.preview;
  renderProtectionCard();
  renderSafety();
  renderDestructiveCommands();
  runCommandTest();
  return true;
};
var testerRequestId = 0;
var runCommandTest = async () => {
  const command = qs("tester-input").value.trim();
  if (!command) {
    qs("tester-result").hidden = true;
    return;
  }
  const requestId = ++testerRequestId;
  const result = await requestJson("/api/policy/explain", {
    method: "POST",
    body: JSON.stringify({ command, policy: collectFormPolicy() })
  });
  if (requestId !== testerRequestId)
    return;
  const el = qs("tester-result");
  el.hidden = false;
  if (!result.ok) {
    el.className = "status error";
    el.textContent = \`Could not evaluate: \${errorText(result)}\`;
    return;
  }
  if (result.data.result === "allowed") {
    el.className = "status ok";
    el.innerHTML = \`Allowed — no rule blocks this command under the current draft policy. <button type="button" class="feed-toggle" data-create-rule="\${escapeHtml(command)}">Create a rule for this</button>\`;
    return;
  }
  const ruleId = result.data.customRule?.id ?? result.data.ruleId;
  const ruleIdHtml = result.data.customRule ? \`<button type="button" class="rule-id" data-jump-custom-rule="\${escapeHtml(ruleId)}" title="Show this rule in Rules">\${escapeHtml(ruleId)}</button>\` : \`<code class="rule-id">\${escapeHtml(ruleId)}</code>\`;
  const segment = result.data.segment && result.data.segment !== command ? \`<div class="tester-segment">Segment: <code>\${escapeHtml(result.data.segment)}</code></div>\` : "";
  el.className = "status error";
  el.innerHTML = \`Blocked\${ruleId ? \` by \${ruleIdHtml}\` : ""} — \${escapeHtml(result.data.reason || "")}\${segment}\`;
};
function render() {
  if (!state)
    return;
  draftPolicy = clonePolicy(state.policy);
  preview = state.preview;
  knownRuleIds = new Set([...state.destructiveCommandRules, ...state.secretPatterns].map((rule) => rule.id));
  dirty = false;
  qs("policy-savebar").hidden = true;
  qs("dirty-chip").hidden = true;
  qs("policy-path").textContent = state.path + (state.exists ? "" : " (not created yet)");
  qs("app-version").textContent = state.version;
  renderSafety();
  qs("destructive-command").innerHTML = '<label class="row master"><input type="checkbox" data-destructive-command-enabled ' + checkbox(state.policy.destructive_command_protection.enabled) + '><span><strong>Destructive command protection</strong><small>Block configurable destructive git, filesystem, and execution patterns. Catastrophic and custom rules remain active when disabled.</small></span><span class="master-badge">' + (state.policy.destructive_command_protection.enabled ? "On" : "Off") + "</span></label>" + '<div id="destructive-command-rules"></div>' + '<section class="rule-tier">' + '<button type="button" class="rule-tier-head" aria-expanded="false" aria-controls="allow-paths-content"><span class="panel-chevron" aria-hidden="true"></span><span class="tier-label"><strong id="allow-paths-label">Allow paths</strong><small>Recursive deletes targeting these paths are not blocked, like /tmp. The home directory, or any path containing it, is rejected.</small></span><span class="tier-counts" id="allow-paths-count"></span></button>' + '<div class="tier-content paths-content" id="allow-paths-content" hidden>' + '<p class="muted">Use an absolute path or a ~/ path. Paste multiple lines to add several paths at once.</p>' + '<div class="paths-add"><input type="text" id="allow-paths-input" data-path-input="allow-paths" autocomplete="off" spellcheck="false" placeholder="/absolute/path or ~/path" aria-labelledby="allow-paths-label"><button type="button" class="icon-button" id="allow-paths-add-button" data-path-add="allow-paths" aria-label="Add allow path">' + pathListIcons.add + "</button></div>" + '<p class="paths-hint" id="allow-paths-hint" hidden></p>' + '<ul class="paths-list" id="allow-paths-list"></ul>' + "</div></section>";
  qs("secret").innerHTML = '<label class="row master"><input type="checkbox" id="secret-enabled" ' + checkbox(state.policy.secret_protection.enabled) + '><span><strong>Secret protection</strong><small>Block default sensitive paths, coding CLI credential locations, and configured deny paths.</small></span><span class="master-badge">' + (state.policy.secret_protection.enabled ? "On" : "Off") + "</span></label>" + '<div id="secret-patterns"></div>' + '<section class="rule-tier">' + '<button type="button" class="rule-tier-head" aria-expanded="false" aria-controls="deny-paths-content"><span class="panel-chevron" aria-hidden="true"></span><span class="tier-label"><strong id="deny-paths-label">Deny paths</strong><small>Configured paths and everything inside them are blocked while Secret protection is on.</small></span><span class="tier-counts" id="deny-paths-count"></span></button>' + '<div class="tier-content paths-content" id="deny-paths-content" hidden>' + '<p class="muted">Paste multiple lines to add several paths at once.</p>' + '<div class="paths-add"><input type="text" id="deny-paths-input" data-path-input="deny-paths" autocomplete="off" spellcheck="false" placeholder="path/to/protect" aria-labelledby="deny-paths-label"><button type="button" class="icon-button" id="deny-paths-add-button" data-path-add="deny-paths" aria-label="Add deny path">' + pathListIcons.add + "</button></div>" + '<p class="paths-hint" id="deny-paths-hint" hidden></p>' + '<ul class="paths-list" id="deny-paths-list"></ul>' + "</div></section>";
  qs("raw").value = state.errors.length ? state.raw : formatPolicy(draftPolicy);
  qs("policy-search").value = "";
  syncSearchState();
  renderDestructiveCommands();
  renderSecretPatterns();
  pathLists["deny-paths"].render();
  pathLists["allow-paths"].render();
  updateRawSource();
  renderRetention(state);
  qs("recovery").hidden = state.errors.length === 0;
  updateActions();
  renderProtectionCard();
  if (state.errors.length) {
    if (currentView() !== "policy")
      location.hash = "policy";
    setAppStatus("Repair required", "error");
    setDetailStatus(\`Error: \${state.errors.join(\`
\`)}\`, "error");
    return;
  }
  setAppStatus("");
  setDetailStatus("");
}
var restoreDraft = () => {
  if (!state || state.errors.length)
    return;
  const stored = sessionStorage.getItem("cc-safety-net-draft");
  if (!stored)
    return;
  const parsed = (() => {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  })();
  const isStoredPolicy = [
    "safety",
    "workflow",
    "destructive_command_protection",
    "secret_protection",
    "audit"
  ].every((key) => parsed?.[key] && !Array.isArray(parsed[key]));
  if (!isStoredPolicy || stored === JSON.stringify(state.policy)) {
    sessionStorage.removeItem("cc-safety-net-draft");
    return;
  }
  draftPolicy = parsed;
  const masterToggle = document.querySelector("[data-destructive-command-enabled]");
  if (masterToggle)
    masterToggle.checked = draftPolicy.destructive_command_protection.enabled;
  qs("secret-enabled").checked = draftPolicy.secret_protection.enabled;
  syncMasterBadges();
  renderSafety();
  renderDestructiveCommands();
  renderSecretPatterns();
  pathLists["deny-paths"].render();
  pathLists["allow-paths"].render();
  syncRawFromForm();
  updateDirtyStatus();
  refreshPolicyPreview();
  setAppStatus("Restored unsaved draft", "ok");
};
async function load() {
  const result = await requestJson("/api/policy");
  if (!isPolicyState(result.data)) {
    setAppStatus("Load failed", "error");
    setDetailStatus(\`Error: Could not load policy: \${errorText(result)}\`, "error");
    return false;
  }
  state = result.data;
  render();
  restoreDraft();
  return true;
}
var targetInput = (event) => event.target instanceof HTMLInputElement ? event.target : null;
var targetElement = (event) => event.target instanceof Element ? event.target : null;
document.addEventListener("input", (event) => {
  const input = targetInput(event);
  if (!input)
    return;
  if (input.id === "policy-search") {
    syncSearchState();
    renderDestructiveCommands();
    renderSecretPatterns();
    return;
  }
  if (input.id === "activity-search" && activity) {
    if (clearCommandFilter())
      renderActivityControls();
    activityFilters.query = input.value.trim().toLowerCase();
    clearTimeout(activityQueryTimer);
    activityQueryTimer = setTimeout(renderActivityFeed, 120);
  }
});
document.addEventListener("keydown", (event) => {
  const input = targetInput(event);
  if (!input)
    return;
  if (input.id === "tester-input" && event.key === "Enter") {
    event.preventDefault();
    runCommandTest();
    return;
  }
  const list = pathListFor(input.dataset.pathInput);
  if (!list || event.key !== "Enter")
    return;
  event.preventDefault();
  list.add(input.value);
});
document.addEventListener("paste", (event) => {
  const input = targetInput(event);
  if (!input)
    return;
  const list = pathListFor(input.dataset.pathInput);
  if (!list)
    return;
  const text = event.clipboardData?.getData("text") ?? "";
  if (!text.includes(\`
\`))
    return;
  event.preventDefault();
  list.add(\`\${input.value}
\${text}\`);
});
var saveRetentionDays = async (days) => {
  const saved = state;
  if (!saved)
    return;
  const current = saved.policy.audit.retention_days;
  if (!Number.isInteger(days) || days < 1 || days > MAX_RETENTION_DAYS) {
    qs("retention-days").value = String(current);
    setAppStatus("Retention unchanged", "error");
    setDetailStatus(\`Error: retention must be a whole number of days from 1 to \${MAX_RETENTION_DAYS}.\`, "error");
    return;
  }
  if (days === current)
    return;
  if (dirty) {
    qs("retention-days").value = String(current);
    setAppStatus("Retention unchanged", "error");
    setDetailStatus("Error: save or discard your unsaved Policy changes first.", "error");
    return;
  }
  if (days < current && !await confirmDialog({
    title: \`Shorten retention to \${dayCount(days)}?\`,
    body: \`Audit entries older than \${dayCount(days)} are deleted on the next sweep and cannot be recovered. The Activity tab will only look back \${dayCount(days)}.\`,
    detail: overview?.logsDir ?? "",
    confirmLabel: "Shorten",
    confirmClass: "danger"
  })) {
    qs("retention-days").value = String(current);
    return;
  }
  await runExclusive("Saving...", async () => {
    const policy = clonePolicy(saved.policy);
    policy.audit.retention_days = days;
    const result = await requestJson("/api/policy", {
      method: "POST",
      body: JSON.stringify(policy)
    });
    if (!isWriteSuccess(result)) {
      qs("retention-days").value = String(current);
      setAppStatus("Save failed", "error");
      setDetailStatus(\`Error: \${errorText(result)}\`, "error");
      return;
    }
    if (!await load())
      return;
    activityFilters.days = Math.min(activityFilters.days, days);
    await Promise.all([loadOverview(), loadActivity()]);
    setAppStatus(\`Retention set to \${dayCount(days)}.\`, "ok");
    setDetailStatus("");
  });
};
document.addEventListener("change", (event) => {
  const control = event.target;
  if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement))
    return;
  if (control.id === "activity-days") {
    activityFilters.days = Number(control.value);
    loadActivity();
    return;
  }
  if (control.id === "retention-days") {
    saveRetentionDays(Number(control.value));
    return;
  }
  if (control.name === "safety-level") {
    const level = safetyLevelNames.find((candidate) => candidate === control.value);
    if (!level)
      return;
    draftPolicy.safety.level = level;
    renderSafety();
    syncRawFromForm();
    updateDirtyStatus();
    refreshPolicyPreview();
    return;
  }
  if (control.dataset?.safetyOverride) {
    const capability = capabilityNames.find((candidate) => candidate === control.dataset.safetyOverride);
    if (!capability)
      return;
    if (control.value === "inherit")
      delete draftPolicy.safety.overrides[capability];
    if (control.value === "true")
      draftPolicy.safety.overrides[capability] = true;
    if (control.value === "false")
      draftPolicy.safety.overrides[capability] = false;
    syncRawFromForm();
    updateDirtyStatus();
    refreshPolicyPreview();
    return;
  }
  const input = control instanceof HTMLInputElement ? control : null;
  if (!input)
    return;
  if ("workflowWorktree" in input.dataset) {
    draftPolicy.workflow.worktree_mode = input.checked;
    syncRawFromForm();
    updateDirtyStatus();
    return;
  }
  if ("destructiveCommandEnabled" in input.dataset) {
    (async () => {
      if (!input.checked && !await confirmProtectionDisable({
        title: "Disable destructive command protection?",
        body: "Built-in destructive git, filesystem, and execution protections will stop blocking commands until you turn this back on.",
        detail: "Custom rules remain active."
      })) {
        input.checked = true;
        return;
      }
      draftPolicy.destructive_command_protection.enabled = input.checked;
      syncMasterBadges();
      pathLists["allow-paths"].render();
      syncRawFromForm();
      updateDirtyStatus();
      refreshPolicyPreview();
    })();
    return;
  }
  if (input.dataset?.destructiveTierActive) {
    const effectiveState = preview;
    if (!effectiveState)
      return;
    state?.destructiveCommandRules.filter((rule) => !rule.catastrophic && tierForRule(rule) === input.dataset.destructiveTierActive).forEach((rule) => {
      if (input.checked === effectiveState.rules[rule.id]?.inheritedEnabled) {
        delete draftPolicy.destructive_command_protection.overrides[rule.id];
        return;
      }
      draftPolicy.destructive_command_protection.overrides[rule.id] = input.checked ? "on" : "off";
    });
    syncRawFromForm();
    updateDirtyStatus();
    refreshPolicyPreview();
    return;
  }
  if (input.dataset?.destructiveCommandActive) {
    const ruleId = input.dataset.destructiveCommandActive;
    if (input.checked === preview?.rules[ruleId]?.inheritedEnabled)
      delete draftPolicy.destructive_command_protection.overrides[ruleId];
    else
      draftPolicy.destructive_command_protection.overrides[ruleId] = input.checked ? "on" : "off";
    syncRawFromForm();
    updateDirtyStatus();
    refreshPolicyPreview();
    return;
  }
  if (input.dataset?.secretGroupActive) {
    state?.secretPatterns.filter((rule) => rule.category === input.dataset.secretGroupActive).forEach((rule) => {
      setSecretOverride(rule, input.checked);
    });
    renderSecretPatterns();
    syncRawFromForm();
    updateDirtyStatus();
    return;
  }
  if (input.dataset?.secretActive) {
    const rule = state?.secretPatterns.find((item) => item.id === input.dataset.secretActive);
    if (!rule)
      return;
    setSecretOverride(rule, input.checked);
    renderSecretPatterns();
    syncRawFromForm();
    updateDirtyStatus();
    return;
  }
  if (input.id === "secret-enabled") {
    (async () => {
      if (!input.checked && !await confirmProtectionDisable({
        title: "Disable secret protection?",
        body: "Default sensitive paths, coding CLI credential locations, and deny paths will stop blocking access until you turn this back on."
      })) {
        input.checked = true;
        return;
      }
      draftPolicy.secret_protection.enabled = input.checked;
      syncMasterBadges();
      renderSecretPatterns();
      pathLists["deny-paths"].render();
      syncRawFromForm();
      updateDirtyStatus();
    })();
  }
});
document.addEventListener("click", (event) => {
  const target = targetElement(event);
  if (!target)
    return;
  if (target.closest("#tester-run")) {
    runCommandTest();
    return;
  }
  const createRule = target.closest("[data-create-rule]");
  if (createRule) {
    openRuleComposer(createRule.dataset.createRule ?? "");
    return;
  }
  const feedToggle = target.closest("[data-feed-toggle]");
  if (feedToggle) {
    const command = feedToggle.previousElementSibling;
    if (!command)
      return;
    const expanded = command.classList.toggle("expanded");
    feedToggle.setAttribute("aria-expanded", String(expanded));
    feedToggle.textContent = expanded ? "Show less" : "Show more";
    return;
  }
  const feedCopy = target.closest("[data-log-copy]");
  if (feedCopy) {
    copyFeedEntry(feedCopy);
    return;
  }
  const feedReport = target.closest("[data-report-fp]");
  if (feedReport) {
    openReportDialog(feedReport);
    return;
  }
  const blockFuture = target.closest("[data-block-future]");
  if (blockFuture) {
    const entry = renderedFeedEntries[Number(blockFuture.dataset.blockFuture)];
    if (entry?.segment || entry?.command)
      openRuleComposer(entry.segment || entry.command || "");
    return;
  }
  const topRule = target.closest(".top-rule");
  if (topRule) {
    const ruleId = topRule.dataset.ruleId ?? "";
    (ruleId.startsWith("custom.") ? jumpToRulesRule : jumpToActivityRule)(ruleId);
    return;
  }
  const ruleActivity = target.closest("[data-rule-activity]");
  if (ruleActivity) {
    jumpToActivityRule(ruleActivity.dataset.ruleActivity ?? "");
    return;
  }
  const jumpRule = target.closest("[data-jump-rule]");
  if (jumpRule) {
    qs("policy-search").value = jumpRule.dataset.jumpRule ?? "";
    syncSearchState();
    renderDestructiveCommands();
    renderSecretPatterns();
    location.hash = "policy";
    return;
  }
  const jumpCustom = target.closest("[data-jump-custom-rule]");
  if (jumpCustom) {
    jumpToRulesRule(jumpCustom.dataset.jumpCustomRule ?? "");
    return;
  }
  const topCommand = target.closest(".top-command");
  if (topCommand) {
    activityFilters.command = topCommand.dataset.command ?? "";
    activityFilters.decision = "deny";
    activityFilters.query = "";
    qs("activity-search").value = "";
    if (activity) {
      renderActivityControls();
      renderActivityFeed();
    }
    location.hash = "activity";
    return;
  }
  if (target.closest("[data-clear-command]")) {
    clearCommandFilter();
    renderActivityControls();
    renderActivityFeed();
    return;
  }
  if (target.closest("#guard-errors")) {
    clearCommandFilter();
    activityFilters.decision = "error";
    if (activity) {
      renderActivityControls();
      renderActivityFeed();
    }
    location.hash = "activity";
    return;
  }
  const chip = target.closest("[data-activity-chip]");
  if (chip && activity) {
    clearCommandFilter();
    const filter = chip.dataset.activityChip;
    if (filter !== "decision" && filter !== "agent")
      return;
    activityFilters[filter] = chip.dataset.chipValue ?? "";
    renderActivityControls();
    renderActivityFeed();
    return;
  }
  if (target.closest("#activity-refresh")) {
    refreshActivity();
    return;
  }
  if (target.closest("#integrations-refresh")) {
    refreshIntegrations();
    return;
  }
  if (target.closest("#rules-refresh")) {
    refreshRules();
    return;
  }
  const scopeChip = target.closest("[data-rules-scope]");
  if (scopeChip) {
    setRulesScope(scopeChip.dataset.rulesScope ?? "");
    return;
  }
  const exampleChip = target.closest("[data-rules-example]");
  if (exampleChip) {
    qs("rules-composer-input").value = exampleChip.dataset.rulesExample ?? "";
    return;
  }
  if (target.closest("#rules-choose-directory")) {
    chooseProjectDirectory();
    return;
  }
  if (target.closest("#rules-copy-prompt")) {
    copyRulePrompt();
    return;
  }
  const integrationButton = target.closest("[data-integration-action]");
  if (integrationButton) {
    runIntegrationAction(integrationButton);
    return;
  }
  const ruleExampleButton = target.closest("[data-rule-example]");
  if (ruleExampleButton) {
    openRuleExample(ruleExampleButton);
    return;
  }
  const secretPathsButton = target.closest("[data-secret-paths]");
  if (secretPathsButton) {
    openSecretPaths(secretPathsButton);
    return;
  }
  const tierButton = target.closest("[data-tier-toggle]");
  if (tierButton) {
    const tier = tierButton.dataset.tierToggle ?? "";
    const expanded = tierButton.getAttribute("aria-expanded") === "true";
    tierExpanded.set(tier, !expanded);
    if (searchActive && expanded)
      searchCollapsedTiers.add(tier);
    if (!expanded)
      searchCollapsedTiers.delete(tier);
    renderDestructiveCommands();
    return;
  }
  const secretGroupButton = target.closest("[data-secret-group-toggle]");
  if (secretGroupButton) {
    const category = secretGroupButton.dataset.secretGroupToggle ?? "";
    const expanded = secretGroupButton.getAttribute("aria-expanded") === "true";
    secretGroupExpanded.set(category, !expanded);
    if (searchActive && expanded)
      searchCollapsedSecretGroups.add(category);
    if (!expanded)
      searchCollapsedSecretGroups.delete(category);
    renderSecretPatterns();
    return;
  }
  if (target.closest("[data-secret-group-active], [data-destructive-tier-active]"))
    return;
  const button = target.closest(".panel-toggle, .rule-tier-head");
  if (button) {
    togglePanel(button);
    return;
  }
  const inheritedButton = target.closest("[data-use-inherited]");
  if (inheritedButton) {
    delete draftPolicy.destructive_command_protection.overrides[inheritedButton.dataset.useInherited ?? ""];
    syncRawFromForm();
    updateDirtyStatus();
    refreshPolicyPreview();
    return;
  }
  if (target.closest("#reset-rule-customizations")) {
    if (Object.keys(draftPolicy.destructive_command_protection.overrides).length === 0) {
      setAppStatus("No customizations to reset", "ok");
      return;
    }
    (async () => {
      if (!await confirmDialog({
        title: "Restore defaults?",
        body: "All built-in destructive-command rules will return to their inherited preset settings.",
        confirmLabel: "Restore defaults"
      }))
        return;
      draftPolicy.destructive_command_protection.overrides = {};
      syncRawFromForm();
      updateDirtyStatus();
      refreshPolicyPreview();
    })();
    return;
  }
  if (target.closest("#reset-secret-customizations")) {
    if (Object.keys(draftPolicy.secret_protection.overrides).length === 0) {
      setAppStatus("No customizations to reset", "ok");
      return;
    }
    (async () => {
      if (!await confirmDialog({
        title: "Restore defaults?",
        body: "All built-in secret rules will return to their inherited preset settings.",
        confirmLabel: "Restore defaults"
      }))
        return;
      draftPolicy.secret_protection.overrides = {};
      renderSecretPatterns();
      syncRawFromForm();
      updateDirtyStatus();
      refreshPolicyPreview();
    })();
    return;
  }
  if (target.closest("#discard-changes")) {
    (async () => {
      if (!await confirmDialog({
        title: "Discard unsaved changes?",
        body: "All changes since your last save will be reverted.",
        confirmLabel: "Discard changes",
        confirmClass: ""
      }))
        return;
      runExclusive("Discarding...", async () => {
        sessionStorage.removeItem("cc-safety-net-draft");
        if (await load())
          setAppStatus("Changes discarded.", "ok");
      });
    })();
    return;
  }
  const addButton = target.closest("[data-path-add]");
  if (addButton) {
    const list = pathListFor(addButton.dataset.pathAdd);
    if (list)
      list.add(qs(\`\${addButton.dataset.pathAdd}-input\`).value);
    return;
  }
  const removeButton = target.closest("[data-path-remove]");
  if (removeButton)
    pathListFor(removeButton.dataset.pathList)?.remove(Number(removeButton.dataset.pathRemove));
  const starButton = target.closest(".star-cta");
  if (starButton instanceof HTMLButtonElement) {
    starRepo(starButton);
    return;
  }
});
qs("dirty-chip").onclick = () => {
  location.hash = "policy";
};
qs("save").onclick = () => {
  if (!state) {
    setAppStatus("Load failed", "error");
    setDetailStatus("Error: Policy is not loaded yet. Reload the page.", "error");
    return;
  }
  if (state.errors.length) {
    setAppStatus("Repair required", "error");
    setDetailStatus("Error: Repair policy before saving changes.", "error");
    return;
  }
  if (!dirty) {
    setAppStatus("No changes to save", "ok");
    setDetailStatus("");
    return;
  }
  const policy = collectFormPolicy();
  runExclusive("Saving...", async () => {
    const result = await requestJson("/api/policy", {
      method: "POST",
      body: JSON.stringify(policy)
    });
    if (!isWriteSuccess(result)) {
      setAppStatus("Save failed", "error");
      setDetailStatus(\`Error: \${errorText(result)}\`, "error");
      return;
    }
    const savedPath = result.data.path;
    sessionStorage.removeItem("cc-safety-net-draft");
    if (await load()) {
      dirty = false;
      setAppStatus(\`Saved \${savedPath}.\`, "ok");
      setDetailStatus("");
    }
  });
};
qs("repair").onclick = async () => {
  if (!state) {
    setAppStatus("Load failed", "error");
    setDetailStatus("Error: Policy is not loaded yet. Reload the page.", "error");
    return;
  }
  if (state.errors.length === 0) {
    setAppStatus("");
    setDetailStatus("");
    return;
  }
  if (!await confirmDialog({
    title: "Repair policy?",
    body: "This will write canonical policy JSON. Valid settings are preserved; invalid fields are discarded. If the JSON cannot be parsed, defaults are restored.",
    detail: state.path,
    confirmLabel: "Repair",
    confirmClass: "primary"
  })) {
    return;
  }
  runExclusive("Repairing...", async () => {
    const result = await requestJson("/api/repair", { method: "POST", body: "{}" });
    if (!isWriteSuccess(result)) {
      setAppStatus("Repair failed", "error");
      setDetailStatus(\`Error: \${errorText(result)}\`, "error");
      return;
    }
    const repairedPath = result.data.path;
    sessionStorage.removeItem("cc-safety-net-draft");
    if (await load()) {
      dirty = false;
      setAppStatus(\`Repaired \${repairedPath}.\`, "ok");
      setDetailStatus("");
    }
  });
};
qs("reset").onclick = async () => {
  if (!state) {
    setAppStatus("Load failed", "error");
    setDetailStatus("Error: Policy is not loaded yet. Reload the page.", "error");
    return;
  }
  if (!await confirmDialog({
    title: "Reset policy?",
    body: "This will restore the default policy JSON at this path.",
    detail: state.path,
    confirmLabel: "Reset policy"
  })) {
    return;
  }
  runExclusive("Resetting...", async () => {
    const result = await requestJson("/api/reset", { method: "POST", body: "{}" });
    if (!isWriteSuccess(result)) {
      setAppStatus("Reset failed", "error");
      setDetailStatus(\`Error: \${errorText(result)}\`, "error");
      return;
    }
    const resetPath = result.data.path;
    sessionStorage.removeItem("cc-safety-net-draft");
    if (await load()) {
      dirty = false;
      setAppStatus(\`Reset \${resetPath} to defaults.\`, "ok");
      setDetailStatus("");
    }
  });
};
setRawCopyCopied(false);
qs("raw-copy").onclick = () => {
  copyRawToClipboard();
};
var themeOrder = ["auto", "light", "dark"];
var themeIcons = {
  auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"></rect><path d="M8 20h8M12 16v4"></path></svg>',
  light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"></path></svg>',
  dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>'
};
var themeLabels = { auto: "Auto", light: "Light", dark: "Dark" };
var applyTheme = (pref) => {
  document.documentElement.style.colorScheme = pref === "auto" ? "light dark" : pref;
  qs("theme-toggle").innerHTML = \`\${themeIcons[pref]}<span>\${themeLabels[pref]}</span>\`;
  qs("theme-toggle").setAttribute("aria-label", \`Color theme: \${themeLabels[pref]}. Click to change.\`);
};
var themePref = themeOrder.find((pref) => pref === localStorage.getItem("cc-safety-net-theme")) ?? "auto";
applyTheme(themePref);
qs("theme-toggle").onclick = () => {
  themePref = themeOrder[(themeOrder.indexOf(themePref) + 1) % themeOrder.length] ?? "auto";
  if (themePref === "auto")
    localStorage.removeItem("cc-safety-net-theme");
  else
    localStorage.setItem("cc-safety-net-theme", themePref);
  applyTheme(themePref);
};
window.addEventListener("beforeunload", (event) => {
  if (!dirty)
    return;
  event.preventDefault();
  event.returnValue = "";
});
window.addEventListener("hashchange", applyView);
applyView();
loadHealth();
load().then((loaded) => {
  if (loaded)
    loadStarContext();
  activityFilters.days = Math.min(activityFilters.days, retentionDays());
  loadOverview();
  loadActivity();
}).catch((error) => {
  setAppStatus("Load failed", "error");
  setDetailStatus(String(error), "error");
});

  </script>
</body>
</html>
`;var H3='<script id="ccsn-data" type="application/json">';function W3(n){return A3.replace(H3,()=>H3+JSON.stringify({token:n}).replaceAll("<","\\u003c"))}var Zt="kenryu42/cc-safety-net",z4=`https://github.com/${Zt}`,je=1e4,V4=7,G4=i.object({port:i.number()}),S4=i.object({command:i.string(),policy:i.json().optional()}),U4=i.object({target:i.enum(z.map((n)=>n.target))}),C4=i.object({stargazers_count:i.number()});async function _3(n,t={}){let r=F({label:"gui",booleans:{noOpen:["--no-open"]}},n),e=t.log??console.log,a=t.error??console.error;if(r.errors.length>0){for(let d of r.errors)a(d);return a("Usage: cc-safety-net gui [--no-open]"),1}let l=await O4(t);if(e(`CC Safety Net policy GUI: ${l.url}`),!r.flags.noOpen)try{await(t.openBrowser??t6)(l.url)}catch(d){a(`Failed to open browser: ${d instanceof Error?d.message:String(d)}`),a(`Open this URL manually: ${l.url}`)}if(t.keepAlive===!1)return await l.close(),0;return await n6(l),0}async function O4(n={}){let t=n.token??M4(24).toString("base64url"),r=K4((l,d)=>{T4(l,d,t,n)});await new Promise((l,d)=>{r.once("error",d),r.listen(0,"127.0.0.1",()=>{r.off("error",d),l()})});let a=`http://127.0.0.1:${G4.parse(r.address()).port}`;return{origin:a,token:t,url:`${a}/?token=${encodeURIComponent(t)}`,close:()=>N4(r)}}async function T4(n,t,r,e){let a=new URL(n.url??"/","http://127.0.0.1");if(n.method==="GET"&&a.pathname==="/favicon.ico"){t.writeHead(204,{"cache-control":"no-store"}),t.end();return}if(!P4(n,a,r)){q(t,403,{error:"Forbidden"});return}if(n.method==="GET"&&a.pathname==="/"){I4(t,W3(r));return}if(n.method==="GET"&&a.pathname==="/api/policy"){let l=V3(e);q(t,200,{...l,configState:fn(M(e)),destructiveCommandRules:pn,secretPatterns:K3,version:j(),preview:l.errors.length>0?null:S3(l.policy)});return}if(n.method==="POST"&&a.pathname==="/api/policy/preview"){let l=await Jt(n);if(!l.ok){q(t,400,{errors:[l.error]});return}let d=G3(l.value);q(t,d.errors.length>0?400:200,d);return}if(n.method==="POST"&&a.pathname==="/api/policy/explain"){let l=await Jt(n);if(!l.ok){q(t,400,{errors:[l.error]});return}let d=S4.safeParse(l.value);if(!d.success){q(t,400,{errors:["command must be a string"]});return}let s=sr(d.data.policy);if(s.length>0){q(t,400,{errors:s});return}q(t,200,_4(d.data.command,d.data.policy??null,e));return}if(n.method==="POST"&&a.pathname==="/api/policy"){let l=await Jt(n);if(!l.ok){q(t,400,{errors:[l.error]});return}let d=qe(l.value,e);q(t,d.errors.length>0?400:200,d);return}if(n.method==="POST"&&a.pathname==="/api/reset"){q(t,200,qe(z3,e));return}if(n.method==="POST"&&a.pathname==="/api/repair"){q(t,200,U3(e));return}if(n.method==="GET"&&a.pathname==="/api/activity"){let l=z2(e),d=E4(a.searchParams.get("days"),l);if(d===null){q(t,400,{error:`days must be an integer between 1 and ${l}`});return}q(t,200,J3(d,e.activityLogsDir));return}if(n.method==="POST"&&a.pathname==="/api/rules/choose-directory"){q(t,200,await R3());return}if(n.method==="GET"&&a.pathname==="/api/rules"){let l=o2(e),d=new Map(l.rules.map((s)=>[s.name,s]));q(t,200,{projectPath:e.cwd??process.cwd(),canPickDirectory:Y3(process.platform,process.env),rulebooks:l.rulebooks.map((s)=>({source:s.source,spec:s.spec,name:s.name,version:s.version,rules:s.rules.flatMap((c)=>{let L=d.get(c);if(!L)return[];return[{name:L.name,command:L.command,subcommand:L.subcommand,block_args:L.block_args,reason:L.reason}]})})),errors:l.errors,warnings:l.warnings});return}if(n.method==="GET"&&a.pathname==="/api/star/context"){q(t,200,await(e.fetchStarContext??(()=>s6({logsDir:e.activityLogsDir})))());return}if(n.method==="POST"&&a.pathname==="/api/star"){let l=await(e.starRepo??r6)();q(t,200,l.ok?{ok:!0}:{ok:!1,fallbackUrl:z4});return}if(n.method==="GET"&&a.pathname==="/api/integrations"){q(t,200,await(e.fetchIntegrations??a6)());return}if(n.method==="GET"&&a.pathname==="/api/health"){q(t,200,await(e.fetchHealth??l6)());return}if(n.method==="POST"&&(a.pathname==="/api/install"||a.pathname==="/api/uninstall")){let l=await Jt(n);if(!l.ok){q(t,400,{errors:[l.error]});return}let d=U4.safeParse(l.value);if(!d.success){q(t,400,{error:"unknown target"});return}let s=a.pathname==="/api/install"?"install":"uninstall";q(t,200,await(e.runIntegration??d6)(s,d.data.target));return}q(t,404,{error:"Not found"})}function _4(n,t,r){let e=pt(t),a=M(r),l=vn({rules:a.policy.rules,transparentWrappers:a.policy.transparentWrappers,safety:O3(e.safety),worktreeMode:e.workflow.worktree_mode,destructiveCommandProtectionEnabled:e.destructive_command_protection.enabled,destructiveCommandRuleOverrides:e.destructive_command_protection.overrides,destructiveCommandAllowPaths:e.destructive_command_protection.allow_paths,secretProtection:{enabled:e.secret_protection.enabled,disabledRules:[...C3(e.secret_protection.overrides)],denyPaths:e.secret_protection.deny_paths}});return K2(n,{policySnapshot:l,cwd:r.cwd,userConfigDir:r.userConfigDir})}function E4(n,t){if(n===null)return Math.min(V4,t);let r=Number(n);if(!Number.isInteger(r)||r<1||r>t)return null;return r}function P4(n,t,r){if(t.searchParams.get("token")!==r)return!1;if(n.method!=="POST")return!0;return n.headers["x-cc-safety-net-token"]===r}async function Jt(n){let t=[];for await(let r of n)t.push(Buffer.from(r));try{return{ok:!0,value:i.json().parse(JSON.parse(Buffer.concat(t).toString("utf-8")||"{}"))}}catch(r){return{ok:!1,error:`Invalid JSON: ${r instanceof Error?r.message:String(r)}`}}}function I4(n,t){n.writeHead(200,{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}),n.end(t)}function q(n,t,r){n.writeHead(t,{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}),n.end(JSON.stringify(r))}function N4(n){return new Promise((t,r)=>{n.close((e)=>e?r(e):t())})}function n6(n){return new Promise((t)=>{let r=()=>{process.off("SIGINT",e),process.off("SIGTERM",e)},e=()=>{r(),n.close().then(t)};process.once("SIGINT",e),process.once("SIGTERM",e)})}function t6(n){let t=process.platform==="darwin"?"open":process.platform==="win32"?"cmd":"xdg-open",r=process.platform==="win32"?["/c","start","",n]:[n];return new Promise((e,a)=>{let l=T3(t,r,{detached:!0,stdio:"ignore"}),d=(c)=>{l.off("spawn",s),a(c)},s=()=>{l.off("error",d),l.unref(),e()};l.once("error",d),l.once("spawn",s)})}async function r6(n="gh",t=je){return{ok:await ke(n,["api","-X","PUT",`/user/starred/${Zt}`],t)===0}}var e6={amp:"ampVersion","antigravity-cli":"antigravityCliVersion","claude-code":"claudeCodeVersion",codex:"codexCliVersion","copilot-cli":"copilotCliVersion",cursor:"cursorVersion","gemini-cli":"geminiCliVersion","hermes-agent":"hermesAgentVersion","kimi-code":"kimiCodeVersion",openclaw:"openClawVersion",opencode:"openCodeVersion",pi:"piCliVersion"};async function a6(n={}){let t=await xn(n.fetcher),r=E3(t,n.homeDir);return{targets:c2.map((e)=>{let a=r.find((l)=>l.platform===e.id);return{target:e.id,label:f2(e.id),version:t[e6[e.id]],status:a?.configured?"active":a?.detected?"disabled":a?.inspectionStatus==="not-inspected"?"not-inspected":"not-installed"}}),system:{version:t.version,nodeVersion:t.nodeVersion,platform:t.platform}}}function E3(n,t){return N2(process.cwd(),{homeDir:t,ampPluginListOutput:n.ampPluginListOutput,codexPluginListOutput:n.codexPluginListOutput,copilotCliVersion:n.copilotCliVersion})}async function l6(n={}){let[t,r]=await Promise.all([xn(n.fetcher),(n.checkUpdates??T2)()]);return{hooks:E3(t,n.homeDir).filter((e)=>e.detected).map((e)=>({platform:e.platform,label:f2(e.platform),configured:e.configured})),update:{currentVersion:r.currentVersion,latestVersion:r.latestVersion??null,updateAvailable:r.updateAvailable}}}var M3=Promise.resolve();function d6(n,t,r={}){let e=async()=>{let l=[],d=console.log,s=console.error,c=process.stdout.write;console.log=(...L)=>l.push(L.map(String).join(" ")),console.error=console.log,process.stdout.write=()=>!0;try{return{ok:await Yn(n,[],{selectTargets:async()=>[t],...r})===0,output:l.join(`
`)}}finally{console.log=d,console.error=s,process.stdout.write=c}},a=M3.then(e);return M3=a.then(()=>{return},()=>{return}),a}async function s6(n={}){let[t,r,e]=await Promise.all([i6(n.command),c6(n.fetchRepo),Promise.resolve(Tn(z2(),n.logsDir).totalBlocked)]);return{starred:t,starCount:r,blockedTotal:e}}async function i6(n="gh",t=je){if(await ke(n,["auth","status"],t)!==0)return null;let r=await ke(n,["api",`/user/starred/${Zt}`],t);if(r===0)return!0;if(r===null)return null;return!1}function ke(n,t,r){return new Promise((e)=>{let a=T3(n,t,{stdio:"ignore",windowsHide:!0}),l=!1,d,s=(c)=>{if(l)return;if(l=!0,d)clearTimeout(d);e(c)};a.once("error",()=>s(null)),a.once("close",s),d=setTimeout(()=>{a.kill(),s(null)},r)})}async function c6(n=fetch){try{let t=await n(`https://api.github.com/repos/${Zt}`,{headers:{accept:"application/vnd.github+json"},signal:AbortSignal.timeout(je)});if(!t.ok)return null;let r=C4.safeParse(await t.json());return r.success?r.data.stargazers_count:null}catch{return null}}function L6(n){if(n[0]!=="help")return!1;let t=n[1];if(!t)re(),process.exit(0);if(Zn(t))process.exit(0);console.error(`Unknown command: ${t}`),console.error("Run 'cc-safety-net --help' for available commands."),process.exit(1)}var u6={hook:async(n)=>{let t=r0(n);if(t){await t.run();return}console.error("hook requires exactly one integration flag. Try: cc-safety-net hook --kimi-code"),Zn("hook",console.error),process.exit(1)},install:async(n)=>{process.exit(await Yn("install",n))},update:async(n)=>{process.exit(await xe(n))},uninstall:async(n)=>{process.exit(await Yn("uninstall",n))},rule:async(n)=>{process.exit(await j3(n))},status:async(n)=>{if(e2(F({label:"status"},n).errors))process.exit(1);B3()},statusline:async(n)=>{let t=F({label:"statusline",booleans:{claudeCode:["-cc","--claude-code"]}},n);if(t.errors.length===0&&t.flags.claudeCode){await me();return}if(e2(t.errors),!t.flags.claudeCode)console.error("statusline requires --claude-code (-cc)");Zn("statusline",console.error),process.exit(1)},doctor:async(n)=>{let t=Pr(n);if(!t)process.exit(1);let r=await Ca({json:t.json,skipUpdateCheck:t.skipUpdateCheck});process.exit(r)},logs:async(n)=>{process.exit(await D1(n))},gui:async(n)=>{process.exit(await _3(n))},explain:async(n)=>{let t=Ir(n);if(!t)process.exit(1);let r=K2(t.command,{cwd:t.cwd}),e=!!process.env.NO_COLOR||!process.stdout.isTTY;if(t.json)console.log(te(r));else console.log(ne(r,{asciiOnly:e}));process.exit(0)}};async function p6(){let n=process.argv.slice(2),t=F({label:"cc-safety-net",booleans:{version:["-V","--version"]},positionals:"list"},n);if(L6(n))return;let r=n[0],e=r?On(r):void 0;if(t.help&&e&&e.name!=="rule")Zn(e.name),process.exit(0);if(!r||t.help&&!e)re(),process.exit(0);if(t.flags.version)nl(),process.exit(0);if(e){await u6[e.name](n.slice(1));return}let a=e0(r);if(a){await a.run();return}if(r==="--statusline"){await me();return}console.error(r.startsWith("-")?`Unknown option: ${r}`:`Unknown command: ${r}`),console.error("Run 'cc-safety-net --help' for usage."),process.exit(1)}p6().catch((n)=>{console.error("CC Safety Net error:",n),process.exit(1)});
