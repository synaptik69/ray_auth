var F=Object.create;var v=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var se=(n,e)=>{for(var s in e)v(n,s,{get:e[s],enumerable:!0})},I=(n,e,s,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Z(e))!te.call(n,o)&&o!==s&&v(n,o,{get:()=>e[o],enumerable:!(t=X(e,o))||t.enumerable});return n};var C=(n,e,s)=>(s=n!=null?F(ee(n)):{},I(e||!n||!n.__esModule?v(s,"default",{value:n,enumerable:!0}):s,n)),ne=n=>I(v({},"__esModule",{value:!0}),n);var ie={};se(ie,{SESSION_PROGRAM_ID:()=>q,useAuth:()=>U,useSessionProgram:()=>ae});module.exports=ne(ie);var f=require("react"),j=require("react-cookie");var N=C(require("axios"));var b="http://localhost:8080",d="http://localhost:3000/wallet";var D=require("sweet-event-emitter"),K=class{constructor(e){this.id=e==null?void 0:e.id,this.createdAt=e==null?void 0:e.createdAt,this.updatedAt=e==null?void 0:e.updatedAt,this.email=e==null?void 0:e.email,this.address=e==null?void 0:e.address,this.avatar=e==null?void 0:e.address,this.event=new D.EventEmitter,this.state=e==null?void 0:e.store}sendTransaction(e,s,t){try{console.log("waw");let o=new URL(`${d}/send-transaction`);o.searchParams.append("txn",e.serialize().toString()),o.searchParams.append("options",(t==null?void 0:t.toString())||String({data:"empty"})),o.searchParams.append("isgasless",String(s))}catch(o){throw new Error("Can't execute send transaction")}}signTransaction(e){try{console.log(this),console.log(this.state),console.log("waw");let s=new URL(`${d}/sign-transaction`);s.searchParams.append("txn",e.serialize({requireAllSignatures:!1}).toString()),this.state.setSrc(s.toString()),this.state.setVisible(!0)}catch(s){throw console.error(s),new Error("Can't execute send transaction")}}signAllTransactions(e){try{new URL(`${d}/sign-all-transactions`).searchParams.append("txns",e.map(t=>t.serialize().toString()).toString())}catch(s){throw new Error("Can't execute signing of all transactions")}}signMessage(e,s,t){try{let o=new URL(`${d}/sign-message`);o.searchParams.append("msg",e),o.searchParams.append("address",this.address||"NOT-FOUND"),o.searchParams.append("isgasless",String(s))}catch(o){throw new Error("Can't execute signing of message")}}toggleIframe(e,s){var t;(t=this.state)==null||t.setSrc(e),this.state.setVisible(s)}async testSign(e){try{let s=new URL(`${d}?msg=${e}`);s.searchParams.append("txn",e),this.toggleIframe(s.toString(),!0);let t=await this.loopTxnData();return this.toggleIframe(d,!1),t}catch(s){throw new Error("Can't execute send transaction")}}async loopTxnData(){let e=new Date().getTime(),s=null;for(console.log("pre loob",s);s==null||e-new Date().getTime()>=15e3;)console.log("loop running"),window.onmessage=function(t){console.log(t.data),t.data.type=="signtransac"&&console.log(!0),t.data.type=="txnData"&&(console.log(!0),console.log("loop data",t.data),s=t.data,console.log("data be like",s))},await re(1e3);return s}};function re(n){return new Promise(e=>setTimeout(e,n))}async function B(n,e){let s=await N.default.get(`${b}/user`,{headers:{Authorization:`Bearer ${n}`}});console.log(s.data);let t=new K({id:s.data.id,createdAt:s.data.createdAt,updatedAt:s.data.updatedAt,email:s.data.email,address:s.data.address,avatar:s.data.avatar,store:e});return console.log("constructor",t),t}var H=require("zustand");var k=(0,H.create)(n=>({count:1,isHidden:!0,src:d,txnData:{},setTxnData:e=>n(s=>({txnData:e})),setVisible:e=>n(s=>({isHidden:!e})),setSrc:e=>n(s=>({src:e}))}));var A=require("react");function oe(n,e){return`${n} returned \`undefined\`. Seems you forgot to wrap component within ${e}`}function V(n={}){let{name:e,strict:s=!0,hookName:t="useContext",providerName:o="Provider",errorMessage:a}=n,g=(0,A.createContext)(void 0);g.displayName=e;function u(){var c;let h=(0,A.useContext)(g);if(!h&&s){let i=new Error(a!=null?a:oe(t,o));throw i.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,i,u),i}return h}return[g.Provider,u,g]}var O=C(require("react"));var $=require("sweet-event-emitter"),E=class{constructor(){this.event=new $.EventEmitter}eventEmitter(){return this.event}onSignTransac(e){this.event.on("signTransac",e)}},R=new E;var[Ce,z]=V();var x=require("@solana/web3.js");function _(n){return new Promise(e=>setTimeout(e,n))}var L=C(require("hex-array"));function U(){let n=z(),e=n.cookieName||"jwt-rayauth",s=k(),[t,o]=(0,f.useState)(null),[a,g]=(0,f.useState)(!1),[u,h,c]=(0,j.useCookies)([e]),i=(0,f.useMemo)(()=>new x.Connection((0,x.clusterApiUrl)("devnet")),[]);(0,f.useEffect)(()=>{(async()=>{if(console.log("CHAL RHA"),g(!0),!u[e]){g(!1);return}console.log("YAHA BHI CHAL RHA");let r=await B(u[e],s);console.log("USER CHAL RHA"),o(r),g(!1),console.log("PURA CHAL RHA",r.state)})()},[u]);let S=()=>{console.log("RUNNING CALLBACK");let r=new URLSearchParams(window.location.search).get("jwt");r&&u[e]&&(console.log("exists",u[e]),c(e),console.log(h(e,r))),r&&!u[e]&&console.log(h(e,r.toString()))},P=l=>{let r=new URL(`${b}/auth/${l||n.provider}`);r.searchParams.append("cb",n.callbackUrl),r.searchParams.append("id",n.clientId),console.log(r.toString()),window.location.replace(r.toString())},Q=()=>{c(e)};async function M(l){try{console.log(t),console.log(t==null?void 0:t.state),console.log("waw");let r=new URL(`${d}/sign-transaction`);if(l instanceof x.Transaction&&l.recentBlockhash===null){let Y=(await i.getLatestBlockhash("finalized")).blockhash;l.recentBlockhash=Y}r.searchParams.append("txn",L.default.toString(l.serialize({requireAllSignatures:!1}))),console.log("hex",L.default.toString(l.serialize({requireAllSignatures:!1}))),console.log("url",r.toString()),t==null||t.state.setSrc(r.toString()),t==null||t.state.setVisible(!0);let p=await J();return t==null||t.state.setVisible(!1),p}catch(r){throw console.error(r),new Error("Can't execute send transaction")}}let G=async l=>{try{let r=await M(l);return console.log("signed",r),await i.sendRawTransaction(r.serialize())}catch(r){throw console.error(r),new Error("Can't execute send transaction")}};async function J(){let l=new Date().getTime(),r=null;for(console.log("pre loob",r);r==null||l-new Date().getTime()>=15e3;)console.log("loop running"),window.onmessage=function(p){console.log(p.data),p.data.type=="signtransac"&&console.log(!0),p.data.type=="txnData"&&(console.log(!0),console.log("loop data",p.data),r=p.data,console.log("data be like",r))},await _(1e3);return r}return{signIn:P,signOut:Q,user:t,isLoading:a,handleCallback:S,walletListener:R,signTransaction:M,sendTransaction:G}}var m=require("@solana/web3.js"),w=require("@project-serum/anchor"),y=require("react"),T=require("buffer");var W={version:"0.1.0",name:"rayauth_session",instructions:[{name:"addSessionKey",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"user",isMut:!1,isSigner:!0},{name:"sessionKey",isMut:!1,isSigner:!0},{name:"sessionKeyPda",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"expiresAt",type:{option:"i64"}}]},{name:"revokeSessionKey",accounts:[{name:"sessionKeyPda",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"sessionKey",type:{kind:"struct",fields:[{name:"user",type:"publicKey"},{name:"sessionKey",type:"publicKey"},{name:"expiresAt",type:"i64"}]}}],events:[{name:"SessionKeyAdded",fields:[{name:"user",type:"publicKey",index:!1},{name:"sessionKey",type:"publicKey",index:!1},{name:"expiresAt",type:"i64",index:!1}]},{name:"SessionKeyRevoked",fields:[{name:"user",type:"publicKey",index:!1},{name:"sessionKey",type:"publicKey",index:!1}]}],errors:[{code:6e3,name:"InvalidExpiresAt",msg:"Invalid expires at"}]};var q="QMj41mN3j168KTuUWNrCgbSAYQ7o9QTaaSnT9gLvW9s",ae=()=>{let n=(0,y.useMemo)(()=>new m.Connection((0,m.clusterApiUrl)("devnet")),[]),{user:e,signTransaction:s}=U();(0,y.useEffect)(()=>{window.Buffer=T.Buffer});let t=(0,y.useMemo)(()=>{if(e!=null&&e.address)return{publicKey:new m.PublicKey(e.address),signTransaction:s,signAllTransactions:e.signAllTransactions}},[e]),o=(0,y.useMemo)(()=>{if(t)return new w.AnchorProvider(n,t,{commitment:"confirmed"})},[n,t]);console.log("anchorWallet",t),console.log("anchorProvider",o);let a=(0,y.useMemo)(()=>{if(o)return new w.Program(W,q,o)},[o]);console.log("sessionProgram",a);let g=async(c=Math.floor(Date.now()/1e3)+3600)=>{if(!a){console.log("ched");return}let i=new m.Keypair;console.log(i);let[S]=await m.PublicKey.findProgramAddress([T.Buffer.from("session_key"),i.publicKey.toBuffer()],a.programId);console.log("doing tx");let P=await a.methods.addSessionKey(new w.BN(c)).accounts({sessionKeyPda:S,sessionKey:i.publicKey,payer:t==null?void 0:t.publicKey,user:t==null?void 0:t.publicKey}).signers([i]).rpc();console.log("addSessionKeyIx",P),localStorage.setItem("sessionToken",JSON.stringify(i))},u=()=>{let c=localStorage.getItem("sessionToken");if(c)return m.Keypair.fromSecretKey(T.Buffer.from(JSON.parse(c).secretKey))};return{sessionProgram:a,addSessionToken:g,getSessionKeypair:u,revokeSessionToken:async()=>{if(!a)return;let c=u();if(!c)return;let[i]=await m.PublicKey.findProgramAddress([T.Buffer.from("session_key"),c.publicKey.toBuffer()],a.programId),S=await a.methods.revokeSessionKey().accounts({sessionKeyPda:i,user:t==null?void 0:t.publicKey}).rpc();console.log("revokeSessionKeyTx",S)}}};0&&(module.exports={SESSION_PROGRAM_ID,useAuth,useSessionProgram});
//# sourceMappingURL=index.js.map