(this["webpackJsonpswap-ui"]=this["webpackJsonpswap-ui"]||[]).push([[0],{212:function(t,e,n){},213:function(t,e){},214:function(t,e){},216:function(t,e){},238:function(t,e){},239:function(t,e){},259:function(t,e){},268:function(t,e){},269:function(t,e){},273:function(t,e){},274:function(t,e){},287:function(t,e){},289:function(t,e){},306:function(t,e){},319:function(t,e,n){},320:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),c=n(29),i=n.n(c),a=(n(212),n(19)),s=n(322),u=n(90),l=n(188),d=n(8),f=n(200),j=n(2),b=n.n(j),m=n(6),p=n(190),x=n(353),O=n(361),h=(n(369),n(363),n(364)),v=n(365),g=n(321),w=n(368),y=n(362),C=n(366),S=n(367),k=n(61),M=n(3),A=n(23);function E(){return(E=Object(m.a)(b.a.mark((function t(e,n){var o,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=T(n),t.next=3,e._rpcRequest("getProgramAccounts",[k.TOKEN_PROGRAM_ID.toBase58(),{commitment:e.commitment,filters:o}]);case 3:if(!(r=t.sent).error){t.next=6;break}throw new Error("failed to get token accounts owned by "+n.toBase58()+": "+r.error.message);case 6:return t.abrupt("return",r.result.map((function(t){var e=t.pubkey,n=t.account,o=n.data,r=n.executable,c=n.owner,i=n.lamports;return{publicKey:new d.PublicKey(e),accountInfo:{data:A.decode(o),executable:r,owner:new d.PublicKey(c),lamports:i}}})).filter((function(t){var e=t.accountInfo;return o.every((function(t){if(t.dataSize)return e.data.length===t.dataSize;if(t.memcmp){var n=A.decode(t.memcmp.bytes);return e.data.slice(t.memcmp.offset,t.memcmp.offset+n.length).equals(n)}return!1}))})).map((function(t){return{publicKey:t.publicKey,account:R(t.accountInfo.data)}})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var P=M.struct([M.blob(32,"mint"),M.blob(32,"owner"),M.nu64("amount"),M.blob(93)]);M.struct([M.blob(44),M.u8("decimals"),M.blob(37)]);function R(t){var e=P.decode(t),n=e.mint,o=e.owner,r=e.amount;return{mint:new d.PublicKey(n),owner:new d.PublicKey(o),amount:new u.BN(r)}}function T(t){return[{memcmp:{offset:P.offsetOf("owner"),bytes:t.toBase58()}},{dataSize:P.span}]}var B=n(15),F=new d.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),L=new d.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),N=new d.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),K=r.a.createContext(null);function D(t){var e=t.swapClient,n=Object(o.useState)(F),r=Object(a.a)(n,2),c=r[0],i=r[1],s=Object(o.useState)(L),u=Object(a.a)(s,2),l=u[0],f=u[1],j=Object(o.useState)(0),p=Object(a.a)(j,2),x=p[0],O=p[1],h=Object(o.useState)(0),v=Object(a.a)(h,2),g=v[0],w=v[1],y=Object(o.useState)(void 0),C=Object(a.a)(y,2),S=C[0],M=(C[1],Object(o.useState)(void 0)),A=Object(a.a)(M,2),P=A[0],R=(A[1],Object(o.useState)(0)),T=Object(a.a)(R,2),N=T[0],D=(T[1],Object(o.useState)(void 0)),I=Object(a.a)(D,2),z=I[0],G=I[1],_=Object(o.useState)(new Map),q=Object(a.a)(_,2),U=q[0],W=q[1];Object(o.useEffect)((function(){(function(t,e){return E.apply(this,arguments)})(e.program.provider.connection,e.program.provider.wallet.publicKey).then(G)}),[e.program.provider.wallet.publicKey,e.program.provider.connection]),Object(o.useEffect)((function(){var t=new k.Token(e.program.provider.connection,c,k.TOKEN_PROGRAM_ID,new d.Account),n=new k.Token(e.program.provider.connection,l,k.TOKEN_PROGRAM_ID,new d.Account),o=[];U.get(c.toString())?o.push(Object(m.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",U.get(c.toString()));case 1:case"end":return t.stop()}}),t)})))()):o.push(t.getMintInfo()),U.get(l.toString())?o.push(Object(m.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",U.get(l.toString()));case 1:case"end":return t.stop()}}),t)})))()):o.push(n.getMintInfo()),Promise.all(o).then((function(t){var e=Object(a.a)(t,2),n=e[0],o=e[1],r=new Map(U);r.set(c.toString(),n),r.set(l.toString(),o),W(r)}))}),[c,l]);return Object(B.jsx)(K.Provider,{value:{swapClient:e,fromMint:c,setFromMint:i,toMint:l,setToMint:f,fromAmount:x,setFromAmount:O,toAmount:g,setToAmount:w,minExpectedAmount:N,swapToFromMints:function(){var t=c,e=x,n=g;i(l),f(t),O(n),w(e)},fromBalance:S,toBalance:P,ownedTokenAccounts:z,mintCache:U},children:t.children})}function I(){var t=Object(o.useContext)(K);if(null===t)throw new Error("Context not available");return t}var z=r.a.createContext(null);function G(t){return Object(B.jsx)(z.Provider,{value:{tokenList:t.tokenList},children:t.children})}function _(){var t=Object(o.useContext)(z);if(null===t)throw new Error("Context not available");return t.tokenList.getList()}var q=n(371),U=n(357),W=n(358),J=n(359),X=n(360),Y=Object(x.a)((function(t){return{dialogContent:{paddingTop:0},textField:{width:"100%",border:"solid 1pt #ccc",borderRadius:"10px",marginBottom:"8px"}}}));function H(t){var e=t.open,n=t.onClose,r=t.setMint,c=Object(o.useState)(""),i=Object(a.a)(c,2),s=i[0],u=i[1],l=Y(),d=I().swapClient;return Object(B.jsx)(q.a,{open:e,onClose:n,PaperProps:{style:{borderRadius:"10px"}},children:Object(B.jsxs)("div",{style:{width:"420px"},children:[Object(B.jsx)(U.a,{style:{fontWeight:"bold"},children:"Select a token"}),Object(B.jsxs)(W.a,{className:l.dialogContent,children:[Object(B.jsx)(w.a,{className:l.textField,placeholder:"Search name",value:s,onChange:function(t){return u(t.target.value)},InputProps:{disableUnderline:!0,style:{padding:"10px"}}}),Object(B.jsx)("div",{children:Object(B.jsx)(J.a,{disablePadding:!0,children:d.tokens().concat([L,N]).map((function(t){return Object(B.jsx)(V,{mint:t,onClick:function(t){r(t),n()}})}))})})]})]})})}function V(t){var e=t.mint,n=t.onClick;return Object(B.jsxs)(X.a,{button:!0,onClick:function(){return n(e)},children:[Object(B.jsx)(ut,{mint:e,style:{width:"30px",borderRadius:"15px"}}),Object(B.jsx)(Z,{mint:e})]})}function Z(t){var e=t.mint,n=_().filter((function(t){return t.address===e.toString()}))[0];return Object(B.jsxs)("div",{style:{marginLeft:"16px"},children:[Object(B.jsx)(s.a,{style:{fontWeight:"bold"},children:n.symbol}),Object(B.jsx)(s.a,{color:"textSecondary",style:{fontSize:"14px"},children:n.name})]})}var Q=Object(x.a)((function(){return{card:{width:"450px",borderRadius:"10px",border:"solid 1pt #e0e0e0"},cardContent:{marginLeft:"6px",marginRight:"6px",marginBottom:"6px"},tab:{width:"50%"},settings:{display:"flex",flexDirection:"row-reverse"},settingsButton:{padding:0},swapButton:{width:"100%",borderRadius:"15px"},swapToFromButton:{display:"block",marginLeft:"auto",marginRight:"auto"},auxilliaryLabel:{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-between",marginLeft:"5px",marginRight:"5px"}}}));function $(t){var e=t.style,n=t.provider,o=t.tokenList,r=new p.Swap(n,o);return Object(B.jsx)(D,{swapClient:r,children:Object(B.jsx)(G,{tokenList:o,children:Object(B.jsx)(tt,{style:e})})})}function tt(t){var e=t.style,n=Q();return Object(B.jsx)("div",{style:e,children:Object(B.jsxs)(O.a,{className:n.card,children:[Object(B.jsx)(et,{}),Object(B.jsxs)("div",{className:n.cardContent,children:[Object(B.jsx)(ct,{}),Object(B.jsx)(ot,{}),Object(B.jsx)(it,{}),Object(B.jsx)(nt,{}),Object(B.jsx)(dt,{})]})]})})}function et(){return Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"8px"},children:[Object(B.jsx)(s.a,{style:{fontWeight:"bold",display:"flex",justifyContent:"center",flexDirection:"column"},children:"Swap"}),Object(B.jsx)(rt,{})]})}function nt(){var t=Q(),e=I(),n=e.fromMint,o=e.toMint,r=e.fromAmount,c=e.toAmount,i=(r/c).toFixed(6),a=_(),u=a.filter((function(t){return t.address===n.toString()}))[0],l=a.filter((function(t){return t.address===o.toString()}))[0];return Object(B.jsxs)("div",{className:t.auxilliaryLabel,children:[Object(B.jsx)(s.a,{color:"textSecondary",children:"Serum"}),Object(B.jsxs)("div",{style:{display:"flex"},children:[Object(B.jsx)("div",{style:{marginRight:"10px",display:"flex",justifyContent:"center",flexDirection:"column"},children:0!==r&&0!==c?"1 ".concat(l.symbol," = ").concat(i," ").concat(u.symbol):"-"}),Object(B.jsx)(y.a,{})]})]})}function ot(){var t=Q(),e=I().swapToFromMints;return Object(B.jsx)(h.a,{className:t.swapToFromButton,onClick:e,children:"\u21c5"})}function rt(){var t=Q();return Object(B.jsx)("div",{className:t.settings,children:Object(B.jsx)(v.a,{className:t.settingsButton,children:Object(B.jsx)(C.a,{})})})}function ct(){var t=I(),e=t.fromMint,n=t.setFromMint,o=t.fromAmount,r=t.setFromAmount;return Object(B.jsx)(at,{isEstimate:!1,mint:e,setMint:n,amount:o,setAmount:r})}function it(){var t=I(),e=t.toMint,n=t.setToMint,o=t.toAmount,r=t.setToAmount;return Object(B.jsx)(at,{isEstimate:!0,mint:e,setMint:n,amount:o,setAmount:r})}function at(t){t.isEstimate;var e=t.mint,n=t.setMint,r=t.amount,c=t.setAmount,i=Object(o.useState)(!1),u=Object(a.a)(i,2),l=u[0],d=u[1],f=function(t){var e=Object(o.useContext)(K);if(null===e)throw new Error("Context not available");if(void 0!==e.ownedTokenAccounts){var n=e.ownedTokenAccounts.filter((function(e){return e.account.mint.equals(t)}));return 0===n.length?null:(n.sort((function(t,e){return t.account.amount<t.account.amount?-1:t.account.amount>e.account.amount?1:0})),n[0])}}(e),j=function(t){var e=Object(o.useContext)(K);if(null===e)throw new Error("Context not available");return e.mintCache.get(t.toString())}(e);return Object(B.jsxs)(g.a,{elevation:0,variant:"outlined",children:[Object(B.jsxs)("div",{style:{height:"50px",display:"flex",justifyContent:"space-between"},children:[Object(B.jsx)(st,{mint:e,onClick:function(){return d(!0)}}),Object(B.jsx)(w.a,{type:"number",value:r,onChange:function(t){return c(parseFloat(t.target.value))},style:{display:"flex",justifyContent:"center",flexDirection:"column"}})]}),Object(B.jsx)("div",{style:{marginLeft:"10px",height:"30px"},children:Object(B.jsx)(s.a,{color:"textSecondary",style:{fontSize:"14px"},children:f&&j?"Balance: ".concat((f.account.amount.toNumber()/Math.pow(10,j.decimals)).toFixed(j.decimals)):"-"})}),Object(B.jsx)(H,{setMint:n,open:l,onClose:function(){return d(!1)}})]})}function st(t){var e=t.mint,n=t.onClick;return Object(B.jsxs)(h.a,{onClick:n,style:{width:"116px"},children:[Object(B.jsx)(ut,{mint:e,style:{width:"25px"}}),Object(B.jsx)(lt,{mint:e}),Object(B.jsx)(S.a,{})]})}function ut(t){var e=t.mint,n=t.style,o=_().filter((function(t){return t.address===e.toString()}))[0];return Object(B.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:o.logoURI?Object(B.jsx)("img",{alt:"token logo",style:n,src:o.logoURI}):Object(B.jsx)("div",{style:n})})}function lt(t){var e=t.mint,n=_().filter((function(t){return t.address===e.toString()}))[0];return Object(B.jsx)(s.a,{style:{marginLeft:"5px"},children:n.symbol})}function dt(){var t=Q(),e=I(),n=(e.fromMint,e.toMint,e.fromAmount,e.minExpectedAmount,function(){var t=Object(m.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sending swap");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return Object(B.jsx)(h.a,{variant:"contained",className:t.swapButton,onClick:n,children:"Swap"})}n(319);var ft=function(){var t=Object(o.useState)(null),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(o.useState)(!1),i=Object(a.a)(c,2),j=i[0],b=i[1];return Object(o.useEffect)((function(){var t={preflightCommitment:"recent",commitment:"recent"},e="https://api.mainnet-beta.solana.com",n=new l.a("https://www.sollet.io",e),o=new d.Connection(e,t.preflightCommitment),c=new u.Provider(o,n,t);(new f.a).resolve().then((function(t){r({provider:c,tokenList:t}),n.connect()}))}),[r]),Object(o.useEffect)((function(){null!==n&&(n.provider.wallet.on("connect",(function(){b(!0)})),n.provider.wallet.connect())}),[n]),Object(B.jsx)("div",{style:{width:"450px",marginLeft:"auto",marginRight:"auto",position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",justifyContent:"center",flexDirection:"column"},children:j?Object(B.jsx)($,{provider:n.provider,tokenList:n.tokenList}):Object(B.jsx)(s.a,{style:{textAlign:"center"},children:"Disconnected"})})},jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,373)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),r(t),c(t),i(t)}))};i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(ft,{})}),document.getElementById("root")),jt()}},[[320,1,2]]]);
//# sourceMappingURL=main.5ec47d16.chunk.js.map