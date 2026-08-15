#!/usr/bin/env node
import{$ as ti,$a as is,A as Cn,Aa as Rn,B as Fn,Ba as qd,C as le,Ca as Nr,D as hd,Da as Vr,E as G,Ea as oi,F as M,Fa as Mr,G as Qt,Ga as Xr,H as Jt,Ha as X,I as qe,Ia as Mt,J as Bt,Ja as Ht,K as Jn,Ka as ni,L as Ln,La as K,M as Ee,Ma as Jd,N as ei,Na as ve,O as un,Oa as Bd,P as Ds,Pa as wr,Q as ui,Qa as Nd,R as Je,Ra as Vd,S as Us,Sa as Md,T as Is,Ta as pt,U as Ve,Ua as Xd,V as Me,Va as Kd,W as ge,Wa as ys,X as he,Xa as gs,Y as ds,Ya as hs,Z as pe,Za as _s,_ as kn,_a as xd,aa as Bn,ab as rs,b as u,ba as Ts,bb as Xt,c as Dr,ca as di,cb as ss,d as Ur,da as Os,db as as,e as C,ea as Cs,eb as vn,f as Ir,fa as cs,fb as xn,g as Ct,ga as Fr,gb as an,h as Br,ha as ls,hb as os,i as E,ia as ps,ib as F,j as L,ja as ms,jb as ye,k as ae,ka as ii,kb as me,l as x,la as Ar,lb as Rs,m as $n,ma as k,mb as _e,n as Gr,na as ri,nb as dn,o as En,oa as Ps,ob as Ms,p as ue,pa as on,pb as Be,q as Sd,qa as fe,r as qt,ra as si,s as Qr,sa as ai,t as de,ta as fs,u as Hr,ua as vs,v as Gt,va as qr,w as ns,wa as An,x as es,xa as Nt,y as W,ya as Vt,z as Y,za as ts}from"../chunks/index-h2mf4f80.js";var nc=["-h","--help"];function Z(n,e){let t=Object.entries(n.booleans??{}),i=Object.entries(n.values??{}),r=Object.fromEntries(t.map(([l])=>[l,!1])),s={},a=[],o=[],d=!1,c=-1;for(let[l,p]of e.entries()){if(l<=c)continue;if(p==="--"){a.push(...e.slice(l+1));break}if(nc.includes(p)){d=!0;continue}let y=t.find(([,f])=>f.includes(p));if(y){r[y[0]]=!0;continue}let m=i.find(([,f])=>f.includes(p));if(m){let f=e[l+1];if(f===void 0||f.startsWith("-")){o.push(`${p} requires a value`);continue}s[m[0]]=f,c=l+1;continue}if(p.startsWith("-")){o.push(`Unknown option for ${n.label}: ${p}`);continue}if(n.positionals==="tail"){a.push(...e.slice(l));break}a.push(p)}if(n.positionals!=="list"&&n.positionals!=="tail")o.push(...a.map((l)=>`Unexpected argument for ${n.label}: ${l}`));return{flags:r,values:s,positionals:a,help:d,errors:o}}function rn(n){for(let e of n)console.error(e);return n.length>0}import{readdirSync as qc,statSync as $s,unlinkSync as Jc}from"node:fs";import{basename as xs,dirname as Bc,join as Nc,resolve as Vc}from"node:path";function j(n){return Array.from(n,(e)=>{let t=e.charCodeAt(0);if(t<=31||t>=127&&t<=159)return`\\x${t.toString(16).padStart(2,"0")}`;return e}).join("")}var Pt=(n)=>{let e=Date.now()-new Date(n).getTime();if(!Number.isFinite(e))return"";let t=Math.floor(e/60000),i=Math.floor(t/60),r=Math.floor(i/24);if(r>0)return`${r}d ago`;if(i>0)return`${i}h ago`;if(t>0)return`${t}m ago`;return"just now"},Tn=(n)=>{let e=(n??"").trim().split(/\s+/).filter((r)=>r&&!/^[A-Za-z_][A-Za-z0-9_]*=/.test(r)),t=e[0]?.split("/").pop();if(!t)return null;let i=e[1];return i&&/^[a-z][a-z0-9-]*$/.test(i)?`${t} ${i}`:t};import{existsSync as ec,readdirSync as tc,readFileSync as ic}from"node:fs";import{join as rc}from"node:path";function fn(n,e){try{return tc(n,{withFileTypes:!0,encoding:"utf8"}).flatMap((t)=>{let i=rc(n,t.name);if(t.isDirectory())return fn(i,e);if(t.name.endsWith(".jsonl"))return[i];return[]})}catch{if(e&&ec(n))e.count++;return[]}}function Rt(n){let e=(r)=>`${r.sessionId}
${Tn(r.segment||r.command)}`,t=n.filter((r)=>r.decision!=="allow"),i=t.filter((r)=>r.sessionId).reduce((r,s)=>r.set(e(s),(r.get(e(s))??0)+1),new Map);return new Set(t.filter((r)=>r.failureStage||(i.get(e(r))??0)>=2))}function se(n,e){try{return ic(n,"utf-8").split(`
`).filter(Boolean).flatMap((t)=>{try{let i=Ee.safeParse(JSON.parse(t));if(i.success)return[i.data];if(e)e.count++;return[]}catch{if(e)e.count++;return[]}})}catch{if(e)e.count++;return[]}}import{resolve as Tc}from"node:path";var sc=["AKIA","ASIA","ghp_","gho_","ghu_","ghs_","ghr_","github_pat_","glpat-","xox","npm_","pypi-","rk_","sk-","sk_","gsk_","xai-","pplx-","bastn_","tgp_v1_","flp_","wfr_","fw_","fwp_","tp-","psk-"];function Tr(n){let e=0,t={allocateSegment(){return e++},getNextSegmentIndex(){return e},recordGlobal(i){n.record({kind:"step",scope:"global",step:i})},recordSegment(i,r=t.currentSegmentIndex){if(r===void 0)return;n.record({kind:"step",scope:"segment",segmentIndex:r,step:i})}};return t}function Pr(n={}){let e=[],t=n.maxEvents??512,i={maxTextLength:n.maxTextLength??2048,maxListLength:n.maxListLength??128,maxObjectProperties:n.maxObjectProperties??n.maxListLength??128,maxDepth:n.maxDepth??16},r=0,s,a=new Set;return{record(o){if(s)return;try{if(!o||e.length>=t){r++;return}e.push(Ot(ac(o,i,a)))}catch{r++}},finish(o){if(s)return s;try{s=Ot({events:Object.freeze(e),droppedEvents:r,terminal:oc(o,i,a)})}catch{r++,s=Object.freeze({events:Object.freeze(e),droppedEvents:r,terminal:Object.freeze({result:"blocked",reason:"trace unavailable".slice(0,i.maxTextLength),segment:"trace unavailable".slice(0,i.maxTextLength)})})}return s}}}function ac(n,e,t){if(n.kind!=="step")throw TypeError("invalid trace event");let{scope:i,step:r}=n;Oe(r,t,e);let s=Et(r,e,t);if(i==="global")return{kind:"step",scope:"global",step:s};if(i!=="segment")throw TypeError("invalid trace event scope");return{kind:"step",scope:"segment",segmentIndex:n.segmentIndex,step:s}}function oc(n,e,t){let i=n.result;if(i==="allowed")return Object.freeze({result:"allowed"});if(i!=="blocked")throw TypeError("invalid trace terminal");let r=n.ruleId,s={result:"blocked",reason:Pn(n.reason,e,t),segment:Pn(n.segment,e,t)};if(r)return Object.freeze({...s,ruleId:Pn(r,e,t)});return Object.freeze(s)}function Oe(n,e,t,i=0,r=new WeakSet){if(Er(n)){let o=n.slice(0,t.maxTextLength);if(!Ct(o))return;for(let d of Ir(o))for(let c of d.match(/[^\s"'()$]+/g)??[])e.add(Rr(c));return}if(!Or(n)||i>=t.maxDepth||r.has(n))return;if(r.add(n),Cr(n)){let o=Math.min(n.length,t.maxListLength);for(let d=0;d<o;d++)Oe(n[d],e,t,i+1,r);return}let s=0,a=new Set;for(let o in n){if(!Object.hasOwn(n,o))continue;if(s>=t.maxObjectProperties)break;s++,Oe(o,e,t);let d=Pn(o,t,e);if(a.has(d))continue;a.add(d),Oe(n[o],e,t,i+1,r)}}function Et(n,e,t,i=0,r=new WeakSet){if(Er(n))return Pn(n,e,t);if(!Or(n))return n;if(i>=e.maxDepth)return;if(r.has(n))return;if(r.add(n),Cr(n)){let o=[],d=Math.min(n.length,e.maxListLength);for(let c=0;c<d;c++)o.push(Et(n[c],e,t,i+1,r));return o}let s={},a=0;for(let o in n){if(!Object.hasOwn(n,o))continue;if(a>=e.maxObjectProperties)break;a++;let d=Pn(o,e,t);if(Object.hasOwn(s,d))continue;Object.defineProperty(s,d,{value:Et(n[o],e,t,i+1,r),enumerable:!0,configurable:!0,writable:!0})}return s}function Pn(n,e,t){let i=n.slice(0,e.maxTextLength),r=Ct(i)?Ur(i):i,s=t.size>0?dc(r,t):r;return(uc(s)?Dr(s):s).slice(0,e.maxTextLength)}function uc(n){return n.includes("PRIVATE KEY")||n.includes("://")||n.includes("eyJ")||n.includes(":")&&/(?:authorization|cookie|x-api-key|api-key|(?:^|\s)(?:-u|--user)(?:\s|=))/i.test(n)||n.length>=14&&sc.some((e)=>n.includes(e))||n.length>=49&&/\b[a-f0-9]{32}\.[A-Za-z0-9]{16}\b/.test(n)}function dc(n,e){return n.replace(/[^\s"'()$]+/g,(t)=>e.has(Rr(t))?"<redacted>":t)}function Rr(n){let e=2166136261,t=2166136261;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),16777619),t=Math.imul(t^n.charCodeAt(n.length-i-1),16777619);return`${e>>>0}:${t>>>0}:${n.length}`}function Ot(n){if(n!==null&&n!==void 0&&!Object.isFrozen(n)){for(let e of Object.values(n))Ot(e);Object.freeze(n)}return n}function Er(n){return n!==Object(n)&&Object.prototype.toString.call(n)==="[object String]"}function Or(n){return n!==null&&Object(n)===n}function Cr(n){return Array.isArray(n)}function Jr(n,e,t,i){let r=i??Fr(),s=t??r.getCommandProgram(n,e.shell??"auto"),a=Pr(),o=Tr(a),d=s.dialect==="powershell"?r.getCommandProgram(n,"posix"):s,c=Ar(d);o.recordGlobal({type:"parse",input:n,segments:c.map((m)=>[...m])});let l=qr(n,{...e,analyzePartialProgram:!0,trace:o},s,r),p=o.getNextSegmentIndex();if(l&&p>0&&p<c.length)o.recordSegment({type:"segment-skipped",index:p,reason:"prior-segment-blocked"},p);let y=l?l.ruleId?{result:"blocked",reason:l.reason,segment:l.evidence.find((m)=>m.kind==="command")?.segment??n,ruleId:l.ruleId}:{result:"blocked",reason:l.reason,segment:l.evidence.find((m)=>m.kind==="command")?.segment??n}:{result:"allowed"};return Object.freeze({decision:l,trace:a.finish(y),program:s})}import{resolve as cc}from"node:path";function Ft(n){let e=Nr().safeParse(n);if(!e.success)return{ok:!1,errors:Mr(e.error.issues)};return{ok:!0,config:{version:1,rules:e.data.rules??[]}}}function lc(n){let e=Ft(n);return{errors:e.ok?[]:e.errors,ruleNames:new Set(Vr(n).map((t)=>t.toLowerCase()))}}function At(n){let e=Kr(n);if(!e.ok)return e.result;return lc(e.parsed)}function Kr(n){try{return pc(Br(n)?n:ae(n))}catch(e){let t=e instanceof Error?e.message:String(e);return Ce(e instanceof SyntaxError?"Invalid JSON":t)}}function pc(n){try{let e=x(n);if(e===null)return Ce(`File not found: ${n.path}`);if(!e.trim())return Ce("Config file is empty");return{ok:!0,parsed:u.json().parse(JSON.parse(e))}}catch(e){let t=e instanceof Error?e.message:String(e);return Ce(e instanceof SyntaxError?"Invalid JSON":t)}}function Ce(n){return{ok:!1,result:{errors:[n],ruleNames:new Set}}}function Wr(n){return cc(n??process.cwd(),".safety-net.json")}function sn(n){let e=Kr(n);if(!e.ok)return e.result;let t=Xr(e.parsed);return{errors:t.errors,ruleNames:t.sources}}import{isAbsolute as mc,join as Fe,relative as fc,resolve as Yr,sep as vc}from"node:path";async function On(n={}){let e=Wt(n);return yc(e,await Ae(e,Rn()))}function yc(n,e){if(!e.ok)return e;let t=M(n),i=[...new Set(an(t.configPath,t.lockPath,n,t.filesystemScope))];if(i.length===0)return e;return{ok:!1,errors:i,warnings:e.warnings,entries:e.entries}}async function Ae(n,e,t,i={}){let r=null,s=!1;try{let a=M(n),o=Mt(a.configTarget);if(!o.ok)return o.result;let d=o.config;if(n.check)return xc(d,a,n);r={target:a.lockTarget,content:x(a.lockTarget)};let c=Xt(a.lockTarget);if(c.errors.some((_)=>_.startsWith("Unable to access ")))return{ok:!1,errors:c.errors,warnings:[],entries:[]};if(n.only&&c.errors.length>0)return{ok:!1,errors:c.errors,warnings:[],entries:[]};let l=c.errors.length>0?null:c.lock,p=n.only?is(d,l,n.only):{ok:!0,specs:d.rules};if(!p.ok)return p.result;if(n.only&&!l&&p.specs.length<d.rules.length)return{ok:!1,errors:[`No lockfile available for partial update; run ${es}`],warnings:[],entries:[]};let y=(await hc(p.specs,(_)=>ss(_,a.configDir,n,l,a.filesystemScope,e),e)).map((_)=>Lc(_,l,t));for(let _ of y)zc(_.content,_.entry,a.configDir,n,a.filesystemScope);let m=n.only?kc(d,l,y):y.map((_)=>_.entry);s=!0,K(a.lockTarget,{version:1,rulebooks:m},void 0,i._testAfterPolicyRename);let f=new Map(y.map((_)=>[_.entry.spec,_.rulebook.rules.length])),v=Sc(m,a.configDir,n,a.filesystemScope,i);return{ok:!0,errors:[],warnings:v,entries:m.map((_)=>wc(_,f))}}catch(a){if(s&&r){let o=us(r);if(o)return o}return ce(a instanceof Error?a:Error(String(a)))}}async function Kt(n,e={}){return gc(n,Wt(e),Rn())}async function gc(n,e,t,i={}){let r=null,s=!1;try{let a=M(e),o=x(a.configTarget);r={target:a.configTarget,content:o};let d=Mt(a.configTarget);if(!d.ok)return d.result;let c=d.config,l=ns(n)?await as(n,t):[{spec:n}],p=l.map((f)=>f.spec),y=[...new Set([...c.rules,...p])];if(y.length>Nt)return _c();if(y.length!==c.rules.length)s=!0,K(a.configTarget,{version:1,rules:y,overrides:c.overrides??{},transparent_wrappers:c.transparent_wrappers??[]},void 0,i._testAfterPolicyRename);let m=await Ae(e,t,new Map(l.filter((f)=>!!f.display_ref).map((f)=>[f.spec,f.display_ref])),i);if(!m.ok)oe(a.configTarget,o);return m}catch(a){if(s&&r){let o=us(r);if(o)return o}return ce(a instanceof Error?a:Error(String(a)))}}async function hc(n,e,t=Rn()){if(n.length>Nt)throw Error(Vt);let i=n.map((d,c)=>({source:d,index:c})),r=[],s=0,a,o=Array.from({length:Math.min(n.length,ts.concurrency)},async()=>{while(!a){let d=i[s];if(!d)return;s++;try{r[d.index]=await e(d.source,d.index,t.controller.signal)}catch(c){if(!a)a={value:c},s=i.length,t.controller.abort(c);return}}});if(await Promise.all(o),a)throw a.value;return r}function _c(){return{ok:!1,errors:[Vt],warnings:[],entries:[]}}function Wt(n){return{cwd:n.cwd,cacheConfigDir:n.cacheConfigDir,userConfigDir:n.userConfigDir,userConfigPath:n.userConfigPath,projectConfigPath:n.projectConfigPath,global:n.global,check:n.check,only:n.only,refresh:n.refresh}}function bc(n){return{...Wt(n),deleteSource:n.deleteSource}}async function Yt(n,e={}){try{return await $c(n,bc(e),{})}catch(t){return ce(t instanceof Error?t:Error(String(t)))}}async function $c(n,e,t){let i=M(e),r=X(i.configTarget);if(r.errors.length>0)return{ok:!1,errors:r.errors,warnings:[],entries:[]};if(!r.config)return{ok:!1,errors:[`No config found at ${i.configPath}`],warnings:[],entries:[]};let s=Xt(i.lockTarget);if(s.errors.length>0)return{ok:!1,errors:s.errors,warnings:[],entries:[]};let a=rs(r.config.rules,s.lock,n);if(!a.ok)return a.result;let o=e.deleteSource?Zc(i.configDir,a.specs,s.lock,i.filesystemScope):{ok:!0,dirs:[]};if(!o.ok)return o.result;let d=x(i.configTarget);if(d===null)return ce(Error("Rules config is unavailable."));try{K(i.configTarget,{version:1,rules:r.config.rules.filter((p)=>!a.specs.includes(p)),overrides:r.config.overrides??{},transparent_wrappers:r.config.transparent_wrappers??[]},void 0,t._testAfterPolicyRename)}catch(p){throw oe(i.configTarget,d),p}let c=await Ae(e,Rn(),void 0,t);if(!c.ok)return oe(i.configTarget,d),c;let l=Dc(o.dirs,t,i.filesystemScope);if(!l.ok){oe(i.configTarget,d);let p=await Ae(e,Rn(),void 0,t);if(!p.ok)return{ok:!1,errors:[...l.result.errors,...p.errors],warnings:p.warnings,entries:p.entries};return l.result}return c}async function xc(n,e,t){let i=os(n,e.lockPath,e.configDir,t,t.global?"user":"project",e.filesystemScope);return{ok:i.errors.length===0&&i.warnings.length===0,errors:[...i.errors,...i.warnings],warnings:[],entries:i.entries}}function Lc(n,e,t){let i=e?.rulebooks.find((s)=>s.spec===n.entry.spec&&s.kind==="github"),r=t?.get(n.entry.spec)??(i?.kind==="github"?i.display_ref:void 0);if(!r||n.entry.kind!=="github")return n;return{...n,entry:{...n.entry,display_ref:r}}}function kc(n,e,t){let i=new Set(n.rules),r=new Set(e?.rulebooks.map((a)=>a.spec)??[]),s=new Map(t.map((a)=>[a.entry.spec,a.entry]));return[...(e?.rulebooks.filter((a)=>i.has(a.spec))??[]).map((a)=>s.get(a.spec)??a),...t.filter((a)=>!r.has(a.entry.spec)).map((a)=>a.entry)]}function wc(n,e){return{...n,ruleCount:e.get(n.spec)}}function zc(n,e,t,i,r){let s=Jt(e,Bt(t,i));$n(L(r,s),n)}function Sc(n,e,t,i,r){let s=Bt(e,t),a=qe(s),o=L(i,a),d=En(o);if(!d)return[];let c=n.map((p)=>L(i,Jt(p,s))),l=d.filter((p)=>p.kind==="directory").map((p)=>({directory:L(i,Fe(a,p.name)),identity:L(i,Fe(a,p.name,Hr))})).filter((p)=>!c.some((y)=>Gr(p.identity,y))).map((p)=>p.directory);for(let p of l)Qr(p);return l.flatMap((p)=>{try{return Uc(p,r),[]}catch{return["Unable to prune rules policy cache safely."]}})}function Zc(n,e,t,i){let r=new Map(t?.rulebooks.map((c)=>[c.spec,c])??[]),s=e.flatMap((c)=>{let l=r.get(c);if(!l)return de.test(c)?[]:["--delete-source can only delete local rulebook sources"];return l.kind==="local-directory"?[]:["--delete-source can only delete local rulebook sources"]}),a=e.map((c)=>{let l=r.get(c);return Fe(n,l?.kind==="local-directory"?l.path:c)}),o=s.length>0?[]:a.flatMap((c)=>jc(n,c,i)),d=[...s,...o];return d.length>0?{ok:!1,result:{ok:!1,errors:d,warnings:[],entries:[]}}:{ok:!0,dirs:a}}function jc(n,e,t){let i=Yr(n),r=Yr(e),s=fc(i,r);if(s===""||s===".."||s.startsWith(`..${vc}`)||mc(s))return[`Refusing to delete local rulebook source outside ${n}: ${e}`];let a=L(t,r),o=En(a);if(!o)return[`Local rulebook source directory not found: ${e}`];let d=o.find((c)=>c.name==="rulebook.json");if(!d)return[`Local rulebook source directory is missing rulebook.json: ${e}`];if(d.kind!=="file")throw new E(t.label);if(x(L(t,Fe(r,"rulebook.json"))),o.length>1)return[`Local rulebook source directory contains extra files: ${e}. delete manually if you really want to remove the directory.`];return[]}function Dc(n,e,t){let i=n.flatMap((r)=>{try{return Ic(L(t,r),e),[]}catch(s){return[`Failed to delete local rulebook source ${r}: ${s instanceof Error?s.message:String(s)}`]}});return i.length>0?{ok:!1,result:{ok:!1,errors:i,warnings:[],entries:[]}}:{ok:!0}}function Uc(n,e){if(e._testPruneRulebookCacheDir){e._testPruneRulebookCacheDir(n.path);return}qt(n)}function Ic(n,e){if(e._testDeleteLocalSourceDir){e._testDeleteLocalSourceDir(n.path);return}qt(n)}function oe(n,e){if(e===null){ue(n);return}$n(n,e)}function us(n){try{oe(n.target,n.content)}catch(e){return ce(e instanceof Error?e:Error(String(e)))}return}function ce(n){return{ok:!1,errors:[n.message],warnings:[],entries:[]}}function qn(n,e){let t=Rc(e),i=fs(t),r={effectiveLevel:i.effectiveLevel,selectedPreset:t.policySnapshot.policy.safety.level??"standard",effectiveCapabilities:i.effectiveCapabilities,destructiveCommandRuleOverrides:t.policySnapshot.policy.destructiveCommandRuleOverrides},{configSource:s,configValid:a}=Pc({cwd:e?.cwd,userConfigDir:e?.userConfigDir});if(!n||!n.trim())return{trace:{steps:[{type:"error",message:"No command provided"}],segments:[]},result:"allowed",configSource:s,configValid:a,...r};let o=Ec(n,t);if(o){let f={trace:{steps:[],segments:[{index:0,steps:[{type:"rule-check",ruleModule:o.ruleModule,ruleFunction:o.ruleFunction,matched:!0,reason:o.reason}]}]},result:"blocked",reason:C(o.reason),segment:C(o.target),configSource:s,configValid:a,...r};if(o.ruleId)f.ruleId=C(o.ruleId);return f}let d=Jr(n,t),c=d.decision,l=c?.ruleId??Oc(n,t),p=pe.find((f)=>f.id===l&&f.activationCapability),y=p?i.policy.effectiveDestructiveCommandRules[p.id]:void 0,m={trace:Fc(d.trace),result:c?"blocked":"allowed",reason:c?C(c.reason):void 0,segment:c?C(c.evidence.find((f)=>f.kind==="command")?.segment??n):void 0,ruleId:c?.ruleId?C(c.ruleId):void 0,customRule:Cc(Ac(c?.ruleId,t.policySnapshot)),configSource:s,configValid:a,...r};if(p&&y)m.ruleActivation={id:p.id,...y};return m}function Pc(n){let e=W(n?.cwd),t=n?.userConfigPath??Y(n),i=G({cwd:n?.cwd,userConfigDir:n?.userConfigDir,userConfigPath:n?.userConfigPath});try{if(x(i.projectConfigTarget)!==null){if(sn(i.projectConfigTarget).errors.length===0)return{configSource:e,configValid:!0};return{configSource:e,configValid:!1}}}catch(r){if(r instanceof E)return{configSource:e,configValid:!1};throw r}try{if(x(i.userConfigTarget)!==null){let r=sn(i.userConfigTarget);return{configSource:t,configValid:r.errors.length===0}}return{configSource:null,configValid:!0}}catch(r){if(r instanceof E)return{configSource:t,configValid:!1};throw r}}function Rc(n){let e=Tc(n?.cwd??process.cwd()),t=n?.policySnapshot??F({cwd:e,userConfigDir:n?.userConfigDir}),i=on(t.policy);return{cwd:e,effectiveCwd:e,policySnapshot:t,environment:ds(),protectedGitMetadata:ms(e),effectiveCapabilities:i.capabilities,strict:n?.strict??i.strict,paranoidRm:i.paranoidRm,paranoidInterpreters:i.paranoidInterpreters,worktreeMode:i.worktreeMode}}function Ec(n,e){let t=e.cwd??process.cwd(),i=cs(An("",{command:n},{kind:"command",shell:"posix"},{executionCwd:t,configCwd:t},n)),r=gs(i);if(r)return{reason:ys,target:r.target,ruleId:"policy-protection",ruleModule:"policy-protection",ruleFunction:"findPolicyConfigMutationTarget"};let s=ps(i,e.protectedGitMetadata);if(s)return{reason:ls,target:s.target,ruleId:"git-metadata-protection",ruleModule:"git-metadata-protection",ruleFunction:"findGitMetadataMutationTarget"};let a=e.policySnapshot.policy,o=a.secretProtection.enabled===!1?null:_s(i,a.secretProtection,{strict:e.strict});if(o)return{reason:hs,target:o.target,ruleId:o.ruleId,ruleModule:"secret-protection",ruleFunction:"findSensitiveTarget"};return null}function Oc(n,e){let t=e.policySnapshot.policy,i=me({...t,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:{...t.destructiveCommandRuleOverrides,...Object.fromEntries(pe.flatMap((r)=>r.activationCapability?[[r.id,"on"]]:[]))}},e.policySnapshot.state==="degraded"?{diagnostics:e.policySnapshot.diagnostics,reason:e.policySnapshot.reason}:void 0);return vs(n,{...e,policySnapshot:i,strict:!0,paranoidRm:!0,paranoidInterpreters:!0})?.ruleId}function Cc(n){if(!n)return;let e={id:C(n.id)};if(n.rulebook)e.rulebook={name:C(n.rulebook.name),version:C(n.rulebook.version)};if(n.source)e.source=C(n.source);if(n.override)e.override={type:"reason",reason:C(n.override.reason)};return e}function Fc(n){let e=n.events.flatMap((i)=>i.kind==="step"&&i.scope==="global"?[i.step]:[]),t=new Map;for(let i of n.events){if(i.kind!=="step"||i.scope!=="segment")continue;let r=t.get(i.segmentIndex)??{index:i.segmentIndex,steps:[]};r.steps.push(i.step),t.set(i.segmentIndex,r)}return{steps:e,segments:[...t.values()]}}function Ac(n,e){let t=n?.replace(/^custom\./,"");if(!t||!e.policy.rules.some((i)=>i.name===t))return;return e.ruleMetadata[t]??Object.freeze({id:t})}function Mc(n){let e=Jn(),t=Z({label:"logs",booleans:{all:["--all"],suspect:["--suspect"],json:["--json"],pruneLegacy:["--prune-legacy"],dryRun:["--dry-run"]},values:{id:["--id"],limit:["--limit"],since:["--since"],agent:["--agent"],rule:["--rule"],session:["--session"],project:["--project"]}},n);if(rn(t.errors))return null;if(t.values.id!==void 0&&!/^[a-f0-9]{16}$/.test(t.values.id))return console.error("--id must be 16 hexadecimal characters"),null;let i=t.values.limit===void 0?20:bs(t.values.limit);if(i===null)return console.error("--limit must be a positive number"),null;let r=t.values.since===void 0?Math.min(30,e):bs(t.values.since);if(r===null||r>e)return console.error(`--since must be a positive number of days no greater than ${e}`),null;let s={limit:i,limitExplicit:t.values.limit!==void 0,since:r,sinceExplicit:t.values.since!==void 0,all:t.flags.all,json:t.flags.json,suspect:t.flags.suspect,pruneLegacy:t.flags.pruneLegacy,dryRun:t.flags.dryRun,id:t.values.id,agent:t.values.agent,rule:t.values.rule,session:t.values.session,project:t.values.project===void 0?void 0:Vc(t.values.project)};if(s.id&&(s.agent!==void 0||s.rule!==void 0||s.session!==void 0||s.project!==void 0||s.suspect||s.sinceExplicit||s.limitExplicit))return console.error("--id cannot be combined with --agent, --rule, --session, --project, --suspect, --since, or --limit"),null;if(s.pruneLegacy&&(s.id!==void 0||s.agent!==void 0||s.rule!==void 0||s.session!==void 0||s.project!==void 0||s.suspect||s.all||s.sinceExplicit||s.limitExplicit))return console.error("--prune-legacy cannot be combined with --id, --agent, --rule, --session, --project, --suspect, --all, --since, or --limit"),null;if(s.dryRun&&!s.pruneLegacy)return console.error("--dry-run requires --prune-legacy"),null;return s}async function Ls(n,e={}){let t=Mc(n);if(!t)return 1;let i=e.logsDir??un();if(t.pruneLegacy)return Xc(i,t.json,t.dryRun);if(!i)return console.log(t.json?"[]":t.id?`No retained audit log entry found for id ${j(t.id)}.`:"No audit log entries found."),0;Ln(i);let r={count:0},s=fn(i,r).flatMap((l)=>se(l,r).map((p)=>({entry:p,file:l})));if(r.count>0)console.error(`warning: ${r.count} audit log ${r.count===1?"source":"sources"} could not be read; these results are incomplete`);if(t.id)return Gc(s,t,e.timeZone);let a=Date.now()-t.since*24*60*60*1000,o=s.filter((l)=>Qc(l,t,i,a)),d=t.suspect?Rt(o.map((l)=>l.entry)):null,c=(d?o.filter((l)=>d.has(l.entry)):o).sort((l,p)=>Date.parse(p.entry.ts)-Date.parse(l.entry.ts)).slice(0,t.limit);if(t.json)return console.log(JSON.stringify(c.map((l)=>l.entry),null,2)),0;if(c.length===0)return console.log("No audit log entries found."),0;for(let l of c)console.log(el(l.entry,e.timeZone));return 0}function Xc(n,e,t){let i=n?Wc(n).map((o)=>Nc(n,o)):[];if(t)return Kc(i,e);let r=[],s=0,a=0;for(let o of i){let d=$s(o,{throwIfNoEntry:!1})?.size??0,c=Yc(o);if(c){r.push(`${xs(o)}: ${c}`);continue}s++,a+=d}if(e)return console.log(JSON.stringify({removedFiles:s,removedBytes:a,failedFiles:r.length})),r.length===0?0:1;console.log(s===0&&r.length===0?"No legacy audit log files found.":`Removed ${s} legacy audit log ${s===1?"file":"files"} (${ks(a)}).`);for(let o of r)console.error(`Could not remove ${j(o)}`);if(console.log("Nested v2 audit logs were not changed."),s>0)console.log("This deletion cannot be undone.");return r.length===0?0:1}function Kc(n,e){let t=n.reduce((i,r)=>i+($s(r,{throwIfNoEntry:!1})?.size??0),0);if(e)return console.log(JSON.stringify({dryRun:!0,files:n.length,bytes:t})),0;if(console.log(n.length===0?"No legacy audit log files found.":`Would remove ${n.length} legacy audit log ${n.length===1?"file":"files"} (${ks(t)}).`),console.log("Nested v2 audit logs are not included."),n.length>0)console.log("Run the same command without --dry-run to delete them.");return 0}function Wc(n){try{return qc(n,{withFileTypes:!0}).filter((e)=>e.isFile()&&e.name.endsWith(".jsonl")).map((e)=>e.name)}catch{return[]}}function Yc(n){try{return Jc(n),null}catch(e){return e instanceof Error?e.message:String(e)}}function ks(n){let e=["B","KiB","MiB","GiB"],t=Math.min(Math.floor(Math.log2(Math.max(n,1))/10),e.length-1);return`${Math.round(n/1024**t*10)/10} ${e[t]}`}function Gc(n,e,t){let i=n.filter((s)=>s.entry.id===e.id);if(i.length>1)return console.error(`Multiple audit log entries found for id ${j(e.id??"")}.`),1;if(e.json)return console.log(JSON.stringify(i.map((s)=>s.entry),null,2)),0;let r=i[0];if(!r)return console.log(`No retained audit log entry found for id ${j(e.id??"")}.`),0;return console.log(tl(r.entry,t)),0}function Qc(n,e,t,i){if(!e.all&&n.entry.decision==="allow")return!1;if(Date.parse(n.entry.ts)<i)return!1;if(e.agent!==void 0&&n.entry.agent!==e.agent)return!1;if(e.rule!==void 0&&n.entry.ruleId!==e.rule)return!1;if(e.session!==void 0&&!Hc(n,t,e.session))return!1;if(e.project!==void 0&&!nl(n.entry.cwd,e.project))return!1;return!0}function Hc(n,e,t){if(n.entry.sessionId===t)return!0;return Bc(n.file)===e&&xs(n.file,".jsonl")===t}function nl(n,e){if(!n)return!1;return n===e||n.startsWith(`${e}/`)}function el(n,e){let t=j(n.id??"-"),i=j(n.decision??"deny"),r=n.cwd?`  [${j(n.cwd)}]`:"",s=n.segment||n.command,a=s===n.command?"":"↳ ",o=s.length>50?`${s.slice(0,50)}…`:s;return`${t.padEnd(16)}  ${j(ws(n.ts,e))}  ${i.padEnd(5)}  ${j(n.agent??"-").padEnd(15)}  ${j(n.ruleId??"-").padEnd(20)}  ${a}${j(o)}${r}`}function tl(n,e){let t=(r)=>j(r===void 0||r===null||r===""?"-":r),i=n.shape?`${n.agent??"-"} (shape: ${n.shape})`:n.agent??"-";return[`id:        ${t(n.id)}`,`ts:        ${t(ws(n.ts,e))}`,`decision:  ${t(n.decision)}`,`agent:     ${t(i)}`,`level:     ${t(n.level)}`,`tool:      ${t(n.toolName)}`,`rule:      ${t(n.ruleId)}`,`intent:    ${t(n.intent)}`,`stage:     ${t(n.failureStage)}`,`error:     ${t(n.errorCode)}`,`session:   ${t(n.sessionId)}`,`cwd:       ${t(n.cwd)}`,`version:   ${t(n.v)}`,`truncated: ${t(n.truncated===!0?"yes":void 0)}`,`reason:    ${t(n.reason)}`,`command:   ${t(n.command)}`,`segment:   ${t(n.segment)}`].join(`
`)}function ws(n,e){let t=new Date(n);if(Number.isNaN(t.getTime()))return n;return new Intl.DateTimeFormat("sv-SE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:e}).format(t)}function bs(n){let e=Number(n);return Number.isFinite(e)&&e>0?e:null}var zs={name:"doctor",aliases:["--doctor"],description:"Run diagnostic checks to verify installation and configuration",usage:"doctor [options]",options:[{flags:"--json",description:"Output diagnostics as JSON"},{flags:"--skip-update-check",description:"Skip npm registry version check"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net doctor","cc-safety-net doctor --json","cc-safety-net doctor --skip-update-check"]};var Ss={name:"explain",description:"Show step-by-step analysis trace of how a command would be analyzed",usage:"explain [options] <command>",argument:"<command>",options:[{flags:"--json",description:"Output analysis as JSON"},{flags:"--cwd",argument:"<path>",description:"Use custom working directory"},{flags:"-h, --help",description:"Show this help"}],examples:['cc-safety-net explain "git reset --hard"','cc-safety-net explain --json "rm -rf /"','cc-safety-net explain --cwd /tmp "git status"']};var Zs={name:"gui",description:"Open the local policy editor GUI",usage:"gui [options]",options:[{flags:"--no-open",description:"Print the URL without opening a browser"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net gui","cc-safety-net gui --no-open"]};import{isAbsolute as Fs,relative as yl}from"node:path";var js=u.json(),il=u.looseObject({}),Es=u.string(),rl=u.union([u.string().transform((n)=>Buffer.from(n,"utf-8")),u.instanceof(Uint8Array).transform((n)=>Buffer.from(n))]),sl=u.looseObject({cwd:u.string().optional(),tool_input:js.optional(),toolCall:u.looseObject({args:js.optional()}).optional()}),al=u.looseObject({cwd:u.string().optional(),toolCall:u.looseObject({args:u.looseObject({Cwd:u.string().optional()}).optional()}).optional()}),ol=8388608;function ul(n,e){console.log(JSON.stringify(n(Us(e))))}async function dl(n){let e;try{e=(await ci(process.stdin)).trim()}catch{n({reason:"Failed to parse hook input JSON."});return}if(!e){n({reason:"Missing hook input JSON."});return}return li(e,n,"Failed to parse hook input JSON.")}async function ci(n){let e=[],t=0;for await(let i of n){let r=rl.parse(i);if(t+=r.byteLength,t>ol)throw cl(n),Error("hook input byte limit exceeded");e.push(r)}return Buffer.concat(e,t).toString("utf-8")}function cl(n){try{if(n.destroy){Promise.resolve(n.destroy()).catch(()=>{});return}if(n.cancel)Promise.resolve(n.cancel()).catch(()=>{})}catch{}}function li(n,e,t){try{return JSON.parse(n)}catch{e({reason:t});return}}function T(n,e){let t=e.get(n);return t?{kind:"command",shell:t}:{kind:Ts(n)}}function Q(n,e,t,i){let r=n===void 0?process.cwd():n,s=Es.safeParse(r),a=s.success&&s.data.trim()!==""?dn([s.data]):void 0;if(a)return{configCwd:a,executionCwd:a};return O(i,e,t,s.success?s.data:void 0),null}function O(n,e,t,i){let r;try{r=di(e)}catch(s){if(!(s instanceof Bn))throw s}n(Je({command:r,segment:i,toolName:t}))}async function ll(n){let e=await dl(n.outputDeny);if(e===void 0)return;if(!il.safeParse(e).success){O(n.outputDeny);return}if(!n.isSupported(e))return;let t=n.getAgent?.(e)??n.agent,i=n.agent===t?void 0:n.agent,r=vl(e),s=(f,v)=>{Ds(f,()=>n.getSessionId(e),{agent:t,["shape"]:i,toolName:v,cwd:r}),n.outputDeny(f)},a=n.getToolName(e),o=Es.safeParse(a);if(!o.success||o.data.trim()===""){O((f)=>s(f),fl(e));return}let d=o.data,c=(f)=>s(f,d),l;try{l=n.getToolInput(e,d,c)}catch(f){if(!(f instanceof Bn))throw f;O(c,void 0,d);return}if(!l.ok)return;let p=n.getContext(e,l.input,d,c);if(!p)return;let y;try{y=di(l.input)}catch(f){if(!(f instanceof Bn))throw f;O(c,void 0,d);return}let m=An(d,l.input,l.route,p,y??null);try{let f=Be(m,{guard:{auditAllowed:Ps(),dependencies:n.guardDependencies},audit:{agent:t,["shape"]:i,getSessionId:()=>n.getSessionId(e)}}),v=ui(f,{includeEvidence:!0,toolName:f.stage==="command-analysis"?void 0:d});if(v){n.outputDeny(v);return}n.outputAllow?.()}catch(f){if(!(f instanceof Rs))throw f;pl(f);let v=ui(f.evaluation,{includeEvidence:!0,toolName:f.evaluation.stage==="command-analysis"?void 0:d});if(v)n.outputDeny(v);return}}function pl(n){if(!fe(k.debug))return;console.error(`CC Safety Net debug: ${ml(n.stage)}: ${Is(n.cause)}`)}function ml(n){if(n==="policy-protection")return"hook policy protection failed";if(n==="config-load")return"hook config loading failed";if(n==="secret-protection")return"hook secret protection failed";return"hook analysis failed"}function fl(n){let e=sl.safeParse(n);if(!e.success)return;if(e.data.tool_input!==void 0)return e.data.tool_input;return e.data.toolCall?.args}function vl(n){let e=al.safeParse(n);if(!e.success)return null;return e.data.cwd??e.data.toolCall?.args?.Cwd??null}async function P(n){let e=(r)=>ul(n.createDenyOutput,r),t=n.createAllowOutput;await ll({...n,outputDeny:e,outputAllow:t?()=>console.log(JSON.stringify(t())):void 0})}var gl=u.record(u.string(),u.json()),Ne=u.object({toolCall:u.object({name:u.string().optional(),args:gl.optional()}).optional(),stepIdx:u.number().optional(),conversationId:u.string().optional(),workspacePaths:u.array(u.string()).optional(),transcriptPath:u.string().optional(),artifactDirectoryPath:u.string().optional()}),ig=u.union([u.json(),u.undefined()]),hl=new Map([["run_command","auto"]]),_l=new Set(["absolutepath","directorypath","file_path","filepath","path","searchdirectory","searchpath","target_file","targetfile"]);function As(n){return T(n,hl)}async function qs(){await P({agent:"antigravity-cli",createDenyOutput:(n)=>({decision:"deny",reason:n}),isSupported:()=>!0,getToolName:(n)=>Ne.safeParse(n).data?.toolCall?.name,getToolInput:(n,e)=>({ok:!0,input:kl(Ne.safeParse(n).data?.toolCall?.args,e),route:As(e)}),getContext:(n,e,t,i)=>{let r=Ne.safeParse(n);if(!r.success)return yn(i,e,t),null;return bl(r.data,e,t,i)},getSessionId:(n)=>Ne.safeParse(n).data?.conversationId})}function bl(n,e,t,i){let s=Ll(n).flatMap((l)=>{let p=dn([l]);return p?[p]:[]});if(!s[0])return yn(i,e,t),null;if(t!=="run_command"){let l;try{l=$l(e,t,s)}catch(p){if(p instanceof Bn)return yn(i,void 0,t),null;if(!(p instanceof Ve))throw p;return yn(i,e,t),null}if(!l)return yn(i,e,t),null;return{configCwd:l,executionCwd:l,policyConfigCwds:s}}let a=n.toolCall?.args;if(!a||!Object.hasOwn(a,"Cwd"))return{configCwd:s[0],executionCwd:s[0],policyConfigCwds:s};let o=a.Cwd,d=u.string().refine((l)=>l.trim()!=="").safeParse(o);if(!d.success)return yn(i,e,t),null;let c=_e(d.data,s);if(c){let l=Js(c,s);if(!l)return yn(i,e,t,d.data),null;return{configCwd:l,executionCwd:c,policyConfigCwds:s}}return yn(i,e,t,d.data),null}function $l(n,e,t){let i=As(e),r=[...Os(n,_l),...i.kind==="patch"?Cs(n):[]].filter(Fs),s=Me(),a=new Set(r.flatMap((o)=>{let d=Js(ge(o,he,s),t);return d?[d]:[]}));if(a.size>1)return null;return[...a][0]??t[0]??null}function Js(n,e){return e.filter((t)=>xl(n,t)).reduce((t,i)=>i.length>t.length?i:t,"")||null}function xl(n,e){let t=yl(e,n);return t===""||!t.startsWith("..")&&!Fs(t)}function yn(n,e,t,i){let r=u.string().safeParse(e?.command).data;n(Je({command:r,segment:i,toolName:t}))}function Ll(n){if(n.workspacePaths===void 0)return[process.cwd()];let e=n.workspacePaths?.filter((t)=>t.trim()!=="")??[];return dn(e)?e:[]}function kl(n,e){if(!n)return;if(e!=="run_command")return n;let t=u.string().min(1).safeParse(n.CommandLine).data;if(t)return{...n,command:t};return Object.fromEntries(Object.entries(n).filter(([i])=>i!=="command"))}var Nn=[{id:"antigravity-cli",displayName:"Antigravity CLI",doctorOrder:3,runtime:{order:1,flags:["-ac","--agy-cli"],description:"Run as Antigravity CLI PreToolUse hook",legacyTopLevelFlags:[]},install:{order:2,flag:"--agy-cli",installLabel:"Antigravity CLI",helpTarget:"Antigravity CLI hook config",probeCommand:["agy","--version"]}},{id:"claude-code",displayName:"Claude Code",doctorOrder:1,runtime:{order:2,displayName:"Coding CLI",flags:["-cc","--coding-cli"],legacyFlags:["--claude-code"],description:"Run as Coding CLI PreToolUse hook",legacyTopLevelFlags:["-cc","--claude-code"]},install:{order:3,flag:"--claude-code",installLabel:"Claude Code",helpTarget:"Claude Code plugin",probeCommand:["claude","--version"]}},{id:"codex",displayName:"Codex",doctorOrder:4,install:{order:4,flag:"--codex",installLabel:"Codex",helpTarget:"Codex plugin",probeCommand:["codex","--version"]}},{id:"copilot-cli",displayName:"GitHub Copilot CLI",doctorOrder:7,runtime:{order:5,flags:["-cp","--copilot-cli"],description:"Run as GitHub Copilot CLI PreToolUse hook",legacyTopLevelFlags:["-cp","--copilot-cli"]},install:{order:7,flag:"--copilot-cli",installLabel:"GitHub Copilot CLI",helpTarget:"GitHub Copilot CLI plugin",probeCommand:["copilot","--binary-version"]}},{id:"gemini-cli",displayName:"Gemini CLI",doctorOrder:6,runtime:{order:4,flags:["-gc","--gemini-cli"],description:"Run as Gemini CLI BeforeTool hook",legacyTopLevelFlags:["-gc","--gemini-cli"]},install:{order:6,flag:"--gemini-cli",installLabel:"Gemini CLI",helpTarget:"Gemini CLI extension",probeCommand:["gemini","--version"]}},{id:"hermes-agent",displayName:"Hermes Agent",doctorOrder:8,runtime:{order:6,flags:["-ha","--hermes-agent"],description:"Run as Hermes Agent pre_tool_call hook",legacyTopLevelFlags:[]},install:{order:8,flag:"--hermes-agent",installLabel:"Hermes Agent",helpTarget:"Hermes Agent plugin",probeCommand:["hermes","--version"]}},{id:"kimi-code",displayName:"Kimi Code",doctorOrder:9,runtime:{order:7,flags:["-kc","--kimi-code"],description:"Run as Kimi Code PreToolUse hook",legacyTopLevelFlags:[]},install:{order:9,flag:"--kimi-code",installLabel:"Kimi Code",helpTarget:"Kimi Code hook config",probeCommand:["kimi","--version"]}},{id:"openclaw",displayName:"OpenClaw",doctorOrder:10,install:{order:10,flag:"--openclaw",installLabel:"OpenClaw",helpTarget:"OpenClaw plugin",probeCommand:["openclaw","--version"]}},{id:"opencode",displayName:"OpenCode",doctorOrder:11,install:{order:11,flag:"--opencode",installLabel:"OpenCode",helpTarget:"OpenCode plugin",probeCommand:["opencode","--version"]}},{id:"pi",displayName:"Pi",doctorOrder:12,install:{order:12,flag:"--pi",installLabel:"Pi",helpTarget:"Pi package",probeCommand:["pi","--version"]}},{id:"cursor",displayName:"Cursor",doctorOrder:5,runtime:{order:3,flags:["-cu","--cursor"],description:"Run as Cursor preToolUse hook",legacyTopLevelFlags:[]},install:{order:5,flag:"--cursor",installLabel:"Cursor",helpTarget:"Cursor hook config",probeCommand:["cursor","--version"]}},{id:"amp",displayName:"Amp Code",doctorOrder:2,install:{order:1,flag:"--amp",installLabel:"Amp Code",helpTarget:"Amp Code plugin",probeCommand:["amp","--version"]}}],Bs=Nn.slice().sort((n,e)=>n.doctorOrder-e.doctorOrder).map((n)=>n.id),Ns=Nn.filter((n)=>("runtime"in n)).slice().sort((n,e)=>n.runtime.order-e.runtime.order).map((n)=>({id:n.id,displayName:"displayName"in n.runtime?n.runtime.displayName:n.displayName,flags:n.runtime.flags,legacyFlags:"legacyFlags"in n.runtime?n.runtime.legacyFlags:[],description:n.runtime.description,legacyTopLevelFlags:n.runtime.legacyTopLevelFlags})),cn=Nn.slice().sort((n,e)=>n.install.order-e.install.order).map((n)=>({id:n.id,...n.install})).map(({order:n,...e})=>e),ag=u.record(u.string(),u.string()).parse(Object.fromEntries(Nn.map((n)=>[n.id,n.displayName])));function gn(n){return Nn.find((e)=>e.id===n)?.displayName??n}function hn(n){return Nn.find((e)=>e.id===n)?.install.installLabel??n}import{homedir as wl}from"node:os";import{isAbsolute as Vs,join as pi}from"node:path";function Xs(n){if(n!==void 0&&n!==null&&!Vs(n))return"unknown";try{let e=Me(),t=n?ge(n,he,e):void 0,i=process.env.HOME||wl(),r=[["codex",process.env.CODEX_HOME||pi(i,".codex")],["copilot-cli",process.env.COPILOT_HOME||pi(i,".copilot")],["claude-code",process.env.CLAUDE_CONFIG_DIR||pi(i,".claude")]],s=t?r.flatMap(([a,o])=>{if(!Vs(o))return[];return Ms(t,ge(o,he,e))?[a]:[]}):[];if(s.length===1)return s[0]??"unknown";if(s.length>1)return"unknown"}catch(e){if(e instanceof Ve)return"unknown";return"unknown"}if(process.env.CLAUDECODE==="1"||Boolean(process.env.CLAUDE_CODE_ENTRYPOINT))return"claude-code";return"unknown"}var mi="PreToolUse",Ks="BeforeTool",Ws="pre_tool_call",fi="PreToolUse";var zl=new Map([["Bash","posix"],["PowerShell","powershell"]]);function Sl(n){return T(n,zl)}async function Ys(){await P({agent:"claude-code",getAgent:(n)=>Xs(n.transcript_path),createDenyOutput:(n)=>({hookSpecificOutput:{hookEventName:mi,permissionDecision:"deny",permissionDecisionReason:n}}),isSupported:(n)=>n.hook_event_name===mi,getToolName:(n)=>n.tool_name,getToolInput:(n,e)=>({ok:!0,input:n.tool_input,route:Sl(e)}),getContext:(n,e,t,i)=>Q(n.cwd,e,t,i),getSessionId:(n)=>n.session_id})}var Zl=new Map([["bash","auto"],["Bash","auto"]]),jl=u.string(),Dl=u.string().trim().min(1);function Ul(n){return T(n,Zl)}async function Gs(){await P({agent:"copilot-cli",createDenyOutput:(n)=>({permissionDecision:"deny",permissionDecisionReason:n}),isSupported:()=>!0,getToolName:(n)=>n.toolName,getToolInput:(n,e,t)=>{let i=jl.safeParse(n.toolArgs).data;if(!i)return t({reason:"Failed to parse toolArgs JSON."}),{ok:!1};let r=li(i,t,"Failed to parse toolArgs JSON.");if(r===void 0)return{ok:!1};return{ok:!0,input:r,route:Ul(e)}},getContext:(n,e,t,i)=>Q(n.cwd,e,t,i),getSessionId:(n)=>Dl.safeParse(n.sessionId).data})}var Lg=u.looseObject({conversation_id:u.json().optional(),hook_event_name:u.json().optional(),tool_name:u.json().optional(),tool_input:u.json().optional(),cwd:u.json().optional(),workspace_roots:u.json().optional()}),Il=u.looseObject({working_directory:u.json().optional()}),Vn=u.string(),Tl=u.array(u.json()),Pl=new Map([["Shell","auto"]]);function Rl(n){return T(n,Pl)}async function Qs(){await P({agent:"cursor",createDenyOutput:(n)=>({permission:"deny",user_message:n,agent_message:n}),createAllowOutput:()=>({permission:"allow"}),isSupported:()=>!0,getToolName:(n)=>n.tool_name,getToolInput:(n,e)=>({ok:!0,input:n.tool_input,route:Rl(e)}),getContext:El,getSessionId:(n)=>{let e=Vn.safeParse(n.conversation_id);return e.success?e.data:void 0}})}function El(n,e,t,i){let r=Ol(n);if(!r[0])return O(i,e,t),null;let s=_e(Fl(n.cwd),r);if(!s){let c=Vn.safeParse(n.cwd);return O(i,e,t,c.success?c.data:void 0),null}let a=Il.safeParse(e);if(!a.success)return{configCwd:s,executionCwd:s,policyConfigCwds:r};if(!Object.hasOwn(a.data,"working_directory"))return{configCwd:s,executionCwd:s,policyConfigCwds:r};let o=Vn.safeParse(a.data.working_directory);if(!o.success||o.data.trim()==="")return O(i,e,t),null;let d=_e(o.data,r);if(!d)return O(i,e,t,o.data),null;return{configCwd:s,executionCwd:d,policyConfigCwds:r}}function Ol(n){return Cl(n).flatMap((e)=>{let t=dn([e]);return t?[t]:[]})}function Cl(n){if(n.workspace_roots===void 0){let t=Vn.safeParse(n.cwd);return t.success&&t.data.trim()!==""?[t.data]:[]}let e=Tl.safeParse(n.workspace_roots);if(!e.success)return[];return e.data.flatMap((t)=>{let i=Vn.safeParse(t);return i.success&&i.data.trim()!==""?[i.data]:[]})}function Fl(n){let e=Vn.safeParse(n);return e.success&&e.data.trim()!==""?e.data:"."}var Al=new Map([["run_shell_command","auto"]]);function ql(n){return T(n,Al)}async function Hs(){await P({agent:"gemini-cli",createDenyOutput:(n)=>({decision:"deny",reason:n,systemMessage:n}),isSupported:(n)=>n.hook_event_name===Ks,getToolName:(n)=>n.tool_name,getToolInput:(n,e)=>({ok:!0,input:n.tool_input,route:ql(e)}),getContext:(n,e,t,i)=>Q(n.cwd,e,t,i),getSessionId:(n)=>n.session_id})}import{resolve as Jl}from"node:path";var Bl=u.looseObject({workdir:u.json().optional()}),Nl=new Map([["terminal","posix"]]);async function na(){await P({agent:"hermes-agent",createDenyOutput:(n)=>({action:"block",message:n}),isSupported:(n)=>n.hook_event_name===Ws,getToolName:(n)=>n.tool_name,getToolInput:(n,e)=>({ok:!0,input:Bl.safeParse(n.tool_input).data??{},route:T(e,Nl)}),getContext:Vl,getSessionId:(n)=>n.session_id})}function Vl(n,e,t,i){let r=Q(n.cwd,e,t,i);if(!r)return null;if(!Object.hasOwn(e,"workdir"))return r;let s=u.string().trim().min(1).safeParse(e.workdir).data;if(!s)return O(i,e,t),null;let a=dn([Jl(r.configCwd,s)]);if(!a)return O(i,e,t,s),null;return{...r,executionCwd:a}}var Ml=new Map([["Bash","posix"]]);function Xl(n){return T(n,Ml)}async function ea(){await P({agent:"kimi-code",createDenyOutput:(n)=>({hookSpecificOutput:{hookEventName:fi,permissionDecision:"deny",permissionDecisionReason:n}}),isSupported:(n)=>n.hook_event_name===fi,getToolName:(n)=>n.tool_name,getToolInput:(n,e)=>({ok:!0,input:n.tool_input,route:Xl(e)}),getContext:(n,e,t,i)=>Q(n.cwd,e,t,i),getSessionId:(n)=>n.session_id})}var Kl={"antigravity-cli":qs,"claude-code":Ys,"copilot-cli":Gs,cursor:Qs,"gemini-cli":Hs,"hermes-agent":na,"kimi-code":ea},Mn=Ns.map((n)=>({...n,run:Kl[n.id]}));function ta(n){let e=Z({label:"hook",booleans:Object.fromEntries(Mn.map((i)=>[i.id,[...i.flags,...i.legacyFlags]]))},n);if(e.errors.length>0)return;let t=Mn.filter((i)=>e.flags[i.id]);return t.length===1?t[0]:void 0}function ia(n){return Mn.find((e)=>e.legacyTopLevelFlags.some((t)=>t===n))}var Wl=Mn.map((n)=>({flags:n.flags.join(", "),description:n.description})),Yl=Mn.flatMap((n)=>n.flags.map((e)=>`cc-safety-net hook ${e}`)),ra={name:"hook",description:"Run as an agent CLI hook (reads JSON from stdin)",usage:"hook INTEGRATION_FLAG",options:[...Wl,{flags:"-h, --help",description:"Show this help"}],examples:Yl};var sa={name:"install",description:"Install CC Safety Net into a coding agent CLI",usage:"install [TARGET_FLAG]",options:[...cn.map((n)=>({flags:n.flag,description:`Install ${n.helpTarget}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net install",...cn.map((n)=>`cc-safety-net install ${n.flag}`)]},aa={name:"uninstall",description:"Uninstall CC Safety Net from a coding agent CLI",usage:"uninstall [TARGET_FLAG]",options:[...cn.map((n)=>({flags:n.flag,description:`Uninstall ${n.helpTarget}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net uninstall",...cn.map((n)=>`cc-safety-net uninstall ${n.flag}`)]},oa={name:"update",description:"Update every installed CC Safety Net integration to the latest version",usage:"update",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net update"]};var ua={name:"logs",description:"Browse audit log entries recorded by hooks",usage:"logs [options]",options:[{flags:"--id",argument:"<id>",description:"Show one entry from retained history by its 16-character id (not guaranteed once it is older than the configured retention)"},{flags:"--limit",argument:"<n>",description:"Maximum entries to print",default:"20"},{flags:"--since",argument:"<days>",description:"Only include entries newer than this many days (max: the configured audit retention, 1-365)",default:"30"},{flags:"--agent",argument:"<name>",description:"Filter by agent name"},{flags:"--rule",argument:"<ruleId>",description:"Filter by rule id"},{flags:"--session",argument:"<id>",description:"Filter by session id"},{flags:"--project",argument:"<path>",description:"Filter by project path"},{flags:"--suspect",description:"Only denials that look like false positives"},{flags:"--all",description:"Include allow entries"},{flags:"--prune-legacy",description:"Permanently delete all legacy root-level logs; nested logs are untouched"},{flags:"--dry-run",description:"With --prune-legacy, report what would be deleted and delete nothing"},{flags:"--json",description:"Output entries as JSON"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net logs --id 3fa9c2d1a70e8b42","cc-safety-net logs --agent claude-code","cc-safety-net logs --project . --since 7","cc-safety-net logs --suspect --since 7","cc-safety-net logs --json","cc-safety-net logs --prune-legacy --dry-run","cc-safety-net logs --prune-legacy"]};var Xn={name:"rule",description:"Manage CC Safety Net rule config and rulebook sources",usage:"rule <subcommand>",subcommands:[{usage:"init [--example]",description:"Create inert rule config"},{usage:"add <source>",description:"Add a rulebook source and sync"},{usage:"remove <source>",description:"Remove a rulebook source and sync"},{usage:"update [source]",description:"Refresh rulebook lock/cache state"},{usage:"sync",description:"Sync configured rulebooks"},{usage:"list",description:"List active rulebooks"},{usage:"wrapper add <command>",description:"Trust a transparent command wrapper"},{usage:"wrapper remove <command>",description:"Remove a transparent command wrapper"},{usage:"wrapper list",description:"List transparent command wrappers"},{usage:"migrate [--cleanup]",description:"Migrate legacy inline rules"},{usage:"doc",description:"Print the rulebook authoring guide"},{usage:"verify",description:"Validate rule config files"}],options:[{flags:"-g, --global",description:"Use user-scope rule config"},{flags:"--check",description:"Check without changing lock/cache state"},{flags:"--cleanup",description:"Delete legacy files after rule migrate verifies them"},{flags:"--delete-source",description:"Delete clean local source directory on remove"},{flags:"--example",description:"Create an inactive example rulebook with rule init"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net rule init","cc-safety-net rule init --example","cc-safety-net rule wrapper add rtk","cc-safety-net rule add project-rules","cc-safety-net rule sync","cc-safety-net rule migrate --cleanup","cc-safety-net rule verify"]};var da={name:"status",description:"Show what the runtime is enforcing right now",usage:"status",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net status"]};var ca={name:"statusline",description:"Print status line with mode indicators for shell integration",usage:"statusline --claude-code",options:[{flags:"-cc, --claude-code",description:"Print status line for Claude Code"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net statusline -cc","cc-safety-net statusline --claude-code"]};var la=[da,zs,ua,Ss,Xn,sa,oa,aa,ra,Zs,ca];function Gl(n){return n.aliases??[]}function Ql(n){return!n.hidden}function Xe(n){let e=n.toLowerCase();return la.find((t)=>t.name.toLowerCase()===e||Gl(t).some((i)=>i.toLowerCase()===e))}function pa(){return la.filter(Ql)}import{readFileSync as Hl}from"node:fs";import{basename as n2}from"node:path";function Ke(n=7,e=un()){let t=Date.now()-n*24*60*60*1000,i=[],r=new Set,s=0,a,o,d,c;if(e)Ln(e);let l={count:0},p=e?fn(e,l):[];for(let m of p)try{let v=Hl(m,"utf-8").trim().split(`
`).filter(Boolean);for(let _ of v)try{let $=Ee.parse(JSON.parse(_));if($.decision==="allow")continue;let b=new Date($.ts).getTime();if(b>=t){if(s++,r.add($.sessionId??n2(m,".jsonl")),o===void 0||b<=o)a=$.ts,o=b;if(c===void 0||b>c)d=$.ts,c=b;e2(i,$,b)}}catch{l.count++}}catch{l.count++}let y=i.map((m)=>({timestamp:m.ts,command:m.command,reason:m.reason,relativeTime:Pt(new Date(m.ts))}));return{totalBlocked:s,sessionCount:r.size,recentEntries:y,oldestEntry:a,newestEntry:d,unreadable:l.count}}function e2(n,e,t){let i=n.findIndex((r)=>t>new Date(r.ts).getTime());if(i===-1){if(n.length<3)n.push(e);return}if(n.splice(i,0,e),n.length>3)n.pop()}import{dirname as t2}from"node:path";function ma(n,e,t,i,r){let s;try{if(x(i)===null)return{path:n,exists:!1,valid:!1,ruleCount:0};s=sn(i),s.errors.push(...an(n,e,{userConfigDir:t},r))}catch(o){if(!(o instanceof E))throw o;s={errors:[o.message],ruleNames:new Set}}let a={path:n,exists:!0,valid:s.errors.length===0,ruleCount:s.ruleNames.size};if(s.errors.length>0)a.errors=s.errors;return a}function i2(n,e){return{source:e,name:n.name,command:n.command,subcommand:n.subcommand,blockArgs:[...n.block_args],reason:n.reason}}function fa(n,e){let t=e?.userConfigPath??Y(),i=e?.projectConfigPath??W(n),r=t2(t),s=vn({cwd:n,userConfigPath:t,projectConfigPath:i,userConfigDir:r}),a=G({cwd:n,userConfigPath:t,projectConfigPath:i,userConfigDir:r}),o=new Map(s.rulebooks.flatMap((d)=>d.rules.map((c)=>[c,d.source])));return{userConfig:ma(t,Cn({userConfigPath:t}),r,a.userConfigTarget,a.userScope),projectConfig:ma(i,Fn(i),r,a.projectConfigTarget,a.projectScope),effectiveRules:s.rules.map((d)=>i2(d,o.get(d.name)??"project")),shadowedRules:[]}}var r2=[{flag:k.level,description:"Safety level preset: standard, strict, or paranoid",defaultBehavior:"standard"},{flag:k.strict,description:"Legacy; equivalent to safety.overrides.fail_closed",defaultBehavior:"permissive"},{flag:k.paranoid,description:"Legacy; equivalent to safety.overrides.paranoid_rm and paranoid_interpreters",defaultBehavior:"off"},{flag:k.paranoidRm,description:"Legacy; equivalent to safety.overrides.paranoid_rm",defaultBehavior:"off"},{flag:k.paranoidInterpreters,description:"Legacy; equivalent to safety.overrides.paranoid_interpreters",defaultBehavior:"off"},{flag:k.worktree,description:"Allow local git discards in linked worktrees",defaultBehavior:"off"},{flag:k.debug,description:"Print diagnostic messages to stderr",defaultBehavior:"off"},{flag:k.auditScope,description:"Command decisions recorded: all, or blocked (privacy-minimizing, denials only)",defaultBehavior:"all"}];function va(){return[...r2.map((n)=>({name:n.flag.name,value:si(n.flag),isSet:ai(n.flag),legacyName:n.flag.legacyName,legacyValue:n.flag.legacyName?process.env[n.flag.legacyName]:void 0,legacyIsSet:n.flag.legacyName?process.env[n.flag.legacyName]!==void 0:void 0,description:n.description,defaultBehavior:n.defaultBehavior})),{name:"CC_SAFETY_NET_HOME",value:process.env.CC_SAFETY_NET_HOME,isSet:process.env.CC_SAFETY_NET_HOME!==void 0,description:"Override user-scope config/cache directory",defaultBehavior:"~/.cc-safety-net"}]}var ya={error:0,warning:1,info:2},s2=["policy","config","audit"];function a2(n){return n.map((e)=>{if(e==="ownership")return"is not owned by the current user";if(e==="permissions")return"has unsafe permissions";if(e==="symlink")return"is a symbolic link";return"is not a directory"}).join(" and ")}var o2=[{derive:(n)=>n.hooks.length>0&&n.hooks.every((e)=>!e.configured)?[{checkId:"integration.none-configured",severity:"error",title:"No integration configured",detail:"CC Safety Net is not connected to any supported coding-agent integration.",fixHint:"Run `cc-safety-net install` and configure at least one integration."}]:[]},{derive:(n)=>n.hooks.filter((e)=>e.inspectionStatus==="failed").map((e)=>{let t=gn(e.platform);return{checkId:"integration.inspection-failed",severity:"error",title:`${t} inspection failed`,detail:`Doctor could not verify the ${t} integration configuration.`,fixHint:`Correct the reported ${t} configuration error, then run \`cc-safety-net doctor\` again.`,integration:e.platform}})},{derive:(n)=>n.userConfig.exists&&!n.userConfig.valid?[{checkId:"config.user-invalid",severity:"error",title:"User configuration is invalid",detail:"Doctor could not load a valid user rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:n.userConfig.path}]:[]},{derive:(n)=>n.projectConfig.exists&&!n.projectConfig.valid?[{checkId:"config.project-invalid",severity:"error",title:"Project configuration is invalid",detail:"Doctor could not load a valid project rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:n.projectConfig.path}]:[]},{derive:(n)=>n.configState.state==="degraded"?[{checkId:"config.runtime-degraded",severity:"warning",title:"Runtime is enforcing a fallback configuration",detail:`The rejected candidate configuration is not active: ${n.configState.reason}`,fixHint:"Correct the named source, run `cc-safety-net rule sync` for a rule source, then rerun doctor."}]:[]},{derive:(n)=>{let e=n.environment.find((t)=>t.name==="CC_SAFETY_NET_AUDIT_SCOPE");return ri(e?.value)==="invalid"?[{checkId:"environment.audit-scope-invalid",severity:"warning",title:"Audit scope value is invalid",detail:"CC_SAFETY_NET_AUDIT_SCOPE is not `all` or `blocked`, so allowed command decisions are not recorded.",fixHint:"Set CC_SAFETY_NET_AUDIT_SCOPE to `all` or `blocked`, then restart the integration."}]:[]}},...s2.map((n)=>({derive:(e)=>e.posture.directories.filter((t)=>t.kind===n&&t.status==="unsafe").map((t)=>{let i={checkId:`posture.${n}-directory-unsafe`,severity:"error",title:`${n[0]?.toUpperCase()}${n.slice(1)} directory is unsafe`,detail:`The ${n} directory ${a2(t.issues)}.`,fixHint:"Ensure this is a real directory owned by the current user with no group or other write access, then rerun doctor."};if(t.path)i.path=t.path;return i})})),{derive:(n)=>{let e=[...n.effectiveSafety.weakenedRuleOverrides].sort();return e.length>0?[{checkId:"posture.rule-overrides-weaken-preset",severity:"warning",title:"Rule overrides weaken the selected preset",detail:`Explicit overrides disable rules the resolved preset would enable: ${e.join(", ")}.`,fixHint:`Remove these \`off\` overrides or set them to \`on\`: ${e.join(", ")}.`}]:[]}}];function ga(n){return o2.flatMap((e,t)=>e.derive(n).map((i,r)=>({finding:i,catalogOrder:t,occurrence:r}))).sort((e,t)=>ya[e.finding.severity]-ya[t.finding.severity]||e.catalogOrder-t.catalogOrder||e.occurrence-t.occurrence).map((e)=>e.finding)}function H(){return Boolean(process.stdout.isTTY&&!process.env.NO_COLOR)}var u2=(n)=>H()?`\x1B[32m${n}\x1B[0m`:n,d2=(n)=>H()?`\x1B[33m${n}\x1B[0m`:n,c2=(n)=>H()?`\x1B[34m${n}\x1B[0m`:n,l2=(n)=>H()?`\x1B[35m${n}\x1B[0m`:n,p2=(n)=>H()?`\x1B[36m${n}\x1B[0m`:n,m2=(n)=>H()?`\x1B[31m${n}\x1B[0m`:n,f2=(n)=>H()?`\x1B[2m${n}\x1B[0m`:n,v2=(n)=>H()?`\x1B[1m${n}\x1B[0m`:n,g={green:u2,yellow:d2,blue:c2,magenta:l2,cyan:p2,red:m2,dim:f2,bold:v2},y2="\x1B[0m",g2=[39,82,198,226,208,51,196,46,201,214,93,154,220,27,49,190,200,33,129,227,45,160,63,118,123,202];function h2(n){let e=n;return()=>{return e=(e*1664525+1013904223)%4294967296,e/4294967296}}function _2(n){let e=[...g2],t=h2(n);for(let i=e.length-1;i>0;i--){let r=Math.floor(t()*(i+1)),s=e.splice(r,1,...e.slice(i,i+1));e.splice(i,1,...s)}return e}function b2(n,e=0){if(!H())return"";let t=_2(e);return`\x1B[38;5;${t[n%t.length]}m`}function ha(n,e,t=0){if(!H())return`"${n}"`;return`${b2(e,t)}"${n}"${y2}`}var $2=new RegExp("\x1B\\[[0-9;]*m","g"),vi=(n)=>n.replace($2,"").length;function wn(n){let e=(n.headers??n.rows[0]??[]).map((a,o)=>{let d=Math.max(...n.rows.map((c)=>vi(c[o]??"")));return Math.max(vi(a),d)}),t=(a,o)=>a+" ".repeat(Math.max(0,o-vi(a))),i=(a,o)=>o[0]+e.map((d)=>a.repeat(d+2)).join(o[1])+o[2],r=(a)=>`│ ${a.map((o,d)=>t(o,e[d]??0)).join(" │ ")} │`,s=n.headers?[`   ${r(n.headers)}`,`   ${i("─",["├","┼","┤"])}`]:[];return[`   ${i("─",["┌","┬","┐"])}`,...s,...n.rows.map((a)=>`   ${r(a)}`),`   ${i("─",["└","┴","┘"])}`].join(`
`)}function _a(n){let e=[];e.push("Hook Integration"),e.push(x2(n));let t=[],i=[];for(let r of n){let s=gn(r.platform);if(r.errors&&r.errors.length>0)for(let a of r.errors)if(r.configured)t.push({platform:s,message:a});else i.push({platform:s,message:a})}for(let r of t)e.push(`   Warning (${r.platform}): ${r.message}`);for(let r of i)e.push(g.red(`   Error (${r.platform}): ${r.message}`));return e.join(`
`)}function x2(n){let e=["Platform","Discovery","Configuration","Inspection"],t=n.map((i)=>{let r=gn(i.platform);if(i.inspectionStatus==="not-inspected"){let d=g.dim("Not inspected");return[r,d,d,d]}let s=i.detected?g.green("Detected"):i.inspectionStatus==="failed"?g.red("Unknown"):g.dim("Not detected"),a=i.configured?g.green("Configured"):i.detected?g.yellow("Not configured"):i.inspectionStatus==="failed"?g.red("Unknown"):g.dim("Not applicable"),o=i.inspectionStatus==="verified"?g.green("Verified"):i.inspectionStatus==="failed"?g.red("Failed"):g.dim("Not applicable");return[r,s,a,o]});return wn({headers:e,rows:t})}function ba(n){let t=["Guard Engine Verification",`   Synthetic self-test: ${n.failed>0?g.red(`${n.passed}/${n.total} FAIL`):g.green(`${n.passed}/${n.total} passed`)}`],i=n.results.filter((r)=>!r.passed);if(i.length>0){t.push(""),t.push(g.red("   Failures:"));for(let r of i)t.push(g.red(`   • ${r.description}`)),t.push(g.red(`     expected ${r.expected}, got ${r.actual}`))}return t.join(`
`)}function L2(n){if(n.length===0)return"   (no custom rules)";let e=["Source","Name","Command","Block Args"],t=n.map((i)=>[i.source,i.name,i.subcommand?`${i.command} ${i.subcommand}`:i.command,i.blockArgs.join(", ")]);return wn({headers:e,rows:t})}function $a(n){let e=[];if(e.push("Configuration"),e.push(k2(n.userConfig,n.projectConfig)),e.push(""),n.effectiveRules.length>0)e.push(`   Effective rules (${n.effectiveRules.length} total):`),e.push(L2(n.effectiveRules));else e.push("   Effective rules: (none - using built-in rules only)");for(let t of n.shadowedRules)e.push(""),e.push(`   Note: Project rule "${t.name}" shadows user rule with same name`);return e.join(`
`)}function k2(n,e){let t=["Scope","Status"],i=(s)=>{if(!s.exists)return g.dim("N/A");if(!s.valid)return g.red(`Invalid (${s.errors?.[0]??"unknown error"})`);return g.green("Configured")},r=[["User",i(n)],["Project",i(e)]];return wn({headers:t,rows:r})}function xa(n){let e=[];return e.push("Environment"),e.push(w2(n)),e.join(`
`)}function La(n){let e=["Effective Safety",`   Selected preset: ${n.effectiveSafety.selectedPreset}`,`   Effective: ${n.effectiveSafety.level}`],t=[["fail_closed","fail_closed"],["paranoid_rm","paranoid_rm"],["paranoid_interpreters","paranoid_interpreters"]];for(let[i,r]of t){let s=n.effectiveSafety.capabilities[i],a=s.enabled?g.green("ON"):g.dim("OFF"),o=s.sources.length>0?` (${s.sources.join(", ")})`:"";e.push(`   ${r}: ${a} via ${s.source}${o}`)}e.push(`   Stored rule customizations: ${n.effectiveSafety.ruleCounts.stored}`),e.push(`   Effective rule customizations: ${n.effectiveSafety.ruleCounts.effective}`);for(let[i,r]of Object.entries(n.effectiveSafety.ruleOverrides))e.push(`   ${i}: ${r}`);return e.join(`
`)}function ka(n){let e=["Findings"];if(n.length===0)return e.push("   No findings from inspected doctor facts."),e.join(`
`);for(let t of n){let i=`[${t.severity.toUpperCase()}] ${t.checkId}: ${j(t.title)}`,r=t.severity==="error"?g.red:t.severity==="warning"?g.yellow:g.blue;if(e.push(`   ${r(i)}`),e.push(`      ${j(t.detail)}`),t.path)e.push(`      Path: ${j(t.path)}`);if(t.fixHint)e.push(`      Fix: ${j(t.fixHint)}`)}return e.join(`
`)}function w2(n){let e=["Variable","Status","Legacy"],t=n.map((i)=>{let r=i.isSet?g.green("✓"):g.dim("✗"),s=i.legacyName&&i.legacyIsSet?`${i.legacyName} ${g.green("✓")}`:i.legacyName??"";return[i.name,r,s]});return wn({headers:e,rows:t})}function wa(n){let e=[];if(n.totalBlocked===0)e.push("Recent Activity"),e.push("   No blocked commands in the last 7 days"),e.push("   Tip: This is normal for new installations");else e.push(`Recent Activity · last 7 days (${n.totalBlocked} blocked / ${n.sessionCount} sessions)`),e.push(z2(n.recentEntries));if(n.unreadable>0)e.push(`   Warning: ${n.unreadable} audit log ${n.unreadable===1?"source":"sources"} could not be read; this summary is incomplete`);return e.join(`
`)}function z2(n){let e=["Time","Command"],t=n.map((i)=>{let r=j(i.command.replace(/\r\n|\r|\n/g," ↵ ").replace(/\t/g," ")),s=r.length>40?`${r.slice(0,37)}...`:r;return[i.relativeTime,s]});return wn({headers:e,rows:t})}function za(n){let e=[];if(e.push("Update Check"),n.latestVersion===null&&!n.error)return e.push(We([["Status",g.dim("Skipped")],["Installed",n.currentVersion]])),e.join(`
`);if(n.error)return e.push(We([["Status",`${g.yellow("⚠")} Error`],["Installed",n.currentVersion],["Error",g.dim(n.error)]])),e.join(`
`);if(n.updateAvailable)return e.push(We([["Status",`${g.yellow("⚠")} Update Available`],["Current",n.currentVersion],["Latest",g.green(n.latestVersion??"")]])),e.push(""),e.push("   Run: bunx cc-safety-net@latest doctor"),e.push("   Or:  npx cc-safety-net@latest doctor"),e.join(`
`);return e.push(We([["Status",`${g.green("✓")} Up to date`],["Version",n.currentVersion]])),e.join(`
`)}function We(n){return wn({rows:n})}function Sa(n){let e=[];return e.push("System Info"),e.push(S2(n)),e.join(`
`)}function S2(n){let e=["Component","Version"],t=(s)=>{if(s===null)return g.dim("not found");return s},r=[{label:"cc-safety-net",value:n.version},{label:"Claude Code",value:n.claudeCodeVersion},{label:"Amp Code",value:n.ampVersion},{label:"Antigravity CLI",value:n.antigravityCliVersion},{label:"Codex",value:n.codexCliVersion},{label:"Cursor",value:n.cursorVersion},{label:"Gemini CLI",value:n.geminiCliVersion},{label:"GitHub Copilot CLI",value:n.copilotCliVersion},{label:"Hermes Agent",value:n.hermesAgentVersion},{label:"Kimi Code",value:n.kimiCodeVersion},{label:"OpenClaw",value:n.openClawVersion},{label:"OpenCode",value:n.openCodeVersion},{label:"Pi",value:n.piCliVersion},{label:"Node.js",value:n.nodeVersion},{label:"npm",value:n.npmVersion},{label:"Bun",value:n.bunVersion},{label:"Platform",value:n.platform}].map((s)=>[s.label,t(s.value)]);return wn({headers:e,rows:r})}function Za(n){if(n.findings.length===0)return g.green(`
No findings from inspected doctor facts.`);let e={error:n.findings.filter((s)=>s.severity==="error").length,warning:n.findings.filter((s)=>s.severity==="warning").length,info:n.findings.filter((s)=>s.severity==="info").length},t=["error","warning","info"].filter((s)=>e[s]>0).map((s)=>`${e[s]} ${s}`),i=n.findings.length===1?"finding":"findings",r=`
${n.findings.length} ${i}: ${t.join(", ")}.`;if(e.error>0)return g.red(r);if(e.warning>0)return g.yellow(r);return g.blue(r)}import{lstatSync as Z2}from"node:fs";import{dirname as yi}from"node:path";var j2=u.object({getuid:u.function({output:u.number()})}),D2=u.object({code:u.string().optional()});function gi(n,e){try{let t=Z2(e);if(t.isSymbolicLink())return{kind:n,path:e,status:"unsafe",issues:["symlink"]};if(!t.isDirectory())return{kind:n,path:e,status:"unsafe",issues:["not-directory"]};if(process.platform==="win32")return{kind:n,path:e,status:"unknown",issues:[]};let i=j2.safeParse(process);if(!i.success)return{kind:n,path:e,status:"unknown",issues:[]};let r=[...t.uid!==i.data.getuid()?["ownership"]:[],...(t.mode&18)!==0?["permissions"]:[]];return{kind:n,path:e,status:r.length>0?"unsafe":"safe",issues:r}}catch(t){if(D2.safeParse(t).data?.code==="ENOENT")return{kind:n,path:e,status:"not-applicable",issues:[]};return{kind:n,path:e,status:"unknown",issues:[]}}}function ja(n){let e=un();return{directories:[gi("policy",yi(yi(n))),gi("config",yi(n)),...e?[gi("audit",e)]:[{kind:"audit",status:"unknown",issues:[]}]]}}import{spawn as U2}from"node:child_process";import{existsSync as Da}from"node:fs";import{delimiter as I2,extname as T2,join as P2}from"node:path";import{stripVTControlCharacters as Ua}from"node:util";var R2=u.string(),Ta=C2(),E2=5000,O2="_CC_SAFETY_NET_TEST_SPAWN_PLATFORM";function C2(){try{return R2.parse("2.0.5")}catch{return"dev"}}function S(){return Ta}function hi(n,e){let t=n[e];if(t)return t;let i=Object.keys(n).find((r)=>r.toLowerCase()===e.toLowerCase()&&!!n[r]);return i?n[i]:t}function F2(n){return(hi(n,"PATHEXT")||".COM;.EXE;.BAT;.CMD").split(";").filter((e)=>e.length>0)}function A2(n,e){let t=T2(n)?[n]:[...F2(e).map((i)=>`${n}${i}`),n];if(n.includes("/")||n.includes("\\"))return t.find((i)=>Da(i))??n;return(hi(e,"PATH")??"").split(I2).flatMap((i)=>t.map((r)=>P2(i,r))).find((i)=>Da(i))??n}function Ia(n){if(!/[\s"&|<>^]/.test(n))return n;return`"${n.replace(/"/g,'""')}"`}function _n(n,e){let[t,...i]=n,r=e[O2]==="win32"?"win32":process.platform;if(!t||r!=="win32")return{cmd:t??"",args:i};let s=A2(t,e);if(!/\.(?:bat|cmd)$/i.test(s))return{cmd:s,args:i};return{cmd:hi(e,"COMSPEC")??"cmd.exe",args:["/d","/c",["call",Ia(s),...i.map(Ia)].join(" ")]}}var Kn=async(n,e=E2)=>{let t=await q2(n,{timeoutMs:e});if(t.code!==0)return null;return Ua(t.stdout).trim()||Ua(t.stderr).trim()||null};function q2(n,e){let[t,...i]=n;if(!t)return Promise.resolve({code:null,stdout:"",stderr:""});return new Promise((r)=>{try{let s=_n([t,...i],process.env),a=U2(s.cmd,s.args,{stdio:["ignore","pipe","pipe"]}),o=!1,d="",c="";a.stdout.on("data",(y)=>{d+=y.toString()}),a.stderr.on("data",(y)=>{c+=y.toString()});let l=(y)=>{if(o)return;o=!0,clearTimeout(p),r(y)},p=setTimeout(()=>{a.kill(),l({code:null,stdout:d,stderr:c})},e.timeoutMs);a.on("close",(y)=>{l({code:y,stdout:d,stderr:c})}),a.on("error",()=>{l({code:null,stdout:d,stderr:c})})}catch{r({code:null,stdout:"",stderr:""})}})}function I(n){if(!n)return null;let e=/Claude Code\s+(\d+\.\d+\.\d+)/i.exec(n);if(e)return e[1]??null;let t=/v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/i.exec(n);if(t)return t[1]??null;return n.split(`
`)[0]?.trim()||null}async function be(n=Kn){let[e,t,i,r,s,a,o,d,c,l,p,y,m,f,v,_,$]=await Promise.all([n(["claude","--version"]),n(["agy","--version"]),n(["opencode","--version"]),n(["codex","--version"]),n(["codex","plugin","list"]),n(["gemini","--version"]),n(["copilot","--binary-version"]),n(["hermes","--version"]),n(["kimi","--version"]),n(["openclaw","--version"]),n(["pi","--version"]),n(["cursor","--version"]),n(["amp","--version"]),n(["amp","plugins","list"],30000),n(["node","--version"]),n(["npm","--version"]),n(["bun","--version"])]);return{version:Ta,claudeCodeVersion:I(e),antigravityCliVersion:I(t),openCodeVersion:I(i),codexCliVersion:I(r),codexPluginListOutput:s,geminiCliVersion:I(a),copilotCliVersion:I(o),hermesAgentVersion:I(d),kimiCodeVersion:I(c),openClawVersion:I(l),piCliVersion:I(p),cursorVersion:I(y),ampVersion:I(m),ampPluginListOutput:f,nodeVersion:I(v),npmVersion:I(_),bunVersion:I($),platform:`${process.platform} ${process.arch}`}}var J2=u.object({version:u.string()});function _i(n,e){if(e==="dev")return!1;let t=n.split(".").map(Number),i=e.split(".").map(Number),[r=0,s=0,a=0]=t,[o=0,d=0,c=0]=i;if(r!==o)return r>o;if(s!==d)return s>d;return a>c}async function Wn(){let n=S(),e=new AbortController,t=setTimeout(()=>e.abort(),3000);try{let i=await fetch("https://registry.npmjs.org/cc-safety-net/latest",{signal:e.signal});if(!i.ok)return{currentVersion:n,latestVersion:null,updateAvailable:!1,error:`npm registry returned ${i.status}`};let r=J2.parse(await i.json()),s=_i(r.version,n);return{currentVersion:n,latestVersion:r.version,updateAvailable:s}}catch(i){return{currentVersion:n,latestVersion:null,updateAvailable:!1,error:i instanceof Error?i.message:"Network error"}}finally{clearTimeout(t)}}import*as qa from"node:readline";var Oa=(n)=>`\x1B[${n}B`,B2=(n)=>`\x1B[${n}A`;var Pa=["░","▒","▓","╱","╲","┃","━","┏","┓","┗","┛","╋"];function N2(n){return new Promise((e)=>setTimeout(e,n))}function V2(n,e,t){if(!t)return e(n);if(t.aborted)return Promise.resolve();return new Promise((i,r)=>{let s=()=>t.removeEventListener("abort",a),a=()=>{s(),i()};t.addEventListener("abort",a,{once:!0}),e(n).then(()=>{s(),i()},(o)=>{s(),r(o)})})}function $e(n,e){return n&&n>0?n:e}function Ye(n){return Math.max(0,Math.min(1,n))}function Yn(n){return Math.max(0,Math.min(255,Math.round(n)))}function bi(n){return n<=0.0031308?12.92*n:1.055*n**0.4166666666666667-0.055}function M2(n,e,t){let i=t*Math.PI/180,r=e*Math.cos(i),s=e*Math.sin(i),a=(n+0.3963377774*r+0.2158037573*s)**3,o=(n-0.1055613458*r-0.0638541728*s)**3,d=(n-0.0894841775*r-1.291485548*s)**3;return{blue:Yn(bi(Ye(-0.0041960863*a-0.7034186147*o+1.707614701*d))*255),green:Yn(bi(Ye(-1.2684380046*a+2.6097574011*o-0.3413193965*d))*255),red:Yn(bi(Ye(4.0767416621*a-3.3077115913*o+0.2309699292*d))*255)}}function $i(n,e){let t=(e*n*180/Math.PI%360+360)%360;return M2(0.72,0.15,t)}function Ca(n,e=0.1){let t=$i(e,n);return`\x1B[38;2;${t.red};${t.green};${t.blue}m`}function X2(n,e){return{blue:Yn(n.blue+(255-n.blue)*e),green:Yn(n.green+(255-n.green)*e),red:Yn(n.red+(255-n.red)*e)}}function Fa(n,e,t){let i=Math.imul(n+2654435769,2246822507)^Math.imul(e+3266489909,668265263)^Math.imul(t+374761393,2654435761),r=i^i>>>15,s=Math.imul(r,739982445),a=s^s>>>12,o=Math.imul(a,695872825);return((o^o>>>15)>>>0)/4294967296}function K2(n,e,t){let i=Math.floor(Fa(n,e,t)*Pa.length);return Pa[i]??"░"}function Ra(n){let e=Ye(n);return e*e*e*(e*(e*6-15)+10)}function W2(n){if(n.length===0)return"";let e=[],t=!1,i="";for(let r of n){let s=`${r.red};${r.green};${r.blue}`;if(r.bold!==t)e.push(r.bold?"\x1B[1m":"\x1B[22m"),t=r.bold;if(s!==i)e.push(`\x1B[38;2;${s}m`),i=s;e.push(r.character)}return`${e.join("")}\x1B[22m\x1B[39m`}function Y2(n,e,t,i,r){return n.map((s,a)=>({...$i(t,i+e+a/r),bold:!1,character:s}))}function G2(n,e,t,i,r,s,a,o){let d=Math.max(1,i*0.75),c=Math.min(1,t/d),l=r*Ra(c),p=Math.max(0,(t-d)/Math.max(1,i-d)),y=(1-Ra(t/i))*o*2,m=0.35*Math.max(0,1-p*2),f=c>=1,v=Math.min(n.length,Math.ceil(l+2+1));return n.slice(0,v).map((_,$)=>{let b=$i(s,a+e+$/o+y),h=$+Fa(e,$,7919)*2-1;if(h>l+2)return{...b,bold:!1,character:" "};let U=l-h,In=0.8*Math.exp(-(U*U)/12.5),re=Math.min(0.9,In+m),It=!f&&h>l-4;return{...X2(b,re),bold:re>0.3,character:It?K2(e,$,t):_}})}function Ea(n){return`\x1B[?2026h${n.map((e,t)=>`\x1B8${t>0?Oa(t):""}${W2(e)}`).join("")}\x1B[?2026l`}async function xi(n,e={}){if(!n)return;let t=e.output??process.stdout,i=e.sleep??N2,r=$e(e.frequency,0.1),s=e.seed??0,a=$e(e.speed,40),o=$e(e.spread,3),d=$e(e.frameRate,60),c=Math.max(1,Math.floor($e(e.duration,12))),l=n.split(`
`).map((v)=>Array.from(v)),p=Math.max(...l.map((v)=>v.length)),y=1000*c*l.filter((v)=>v.length>0).length/a,m=p>0?Math.max(1,Math.ceil(y/(1000/d))):0,f=m>0?y/m:0;t.write(`\x1B[?25l${l.length>1?`${`
`.repeat(l.length-1)}${B2(l.length-1)}`:""}\x1B7`);try{for(let v=1;v<=m;v+=1){if(e.signal?.aborted)break;t.write(Ea(l.map((_,$)=>G2(_,$,v,m,p,r,s,o)))),await V2(f,i,e.signal)}}finally{if(t.write(Ea(l.map((v,_)=>Y2(v,_,r,s,o)))),t.write("\x1B8"),l.length>1)t.write(Oa(l.length-1));t.write(`
\x1B[0m\x1B[?25h`)}}var Aa=["┏━┛┏━┛  ┏━┛┏━┃┏━┛┏━┛━┏┛┃ ┃  ┏━ ┏━┛━┏┛","┃  ┃    ━━┃┏━┃┏━┛┏━┛ ┃ ━┏┛  ┃ ┃┏━┛ ┃ ","━━┛━━┛  ━━┛┛ ┛┛  ━━┛ ┛  ┛   ┛ ┛━━┛ ┛ "].join(`
`);function Q2(n){return Boolean(n.isTTY)}async function xe(n={}){let e=n.output??process.stdout;if(!Q2(e))return;let t=n.input??process.stdin,i={duration:n.duration,frequency:n.frequency,output:e,seed:n.seed??Math.random()*8192,sleep:n.sleep,speed:n.speed,spread:n.spread};if(!t.isTTY){await xi(Aa,i);return}let r=new AbortController,s=t.readableFlowing===!0,a=t.isRaw===!0,o=!1,d=(c,l)=>{if(l.ctrl&&l.name==="c")o=!0;if(o||l.name==="return"||l.name==="enter")r.abort()};qa.emitKeypressEvents(t),t.on("keypress",d),t.setRawMode(!0),t.resume();try{await xi(Aa,{...i,signal:r.signal})}finally{if(t.off("keypress",d),t.setRawMode(a),!s)t.pause()}if(!o)return;if(n.onInterrupt){n.onInterrupt();return}process.kill(process.pid,"SIGINT")}var Ja="\r\x1B[2K",H2="\x1B[?25l",np="\x1B[39m",ep="\x1B[?25h",tp=100,ip=0.55,rp=80,Ba=["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];function sp(n){return new Promise((e)=>setTimeout(e,n))}async function Ge(n,e={}){let t=e.output??process.stdout;if(!t.isTTY)return n;let i=e.sleep??sp,r=!1,s=n.then((o)=>{return r=!0,o},(o)=>{throw r=!0,o});if(await Promise.race([s.then(()=>!0),i(tp).then(()=>!1)]))return s;t.write(H2);try{for(let o=0;!r;o+=1)t.write(`${Ja}${Ca(o*ip)}${Ba[o%Ba.length]}${np} ${e.loadingMessage??"Loading…"}`),await Promise.race([s,i(rp)]);return await s}finally{t.write(`${Ja}${ep}`)}}async function Le(n,e,t,i={}){let r=e();if(n)await t();if(n&&r.ready)await Ge(r.ready,i);return r.finish()}import{homedir as Em}from"node:os";import{stripVTControlCharacters as ap}from"node:util";var Qe="amp plugins list",op=/^\s*[✓✗]\s+cc-safety-net(?:\.ts)?\s+\(User Plugins\)\s+(\S+)\s*$/;function Na(n){if(!n.ampPluginListOutput)return{platform:"amp",status:"n/a"};let e=ap(n.ampPluginListOutput).split(`
`).map((t)=>op.exec(t)?.[1]).find((t)=>t!==void 0);if(!e)return{platform:"amp",status:"n/a"};if(e!=="active")return{platform:"amp",status:"disabled",method:Qe,configPath:Qe,errors:[`Amp personal plugin cc-safety-net is ${e}; run "plugins: reload" in Amp or reinstall with install --amp`]};return{platform:"amp",status:"configured",method:Qe,configPath:Qe}}import{existsSync as dp,readFileSync as cp}from"node:fs";import{join as up}from"node:path";function ke(n){return up(n,".gemini","config","hooks.json")}var lp=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*(?:--agy-cli|-ac)(\s|["']|$)/,pp=u.object({command:u.string()}),mp=u.object({hooks:u.array(u.json())}),fp=u.object({enabled:u.json().optional(),PreToolUse:u.array(u.json())}),vp=u.record(u.string(),u.json());function yp(n){return Object.values(n).flatMap((e)=>{let t=fp.safeParse(e);if(!t.success)return[];return t.data.PreToolUse.flatMap((i)=>{let r=mp.safeParse(i);if(!r.success)return[];return r.data.hooks.flatMap((s)=>{let a=pp.safeParse(s);if(!a.success||!lp.test(a.data.command))return[];return[{command:a.data.command,enabled:t.data.enabled!==!1}]})})})}function Va(n){let e=ke(n.homeDir);if(!dp(e))return{platform:"antigravity-cli",status:"n/a",configPath:e};let t;try{let i=vp.safeParse(JSON.parse(cp(e,"utf-8")));t=i.success?yp(i.data):[]}catch(i){return{platform:"antigravity-cli",status:"n/a",configPath:e,errors:[`Failed to parse Antigravity hooks config ${e}: ${i instanceof Error?i.message:String(i)}`]}}if(t.some((i)=>i.enabled))return{platform:"antigravity-cli",status:"configured",method:"hook config",configPath:e};if(t.length>0)return{platform:"antigravity-cli",status:"disabled",method:"hook config",configPath:e};return{platform:"antigravity-cli",status:"n/a",configPath:e}}import{join as Ma}from"node:path";import{existsSync as gp,lstatSync as hp,readFileSync as _p}from"node:fs";function nn(n,e=(t)=>t){if(!gp(n))return{kind:"missing"};try{let t=u.json().safeParse(JSON.parse(e(_p(n,"utf-8"))));return t.success?{kind:"ok",value:t.data}:{kind:"unreadable"}}catch{return{kind:"unreadable"}}}function R(n){try{return hp(n)}catch{return}}function He(n,e){let t=R(e);if(!t)return{platform:n,status:"n/a",configPath:e};if(!t.isSymbolicLink()&&t.isDirectory())return;return{platform:n,status:"n/a",configPath:e,errors:[`${e} is a symlink or not a directory; move or remove it before installing`]}}var Li="cc-safety-net@cc-marketplace",bp=u.object({plugins:u.record(u.string(),u.array(u.json()))}),$p=u.object({enabledPlugins:u.record(u.string(),u.boolean())});function Xa(n){return Ma(n,".claude","plugins","installed_plugins.json")}function Ka(n,e){return(bp.safeParse(n).data?.plugins?.[e]?.length??0)>0}function nt(n,e){let t=nn(Xa(n));return t.kind==="ok"&&Ka(t.value,e)}function ki(n){let e=Xa(n),t=nn(e);if(t.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(t.kind==="missing")return{platform:"claude-code",status:"n/a"};if(!Ka(t.value,Li))return{platform:"claude-code",status:"n/a"};let i=Ma(n,".claude","settings.json"),r=nn(i);if(r.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(!(r.kind==="ok"&&$p.safeParse(r.value).data?.enabledPlugins[Li]===!0))return{platform:"claude-code",status:"disabled",method:"plugin config",configPath:i,errors:[`${Li} is installed but not enabled in Claude Code`]};return{platform:"claude-code",status:"configured",method:"plugin config",configPath:e}}function Wa(n){return ki(n.homeDir)}function Ya(n){if(!n.codexPluginListOutput)return{platform:"codex",status:"n/a"};let e=n.codexPluginListOutput.split(`
`).find((t)=>t.includes("https://github.com/kenryu42/cc-safety-net.git"));if(!e)return{platform:"codex",status:"n/a"};if(!e.includes("installed, enabled"))return{platform:"codex",status:"disabled",method:"codex plugin list",configPath:"codex plugin list",errors:["Codex plugin line for https://github.com/kenryu42/cc-safety-net.git must contain installed, enabled."]};return{platform:"codex",status:"configured",method:"codex plugin list",configPath:"codex plugin list"}}import{existsSync as it,readdirSync as xp,readFileSync as Lp}from"node:fs";import{join as J}from"node:path";var en="cc-safety-net@cc-marketplace",et=["cc-marketplace","cc-safety-net"],Ga=["_direct","copilot-safety-net"],Qa=["cc-marketplace","safety-net"],Ha="safety-net@cc-marketplace";function tt(n,e){let t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(^|[^a-z0-9-])${t}([^a-z0-9-]|$)`,"m").test(n??"")}function no(n){return tt(n,"cc-safety-net@cc-marketplace")}function eo(n){return tt(n,"cc-marketplace")}function to(n){return tt(n,"copilot-safety-net")}function io(n){return tt(n,"safety-net@cc-marketplace")}function A(n){let e="",t=0,i=!1,r=!1,s=-1;while(t<n.length){let a=n.charAt(t),o=n[t+1];if(r){e+=a,r=!1,t++;continue}if(a==='"'&&!i){i=!0,s=-1,e+=a,t++;continue}if(a==='"'&&i){i=!1,e+=a,t++;continue}if(a==="\\"&&i){r=!0,e+=a,t++;continue}if(i){e+=a,t++;continue}if(a==="/"&&o==="/"){while(t<n.length&&n[t]!==`
`)t++;continue}if(a==="/"&&o==="*"){t+=2;while(t<n.length-1){if(n[t]==="*"&&n[t+1]==="/"){t+=2;break}t++}continue}if(a===","){s=e.length,e+=a,t++;continue}if(a==="}"||a==="]"){if(s!==-1){let d=e.slice(s+1);if(/^\s*$/.test(d))e=e.slice(0,s)+d}s=-1,e+=a,t++;continue}if(!/\s/.test(a))s=-1;e+=a,t++}return e}var kp=u.object({disableAllHooks:u.boolean().optional(),hooks:u.object({preToolUse:u.array(u.object({type:u.string().optional(),bash:u.string().optional(),powershell:u.string().optional(),command:u.string().optional()})).optional()}).optional()}),wp=u.object({enabledPlugins:u.record(u.string(),u.boolean())});function wi(n){if(!n?.includes("cc-safety-net"))return!1;return/(^|\s)hook\s+(?:[^\s]+\s+)*(--copilot-cli|-cp)(\s|$)/.test(n)}function so(n,e){if(!n)return null;let t=n.match(/(\d+)\.(\d+)\.(\d+)/);if(!t)return null;let i=[Number(t[1]),Number(t[2]),Number(t[3])];for(let r=0;r<e.length;r++){let s=i[r]??0,a=e[r]??0;if(s!==a)return s>a}return!0}function zp(n){return so(n,[0,0,422])}function Sp(n){return so(n,[1,0,8])}function we(n){return process.env.COPILOT_HOME||J(n,".copilot")}function Si(n){return(n.hooks?.preToolUse??[]).some((t)=>{if(t.type!=="command")return!1;return wi(t.command)||wi(t.bash)||wi(t.powershell)})}function Zi(n,e){try{return kp.parse(JSON.parse(A(Lp(n,"utf-8"))))}catch(t){e?.push(`Failed to parse ${n}: ${t instanceof Error?t.message:String(t)}`);return}}function ao(n,e){try{return xp(n).filter((t)=>t.endsWith(".json")).sort((t,i)=>t.localeCompare(i))}catch(t){return e?.push(`Failed to read ${n}: ${t instanceof Error?t.message:String(t)}`),[]}}function Zp(n,e){if(!it(n))return[];let t=[];for(let i of ao(n,e)){let r=J(n,i),s=Zi(r,e);if(s&&Si(s))t.push(r)}return t}function zi(n,e){if(!it(n))return;let t=Zi(n,e);if(!t)return;return{path:n,config:t}}function ro(n,e,t,i){if(e){n.push(`GitHub Copilot CLI ${e} does not support ${t}; requires ${i}+`);return}n.push(`GitHub Copilot CLI version unavailable; skipping ${t} because it requires ${i}+`)}function jp(n){let e=[n.localSettings,n.repoSettings,n.userConfig];for(let t of e){if(t?.config.disableAllHooks===!0)return t.path;if(t?.config.disableAllHooks===!1)return}return}function Dp(n,e,t,i){let r=we(n),s=J(e,".github","hooks"),a=J(r,"hooks"),o=J(e,".github","copilot"),d=Sp(t),c=d===!0?i:void 0,l={userConfig:zi(J(r,"config.json"),c),repoSettings:zi(J(o,"settings.json"),c),localSettings:zi(J(o,"settings.local.json"),c)};if(d!==!1){let b=jp(l);if(b){if(d===null)i.push(`GitHub Copilot CLI version unavailable; treating disableAllHooks in ${b} as active`);return{activeConfigPaths:[],disabledBy:b}}}let p=Zp(s,i),y=zp(t),m=y===!0?i:void 0,f=it(a)?ao(a,m):[],v=[];for(let b of f){let h=J(a,b),U=Zi(h,m);if(U&&Si(U))v.push(h)}if(y!==!0&&v.length>0)ro(i,t,`user hook files in ${a}`,"0.0.422"),v.length=0;let _=[],$=[l.localSettings,l.repoSettings,l.userConfig];for(let b of $){if(!b)continue;if(!Si(b.config))continue;if(d===!0){_.push(b.path);continue}ro(i,t,"inline hook definitions in Copilot config files","1.0.8");break}return{activeConfigPaths:[..._.filter((b)=>b.endsWith("settings.local.json")),..._.filter((b)=>b.endsWith("settings.json")),...p,..._.filter((b)=>b.endsWith("config.json")),...v]}}function oo(n){let e=[],t=Dp(n.homeDir,n.cwd,n.copilotCliVersion,e);if(t.disabledBy)return{platform:"copilot-cli",status:"disabled",method:"hook config",configPath:t.disabledBy,configPaths:[t.disabledBy],errors:e.length>0?e:void 0};let i=we(n.homeDir),r=J(i,"installed-plugins",...et),s=it(r),a=J(i,"settings.json"),o=nn(a,A);if(s&&o.kind==="unreadable")return{platform:"copilot-cli",status:"not-inspected"};if(s&&o.kind==="ok"&&wp.safeParse(o.value).data?.enabledPlugins[en]===!1)return{platform:"copilot-cli",status:"disabled",method:"plugin config",configPath:a,errors:[`${en} is installed but not enabled in Copilot CLI`]};if(s||t.activeConfigPaths.length>0){let d=s,c=t.activeConfigPaths[0];return{platform:"copilot-cli",status:"configured",method:d?"plugin config":"hook config",configPath:c??(d?r:void 0),configPaths:t.activeConfigPaths.length>0?t.activeConfigPaths:void 0,errors:e.length>0?e:void 0}}return{platform:"copilot-cli",status:"n/a",errors:e.length>0?e:void 0}}import{existsSync as Jp,readFileSync as Bp}from"node:fs";import{existsSync as uo,mkdirSync as Tp,readFileSync as Pp}from"node:fs";import{dirname as Rp,join as Ep}from"node:path";import{renameSync as Up,writeFileSync as Ip}from"node:fs";function D(n,e){let t=`${n}.${process.pid}.tmp`;Ip(t,e),Up(t,n)}var ze="npx -y cc-safety-net hook --cursor",co=30,rt=u.looseObject({command:u.json().optional(),timeout:u.json().optional(),failClosed:u.json().optional()}),Op=u.looseObject({preToolUse:u.json().optional()}),Di=u.looseObject({preToolUse:u.array(u.json()).optional()}),Cp=u.looseObject({version:u.json().optional(),hooks:u.json().optional()});function st(n){return Ep(n,".cursor","hooks.json")}function ji(){return{command:ze,timeout:co,failClosed:!0}}function Ui(n){return n.command===ze}function Fp(n){let e=rt.safeParse(n);if(!e.success)return!1;return Object.keys(e.data).length===3&&e.data.command===ze&&e.data.timeout===co&&e.data.failClosed===!0}function Ap(n){try{return u.json().parse(JSON.parse(Pp(n,"utf-8")))}catch(e){if(e instanceof SyntaxError)throw Error(`Failed to parse Cursor hooks config ${n}: ${e.message}`);throw e}}function lo(n){let e=Ap(n),t=Cp.safeParse(e);if(!t.success)throw Error(`Cursor hooks config ${n} must be a JSON object`);if(t.data.version!==1)throw Error(`Cursor hooks config ${n} must set "version": 1`);let i=Op.safeParse(t.data.hooks);if(t.data.hooks!==void 0&&!i.success)throw Error(`Cursor hooks config ${n} "hooks" must be an object`);if(i.success&&i.data.preToolUse!==void 0){if(!u.array(u.json()).safeParse(i.data.preToolUse).success)throw Error(`Cursor hooks config ${n} "hooks.preToolUse" must be an array`)}return t.data}function po(n){let e=Di.safeParse(n.hooks);if(!e.success||e.data.preToolUse===void 0)return[];return e.data.preToolUse}function qp(n){let e=(t)=>{let i=rt.safeParse(t);return i.success&&Ui(i.data)};if(!n.some(e))return[...n,ji()];return n.reduce((t,i)=>{if(!e(i))return t.result.push(i),t;if(!t.inserted)t.result.push(ji()),t.inserted=!0;return t},{result:[],inserted:!1}).result}function mo(n,e,t){let i=Di.safeParse(e.hooks),r=i.success?i.data:{},s={...e,hooks:{...r,preToolUse:t}};D(n,`${JSON.stringify(s,null,2)}
`)}function fo(n){let e=st(n);if(!uo(e))return Tp(Rp(e),{recursive:!0}),D(e,`${JSON.stringify({version:1,hooks:{preToolUse:[ji()]}},null,2)}
`),{path:e,alreadyInstalled:!1};let t=lo(e),i=po(t),r=i.filter((a)=>{let o=rt.safeParse(a);return o.success&&Ui(o.data)});if(Di.safeParse(t.hooks).success&&r.length===1&&r[0]!==void 0&&Fp(r[0]))return{path:e,alreadyInstalled:!0};return mo(e,t,qp(i)),{path:e,alreadyInstalled:!1}}function vo(n){let e=st(n);if(!uo(e))return{path:e,alreadyInstalled:!1};let t=lo(e),i=po(t),r=i.filter((s)=>{let a=rt.safeParse(s);return!a.success||!Ui(a.data)});if(r.length===i.length)return{path:e,alreadyInstalled:!1};return mo(e,t,r),{path:e,alreadyInstalled:!0}}var Np=u.looseObject({command:u.json().optional(),failClosed:u.json().optional(),timeout:u.json().optional()}),Vp=u.looseObject({hooks:u.looseObject({preToolUse:u.array(u.json()).optional()}).optional()});function Mp(n){return(n.hooks?.preToolUse??[]).flatMap((t)=>{let i=Np.safeParse(t);return i.success&&i.data.command===ze?[i.data]:[]})}function Xp(n){let e=[];if(n.length>1)e.push("Multiple managed cc-safety-net hooks found; reinstall to collapse duplicates");let t=n[0];if(t&&t.failClosed!==!0)e.push('Managed hook is missing "failClosed": true; reinstall to repair');if(t&&t.timeout!==30)e.push('Managed hook "timeout" is not 30; reinstall to repair');return e}function yo(n){let e=st(n.homeDir);if(!Jp(e))return{platform:"cursor",status:"n/a",configPath:e};let t;try{t=Vp.parse(JSON.parse(Bp(e,"utf-8")))}catch(s){return{platform:"cursor",status:"n/a",configPath:e,errors:[`Failed to parse Cursor hooks config ${e}: ${s instanceof Error?s.message:String(s)}`]}}let i=Mp(t);if(i.length===0)return{platform:"cursor",status:"n/a",configPath:e};let r=Xp(i);return{platform:"cursor",status:"configured",method:"hook config",configPath:e,errors:r.length>0?r:void 0}}import{existsSync as Kp}from"node:fs";import{join as Ii}from"node:path";var Ti="gemini-safety-net",Wp=u.record(u.string(),u.object({overrides:u.array(u.string()).optional()}));function Pi(n){let e=Ii(n,".gemini","extensions"),t=Ii(e,Ti);if(!Kp(t))return{platform:"gemini-cli",status:"n/a"};let i=Ii(e,"extension-enablement.json"),r=nn(i);if(r.kind==="unreadable")return{platform:"gemini-cli",status:"not-inspected"};if((r.kind==="ok"?Wp.safeParse(r.value).data?.[Ti]?.overrides:void 0)?.some((o)=>o.startsWith("!"))??!1)return{platform:"gemini-cli",status:"disabled",method:"extension config",configPath:i,errors:[`${Ti} is disabled in Gemini CLI`]};return{platform:"gemini-cli",status:"configured",method:"extension config",configPath:t}}function go(n){return Pi(n.homeDir)}import{readFileSync as zo}from"node:fs";import{join as So}from"node:path";var B="cc-safety-net",ho="# cc-safety-net managed Hermes Agent plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --hermes-agent";function _o(n){return`# cc-safety-net managed Hermes Agent plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --hermes-agent
# version: ${n}
`}function Yp(n){return`${_o(n)}name: cc-safety-net
version: "${n}"
description: "Block destructive commands and secret-file access before Hermes runs a tool."
author: "cc-safety-net"
provides_hooks:
  - pre_tool_call
`}function Gp(n){return`${_o(n)}"""CC Safety Net guard for Hermes Agent.

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
`}function Se(n){return[{name:"__init__.py",content:Gp(n)},{name:"plugin.yaml",content:Yp(n)}]}import{mkdirSync as Qp,readdirSync as Hp,readFileSync as nm,rmSync as Ri}from"node:fs";import{join as zn}from"node:path";var em="__pycache__";function Ei(n){let e=process.env.HERMES_HOME?.trim();return e?e:zn(n,".hermes")}function Oi(n){return zn(Ei(n),"plugins",B)}function Ci(n){return n.startsWith(ho)}function Fi(n,e){let t=Oi(n),i=R(t);if(i&&(i.isSymbolicLink()||!i.isDirectory()))throw Error(`Refusing to ${e} ${t}: not a regular directory. Move or remove it and rerun ${e==="install"?"install":"uninstall"} --hermes-agent.`);return t}function bo(n,e){let t=R(n);if(!t)return;if(t.isSymbolicLink()||!t.isFile())throw Error(`Refusing to ${e} ${n}: not a regular file. Move or remove it.`);let i=nm(n,"utf-8");if(!Ci(i))throw Error(`Refusing to ${e} unmanaged file at ${n}. Move or remove it.`);return i}function $o(n){let e=Fi(n,"install"),t=Se(S());if(t.map((r)=>bo(zn(e,r.name),"overwrite")).every((r,s)=>r===t[s]?.content))return{path:e,alreadyInstalled:!0};return Qp(e,{recursive:!0}),t.forEach((r)=>{D(zn(e,r.name),r.content)}),{path:e,alreadyInstalled:!1}}function Ai(n){let e=Fi(n,"remove");if(!R(e))return[];return Se(S()).filter((t)=>bo(zn(e,t.name),"remove")!==void 0)}function xo(n){let e=Fi(n,"remove");if(!R(e))return{path:e,alreadyInstalled:!1};let t=Ai(n);if(t.forEach((i)=>{Ri(zn(e,i.name))}),Ri(zn(e,em),{recursive:!0,force:!0}),Hp(e).length===0)Ri(e,{recursive:!0});return{path:e,alreadyInstalled:t.length>0}}var at="hermes-agent",Lo=/^([^\s#][^:]*):/,tm=/^\s+([A-Za-z_][\w-]*):/,ko=/^\s+-\s*(.*)$/;function im(n){return n.trim().replace(/^(["'])(.*)\1$/,"$2")}function rm(n){let e=n.split(/\r?\n/),t=e.findIndex((s)=>Lo.exec(s)?.[1]?.trim()==="plugins");if(t===-1)return[];let i=e.slice(t+1),r=i.findIndex((s)=>Lo.test(s));return r===-1?i:i.slice(0,r)}function wo(n,e){let t=rm(n),i=t.findIndex((a)=>tm.exec(a)?.[1]===e);if(i===-1)return[];let r=t.slice(i+1),s=r.findIndex((a)=>!ko.test(a));return(s===-1?r:r.slice(0,s)).map((a)=>im(ko.exec(a)?.[1]??""))}function sm(n){try{return zo(So(Ei(n),"config.yaml"),"utf-8")}catch{return}}function qi(n){let e=sm(n)??"";return wo(e,"enabled").includes(B)&&!wo(e,"disabled").includes(B)}function Zo(n){return/^# version:\s*(.+)$/m.exec(n)?.[1]?.trim()}function am(n,e){let t=R(n);if(!t)return{error:`${e.name} is missing from ${n}; run install --hermes-agent`};if(t.isSymbolicLink()||!t.isFile())return{error:`${n} is a symlink or not a regular file; move or remove it`};try{let i=zo(n,"utf-8");if(!Ci(i))return{error:`Unmanaged ${e.name} occupies ${n}; move or remove it`};if(Zo(i)===S()&&i!==e.content)return{error:`Modified ${e.name} occupies ${n}; run install --hermes-agent to restore it`};return{content:i}}catch(i){return{error:`Failed to read ${n}: ${i instanceof Error?i.message:String(i)}`}}}function jo(n){let e=Oi(n.homeDir),t=He(at,e);if(t)return t;let i=Se(S()).map((o)=>am(So(e,o.name),o)),r=i.flatMap((o)=>("error"in o)?[o.error]:[]);if(r.length>0)return{platform:at,status:"n/a",configPath:e,errors:r};let s=i.some((o)=>("content"in o)&&Zo(o.content)!==S()),a=s?["Installed Hermes Agent plugin is outdated; run install --hermes-agent to update"]:[];if(!qi(n.homeDir))return{platform:at,status:"disabled",method:"plugin directory",configPath:e,errors:[`${B} is not enabled in Hermes; run \`hermes plugins enable ${B}\``,...a]};return{platform:at,status:"configured",method:"plugin directory",configPath:e,errors:s?a:void 0}}import{existsSync as om,readFileSync as um}from"node:fs";import{join as Do}from"node:path";var dm=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*--kimi-code(\s|["']|$)/;function cm(n){return Do(process.env.KIMI_CODE_HOME||Do(n,".kimi-code"),"config.toml")}function Ze(n){let e=cm(n.homeDir);if(!om(e))return{platform:"kimi-code",status:"n/a",configPath:e};try{if(!dm.test(um(e,"utf-8")))return{platform:"kimi-code",status:"n/a",configPath:e}}catch(t){return{platform:"kimi-code",status:"n/a",configPath:e,errors:[`Failed to read ${e}: ${t instanceof Error?t.message:String(t)}`]}}return{platform:"kimi-code",status:"configured",method:"hook config",configPath:e}}import{readFileSync as Fo}from"node:fs";import{join as De}from"node:path";var z="cc-safety-net",N="index.js",Gn="openclaw.plugin.json",Qn="package.json";var ot="// cc-safety-net managed OpenClaw plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --openclaw";import{existsSync as mm,lstatSync as fm,readdirSync as vm,readFileSync as ym}from"node:fs";import{dirname as To,join as Sn}from"node:path";import{fileURLToPath as gm}from"node:url";import{spawn as lm}from"node:child_process";function pm(n){return n.join(" ")}function Ji(n,e,t){return[`Failed to run ${pm(n)}${e===null?"":` (exit ${e})`}.`,t.trim()].filter(Boolean).join(`
`)}function Bi(n){let e={stdout:"",stderr:""};return n.stdout.setEncoding("utf-8"),n.stderr.setEncoding("utf-8"),n.stdout.on("data",(t)=>{e.stdout+=t}),n.stderr.on("data",(t)=>{e.stderr+=t}),e}function tn(n,e){return new Promise((t,i)=>{let r=_n([...n],process.env),s=lm(r.cmd,r.args,{stdio:["ignore","pipe","pipe"]}),a=Bi(s),o=()=>[a.stdout,a.stderr].filter(Boolean).join(`
`),d=e?.timeoutMs??120000,c=setTimeout(()=>{s.kill(),i(Error(Ji(n,null,`Timed out after ${d}ms.
${o()}`.trim())))},d);s.on("error",(l)=>{clearTimeout(c),i(Error(Ji(n,null,`${l.message}
${o()}`.trim())))}),s.on("close",(l)=>{if(clearTimeout(c),l!==0){i(Error(Ji(n,l,o())));return}t(e?.stdoutOnly?a.stdout:o())})})}async function Ni(n){for(let e of n)await tn(e)}async function Uo(n){for(let e of n)try{await tn(e)}catch(t){console.warn(t instanceof Error?t.message:String(t))}}var Io=Sn("openclaw",z),hm=u.object({plugin:u.object({status:u.string()})}),_m=[N,Gn,Qn];function Po(n){let e=process.env.OPENCLAW_STATE_DIR?.trim();if(e)return e;let t=process.env.OPENCLAW_CONFIG_PATH?.trim();return t?To(t):Sn(n,".openclaw")}function Ro(n){let e=process.env.OPENCLAW_CONFIG_PATH?.trim();return e?e:Sn(Po(n),"openclaw.json")}function Vi(n){return Sn(Po(n),"extensions",z)}function bm(n){let e=vm(n);if(e.length===0)return!0;if(e.some((r)=>!_m.includes(r)))return!1;let t=Sn(n,N),i=R(t);return i!==void 0&&!i.isSymbolicLink()&&i.isFile()&&ym(t,"utf-8").startsWith(ot)}function Mi(n){let e=Vi(n),t=R(e);if(!t)return;if(!t.isSymbolicLink()&&t.isDirectory()&&bm(e))return;throw Error(`Refusing to modify ${e}: it does not hold a cc-safety-net managed OpenClaw plugin. Move or remove it, then run the command again.`)}function Eo(){let n=To(gm(import.meta.url));return[Sn(n,"..",Io),Sn(n,"..","..","..","dist",Io)]}function Xi(n=Eo()){return n.find((e)=>mm(e)&&fm(e).isDirectory())}function $m(n=Eo()){let e=Xi(n);if(!e)throw Error("Packaged OpenClaw plugin directory not found. Reinstall cc-safety-net and try again.");return e}function Oo(n=$m()){return[["openclaw","plugins","install",n,"--force"],["openclaw","plugins","enable",z]]}function xm(n){let e=(()=>{try{return JSON.parse(n)}catch{return}})(),t=hm.safeParse(e);return t.success?t.data.plugin.status:void 0}async function Co(){let n=xm(await tn(["openclaw","plugins","inspect",z,"--runtime","--json"],{stdoutOnly:!0}));if(n==="loaded")return;throw Error(`${n===void 0?`The ${z} plugin's load state could not be verified: OpenClaw's runtime inspect report was unreadable.`:`OpenClaw reports the ${z} plugin with status "${n}".`} Run \`openclaw plugins inspect ${z} --runtime\` for details.`)}var ut="openclaw",je=`run \`openclaw plugins enable ${z}\``,Lm=u.object({id:u.string()}),km=u.object({openclaw:u.object({extensions:u.array(u.string())})}),wm=u.object({plugins:u.object({enabled:u.boolean().optional(),allow:u.array(u.string()).optional(),deny:u.array(u.string()).optional(),entries:u.record(u.string(),u.object({enabled:u.boolean().optional()})).optional()}).optional()});function Hn(n,e){let t=De(n,e),i=R(t);if(!i)return{error:`${e} is missing from ${t}; run install --openclaw`};if(i.isSymbolicLink()||!i.isFile())return{error:`${t} is a symlink or not a regular file; move or remove it`};try{return{content:Fo(t,"utf-8")}}catch(r){return{error:`Failed to read ${t}: ${r instanceof Error?r.message:String(r)}`}}}function Ao(n){try{return u.json().safeParse(JSON.parse(A(n))).data}catch{return}}function zm(n){let e=Hn(n,Gn);if("error"in e)return e.error;if(Lm.safeParse(Ao(e.content)).data?.id===z)return;return`${De(n,Gn)} is not a valid ${z} manifest; run install --openclaw`}function Sm(n){let e=Hn(n,Qn);if("error"in e)return e.error;if(km.safeParse(Ao(e.content)).data?.openclaw.extensions?.includes(`./${N}`))return;return`${De(n,Qn)} does not point OpenClaw at ${N}; run install --openclaw`}function Zm(n){let e=Ro(n);if(!R(e))return`${z} is not enabled; ${je}`;let t=(()=>{try{return wm.parse(JSON.parse(A(Fo(e,"utf-8"))))}catch{return}})();if(t===void 0)return`Failed to read ${e}; fix it, then ${je}`;let i=t.plugins;if(i?.enabled===!1)return`plugins.enabled is false in ${e}; no OpenClaw plugin loads`;let r=i?.entries?.[z]?.enabled;if(i?.deny?.includes(z)||r===!1)return`${z} is disabled in ${e}; ${je}`;let s=i?.allow??[];if(s.length>0&&!s.includes(z))return`plugins.allow in ${e} does not list ${z}; add it, then ${je}`;if(s.includes(z)||r===!0)return;return`${z} is not enabled; ${je}`}function qo(n){return/^\/\/ version:\s*(.+)$/m.exec(n)?.[1]?.trim()}function jm(n,e,t){if(t===void 0)return[];let i=Hn(t,N);if("error"in i||qo(i.content)!==e)return[];return[N,Gn,Qn].flatMap((r)=>{let s=Hn(n,r),a=Hn(t,r);if("error"in s||"error"in a||s.content===a.content)return[];return[`Modified ${r} occupies ${De(n,r)}; run install --openclaw to restore it`]})}function Jo(n){let e=Vi(n.homeDir),t=He(ut,e);if(t)return t;let i=Hn(e,N),s=["error"in i?i.error:i.content.startsWith(ot)?void 0:`Unmanaged ${N} occupies ${De(e,N)}; move or remove it`,zm(e),Sm(e)].filter((l)=>l!==void 0),a="content"in i?qo(i.content):void 0,o=s.length>0?s:jm(e,a,Xi());if(o.length>0)return{platform:ut,status:"n/a",configPath:e,errors:o};let d=a===S()?[]:["Installed OpenClaw plugin is outdated; run install --openclaw to update"],c=Zm(n.homeDir);if(c)return{platform:ut,status:"disabled",method:"plugin directory",configPath:e,errors:[c,...d]};return{platform:ut,status:"configured",method:"plugin directory",configPath:e,errors:d.length>0?d:void 0}}import{existsSync as Dm,readFileSync as Um}from"node:fs";import{join as Bo}from"node:path";var Im=u.object({plugin:u.array(u.string()).optional()});function No(n){let e=[],t=Bo(n.homeDir,".config","opencode"),i=["opencode.json","opencode.jsonc"];for(let r of i){let s=Bo(t,r);if(Dm(s))try{let a=Um(s,"utf-8"),o=A(a);if((Im.parse(JSON.parse(o)).plugin??[]).some((p)=>p.includes("cc-safety-net")))return{platform:"opencode",status:"configured",method:"plugin array",configPath:s,errors:e.length>0?e:void 0}}catch(a){e.push(`Failed to parse ${r}: ${a instanceof Error?a.message:String(a)}`)}}return{platform:"opencode",status:"n/a",errors:e.length>0?e:void 0}}import{join as Tm}from"node:path";var Pm=u.union([u.string().transform((n)=>({source:n,extensions:void 0})),u.object({source:u.string(),extensions:u.array(u.string()).optional()})]),Rm=u.object({packages:u.array(u.json())});function Ki(n){return Tm(n,".pi","agent","settings.json")}function Wi(n){return n==="npm:cc-safety-net"||n.startsWith("npm:cc-safety-net@")}function Vo(n){let e=Ki(n.homeDir),t=nn(e);if(t.kind==="unreadable")return{platform:"pi",status:"not-inspected"};if(t.kind==="missing")return{platform:"pi",status:"n/a"};let i=Rm.safeParse(t.value).data?.packages;if(!i)return{platform:"pi",status:"n/a"};let s=i.flatMap((o)=>{let d=Pm.safeParse(o);return d.success?[d.data]:[]}).find((o)=>Wi(o.source));if(s===void 0)return{platform:"pi",status:"n/a"};if(s.extensions?.some((o)=>o.startsWith("-"))??!1)return{platform:"pi",status:"disabled",method:"package config",configPath:e,errors:["npm:cc-safety-net is installed but its extension is disabled in Pi settings"]};return{platform:"pi",status:"configured",method:"package config",configPath:e}}var Om={amp:Na,"antigravity-cli":Va,"claude-code":Wa,codex:Ya,"copilot-cli":oo,cursor:yo,"gemini-cli":go,"hermes-agent":jo,"kimi-code":Ze,openclaw:Jo,opencode:No,pi:Vo};function ne(n,e){let t={...e,cwd:n,homeDir:e?.homeDir??Em()};return Bs.map((i)=>Cm(Om[i](t)))}function Cm(n){if(n.status==="not-inspected")return{platform:n.platform,detected:!1,configured:!1,inspectionStatus:"not-inspected"};return{platform:n.platform,detected:n.status!=="n/a",configured:n.status==="configured",inspectionStatus:n.status!=="n/a"?"verified":n.errors&&n.errors.length>0?"failed":"not-applicable",method:n.method,configPath:n.configPath,configPaths:n.configPaths,errors:n.errors}}import{tmpdir as Fm}from"node:os";import{join as Am}from"node:path";var qm=Object.freeze([{command:"git reset --hard",description:"git reset --hard",expectBlocked:!0},{command:"rm -rf /",description:"rm -rf /",expectBlocked:!0},{command:"rm -rf ./node_modules",description:"rm in cwd (safe)",expectBlocked:!1}]),Jm=Object.freeze({state:"ready",diagnostics:Object.freeze([]),ruleMetadata:Object.freeze({}),policy:Object.freeze({rules:Object.freeze([]),transparentWrappers:Object.freeze([]),safety:Object.freeze({}),worktreeMode:!1,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:Object.freeze({}),destructiveCommandAllowPaths:Object.freeze([]),secretProtection:Object.freeze({enabled:!0,disabledRules:Object.freeze([]),denyPaths:Object.freeze([])})})}),Yi=()=>({enabled:!1,source:"preset",sources:[]}),Bm={strict:!1,paranoidRm:!1,paranoidInterpreters:!1,worktreeMode:!1,effectiveLevel:"standard",capabilities:{fail_closed:Yi(),paranoid_rm:Yi(),paranoid_interpreters:Yi()},sources:{failClosed:[],paranoidRm:[],paranoidInterpreters:[],worktreeMode:[]}};function Mo(){let n=Am(Fm(),"cc-safety-net-self-test"),e=qm.map((t)=>{let i=Be(An("self-test",{command:t.command},{kind:"command",shell:"auto"},{configCwd:n,executionCwd:n},t.command),{guard:{dependencies:{loadPolicySnapshot:()=>Jm,getModes:()=>Bm,findPolicyMutation:()=>null}},audit:{agent:"self-test",getSessionId:()=>{return}}}),r=t.expectBlocked?"blocked":"allowed",s=i.decision.kind==="deny"?"blocked":"allowed";return{command:t.command,description:t.description,expected:r,actual:s,passed:r===s,reason:i.decision.kind==="deny"?i.decision.reason:void 0,ruleId:i.decision.kind==="deny"?i.decision.ruleId:void 0}});return{passed:e.filter((t)=>t.passed).length,failed:e.filter((t)=>!t.passed).length,total:e.length,results:e}}function Gi(n){let e=Z({label:"doctor",booleans:{json:["--json"],skipUpdateCheck:["--skip-update-check"]}},n);if(rn(e.errors))return null;return{json:e.flags.json,skipUpdateCheck:e.flags.skipUpdateCheck}}async function Xo(n={}){let e=await Le(!n.json,()=>{let t=Nm(n);return{ready:t,finish:()=>t}},()=>xe(),{loadingMessage:"Checking system status…"});if(n.json)console.log(JSON.stringify(e,null,2));else Mm(e);return Vm(e.hooks,e.engineSelfTest,{userConfig:e.userConfig,projectConfig:e.projectConfig})?1:0}async function Nm(n){let e=n.cwd??process.cwd(),t=await be(),i=ne(e,{ampPluginListOutput:t.ampPluginListOutput,codexPluginListOutput:t.codexPluginListOutput,copilotCliVersion:t.copilotCliVersion}),r=fa(e),s=va(),a=F({cwd:e}),o=a.policy,d=on(o),c=kn(o,d.capabilities),l=Ke(7),p=n.skipUpdateCheck?{currentVersion:S(),latestVersion:null,updateAvailable:!1}:await Wn(),y={hooks:i,engineSelfTest:Mo(),userConfig:r.userConfig,projectConfig:r.projectConfig,configState:ye(a),effectiveRules:r.effectiveRules,shadowedRules:r.shadowedRules,environment:s,effectiveSafety:{selectedPreset:o.safety.level??"standard",level:d.effectiveLevel,capabilities:d.capabilities,ruleOverrides:o.destructiveCommandRuleOverrides,weakenedRuleOverrides:Object.entries(c).filter(([,m])=>m.source==="rule_override"&&m.override==="off"&&m.inheritedEnabled&&m.changesInherited).map(([m])=>m),ruleCounts:{stored:Object.keys(o.destructiveCommandRuleOverrides).length,effective:Object.values(c).filter((m)=>m.changesInherited).length}},posture:ja(r.userConfig.path),activity:l,update:p,system:t};return{...y,findings:ga(y)}}function Vm(n,e,t){return n.length>0&&n.every((i)=>!i.configured)||n.some((i)=>i.inspectionStatus==="failed")||e.failed>0||t.userConfig.exists&&!t.userConfig.valid||t.projectConfig.exists&&!t.projectConfig.valid}function Mm(n){console.log(),console.log(_a(n.hooks)),console.log(),console.log(ba(n.engineSelfTest)),console.log(),console.log($a(n)),console.log(),console.log(xa(n.environment)),console.log(),console.log(La(n)),console.log(),console.log(ka(n.findings)),console.log(),console.log(wa(n.activity)),console.log(),console.log(Sa(n.system)),console.log(),console.log(za(n.update)),console.log(Za(n))}import{existsSync as Xm}from"node:fs";var Km=/^[A-Za-z0-9_@%+=:,./-]+$/,Ko="Usage: cc-safety-net explain [--json] [--cwd <path>] <command>";function Qi(n){let e=Z({label:"explain",booleans:{json:["--json"]},values:{cwd:["--cwd"]},positionals:"tail"},n);if(rn(e.errors))return console.error(Ko),console.error("Pass -- before a command that starts with dashes."),null;if(e.values.cwd!==void 0&&!Xm(e.values.cwd))return console.error(`Error: --cwd path does not exist: ${e.values.cwd}`),null;let t=e.positionals.length===1?e.positionals[0]:e.positionals.map((i)=>Km.test(i)?i:`'${i.replaceAll("'","'\\''")}'`).join(" ");if(!t)return console.error("Error: No command provided"),console.error(Ko),null;return{json:e.flags.json,cwd:e.values.cwd,command:t}}function Wo(n){if(n)return{dh:"=",dv:"|",dtl:"+",dtr:"+",dbl:"+",dbr:"+",h:"-",v:"|",tl:"+",tr:"+",bl:"+",br:"+",sh:"="};return{dh:"═",dv:"║",dtl:"╔",dtr:"╗",dbl:"╚",dbr:"╝",h:"─",v:"│",tl:"┌",tr:"┐",bl:"└",br:"┘",sh:"━"}}function Yo(n,e){let i=e-18;return[`${n.dtl}${n.dh.repeat(e)}${n.dtr}`,`${n.dv}  Command Analysis${" ".repeat(i)}${n.dv}`,`${n.dbl}${n.dh.repeat(e)}${n.dbr}`]}function Hi(n){return JSON.stringify(n)}function Go(n,e=0){return`[${n.map((i,r)=>ha(i,r,e)).join(",")}]`}function dt(n,e,t=70){let i=n.split(" "),r=[],s="";for(let a of i)if(s&&s.length+a.length+1>t)r.push(s),s=a;else s=s?`${s} ${a}`:a;if(s)r.push(s);return r.map((a,o)=>o===0?a:`${e}${a}`)}function Qo(n,e,t){let i=[];switch(n.type){case"parse":return null;case"env-strip":{i.push(""),i.push(`STEP ${e} ${t.h} Strip environment variables`);let r=Object.keys(n.envVars);return i.push(`  Removed: ${r.map((s)=>`${s}=<redacted>`).join(", ")}`),i.push(`  Tokens:  ${Hi(n.output)}`),{lines:i,incrementStep:!0}}case"leading-tokens-stripped":return i.push(""),i.push(`STEP ${e} ${t.h} Strip wrappers`),i.push(`  Removed: ${n.removed.join(", ")}`),i.push(`  Tokens:  ${Hi(n.output)}`),{lines:i,incrementStep:!0};case"shell-wrapper":return i.push(""),i.push(`STEP ${e} ${t.h} Detect shell wrapper`),i.push(`  Wrapper: ${n.wrapper} -c`),i.push(`  Inner:   ${n.innerCommand}`),{lines:i,incrementStep:!0};case"interpreter":{if(i.push(""),i.push(`STEP ${e} ${t.h} Detect interpreter`),i.push(`  Interpreter: ${n.interpreter}`),i.push(`  Code:        ${n.codeArg}`),n.paranoidBlocked)i.push("  Result:      ✗ BLOCKED (paranoid mode)");return{lines:i,incrementStep:!0}}case"busybox":return i.push(""),i.push(`STEP ${e} ${t.h} Busybox wrapper`),i.push(`  Subcommand: ${n.subcommand}`),{lines:i,incrementStep:!0};case"transparent-wrapper":return i.push(""),i.push(`STEP ${e} ${t.h} Transparent wrapper`),i.push(`  Wrapper: ${n.wrapper}`),i.push(`  Tokens:  ${Hi(n.output)}`),{lines:i,incrementStep:!0};case"recurse":return{lines:[],incrementStep:!1};case"rule-check":{i.push(""),i.push(`STEP ${e} ${t.h} Match rules`);let r=`${n.ruleModule}:${n.ruleFunction}()`;if(i.push(`  Rule:   ${r}`),n.matched)i.push("  Result: MATCHED");else i.push("  Result: No match");return{lines:i,incrementStep:!0}}case"worktree-relaxation":return i.push(""),i.push(`STEP ${e} ${t.h} Worktree relaxation`),i.push(`  Mode:   ${k.worktree.name}`),i.push(`  Git cwd: ${n.gitCwd}`),i.push("  Result: Allowed local discard in linked worktree"),{lines:i,incrementStep:!0};case"tmpdir-check":return null;case"fallback-scan":{if(n.embeddedCommandFound)return i.push(""),i.push(`STEP ${e} ${t.h} Fallback scan`),i.push(`  Found: ${n.embeddedCommandFound}`),{lines:i,incrementStep:!0};return null}case"custom-rules-check":{if(n.rulesChecked){if(i.push(""),i.push(`STEP ${e} ${t.h} Custom rules`),n.matched)i.push("  Result: MATCHED");else i.push("  Result: No match");return{lines:i,incrementStep:!0}}return null}case"cwd-change":return null;case"dangerous-text":{if(n.matched)return i.push(""),i.push(`STEP ${e} ${t.h} Dangerous text check`),i.push(`  Token:  ${n.token}`),i.push("  Result: MATCHED"),{lines:i,incrementStep:!0};return null}case"strict-unparseable":return i.push(""),i.push(`STEP ${e} ${t.h} Strict mode check`),i.push(`  Command: ${n.rawCommand}`),i.push("  Result:  ✗ UNPARSEABLE"),{lines:i,incrementStep:!0};case"segment-skipped":return null;case"error":return i.push(""),i.push(`ERROR: ${n.message}`),{lines:i,incrementStep:!1};default:return null}}function nr(n,e){let t=Wo(e?.asciiOnly??!1),i=58,r=[],s=1;r.push(...Yo(t,58)),r.push("");let a=n.trace.steps.find((m)=>m.type==="error");if(a&&a.type==="error"){r.push("ERROR"),r.push(`  ${a.message}`),r.push(""),r.push("RESULT"),r.push(`  Status: ${n.result==="blocked"?g.red("BLOCKED"):g.green("ALLOWED")}`),r.push(""),r.push("CONFIG");let m=n.configSource??"none";return r.push(`  Path: ${m}`),r.join(`
`)}let o=n.trace.steps.find((m)=>m.type==="parse");if(o&&o.type==="parse"){r.push("INPUT"),r.push(`  ${o.input}`),r.push(""),r.push(`STEP ${s} ${t.h} Split shell commands`),s++;for(let m=0;m<o.segments.length;m++){let f=o.segments[m];if(f){let v=Math.random();r.push(`  Segment ${m+1}: ${Go(f,v)}`)}}}let d=n.trace.segments,c=d.length>1;for(let m of d){if(c){r.push("");let $="";if(o&&o.type==="parse"){let Tt=o.segments[m.index];if(Tt)$=Tt.join(" ")}let b=54,h=$,U=` Segment ${m.index+1}: `,In=" ";if($){if(U.length+$.length+In.length>b){let Hd=b-U.length-In.length;h=`${$.substring(0,Hd-1)}…`}}let re=$?`${U}${h}${In}`:` Segment ${m.index+1} `,It=$?`${U}${g.cyan(h)}${In}`:re,Zr=58-re.length,jr=Math.floor(Zr/2),Qd=Zr-jr;r.push(`${t.sh.repeat(jr)}${It}${t.sh.repeat(Qd)}`)}if(m.steps.find(($)=>$.type==="segment-skipped")){r.push(""),r.push("  (skipped — prior segment blocked)");continue}let v=!1,_=!1;for(let $ of m.steps){let b=Qo($,s,t);if(b){if(_=!0,$.type==="recurse"){r.push("");let h=" RECURSING ",U=58-h.length-4;r.push(`  ${t.tl}${t.h}${h}${t.h.repeat(U)}`),r.push(`  ${t.v}`),v=!0;continue}for(let h of b.lines)if(v)r.push(`  ${t.v} ${h}`);else r.push(h);if(b.incrementStep)s++}}if(v)r.push(`  ${t.v}`),r.push(`  ${t.bl}${t.h.repeat(56)}`),v=!1;if(!_)r.push(""),r.push(`  ${g.green("✓")} Allowed (no matching rules)`)}if(r.push(""),r.push("RESULT"),n.result==="blocked"){if(r.push(`  Status: ${g.red("BLOCKED")}`),n.customRule){if(r.push(`  Rule: ${n.customRule.id}`),n.customRule.rulebook)r.push(`  Rulebook: ${n.customRule.rulebook.name} ${n.customRule.rulebook.version}`);if(n.customRule.source)r.push(`  Source: ${n.customRule.source}`);if(n.customRule.override)r.push(`  Override: reason ${n.customRule.override.reason}`)}if(n.reason){let m=dt(n.reason,"          ");r.push(`  Reason: ${m[0]}`);for(let f=1;f<m.length;f++)r.push(m[f]??"")}}else r.push(`  Status: ${g.green("ALLOWED")}`);r.push(""),r.push("CONFIG");let l=n.configSource??"none",p=n.configValid?"":" (invalid)";r.push(`  Path: ${l}${p}`),r.push(`  Safety preset: ${n.selectedPreset??"standard"}`),r.push(`  Effective capabilities: ${n.effectiveLevel}`);let y=Object.entries(n.destructiveCommandRuleOverrides??{});if(r.push(`  Rule customizations: ${y.length}`),n.ruleActivation)r.push(`  Rule activation: ${n.ruleActivation.id} — ${n.ruleActivation.enabled?"on":"off"} via ${n.ruleActivation.source}`);return r.join(`
`)}function er(n){return JSON.stringify(n,null,2)}var Ho=import.meta.filename.endsWith(".ts")?"dev":"2.0.5",V="  ",Zn="cc-safety-net";function nu(n){return n.argument?`${n.flags} ${n.argument}`:n.flags}function Wm(n){return Math.max(...n.map((e)=>nu(e).length))}function Ym(n){return Math.max(...n.map((e)=>e.usage.length))}function Gm(n){return Math.max(...n.map((e)=>`${Zn} ${e.usage}`.length))}function Qm(n,e){let t=`${Zn} ${n.usage}`;return`${V}${t.padEnd(e+2)}${n.description}`}function ln(n,e){return`${V}${n.padEnd(Math.max(40,n.length+2))}${e}`}function ct(n,e=console.log){let t=[];if(t.push(`${Zn} ${n.name}`),t.push(""),t.push(`${V}${n.description}`),t.push(""),t.push("USAGE:"),t.push(`${V}${Zn} ${n.usage}`),t.push(""),n.subcommands&&n.subcommands.length>0){t.push("SUBCOMMANDS:");let i=Ym(n.subcommands);for(let r of n.subcommands)t.push(`${V}${r.usage.padEnd(i+2)}${r.description}`);t.push("")}if(n.options.length>0){t.push("OPTIONS:");let i=Wm(n.options);for(let r of n.options){let s=nu(r),a=r.default?`${r.description} (default: ${r.default})`:r.description;t.push(`${V}${s.padEnd(i+2)}${a}`)}t.push("")}if(n.examples&&n.examples.length>0){t.push("EXAMPLES:");for(let i of n.examples)t.push(`${V}${i}`)}e(t.join(`
`))}function tr(){let n=pa(),e=Gm(n),t=[];t.push(`${Zn} v${Ho}`),t.push(""),t.push("Blocks destructive commands and secret access."),t.push(""),t.push("COMMANDS:");for(let i of n)t.push(Qm(i,e));t.push(""),t.push("GLOBAL OPTIONS:"),t.push(`${V}-h, --help       Show help (use with command for command-specific help)`),t.push(`${V}-V, --version    Show version`),t.push(""),t.push("HELP:"),t.push(`${V}${Zn} help <command>     Show help for a specific command`),t.push(`${V}${Zn} <command> --help   Show help for a specific command`),t.push(""),t.push("ENVIRONMENT VARIABLES:"),t.push(ln(`${k.level.name}=standard|strict|paranoid`,"Set session safety level")),t.push(ln(`${k.worktree.name}=1`,"Allow local git discards in linked worktrees")),t.push(ln(`${k.debug.name}=1`,"Print diagnostic messages to stderr")),t.push(ln(`${k.auditScope.name}=all|blocked`,"Record all command decisions, or denials only")),t.push(ln("CC_SAFETY_NET_HOME","Override rule config home directory")),t.push(""),t.push("LEGACY ENVIRONMENT VARIABLES (STILL SUPPORTED):"),t.push(ln(`${k.strict.name}=1`,"Force safety.overrides.fail_closed on")),t.push(ln(`${k.paranoid.name}=1`,"Force paranoid_rm and paranoid_interpreters on")),t.push(ln(`${k.paranoidRm.name}=1`,"Force safety.overrides.paranoid_rm on")),t.push(ln(`${k.paranoidInterpreters.name}=1`,"Force safety.overrides.paranoid_interpreters on")),t.push(""),t.push("Documentation:        https://ccsafetynet.com/docs"),console.log(t.join(`
`))}function eu(){console.log(Ho)}function Ue(n,e=console.log){let t=Xe(n);if(!t)return!1;if(t.hidden||t.name.toLowerCase()!==n.toLowerCase())return!1;return ct(t,e),!0}import{existsSync as hr,readFileSync as od}from"node:fs";import{homedir as av}from"node:os";import{join as yr}from"node:path";import*as bn from"node:readline";function Hm(n){return n==="install"?"Install":"Uninstall"}function nf(n){return n==="install"?"Installing":"Uninstalling"}function ef(n){return n==="install"?"into":"from"}function ru(n){return n?.available===!0}function tf(n,e){let t=new Set(e);return n.filter((i)=>t.has(i.target)).map((i)=>i.target)}function tu(n,e,t){if(n.every((i)=>!i.available))return e;return Array.from({length:n.length},(i,r)=>r+1).map((i)=>(e+i*t+n.length)%n.length).find((i)=>ru(n[i]))??e}function rf(n,e,t){if(t.ctrl&&t.name==="c")return"interrupt";if(t.name==="escape"||e==="q")return"abort";if(n==="install"&&(e==="u"||e==="U"))return"update";if(t.name==="up"||e==="k")return"up";if(t.name==="down"||e==="j")return"down";if(t.name==="space"||e===" ")return"toggle";if(t.name==="return"||t.name==="enter")return"confirm";return null}function sf(n){return{cursor:n.findIndex((e)=>e.available),selected:[]}}function af(n,e,t){if(t==="confirm"||t==="update"||t==="abort"||t==="interrupt")return{state:n,done:t};if(t==="up")return{state:{...n,cursor:tu(e,n.cursor,-1)}};if(t==="down")return{state:{...n,cursor:tu(e,n.cursor,1)}};let i=e[n.cursor];if(!ru(i))return{state:n};let r=n.selected.includes(i.target)?n.selected.filter((s)=>s!==i.target):tf(e,[...n.selected,i.target]);return{state:{...n,selected:r}}}var su="◉",au="◯",ou=">",uu=" ";function of(n,e,t,i={}){let r=i.color!==!1,s=r?g.dim:(d)=>d,a=r?g.green:(d)=>d,o=r?g.bold:(d)=>d;return["",`${Hm(n)} CC Safety Net ${ef(n)}:`,"",...e.map((d,c)=>{let l=t.selected.includes(d.target),p=c===t.cursor,y=l?su:au,m=p?ou:uu,f=d.available?"":` (${d.unavailableReason??"not installed"})`,v=`${y} ${d.label}${f}`,_=!d.available?s(v):l?a(v):p?o(v):v;return`${m} ${_}`}),"",n==="install"?"Space: select  Enter: confirm  u: update installed  Up/Down: move  q/Esc: cancel":e.some((d)=>d.available)?"Space: select  Enter: confirm  Up/Down: move  q/Esc: cancel":`No selectable integrations found for ${n}. q/Esc: close`].join(`
`)}var iu=["global-hook","plugin"];function uf(n,e,t={}){let i=t.color!==!1?g.bold:(s)=>s;return["","Install the Kimi Code integration as:","",...[`Global hook — ${e?"already installed; selecting it reports the current state":"write the hook into ~/.kimi-code/config.toml now"}`,"Native Kimi plugin — print the steps to run inside Kimi Code"].map((s,a)=>{let o=a===n,d=`${o?su:au} ${s}`;return`${o?ou:uu} ${o?i(d):d}`}),"","Enter: confirm  Up/Down: move  q/Esc: cancel"].join(`
`)}function du(n){let{input:e,output:t}=n;bn.emitKeypressEvents(e);let i=e.isRaw===!0;e.setRawMode(!0),e.resume();let r=0,s=()=>{if(r===0)return;bn.moveCursor(t,0,-r),bn.cursorTo(t,0),bn.clearScreenDown(t)},a=()=>{s();let o=n.render();t.write(`${o}
`),r=o.split(`
`).length};return new Promise((o)=>{let d=(l)=>{e.off("keypress",c),e.setRawMode(i),e.pause(),s(),o(l)};function c(l,p){n.onKey(l,p,{finish:d,draw:a})}e.on("keypress",c),a()})}function cu(n={}){let e=0;return du({input:n.input??process.stdin,output:n.output??process.stdout,render:()=>uf(e,n.globalHookInstalled===!0),onKey:(t,i,r)=>{if(i.ctrl&&i.name==="c"){r.finish(null),(n.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(i.name==="escape"||t==="q")return r.finish(null);if(i.name==="return"||i.name==="enter"){let s=iu[e];if(s)return r.finish(s)}if(i.name==="up"||i.name==="down"||t==="k"||t==="j")e=(e+1)%iu.length,r.draw()}})}function ir(n=process.stdin,e=process.stdout){return Boolean(n.isTTY&&e.isTTY)}function lu(n,e,t={}){let i=t.output??process.stdout,r=sf(e);return du({input:t.input??process.stdin,output:i,render:()=>of(n,e,r),onKey:(s,a,o)=>{let d=rf(n,s,a);if(!d)return;let c=af(r,e,d);if(r=c.state,c.done==="interrupt"){o.finish(null),(t.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(c.done==="abort")return o.finish(null);if(c.done==="update")return o.finish("update");if(c.done==="confirm"){if(r.selected.length===0){i.write("\x07"),o.draw();return}o.finish([...r.selected]),i.write(`${nf(n)} selected integrations...
`);return}o.draw()}})}import{existsSync as mu,lstatSync as fu,mkdtempSync as lf,readFileSync as mt,rmSync as vu}from"node:fs";import{tmpdir as pf}from"node:os";import{dirname as mf,join as jn}from"node:path";import{fileURLToPath as ff}from"node:url";var rr="// cc-safety-net managed Amp plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --amp";import{spawn as df}from"node:child_process";var cf=u.object({code:u.string().optional()}),sr=(n,e)=>{let t=_n([...n],process.env);return new Promise((i)=>{let r=df(t.cmd,t.args,{cwd:e,stdio:["ignore","pipe","pipe"]}),s=Bi(r),a=!1,o=setTimeout(()=>{a=!0,r.kill()},120000);r.on("error",(d)=>{clearTimeout(o),i({status:null,errorCode:cf.safeParse(d).data?.code,stdout:s.stdout,stderr:[d.message,s.stderr].filter(Boolean).join(`
`)})}),r.on("close",(d)=>{clearTimeout(o),i({status:a?null:d,errorCode:a?"ETIMEDOUT":void 0,stdout:s.stdout,stderr:s.stderr})})})};var pu=jn("amp","cc-safety-net.ts"),pn="cc-safety-net.ts";function vf(n){return jn(n,".config","amp","plugins",pn)}function yf(){let n=mf(ff(import.meta.url));return[jn(n,"..",pu),jn(n,"..","..","..","dist",pu)]}function gf(n=yf()){let e=n.find((t)=>mu(t)&&fu(t).isFile());if(!e)throw Error("Packaged Amp plugin artifact not found. Reinstall cc-safety-net and try again.");return e}function yu(n){try{return fu(n)}catch{return}}var hf=u.record(u.string(),u.json()),_f=u.object({scope:u.literal("user"),exists:u.literal(!0),viewerCanWrite:u.literal(!0),cloneRef:u.string().min(1)}),bf=u.array(u.json()).transform((n)=>n.flatMap((e)=>{let t=_f.safeParse(e);return t.success?[t.data]:[]}));function $f(n){try{return hf.safeParse(JSON.parse(n)).data}catch{return}}function xf(n){try{return bf.safeParse(JSON.parse(n)).data??[]}catch{return[]}}function gu(n){return n.subarray(0,Buffer.byteLength(rr)).toString("utf-8")===rr}async function Ie(n,e,t){let i=await n(e,t);if(i.status===0)return i;throw Error([`Failed to run ${e.join(" ")}${i.status===null?"":` (exit ${i.status})`}.`,[i.stdout,i.stderr].filter(Boolean).join(`
`).trim()].filter(Boolean).join(`
`))}async function hu(n){let e=await n(["amp","plugins","repositories","--json"]);if(e.status===null)throw Error(`${e.errorCode==="ENOENT"?'Amp CLI not found. Install the amp CLI, sign in with "amp login", and rerun install --amp.':`amp plugins repositories --json did not finish (${e.errorCode??"terminated"}). Check that the amp CLI responds and rerun install --amp.`}
${e.stderr}`.trim());if(e.status!==0)throw Error(`Failed to run amp plugins repositories --json (exit ${e.status}). Sign in with "amp login" and rerun install --amp.
${[e.stdout,e.stderr].filter(Boolean).join(`
`)}`.trim());let t=xf(e.stdout)[0]?.cloneRef;if(!t)throw Error('Your Amp account has no writable Personal Plugins repository. Sign in with "amp login", open Amp once to create it, and rerun install --amp.');return t}async function _u(n,e){let t=lf(jn(pf(),"cc-safety-net-amp-"));try{return await Ie(n,["amp","clone","user-plugins",t]),await e(t)}finally{vu(t,{recursive:!0,force:!0})}}function bu(n,e){let t=jn(n,pn),i=yu(t);if(!i)return;if(i.isSymbolicLink()||!i.isFile())throw Error(`Refusing to ${e} ${pn} in your Amp personal plugins repository: not a regular file. Remove it there and rerun install --amp.`);let r=mt(t);if(gu(r))return r;throw Error(`Refusing to ${e} unmanaged file ${pn} in your Amp personal plugins repository. Remove it there and rerun install --amp.`)}async function $u(n,e,t,i){if(await Ie(n,t,e),(await Ie(n,["git","status","--porcelain"],e)).stdout.trim()==="")return!1;return await Ie(n,["git","-c","commit.gpgsign=false","-c","user.name=cc-safety-net","-c","user.email=cc-safety-net@localhost","commit","-m",i],e),await Ie(n,["git","push","origin","HEAD"],e),!0}function lt(n,e){let t=vf(n),i=yu(t);if(!i)return;if(!i.isSymbolicLink()&&i.isFile()&&gu(mt(t))){vu(t);return}if(e==="keep")return;throw Error(`Local Amp plugin ${t} is not a managed copy and masks the personal plugin. Remove it and rerun install --amp.`)}function Lf(){let n=ve();if(!mu(n))return"";let e=$f(mt(n,"utf-8"));if(!e)return"";return`;globalThis.__CC_SAFETY_NET_EMBEDDED_POLICY__ = ${JSON.stringify(pt(e))};
`}async function xu(n,e=gf(),t=sr){let i=Buffer.concat([mt(e),Buffer.from(Lf(),"utf-8")]),r=await hu(t);return _u(t,async(s)=>{let a=`${r}/${pn}`;if(bu(s,"overwrite")?.equals(i))return lt(n,"fail"),{path:a,alreadyInstalled:!0};D(jn(s,pn),i);let o=await $u(t,s,["git","add",pn],`chore: update cc-safety-net plugin to v${S()}`);return lt(n,"fail"),{path:a,alreadyInstalled:!o}})}async function Lu(n,e=sr){let t=await hu(e);return _u(e,async(i)=>{let r=`${t}/${pn}`;if(!bu(i,"remove"))return lt(n,"keep"),{path:r,alreadyInstalled:!1};return await $u(e,i,["git","rm",pn],`chore: remove cc-safety-net plugin v${S()}`),lt(n,"keep"),{path:r,alreadyInstalled:!0}})}import{existsSync as ku,mkdirSync as kf,readFileSync as wf}from"node:fs";import{dirname as zf}from"node:path";var ar="npx -y cc-safety-net hook --agy-cli",mn="cc-safety-net",Sf=u.object({command:u.json().optional()}).catchall(u.json()),wu=u.array(Sf),zu=u.object({hooks:u.json().optional()}).catchall(u.json()),yt=u.array(zu),or=u.object({enabled:u.json().optional(),PreToolUse:u.json().optional()}).catchall(u.json()),Zf=u.record(u.string(),u.json()),Su=u.string();function vt(){return{PreToolUse:[{hooks:[{type:"command",command:ar,timeout:30}]}]}}function Zu(n){try{let e=Zf.safeParse(JSON.parse(wf(n,"utf-8")));if(!e.success)throw Error("Antigravity hooks config must be a JSON object");return e.data}catch(e){if(e instanceof SyntaxError)throw Error(`Failed to parse Antigravity hooks config ${n}: ${e.message}`);throw e}}function ju(n){let e=n[mn];if(e===void 0)return n[mn]=vt(),n[mn];let t=or.safeParse(e);if(!t.success)throw Error(`Antigravity hooks config entry "${mn}" must be an object`);let i=yt.safeParse(t.data.PreToolUse);return t.data.PreToolUse=i.success?i.data:[],n[mn]=t.data,t.data}function Du(n){let e=yt.safeParse(n.PreToolUse);if(!e.success)return!1;return e.data.some((t)=>{let i=wu.safeParse(t.hooks);return i.success&&i.data.some((r)=>Su.safeParse(r.command).data===ar)})}function jf(n){return Object.values(n).some((e)=>{let t=or.safeParse(e);return t.success&&t.data.enabled!==!1&&Du(t.data)})}function Df(n){if(n[mn]===void 0)return!1;let e=ju(n);if(e.enabled!==!1||!Du(e))return!1;return e.enabled=!0,!0}function Uf(n){if(n[mn]===void 0){n[mn]=vt();return}let e=ju(n),t=yt.parse(e.PreToolUse);e.enabled=!0,t.push(zu.parse(vt().PreToolUse[0])),e.PreToolUse=t}function If(n){let e=!1;return Object.entries(n).forEach(([t,i])=>{let r=or.safeParse(i);if(!r.success)return;let s=yt.safeParse(r.data.PreToolUse);if(!s.success)return;r.data.PreToolUse=s.data.flatMap((a)=>{let o=wu.safeParse(a.hooks);if(!o.success)return[a];let d=o.data.filter((c)=>Su.safeParse(c.command).data!==ar);if(d.length!==o.data.length)e=!0;return d.length===0?[]:[{...a,hooks:d}]}),n[t]=r.data}),e}function ft(n,e){D(n,`${JSON.stringify(e,null,2)}
`)}function Uu(n){let e=ke(n);if(kf(zf(e),{recursive:!0}),!ku(e))return ft(e,{[mn]:vt()}),{path:e,alreadyInstalled:!1};let t=Zu(e);if(jf(t))return{path:e,alreadyInstalled:!0};if(Df(t))return ft(e,t),{path:e,alreadyInstalled:!1};return Uf(t),ft(e,t),{path:e,alreadyInstalled:!1}}function Iu(n){let e=ke(n);if(!ku(e))return{path:e,alreadyInstalled:!1};let t=Zu(e);if(!If(t))return{path:e,alreadyInstalled:!1};return ft(e,t),{path:e,alreadyInstalled:!0}}import{spawn as Tf,spawnSync as Pf}from"node:child_process";var q=cn.map((n)=>({target:n.id,flag:n.flag,label:n.installLabel,probeCommand:n.probeCommand})),Tu=new Map(q.map((n)=>[n.flag,n.target]));function ur(n){let e=new Set(n);return q.map((t)=>t.target).filter((t)=>e.has(t))}async function Pu(n,e){for(let t of n)await e(t)}var Ru=5000;function Rf(n){let e=_n([...n],process.env),t=Pf(e.cmd,e.args,{env:process.env,stdio:"ignore",timeout:Ru});return!t.error&&t.status===0}function cr(n){return new Promise((e)=>{let t=_n([...n],process.env),i=Tf(t.cmd,t.args,{env:process.env,stdio:"ignore"}),r=!1,s=(o)=>{if(r)return;r=!0,clearTimeout(a),e(o)},a=setTimeout(()=>{i.kill(),s(!1)},Ru);i.on("error",()=>s(!1)),i.on("close",(o)=>s(o===0))})}function Ef(n=Rf,e={}){let t=new Set(e.configuredTargets??[]);if(e.async)return Promise.all(q.map(async(i)=>({target:i.target,flag:i.flag,label:i.label,...dr(e.action,await n(i.probeCommand),t.has(i.target))})));return q.map((i)=>({target:i.target,flag:i.flag,label:i.label,...dr(e.action,u.boolean().safeParse(n(i.probeCommand)).data??!1,t.has(i.target))}))}function Eu(n=cr,e={}){return Ef(n,{...e,async:!0})}function Ou(n,e){let t=new Set(e.configuredTargets??[]);return n.map((i)=>({...i,...dr(e.action,i.available,t.has(i.target))}))}function dr(n,e,t){if(n==="uninstall")return t?{available:!0}:{available:!1,unavailableReason:"not installed"};if(n==="install"&&t)return{available:!1,unavailableReason:"already installed"};if(!e)return{available:!1,unavailableReason:"CLI not installed"};return{available:!0}}import{existsSync as Cu,readdirSync as Of,rmSync as Cf}from"node:fs";import{join as ee}from"node:path";function gt(n,e=process.platform){let t=ee(process.env.npm_config_cache||(e==="win32"?ee(process.env.LOCALAPPDATA||ee(n,"AppData","Local"),"npm-cache"):ee(n,".npm")),"_npx");if(!Cu(t))return;Of(t).filter((i)=>Cu(ee(t,i,"node_modules","cc-safety-net"))).forEach((i)=>{Cf(ee(t,i),{recursive:!0,force:!0})})}import{existsSync as Ju,mkdirSync as Af,readFileSync as Bu}from"node:fs";import{dirname as qf,join as qu}from"node:path";function Fu(n){return n!==void 0&&/\s/.test(n)}function Ff(n,e,t){let i=e+1,r=!1;while(i<n.length){let s=n[i];if(r){r=!1,i++;continue}if(s==="\\"){r=!0,i++;continue}if(s==='"')return i+1;i++}throw Error(t)}function ht(n,e,t){let i=n[e],r=i==="["?"]":"}",s=0,a=e;while(a<n.length){let o=t.skipComment?.(n,a)??a;if(o!==a){a=o;continue}if(n[a]==='"'){a=Ff(n,a,t.stringError);continue}if(n[a]===i)s++;if(n[a]===r){if(s--,s===0)return a}a++}throw Error(t.bracketError)}function Au(n,e){let t=n.lastIndexOf(`
`,e)+1;return/^[ \t]*/.exec(n.slice(t))?.[0]??""}function _t(n,e){let{start:t,end:i,end:r}=e;while(Fu(n[r]))r++;if(n[r]===","){if(i=r+1,n[i]===`
`)i++;return`${n.slice(0,t)}${n.slice(i)}`}r=e.start-1;while(Fu(n[r]))r--;if(n[r]===","){t=r;let s=n.lastIndexOf(`
`,t-1);if(s!==-1&&/^\s*$/.test(n.slice(s+1,t)))t=s}return`${n.slice(0,t)}${n.slice(i)}`}var Te="npx -y cc-safety-net hook --kimi-code",lr=`[[hooks]]
event = "PreToolUse"
command = "${Te}"`,pr=`{ event = "PreToolUse", command = "${Te}" }`;function Nu(n){return qu(process.env.KIMI_CODE_HOME??qu(n,".kimi-code"),"config.toml")}function Jf(n){return n.split(`
`).reduce((t,i)=>{if(/^\s*\[/.test(i))return t.activeTable=!0,t.lines.push(i),t;if(!t.activeTable&&/^\s*hooks\s*=\s*\[\s*]\s*(?:#.*)?$/.test(i))return t;return t.lines.push(i),t},{activeTable:!1,lines:[]}).lines.join(`
`)}function Bf(n,e){if(n[e]!=="#")return e;let t=n.indexOf(`
`,e+1);return t===-1?n.length:t+1}function Nf(n,e){return ht(n,e,{skipComment:Bf,stringError:"Unterminated string in Kimi Code config",bracketError:"Unmatched hooks array in Kimi Code config"})}function Vu(n){let e=!1,t=0;while(t<n.length){let i=n.indexOf(`
`,t),r=i===-1?n.length:i,s=n.slice(t,r);if(/^\s*\[/.test(s))e=!0;if(!e){let a=/^(\s*)hooks\s*=\s*\[/.exec(s);if(a){let o=t+a[0].lastIndexOf("[");return{start:o,end:Nf(n,o)}}}t=i===-1?n.length:i+1}return}function Vf(n,e){let t=n.slice(0,e.end).trimEnd(),i=Au(n,e.end),r=i===""?"     ":`${i}  `,s=!t.endsWith("[")&&!t.endsWith(",");return`${t}${s?",":""}
${r}${pr}${n.slice(e.end)}`}function Mf(n){let e=Vu(n);if(e&&n.slice(e.start+1,e.end).trim())return Vf(n,e);let t=Jf(n).trimEnd();if(t==="")return`${lr}
`;return`${t}

${lr}
`}function Xf(n){return n.split(/(?=^\s*\[)/m).filter((t)=>!/^\s*\[\[hooks]]\s*$/m.test(t)||!t.includes(Te)).join("").trimEnd()}function Kf(n,e){let t=n.indexOf(pr,e.start);if(t===-1||t>e.end)return n;return _t(n,{start:t,end:t+pr.length})}function Mu(n){let e=Nu(n);if(Af(qf(e),{recursive:!0}),!Ju(e))return D(e,`${lr}
`),{path:e,alreadyInstalled:!1};let t=Bu(e,"utf-8");if(t.includes(Te))return{path:e,alreadyInstalled:!0};return D(e,Mf(t)),{path:e,alreadyInstalled:!1}}function Xu(n){let e=Nu(n);if(!Ju(e))return{path:e,alreadyInstalled:!1};let t=Bu(e,"utf-8");if(!t.includes(Te))return{path:e,alreadyInstalled:!1};let i=Vu(t),r=i?Kf(t,i):`${Xf(t)}
`;return D(e,r),{path:e,alreadyInstalled:!0}}import{existsSync as Ku,readFileSync as Wf,rmSync as Yf}from"node:fs";import{join as mr}from"node:path";var fr="cc-safety-net",Gf=`${fr}@latest`,Yu=["opencode.json","opencode.jsonc"],Gu=u.string(),Qf=u.object({plugin:u.array(u.json()).optional()}).loose().transform((n)=>({hasManagedPlugin:n.plugin?.some((e)=>{let t=Gu.safeParse(e);return t.success&&t.data.includes(fr)})??!1})).or(u.json().transform(()=>({hasManagedPlugin:!1})));function Hf(n){return mr(n,".config","opencode",Yu[0])}function nv(n){return Yu.map((e)=>mr(n,".config","opencode",e))}function ev(n){return mr(n,".cache","opencode","packages",Gf)}function vr(n){Yf(ev(n),{recursive:!0,force:!0})}function bt(n,e){if(n[e]==="/"&&n[e+1]==="/"){let t=n.indexOf(`
`,e+2);return t===-1?n.length:t+1}if(n[e]==="/"&&n[e+1]==="*"){let t=n.indexOf("*/",e+2);return t===-1?n.length:t+2}return e}function Wu(n,e){let t=e;while(t<n.length){if(/\s/.test(n[t]??"")){t++;continue}let i=bt(n,t);if(i===t)return t;t=i}return t}function Qu(n,e){let t=e+1,i=!1;while(t<n.length){if(i){i=!1,t++;continue}if(n[t]==="\\"){i=!0,t++;continue}if(n[t]==='"')return t+1;t++}throw Error("Unterminated string in OpenCode config")}function Hu(n,e,t){return Gu.parse(JSON.parse(n.slice(e,t)))}function tv(n,e){return ht(n,e,{skipComment:bt,stringError:"Unterminated string in OpenCode config",bracketError:"Unmatched plugin array in OpenCode config"})}function iv(n){let e=0,t=0;while(t<n.length){let i=bt(n,t);if(i!==t){t=i;continue}if(n[t]==='"'){let r=Qu(n,t);if(e===1&&Hu(n,t,r)==="plugin"){let s=Wu(n,r),a=Wu(n,s+1);if(n[s]===":"&&n[a]==="[")return{start:a,end:tv(n,a)}}t=r;continue}if(n[t]==="{"||n[t]==="[")e++;if(n[t]==="}"||n[t]==="]")e--;t++}return}function rv(n,e){let t=[],i=e.start+1;while(i<e.end){let r=bt(n,i);if(r!==i){i=r;continue}if(n[i]==='"'){let s=Qu(n,i);if(Hu(n,i,s).includes(fr))t.push({start:i,end:s});i=s;continue}i++}return t}function nd(n,e){try{return Qf.parse(JSON.parse(A(n)))}catch(t){if(t instanceof SyntaxError)throw Error(`Failed to parse OpenCode config ${e}: ${t.message}`);throw t}}function sv(n,e){let t=iv(n);if(!t)throw Error(`Failed to locate OpenCode plugin array in ${e}`);let i=[...rv(n,t)].reverse().reduce(_t,n);return nd(i,e),i}function ed(n){vr(n);let e=nv(n),t=e.find((r)=>Ku(r)),i=[];for(let r of e){if(!Ku(r))continue;try{let s=Wf(r,"utf-8");if(!nd(s,r).hasManagedPlugin)continue;return D(r,sv(s,r)),{path:r,alreadyInstalled:!0}}catch(s){i.push(s instanceof Error?s.message:String(s))}}if(i.length>0)throw Error(i.join(`
`));return{path:t??Hf(n),alreadyInstalled:!1}}var gr="safety-net@cc-marketplace",td=new Set(["claude-code","codex","copilot-cli","gemini-cli","hermes-agent","openclaw","opencode","pi"]),id=new Set(["antigravity-cli","cursor","hermes-agent","kimi-code"]);function _r(n){return/^\s*safety-net@cc-marketplace[^a-z0-9-][^\n]*installed,/m.test(n??"")}function ud(n){return/^\s*cc-safety-net[^a-z0-9-][^\n]*installed,/m.test(n??"")}function ov(n){return/^Marketplace `cc-marketplace`\s*$/m.test(n??"")}var dd={"claude-code":{installCommands:(n)=>{let e=nt(n,"cc-safety-net@cc-marketplace");return{commands:[...e?[["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","update","cc-safety-net@cc-marketplace"]]:[["claude","plugin","marketplace","add","kenryu42/cc-marketplace"],["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","install","cc-safety-net@cc-marketplace"]],...ki(n).status==="disabled"?[["claude","plugin","enable","cc-safety-net@cc-marketplace"]]:[]],cleanupCommands:nt(n,gr)?[["claude","plugin","uninstall",gr]]:[],update:e}},uninstallCommands:[["claude","plugin","uninstall","cc-safety-net@cc-marketplace"],["claude","plugin","marketplace","remove","cc-marketplace"]]},codex:{installCommands:async(n,e)=>{let t=e??await tn(["codex","plugin","list"]),i=ud(t);return{commands:[i||ov(t)?["codex","plugin","marketplace","upgrade","cc-marketplace"]:["codex","plugin","marketplace","add","kenryu42/cc-marketplace"],["codex","plugin","add","cc-safety-net@cc-marketplace"]],cleanupCommands:_r(t)?[["codex","plugin","remove","safety-net@cc-marketplace"]]:[],update:i}},uninstallCommands:[["codex","plugin","remove","cc-safety-net@cc-marketplace"],["codex","plugin","marketplace","remove","cc-marketplace"]],postInstallMessage:"Start Codex, open `/hooks`, select the cc-safety-net PreToolUse hook, and press `t` to trust it."},"copilot-cli":{installCommands:async()=>{let n=await tn(["copilot","plugin","list"]),e=[...to(n)?[["copilot","plugin","uninstall","copilot-safety-net"]]:[],...io(n)?[["copilot","plugin","uninstall",Ha]]:[]];if(no(n))return{commands:[["copilot","plugin","marketplace","update","cc-marketplace"],["copilot","plugin","update",en]],cleanupCommands:e,update:!0};return{commands:[eo(await tn(["copilot","plugin","marketplace","list"]))?["copilot","plugin","marketplace","update","cc-marketplace"]:["copilot","plugin","marketplace","add","kenryu42/cc-marketplace"],["copilot","plugin","install",en]],cleanupCommands:e}},uninstallCommands:[["copilot","plugin","uninstall","cc-safety-net@cc-marketplace"],["copilot","plugin","marketplace","remove","cc-marketplace"]]},"gemini-cli":{installCommands:(n)=>{let e=Pi(n);if(e.status==="configured")return{commands:[["gemini","extensions","update","gemini-safety-net"]],update:!0};if(e.status==="disabled")return{commands:[["gemini","extensions","update","gemini-safety-net"],["gemini","extensions","enable","gemini-safety-net"]],update:!0};return{commands:[["gemini","extensions","install","https://github.com/kenryu42/gemini-safety-net","--consent"]]}},uninstallCommands:[["gemini","extensions","uninstall","gemini-safety-net"]]},openclaw:{beforeInstall:Mi,installCommands:()=>({commands:Oo()}),uninstallCommands:[["openclaw","plugins","uninstall",z,"--force"]],postInstallMessage:["Restart the OpenClaw Gateway to apply the change.","If plugins.allow is set in openclaw.json, it must also list cc-safety-net."].join(`
`)},opencode:{beforeInstall:vr,installCommands:()=>({commands:[["opencode","plugin","-g","-f","cc-safety-net@latest"]]})},pi:{installCommands:()=>({commands:[["pi","install","npm:cc-safety-net"]]}),uninstallCommands:[["pi","uninstall","npm:cc-safety-net"]]}};function kt(){return process.env.HOME??av()}var uv=u.object({}).loose(),dv=u.object({enabledPlugins:u.record(u.string(),u.unknown())}).loose(),cv=u.object({packages:u.array(u.unknown())}).loose(),lv=u.object({source:u.string(),extensions:u.unknown().optional()}).loose();function cd(n,e=(t)=>t){try{let t=JSON.parse(e(od(n,"utf-8"))),i=uv.safeParse(t);if(!i.success)throw Error(`Settings file ${n} must be a JSON object`);return i.data}catch(t){if(t instanceof SyntaxError)throw Error(`Failed to parse ${n}: ${t.message}`);throw t}}function pv(n){let e=yr(we(n),"settings.json");if(!hr(e))return;let t=dv.safeParse(cd(e,A));if(!t.success)return;let i=t.data,r=i.enabledPlugins;if(r[en]!==!1)return;let s=od(e,"utf-8"),a=s.replace(new RegExp(`("${en}"\\s*:\\s*)false`),"$1true");return r[en]=!0,D(e,a!==s?a:`${JSON.stringify(i,null,2)}
`),`Enabled ${en} plugin in ${e}`}function mv(n){let e=Ki(n);if(!hr(e))return;let t=cv.safeParse(cd(e));if(!t.success)return;let i=t.data,r=i.packages.map((o)=>lv.safeParse(o)),s=r.findIndex((o)=>o.success&&Wi(o.data.source)&&o.data.extensions!==void 0),a=r[s];if(!a?.success)return;return delete a.data.extensions,i.packages[s]=a.data,D(e,`${JSON.stringify(i,null,2)}
`),`Enabled npm:cc-safety-net extensions in ${e}`}function rd(n,e){let t=Z({label:e,booleans:{amp:["--amp"],"antigravity-cli":["--agy-cli"],"claude-code":["--claude-code"],codex:["--codex"],"copilot-cli":["--copilot-cli"],cursor:["--cursor"],"gemini-cli":["--gemini-cli"],"hermes-agent":["--hermes-agent"],"kimi-code":["--kimi-code"],openclaw:["--openclaw"],opencode:["--opencode"],pi:["--pi"]}},n),i=t.errors[0];if(i)throw Error(i);let r=q.filter((a)=>t.flags[a.target]).map((a)=>a.target),s=r[0];if(r.length!==1||!s)throw Error(`Choose exactly one ${e} target: ${[...Tu.keys()].join(", ")}`);return s}async function ld(n=kt(),e=Kn){let[t,i,r]=await Promise.all([e(["amp","plugins","list"],30000),e(["codex","plugin","list"],30000),e(["copilot","--binary-version"])]);return{codexPluginListOutput:i,hooks:ne(process.cwd(),{homeDir:n,ampPluginListOutput:t,codexPluginListOutput:i,copilotCliVersion:r})}}async function fv(n,e=Kn){let t=await ld(kt(),e);return t.hooks.filter((i)=>n==="install"?i.configured:i.detected||i.inspectionStatus==="not-inspected").filter((i)=>i.platform!=="codex"||!_r(t.codexPluginListOutput)||ud(t.codexPluginListOutput)).flatMap((i)=>{let r=q.find((s)=>s.target===i.platform);return r?[r.target]:[]})}function vv(n,e,t){if(e.length>0)return{finish:async()=>[rd(e,n)]};if(!t.selectTargets&&!ir(t.input,t.output))return{finish:async()=>[rd(e,n)]};let i=t.detectConfiguredTargets??(()=>fv(n,t.fetchVersion)),r=Promise.all([Eu(t.probeTargets),i()]);return{ready:r,finish:async()=>{let[s,a]=await r,o=Ou(s,{action:n,configuredTargets:a}),d=t.selectTargets?await t.selectTargets(n,ad(n,o)):await lu(n,ad(n,o),{input:t.input,output:t.output});if(d==="update")return d;if(!d||d.length===0)return null;return ur(d)}}}async function Dn(n,e,t=!1,i){let r=dd[n];r.beforeInstall?.(e);let s=await r.installCommands(e,i);return await Ni(s.commands),await Uo(s.cleanupCommands??[]),[`${s.update||t?"Updated":"Installed"} ${hn(n)} integration`,r.postInstallMessage].filter(Boolean).join(`
`)}async function te(n){let e=dd[n];if(!e.uninstallCommands)throw Error(`${hn(n)} uninstall is not supported`);return await Ni(e.uninstallCommands),`Uninstalled ${hn(n)} integration`}function yv(n){let e=ed(n);return e.alreadyInstalled?`Uninstalled OpenCode plugin from ${e.path}`:`OpenCode plugin not installed in ${e.path}`}var gv={"antigravity-cli":{install:Uu,uninstall:Iu},cursor:{install:fo,uninstall:vo},"kimi-code":{install:Mu,uninstall:Xu}};function ie(n,e,t,i=!1){if(n==="install"&&!i)gt(t);let r=gv[e][n](t),s=hn(e),a=n!=="install"?"Uninstalled":i?"Updated":"Installed";return n==="install"&&r.alreadyInstalled?i?`${s} hook up to date in ${r.path}`:`${s} hook already installed in ${r.path}`:n==="uninstall"&&!r.alreadyInstalled?`${s} hook not installed in ${r.path}`:`${a} ${s} hook ${n==="install"?"in":"from"} ${r.path}`}var hv={amp:{install:xu,uninstall:Lu,restartNote:'Amp personal plugins apply to every Amp session, including Orb threads. Restart Amp or run "plugins: reload" to apply the change.'},"hermes-agent":{install:$o,uninstall:xo,afterInstall:async(n)=>{let e=qi(n);return await tn(["hermes","plugins","enable",B,"--no-allow-tool-override"]),!e},beforeUninstall:async(n)=>{Ai(n);try{await tn(["hermes","plugins","disable",B])}catch(e){console.warn(`${e instanceof Error?e.message:String(e)}
Removing the plugin files anyway; ${B} may still be listed in the Hermes config.`)}},restartNote:"Restart Hermes to apply the change."}};async function $t(n,e,t,i=!1){let r=hv[e];if(n==="uninstall")await r.beforeUninstall?.(t);let s=n==="install"?await r.install(t):await r.uninstall(t),a=n==="install"&&await r.afterInstall?.(t),o=hn(e),d=!a&&(n==="install"&&s.alreadyInstalled||n==="uninstall"&&!s.alreadyInstalled);return[d?n==="install"?`${o} plugin ${i?"up to date":"already installed"} at ${s.path}`:`${o} plugin not installed at ${s.path}`:`${n!=="install"?"Uninstalled":i?"Updated":"Installed"} ${o} plugin ${n==="install"?"at":"from"} ${s.path}`,d?void 0:r.restartNote].filter(Boolean).join(`
`)}var _v={amp:{install:(n,e)=>$t("install","amp",n,e),uninstall:(n)=>$t("uninstall","amp",n)},"antigravity-cli":{install:(n,e)=>ie("install","antigravity-cli",n,e),uninstall:(n)=>ie("uninstall","antigravity-cli",n)},"claude-code":{install:(n,e)=>Dn("claude-code",n,e),uninstall:()=>te("claude-code")},codex:{install:(n,e,t)=>Dn("codex",n,e,t),uninstall:()=>te("codex")},"copilot-cli":{install:async(n,e)=>[await Dn("copilot-cli",n,e),pv(n)].filter(Boolean).join(`
`),uninstall:()=>te("copilot-cli")},cursor:{install:(n,e)=>ie("install","cursor",n,e),uninstall:(n)=>ie("uninstall","cursor",n)},"gemini-cli":{install:(n,e)=>Dn("gemini-cli",n,e),uninstall:()=>te("gemini-cli")},"hermes-agent":{install:(n,e)=>{if(!e)gt(n);return $t("install","hermes-agent",n,e)},uninstall:(n)=>$t("uninstall","hermes-agent",n)},"kimi-code":{install:(n,e)=>ie("install","kimi-code",n,e),uninstall:(n)=>ie("uninstall","kimi-code",n)},openclaw:{install:async(n,e)=>{let t=await Dn("openclaw",n,e);return await Co(),t},uninstall:(n)=>{return Mi(n),te("openclaw")}},opencode:{install:(n,e)=>Dn("opencode",n,e),uninstall:(n)=>yv(n)},pi:{install:async(n,e)=>[await Dn("pi",n,e),mv(n)].filter(Boolean).join(`
`),uninstall:()=>te("pi")}},sd=["Install CC Safety Net as a native Kimi Code plugin:","","  1. Start Kimi Code and run: /plugins install https://github.com/kenryu42/cc-safety-net","     Confirm the trust prompt; it defaults to cancel.","  2. Run /reload, or start a new session.","","Note: Kimi Code hooks are fail-open. When the hook process cannot start, crashes, or times","out, Kimi Code allows the tool call."].join(`
`);function bv(n){if(Ze({homeDir:n,cwd:process.cwd()}).status!=="configured")return sd;return[sd,"",g.red(["CAUTION: the global Kimi Code hook is installed and will run alongside the plugin.","After the plugin is active, remove it with: cc-safety-net uninstall --kimi-code"].join(`
`))].join(`
`)}function ad(n,e){return e.map((t)=>n==="install"&&t.target==="kimi-code"&&t.unavailableReason==="already installed"?{...t,available:!0,unavailableReason:void 0,label:`${t.label} (global hook installed)`}:t)}function $v(n,e){if(n.selectKimiInstallMethod)return n.selectKimiInstallMethod();if(!ir(n.input,n.output))return Promise.resolve("global-hook");return cu({input:n.input,output:n.output,globalHookInstalled:Ze({homeDir:e,cwd:process.cwd()}).status==="configured"})}async function pd(n,e,t,i=!1,r){return _v[e][n](t,i,r)}function xv(n){let e=Z({label:"update"},n).errors[0];if(e)throw Error(e)}async function Lv(n,e=Kn){let t=await ld(n,e),i=yr(we(n),"installed-plugins");return{targets:ur([...t.hooks.filter((s)=>s.platform!=="copilot-cli"&&s.detected).flatMap((s)=>{let a=q.find((o)=>o.target===s.platform);return a?[a.target]:[]}),...[et,Qa,Ga].flatMap((s)=>hr(yr(i,...s))?["copilot-cli"]:[]),...nt(n,gr)?["claude-code"]:[],..._r(t.codexPluginListOutput)?["codex"]:[]]),codexPluginListOutput:t.codexPluginListOutput}}async function kv(n){let e=kt(),t=n.output??process.stdout,i=Lv(e,n.fetchVersion??Kn).then(async(o)=>{let d=new Set(o.targets);return{targets:o.targets,codexPluginListOutput:o.codexPluginListOutput,available:new Map(await Promise.all(q.filter((c)=>d.has(c.target)&&td.has(c.target)).map(async(c)=>[c.target,await cr(c.probeCommand)])))}}),r=await Le(n.showBanner??!0,()=>({ready:i,finish:()=>i}),()=>xe({input:n.input??process.stdin,output:t}),{loadingMessage:"Checking installed integrations…",output:t});if(r.targets.length===0)return t.write("No installed integrations found. Run `cc-safety-net install` to set one up.\n"),0;let s=r.targets.some((o)=>id.has(o))?await Promise.resolve().then(()=>{return gt(e),null}).catch((o)=>Lt(xt.parse(o))):null,a=await Ge(Promise.all(r.targets.map((o)=>{if(td.has(o)&&!r.available.get(o))return Promise.resolve({message:`${hn(o)} not found; skipped`,failed:!1});if(s!==null&&id.has(o))return Promise.resolve({message:s,failed:!0});return pd("install",o,e,!0,r.codexPluginListOutput).then((d)=>({message:d,failed:!1}),(d)=>({message:Lt(xt.parse(d)),failed:!0}))})),{loadingMessage:`Updating ${r.targets.length} integration${r.targets.length===1?"":"s"}…`,output:t});return a.forEach((o)=>{if(o.failed){console.error(o.message);return}t.write(`${o.message}
`)}),a.some((o)=>o.failed)?1:0}function br(n,e={}){return Promise.resolve().then(()=>xv(n)).then(()=>kv(e)).catch((t)=>{return console.error(Lt(xt.parse(t))),1})}async function Pe(n,e,t={}){try{let i=await Le(!0,()=>vv(n,e,t),()=>xe({input:t.input??process.stdin,output:t.output??process.stdout}),{loadingMessage:n==="install"?"Checking available integrations…":"Checking installed integrations…",output:t.output??process.stdout});if(!i)return(t.output??process.stdout).write(`Cancelled: nothing was ${n}ed.
`),0;if(i==="update")return(t.runUpdate??(()=>br([],{fetchVersion:t.fetchVersion,input:t.input,output:t.output,showBanner:!1})))();let r=kt(),s=t.output??process.stdout;return await Pu(i,async(a)=>{if(a==="kimi-code"&&n==="install"){let d=await $v(t,r);if(d===null){s.write(`Cancelled: Kimi Code integration was not installed.
`);return}if(d==="plugin"){s.write(`${bv(r)}
`);return}}let o=await Ge(pd(n,a,r),{loadingMessage:`${n==="install"?"Installing":"Uninstalling"} ${hn(a)} integration…`,output:s});s.write(`${o}
`)}),0}catch(i){return console.error(Lt(xt.parse(i))),1}}var wv=u.object({code:u.unknown().optional()}),xt=u.union([u.instanceof(Error).transform((n)=>({message:n.message,code:wv.parse(n).code??null})),u.unknown().transform((n)=>({message:String(n),code:null}))]);function Lt(n){let{message:e,code:t}=n;if(t==="EACCES"||t==="EPERM")return`${e}
Check file permissions for the target config file and parent directory.`;if(t==="ENOENT")return`${e}
Check that the target config path and parent directory exist.`;if(t==="ENOTDIR")return`${e}
Check that every parent path component is a directory.`;return e}import{join as m1}from"node:path";var md="# Custom Rules Reference\n\nAgent reference for generating CC Safety Net rulebook configuration.\n\n## Config Locations\n\n| Scope | Config path | Rulebook path | Cache path | Priority |\n|-------|-------------|---------------|------------|----------|\n| User | `~/.cc-safety-net/rules/rule.json` | `~/.cc-safety-net/rules/<rulebook-name>/rulebook.json` | `~/.cc-safety-net/cache/rulebooks/` | First |\n| Project | `.cc-safety-net/rules/rule.json` | `.cc-safety-net/rules/<rulebook-name>/rulebook.json` | `.cc-safety-net/cache/rulebooks/` | Second |\n| GitHub source | Listed in a local `rule.json` | `.cc-safety-net/rules/<rulebook-name>/rulebook.json` in the source repository | Consumer local cache | Source order |\n\nUser scope is evaluated before project scope; within a scope, sources apply in `rules` array order. A duplicate active rulebook name keeps the first claim and ignores the later rulebook with a warning, so a user-scoped name shadows a project-scoped one.\n\nUse `cc-safety-net rule init` to create an inert local config. Use `--global` for user scope. Use `cc-safety-net rule init --example` to also create an inactive example rulebook. `CC_SAFETY_NET_HOME` overrides the `~/.cc-safety-net` user root.\n\nLegacy inline `.safety-net.json` and `~/.cc-safety-net/config.json` files are not loaded at runtime. Convert them with `cc-safety-net rule migrate`.\n\n## rule.json Schema\n\n```json\n{\n  \"version\": 1,\n  \"rules\": [\"project-rules\", \"owner/repo#main/team-rules\"],\n  \"overrides\": {\n    \"project-rules/block-docker-system-prune\": {\n      \"reason\": \"Use targeted Docker cleanup commands.\"\n    },\n    \"team-rules/block-npm-global\": \"off\"\n  },\n  \"transparent_wrappers\": [\"rtk\"]\n}\n```\n\n- `version`: Required. Must be `1`.\n- `$schema`: Optional. `cc-safety-net rule verify` inserts it into a valid `rule.json` that lacks it.\n- `rules`: Optional array of rulebook source strings. Missing `rules` is treated as `[]`.\n- `overrides`: Optional object keyed by `<rulebook-name>/<rule-name>`.\n- `overrides` values are either `\"off\"` to disable a rule or an object with a required `reason` (replacement block reason) and an optional `intent` (one of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain`).\n- A project override cannot target a user-scoped rule: only that override is ignored, the user rule keeps its configured state, and `rule sync`/`rule verify` report the diagnostic as a failure.\n- `transparent_wrappers`: Optional array of command names that transparently execute a visible child command.\n- Transparent wrappers have no built-in defaults. Configure only wrappers you intentionally trust, such as `\"rtk\"`.\n- Use `cc-safety-net rule wrapper add rtk` to configure RTK without manually editing `rule.json`.\n\n## Rulebook Sources\n\n- Local sources are bare rulebook names such as `project-rules`; the rulebook file is `.cc-safety-net/rules/project-rules/rulebook.json`.\n- GitHub sources use `owner/repo#ref/<rulebook-name>`.\n- GitHub refs must be one path segment, such as a tag, SHA, or branch name without `/`.\n- The GitHub source name, the repository directory name, and the rulebook `name` must match exactly.\n- Rulebook source strings must be unique in a config.\n\n## rulebook.json Schema\n\n```json\n{\n  \"rulebook_version\": 1,\n  \"name\": \"project-rules\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Project-specific CC Safety Net rules.\",\n  \"author\": \"project\",\n  \"allowed_commands\": [\"docker\"],\n  \"rules\": [\n    {\n      \"name\": \"block-docker-system-prune\",\n      \"command\": \"docker\",\n      \"subcommand\": \"system\",\n      \"block_args\": [\"prune\"],\n      \"reason\": \"Use targeted cleanup instead.\"\n    }\n  ],\n  \"tests\": [\n    {\n      \"command\": \"docker system prune\",\n      \"expect\": \"blocked\",\n      \"rule\": \"block-docker-system-prune\"\n    },\n    {\n      \"command\": \"docker ps\",\n      \"expect\": \"allowed\"\n    }\n  ]\n}\n```\n\n### Rulebook Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `rulebook_version` | Yes | Must be `1` |\n| `name` | Yes | `^[a-zA-Z][a-zA-Z0-9_-]{0,63}$` |\n| `version` | Yes | Non-empty string |\n| `description` | No | Free text; not type-checked at runtime |\n| `author` | No | Free text; not type-checked at runtime |\n| `allowed_commands` | Yes | Unique command names matching `^[a-zA-Z][a-zA-Z0-9_-]*$` |\n| `rules` | Yes | Array of rule objects |\n| `tests` | No | Array of fixtures |\n\n### Rule Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `name` | Yes | Unique within the rulebook (case-insensitive); same pattern as rulebook `name` |\n| `command` | Yes | Must be listed in `allowed_commands`; basename only, not path |\n| `subcommand` | No | Same pattern as `command`; omit to match any subcommand |\n| `intent` | No | One of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain` |\n| `block_args` | Yes | Non-empty array of non-empty strings |\n| `reason` | Yes | Non-empty string, max 256 chars |\n\n### Test Fixture Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `command` | Yes | Non-empty shell command string |\n| `expect` | Yes | `\"blocked\"` or `\"allowed\"` |\n| `rule` | Required for blocked fixtures | Rule name expected to block the command |\n\nFixtures are optional documentation of intended behavior. Fixtures are shape-validated only; CC Safety Net does not execute them.\n\n## Matching Behavior\n\n- **Command**: Normalized to lowercase basename with any trailing `.exe` removed (`/usr/bin/git` → `git`).\n- **Subcommand**: The first command token after recognized Git and Docker global options and their values; `--` ends option parsing. An unrecognized option without `=` may consume the following token as its value.\n- **Arguments**: Each `block_args` value is compared literally against every command token, including expanded short options. The command is blocked if **any** item matches.\n- **Short options**: Expanded (`-Ap` matches `-A`).\n- **Long options**: Exact match (`--all-files` does not match `--all`).\n- **Execution order**: Built-in rules first, then custom rulebooks. Custom rules only add restrictions.\n- **Transparent wrappers**: A configured wrapper such as `rtk` lets `rtk git commit` be analyzed as `git commit` only when `git` is protected by built-in analyzers or active custom rules. `rtk -- git commit` is also supported.\n\n## Workflow\n\n1. Run `cc-safety-net rule init` or create `rule.json` manually.\n2. Optionally run `cc-safety-net rule init --example` to create an inactive example rulebook.\n3. Use `cc-safety-net rule wrapper add rtk` for trusted transparent wrappers.\n4. Run `cc-safety-net rule add <source>` after creating or choosing a rulebook source; it adds the source and syncs it.\n5. Run `cc-safety-net rule sync` after manual `rule.json` changes or local rulebook edits.\n6. Run `cc-safety-net rule verify` to validate config, lock/cache state, local rulebooks, and shareable GitHub-source rulebook directories in the current repository (it does not fetch remote content).\n7. Run `cc-safety-net rule list` to inspect active rulebooks and transparent wrappers.\n\nAn edited or invalid local rulebook keeps its last synced, digest-verified cached version enforced until `cc-safety-net rule sync` validates the edit. A missing lock entry or cache, a cache digest mismatch, or an invalid cached rulebook makes that source inactive; a missing lockfile or an unreadable or invalid `rule.json` makes every source in its scope inactive. Inactive sources stop applying their rules while other custom rules and all built-in protections stay active. Repair the reported condition, then run `cc-safety-net rule sync`. Run `cc-safety-net status` to see degraded sources.\n";function Re(n,e){if(!n.ok){jv(n);return}Dv(n),console.log(e),console.log("Rule config synced."),console.log(""),zv(n.entries)}function zv(n){if(n.length===0){console.log("Active rulebooks: (none)");return}console.log(`Active rulebooks (${n.length}):`);for(let e of n)console.log(`  - ${e.name} ${e.version} (${Sv(e.ruleCount??0)})`),console.log(`    Source: ${Qt(e)}`)}function Sv(n){return`${n} ${n===1?"rule":"rules"}`}function vd(n,e){Un("Active sources",n.rulebooks,(t)=>[`[${t.source}] ${t.name} ${t.version}`,`  Source: ${e[t.source].get(t.spec)??t.spec}`]),Un("Active rules",n.rules,(t)=>[`[${Zv(n,t.name)}] ${t.name}`,`  Command: ${t.subcommand?`${t.command} ${t.subcommand}`:t.command}`,`  Block args: ${t.block_args.join(", ")}`,`  Reason: ${t.reason}`]),Un("Disabled rules",fd(n,"off"),(t)=>[t.key]),Un("Reason overrides",fd(n,"reason"),(t)=>[t.key,`  Reason: ${t.value.reason}`]),Un("Transparent wrappers",n.transparent_wrappers,(t)=>[t]),Un("Issues",n.errors,(t)=>[t]),Un("Warnings",n.warnings,(t)=>[t])}function Un(n,e,t){if(e.length===0){console.log(`${n}: (none)`);return}console.log(`${n} (${e.length}):`);for(let i of e){let[r,...s]=t(i);console.log(`  - ${r}`);for(let a of s)console.log(`    ${a}`)}}function Zv(n,e){return n.rulebooks.find((t)=>t.rules.includes(e))?.source??"project"}function fd(n,e){return Object.entries({...n.userConfig?.overrides,...n.projectConfig?.overrides}).filter((t)=>{if(e==="off")return t[1]==="off";return t[1]!=="off"}).map(([t,i])=>({key:t,value:i}))}function jv(n){for(let e of n.errors)console.error(e)}function Dv(n){if(!n.warnings||n.warnings.length===0)return;for(let e of n.warnings)console.warn(e)}import{dirname as yd,join as wt}from"node:path";var Uv=".safety-net.json",Iv="~/.cc-safety-net/config.json",Tv=u.object({migrated_from:u.string(),rules:u.array(u.custom())}),Pv=u.object({migrated_from:u.string()});async function _d(n){return[await gd({legacyPath:hd({cwd:n.cwd}),configPath:W(n.cwd),defaultRulebookName:"project-rules",migratedFrom:Uv,cleanup:n.cleanup,syncOptions:{cwd:n.cwd}}),await gd({legacyPath:le(),configPath:Y(),defaultRulebookName:"user-rules",migratedFrom:Iv,cleanup:n.cleanup,syncOptions:{cwd:n.cwd,global:!0}})].every((t)=>t)?0:1}async function gd(n){let e=M(n.syncOptions),t=L(e.filesystemScope,n.legacyPath),i=x(t);if(i===null)return console.log(`No legacy config found at ${n.legacyPath}`),!0;let r=Ev(i);if(!r.ok){for(let y of r.errors)console.error(y);return!1}let s=X(e.configTarget);if(s.errors.length>0){for(let y of s.errors)console.error(y);return!1}let a=s.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},o=Ov(yd(n.configPath),a.rules,n.defaultRulebookName,n.migratedFrom,e.filesystemScope),d=wt(yd(n.configPath),o,"rulebook.json"),c=L(e.filesystemScope,d),l=[$r(e.configTarget),$r(c),$r(e.lockTarget)],p=await Rv(n,e.configTarget,c,o,r.config.rules,a.rules.includes(o)?a.rules:[...a.rules,o],a.overrides??{},a.transparent_wrappers??[]);if(!p.ok){Av(l);for(let y of p.errors)console.error(y);return!1}if(!n.cleanup)return console.log(`Migrated legacy config at ${n.legacyPath}. Legacy file is no longer used.`),!0;if(!Fv(e.configTarget,c,o,n.migratedFrom,r.config.rules))return console.error(`Migration cleanup verification failed for ${n.legacyPath}`),!1;return ue(t),console.log(`Deleted legacy config at ${n.legacyPath}`),!0}async function Rv(n,e,t,i,r,s,a,o){try{return K(e,{version:1,rules:s,overrides:a,transparent_wrappers:o}),K(t,Cv(i,n.migratedFrom,r)),await On(n.syncOptions)}catch(d){return{ok:!1,errors:[d instanceof Error?d.message:String(d)]}}}function Ev(n){try{return Ft(JSON.parse(n))}catch{return{ok:!1,errors:["Invalid JSON"]}}}function Ov(n,e,t,i,r){let s=e.find((a)=>qv(L(r,wt(n,a,"rulebook.json")))===i);if(s)return s;if(x(L(r,wt(n,t,"rulebook.json")))===null)return t;for(let a=2;;a++){let o=`${t}-${a}`;if(x(L(r,wt(n,o,"rulebook.json")))===null)return o}}function Cv(n,e,t){return{rulebook_version:1,name:n,version:"1.0.0",description:"Migrated CC Safety Net rules.",author:"project",migrated_from:e,allowed_commands:[...new Set(t.map((i)=>i.command))],rules:t,tests:t.map((i)=>({command:[i.command,i.subcommand,i.block_args[0]].filter(Boolean).join(" "),expect:"blocked",rule:i.name}))}}function Fv(n,e,t,i,r){if(!X(n).config?.rules.includes(t))return!1;try{let a=x(e);if(a===null)return!1;let o=Tv.parse(JSON.parse(a));return o.migrated_from===i&&JSON.stringify(o.rules)===JSON.stringify(r)}catch{return!1}}function $r(n){return{target:n,content:x(n)}}function Av(n){for(let e of n){if(e.content===null){ue(e.target);continue}$n(e.target,e.content)}}function qv(n){let e=x(n);if(e===null)return null;try{let t=Pv.safeParse(JSON.parse(e));return t.success?t.data.migrated_from:null}catch{return null}}import{mkdir as Jv,readFile as Bv,writeFile as Nv}from"node:fs/promises";import{dirname as Vv,join as Mv}from"node:path";var Xv=86400000,Kv=604800000,Wv=u.object({lastCheck:u.number().optional(),latestVersion:u.string().optional(),notifiedVersion:u.string().optional(),notifiedAt:u.number().optional()});async function $d(n=Date.now()){if(process.env.CC_SAFETY_NET_NO_UPDATE_CHECK)return null;let e=ei();if(!e)return null;let t=Mv(e,".cc-safety-net","update-check.json"),i=await Yv(t,n);if(!i.lastCheck||n-i.lastCheck>Xv){let a=await Wn();if(i.lastCheck=n,a.latestVersion)i.latestVersion=a.latestVersion;if(!await bd(t,i))return null;if(a.error)return null}let r=i.latestVersion,s=S();if(!r||!_i(r,s))return null;if(i.notifiedVersion===r&&i.notifiedAt!==void 0&&n-i.notifiedAt<Kv)return null;if(i.notifiedVersion=r,i.notifiedAt=n,!await bd(t,i))return null;return`UPDATE_AVAILABLE: cc-safety-net v${r} is available (running v${s}). Ask the user once whether to run \`npx -y cc-safety-net@latest update\`; continue the current task either way and do not raise this again.`}async function Yv(n,e){let t=await Bv(n,"utf8").then((r)=>Wv.safeParse(JSON.parse(r))).catch(()=>{return});if(!t?.success)return{};let i=(r)=>r!==void 0&&Number.isFinite(r)&&r<=e?r:void 0;return{lastCheck:i(t.data.lastCheck),latestVersion:t.data.latestVersion,notifiedVersion:t.data.notifiedVersion,notifiedAt:i(t.data.notifiedAt)}}async function bd(n,e){return Jv(Vv(n),{recursive:!0,mode:448}).then(()=>Nv(n,JSON.stringify(e),{mode:384})).then(()=>!0).catch(()=>!1)}import{dirname as Gv,join as Qv,resolve as xr}from"node:path";var Ld="CC Safety Net Config",Hv="═".repeat(Ld.length),n1="https://raw.githubusercontent.com/kenryu42/cc-safety-net/main/assets/cc-safety-net.schema.json",e1=new Set(["rule.json","rule.lock","cache"]),t1=u.object({$schema:u.unknown().optional()}).loose();function kd(n={}){try{return i1(n)}catch(e){if(e instanceof E)return console.error(e.message),1;throw e}}function i1(n){let e=n.cwd??process.cwd(),t=n.userConfigPath??Y(),i=n.projectConfigPath??W(e),r=n.legacyUserConfigPath??le(),s=n.legacyProjectConfigPath??Wr(e),a=xr(e,Gt),o=Gv(t),d=G({cwd:e,userConfigPath:t,projectConfigPath:i}),c=G({cwd:e}),l=L(d.userScope,t),p=L(d.projectScope,i),y=n.legacyUserConfigPath?ae(n.legacyUserConfigPath,"user policy"):L(c.userScope,r),m=n.legacyProjectConfigPath?ae(n.legacyProjectConfigPath,"project policy"):L(c.projectScope,s),f=!1,v=!1,_=[],$=[],b=r1(L(c.projectScope,a));if(a1(),x(l)!==null){let h=sn(l);if(h.errors.push(...an(t,Cn({userConfigDir:o}),{userConfigDir:o},d.userScope)),_.push({scope:"User",path:t,result:h,schema:"rules",sourceDisplayMap:xn(t,d.userScope),target:l}),h.errors.length>0)f=!0}if(x(y)!==null)if(v=!0,x(l)!==null)$.push(zt("user","cleanup"));else{let h=At(y);if(_.push({scope:"User",path:r,result:h,schema:"legacy",sourceDisplayMap:new Map,inactive:!0,target:y}),$.push(zt("user",h.errors.length>0?"fix-or-delete":"migrate")),h.errors.length>0)f=!0}if(x(p)!==null){let h=sn(p);if(h.errors.push(...an(i,Fn(i),{userConfigDir:o},d.projectScope)),_.push({scope:"Project",path:xr(i),result:h,schema:"rules",sourceDisplayMap:xn(i,d.projectScope),target:p}),h.errors.length>0)f=!0;if(x(m)!==null)v=!0,$.push(zt("project","cleanup"))}else if(x(m)!==null){v=!0,f=!0;let h=At(m);_.push({scope:"Project",path:xr(s),result:h,schema:"legacy",sourceDisplayMap:new Map,inactive:!0,target:m}),$.push(zt("project",h.errors.length>0?"fix-or-delete":"migrate"))}if(b?.result.errors.length)f=!0;if(_.length===0&&!b)return console.log(`
No config files found. Using built-in rules only.`),0;for(let h of _)if(h.inactive)u1(h.scope,h.path,h.result,h.sourceDisplayMap);else if(h.result.errors.length>0)d1(h.scope,h.path,h.result.errors);else{if(h.schema==="rules"&&p1(h.target))console.log(`
Added $schema to ${h.scope.toLowerCase()} config.`);o1(h.scope,h.path,h.result,h.schema,h.sourceDisplayMap)}for(let h of $)console.error(`
${g.red(h)}`);if(b)if(b.result.errors.length>0)l1(b.path,b.result.errors);else c1(b.path,b.result);if(f)return console.error(`
Config validation failed.`),1;return console.log(v?`
Configs valid with warnings.`:`
All configs valid.`),0}function zt(n,e){let t=`legacy ${n} config`;if(e==="cleanup")return`Warning: Legacy ${n} config is no longer needed. Run \`npx -y cc-safety-net rule migrate --cleanup\` to clean it up safely.`;if(e==="migrate")return`Warning: Legacy ${n} config is ignored by CC Safety Net. Run \`npx -y cc-safety-net rule migrate\`.`;return`Warning: Legacy ${n} config is no longer supported. Fix or delete the ${t}, then run \`npx -y cc-safety-net rule migrate\`.`}function r1(n){if(En(n)===null)return null;let e=s1(n);if(e.ruleNames.size===0&&e.errors.length===0)return null;return{path:n.path,result:e}}function s1(n){let e=[],t=new Set,i=(En(n)??[]).filter((r)=>!e1.has(r.name)).sort((r,s)=>r.name.localeCompare(s.name));if(i.length===0)return{errors:e,ruleNames:t};for(let r of i){if(!de.test(r.name)){e.push(`rulebook directory names must match ${de}: ${r.name}`);continue}if(r.kind!=="directory"){e.push(`${r.name} must be a rulebook directory`);continue}let s=L(n.scope,Qv(n.path,r.name,"rulebook.json")),a=x(s);if(a===null){e.push(`${r.name}/rulebook.json is required`);continue}try{let o;try{o=JSON.parse(a)}catch{e.push(`${r.name}/rulebook.json: invalid JSON`);continue}let d=xd(o);if(d.name!==r.name){e.push(`rulebook name "${d.name}" must match folder "${r.name}"`);continue}t.add(r.name)}catch(o){e.push(o instanceof Error?`${r.name}/rulebook.json: ${o.message}`:`${r.name}/rulebook.json: ${String(o)}`)}}return{errors:e,ruleNames:t}}function a1(){console.log(Ld),console.log(Hv)}function o1(n,e,t,i,r){if(console.log(`
✓ ${n} config: ${e}`),console.log(`  Schema: ${i==="rules"?"rulebook sources":"legacy inline rules"}`),t.ruleNames.size>0){console.log(`  ${i==="rules"?"Sources":"Rules"}:`);let s=1;for(let a of t.ruleNames)console.log(`    ${s}. ${r.get(a)??a}`),s++}else console.log(`  ${i==="rules"?"Sources":"Rules"}: (none)`)}function u1(n,e,t,i){if(console.error(`
✗ Legacy ${n.toLowerCase()} config: ${e}`),console.error("  Schema: legacy inline rules"),console.error("  Status: ignored by CC Safety Net"),t.errors.length>0){console.error("  Errors:");let r=1;for(let s of t.errors)for(let a of s.split("; "))console.error(`    ${r}. ${a}`),r++;return}if(t.ruleNames.size>0){console.error("  Rules:");let r=1;for(let s of t.ruleNames)console.error(`    ${r}. ${i.get(s)??s}`),r++;return}console.error("  Rules: (none)")}function d1(n,e,t){wd(`${n} config`,e,t)}function c1(n,e){console.log(`
✓ GitHub source rules: ${n}`),console.log("  Rulebooks:");let t=1;for(let i of e.ruleNames)console.log(`    ${t}. ${i}`),t++}function l1(n,e){wd("GitHub source rules",n,e)}function wd(n,e,t){console.error(`
✗ ${n}: ${e}`),console.error("  Errors:");let i=1;for(let r of t)for(let s of r.split("; "))console.error(`    ${i}. ${s}`),i++}function p1(n){try{let e=x(n);if(e===null)return!1;let t=t1.parse(JSON.parse(e));if(t.$schema)return!1;return $n(n,JSON.stringify({$schema:n1,...t},null,2)),!0}catch(e){if(e instanceof E)throw e;return!1}}var zd=new Set(["init","add","remove","update","sync","list","wrapper","migrate","doc","verify"]),f1=new Set(["add","remove","list"]);async function Zd(n){try{return await v1(n)}catch(e){if(e instanceof E)return console.error(e.message),1;throw e}}async function v1(n){let e=g1(n),t=e.help?y1(e.positionals):null;if(t)return ct(t),0;if(e.errors.length>0){for(let a of e.errors)console.error(a);return 1}let i=e.positionals[0];if(!i)return ct(Xn,console.error),1;let r=e.positionals[1],s={global:e.global,check:e.check};if(i==="init"){let a=M(s),o=a.configDir;b1(a.configTarget),Sd(L(a.filesystemScope,qe({...s,cacheConfigDir:o})));let d=m1(o,"example-rules","rulebook.json"),c=L(a.filesystemScope,d);if(e.example&&x(c)===null)ni(c,"example-rules");let l=await On(s);return Re(l,"Rule config initialized."),l.ok?0:1}if(i==="add"){if(!r)return console.error("rule add requires a source"),1;let a=await Kt(r,s);return Re(a,`Added rulebook source: ${r}`),a.ok?0:1}if(i==="remove"){if(!r)return console.error("rule remove requires a source"),1;let a=await Yt(r,{...s,deleteSource:e.deleteSource});return Re(a,`Removed rulebook source: ${r}`),a.ok?0:1}if(i==="update"||i==="sync"){let a=await On({...s,only:i==="update"?r:void 0});return Re(a,e.check?"Rule config checked.":"Rule config synced."),a.ok?0:1}if(i==="list"){let a=vn(),o=G({});return vd(a,{user:xn(a.userConfigPath,o.userScope),project:xn(a.projectConfigPath,o.projectScope)}),a.errors.length>0?1:0}if(i==="wrapper")return $1(e);if(i==="migrate")return _d({cleanup:e.cleanup,cwd:process.cwd()});if(i==="doc"){console.log(md);let a=await $d();if(a)console.error(a);return 0}if(i==="verify")return kd();return 1}function y1(n){if(n.length===0)return Xn;let e=Xn.subcommands.filter((i)=>i.usage.split(" ")[0]===n[0]);if(e.length===0)return null;if(n.length===1&&e.length>1)return{name:`rule ${n[0]}`,description:`Subcommands of rule ${n[0]}`,usage:`rule ${n[0]} <subcommand>`,subcommands:e,options:[]};let t=n.length===1?e[0]:e.find((i)=>i.usage.split(" ")[1]===n[1]);if(!t)return null;return{name:`rule ${n[0]}`,description:t.description,usage:`rule ${t.usage}`,options:[]}}function g1(n){let e=Z({label:"rule",booleans:{global:["-g","--global"],check:["--check"],cleanup:["--cleanup"],deleteSource:["--delete-source"],example:["--example"]},positionals:"list"},n),t={...e.flags,help:e.help,positionals:e.positionals,errors:e.errors};return h1(t),t}function h1(n){let[e]=n.positionals;if(e&&!zd.has(e))n.errors.push(`Unknown rule subcommand: ${e}`);if(n.deleteSource&&e!=="remove")if(e&&zd.has(e))n.errors.push(`Unknown option for rule ${e}: --delete-source`);else n.errors.push("--delete-source is only valid with 'rule remove'");if(n.cleanup&&e!=="migrate")n.errors.push(St(e,"--cleanup"));if(n.example&&e!=="init")n.errors.push(St(e,"--example"));if(e==="migrate"){if(n.global)n.errors.push(St(e,"--global"));if(n.check)n.errors.push(St(e,"--check"));if(n.positionals.length>1)n.errors.push(`Unexpected rule migrate argument: ${n.positionals[1]}`)}else if(e==="wrapper")_1(n);else if(n.positionals.length>2)n.errors.push(`Unexpected rule argument: ${n.positionals[2]}`);if(e==="list"&&n.global)n.errors.push("Unknown option for rule list: --global")}function St(n,e){return n?`Unknown option for rule ${n}: ${e}`:`Unknown option for rule: ${e}`}function _1(n){let e=n.positionals[1],t=n.positionals[2];if(!e){n.errors.push("rule wrapper requires add, remove, or list");return}if(!f1.has(e)){n.errors.push(`Unknown rule wrapper action: ${e}`);return}if(e==="list"){if(t)n.errors.push(`Unexpected rule wrapper argument: ${t}`);return}if(!t){n.errors.push(`rule wrapper ${e} requires a command`);return}if(n.positionals.length>3)n.errors.push(`Unexpected rule wrapper argument: ${n.positionals[3]}`)}function b1(n){if(x(n)===null){Ht(n);return}let e=X(n);if(!e.config)return;K(n,{version:1,rules:e.config.rules,overrides:e.config.overrides??{},transparent_wrappers:e.config.transparent_wrappers??[]})}async function $1(n){let e=n.positionals[1],t=n.positionals[2],i=M({global:n.global}).configTarget;if(e==="list"){let o=X(i);if(o.errors.length>0){for(let d of o.errors)console.error(d);return 1}return x1(o.config?.transparent_wrappers??[]),0}if(!t||!ti.test(t))return console.error("transparent wrapper must match command pattern"),1;if(ii(t))return console.error(`reserved command "${t}" cannot be a wrapper`),1;let r=X(i);if(r.errors.length>0){for(let o of r.errors)console.error(o);return 1}let s=r.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},a=e==="add"?[...new Set([...s.transparent_wrappers??[],t])]:(s.transparent_wrappers??[]).filter((o)=>o!==t);return K(i,{version:1,rules:s.rules,overrides:s.overrides??{},transparent_wrappers:a}),console.log(e==="add"?`Added transparent wrapper: ${t}`:`Removed transparent wrapper: ${t}`),0}function x1(n){if(n.length===0){console.log("Transparent wrappers: (none)");return}console.log(`Transparent wrappers (${n.length}):`);for(let e of n)console.log(`  - ${e}`)}import{homedir as jd}from"node:os";import{existsSync as L1,readFileSync as k1}from"node:fs";import{homedir as w1}from"node:os";import{join as z1}from"node:path";async function S1(n){if(n.isTTY)return null;return(await ci(n).catch(()=>null))?.trim()||null}function Z1(){if(process.env.CLAUDE_SETTINGS_PATH)return process.env.CLAUDE_SETTINGS_PATH;return z1(w1(),".claude","settings.json")}var j1=u.object({enabledPlugins:u.record(u.string(),u.boolean()).optional()});function Lr(){let n=Z1();if(!L1(n))return!1;try{let e=k1(n,"utf-8"),t=j1.parse(JSON.parse(e));if(!t.enabledPlugins)return!1;let i="cc-safety-net@cc-marketplace";if(!(i in t.enabledPlugins))return!1;return t.enabledPlugins[i]===!0}catch(e){if(fe(k.debug))console.error(`CC Safety Net debug: failed to read Claude settings: ${n}: ${e instanceof Error?e.message:String(e)}`);return!1}}async function kr(n=process.stdin){let e=Lr(),t;if(!e)t="\uD83D\uDEE1️ CC Safety Net ❌";else{let r=F({cwd:process.cwd()}),s=r.policy,a=on(s),o=Object.values(kn(s,a.capabilities)).some((c)=>c.changesInherited);t=`\uD83D\uDEE1️ CC Safety Net ${{standard:"✅",strict:"\uD83D\uDD12",paranoid:"\uD83D\uDC41️",custom:"\uD83D\uDD27"}[o?"custom":a.effectiveLevel]}${a.worktreeMode?"\uD83C\uDF33":""}${r.state==="degraded"?"⚠️":""}`}let i=await S1(n);if(i&&!i.startsWith("{"))console.log(`${i} | ${t}`);else console.log(t)}function Dd(){let n=F({cwd:process.cwd()}),e=n.policy,t=on(e),i=!!process.env.NO_COLOR||!process.stdout.isTTY,r=Math.min(process.stdout.columns||80,100),s=i?"ok":"✔",a=i?"OFF":"✘",o=(m,f)=>{let v=`  ${m.padEnd(13)}${f}`;return(v.length>r?`${v.slice(0,r-1)}…`:v).replaceAll(a,g.red(a))},d=Object.values(kn(e,t.capabilities)).some((m)=>m.changesInherited),c=ve(),l={ready:g.green,degraded:g.yellow}[n.state],p=[...Lr()?[]:["plugin cc-safety-net@cc-marketplace is disabled in Claude Code; nothing is enforced in Claude Code until it is re-enabled. Other integrations are not affected."],...n.diagnostics],y=i?"-":"·";console.log([`${i?"":"\uD83D\uDEE1️  "}CC Safety Net — ${l(n.state)}`,"",o("Protection",`destructive ${e.destructiveCommandProtectionEnabled?s:a}   secrets ${e.secretProtection.enabled?s:a}`),o("Level",d?`${t.effectiveLevel} (customised)`:t.effectiveLevel),o("Rules",e.rules.length===0?"none active":`${e.rules.length} active`),o("Policy",c.startsWith(jd())?`~${c.slice(jd().length)}`:c),...t.worktreeMode?[o("Worktree","relaxations active")]:[],"",...p.length===0?["  Everything configured is active."]:["  Not active",...p.flatMap((m)=>dt(m,"      ",r-6).map((f,v)=>v===0?`    ${y} ${f}`:f)),"","  Full report: cc-safety-net doctor"]].join(`
`))}import{spawn as Wd}from"node:child_process";import{randomBytes as q1}from"node:crypto";import{createServer as J1}from"node:http";import{homedir as D1}from"node:os";var Zt=500,U1=u.object({ts:u.string(),command:u.string()});function I1(n){let e=n.filter((r)=>r.decision!=="allow"),t=n.filter((r)=>r.decision==="allow"),i=Math.min(e.length,Math.max(Zt-t.length,Math.ceil(Zt/2)));return[...e.slice(0,i),...t.slice(0,Zt-i)]}function Ud(n,e=un()){if(e)Ln(e);let t=(v)=>new Date(v.getFullYear(),v.getMonth(),v.getDate()).getTime(),i=t(new Date),r=new Date(i);r.setDate(r.getDate()-(n-1));let s=r.getTime(),a=[],o={count:0};for(let v of e?fn(e,o):[])for(let _ of se(v,o)){if(!U1.safeParse(_).success)continue;let $=new Date(_.ts).getTime();if(!Number.isFinite($))continue;if($>=s)a.push(_)}a.sort((v,_)=>new Date(_.ts).getTime()-new Date(v.ts).getTime());let d=Array.from({length:n},()=>0),c=Array.from({length:n},()=>0),l={},p={},y={},m=0,f=0;for(let v of a){let _=v.agent||"unknown";l[_]=(l[_]??0)+1;let $=Math.round((i-t(new Date(v.ts)))/86400000),b=n-1-$,h=$>=0&&$<n;if(h)c[b]=(c[b]??0)+1;if(v.decision!=="allow"){if(m++,v.ruleId)p[v.ruleId]=(p[v.ruleId]??0)+1;let U=Tn(v.segment||v.command);if(U)y[U]=(y[U]??0)+1;if(v.failureStage)f++;if(h)d[b]=(d[b]??0)+1}}return{days:n,logsDir:e,homeDir:D1(),totalInWindow:a.length,truncated:a.length>Zt,unreadable:o.count,counts:{blocked:m,allowed:a.length-m,agents:l,blockedByDay:d,analyzedByDay:c,rules:p,commands:y,errors:f},entries:I1(a).sort((v,_)=>new Date(_.ts).getTime()-new Date(v.ts).getTime())}}import{spawn as T1}from"node:child_process";import{existsSync as Id,statSync as P1}from"node:fs";import{delimiter as R1,join as E1}from"node:path";var O1=120000,jt="Choose the project folder",C1=`try
  return POSIX path of (choose folder with prompt "${jt}")
on error number -128
  return ""
end try`,F1=`Add-Type -AssemblyName System.Windows.Forms
$dialog = New-Object System.Windows.Forms.FolderBrowserDialog
$dialog.Description = '${jt}'
if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.Write($dialog.SelectedPath) }`,Td=[{binary:"zenity",args:["--file-selection","--directory",`--title=${jt}`]},{binary:"kdialog",args:["--getexistingdirectory",".","--title",jt]}],Pd=(n,e)=>(e.PATH??"").split(R1).some((t)=>t.length>0&&Id(E1(t,n)));function Rd(n,e){if(n==="darwin"||n==="win32")return!0;if(n!=="linux")return!1;if(!e.DISPLAY&&!e.WAYLAND_DISPLAY)return!1;return Td.some((t)=>Pd(t.binary,e))}function A1(n,e){if(n==="darwin")return{cmd:"osascript",args:["-e",C1]};if(n==="win32")return{cmd:"powershell.exe",args:["-NoProfile","-STA","-Command",F1]};let t=Td.find((i)=>Pd(i.binary,e));return t?{cmd:t.binary,args:t.args}:null}function Ed(n=process.platform,e=process.env){let t=A1(n,e);if(!t)return Promise.resolve({error:"No folder dialog is available on this system"});return new Promise((i)=>{let r=T1(t.cmd,t.args,{env:e,stdio:["ignore","pipe","pipe"]}),s="",a=!1,o=(c)=>{if(a)return;a=!0,clearTimeout(d),i(c)},d=setTimeout(()=>{r.kill(),o({error:"The folder dialog timed out"})},O1);r.stdout.on("data",(c)=>{s+=c.toString()}),r.on("error",()=>o({error:`Could not open the folder dialog (${t.cmd})`})),r.on("close",()=>{let c=s.trim().replace(/\/+$/,"");if(!c)return o({cancelled:!0});if(!Id(c)||!P1(c).isDirectory())return o({error:"That selection is not a folder on disk"});o({path:c})})})}var Od=`<!doctype html>
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
var __defProp = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

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
// node_modules/zod/v4/classic/external.js
var exports_external = {};
__export(exports_external, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid2,
  util: () => exports_util,
  url: () => url,
  uppercase: () => _uppercase,
  unknown: () => unknown,
  union: () => union,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  trim: () => _trim,
  treeifyError: () => treeifyError,
  transform: () => transform,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  toJSONSchema: () => toJSONSchema,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  setErrorMap: () => setErrorMap,
  set: () => set,
  safeParseAsync: () => safeParseAsync2,
  safeParse: () => safeParse2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeEncode: () => safeEncode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeDecode: () => safeDecode2,
  registry: () => registry,
  regexes: () => exports_regexes,
  regex: () => _regex,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  property: () => _property,
  promise: () => promise,
  prettifyError: () => prettifyError,
  preprocess: () => preprocess,
  prefault: () => prefault,
  positive: () => _positive,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  parseAsync: () => parseAsync2,
  parse: () => parse3,
  overwrite: () => _overwrite,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonoptional: () => nonoptional,
  nonnegative: () => _nonnegative,
  never: () => never,
  negative: () => _negative,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  meta: () => meta2,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  map: () => map,
  mac: () => mac2,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  locales: () => exports_locales,
  literal: () => literal,
  length: () => _length,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json,
  iso: () => exports_iso,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  includes: () => _includes,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  gte: () => _gte,
  gt: () => _gt,
  globalRegistry: () => globalRegistry,
  getErrorMap: () => getErrorMap,
  function: () => _function,
  fromJSONSchema: () => fromJSONSchema,
  formatError: () => formatError,
  float64: () => float64,
  float32: () => float32,
  flattenError: () => flattenError,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  endsWith: () => _endsWith,
  encodeAsync: () => encodeAsync2,
  encode: () => encode2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  decodeAsync: () => decodeAsync2,
  decode: () => decode2,
  date: () => date3,
  custom: () => custom,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  core: () => exports_core2,
  config: () => config,
  coerce: () => exports_coerce,
  codec: () => codec,
  clone: () => clone,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean2,
  bigint: () => bigint2,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodRealError: () => ZodRealError,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIssueCode: () => ZodIssueCode,
  ZodIntersection: () => ZodIntersection,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodError: () => ZodError,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  $output: () => $output,
  $input: () => $input,
  $brand: () => $brand
});

// node_modules/zod/v4/core/index.js
var exports_core2 = {};
__export(exports_core2, {
  version: () => version,
  util: () => exports_util,
  treeifyError: () => treeifyError,
  toJSONSchema: () => toJSONSchema,
  toDotPath: () => toDotPath,
  safeParseAsync: () => safeParseAsync,
  safeParse: () => safeParse,
  safeEncodeAsync: () => safeEncodeAsync,
  safeEncode: () => safeEncode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeDecode: () => safeDecode,
  registry: () => registry,
  regexes: () => exports_regexes,
  process: () => process,
  prettifyError: () => prettifyError,
  parseAsync: () => parseAsync,
  parse: () => parse,
  meta: () => meta,
  locales: () => exports_locales,
  isValidJWT: () => isValidJWT,
  isValidBase64URL: () => isValidBase64URL,
  isValidBase64: () => isValidBase64,
  initializeContext: () => initializeContext,
  globalRegistry: () => globalRegistry,
  globalConfig: () => globalConfig,
  formatError: () => formatError,
  flattenError: () => flattenError,
  finalize: () => finalize,
  extractDefs: () => extractDefs,
  encodeAsync: () => encodeAsync,
  encode: () => encode,
  describe: () => describe,
  decodeAsync: () => decodeAsync,
  decode: () => decode,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  config: () => config,
  clone: () => clone,
  _xor: () => _xor,
  _xid: () => _xid,
  _void: () => _void,
  _uuidv7: () => _uuidv7,
  _uuidv6: () => _uuidv6,
  _uuidv4: () => _uuidv4,
  _uuid: () => _uuid,
  _url: () => _url,
  _uppercase: () => _uppercase,
  _unknown: () => _unknown,
  _union: () => _union,
  _undefined: () => _undefined2,
  _ulid: () => _ulid,
  _uint64: () => _uint64,
  _uint32: () => _uint32,
  _tuple: () => _tuple,
  _trim: () => _trim,
  _transform: () => _transform,
  _toUpperCase: () => _toUpperCase,
  _toLowerCase: () => _toLowerCase,
  _templateLiteral: () => _templateLiteral,
  _symbol: () => _symbol,
  _superRefine: () => _superRefine,
  _success: () => _success,
  _stringbool: () => _stringbool,
  _stringFormat: () => _stringFormat,
  _string: () => _string,
  _startsWith: () => _startsWith,
  _slugify: () => _slugify,
  _size: () => _size,
  _set: () => _set,
  _safeParseAsync: () => _safeParseAsync,
  _safeParse: () => _safeParse,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeEncode: () => _safeEncode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeDecode: () => _safeDecode,
  _regex: () => _regex,
  _refine: () => _refine,
  _record: () => _record,
  _readonly: () => _readonly,
  _property: () => _property,
  _promise: () => _promise,
  _positive: () => _positive,
  _pipe: () => _pipe,
  _parseAsync: () => _parseAsync,
  _parse: () => _parse,
  _overwrite: () => _overwrite,
  _optional: () => _optional,
  _number: () => _number,
  _nullable: () => _nullable,
  _null: () => _null2,
  _normalize: () => _normalize,
  _nonpositive: () => _nonpositive,
  _nonoptional: () => _nonoptional,
  _nonnegative: () => _nonnegative,
  _never: () => _never,
  _negative: () => _negative,
  _nativeEnum: () => _nativeEnum,
  _nanoid: () => _nanoid,
  _nan: () => _nan,
  _multipleOf: () => _multipleOf,
  _minSize: () => _minSize,
  _minLength: () => _minLength,
  _min: () => _gte,
  _mime: () => _mime,
  _maxSize: () => _maxSize,
  _maxLength: () => _maxLength,
  _max: () => _lte,
  _map: () => _map,
  _mac: () => _mac,
  _lte: () => _lte,
  _lt: () => _lt,
  _lowercase: () => _lowercase,
  _literal: () => _literal,
  _length: () => _length,
  _lazy: () => _lazy,
  _ksuid: () => _ksuid,
  _jwt: () => _jwt,
  _isoTime: () => _isoTime,
  _isoDuration: () => _isoDuration,
  _isoDateTime: () => _isoDateTime,
  _isoDate: () => _isoDate,
  _ipv6: () => _ipv6,
  _ipv4: () => _ipv4,
  _intersection: () => _intersection,
  _int64: () => _int64,
  _int32: () => _int32,
  _int: () => _int,
  _includes: () => _includes,
  _guid: () => _guid,
  _gte: () => _gte,
  _gt: () => _gt,
  _float64: () => _float64,
  _float32: () => _float32,
  _file: () => _file,
  _enum: () => _enum,
  _endsWith: () => _endsWith,
  _encodeAsync: () => _encodeAsync,
  _encode: () => _encode,
  _emoji: () => _emoji2,
  _email: () => _email,
  _e164: () => _e164,
  _discriminatedUnion: () => _discriminatedUnion,
  _default: () => _default,
  _decodeAsync: () => _decodeAsync,
  _decode: () => _decode,
  _date: () => _date,
  _custom: () => _custom,
  _cuid2: () => _cuid2,
  _cuid: () => _cuid,
  _coercedString: () => _coercedString,
  _coercedNumber: () => _coercedNumber,
  _coercedDate: () => _coercedDate,
  _coercedBoolean: () => _coercedBoolean,
  _coercedBigint: () => _coercedBigint,
  _cidrv6: () => _cidrv6,
  _cidrv4: () => _cidrv4,
  _check: () => _check,
  _catch: () => _catch,
  _boolean: () => _boolean,
  _bigint: () => _bigint,
  _base64url: () => _base64url,
  _base64: () => _base64,
  _array: () => _array,
  _any: () => _any,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  JSONSchema: () => exports_json_schema,
  Doc: () => Doc,
  $output: () => $output,
  $input: () => $input,
  $constructor: () => $constructor,
  $brand: () => $brand,
  $ZodXor: () => $ZodXor,
  $ZodXID: () => $ZodXID,
  $ZodVoid: () => $ZodVoid,
  $ZodUnknown: () => $ZodUnknown,
  $ZodUnion: () => $ZodUnion,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUUID: () => $ZodUUID,
  $ZodURL: () => $ZodURL,
  $ZodULID: () => $ZodULID,
  $ZodType: () => $ZodType,
  $ZodTuple: () => $ZodTuple,
  $ZodTransform: () => $ZodTransform,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodSymbol: () => $ZodSymbol,
  $ZodSuccess: () => $ZodSuccess,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodString: () => $ZodString,
  $ZodSet: () => $ZodSet,
  $ZodRegistry: () => $ZodRegistry,
  $ZodRecord: () => $ZodRecord,
  $ZodRealError: () => $ZodRealError,
  $ZodReadonly: () => $ZodReadonly,
  $ZodPromise: () => $ZodPromise,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPipe: () => $ZodPipe,
  $ZodOptional: () => $ZodOptional,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodObject: () => $ZodObject,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodNumber: () => $ZodNumber,
  $ZodNullable: () => $ZodNullable,
  $ZodNull: () => $ZodNull,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNever: () => $ZodNever,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNaN: () => $ZodNaN,
  $ZodMap: () => $ZodMap,
  $ZodMAC: () => $ZodMAC,
  $ZodLiteral: () => $ZodLiteral,
  $ZodLazy: () => $ZodLazy,
  $ZodKSUID: () => $ZodKSUID,
  $ZodJWT: () => $ZodJWT,
  $ZodIntersection: () => $ZodIntersection,
  $ZodISOTime: () => $ZodISOTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODate: () => $ZodISODate,
  $ZodIPv6: () => $ZodIPv6,
  $ZodIPv4: () => $ZodIPv4,
  $ZodGUID: () => $ZodGUID,
  $ZodFunction: () => $ZodFunction,
  $ZodFile: () => $ZodFile,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodError: () => $ZodError,
  $ZodEnum: () => $ZodEnum,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEmail: () => $ZodEmail,
  $ZodE164: () => $ZodE164,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodDefault: () => $ZodDefault,
  $ZodDate: () => $ZodDate,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodCustom: () => $ZodCustom,
  $ZodCodec: () => $ZodCodec,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheck: () => $ZodCheck,
  $ZodCatch: () => $ZodCatch,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCUID: () => $ZodCUID,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodBoolean: () => $ZodBoolean,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBase64: () => $ZodBase64,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodArray: () => $ZodArray,
  $ZodAny: () => $ZodAny
});

// node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
function $constructor(name, initializer, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: new Set
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0;i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a;
    const inst = params?.Parent ? new Definition : this;
    init(inst, def);
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = Symbol("zod_brand");

class $ZodAsyncError extends Error {
  constructor() {
    super(\`Encountered Promise during synchronous parse. Use .parseAsync() instead.\`);
  }
}

class $ZodEncodeError extends Error {
  constructor(name) {
    super(\`Encountered unidirectional transform during encode: \${name}\`);
    this.name = "ZodEncodeError";
  }
}
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
// node_modules/zod/v4/core/util.js
var exports_util = {};
__export(exports_util, {
  unwrapMessage: () => unwrapMessage,
  uint8ArrayToHex: () => uint8ArrayToHex,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  stringifyPrimitive: () => stringifyPrimitive,
  slugify: () => slugify,
  shallowClone: () => shallowClone,
  safeExtend: () => safeExtend,
  required: () => required,
  randomString: () => randomString,
  propertyKeyTypes: () => propertyKeyTypes,
  promiseAllObject: () => promiseAllObject,
  primitiveTypes: () => primitiveTypes,
  prefixIssues: () => prefixIssues,
  pick: () => pick,
  partial: () => partial,
  parsedType: () => parsedType,
  optionalKeys: () => optionalKeys,
  omit: () => omit,
  objectClone: () => objectClone,
  numKeys: () => numKeys,
  nullish: () => nullish,
  normalizeParams: () => normalizeParams,
  mergeDefs: () => mergeDefs,
  merge: () => merge,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  joinValues: () => joinValues,
  issue: () => issue,
  isPlainObject: () => isPlainObject,
  isObject: () => isObject,
  hexToUint8Array: () => hexToUint8Array,
  getSizableOrigin: () => getSizableOrigin,
  getParsedType: () => getParsedType,
  getLengthableOrigin: () => getLengthableOrigin,
  getEnumValues: () => getEnumValues,
  getElementAtPath: () => getElementAtPath,
  floatSafeRemainder: () => floatSafeRemainder,
  finalizeIssue: () => finalizeIssue,
  extend: () => extend,
  escapeRegex: () => escapeRegex,
  esc: () => esc,
  defineLazy: () => defineLazy,
  createTransparentProxy: () => createTransparentProxy,
  cloneDef: () => cloneDef,
  clone: () => clone,
  cleanRegex: () => cleanRegex,
  cleanEnum: () => cleanEnum,
  captureStackTrace: () => captureStackTrace,
  cached: () => cached,
  base64urlToUint8Array: () => base64urlToUint8Array,
  base64ToUint8Array: () => base64ToUint8Array,
  assignProp: () => assignProp,
  assertNotEqual: () => assertNotEqual,
  assertNever: () => assertNever,
  assertIs: () => assertIs,
  assertEqual: () => assertEqual,
  assert: () => assert,
  allowsEval: () => allowsEval,
  aborted: () => aborted,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  Class: () => Class,
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array, separator = "|") {
  return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\\d?e-\\d?/.test(stepString)) {
    const match = stepString.match(/\\d?e-(\\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
  let value = undefined;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return;
      }
      if (value === undefined) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0;i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0;i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\\w\\s-]/g, "").replace(/[\\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(\`Unknown data type: \${t}\`);
  }
};
var propertyKeyTypes = new Set(["string", "number", "symbol"]);
var primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both \`message\` and \`error\` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return \`"\${value}"\`;
  return \`\${value}\`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(\`Unrecognized key: "\${key}"\`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(\`Unrecognized key: "\${key}"\`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use \`.safeExtend()\` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: []
  });
  return clone(a, def);
}
function partial(Class, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(\`Unrecognized key: "\${key}"\`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(\`Unrecognized key: "\${key}"\`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a;
    (_a = iss).path ?? (_a.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0;i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0;i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base64.length % 4) % 4);
  return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\\+/g, "-").replace(/\\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0;i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

class Class {
  constructor(..._args) {}
}

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error2) => {
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}
function treeifyError(error, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error2, path = []) => {
    var _a, _b;
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(\`[\${seg}]\`);
    else if (typeof seg === "symbol")
      segs.push(\`[\${JSON.stringify(String(seg))}]\`);
    else if (/[^\\w$]/.test(seg))
      segs.push(\`[\${JSON.stringify(seg)}]\`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error) {
  const lines = [];
  const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(\`✖ \${issue2.message}\`);
    if (issue2.path?.length)
      lines.push(\`  → at \${toDotPath(issue2.path)}\`);
  }
  return lines.join(\`
\`);
}

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var parse = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var encode = /* @__PURE__ */ _encode($ZodRealError);
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var decode = /* @__PURE__ */ _decode($ZodRealError);
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);
// node_modules/zod/v4/core/regexes.js
var exports_regexes = {};
__export(exports_regexes, {
  xid: () => xid,
  uuid7: () => uuid7,
  uuid6: () => uuid6,
  uuid4: () => uuid4,
  uuid: () => uuid,
  uppercase: () => uppercase,
  unicodeEmail: () => unicodeEmail,
  undefined: () => _undefined,
  ulid: () => ulid,
  time: () => time,
  string: () => string,
  sha512_hex: () => sha512_hex,
  sha512_base64url: () => sha512_base64url,
  sha512_base64: () => sha512_base64,
  sha384_hex: () => sha384_hex,
  sha384_base64url: () => sha384_base64url,
  sha384_base64: () => sha384_base64,
  sha256_hex: () => sha256_hex,
  sha256_base64url: () => sha256_base64url,
  sha256_base64: () => sha256_base64,
  sha1_hex: () => sha1_hex,
  sha1_base64url: () => sha1_base64url,
  sha1_base64: () => sha1_base64,
  rfc5322Email: () => rfc5322Email,
  number: () => number,
  null: () => _null,
  nanoid: () => nanoid,
  md5_hex: () => md5_hex,
  md5_base64url: () => md5_base64url,
  md5_base64: () => md5_base64,
  mac: () => mac,
  lowercase: () => lowercase,
  ksuid: () => ksuid,
  ipv6: () => ipv6,
  ipv4: () => ipv4,
  integer: () => integer,
  idnEmail: () => idnEmail,
  html5Email: () => html5Email,
  hostname: () => hostname,
  hex: () => hex,
  guid: () => guid,
  extendedDuration: () => extendedDuration,
  emoji: () => emoji,
  email: () => email,
  e164: () => e164,
  duration: () => duration,
  domain: () => domain,
  datetime: () => datetime,
  date: () => date,
  cuid2: () => cuid2,
  cuid: () => cuid,
  cidrv6: () => cidrv6,
  cidrv4: () => cidrv4,
  browserEmail: () => browserEmail,
  boolean: () => boolean,
  bigint: () => bigint,
  base64url: () => base64url,
  base64: () => base64
});
var cuid = /^[cC][^\\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\\d+W)|(?!.*W)(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+([.,]\\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\\d+Y)|(?:[-+]?\\d+[.,]\\d+Y$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:(?:[-+]?\\d+W)|(?:[-+]?\\d+[.,]\\d+W$))?(?:(?:[-+]?\\d+D)|(?:[-+]?\\d+[.,]\\d+D$))?(?:T(?=[\\d+-])(?:(?:[-+]?\\d+H)|(?:[-+]?\\d+[.,]\\d+H$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:[-+]?\\d+(?:[.,]\\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version) => {
  if (!version)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(\`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-\${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$\`);
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\\s@"]{1,64}@[^\\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = \`^(\\\\p{Extended_Pictographic}|\\\\p{Emoji_Component})+$\`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(\`^(?:[0-9A-F]{2}\${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}\${escapedDelim}){5}[0-9a-f]{2}$\`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$/;
var e164 = /^\\+[1-9]\\d{6,14}$/;
var dateSource = \`(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))\`;
var date = /* @__PURE__ */ new RegExp(\`^\${dateSource}$\`);
function timeSource(args) {
  const hhmm = \`(?:[01]\\\\d|2[0-3]):[0-5]\\\\d\`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? \`\${hhmm}\` : args.precision === 0 ? \`\${hhmm}:[0-5]\\\\d\` : \`\${hhmm}:[0-5]\\\\d\\\\.\\\\d{\${args.precision}}\` : \`\${hhmm}(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?\`;
  return regex;
}
function time(args) {
  return new RegExp(\`^\${timeSource(args)}$\`);
}
function datetime(args) {
  const time2 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(\`([+-](?:[01]\\\\d|2[0-3]):[0-5]\\\\d)\`);
  const timeRegex = \`\${time2}(?:\${opts.join("|")})\`;
  return new RegExp(\`^\${dateSource}T(?:\${timeRegex})$\`);
}
var string = (params) => {
  const regex = params ? \`[\\\\s\\\\S]{\${params?.minimum ?? 0},\${params?.maximum ?? ""}}\` : \`[\\\\s\\\\S]*\`;
  return new RegExp(\`^\${regex}$\`);
};
var bigint = /^-?\\d+n?$/;
var integer = /^-?\\d+$/;
var number = /^-?\\d+(?:\\.\\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(\`^[A-Za-z0-9+/]{\${bodyLength}}\${padding}$\`);
}
function fixedBase64url(length) {
  return new RegExp(\`^[A-Za-z0-9_-]{\${length}}$\`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a;
    (_a = inst2._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size === def.size)
      return;
    const tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = new Set);
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a = inst._zod).check ?? (_a.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? \`^.{\${def.position}}\${escapedRegex}\` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(\`^\${escapeRegex(def.prefix)}.*\`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(\`.*\${escapeRegex(def.suffix)}$\`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = new Set);
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(\`
\`).filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [\`\`];
    const lines = [...content.map((x) => \`  \${x}\`)];
    return new F(...args, lines.join(\`
\`));
  }
}

// node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 3,
  patch: 5
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError;
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {}
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === undefined)
      throw new Error(\`Invalid UUID version: "\${def.version}"\`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = new URL(trimmed);
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: def.hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.normalize) {
        payload.value = url.href;
      } else {
        payload.value = trimmed;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = \`ipv4\`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = \`ipv6\`;
  inst._zod.check = (payload) => {
    try {
      new URL(\`http://[\${payload.value}]\`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter));
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = \`mac\`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error;
      const [address, prefix] = parts;
      if (!prefix)
        throw new Error;
      const prefixNum = Number(prefix);
      if (\`\${prefixNum}\` !== prefix)
        throw new Error;
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error;
      new URL(\`http://[\${address}]\`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {}
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = new Set([undefined]);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {}
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0;i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === undefined) {
    if (key in input) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(\`Invalid element at key "\${k}": expected a Zod schema\`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = new Set);
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalOut);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc(key);
      return \`shape[\${k}]._zod.run({ value: input[\${k}], issues: [] }, ctx)\`;
    };
    doc.write(\`const input = payload.value;\`);
    const ids = Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = \`key_\${counter++}\`;
    }
    doc.write(\`const newResult = {};\`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k = esc(key);
      const schema = shape[key];
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(\`const \${id} = \${parseStr(key)};\`);
      if (isOptionalOut) {
        doc.write(\`
        if (\${id}.issues.length) {
          if (\${k} in input) {
            payload.issues = payload.issues.concat(\${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [\${k}, ...iss.path] : [\${k}]
            })));
          }
        }
        
        if (\${id}.value === undefined) {
          if (\${k} in input) {
            newResult[\${k}] = undefined;
          }
        } else {
          newResult[\${k}] = \${id}.value;
        }
        
      \`);
      } else {
        doc.write(\`
        if (\${id}.issues.length) {
          payload.issues = payload.issues.concat(\${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [\${k}, ...iss.path] : [\${k}]
          })));
        }
        
        if (\${id}.value === undefined) {
          if (\${k} in input) {
            newResult[\${k}] = undefined;
          }
        } else {
          newResult[\${k}] = \${id}.value;
        }
        
      \`);
      }
    }
    doc.write(\`payload.value = newResult;\`);
    doc.write(\`return payload;\`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(\`^(\${patterns.map((p) => cleanRegex(p.source)).join("|")})$\`);
    }
    return;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def);
  def.inclusive = false;
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        results.push(result);
      }
    }
    if (!async)
      return handleExclusiveUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleExclusiveUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(\`Invalid discriminated union option at index "\${def.options.indexOf(option)}"\`);
      for (const [k, v] of Object.entries(pv)) {
        if (!propValues[k])
          propValues[k] = new Set;
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map = new Map;
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(\`Invalid discriminated union option at index "\${def.options.indexOf(o)}"\`);
      for (const v of values) {
        if (map.has(v)) {
          throw new Error(\`Duplicate discriminator value "\${String(v)}"\`);
        }
        map.set(v, o);
      }
    }
    return map;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback) {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(\`Unmergable intersection. Error path: \` + \`\${JSON.stringify(merged.mergeErrorPath)}\`);
  }
  result.value = merged.data;
  return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
    const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
    if (!def.rest) {
      const tooBig = input.length > items.length;
      const tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall) {
        payload.issues.push({
          ...tooBig ? { code: "too_big", maximum: items.length, inclusive: true } : { code: "too_small", minimum: items.length },
          input,
          inst,
          origin: "array"
        });
        return payload;
      }
    }
    let i = -1;
    for (const item of items) {
      i++;
      if (i >= input.length) {
        if (i >= optStart)
          continue;
      }
      const result = item._zod.run({
        value: input[i],
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
      } else {
        handleTupleResult(result, payload, i);
      }
    }
    if (def.rest) {
      const rest = input.slice(items.length);
      for (const el of rest) {
        i++;
        const result = def.rest._zod.run({
          value: el,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      const recordKeys = new Set;
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[key] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[key] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length && keyResult.issues.some((iss) => iss.code === "invalid_type" && iss.expected === "number");
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = new Map;
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = new Set;
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(\`^(\${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$\`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  if (def.values.length === 0) {
    throw new Error("Cannot create literal schema with no valid values");
  }
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(\`^(\${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$\`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError;
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === undefined) {
    return { issues: [], value: undefined };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, undefined]) : undefined;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(\`^(\${cleanRegex(pattern.source)})?$\`) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === undefined) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(\`^(\${cleanRegex(pattern.source)}|null)$\`) : undefined;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError("ZodSuccess");
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handleCodecAResult(left2, def, ctx));
      }
      return handleCodecAResult(left, def, ctx);
    } else {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handleCodecAResult(right2, def, ctx));
      }
      return handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (typeof part === "object" && part !== null) {
      if (!part._zod.pattern) {
        throw new Error(\`Invalid template literal part, no pattern found: \${[...part._zod.traits].shift()}\`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(\`Invalid template literal part: \${part._zod.traits}\`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(\`\${part}\`));
    } else {
      throw new Error(\`Invalid template literal part: \${part}\`);
    }
  }
  inst._zod.pattern = new RegExp(\`^\${regexParts.join("")}$\`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "string",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: def.format ?? "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
  $ZodType.init(inst, def);
  inst._def = def;
  inst._zod.def = def;
  inst.implement = (func) => {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    return function(...args) {
      const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
      const result = Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return parse(inst._def.output, result);
      }
      return result;
    };
  };
  inst.implementAsync = (func) => {
    if (typeof func !== "function") {
      throw new Error("implementAsync() must be called with a function");
    }
    return async function(...args) {
      const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
      const result = await Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return await parseAsync(inst._def.output, result);
      }
      return result;
    };
  };
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "function") {
      payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      });
      return payload;
    }
    const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    if (hasPromiseOutput) {
      payload.value = inst.implementAsync(payload.value);
    } else {
      payload.value = inst.implement(payload.value);
    }
    return payload;
  };
  inst.input = (...args) => {
    const F = inst.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: inst._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: inst._def.output
    });
  };
  inst.output = (output) => {
    const F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  };
  return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => def.getter());
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? undefined);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? undefined);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
// node_modules/zod/v4/locales/index.js
var exports_locales = {};
__export(exports_locales, {
  zhTW: () => zh_TW_default,
  zhCN: () => zh_CN_default,
  yo: () => yo_default,
  vi: () => vi_default,
  uz: () => uz_default,
  ur: () => ur_default,
  uk: () => uk_default,
  ua: () => ua_default,
  tr: () => tr_default,
  th: () => th_default,
  ta: () => ta_default,
  sv: () => sv_default,
  sl: () => sl_default,
  ru: () => ru_default,
  pt: () => pt_default,
  ps: () => ps_default,
  pl: () => pl_default,
  ota: () => ota_default,
  no: () => no_default,
  nl: () => nl_default,
  ms: () => ms_default,
  mk: () => mk_default,
  lt: () => lt_default,
  ko: () => ko_default,
  km: () => km_default,
  kh: () => kh_default,
  ka: () => ka_default,
  ja: () => ja_default,
  it: () => it_default,
  is: () => is_default,
  id: () => id_default,
  hy: () => hy_default,
  hu: () => hu_default,
  he: () => he_default,
  frCA: () => fr_CA_default,
  fr: () => fr_default,
  fi: () => fi_default,
  fa: () => fa_default,
  es: () => es_default,
  eo: () => eo_default,
  en: () => en_default,
  de: () => de_default,
  da: () => da_default,
  cs: () => cs_default,
  ca: () => ca_default,
  bg: () => bg_default,
  be: () => be_default,
  az: () => az_default,
  ar: () => ar_default
});

// node_modules/zod/v4/locales/ar.js
var error = () => {
  const Sizable = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`مدخلات غير مقبولة: يفترض إدخال instanceof \${issue2.expected}، ولكن تم إدخال \${received}\`;
        }
        return \`مدخلات غير مقبولة: يفترض إدخال \${expected}، ولكن تم إدخال \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`مدخلات غير مقبولة: يفترض إدخال \${stringifyPrimitive(issue2.values[0])}\`;
        return \`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \` أكبر من اللازم: يفترض أن تكون \${issue2.origin ?? "القيمة"} \${adj} \${issue2.maximum.toString()} \${sizing.unit ?? "عنصر"}\`;
        return \`أكبر من اللازم: يفترض أن تكون \${issue2.origin ?? "القيمة"} \${adj} \${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`أصغر من اللازم: يفترض لـ \${issue2.origin} أن يكون \${adj} \${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`أصغر من اللازم: يفترض لـ \${issue2.origin} أن يكون \${adj} \${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`نَص غير مقبول: يجب أن يبدأ بـ "\${issue2.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`نَص غير مقبول: يجب أن ينتهي بـ "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`نَص غير مقبول: يجب أن يتضمَّن "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`نَص غير مقبول: يجب أن يطابق النمط \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} غير مقبول\`;
      }
      case "not_multiple_of":
        return \`رقم غير مقبول: يجب أن يكون من مضاعفات \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`معرف\${issue2.keys.length > 1 ? "ات" : ""} غريب\${issue2.keys.length > 1 ? "ة" : ""}: \${joinValues(issue2.keys, "، ")}\`;
      case "invalid_key":
        return \`معرف غير مقبول في \${issue2.origin}\`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return \`مدخل غير مقبول في \${issue2.origin}\`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}
// node_modules/zod/v4/locales/az.js
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Yanlış dəyər: gözlənilən instanceof \${issue2.expected}, daxil olan \${received}\`;
        }
        return \`Yanlış dəyər: gözlənilən \${expected}, daxil olan \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Yanlış dəyər: gözlənilən \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Yanlış seçim: aşağıdakılardan biri olmalıdır: \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Çox böyük: gözlənilən \${issue2.origin ?? "dəyər"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "element"}\`;
        return \`Çox böyük: gözlənilən \${issue2.origin ?? "dəyər"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Çox kiçik: gözlənilən \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        return \`Çox kiçik: gözlənilən \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Yanlış mətn: "\${_issue.prefix}" ilə başlamalıdır\`;
        if (_issue.format === "ends_with")
          return \`Yanlış mətn: "\${_issue.suffix}" ilə bitməlidir\`;
        if (_issue.format === "includes")
          return \`Yanlış mətn: "\${_issue.includes}" daxil olmalıdır\`;
        if (_issue.format === "regex")
          return \`Yanlış mətn: \${_issue.pattern} şablonuna uyğun olmalıdır\`;
        return \`Yanlış \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Yanlış ədəd: \${issue2.divisor} ilə bölünə bilən olmalıdır\`;
      case "unrecognized_keys":
        return \`Tanınmayan açar\${issue2.keys.length > 1 ? "lar" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} daxilində yanlış açar\`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return \`\${issue2.origin} daxilində yanlış dəyər\`;
      default:
        return \`Yanlış dəyər\`;
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}
// node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "лік",
    array: "масіў"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Няправільны ўвод: чакаўся instanceof \${issue2.expected}, атрымана \${received}\`;
        }
        return \`Няправільны ўвод: чакаўся \${expected}, атрымана \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Няправільны ўвод: чакалася \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Няправільны варыянт: чакаўся адзін з \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return \`Занадта вялікі: чакалася, што \${issue2.origin ?? "значэнне"} павінна \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${unit}\`;
        }
        return \`Занадта вялікі: чакалася, што \${issue2.origin ?? "значэнне"} павінна быць \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return \`Занадта малы: чакалася, што \${issue2.origin} павінна \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${unit}\`;
        }
        return \`Занадта малы: чакалася, што \${issue2.origin} павінна быць \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Няправільны радок: павінен пачынацца з "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Няправільны радок: павінен заканчвацца на "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Няправільны радок: павінен змяшчаць "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Няправільны радок: павінен адпавядаць шаблону \${_issue.pattern}\`;
        return \`Няправільны \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Няправільны лік: павінен быць кратным \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Нераспазнаны \${issue2.keys.length > 1 ? "ключы" : "ключ"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Няправільны ключ у \${issue2.origin}\`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return \`Няправільнае значэнне ў \${issue2.origin}\`;
      default:
        return \`Няправільны ўвод\`;
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}
// node_modules/zod/v4/locales/bg.js
var error4 = () => {
  const Sizable = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Невалиден вход: очакван instanceof \${issue2.expected}, получен \${received}\`;
        }
        return \`Невалиден вход: очакван \${expected}, получен \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Невалиден вход: очакван \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Невалидна опция: очаквано едно от \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Твърде голямо: очаква се \${issue2.origin ?? "стойност"} да съдържа \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "елемента"}\`;
        return \`Твърде голямо: очаква се \${issue2.origin ?? "стойност"} да бъде \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Твърде малко: очаква се \${issue2.origin} да съдържа \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Твърде малко: очаква се \${issue2.origin} да бъде \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Невалиден низ: трябва да започва с "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Невалиден низ: трябва да завършва с "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Невалиден низ: трябва да включва "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Невалиден низ: трябва да съвпада с \${_issue.pattern}\`;
        let invalid_adj = "Невалиден";
        if (_issue.format === "emoji")
          invalid_adj = "Невалидно";
        if (_issue.format === "datetime")
          invalid_adj = "Невалидно";
        if (_issue.format === "date")
          invalid_adj = "Невалидна";
        if (_issue.format === "time")
          invalid_adj = "Невалидно";
        if (_issue.format === "duration")
          invalid_adj = "Невалидна";
        return \`\${invalid_adj} \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Невалидно число: трябва да бъде кратно на \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Неразпознат\${issue2.keys.length > 1 ? "и" : ""} ключ\${issue2.keys.length > 1 ? "ове" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Невалиден ключ в \${issue2.origin}\`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return \`Невалидна стойност в \${issue2.origin}\`;
      default:
        return \`Невалиден вход\`;
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}
// node_modules/zod/v4/locales/ca.js
var error5 = () => {
  const Sizable = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Tipus invàlid: s'esperava instanceof \${issue2.expected}, s'ha rebut \${received}\`;
        }
        return \`Tipus invàlid: s'esperava \${expected}, s'ha rebut \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Valor invàlid: s'esperava \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Opció invàlida: s'esperava una de \${joinValues(issue2.values, " o ")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a màxim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Massa gran: s'esperava que \${issue2.origin ?? "el valor"} contingués \${adj} \${issue2.maximum.toString()} \${sizing.unit ?? "elements"}\`;
        return \`Massa gran: s'esperava que \${issue2.origin ?? "el valor"} fos \${adj} \${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a mínim" : "més de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Massa petit: s'esperava que \${issue2.origin} contingués \${adj} \${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Massa petit: s'esperava que \${issue2.origin} fos \${adj} \${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Format invàlid: ha de començar amb "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Format invàlid: ha d'acabar amb "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Format invàlid: ha d'incloure "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Format invàlid: ha de coincidir amb el patró \${_issue.pattern}\`;
        return \`Format invàlid per a \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Número invàlid: ha de ser múltiple de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Clau\${issue2.keys.length > 1 ? "s" : ""} no reconeguda\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Clau invàlida a \${issue2.origin}\`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return \`Element invàlid a \${issue2.origin}\`;
      default:
        return \`Entrada invàlida\`;
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}
// node_modules/zod/v4/locales/cs.js
var error6 = () => {
  const Sizable = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "číslo",
    string: "řetězec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Neplatný vstup: očekáváno instanceof \${issue2.expected}, obdrženo \${received}\`;
        }
        return \`Neplatný vstup: očekáváno \${expected}, obdrženo \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Neplatný vstup: očekáváno \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Neplatná možnost: očekávána jedna z hodnot \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Hodnota je příliš velká: \${issue2.origin ?? "hodnota"} musí mít \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "prvků"}\`;
        }
        return \`Hodnota je příliš velká: \${issue2.origin ?? "hodnota"} musí být \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Hodnota je příliš malá: \${issue2.origin ?? "hodnota"} musí mít \${adj}\${issue2.minimum.toString()} \${sizing.unit ?? "prvků"}\`;
        }
        return \`Hodnota je příliš malá: \${issue2.origin ?? "hodnota"} musí být \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Neplatný řetězec: musí začínat na "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Neplatný řetězec: musí končit na "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Neplatný řetězec: musí obsahovat "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Neplatný řetězec: musí odpovídat vzoru \${_issue.pattern}\`;
        return \`Neplatný formát \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Neplatné číslo: musí být násobkem \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Neznámé klíče: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Neplatný klíč v \${issue2.origin}\`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return \`Neplatná hodnota v \${issue2.origin}\`;
      default:
        return \`Neplatný vstup\`;
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}
// node_modules/zod/v4/locales/da.js
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ugyldigt input: forventede instanceof \${issue2.expected}, fik \${received}\`;
        }
        return \`Ugyldigt input: forventede \${expected}, fik \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ugyldig værdi: forventede \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ugyldigt valg: forventede en af følgende \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return \`For stor: forventede \${origin ?? "value"} \${sizing.verb} \${adj} \${issue2.maximum.toString()} \${sizing.unit ?? "elementer"}\`;
        return \`For stor: forventede \${origin ?? "value"} havde \${adj} \${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return \`For lille: forventede \${origin} \${sizing.verb} \${adj} \${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`For lille: forventede \${origin} havde \${adj} \${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Ugyldig streng: skal starte med "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Ugyldig streng: skal ende med "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Ugyldig streng: skal indeholde "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Ugyldig streng: skal matche mønsteret \${_issue.pattern}\`;
        return \`Ugyldig \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Ugyldigt tal: skal være deleligt med \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Ugyldig nøgle i \${issue2.origin}\`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return \`Ugyldig værdi i \${issue2.origin}\`;
      default:
        return \`Ugyldigt input\`;
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}
// node_modules/zod/v4/locales/de.js
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ungültige Eingabe: erwartet instanceof \${issue2.expected}, erhalten \${received}\`;
        }
        return \`Ungültige Eingabe: erwartet \${expected}, erhalten \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ungültige Eingabe: erwartet \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ungültige Option: erwartet eine von \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Zu groß: erwartet, dass \${issue2.origin ?? "Wert"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "Elemente"} hat\`;
        return \`Zu groß: erwartet, dass \${issue2.origin ?? "Wert"} \${adj}\${issue2.maximum.toString()} ist\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Zu klein: erwartet, dass \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit} hat\`;
        }
        return \`Zu klein: erwartet, dass \${issue2.origin} \${adj}\${issue2.minimum.toString()} ist\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Ungültiger String: muss mit "\${_issue.prefix}" beginnen\`;
        if (_issue.format === "ends_with")
          return \`Ungültiger String: muss mit "\${_issue.suffix}" enden\`;
        if (_issue.format === "includes")
          return \`Ungültiger String: muss "\${_issue.includes}" enthalten\`;
        if (_issue.format === "regex")
          return \`Ungültiger String: muss dem Muster \${_issue.pattern} entsprechen\`;
        return \`Ungültig: \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Ungültige Zahl: muss ein Vielfaches von \${issue2.divisor} sein\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Ungültiger Schlüssel in \${issue2.origin}\`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return \`Ungültiger Wert in \${issue2.origin}\`;
      default:
        return \`Ungültige Eingabe\`;
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}
// node_modules/zod/v4/locales/en.js
var error9 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return \`Invalid input: expected \${expected}, received \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Invalid input: expected \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Invalid option: expected one of \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Too big: expected \${issue2.origin ?? "value"} to have \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elements"}\`;
        return \`Too big: expected \${issue2.origin ?? "value"} to be \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Too small: expected \${issue2.origin} to have \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Too small: expected \${issue2.origin} to be \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Invalid string: must start with "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Invalid string: must end with "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Invalid string: must include "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Invalid string: must match pattern \${_issue.pattern}\`;
        return \`Invalid \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Invalid number: must be a multiple of \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Unrecognized key\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Invalid key in \${issue2.origin}\`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return \`Invalid value in \${issue2.origin}\`;
      default:
        return \`Invalid input\`;
    }
  };
};
function en_default() {
  return {
    localeError: error9()
  };
}
// node_modules/zod/v4/locales/eo.js
var error10 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Nevalida enigo: atendiĝis instanceof \${issue2.expected}, riceviĝis \${received}\`;
        }
        return \`Nevalida enigo: atendiĝis \${expected}, riceviĝis \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Nevalida enigo: atendiĝis \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Nevalida opcio: atendiĝis unu el \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Tro granda: atendiĝis ke \${issue2.origin ?? "valoro"} havu \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementojn"}\`;
        return \`Tro granda: atendiĝis ke \${issue2.origin ?? "valoro"} havu \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Tro malgranda: atendiĝis ke \${issue2.origin} havu \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Tro malgranda: atendiĝis ke \${issue2.origin} estu \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Nevalida karaktraro: devas komenciĝi per "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Nevalida karaktraro: devas finiĝi per "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Nevalida karaktraro: devas inkluzivi "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Nevalida karaktraro: devas kongrui kun la modelo \${_issue.pattern}\`;
        return \`Nevalida \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Nevalida nombro: devas esti oblo de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Nekonata\${issue2.keys.length > 1 ? "j" : ""} ŝlosilo\${issue2.keys.length > 1 ? "j" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Nevalida ŝlosilo en \${issue2.origin}\`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return \`Nevalida valoro en \${issue2.origin}\`;
      default:
        return \`Nevalida enigo\`;
    }
  };
};
function eo_default() {
  return {
    localeError: error10()
  };
}
// node_modules/zod/v4/locales/es.js
var error11 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Entrada inválida: se esperaba instanceof \${issue2.expected}, recibido \${received}\`;
        }
        return \`Entrada inválida: se esperaba \${expected}, recibido \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Entrada inválida: se esperaba \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Opción inválida: se esperaba una de \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return \`Demasiado grande: se esperaba que \${origin ?? "valor"} tuviera \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementos"}\`;
        return \`Demasiado grande: se esperaba que \${origin ?? "valor"} fuera \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return \`Demasiado pequeño: se esperaba que \${origin} tuviera \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Demasiado pequeño: se esperaba que \${origin} fuera \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Cadena inválida: debe comenzar con "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Cadena inválida: debe terminar en "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Cadena inválida: debe incluir "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Cadena inválida: debe coincidir con el patrón \${_issue.pattern}\`;
        return \`Inválido \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Número inválido: debe ser múltiplo de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Llave\${issue2.keys.length > 1 ? "s" : ""} desconocida\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Llave inválida en \${TypeDictionary[issue2.origin] ?? issue2.origin}\`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return \`Valor inválido en \${TypeDictionary[issue2.origin] ?? issue2.origin}\`;
      default:
        return \`Entrada inválida\`;
    }
  };
};
function es_default() {
  return {
    localeError: error11()
  };
}
// node_modules/zod/v4/locales/fa.js
var error12 = () => {
  const Sizable = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "آرایه"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`ورودی نامعتبر: می‌بایست instanceof \${issue2.expected} می‌بود، \${received} دریافت شد\`;
        }
        return \`ورودی نامعتبر: می‌بایست \${expected} می‌بود، \${received} دریافت شد\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return \`ورودی نامعتبر: می‌بایست \${stringifyPrimitive(issue2.values[0])} می‌بود\`;
        }
        return \`گزینه نامعتبر: می‌بایست یکی از \${joinValues(issue2.values, "|")} می‌بود\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`خیلی بزرگ: \${issue2.origin ?? "مقدار"} باید \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "عنصر"} باشد\`;
        }
        return \`خیلی بزرگ: \${issue2.origin ?? "مقدار"} باید \${adj}\${issue2.maximum.toString()} باشد\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`خیلی کوچک: \${issue2.origin} باید \${adj}\${issue2.minimum.toString()} \${sizing.unit} باشد\`;
        }
        return \`خیلی کوچک: \${issue2.origin} باید \${adj}\${issue2.minimum.toString()} باشد\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`رشته نامعتبر: باید با "\${_issue.prefix}" شروع شود\`;
        }
        if (_issue.format === "ends_with") {
          return \`رشته نامعتبر: باید با "\${_issue.suffix}" تمام شود\`;
        }
        if (_issue.format === "includes") {
          return \`رشته نامعتبر: باید شامل "\${_issue.includes}" باشد\`;
        }
        if (_issue.format === "regex") {
          return \`رشته نامعتبر: باید با الگوی \${_issue.pattern} مطابقت داشته باشد\`;
        }
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} نامعتبر\`;
      }
      case "not_multiple_of":
        return \`عدد نامعتبر: باید مضرب \${issue2.divisor} باشد\`;
      case "unrecognized_keys":
        return \`کلید\${issue2.keys.length > 1 ? "های" : ""} ناشناس: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`کلید ناشناس در \${issue2.origin}\`;
      case "invalid_union":
        return \`ورودی نامعتبر\`;
      case "invalid_element":
        return \`مقدار نامعتبر در \${issue2.origin}\`;
      default:
        return \`ورودی نامعتبر\`;
    }
  };
};
function fa_default() {
  return {
    localeError: error12()
  };
}
// node_modules/zod/v4/locales/fi.js
var error13 = () => {
  const Sizable = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Virheellinen tyyppi: odotettiin instanceof \${issue2.expected}, oli \${received}\`;
        }
        return \`Virheellinen tyyppi: odotettiin \${expected}, oli \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Virheellinen syöte: täytyy olla \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Virheellinen valinta: täytyy olla yksi seuraavista: \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Liian suuri: \${sizing.subject} täytyy olla \${adj}\${issue2.maximum.toString()} \${sizing.unit}\`.trim();
        }
        return \`Liian suuri: arvon täytyy olla \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Liian pieni: \${sizing.subject} täytyy olla \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`.trim();
        }
        return \`Liian pieni: arvon täytyy olla \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Virheellinen syöte: täytyy alkaa "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Virheellinen syöte: täytyy loppua "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Virheellinen syöte: täytyy sisältää "\${_issue.includes}"\`;
        if (_issue.format === "regex") {
          return \`Virheellinen syöte: täytyy vastata säännöllistä lauseketta \${_issue.pattern}\`;
        }
        return \`Virheellinen \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Virheellinen luku: täytyy olla luvun \${issue2.divisor} monikerta\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return \`Virheellinen syöte\`;
    }
  };
};
function fi_default() {
  return {
    localeError: error13()
  };
}
// node_modules/zod/v4/locales/fr.js
var error14 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Entrée invalide : instanceof \${issue2.expected} attendu, \${received} reçu\`;
        }
        return \`Entrée invalide : \${expected} attendu, \${received} reçu\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Entrée invalide : \${stringifyPrimitive(issue2.values[0])} attendu\`;
        return \`Option invalide : une valeur parmi \${joinValues(issue2.values, "|")} attendue\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Trop grand : \${issue2.origin ?? "valeur"} doit \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "élément(s)"}\`;
        return \`Trop grand : \${issue2.origin ?? "valeur"} doit être \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Trop petit : \${issue2.origin} doit \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Trop petit : \${issue2.origin} doit être \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Chaîne invalide : doit commencer par "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Chaîne invalide : doit se terminer par "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Chaîne invalide : doit inclure "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Chaîne invalide : doit correspondre au modèle \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} invalide\`;
      }
      case "not_multiple_of":
        return \`Nombre invalide : doit être un multiple de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Clé\${issue2.keys.length > 1 ? "s" : ""} non reconnue\${issue2.keys.length > 1 ? "s" : ""} : \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Clé invalide dans \${issue2.origin}\`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return \`Valeur invalide dans \${issue2.origin}\`;
      default:
        return \`Entrée invalide\`;
    }
  };
};
function fr_default() {
  return {
    localeError: error14()
  };
}
// node_modules/zod/v4/locales/fr-CA.js
var error15 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Entrée invalide : attendu instanceof \${issue2.expected}, reçu \${received}\`;
        }
        return \`Entrée invalide : attendu \${expected}, reçu \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Entrée invalide : attendu \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Option invalide : attendu l'une des valeurs suivantes \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "≤" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Trop grand : attendu que \${issue2.origin ?? "la valeur"} ait \${adj}\${issue2.maximum.toString()} \${sizing.unit}\`;
        return \`Trop grand : attendu que \${issue2.origin ?? "la valeur"} soit \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "≥" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Trop petit : attendu que \${issue2.origin} ait \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Trop petit : attendu que \${issue2.origin} soit \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Chaîne invalide : doit commencer par "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Chaîne invalide : doit se terminer par "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Chaîne invalide : doit inclure "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Chaîne invalide : doit correspondre au motif \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} invalide\`;
      }
      case "not_multiple_of":
        return \`Nombre invalide : doit être un multiple de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Clé\${issue2.keys.length > 1 ? "s" : ""} non reconnue\${issue2.keys.length > 1 ? "s" : ""} : \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Clé invalide dans \${issue2.origin}\`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return \`Valeur invalide dans \${issue2.origin}\`;
      default:
        return \`Entrée invalide\`;
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error15()
  };
}
// node_modules/zod/v4/locales/he.js
var error16 = () => {
  const TypeNames = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  };
  const Sizable = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
  };
  const typeEntry = (t) => t ? TypeNames[t] : undefined;
  const typeLabel = (t) => {
    const e = typeEntry(t);
    if (e)
      return e.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => \`ה\${typeLabel(t)}\`;
  const verbFor = (t) => {
    const e = typeEntry(t);
    const gender = e?.gender ?? "m";
    return gender === "f" ? "צריכה להיות" : "צריך להיות";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`קלט לא תקין: צריך להיות instanceof \${issue2.expected}, התקבל \${received}\`;
        }
        return \`קלט לא תקין: צריך להיות \${expected}, התקבל \${received}\`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return \`ערך לא תקין: הערך חייב להיות \${stringifyPrimitive(issue2.values[0])}\`;
        }
        const stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2) {
          return \`ערך לא תקין: האפשרויות המתאימות הן \${stringified[0]} או \${stringified[1]}\`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return \`ערך לא תקין: האפשרויות המתאימות הן \${restValues} או \${lastValue}\`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return \`\${sizing?.longLabel ?? "ארוך"} מדי: \${subject} צריכה להכיל \${issue2.maximum.toString()} \${sizing?.unit ?? ""} \${issue2.inclusive ? "או פחות" : "לכל היותר"}\`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? \`קטן או שווה ל-\${issue2.maximum}\` : \`קטן מ-\${issue2.maximum}\`;
          return \`גדול מדי: \${subject} צריך להיות \${comparison}\`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          const comparison = issue2.inclusive ? \`\${issue2.maximum} \${sizing?.unit ?? ""} או פחות\` : \`פחות מ-\${issue2.maximum} \${sizing?.unit ?? ""}\`;
          return \`גדול מדי: \${subject} \${verb} להכיל \${comparison}\`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return \`\${sizing.longLabel} מדי: \${subject} \${be} \${adj}\${issue2.maximum.toString()} \${sizing.unit}\`;
        }
        return \`\${sizing?.longLabel ?? "גדול"} מדי: \${subject} \${be} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return \`\${sizing?.shortLabel ?? "קצר"} מדי: \${subject} צריכה להכיל \${issue2.minimum.toString()} \${sizing?.unit ?? ""} \${issue2.inclusive ? "או יותר" : "לפחות"}\`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? \`גדול או שווה ל-\${issue2.minimum}\` : \`גדול מ-\${issue2.minimum}\`;
          return \`קטן מדי: \${subject} צריך להיות \${comparison}\`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "לפחות פריט אחד" : "לפחות פריט אחד";
            return \`קטן מדי: \${subject} \${verb} להכיל \${singularPhrase}\`;
          }
          const comparison = issue2.inclusive ? \`\${issue2.minimum} \${sizing?.unit ?? ""} או יותר\` : \`יותר מ-\${issue2.minimum} \${sizing?.unit ?? ""}\`;
          return \`קטן מדי: \${subject} \${verb} להכיל \${comparison}\`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return \`\${sizing.shortLabel} מדי: \${subject} \${be} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`\${sizing?.shortLabel ?? "קטן"} מדי: \${subject} \${be} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`המחרוזת חייבת להתחיל ב "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`המחרוזת חייבת להסתיים ב "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`המחרוזת חייבת לכלול "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`המחרוזת חייבת להתאים לתבנית \${_issue.pattern}\`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "תקינה" : "תקין";
        return \`\${noun} לא \${adjective}\`;
      }
      case "not_multiple_of":
        return \`מספר לא תקין: חייב להיות מכפלה של \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`מפתח\${issue2.keys.length > 1 ? "ות" : ""} לא מזוה\${issue2.keys.length > 1 ? "ים" : "ה"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key": {
        return \`שדה לא תקין באובייקט\`;
      }
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return \`ערך לא תקין ב\${place}\`;
      }
      default:
        return \`קלט לא תקין\`;
    }
  };
};
function he_default() {
  return {
    localeError: error16()
  };
}
// node_modules/zod/v4/locales/hu.js
var error17 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "szám",
    array: "tömb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Érvénytelen bemenet: a várt érték instanceof \${issue2.expected}, a kapott érték \${received}\`;
        }
        return \`Érvénytelen bemenet: a várt érték \${expected}, a kapott érték \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Érvénytelen bemenet: a várt érték \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Érvénytelen opció: valamelyik érték várt \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Túl nagy: \${issue2.origin ?? "érték"} mérete túl nagy \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elem"}\`;
        return \`Túl nagy: a bemeneti érték \${issue2.origin ?? "érték"} túl nagy: \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Túl kicsi: a bemeneti érték \${issue2.origin} mérete túl kicsi \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Túl kicsi: a bemeneti érték \${issue2.origin} túl kicsi \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Érvénytelen string: "\${_issue.prefix}" értékkel kell kezdődnie\`;
        if (_issue.format === "ends_with")
          return \`Érvénytelen string: "\${_issue.suffix}" értékkel kell végződnie\`;
        if (_issue.format === "includes")
          return \`Érvénytelen string: "\${_issue.includes}" értéket kell tartalmaznia\`;
        if (_issue.format === "regex")
          return \`Érvénytelen string: \${_issue.pattern} mintának kell megfelelnie\`;
        return \`Érvénytelen \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Érvénytelen szám: \${issue2.divisor} többszörösének kell lennie\`;
      case "unrecognized_keys":
        return \`Ismeretlen kulcs\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Érvénytelen kulcs \${issue2.origin}\`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return \`Érvénytelen érték: \${issue2.origin}\`;
      default:
        return \`Érvénytelen bemenet\`;
    }
  };
};
function hu_default() {
  return {
    localeError: error17()
  };
}
// node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "ն" : "ը");
}
var error18 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "նշան",
        many: "նշաններ"
      },
      verb: "ունենալ"
    },
    file: {
      unit: {
        one: "բայթ",
        many: "բայթեր"
      },
      verb: "ունենալ"
    },
    array: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    },
    set: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "մուտք",
    email: "էլ. հասցե",
    url: "URL",
    emoji: "էմոջի",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO ամսաթիվ և ժամ",
    date: "ISO ամսաթիվ",
    time: "ISO ժամ",
    duration: "ISO տևողություն",
    ipv4: "IPv4 հասցե",
    ipv6: "IPv6 հասցե",
    cidrv4: "IPv4 միջակայք",
    cidrv6: "IPv6 միջակայք",
    base64: "base64 ձևաչափով տող",
    base64url: "base64url ձևաչափով տող",
    json_string: "JSON տող",
    e164: "E.164 համար",
    jwt: "JWT",
    template_literal: "մուտք"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "թիվ",
    array: "զանգված"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Սխալ մուտքագրում․ սպասվում էր instanceof \${issue2.expected}, ստացվել է \${received}\`;
        }
        return \`Սխալ մուտքագրում․ սպասվում էր \${expected}, ստացվել է \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Սխալ մուտքագրում․ սպասվում էր \${stringifyPrimitive(issue2.values[1])}\`;
        return \`Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return \`Չափազանց մեծ արժեք․ սպասվում է, որ \${withDefiniteArticle(issue2.origin ?? "արժեք")} կունենա \${adj}\${issue2.maximum.toString()} \${unit}\`;
        }
        return \`Չափազանց մեծ արժեք․ սպասվում է, որ \${withDefiniteArticle(issue2.origin ?? "արժեք")} լինի \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return \`Չափազանց փոքր արժեք․ սպասվում է, որ \${withDefiniteArticle(issue2.origin)} կունենա \${adj}\${issue2.minimum.toString()} \${unit}\`;
        }
        return \`Չափազանց փոքր արժեք․ սպասվում է, որ \${withDefiniteArticle(issue2.origin)} լինի \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Սխալ տող․ պետք է սկսվի "\${_issue.prefix}"-ով\`;
        if (_issue.format === "ends_with")
          return \`Սխալ տող․ պետք է ավարտվի "\${_issue.suffix}"-ով\`;
        if (_issue.format === "includes")
          return \`Սխալ տող․ պետք է պարունակի "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Սխալ տող․ պետք է համապատասխանի \${_issue.pattern} ձևաչափին\`;
        return \`Սխալ \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Սխալ թիվ․ պետք է բազմապատիկ լինի \${issue2.divisor}-ի\`;
      case "unrecognized_keys":
        return \`Չճանաչված բանալի\${issue2.keys.length > 1 ? "ներ" : ""}. \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Սխալ բանալի \${withDefiniteArticle(issue2.origin)}-ում\`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return \`Սխալ արժեք \${withDefiniteArticle(issue2.origin)}-ում\`;
      default:
        return \`Սխալ մուտքագրում\`;
    }
  };
};
function hy_default() {
  return {
    localeError: error18()
  };
}
// node_modules/zod/v4/locales/id.js
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Input tidak valid: diharapkan instanceof \${issue2.expected}, diterima \${received}\`;
        }
        return \`Input tidak valid: diharapkan \${expected}, diterima \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Input tidak valid: diharapkan \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Pilihan tidak valid: diharapkan salah satu dari \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Terlalu besar: diharapkan \${issue2.origin ?? "value"} memiliki \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elemen"}\`;
        return \`Terlalu besar: diharapkan \${issue2.origin ?? "value"} menjadi \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Terlalu kecil: diharapkan \${issue2.origin} memiliki \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Terlalu kecil: diharapkan \${issue2.origin} menjadi \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`String tidak valid: harus dimulai dengan "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`String tidak valid: harus berakhir dengan "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`String tidak valid: harus menyertakan "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`String tidak valid: harus sesuai pola \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} tidak valid\`;
      }
      case "not_multiple_of":
        return \`Angka tidak valid: harus kelipatan dari \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Kunci tidak dikenali \${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Kunci tidak valid di \${issue2.origin}\`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return \`Nilai tidak valid di \${issue2.origin}\`;
      default:
        return \`Input tidak valid\`;
    }
  };
};
function id_default() {
  return {
    localeError: error19()
  };
}
// node_modules/zod/v4/locales/is.js
var error20 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "númer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Rangt gildi: Þú slóst inn \${received} þar sem á að vera instanceof \${issue2.expected}\`;
        }
        return \`Rangt gildi: Þú slóst inn \${received} þar sem á að vera \${expected}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Rangt gildi: gert ráð fyrir \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ógilt val: má vera eitt af eftirfarandi \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Of stórt: gert er ráð fyrir að \${issue2.origin ?? "gildi"} hafi \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "hluti"}\`;
        return \`Of stórt: gert er ráð fyrir að \${issue2.origin ?? "gildi"} sé \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Of lítið: gert er ráð fyrir að \${issue2.origin} hafi \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Of lítið: gert er ráð fyrir að \${issue2.origin} sé \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Ógildur strengur: verður að byrja á "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Ógildur strengur: verður að enda á "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Ógildur strengur: verður að innihalda "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Ógildur strengur: verður að fylgja mynstri \${_issue.pattern}\`;
        return \`Rangt \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Röng tala: verður að vera margfeldi af \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Óþekkt \${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Rangur lykill í \${issue2.origin}\`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return \`Rangt gildi í \${issue2.origin}\`;
      default:
        return \`Rangt gildi\`;
    }
  };
};
function is_default() {
  return {
    localeError: error20()
  };
}
// node_modules/zod/v4/locales/it.js
var error21 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Input non valido: atteso instanceof \${issue2.expected}, ricevuto \${received}\`;
        }
        return \`Input non valido: atteso \${expected}, ricevuto \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Input non valido: atteso \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Opzione non valida: atteso uno tra \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Troppo grande: \${issue2.origin ?? "valore"} deve avere \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementi"}\`;
        return \`Troppo grande: \${issue2.origin ?? "valore"} deve essere \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Troppo piccolo: \${issue2.origin} deve avere \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Troppo piccolo: \${issue2.origin} deve essere \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Stringa non valida: deve iniziare con "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Stringa non valida: deve terminare con "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Stringa non valida: deve includere "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Stringa non valida: deve corrispondere al pattern \${_issue.pattern}\`;
        return \`Invalid \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Numero non valido: deve essere un multiplo di \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Chiav\${issue2.keys.length > 1 ? "i" : "e"} non riconosciut\${issue2.keys.length > 1 ? "e" : "a"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Chiave non valida in \${issue2.origin}\`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return \`Valore non valido in \${issue2.origin}\`;
      default:
        return \`Input non valido\`;
    }
  };
};
function it_default() {
  return {
    localeError: error21()
  };
}
// node_modules/zod/v4/locales/ja.js
var error22 = () => {
  const Sizable = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数値",
    array: "配列"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`無効な入力: instanceof \${issue2.expected}が期待されましたが、\${received}が入力されました\`;
        }
        return \`無効な入力: \${expected}が期待されましたが、\${received}が入力されました\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`無効な入力: \${stringifyPrimitive(issue2.values[0])}が期待されました\`;
        return \`無効な選択: \${joinValues(issue2.values, "、")}のいずれかである必要があります\`;
      case "too_big": {
        const adj = issue2.inclusive ? "以下である" : "より小さい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`大きすぎる値: \${issue2.origin ?? "値"}は\${issue2.maximum.toString()}\${sizing.unit ?? "要素"}\${adj}必要があります\`;
        return \`大きすぎる値: \${issue2.origin ?? "値"}は\${issue2.maximum.toString()}\${adj}必要があります\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "以上である" : "より大きい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`小さすぎる値: \${issue2.origin}は\${issue2.minimum.toString()}\${sizing.unit}\${adj}必要があります\`;
        return \`小さすぎる値: \${issue2.origin}は\${issue2.minimum.toString()}\${adj}必要があります\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`無効な文字列: "\${_issue.prefix}"で始まる必要があります\`;
        if (_issue.format === "ends_with")
          return \`無効な文字列: "\${_issue.suffix}"で終わる必要があります\`;
        if (_issue.format === "includes")
          return \`無効な文字列: "\${_issue.includes}"を含む必要があります\`;
        if (_issue.format === "regex")
          return \`無効な文字列: パターン\${_issue.pattern}に一致する必要があります\`;
        return \`無効な\${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`無効な数値: \${issue2.divisor}の倍数である必要があります\`;
      case "unrecognized_keys":
        return \`認識されていないキー\${issue2.keys.length > 1 ? "群" : ""}: \${joinValues(issue2.keys, "、")}\`;
      case "invalid_key":
        return \`\${issue2.origin}内の無効なキー\`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return \`\${issue2.origin}内の無効な値\`;
      default:
        return \`無効な入力\`;
    }
  };
};
function ja_default() {
  return {
    localeError: error22()
  };
}
// node_modules/zod/v4/locales/ka.js
var error23 = () => {
  const Sizable = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "რიცხვი",
    string: "სტრინგი",
    boolean: "ბულეანი",
    function: "ფუნქცია",
    array: "მასივი"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`არასწორი შეყვანა: მოსალოდნელი instanceof \${issue2.expected}, მიღებული \${received}\`;
        }
        return \`არასწორი შეყვანა: მოსალოდნელი \${expected}, მიღებული \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`არასწორი შეყვანა: მოსალოდნელი \${stringifyPrimitive(issue2.values[0])}\`;
        return \`არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი \${joinValues(issue2.values, "|")}-დან\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`ზედმეტად დიდი: მოსალოდნელი \${issue2.origin ?? "მნიშვნელობა"} \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${sizing.unit}\`;
        return \`ზედმეტად დიდი: მოსალოდნელი \${issue2.origin ?? "მნიშვნელობა"} იყოს \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`ზედმეტად პატარა: მოსალოდნელი \${issue2.origin} \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`ზედმეტად პატარა: მოსალოდნელი \${issue2.origin} იყოს \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`არასწორი სტრინგი: უნდა იწყებოდეს "\${_issue.prefix}"-ით\`;
        }
        if (_issue.format === "ends_with")
          return \`არასწორი სტრინგი: უნდა მთავრდებოდეს "\${_issue.suffix}"-ით\`;
        if (_issue.format === "includes")
          return \`არასწორი სტრინგი: უნდა შეიცავდეს "\${_issue.includes}"-ს\`;
        if (_issue.format === "regex")
          return \`არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს \${_issue.pattern}\`;
        return \`არასწორი \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`არასწორი რიცხვი: უნდა იყოს \${issue2.divisor}-ის ჯერადი\`;
      case "unrecognized_keys":
        return \`უცნობი გასაღებ\${issue2.keys.length > 1 ? "ები" : "ი"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`არასწორი გასაღები \${issue2.origin}-ში\`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return \`არასწორი მნიშვნელობა \${issue2.origin}-ში\`;
      default:
        return \`არასწორი შეყვანა\`;
    }
  };
};
function ka_default() {
  return {
    localeError: error23()
  };
}
// node_modules/zod/v4/locales/km.js
var error24 = () => {
  const Sizable = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "លេខ",
    array: "អារេ (Array)",
    null: "គ្មានតម្លៃ (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof \${issue2.expected} ប៉ុន្តែទទួលបាន \${received}\`;
        }
        return \`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ \${expected} ប៉ុន្តែទទួលបាន \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ \${stringifyPrimitive(issue2.values[0])}\`;
        return \`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`ធំពេក៖ ត្រូវការ \${issue2.origin ?? "តម្លៃ"} \${adj} \${issue2.maximum.toString()} \${sizing.unit ?? "ធាតុ"}\`;
        return \`ធំពេក៖ ត្រូវការ \${issue2.origin ?? "តម្លៃ"} \${adj} \${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`តូចពេក៖ ត្រូវការ \${issue2.origin} \${adj} \${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`តូចពេក៖ ត្រូវការ \${issue2.origin} \${adj} \${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ \${_issue.pattern}\`;
        return \`មិនត្រឹមត្រូវ៖ \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`រកឃើញសោមិនស្គាល់៖ \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`សោមិនត្រឹមត្រូវនៅក្នុង \${issue2.origin}\`;
      case "invalid_union":
        return \`ទិន្នន័យមិនត្រឹមត្រូវ\`;
      case "invalid_element":
        return \`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង \${issue2.origin}\`;
      default:
        return \`ទិន្នន័យមិនត្រឹមត្រូវ\`;
    }
  };
};
function km_default() {
  return {
    localeError: error24()
  };
}

// node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}
// node_modules/zod/v4/locales/ko.js
var error25 = () => {
  const Sizable = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`잘못된 입력: 예상 타입은 instanceof \${issue2.expected}, 받은 타입은 \${received}입니다\`;
        }
        return \`잘못된 입력: 예상 타입은 \${expected}, 받은 타입은 \${received}입니다\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`잘못된 입력: 값은 \${stringifyPrimitive(issue2.values[0])} 이어야 합니다\`;
        return \`잘못된 옵션: \${joinValues(issue2.values, "또는 ")} 중 하나여야 합니다\`;
      case "too_big": {
        const adj = issue2.inclusive ? "이하" : "미만";
        const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing)
          return \`\${issue2.origin ?? "값"}이 너무 큽니다: \${issue2.maximum.toString()}\${unit} \${adj}\${suffix}\`;
        return \`\${issue2.origin ?? "값"}이 너무 큽니다: \${issue2.maximum.toString()} \${adj}\${suffix}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "이상" : "초과";
        const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing) {
          return \`\${issue2.origin ?? "값"}이 너무 작습니다: \${issue2.minimum.toString()}\${unit} \${adj}\${suffix}\`;
        }
        return \`\${issue2.origin ?? "값"}이 너무 작습니다: \${issue2.minimum.toString()} \${adj}\${suffix}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`잘못된 문자열: "\${_issue.prefix}"(으)로 시작해야 합니다\`;
        }
        if (_issue.format === "ends_with")
          return \`잘못된 문자열: "\${_issue.suffix}"(으)로 끝나야 합니다\`;
        if (_issue.format === "includes")
          return \`잘못된 문자열: "\${_issue.includes}"을(를) 포함해야 합니다\`;
        if (_issue.format === "regex")
          return \`잘못된 문자열: 정규식 \${_issue.pattern} 패턴과 일치해야 합니다\`;
        return \`잘못된 \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`잘못된 숫자: \${issue2.divisor}의 배수여야 합니다\`;
      case "unrecognized_keys":
        return \`인식할 수 없는 키: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`잘못된 키: \${issue2.origin}\`;
      case "invalid_union":
        return \`잘못된 입력\`;
      case "invalid_element":
        return \`잘못된 값: \${issue2.origin}\`;
      default:
        return \`잘못된 입력\`;
    }
  };
};
function ko_default() {
  return {
    localeError: error25()
  };
}
// node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number2) {
  const abs = Math.abs(number2);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
var error26 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skaičius",
    bigint: "sveikasis skaičius",
    string: "eilutė",
    boolean: "loginė reikšmė",
    undefined: "neapibrėžta reikšmė",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulinė reikšmė"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Gautas tipas \${received}, o tikėtasi - instanceof \${issue2.expected}\`;
        }
        return \`Gautas tipas \${received}, o tikėtasi - \${expected}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Privalo būti \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Privalo būti vienas iš \${joinValues(issue2.values, "|")} pasirinkimų\`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return \`\${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} \${sizing.verb} \${issue2.maximum.toString()} \${sizing.unit ?? "elementų"}\`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return \`\${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti \${adj} \${issue2.maximum.toString()} \${sizing?.unit}\`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return \`\${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} \${sizing.verb} \${issue2.minimum.toString()} \${sizing.unit ?? "elementų"}\`;
        const adj = issue2.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return \`\${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti \${adj} \${issue2.minimum.toString()} \${sizing?.unit}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Eilutė privalo prasidėti "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Eilutė privalo pasibaigti "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Eilutė privalo įtraukti "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Eilutė privalo atitikti \${_issue.pattern}\`;
        return \`Neteisingas \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Skaičius privalo būti \${issue2.divisor} kartotinis.\`;
      case "unrecognized_keys":
        return \`Neatpažint\${issue2.keys.length > 1 ? "i" : "as"} rakt\${issue2.keys.length > 1 ? "ai" : "as"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return \`\${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi klaidingą įvestį\`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error26()
  };
}
// node_modules/zod/v4/locales/mk.js
var error27 = () => {
  const Sizable = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "број",
    array: "низа"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Грешен внес: се очекува instanceof \${issue2.expected}, примено \${received}\`;
        }
        return \`Грешен внес: се очекува \${expected}, примено \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Invalid input: expected \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Грешана опција: се очекува една \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Премногу голем: се очекува \${issue2.origin ?? "вредноста"} да има \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "елементи"}\`;
        return \`Премногу голем: се очекува \${issue2.origin ?? "вредноста"} да биде \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Премногу мал: се очекува \${issue2.origin} да има \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Премногу мал: се очекува \${issue2.origin} да биде \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Неважечка низа: мора да започнува со "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Неважечка низа: мора да завршува со "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Неважечка низа: мора да вклучува "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Неважечка низа: мора да одгоара на патернот \${_issue.pattern}\`;
        return \`Invalid \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Грешен број: мора да биде делив со \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Грешен клуч во \${issue2.origin}\`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return \`Грешна вредност во \${issue2.origin}\`;
      default:
        return \`Грешен внес\`;
    }
  };
};
function mk_default() {
  return {
    localeError: error27()
  };
}
// node_modules/zod/v4/locales/ms.js
var error28 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Input tidak sah: dijangka instanceof \${issue2.expected}, diterima \${received}\`;
        }
        return \`Input tidak sah: dijangka \${expected}, diterima \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Input tidak sah: dijangka \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Pilihan tidak sah: dijangka salah satu daripada \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Terlalu besar: dijangka \${issue2.origin ?? "nilai"} \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elemen"}\`;
        return \`Terlalu besar: dijangka \${issue2.origin ?? "nilai"} adalah \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Terlalu kecil: dijangka \${issue2.origin} \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Terlalu kecil: dijangka \${issue2.origin} adalah \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`String tidak sah: mesti bermula dengan "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`String tidak sah: mesti berakhir dengan "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`String tidak sah: mesti mengandungi "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`String tidak sah: mesti sepadan dengan corak \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} tidak sah\`;
      }
      case "not_multiple_of":
        return \`Nombor tidak sah: perlu gandaan \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Kunci tidak dikenali: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Kunci tidak sah dalam \${issue2.origin}\`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return \`Nilai tidak sah dalam \${issue2.origin}\`;
      default:
        return \`Input tidak sah\`;
    }
  };
};
function ms_default() {
  return {
    localeError: error28()
  };
}
// node_modules/zod/v4/locales/nl.js
var error29 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ongeldige invoer: verwacht instanceof \${issue2.expected}, ontving \${received}\`;
        }
        return \`Ongeldige invoer: verwacht \${expected}, ontving \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ongeldige invoer: verwacht \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ongeldige optie: verwacht één van \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return \`Te \${longName}: verwacht dat \${issue2.origin ?? "waarde"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementen"} \${sizing.verb}\`;
        return \`Te \${longName}: verwacht dat \${issue2.origin ?? "waarde"} \${adj}\${issue2.maximum.toString()} is\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return \`Te \${shortName}: verwacht dat \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit} \${sizing.verb}\`;
        }
        return \`Te \${shortName}: verwacht dat \${issue2.origin} \${adj}\${issue2.minimum.toString()} is\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Ongeldige tekst: moet met "\${_issue.prefix}" beginnen\`;
        }
        if (_issue.format === "ends_with")
          return \`Ongeldige tekst: moet op "\${_issue.suffix}" eindigen\`;
        if (_issue.format === "includes")
          return \`Ongeldige tekst: moet "\${_issue.includes}" bevatten\`;
        if (_issue.format === "regex")
          return \`Ongeldige tekst: moet overeenkomen met patroon \${_issue.pattern}\`;
        return \`Ongeldig: \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Ongeldig getal: moet een veelvoud van \${issue2.divisor} zijn\`;
      case "unrecognized_keys":
        return \`Onbekende key\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Ongeldige key in \${issue2.origin}\`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return \`Ongeldige waarde in \${issue2.origin}\`;
      default:
        return \`Ongeldige invoer\`;
    }
  };
};
function nl_default() {
  return {
    localeError: error29()
  };
}
// node_modules/zod/v4/locales/no.js
var error30 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ugyldig input: forventet instanceof \${issue2.expected}, fikk \${received}\`;
        }
        return \`Ugyldig input: forventet \${expected}, fikk \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ugyldig verdi: forventet \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ugyldig valg: forventet en av \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`For stor(t): forventet \${issue2.origin ?? "value"} til å ha \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementer"}\`;
        return \`For stor(t): forventet \${issue2.origin ?? "value"} til å ha \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`For lite(n): forventet \${issue2.origin} til å ha \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`For lite(n): forventet \${issue2.origin} til å ha \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Ugyldig streng: må starte med "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Ugyldig streng: må ende med "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Ugyldig streng: må inneholde "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Ugyldig streng: må matche mønsteret \${_issue.pattern}\`;
        return \`Ugyldig \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Ugyldig tall: må være et multiplum av \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Ugyldig nøkkel i \${issue2.origin}\`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return \`Ugyldig verdi i \${issue2.origin}\`;
      default:
        return \`Ugyldig input\`;
    }
  };
};
function no_default() {
  return {
    localeError: error30()
  };
}
// node_modules/zod/v4/locales/ota.js
var error31 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Fâsit giren: umulan instanceof \${issue2.expected}, alınan \${received}\`;
        }
        return \`Fâsit giren: umulan \${expected}, alınan \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Fâsit giren: umulan \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Fâsit tercih: mûteberler \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Fazla büyük: \${issue2.origin ?? "value"}, \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elements"} sahip olmalıydı.\`;
        return \`Fazla büyük: \${issue2.origin ?? "value"}, \${adj}\${issue2.maximum.toString()} olmalıydı.\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Fazla küçük: \${issue2.origin}, \${adj}\${issue2.minimum.toString()} \${sizing.unit} sahip olmalıydı.\`;
        }
        return \`Fazla küçük: \${issue2.origin}, \${adj}\${issue2.minimum.toString()} olmalıydı.\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Fâsit metin: "\${_issue.prefix}" ile başlamalı.\`;
        if (_issue.format === "ends_with")
          return \`Fâsit metin: "\${_issue.suffix}" ile bitmeli.\`;
        if (_issue.format === "includes")
          return \`Fâsit metin: "\${_issue.includes}" ihtivâ etmeli.\`;
        if (_issue.format === "regex")
          return \`Fâsit metin: \${_issue.pattern} nakşına uymalı.\`;
        return \`Fâsit \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Fâsit sayı: \${issue2.divisor} katı olmalıydı.\`;
      case "unrecognized_keys":
        return \`Tanınmayan anahtar \${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} için tanınmayan anahtar var.\`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return \`\${issue2.origin} için tanınmayan kıymet var.\`;
      default:
        return \`Kıymet tanınamadı.\`;
    }
  };
};
function ota_default() {
  return {
    localeError: error31()
  };
}
// node_modules/zod/v4/locales/ps.js
var error32 = () => {
  const Sizable = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "ارې"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`ناسم ورودي: باید instanceof \${issue2.expected} وای, مګر \${received} ترلاسه شو\`;
        }
        return \`ناسم ورودي: باید \${expected} وای, مګر \${received} ترلاسه شو\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return \`ناسم ورودي: باید \${stringifyPrimitive(issue2.values[0])} وای\`;
        }
        return \`ناسم انتخاب: باید یو له \${joinValues(issue2.values, "|")} څخه وای\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`ډیر لوی: \${issue2.origin ?? "ارزښت"} باید \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "عنصرونه"} ولري\`;
        }
        return \`ډیر لوی: \${issue2.origin ?? "ارزښت"} باید \${adj}\${issue2.maximum.toString()} وي\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`ډیر کوچنی: \${issue2.origin} باید \${adj}\${issue2.minimum.toString()} \${sizing.unit} ولري\`;
        }
        return \`ډیر کوچنی: \${issue2.origin} باید \${adj}\${issue2.minimum.toString()} وي\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`ناسم متن: باید د "\${_issue.prefix}" سره پیل شي\`;
        }
        if (_issue.format === "ends_with") {
          return \`ناسم متن: باید د "\${_issue.suffix}" سره پای ته ورسيږي\`;
        }
        if (_issue.format === "includes") {
          return \`ناسم متن: باید "\${_issue.includes}" ولري\`;
        }
        if (_issue.format === "regex") {
          return \`ناسم متن: باید د \${_issue.pattern} سره مطابقت ولري\`;
        }
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} ناسم دی\`;
      }
      case "not_multiple_of":
        return \`ناسم عدد: باید د \${issue2.divisor} مضرب وي\`;
      case "unrecognized_keys":
        return \`ناسم \${issue2.keys.length > 1 ? "کلیډونه" : "کلیډ"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`ناسم کلیډ په \${issue2.origin} کې\`;
      case "invalid_union":
        return \`ناسمه ورودي\`;
      case "invalid_element":
        return \`ناسم عنصر په \${issue2.origin} کې\`;
      default:
        return \`ناسمه ورودي\`;
    }
  };
};
function ps_default() {
  return {
    localeError: error32()
  };
}
// node_modules/zod/v4/locales/pl.js
var error33 = () => {
  const Sizable = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Nieprawidłowe dane wejściowe: oczekiwano instanceof \${issue2.expected}, otrzymano \${received}\`;
        }
        return \`Nieprawidłowe dane wejściowe: oczekiwano \${expected}, otrzymano \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Nieprawidłowe dane wejściowe: oczekiwano \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Nieprawidłowa opcja: oczekiwano jednej z wartości \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Za duża wartość: oczekiwano, że \${issue2.origin ?? "wartość"} będzie mieć \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementów"}\`;
        }
        return \`Zbyt duż(y/a/e): oczekiwano, że \${issue2.origin ?? "wartość"} będzie wynosić \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Za mała wartość: oczekiwano, że \${issue2.origin ?? "wartość"} będzie mieć \${adj}\${issue2.minimum.toString()} \${sizing.unit ?? "elementów"}\`;
        }
        return \`Zbyt mał(y/a/e): oczekiwano, że \${issue2.origin ?? "wartość"} będzie wynosić \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Nieprawidłowy ciąg znaków: musi zaczynać się od "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Nieprawidłowy ciąg znaków: musi kończyć się na "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Nieprawidłowy ciąg znaków: musi zawierać "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi \${_issue.pattern}\`;
        return \`Nieprawidłow(y/a/e) \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Nieprawidłowa liczba: musi być wielokrotnością \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Nierozpoznane klucze\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Nieprawidłowy klucz w \${issue2.origin}\`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return \`Nieprawidłowa wartość w \${issue2.origin}\`;
      default:
        return \`Nieprawidłowe dane wejściowe\`;
    }
  };
};
function pl_default() {
  return {
    localeError: error33()
  };
}
// node_modules/zod/v4/locales/pt.js
var error34 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "número",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Tipo inválido: esperado instanceof \${issue2.expected}, recebido \${received}\`;
        }
        return \`Tipo inválido: esperado \${expected}, recebido \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Entrada inválida: esperado \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Opção inválida: esperada uma das \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Muito grande: esperado que \${issue2.origin ?? "valor"} tivesse \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementos"}\`;
        return \`Muito grande: esperado que \${issue2.origin ?? "valor"} fosse \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Muito pequeno: esperado que \${issue2.origin} tivesse \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Muito pequeno: esperado que \${issue2.origin} fosse \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Texto inválido: deve começar com "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Texto inválido: deve terminar com "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Texto inválido: deve incluir "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Texto inválido: deve corresponder ao padrão \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} inválido\`;
      }
      case "not_multiple_of":
        return \`Número inválido: deve ser múltiplo de \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Chave\${issue2.keys.length > 1 ? "s" : ""} desconhecida\${issue2.keys.length > 1 ? "s" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Chave inválida em \${issue2.origin}\`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return \`Valor inválido em \${issue2.origin}\`;
      default:
        return \`Campo inválido\`;
    }
  };
};
function pt_default() {
  return {
    localeError: error34()
  };
}
// node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error35 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "массив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Неверный ввод: ожидалось instanceof \${issue2.expected}, получено \${received}\`;
        }
        return \`Неверный ввод: ожидалось \${expected}, получено \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Неверный ввод: ожидалось \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Неверный вариант: ожидалось одно из \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return \`Слишком большое значение: ожидалось, что \${issue2.origin ?? "значение"} будет иметь \${adj}\${issue2.maximum.toString()} \${unit}\`;
        }
        return \`Слишком большое значение: ожидалось, что \${issue2.origin ?? "значение"} будет \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return \`Слишком маленькое значение: ожидалось, что \${issue2.origin} будет иметь \${adj}\${issue2.minimum.toString()} \${unit}\`;
        }
        return \`Слишком маленькое значение: ожидалось, что \${issue2.origin} будет \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Неверная строка: должна начинаться с "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Неверная строка: должна заканчиваться на "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Неверная строка: должна содержать "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Неверная строка: должна соответствовать шаблону \${_issue.pattern}\`;
        return \`Неверный \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Неверное число: должно быть кратным \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Нераспознанн\${issue2.keys.length > 1 ? "ые" : "ый"} ключ\${issue2.keys.length > 1 ? "и" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Неверный ключ в \${issue2.origin}\`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return \`Неверное значение в \${issue2.origin}\`;
      default:
        return \`Неверные входные данные\`;
    }
  };
};
function ru_default() {
  return {
    localeError: error35()
  };
}
// node_modules/zod/v4/locales/sl.js
var error36 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "število",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Neveljaven vnos: pričakovano instanceof \${issue2.expected}, prejeto \${received}\`;
        }
        return \`Neveljaven vnos: pričakovano \${expected}, prejeto \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Neveljaven vnos: pričakovano \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Neveljavna možnost: pričakovano eno izmed \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Preveliko: pričakovano, da bo \${issue2.origin ?? "vrednost"} imelo \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "elementov"}\`;
        return \`Preveliko: pričakovano, da bo \${issue2.origin ?? "vrednost"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Premajhno: pričakovano, da bo \${issue2.origin} imelo \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Premajhno: pričakovano, da bo \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Neveljaven niz: mora se začeti z "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Neveljaven niz: mora se končati z "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Neveljaven niz: mora vsebovati "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Neveljaven niz: mora ustrezati vzorcu \${_issue.pattern}\`;
        return \`Neveljaven \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Neveljavno število: mora biti večkratnik \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Neprepoznan\${issue2.keys.length > 1 ? "i ključi" : " ključ"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Neveljaven ključ v \${issue2.origin}\`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return \`Neveljavna vrednost v \${issue2.origin}\`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error36()
  };
}
// node_modules/zod/v4/locales/sv.js
var error37 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ogiltig inmatning: förväntat instanceof \${issue2.expected}, fick \${received}\`;
        }
        return \`Ogiltig inmatning: förväntat \${expected}, fick \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ogiltig inmatning: förväntat \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Ogiltigt val: förväntade en av \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`För stor(t): förväntade \${issue2.origin ?? "värdet"} att ha \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "element"}\`;
        }
        return \`För stor(t): förväntat \${issue2.origin ?? "värdet"} att ha \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`För lite(t): förväntade \${issue2.origin ?? "värdet"} att ha \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`För lite(t): förväntade \${issue2.origin ?? "värdet"} att ha \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`Ogiltig sträng: måste börja med "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`Ogiltig sträng: måste sluta med "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Ogiltig sträng: måste innehålla "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Ogiltig sträng: måste matcha mönstret "\${_issue.pattern}"\`;
        return \`Ogiltig(t) \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Ogiltigt tal: måste vara en multipel av \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`\${issue2.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Ogiltig nyckel i \${issue2.origin ?? "värdet"}\`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return \`Ogiltigt värde i \${issue2.origin ?? "värdet"}\`;
      default:
        return \`Ogiltig input\`;
    }
  };
};
function sv_default() {
  return {
    localeError: error37()
  };
}
// node_modules/zod/v4/locales/ta.js
var error38 = () => {
  const Sizable = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "எண்",
    array: "அணி",
    null: "வெறுமை"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof \${issue2.expected}, பெறப்பட்டது \${received}\`;
        }
        return \`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது \${expected}, பெறப்பட்டது \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது \${stringifyPrimitive(issue2.values[0])}\`;
        return \`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது \${joinValues(issue2.values, "|")} இல் ஒன்று\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`மிக பெரியது: எதிர்பார்க்கப்பட்டது \${issue2.origin ?? "மதிப்பு"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்\`;
        }
        return \`மிக பெரியது: எதிர்பார்க்கப்பட்டது \${issue2.origin ?? "மதிப்பு"} \${adj}\${issue2.maximum.toString()} ஆக இருக்க வேண்டும்\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit} ஆக இருக்க வேண்டும்\`;
        }
        return \`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது \${issue2.origin} \${adj}\${issue2.minimum.toString()} ஆக இருக்க வேண்டும்\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`தவறான சரம்: "\${_issue.prefix}" இல் தொடங்க வேண்டும்\`;
        if (_issue.format === "ends_with")
          return \`தவறான சரம்: "\${_issue.suffix}" இல் முடிவடைய வேண்டும்\`;
        if (_issue.format === "includes")
          return \`தவறான சரம்: "\${_issue.includes}" ஐ உள்ளடக்க வேண்டும்\`;
        if (_issue.format === "regex")
          return \`தவறான சரம்: \${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்\`;
        return \`தவறான \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`தவறான எண்: \${issue2.divisor} இன் பலமாக இருக்க வேண்டும்\`;
      case "unrecognized_keys":
        return \`அடையாளம் தெரியாத விசை\${issue2.keys.length > 1 ? "கள்" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} இல் தவறான விசை\`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return \`\${issue2.origin} இல் தவறான மதிப்பு\`;
      default:
        return \`தவறான உள்ளீடு\`;
    }
  };
};
function ta_default() {
  return {
    localeError: error38()
  };
}
// node_modules/zod/v4/locales/th.js
var error39 = () => {
  const Sizable = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "ตัวเลข",
    array: "อาร์เรย์ (Array)",
    null: "ไม่มีค่า (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof \${issue2.expected} แต่ได้รับ \${received}\`;
        }
        return \`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น \${expected} แต่ได้รับ \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`ค่าไม่ถูกต้อง: ควรเป็น \${stringifyPrimitive(issue2.values[0])}\`;
        return \`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "ไม่เกิน" : "น้อยกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`เกินกำหนด: \${issue2.origin ?? "ค่า"} ควรมี\${adj} \${issue2.maximum.toString()} \${sizing.unit ?? "รายการ"}\`;
        return \`เกินกำหนด: \${issue2.origin ?? "ค่า"} ควรมี\${adj} \${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "อย่างน้อย" : "มากกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`น้อยกว่ากำหนด: \${issue2.origin} ควรมี\${adj} \${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`น้อยกว่ากำหนด: \${issue2.origin} ควรมี\${adj} \${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "\${_issue.prefix}"\`;
        }
        if (_issue.format === "ends_with")
          return \`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "\${_issue.includes}" อยู่ในข้อความ\`;
        if (_issue.format === "regex")
          return \`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด \${_issue.pattern}\`;
        return \`รูปแบบไม่ถูกต้อง: \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย \${issue2.divisor} ได้ลงตัว\`;
      case "unrecognized_keys":
        return \`พบคีย์ที่ไม่รู้จัก: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`คีย์ไม่ถูกต้องใน \${issue2.origin}\`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return \`ข้อมูลไม่ถูกต้องใน \${issue2.origin}\`;
      default:
        return \`ข้อมูลไม่ถูกต้อง\`;
    }
  };
};
function th_default() {
  return {
    localeError: error39()
  };
}
// node_modules/zod/v4/locales/tr.js
var error40 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Geçersiz değer: beklenen instanceof \${issue2.expected}, alınan \${received}\`;
        }
        return \`Geçersiz değer: beklenen \${expected}, alınan \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Geçersiz değer: beklenen \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Geçersiz seçenek: aşağıdakilerden biri olmalı: \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Çok büyük: beklenen \${issue2.origin ?? "değer"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "öğe"}\`;
        return \`Çok büyük: beklenen \${issue2.origin ?? "değer"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Çok küçük: beklenen \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        return \`Çok küçük: beklenen \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Geçersiz metin: "\${_issue.prefix}" ile başlamalı\`;
        if (_issue.format === "ends_with")
          return \`Geçersiz metin: "\${_issue.suffix}" ile bitmeli\`;
        if (_issue.format === "includes")
          return \`Geçersiz metin: "\${_issue.includes}" içermeli\`;
        if (_issue.format === "regex")
          return \`Geçersiz metin: \${_issue.pattern} desenine uymalı\`;
        return \`Geçersiz \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Geçersiz sayı: \${issue2.divisor} ile tam bölünebilmeli\`;
      case "unrecognized_keys":
        return \`Tanınmayan anahtar\${issue2.keys.length > 1 ? "lar" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} içinde geçersiz anahtar\`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return \`\${issue2.origin} içinde geçersiz değer\`;
      default:
        return \`Geçersiz değer\`;
    }
  };
};
function tr_default() {
  return {
    localeError: error40()
  };
}
// node_modules/zod/v4/locales/uk.js
var error41 = () => {
  const Sizable = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Неправильні вхідні дані: очікується instanceof \${issue2.expected}, отримано \${received}\`;
        }
        return \`Неправильні вхідні дані: очікується \${expected}, отримано \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Неправильні вхідні дані: очікується \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Неправильна опція: очікується одне з \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Занадто велике: очікується, що \${issue2.origin ?? "значення"} \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "елементів"}\`;
        return \`Занадто велике: очікується, що \${issue2.origin ?? "значення"} буде \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Занадто мале: очікується, що \${issue2.origin} \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Занадто мале: очікується, що \${issue2.origin} буде \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Неправильний рядок: повинен починатися з "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Неправильний рядок: повинен закінчуватися на "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Неправильний рядок: повинен містити "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Неправильний рядок: повинен відповідати шаблону \${_issue.pattern}\`;
        return \`Неправильний \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Неправильне число: повинно бути кратним \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Нерозпізнаний ключ\${issue2.keys.length > 1 ? "і" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Неправильний ключ у \${issue2.origin}\`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return \`Неправильне значення у \${issue2.origin}\`;
      default:
        return \`Неправильні вхідні дані\`;
    }
  };
};
function uk_default() {
  return {
    localeError: error41()
  };
}

// node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}
// node_modules/zod/v4/locales/ur.js
var error42 = () => {
  const Sizable = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "نمبر",
    array: "آرے",
    null: "نل"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`غلط ان پٹ: instanceof \${issue2.expected} متوقع تھا، \${received} موصول ہوا\`;
        }
        return \`غلط ان پٹ: \${expected} متوقع تھا، \${received} موصول ہوا\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`غلط ان پٹ: \${stringifyPrimitive(issue2.values[0])} متوقع تھا\`;
        return \`غلط آپشن: \${joinValues(issue2.values, "|")} میں سے ایک متوقع تھا\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`بہت بڑا: \${issue2.origin ?? "ویلیو"} کے \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "عناصر"} ہونے متوقع تھے\`;
        return \`بہت بڑا: \${issue2.origin ?? "ویلیو"} کا \${adj}\${issue2.maximum.toString()} ہونا متوقع تھا\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`بہت چھوٹا: \${issue2.origin} کے \${adj}\${issue2.minimum.toString()} \${sizing.unit} ہونے متوقع تھے\`;
        }
        return \`بہت چھوٹا: \${issue2.origin} کا \${adj}\${issue2.minimum.toString()} ہونا متوقع تھا\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`غلط سٹرنگ: "\${_issue.prefix}" سے شروع ہونا چاہیے\`;
        }
        if (_issue.format === "ends_with")
          return \`غلط سٹرنگ: "\${_issue.suffix}" پر ختم ہونا چاہیے\`;
        if (_issue.format === "includes")
          return \`غلط سٹرنگ: "\${_issue.includes}" شامل ہونا چاہیے\`;
        if (_issue.format === "regex")
          return \`غلط سٹرنگ: پیٹرن \${_issue.pattern} سے میچ ہونا چاہیے\`;
        return \`غلط \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`غلط نمبر: \${issue2.divisor} کا مضاعف ہونا چاہیے\`;
      case "unrecognized_keys":
        return \`غیر تسلیم شدہ کی\${issue2.keys.length > 1 ? "ز" : ""}: \${joinValues(issue2.keys, "، ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} میں غلط کی\`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return \`\${issue2.origin} میں غلط ویلیو\`;
      default:
        return \`غلط ان پٹ\`;
    }
  };
};
function ur_default() {
  return {
    localeError: error42()
  };
}
// node_modules/zod/v4/locales/uz.js
var error43 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo‘lishi kerak" },
    file: { unit: "bayt", verb: "bo‘lishi kerak" },
    array: { unit: "element", verb: "bo‘lishi kerak" },
    set: { unit: "element", verb: "bo‘lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Noto‘g‘ri kirish: kutilgan instanceof \${issue2.expected}, qabul qilingan \${received}\`;
        }
        return \`Noto‘g‘ri kirish: kutilgan \${expected}, qabul qilingan \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Noto‘g‘ri kirish: kutilgan \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Noto‘g‘ri variant: quyidagilardan biri kutilgan \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Juda katta: kutilgan \${issue2.origin ?? "qiymat"} \${adj}\${issue2.maximum.toString()} \${sizing.unit} \${sizing.verb}\`;
        return \`Juda katta: kutilgan \${issue2.origin ?? "qiymat"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Juda kichik: kutilgan \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit} \${sizing.verb}\`;
        }
        return \`Juda kichik: kutilgan \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Noto‘g‘ri satr: "\${_issue.prefix}" bilan boshlanishi kerak\`;
        if (_issue.format === "ends_with")
          return \`Noto‘g‘ri satr: "\${_issue.suffix}" bilan tugashi kerak\`;
        if (_issue.format === "includes")
          return \`Noto‘g‘ri satr: "\${_issue.includes}" ni o‘z ichiga olishi kerak\`;
        if (_issue.format === "regex")
          return \`Noto‘g‘ri satr: \${_issue.pattern} shabloniga mos kelishi kerak\`;
        return \`Noto‘g‘ri \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Noto‘g‘ri raqam: \${issue2.divisor} ning karralisi bo‘lishi kerak\`;
      case "unrecognized_keys":
        return \`Noma’lum kalit\${issue2.keys.length > 1 ? "lar" : ""}: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} dagi kalit noto‘g‘ri\`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return \`\${issue2.origin} da noto‘g‘ri qiymat\`;
      default:
        return \`Noto‘g‘ri kirish\`;
    }
  };
};
function uz_default() {
  return {
    localeError: error43()
  };
}
// node_modules/zod/v4/locales/vi.js
var error44 = () => {
  const Sizable = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "số",
    array: "mảng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Đầu vào không hợp lệ: mong đợi instanceof \${issue2.expected}, nhận được \${received}\`;
        }
        return \`Đầu vào không hợp lệ: mong đợi \${expected}, nhận được \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Đầu vào không hợp lệ: mong đợi \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Tùy chọn không hợp lệ: mong đợi một trong các giá trị \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Quá lớn: mong đợi \${issue2.origin ?? "giá trị"} \${sizing.verb} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "phần tử"}\`;
        return \`Quá lớn: mong đợi \${issue2.origin ?? "giá trị"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`Quá nhỏ: mong đợi \${issue2.origin} \${sizing.verb} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`Quá nhỏ: mong đợi \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Chuỗi không hợp lệ: phải bắt đầu bằng "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Chuỗi không hợp lệ: phải kết thúc bằng "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Chuỗi không hợp lệ: phải bao gồm "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Chuỗi không hợp lệ: phải khớp với mẫu \${_issue.pattern}\`;
        return \`\${FormatDictionary[_issue.format] ?? issue2.format} không hợp lệ\`;
      }
      case "not_multiple_of":
        return \`Số không hợp lệ: phải là bội số của \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Khóa không được nhận dạng: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Khóa không hợp lệ trong \${issue2.origin}\`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return \`Giá trị không hợp lệ trong \${issue2.origin}\`;
      default:
        return \`Đầu vào không hợp lệ\`;
    }
  };
};
function vi_default() {
  return {
    localeError: error44()
  };
}
// node_modules/zod/v4/locales/zh-CN.js
var error45 = () => {
  const Sizable = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数字",
    array: "数组",
    null: "空值(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`无效输入：期望 instanceof \${issue2.expected}，实际接收 \${received}\`;
        }
        return \`无效输入：期望 \${expected}，实际接收 \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`无效输入：期望 \${stringifyPrimitive(issue2.values[0])}\`;
        return \`无效选项：期望以下之一 \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`数值过大：期望 \${issue2.origin ?? "值"} \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "个元素"}\`;
        return \`数值过大：期望 \${issue2.origin ?? "值"} \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`数值过小：期望 \${issue2.origin} \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`数值过小：期望 \${issue2.origin} \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`无效字符串：必须以 "\${_issue.prefix}" 开头\`;
        if (_issue.format === "ends_with")
          return \`无效字符串：必须以 "\${_issue.suffix}" 结尾\`;
        if (_issue.format === "includes")
          return \`无效字符串：必须包含 "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`无效字符串：必须满足正则表达式 \${_issue.pattern}\`;
        return \`无效\${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`无效数字：必须是 \${issue2.divisor} 的倍数\`;
      case "unrecognized_keys":
        return \`出现未知的键(key): \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`\${issue2.origin} 中的键(key)无效\`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return \`\${issue2.origin} 中包含无效值(value)\`;
      default:
        return \`无效输入\`;
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error45()
  };
}
// node_modules/zod/v4/locales/zh-TW.js
var error46 = () => {
  const Sizable = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`無效的輸入值：預期為 instanceof \${issue2.expected}，但收到 \${received}\`;
        }
        return \`無效的輸入值：預期為 \${expected}，但收到 \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`無效的輸入值：預期為 \${stringifyPrimitive(issue2.values[0])}\`;
        return \`無效的選項：預期為以下其中之一 \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`數值過大：預期 \${issue2.origin ?? "值"} 應為 \${adj}\${issue2.maximum.toString()} \${sizing.unit ?? "個元素"}\`;
        return \`數值過大：預期 \${issue2.origin ?? "值"} 應為 \${adj}\${issue2.maximum.toString()}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return \`數值過小：預期 \${issue2.origin} 應為 \${adj}\${issue2.minimum.toString()} \${sizing.unit}\`;
        }
        return \`數值過小：預期 \${issue2.origin} 應為 \${adj}\${issue2.minimum.toString()}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return \`無效的字串：必須以 "\${_issue.prefix}" 開頭\`;
        }
        if (_issue.format === "ends_with")
          return \`無效的字串：必須以 "\${_issue.suffix}" 結尾\`;
        if (_issue.format === "includes")
          return \`無效的字串：必須包含 "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`無效的字串：必須符合格式 \${_issue.pattern}\`;
        return \`無效的 \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`無效的數字：必須為 \${issue2.divisor} 的倍數\`;
      case "unrecognized_keys":
        return \`無法識別的鍵值\${issue2.keys.length > 1 ? "們" : ""}：\${joinValues(issue2.keys, "、")}\`;
      case "invalid_key":
        return \`\${issue2.origin} 中有無效的鍵值\`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return \`\${issue2.origin} 中有無效的值\`;
      default:
        return \`無效的輸入值\`;
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error46()
  };
}
// node_modules/zod/v4/locales/yo.js
var error47 = () => {
  const Sizable = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nọ́mbà",
    array: "akopọ"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return \`Ìbáwọlé aṣìṣe: a ní láti fi instanceof \${issue2.expected}, àmọ̀ a rí \${received}\`;
        }
        return \`Ìbáwọlé aṣìṣe: a ní láti fi \${expected}, àmọ̀ a rí \${received}\`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return \`Ìbáwọlé aṣìṣe: a ní láti fi \${stringifyPrimitive(issue2.values[0])}\`;
        return \`Àṣàyàn aṣìṣe: yan ọ̀kan lára \${joinValues(issue2.values, "|")}\`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Tó pọ̀ jù: a ní láti jẹ́ pé \${issue2.origin ?? "iye"} \${sizing.verb} \${adj}\${issue2.maximum} \${sizing.unit}\`;
        return \`Tó pọ̀ jù: a ní láti jẹ́ \${adj}\${issue2.maximum}\`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return \`Kéré ju: a ní láti jẹ́ pé \${issue2.origin} \${sizing.verb} \${adj}\${issue2.minimum} \${sizing.unit}\`;
        return \`Kéré ju: a ní láti jẹ́ \${adj}\${issue2.minimum}\`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return \`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "\${_issue.prefix}"\`;
        if (_issue.format === "ends_with")
          return \`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "\${_issue.suffix}"\`;
        if (_issue.format === "includes")
          return \`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "\${_issue.includes}"\`;
        if (_issue.format === "regex")
          return \`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu \${_issue.pattern}\`;
        return \`Aṣìṣe: \${FormatDictionary[_issue.format] ?? issue2.format}\`;
      }
      case "not_multiple_of":
        return \`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti \${issue2.divisor}\`;
      case "unrecognized_keys":
        return \`Bọtìnì àìmọ̀: \${joinValues(issue2.keys, ", ")}\`;
      case "invalid_key":
        return \`Bọtìnì aṣìṣe nínú \${issue2.origin}\`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return \`Iye aṣìṣe nínú \${issue2.origin}\`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function yo_default() {
  return {
    localeError: error47()
  };
}
// node_modules/zod/v4/core/registries.js
var _a;
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");

class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry;
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// node_modules/zod/v4/core/api.js
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _positive(params) {
  return _gt(0, params);
}
function _negative(params) {
  return _lt(0, params);
}
function _nonpositive(params) {
  return _lte(0, params);
}
function _nonnegative(params) {
  return _gte(0, params);
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
function _trim() {
  return _overwrite((input) => input.trim());
}
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
function _slugify() {
  return _overwrite((input) => slugify(input));
}
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
function _superRefine(fn) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: (input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec,
          continue: false
        });
        return {};
      }
    },
    reverseTransform: (input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    },
    error: params.error
  });
  return codec;
}
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}
// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? undefined
  };
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(\`[toJSONSchema]: Non-representable type encountered: \${def.type}\`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta2 = ctx.metadataRegistry.get(schema);
  if (meta2)
    Object.assign(result.schema, meta2);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(\`Duplicate schema id "\${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.\`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? \`schema\${ctx.counter++}\`;
      entry[1].defId = id;
      return { defId: id, ref: \`\${uriGenerator("__shared")}#/\${defsSegment}/\${id}\` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = \`#\`;
    const defUriPrefix = \`\${uriPrefix}/\${defsSegment}/\`;
    const defId = entry[1].schema.id ?? \`__schema\${ctx.counter++}\`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + \`#/\${seen.cycle?.join("/")}/<root>\` + '\\n\\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an \`id\` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
// node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time") {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json.type = "integer";
  else
    json.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json.minimum;
      else
        delete json.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json.maximum;
      else
        delete json.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
};
var nullProcessor = (_schema, ctx, json, _params) => {
  if (ctx.target === "openapi-3.0") {
    json.type = "string";
    json.nullable = true;
    json.enum = [null];
  } else {
    json.type = "null";
  }
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
};
var voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor = (schema, ctx, json, _params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === undefined) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal \`undefined\` cannot be represented in JSON Schema");
      }
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {} else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  const file = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== undefined)
    file.minLength = minimum;
  if (maximum !== undefined)
    file.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file.contentMediaType = mime[0];
      Object.assign(_json, file);
    } else {
      Object.assign(_json, file);
      _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
    }
  } else {
    Object.assign(_json, file);
  }
};
var successProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
};
var setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  json.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json.properties[key] = process(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === undefined;
    } else {
      return v.optout === undefined;
    }
  }));
  if (requiredKeys.size > 0) {
    json.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = process(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json.prefixItems = prefixItems;
    if (rest) {
      json.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json.items.anyOf.push(rest);
    }
    json.minItems = prefixItems.length;
    if (!rest) {
      json.maxItems = prefixItems.length;
    }
  } else {
    json.items = prefixItems;
    if (rest) {
      json.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (const pattern of patterns) {
      json.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = process(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json.additionalProperties = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      process(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}
// node_modules/zod/v4/core/json-schema-generator.js
class JSONSchemaGenerator {
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process(schema, this.ctx, _params);
  }
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
}
// node_modules/zod/v4/core/json-schema.js
var exports_json_schema = {};
// node_modules/zod/v4/classic/schemas.js
var exports_schemas2 = {};
__export(exports_schemas2, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid2,
  url: () => url,
  unknown: () => unknown,
  union: () => union,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  transform: () => transform,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  set: () => set,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  promise: () => promise,
  preprocess: () => preprocess,
  prefault: () => prefault,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  nonoptional: () => nonoptional,
  never: () => never,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  meta: () => meta2,
  map: () => map,
  mac: () => mac2,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  literal: () => literal,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  function: () => _function,
  float64: () => float64,
  float32: () => float32,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  date: () => date3,
  custom: () => custom,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  codec: () => codec,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean2,
  bigint: () => bigint2,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIntersection: () => ZodIntersection,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny
});

// node_modules/zod/v4/classic/checks.js
var exports_checks2 = {};
__export(exports_checks2, {
  uppercase: () => _uppercase,
  trim: () => _trim,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  regex: () => _regex,
  property: () => _property,
  positive: () => _positive,
  overwrite: () => _overwrite,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonnegative: () => _nonnegative,
  negative: () => _negative,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  length: () => _length,
  includes: () => _includes,
  gte: () => _gte,
  gt: () => _gt,
  endsWith: () => _endsWith
});

// node_modules/zod/v4/classic/iso.js
var exports_iso = {};
__export(exports_iso, {
  time: () => time2,
  duration: () => duration2,
  datetime: () => datetime2,
  date: () => date2,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
    }
  });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse3 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode2 = /* @__PURE__ */ _encode(ZodRealError);
var decode2 = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks2) => {
    return inst.clone(exports_util.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...checks2.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), {
      parent: true
    });
  };
  inst.with = inst.check;
  inst.clone = (def2, params) => clone(inst, def2, params);
  inst.brand = () => inst;
  inst.register = (reg, meta2) => {
    reg.add(inst, meta2);
    return inst;
  };
  inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode2(inst, data, params);
  inst.decode = (data, params) => decode2(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
  inst.refine = (check, params) => inst.check(refine(check, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite(fn));
  inst.optional = () => optional(inst);
  inst.exactOptional = () => exactOptional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def2) => _default2(inst, def2);
  inst.prefault = (def2) => prefault(inst, def2);
  inst.catch = (params) => _catch2(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(undefined).success;
  inst.isNullable = () => inst.safeParse(null).success;
  inst.apply = (fn) => fn(inst);
  return inst;
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  inst.regex = (...args) => inst.check(_regex(...args));
  inst.includes = (...args) => inst.check(_includes(...args));
  inst.startsWith = (...args) => inst.check(_startsWith(...args));
  inst.endsWith = (...args) => inst.check(_endsWith(...args));
  inst.min = (...args) => inst.check(_minLength(...args));
  inst.max = (...args) => inst.check(_maxLength(...args));
  inst.length = (...args) => inst.check(_length(...args));
  inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
  inst.lowercase = (params) => inst.check(_lowercase(params));
  inst.uppercase = (params) => inst.check(_uppercase(params));
  inst.trim = () => inst.check(_trim());
  inst.normalize = (...args) => inst.check(_normalize(...args));
  inst.toLowerCase = () => inst.check(_toLowerCase());
  inst.toUpperCase = () => inst.check(_toUpperCase());
  inst.slugify = () => inst.check(_slugify());
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
  inst.email = (params) => inst.check(_email(ZodEmail, params));
  inst.url = (params) => inst.check(_url(ZodURL, params));
  inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(_xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(_e164(ZodE164, params));
  inst.datetime = (params) => inst.check(datetime2(params));
  inst.date = (params) => inst.check(date2(params));
  inst.time = (params) => inst.check(time2(params));
  inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: /^https?$/,
    hostname: exports_regexes.domain,
    ...exports_util.normalizeParams(params)
  });
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
  $ZodMAC.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", exports_regexes.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", exports_regexes.hex, _params);
}
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = \`\${alg}_\${enc}\`;
  const regex = exports_regexes[format];
  if (!regex)
    throw new Error(\`Unrecognized hash format: \${format}\`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(_gt(0, params));
  inst.nonnegative = (params) => inst.check(_gte(0, params));
  inst.negative = (params) => inst.check(_lt(0, params));
  inst.nonpositive = (params) => inst.check(_lte(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  inst.step = (value, params) => inst.check(_multipleOf(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => bigintProcessor(inst, ctx, json, params);
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.positive = (params) => inst.check(_gt(BigInt(0), params));
  inst.negative = (params) => inst.check(_lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => symbolProcessor(inst, ctx, json, params);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => undefinedProcessor(inst, ctx, json, params);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => anyProcessor(inst, ctx, json, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => voidProcessor(inst, ctx, json, params);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => dateProcessor(inst, ctx, json, params);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(_length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  exports_util.defineLazy(inst, "shape", () => {
    return def.shape;
  });
  inst.keyof = () => _enum2(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
  inst.extend = (incoming) => {
    return exports_util.extend(inst, incoming);
  };
  inst.safeExtend = (incoming) => {
    return exports_util.safeExtend(inst, incoming);
  };
  inst.merge = (other) => exports_util.merge(inst, other);
  inst.pick = (mask) => exports_util.pick(inst, mask);
  inst.omit = (mask) => exports_util.omit(inst, mask);
  inst.partial = (...args) => exports_util.partial(ZodOptional, inst, args[0]);
  inst.required = (...args) => exports_util.required(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...exports_util.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...exports_util.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...exports_util.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...exports_util.normalizeParams(params)
  });
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodXor.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: false,
    ...exports_util.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...exports_util.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => tupleProcessor(inst, ctx, json, params);
  inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...exports_util.normalizeParams(params)
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  const k = clone(keyType);
  k._zod.values = undefined;
  return new ZodRecord({
    type: "record",
    keyType: k,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...exports_util.normalizeParams(params)
  });
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => mapProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => setProcessor(inst, ctx, json, params);
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(\`Key \${value} not found in enum\`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(\`Key \${value} not found in enum\`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use \`.values\` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...exports_util.normalizeParams(params)
  });
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => fileProcessor(inst, ctx, json, params);
  inst.min = (size, params) => inst.check(_minSize(size, params));
  inst.max = (size, params) => inst.check(_maxSize(size, params));
  inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(exports_util.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(exports_util.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => successProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nanProcessor(inst, ctx, json, params);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => templateLiteralProcessor(inst, ctx, json, params);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...exports_util.normalizeParams(params)
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => promiseProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
  $ZodFunction.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => functionProcessor(inst, ctx, json, params);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
    output: params?.output ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
  });
  ch._zod.check = fn;
  return ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
var describe2 = describe;
var meta2 = meta;
function _instanceof(cls, params = {}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...exports_util.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
function json(params) {
  const jsonSchema = lazy(() => {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema) {
  return pipe(transform(fn), schema);
}
// node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// node_modules/zod/v4/classic/from-json-schema.js
var z = {
  ...exports_schemas2,
  ...exports_checks2,
  iso: exports_iso
};
var RECOGNIZED_KEYS = new Set([
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  "type",
  "enum",
  "const",
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  "minLength",
  "maxLength",
  "pattern",
  "format",
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  "description",
  "default",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  "nullable",
  "readOnly"
]);
function detectVersion(schema, defaultTarget) {
  const $schema = schema.$schema;
  if ($schema === "https://json-schema.org/draft/2020-12/schema") {
    return "draft-2020-12";
  }
  if ($schema === "http://json-schema.org/draft-07/schema#") {
    return "draft-7";
  }
  if ($schema === "http://json-schema.org/draft-04/schema#") {
    return "draft-4";
  }
  return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#")) {
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  }
  const path = ref.slice(1).split("/").filter(Boolean);
  if (path.length === 0) {
    return ctx.rootSchema;
  }
  const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path[0] === defsKey) {
    const key = path[1];
    if (!key || !ctx.defs[key]) {
      throw new Error(\`Reference not found: \${ref}\`);
    }
    return ctx.defs[key];
  }
  throw new Error(\`Reference not found: \${ref}\`);
}
function convertBaseSchema(schema, ctx) {
  if (schema.not !== undefined) {
    if (typeof schema.not === "object" && Object.keys(schema.not).length === 0) {
      return z.never();
    }
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema.unevaluatedItems !== undefined) {
    throw new Error("unevaluatedItems is not supported");
  }
  if (schema.unevaluatedProperties !== undefined) {
    throw new Error("unevaluatedProperties is not supported");
  }
  if (schema.if !== undefined || schema.then !== undefined || schema.else !== undefined) {
    throw new Error("Conditional schemas (if/then/else) are not supported");
  }
  if (schema.dependentSchemas !== undefined || schema.dependentRequired !== undefined) {
    throw new Error("dependentSchemas and dependentRequired are not supported");
  }
  if (schema.$ref) {
    const refPath = schema.$ref;
    if (ctx.refs.has(refPath)) {
      return ctx.refs.get(refPath);
    }
    if (ctx.processing.has(refPath)) {
      return z.lazy(() => {
        if (!ctx.refs.has(refPath)) {
          throw new Error(\`Circular reference not resolved: \${refPath}\`);
        }
        return ctx.refs.get(refPath);
      });
    }
    ctx.processing.add(refPath);
    const resolved = resolveRef(refPath, ctx);
    const zodSchema2 = convertSchema(resolved, ctx);
    ctx.refs.set(refPath, zodSchema2);
    ctx.processing.delete(refPath);
    return zodSchema2;
  }
  if (schema.enum !== undefined) {
    const enumValues = schema.enum;
    if (ctx.version === "openapi-3.0" && schema.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
      return z.null();
    }
    if (enumValues.length === 0) {
      return z.never();
    }
    if (enumValues.length === 1) {
      return z.literal(enumValues[0]);
    }
    if (enumValues.every((v) => typeof v === "string")) {
      return z.enum(enumValues);
    }
    const literalSchemas = enumValues.map((v) => z.literal(v));
    if (literalSchemas.length < 2) {
      return literalSchemas[0];
    }
    return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema.const !== undefined) {
    return z.literal(schema.const);
  }
  const type = schema.type;
  if (Array.isArray(type)) {
    const typeSchemas = type.map((t) => {
      const typeSchema = { ...schema, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    if (typeSchemas.length === 0) {
      return z.never();
    }
    if (typeSchemas.length === 1) {
      return typeSchemas[0];
    }
    return z.union(typeSchemas);
  }
  if (!type) {
    return z.any();
  }
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema.format) {
        const format = schema.format;
        if (format === "email") {
          stringSchema = stringSchema.check(z.email());
        } else if (format === "uri" || format === "uri-reference") {
          stringSchema = stringSchema.check(z.url());
        } else if (format === "uuid" || format === "guid") {
          stringSchema = stringSchema.check(z.uuid());
        } else if (format === "date-time") {
          stringSchema = stringSchema.check(z.iso.datetime());
        } else if (format === "date") {
          stringSchema = stringSchema.check(z.iso.date());
        } else if (format === "time") {
          stringSchema = stringSchema.check(z.iso.time());
        } else if (format === "duration") {
          stringSchema = stringSchema.check(z.iso.duration());
        } else if (format === "ipv4") {
          stringSchema = stringSchema.check(z.ipv4());
        } else if (format === "ipv6") {
          stringSchema = stringSchema.check(z.ipv6());
        } else if (format === "mac") {
          stringSchema = stringSchema.check(z.mac());
        } else if (format === "cidr") {
          stringSchema = stringSchema.check(z.cidrv4());
        } else if (format === "cidr-v6") {
          stringSchema = stringSchema.check(z.cidrv6());
        } else if (format === "base64") {
          stringSchema = stringSchema.check(z.base64());
        } else if (format === "base64url") {
          stringSchema = stringSchema.check(z.base64url());
        } else if (format === "e164") {
          stringSchema = stringSchema.check(z.e164());
        } else if (format === "jwt") {
          stringSchema = stringSchema.check(z.jwt());
        } else if (format === "emoji") {
          stringSchema = stringSchema.check(z.emoji());
        } else if (format === "nanoid") {
          stringSchema = stringSchema.check(z.nanoid());
        } else if (format === "cuid") {
          stringSchema = stringSchema.check(z.cuid());
        } else if (format === "cuid2") {
          stringSchema = stringSchema.check(z.cuid2());
        } else if (format === "ulid") {
          stringSchema = stringSchema.check(z.ulid());
        } else if (format === "xid") {
          stringSchema = stringSchema.check(z.xid());
        } else if (format === "ksuid") {
          stringSchema = stringSchema.check(z.ksuid());
        }
      }
      if (typeof schema.minLength === "number") {
        stringSchema = stringSchema.min(schema.minLength);
      }
      if (typeof schema.maxLength === "number") {
        stringSchema = stringSchema.max(schema.maxLength);
      }
      if (schema.pattern) {
        stringSchema = stringSchema.regex(new RegExp(schema.pattern));
      }
      zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      if (typeof schema.minimum === "number") {
        numberSchema = numberSchema.min(schema.minimum);
      }
      if (typeof schema.maximum === "number") {
        numberSchema = numberSchema.max(schema.maximum);
      }
      if (typeof schema.exclusiveMinimum === "number") {
        numberSchema = numberSchema.gt(schema.exclusiveMinimum);
      } else if (schema.exclusiveMinimum === true && typeof schema.minimum === "number") {
        numberSchema = numberSchema.gt(schema.minimum);
      }
      if (typeof schema.exclusiveMaximum === "number") {
        numberSchema = numberSchema.lt(schema.exclusiveMaximum);
      } else if (schema.exclusiveMaximum === true && typeof schema.maximum === "number") {
        numberSchema = numberSchema.lt(schema.maximum);
      }
      if (typeof schema.multipleOf === "number") {
        numberSchema = numberSchema.multipleOf(schema.multipleOf);
      }
      zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      const shape = {};
      const properties = schema.properties || {};
      const requiredSet = new Set(schema.required || []);
      for (const [key, propSchema] of Object.entries(properties)) {
        const propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema.propertyNames) {
        const keySchema = convertSchema(schema.propertyNames, ctx);
        const valueSchema = schema.additionalProperties && typeof schema.additionalProperties === "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        const objectSchema2 = z.object(shape).passthrough();
        const recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema.patternProperties) {
        const patternProps = schema.patternProperties;
        const patternKeys = Object.keys(patternProps);
        const looseRecords = [];
        for (const pattern of patternKeys) {
          const patternValue = convertSchema(patternProps[pattern], ctx);
          const keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        const schemasToIntersect = [];
        if (Object.keys(shape).length > 0) {
          schemasToIntersect.push(z.object(shape).passthrough());
        }
        schemasToIntersect.push(...looseRecords);
        if (schemasToIntersect.length === 0) {
          zodSchema = z.object({}).passthrough();
        } else if (schemasToIntersect.length === 1) {
          zodSchema = schemasToIntersect[0];
        } else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i = 2;i < schemasToIntersect.length; i++) {
            result = z.intersection(result, schemasToIntersect[i]);
          }
          zodSchema = result;
        }
        break;
      }
      const objectSchema = z.object(shape);
      if (schema.additionalProperties === false) {
        zodSchema = objectSchema.strict();
      } else if (typeof schema.additionalProperties === "object") {
        zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx));
      } else {
        zodSchema = objectSchema.passthrough();
      }
      break;
    }
    case "array": {
      const prefixItems = schema.prefixItems;
      const items = schema.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
        const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (Array.isArray(items)) {
        const tupleItems = items.map((item) => convertSchema(item, ctx));
        const rest = schema.additionalItems && typeof schema.additionalItems === "object" ? convertSchema(schema.additionalItems, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (items !== undefined) {
        const element = convertSchema(items, ctx);
        let arraySchema = z.array(element);
        if (typeof schema.minItems === "number") {
          arraySchema = arraySchema.min(schema.minItems);
        }
        if (typeof schema.maxItems === "number") {
          arraySchema = arraySchema.max(schema.maxItems);
        }
        zodSchema = arraySchema;
      } else {
        zodSchema = z.array(z.any());
      }
      break;
    }
    default:
      throw new Error(\`Unsupported type: \${type}\`);
  }
  if (schema.description) {
    zodSchema = zodSchema.describe(schema.description);
  }
  if (schema.default !== undefined) {
    zodSchema = zodSchema.default(schema.default);
  }
  return zodSchema;
}
function convertSchema(schema, ctx) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  let baseSchema = convertBaseSchema(schema, ctx);
  const hasExplicitType = schema.type || schema.enum !== undefined || schema.const !== undefined;
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    const options = schema.anyOf.map((s) => convertSchema(s, ctx));
    const anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    const options = schema.oneOf.map((s) => convertSchema(s, ctx));
    const oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema.allOf && Array.isArray(schema.allOf)) {
    if (schema.allOf.length === 0) {
      baseSchema = hasExplicitType ? baseSchema : z.any();
    } else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx);
      const startIdx = hasExplicitType ? 0 : 1;
      for (let i = startIdx;i < schema.allOf.length; i++) {
        result = z.intersection(result, convertSchema(schema.allOf[i], ctx));
      }
      baseSchema = result;
    }
  }
  if (schema.nullable === true && ctx.version === "openapi-3.0") {
    baseSchema = z.nullable(baseSchema);
  }
  if (schema.readOnly === true) {
    baseSchema = z.readonly(baseSchema);
  }
  const extraMeta = {};
  const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const key of coreMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const key of contentMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  for (const key of Object.keys(schema)) {
    if (!RECOGNIZED_KEYS.has(key)) {
      extraMeta[key] = schema[key];
    }
  }
  if (Object.keys(extraMeta).length > 0) {
    ctx.registry.add(baseSchema, extraMeta);
  }
  return baseSchema;
}
function fromJSONSchema(schema, params) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  const version2 = detectVersion(schema, params?.defaultTarget);
  const defs = schema.$defs || schema.definitions || {};
  const ctx = {
    version: version2,
    defs,
    refs: new Map,
    processing: new Set,
    rootSchema: schema,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(schema, ctx);
}
// node_modules/zod/v4/classic/coerce.js
var exports_coerce = {};
__export(exports_coerce, {
  string: () => string3,
  number: () => number3,
  date: () => date4,
  boolean: () => boolean3,
  bigint: () => bigint3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// node_modules/zod/v4/classic/external.js
config(en_default());
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
var integrationDisplayNames = exports_external.record(exports_external.string(), exports_external.string()).parse(Object.fromEntries(catalog.map((integration) => [integration.id, integration.displayName])));

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
var api2 = (path, init = {}) => fetch(\`\${path}\${path.includes("?") ? "&" : "?"}token=\${encodeURIComponent(token)}\`, {
  ...init,
  headers: {
    "content-type": "application/json",
    "x-cc-safety-net-token": token,
    ...init.headers
  }
});
var requestJson = async (path, init) => {
  try {
    const response = await api2(path, init);
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      data: text ? JSON.parse(text) : {},
      error: undefined
    };
  } catch (error48) {
    return {
      ok: false,
      status: 0,
      data: undefined,
      error: error48 instanceof Error ? error48.message : String(error48)
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
  const hash2 = location.hash.replace("#", "");
  return viewNames.find((view) => view === hash2) ?? "overview";
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
  const date5 = new Date(ts);
  if (date5.toDateString() === new Date().toDateString())
    return "Today";
  if (date5.toDateString() === new Date(Date.now() - 86400000).toDateString())
    return "Yesterday";
  return date5.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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
    const version2 = row.version === null ? '<span class="muted">not detected</span>' : \`<span class="agent-badge">v\${escapeHtml(row.version)}</span>\`;
    const status = row.status === "active" ? '<span class="state-active">Installed</span>' : row.status === "disabled" ? '<span class="state-disabled">Disabled</span>' : row.status === "not-inspected" ? \`<span class="muted" title="This runtime's state file could not be read, so its status is unknown.">Not inspected</span>\` : '<span class="muted">Not installed</span>';
    const uninstall = row.status === "active";
    const busyLabel = uninstall ? "Uninstalling…" : "Installing…";
    const action = row.version === null ? "" : \`<button type="button" class="\${uninstall ? "danger" : "primary"}" data-integration-action="\${uninstall ? "uninstall" : "install"}" data-integration-target="\${escapeHtml(row.target)}"\${busy2 ? " disabled" : ""}>\${busy2 ? busyLabel : uninstall ? "Uninstall" : row.status === "disabled" ? "Enable" : "Install"}</button>\`;
    const note = row.note ? \`<div class="status \${row.note.kind}">\${escapeHtml(row.note.text)}</div>\` : "";
    return \`<div class="integration-row">
        <span class="integration-info"><strong>\${escapeHtml(row.label)}</strong> \${version2} \${status}</span>
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
  const url2 = new URL(reportIssueUrl);
  Object.entries(fields).filter(([, value]) => value).forEach(([field, value]) => {
    url2.searchParams.set(field, value);
  });
  return url2.toString();
};
var buildReportRequest = (fields, dropped = []) => {
  const url2 = buildReportUrl(fields);
  if (url2.length <= reportUrlLimit)
    return { url: url2, dropped };
  const largest = Object.entries(fields).filter(([, value]) => value).sort((left, right) => right[1].length - left[1].length)[0];
  if (!largest)
    return { url: url2, dropped };
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
  } catch (error48) {
    setAppStatus("Copy failed", "error");
    setDetailStatus(\`Error: Could not copy Raw JSON: \${error48 instanceof Error ? error48.message : String(error48)}\`, "error");
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
var createPathList = (prefix, config2) => {
  const setHint = (text) => {
    qs(\`\${prefix}-hint\`).textContent = text;
    qs(\`\${prefix}-hint\`).hidden = !text;
  };
  const render = () => {
    const paths = config2.getPaths();
    const disabled = config2.isDisabled();
    qs(\`\${prefix}-count\`).textContent = \`\${paths.length} path\${paths.length === 1 ? "" : "s"}\`;
    qs(\`\${prefix}-input\`).disabled = disabled;
    qs(\`\${prefix}-add-button\`).disabled = disabled;
    qs(\`\${prefix}-list\`).innerHTML = paths.length === 0 ? \`<li class="empty">No \${config2.itemLabel}s configured.</li>\` : paths.map((path, index) => \`<li class="path-item \${disabled ? "row-disabled" : ""}">
          <code>\${escapeHtml(path)}</code>
          <button type="button" class="icon-button" data-path-list="\${prefix}" data-path-remove="\${index}" \${disabled ? "disabled" : ""} aria-label="Remove \${config2.itemLabel} \${escapeHtml(path)}">\${pathListIcons.remove}</button>
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
    const additions = entries.filter((entry) => !config2.getPaths().includes(entry));
    if (config2.validateAdditions && additions.length) {
      adding = true;
      try {
        const error48 = await config2.validateAdditions([...config2.getPaths(), ...additions]);
        if (error48) {
          setHint(\`Not added: \${additions.join(", ")} — \${error48}\`);
          return;
        }
      } finally {
        adding = false;
      }
    }
    const current = config2.getPaths();
    const duplicates = entries.filter((entry) => current.includes(entry));
    config2.setPaths([...current, ...additions.filter((entry) => !current.includes(entry))]);
    if (qs(\`\${prefix}-input\`).value === submitted)
      qs(\`\${prefix}-input\`).value = "";
    setHint(duplicates.length ? \`Already listed: \${duplicates.join(", ")}\` : "");
    render();
    syncRawFromForm();
    updateDirtyStatus();
    qs(\`\${prefix}-input\`).focus();
  };
  const remove = (index) => {
    config2.setPaths(config2.getPaths().filter((_, position) => position !== index));
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
  qs("safety-level").innerHTML = Object.entries(safetyLevels).map(([level, meta3]) => \`<label class="row preset-\${level}"><input type="radio" name="safety-level" value="\${level}" \${checkbox(draftPolicy.safety.level === level)}><span><strong>\${meta3[0]}</strong><small>\${meta3[1]}</small></span></label>\`).join("");
  const inherited = levelCapabilities(draftPolicy.safety.level);
  qs("safety-overrides").innerHTML = capabilityNames.map((key) => {
    const meta3 = safetyOverrides[key];
    const value = draftPolicy.safety.overrides[key];
    const inheritedText = inherited[key] ? "on" : "off";
    return \`<label class="row safety-override-row"><span><strong>\${meta3[0]}</strong><small>\${meta3[1]}</small></span><select data-safety-override="\${key}">
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
}).catch((error48) => {
  setAppStatus("Load failed", "error");
  setDetailStatus(String(error48), "error");
});

  </script>
</body>
</html>
`;var Cd='<script id="ccsn-data" type="application/json">';function Fd(n){return Od.replace(Cd,()=>Cd+JSON.stringify({token:n}).replaceAll("<","\\u003c"))}var Ut="kenryu42/cc-safety-net",B1=`https://github.com/${Ut}`,Sr=1e4,N1=7,V1=u.object({port:u.number()}),M1=u.object({command:u.string(),policy:u.json().optional()}),X1=u.object({target:u.enum(q.map((n)=>n.target))}),K1=u.object({stargazers_count:u.number()});async function Yd(n,e={}){let t=Z({label:"gui",booleans:{noOpen:["--no-open"]}},n),i=e.log??console.log,r=e.error??console.error;if(t.errors.length>0){for(let a of t.errors)r(a);return r("Usage: cc-safety-net gui [--no-open]"),1}let s=await W1(e);if(i(`CC Safety Net policy GUI: ${s.url}`),!t.flags.noOpen)try{await(e.openBrowser??i0)(s.url)}catch(a){r(`Failed to open browser: ${a instanceof Error?a.message:String(a)}`),r(`Open this URL manually: ${s.url}`)}if(e.keepAlive===!1)return await s.close(),0;return await t0(s),0}async function W1(n={}){let e=n.token??q1(24).toString("base64url"),t=J1((s,a)=>{Y1(s,a,e,n)});await new Promise((s,a)=>{t.once("error",a),t.listen(0,"127.0.0.1",()=>{t.off("error",a),s()})});let r=`http://127.0.0.1:${V1.parse(t.address()).port}`;return{origin:r,token:e,url:`${r}/?token=${encodeURIComponent(e)}`,close:()=>e0(t)}}async function Y1(n,e,t,i){let r=new URL(n.url??"/","http://127.0.0.1");if(n.method==="GET"&&r.pathname==="/favicon.ico"){e.writeHead(204,{"cache-control":"no-store"}),e.end();return}if(!H1(n,r,t)){w(e,403,{error:"Forbidden"});return}if(n.method==="GET"&&r.pathname==="/"){n0(e,Fd(t));return}if(n.method==="GET"&&r.pathname==="/api/policy"){let s=Bd(i);w(e,200,{...s,configState:ye(F(i)),destructiveCommandRules:pe,secretPatterns:qd,version:S(),preview:s.errors.length>0?null:Vd(s.policy)});return}if(n.method==="POST"&&r.pathname==="/api/policy/preview"){let s=await Dt(n);if(!s.ok){w(e,400,{errors:[s.error]});return}let a=Nd(s.value);w(e,a.errors.length>0?400:200,a);return}if(n.method==="POST"&&r.pathname==="/api/policy/explain"){let s=await Dt(n);if(!s.ok){w(e,400,{errors:[s.error]});return}let a=M1.safeParse(s.value);if(!a.success){w(e,400,{errors:["command must be a string"]});return}let o=oi(a.data.policy);if(o.length>0){w(e,400,{errors:o});return}w(e,200,G1(a.data.command,a.data.policy??null,i));return}if(n.method==="POST"&&r.pathname==="/api/policy"){let s=await Dt(n);if(!s.ok){w(e,400,{errors:[s.error]});return}let a=wr(s.value,i);w(e,a.errors.length>0?400:200,a);return}if(n.method==="POST"&&r.pathname==="/api/reset"){w(e,200,wr(Jd,i));return}if(n.method==="POST"&&r.pathname==="/api/repair"){w(e,200,Md(i));return}if(n.method==="GET"&&r.pathname==="/api/activity"){let s=Jn(i),a=Q1(r.searchParams.get("days"),s);if(a===null){w(e,400,{error:`days must be an integer between 1 and ${s}`});return}w(e,200,Ud(a,i.activityLogsDir));return}if(n.method==="POST"&&r.pathname==="/api/rules/choose-directory"){w(e,200,await Ed());return}if(n.method==="GET"&&r.pathname==="/api/rules"){let s=vn(i),a=new Map(s.rules.map((o)=>[o.name,o]));w(e,200,{projectPath:i.cwd??process.cwd(),canPickDirectory:Rd(process.platform,process.env),rulebooks:s.rulebooks.map((o)=>({source:o.source,spec:o.spec,name:o.name,version:o.version,rules:o.rules.flatMap((d)=>{let c=a.get(d);if(!c)return[];return[{name:c.name,command:c.command,subcommand:c.subcommand,block_args:c.block_args,reason:c.reason}]})})),errors:s.errors,warnings:s.warnings});return}if(n.method==="GET"&&r.pathname==="/api/star/context"){w(e,200,await(i.fetchStarContext??(()=>d0({logsDir:i.activityLogsDir})))());return}if(n.method==="POST"&&r.pathname==="/api/star"){let s=await(i.starRepo??r0)();w(e,200,s.ok?{ok:!0}:{ok:!1,fallbackUrl:B1});return}if(n.method==="GET"&&r.pathname==="/api/integrations"){w(e,200,await(i.fetchIntegrations??a0)());return}if(n.method==="GET"&&r.pathname==="/api/health"){w(e,200,await(i.fetchHealth??o0)());return}if(n.method==="POST"&&(r.pathname==="/api/install"||r.pathname==="/api/uninstall")){let s=await Dt(n);if(!s.ok){w(e,400,{errors:[s.error]});return}let a=X1.safeParse(s.value);if(!a.success){w(e,400,{error:"unknown target"});return}let o=r.pathname==="/api/install"?"install":"uninstall";w(e,200,await(i.runIntegration??u0)(o,a.data.target));return}w(e,404,{error:"Not found"})}function G1(n,e,t){let i=pt(e),r=F(t),s=me({rules:r.policy.rules,transparentWrappers:r.policy.transparentWrappers,safety:Kd(i.safety),worktreeMode:i.workflow.worktree_mode,destructiveCommandProtectionEnabled:i.destructive_command_protection.enabled,destructiveCommandRuleOverrides:i.destructive_command_protection.overrides,destructiveCommandAllowPaths:i.destructive_command_protection.allow_paths,secretProtection:{enabled:i.secret_protection.enabled,disabledRules:[...Xd(i.secret_protection.overrides)],denyPaths:i.secret_protection.deny_paths}});return qn(n,{policySnapshot:s,cwd:t.cwd,userConfigDir:t.userConfigDir})}function Q1(n,e){if(n===null)return Math.min(N1,e);let t=Number(n);if(!Number.isInteger(t)||t<1||t>e)return null;return t}function H1(n,e,t){if(e.searchParams.get("token")!==t)return!1;if(n.method!=="POST")return!0;return n.headers["x-cc-safety-net-token"]===t}async function Dt(n){let e=[];for await(let t of n)e.push(Buffer.from(t));try{return{ok:!0,value:u.json().parse(JSON.parse(Buffer.concat(e).toString("utf-8")||"{}"))}}catch(t){return{ok:!1,error:`Invalid JSON: ${t instanceof Error?t.message:String(t)}`}}}function n0(n,e){n.writeHead(200,{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}),n.end(e)}function w(n,e,t){n.writeHead(e,{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}),n.end(JSON.stringify(t))}function e0(n){return new Promise((e,t)=>{n.close((i)=>i?t(i):e())})}function t0(n){return new Promise((e)=>{let t=()=>{process.off("SIGINT",i),process.off("SIGTERM",i)},i=()=>{t(),n.close().then(e)};process.once("SIGINT",i),process.once("SIGTERM",i)})}function i0(n){let e=process.platform==="darwin"?"open":process.platform==="win32"?"cmd":"xdg-open",t=process.platform==="win32"?["/c","start","",n]:[n];return new Promise((i,r)=>{let s=Wd(e,t,{detached:!0,stdio:"ignore"}),a=(d)=>{s.off("spawn",o),r(d)},o=()=>{s.off("error",a),s.unref(),i()};s.once("error",a),s.once("spawn",o)})}async function r0(n="gh",e=Sr){return{ok:await zr(n,["api","-X","PUT",`/user/starred/${Ut}`],e)===0}}var s0={amp:"ampVersion","antigravity-cli":"antigravityCliVersion","claude-code":"claudeCodeVersion",codex:"codexCliVersion","copilot-cli":"copilotCliVersion",cursor:"cursorVersion","gemini-cli":"geminiCliVersion","hermes-agent":"hermesAgentVersion","kimi-code":"kimiCodeVersion",openclaw:"openClawVersion",opencode:"openCodeVersion",pi:"piCliVersion"};async function a0(n={}){let e=await be(n.fetcher),t=Gd(e,n.homeDir);return{targets:cn.map((i)=>{let r=t.find((s)=>s.platform===i.id);return{target:i.id,label:gn(i.id),version:e[s0[i.id]],status:r?.configured?"active":r?.detected?"disabled":r?.inspectionStatus==="not-inspected"?"not-inspected":"not-installed"}}),system:{version:e.version,nodeVersion:e.nodeVersion,platform:e.platform}}}function Gd(n,e){return ne(process.cwd(),{homeDir:e,ampPluginListOutput:n.ampPluginListOutput,codexPluginListOutput:n.codexPluginListOutput,copilotCliVersion:n.copilotCliVersion})}async function o0(n={}){let[e,t]=await Promise.all([be(n.fetcher),(n.checkUpdates??Wn)()]);return{hooks:Gd(e,n.homeDir).filter((i)=>i.detected).map((i)=>({platform:i.platform,label:gn(i.platform),configured:i.configured})),update:{currentVersion:t.currentVersion,latestVersion:t.latestVersion??null,updateAvailable:t.updateAvailable}}}var Ad=Promise.resolve();function u0(n,e,t={}){let i=async()=>{let s=[],a=console.log,o=console.error,d=process.stdout.write;console.log=(...c)=>s.push(c.map(String).join(" ")),console.error=console.log,process.stdout.write=()=>!0;try{return{ok:await Pe(n,[],{selectTargets:async()=>[e],...t})===0,output:s.join(`
`)}}finally{console.log=a,console.error=o,process.stdout.write=d}},r=Ad.then(i);return Ad=r.then(()=>{return},()=>{return}),r}async function d0(n={}){let[e,t,i]=await Promise.all([c0(n.command),l0(n.fetchRepo),Promise.resolve(Ke(Jn(),n.logsDir).totalBlocked)]);return{starred:e,starCount:t,blockedTotal:i}}async function c0(n="gh",e=Sr){if(await zr(n,["auth","status"],e)!==0)return null;let t=await zr(n,["api",`/user/starred/${Ut}`],e);if(t===0)return!0;if(t===null)return null;return!1}function zr(n,e,t){return new Promise((i)=>{let r=Wd(n,e,{stdio:"ignore",windowsHide:!0}),s=!1,a,o=(d)=>{if(s)return;if(s=!0,a)clearTimeout(a);i(d)};r.once("error",()=>o(null)),r.once("close",o),a=setTimeout(()=>{r.kill(),o(null)},t)})}async function l0(n=fetch){try{let e=await n(`https://api.github.com/repos/${Ut}`,{headers:{accept:"application/vnd.github+json"},signal:AbortSignal.timeout(Sr)});if(!e.ok)return null;let t=K1.safeParse(await e.json());return t.success?t.data.stargazers_count:null}catch{return null}}function p0(n){if(n[0]!=="help")return!1;let e=n[1];if(!e)tr(),process.exit(0);if(Ue(e))process.exit(0);console.error(`Unknown command: ${e}`),console.error("Run 'cc-safety-net --help' for available commands."),process.exit(1)}var m0={hook:async(n)=>{let e=ta(n);if(e){await e.run();return}console.error("hook requires exactly one integration flag. Try: cc-safety-net hook --kimi-code"),Ue("hook",console.error),process.exit(1)},install:async(n)=>{process.exit(await Pe("install",n))},update:async(n)=>{process.exit(await br(n))},uninstall:async(n)=>{process.exit(await Pe("uninstall",n))},rule:async(n)=>{process.exit(await Zd(n))},status:async(n)=>{if(rn(Z({label:"status"},n).errors))process.exit(1);Dd()},statusline:async(n)=>{let e=Z({label:"statusline",booleans:{claudeCode:["-cc","--claude-code"]}},n);if(e.errors.length===0&&e.flags.claudeCode){await kr();return}if(rn(e.errors),!e.flags.claudeCode)console.error("statusline requires --claude-code (-cc)");Ue("statusline",console.error),process.exit(1)},doctor:async(n)=>{let e=Gi(n);if(!e)process.exit(1);let t=await Xo({json:e.json,skipUpdateCheck:e.skipUpdateCheck});process.exit(t)},logs:async(n)=>{process.exit(await Ls(n))},gui:async(n)=>{process.exit(await Yd(n))},explain:async(n)=>{let e=Qi(n);if(!e)process.exit(1);let t=qn(e.command,{cwd:e.cwd}),i=!!process.env.NO_COLOR||!process.stdout.isTTY;if(e.json)console.log(er(t));else console.log(nr(t,{asciiOnly:i}));process.exit(0)}};async function f0(){let n=process.argv.slice(2),e=Z({label:"cc-safety-net",booleans:{version:["-V","--version"]},positionals:"list"},n);if(p0(n))return;let t=n[0],i=t?Xe(t):void 0;if(e.help&&i&&i.name!=="rule")Ue(i.name),process.exit(0);if(!t||e.help&&!i)tr(),process.exit(0);if(e.flags.version)eu(),process.exit(0);if(i){await m0[i.name](n.slice(1));return}let r=ia(t);if(r){await r.run();return}if(t==="--statusline"){await kr();return}console.error(t.startsWith("-")?`Unknown option: ${t}`:`Unknown command: ${t}`),console.error("Run 'cc-safety-net --help' for usage."),process.exit(1)}f0().catch((n)=>{console.error("CC Safety Net error:",n),process.exit(1)});
