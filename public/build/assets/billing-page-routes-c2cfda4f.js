import{bO as M,j as e,aw as E,O as I,aZ as U,r as d,n as H,T as n,N as Q,ay as W,bG as J,aC as b,u as F,B as m,a1 as p,q as Z,bH as K,d as y,w as T,A as q,b1 as C,cG as V,cH as X,m as S,o as _,b2 as v,a2 as D,ak as h,i as ee,p as se,t as ae,v as ne,aB as te,a5 as N,a4 as G,E as ie,as as le,bR as re,cI as ce,cJ as g}from"./main-a8767cd0.js";import{B as w,a as o,E as A,O as de}from"./OpenInNew-a6691840.js";import{S as oe,l as me,B as xe}from"./billing-redirect-message-e23b0354.js";import{u as ue,a as je}from"./use-resume-subscription-0d036444.js";import{C as ge}from"./CalendarToday-5a6bc8f6.js";import"./TaskAlt-a220d1ec.js";function he({children:s}){const{isSubscribed:t}=M();return t?s||e.jsx(I,{}):e.jsx(E,{to:"/pricing",replace:!0})}function pe(){const{user:s}=M(),t=U(s.id,{with:["subscriptions.product","subscriptions.price"]});return e.jsxs(d.Fragment,{children:[e.jsx(H,{children:e.jsx(n,{message:"Billing"})}),e.jsx(Q,{menuPosition:"billing-page"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"container mx-auto my-24 px-24 flex-auto",children:t.isLoading?e.jsx(W,{className:"my-80","aria-label":"Loading user..",isIndeterminate:!0}):e.jsx(I,{})}),e.jsx(J,{className:"container mx-auto px-24"})]})]})}const fe="/billing";function be(){const s=b();return e.jsxs(d.Fragment,{children:[e.jsxs(w,{children:[e.jsx(o,{isLink:!0,onSelected:()=>s(fe),children:e.jsx(n,{message:"Billing"})}),e.jsx(o,{children:e.jsx(n,{message:"Payment method"})})]}),e.jsx("h1",{className:"text-3xl font-bold my-32 md:my-64",children:e.jsx(n,{message:"Change payment method"})}),e.jsx(I,{})]})}const ye="/billing";function ve(){const{base_url:s}=F();return e.jsxs("div",{className:"max-w-[464px]",children:[e.jsx(oe,{type:"setupIntent",submitLabel:e.jsx(n,{message:"Change"}),returnUrl:`${s}/billing/change-payment-method/done`}),e.jsx(m,{variant:"outline",className:"w-full mt-16",size:"md",to:ye,elementType:p,type:"button",children:e.jsx(n,{message:"Go back"})})]})}function x(){var a,i,l;const s=U("me",{with:["subscriptions.product","subscriptions.price"]});return{subscription:(i=(a=s.data)==null?void 0:a.user.subscriptions)==null?void 0:i[0],isLoading:s.isLoading,user:(l=s.data)==null?void 0:l.user}}function k(){Z.invalidateQueries(["users"])}const O="/billing";function Ne(){const{billing:{stripe_public_key:s}}=F(),t=b(),[a]=K(),i=a.get("setup_intent_client_secret"),[l,r]=d.useState(),c=d.useRef();return d.useEffect(()=>{c.current||!i||(me(s).then(u=>{if(!u){r($());return}u.retrieveSetupIntent(i).then(({setupIntent:j})=>{(j==null?void 0:j.status)==="succeeded"&&we(j.payment_method).then(()=>{k()}),r($(j==null?void 0:j.status))})}),c.current=!0)},[s,i]),i?e.jsx(xe,{config:l}):(t(O),null)}function $(s){switch(s){case"succeeded":return{...P,message:y("Payment method changed successfully!"),status:"success"};case"processing":return{...P,message:y("Your request is processing. We'll update you when your payment method is confirmed."),status:"success"};case"requires_payment_method":return{...P,message:y("Payment method confirmation failed. Please try another payment method."),status:"error"};default:return{...P,message:y("Something went wrong"),status:"error"}}}const P={link:O,buttonLabel:y("Go back")};function we(s){return T.post("billing/stripe/change-default-payment-method",{payment_method_id:s})}function f({title:s,children:t}){return e.jsxs("div",{className:"mb-64",children:[e.jsx("div",{className:"text-sm font-medium uppercase pb-16 mb-16 border-b",children:s}),t]})}function Pe(){const s=b();return e.jsxs(d.Fragment,{children:[e.jsxs(w,{children:[e.jsx(o,{isLink:!0,onSelected:()=>s("/billing"),children:e.jsx(n,{message:"Billing"})}),e.jsx(o,{children:e.jsx(n,{message:"Plans"})})]}),e.jsx("h1",{className:"my-32 text-3xl font-bold md:my-64",children:e.jsx(n,{message:"Change your plan"})}),e.jsx(f,{title:e.jsx(n,{message:"Available plans"}),children:e.jsx(q,{initial:!1,mode:"wait",children:e.jsx(Ce,{})})})]})}function Ce(){var i,l;const s=C(),[t,a]=d.useState("monthly");return s.isLoading?e.jsx(ke,{},"plan-skeleton"):e.jsxs(d.Fragment,{children:[e.jsx(V,{products:(i=s.data)==null?void 0:i.products,selectedCycle:t,onChange:a,className:"mb-20",size:"md"}),(l=s.data)==null?void 0:l.products.map(r=>{const c=X(t,r.prices);return!c||r.hidden?null:d.createElement(S.div,{..._,key:r.id,className:"justify-between gap-40 border-b py-32 md:flex"},e.jsxs("div",{className:"mb-40 md:mb-0",children:[e.jsx("div",{className:"text-xl font-bold",children:r.name}),e.jsx(v,{price:c,className:"text-lg"}),e.jsx("div",{className:"mt-12 text-base",children:r.description}),e.jsx(Se,{plan:r})]}),e.jsx(_e,{product:r,price:c}))})]},"plan-list")}function Se({plan:s}){return s.feature_list.length?e.jsxs("div",{className:"mt-32",children:[e.jsx("div",{className:"mb-10 text-sm font-semibold",children:e.jsx(n,{message:"What's included"})}),s.feature_list.map(t=>e.jsxs("div",{className:"flex items-center gap-10 text-sm",children:[e.jsx(D,{className:"text-positive",size:"sm"}),e.jsx(n,{message:t})]},t))]}):null}function _e({product:s,price:t}){const{subscription:a}=x();return!(a!=null&&a.price)||!(a!=null&&a.product)?null:a.product_id===s.id&&a.price_id===t.id?e.jsxs("div",{className:"flex w-[168px] items-center justify-center gap-10 text-muted",children:[e.jsx(D,{size:"md"}),e.jsx(n,{message:"Current plan"})]}):e.jsx(m,{variant:"flat",color:"primary",className:"w-[168px]",size:"md",elementType:p,to:`/billing/change-plan/${s.id}/${t.id}/confirm`,children:e.jsx(n,{message:"Continue"})})}function ke(){return e.jsxs(S.div,{..._,className:"border-b py-32 text-2xl",children:[e.jsx(h,{className:"mb-8"}),e.jsx(h,{className:"mb-14"}),e.jsx(h,{className:"mb-24"}),e.jsx(h,{className:"mb-12"})]},"plan-skeleton")}function Be(){const{trans:s}=ee(),t=b();return se(a=>Le(a),{onSuccess:()=>{ae(s(y("Plan changed."))),k(),t("/billing")},onError:a=>ne(a)})}function Le({subscriptionId:s,...t}){return T.post(`billing/subscriptions/${s}/change-plan`,t).then(a=>a.data)}const L="/billing/change-plan";function ze(){const{productId:s,priceId:t}=te(),a=b(),i=C(),{subscription:l}=x(),r=Be();if(!i.data||(l==null?void 0:l.price_id)==t)return e.jsx(E,{to:"/billing/change-plan",replace:!0});const c=i.data.products.find(B=>`${B.id}`===s),u=c==null?void 0:c.prices.find(B=>`${B.id}`===t);if(!c||!u||!l)return a(L),null;const j=e.jsxs("span",{className:"whitespace-nowrap",children:[e.jsx(N,{date:l.renews_at,preset:"long"}),";"]});return e.jsxs(d.Fragment,{children:[e.jsxs(w,{children:[e.jsx(o,{isLink:!0,onSelected:()=>a("/billing"),children:e.jsx(n,{message:"Billing"})}),e.jsx(o,{onSelected:()=>a(L),children:e.jsx(n,{message:"Plans"})}),e.jsx(o,{children:e.jsx(n,{message:"Confirm"})})]}),e.jsx("h1",{className:"text-3xl font-bold my-32 md:my-64",children:e.jsx(n,{message:"Confirm your new plan"})}),e.jsx(f,{title:e.jsx(n,{message:"Changing to"}),children:e.jsxs("div",{className:"max-w-[464px]",children:[e.jsx("div",{className:"text-xl font-bold",children:c.name}),e.jsx(v,{price:u,className:"text-lg"}),e.jsx("div",{className:"text-base mt-12 border-b pb-24 mb-48",children:e.jsx(n,{message:"You will be charged the new price starting :date",values:{date:j}})}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{variant:"flat",color:"primary",size:"md",className:"w-full mb-16",onClick:()=>{r.mutate({subscriptionId:l.id,newProductId:c.id,newPriceId:u.id})},disabled:r.isLoading,children:e.jsx(n,{message:"Confirm"})})}),e.jsx("div",{children:e.jsx(m,{variant:"outline",className:"w-full",to:L,elementType:p,children:e.jsx(n,{message:"Go back"})})}),e.jsx("div",{className:"text-xs text-muted mt-12",children:e.jsx(n,{message:"By confirming your new plan, you agree to our terms of Service and privacy policy."})})]})]})})]})}const z="/billing";function Re(){const s=b(),t=C(),{subscription:a}=x(),i=ue(),l=a==null?void 0:a.product,r=a==null?void 0:a.price;if(!t.data)return null;if(!a||!l||!r)return s(z),null;const c=e.jsx("span",{className:"whitespace-nowrap",children:e.jsx(N,{date:a.renews_at,preset:"long"})}),u=()=>{i.mutate({subscriptionId:a.id},{onSuccess:()=>{k(),s("/billing")}})};return e.jsxs(d.Fragment,{children:[e.jsxs(w,{children:[e.jsx(o,{isLink:!0,onSelected:()=>s(z),children:e.jsx(n,{message:"Billing"})}),e.jsx(o,{children:e.jsx(n,{message:"Cancel"})})]}),e.jsx("h1",{className:"text-3xl font-bold my-32 md:my-64",children:e.jsx(n,{message:"Cancel your plan"})}),e.jsx(f,{title:e.jsx(n,{message:"Current plan"}),children:e.jsxs("div",{className:"max-w-[464px]",children:[e.jsx("div",{className:"text-xl font-bold",children:l.name}),e.jsx(v,{price:r,className:"text-lg"}),e.jsxs("div",{className:"text-base mt-12 border-b pb-24 mb-48",children:[e.jsx(n,{message:"Your plan will be canceled, but is still available until the end of your billing period on :date",values:{date:c}}),e.jsx("div",{className:"mt-20",children:e.jsx(n,{message:"If you change your mind, you can renew your subscription."})})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{variant:"flat",color:"primary",size:"md",className:"w-full mb-16",onClick:u,disabled:i.isLoading,children:e.jsx(n,{message:"Cancel plan"})})}),e.jsx("div",{children:e.jsx(m,{variant:"outline",className:"w-full",to:z,elementType:p,children:e.jsx(n,{message:"Go back"})})}),e.jsx("div",{className:"text-xs text-muted mt-12",children:e.jsx(n,{message:"By cancelling your plan, you agree to our terms of service and privacy policy."})})]})]})})]})}const R="/billing";function Ie(){const s=b(),t=C(),{subscription:a}=x(),i=je(),l=a==null?void 0:a.product,r=a==null?void 0:a.price;if(!t.data)return null;if(!a||!l||!r)return s(R),null;const c=e.jsxs("span",{className:"whitespace-nowrap",children:[e.jsx(N,{date:a.ends_at,preset:"long"}),";"]}),u=()=>{i.mutate({subscriptionId:a.id},{onSuccess:()=>{k(),s("/billing")}})};return e.jsxs(d.Fragment,{children:[e.jsxs(w,{children:[e.jsx(o,{isLink:!0,onSelected:()=>s(R),children:e.jsx(n,{message:"Billing"})}),e.jsx(o,{children:e.jsx(n,{message:"Renew"})})]}),e.jsx("h1",{className:"text-3xl font-bold my-32 md:my-64",children:e.jsx(n,{message:"Renew your plan"})}),e.jsx(f,{title:e.jsx(n,{message:"Current plan"}),children:e.jsxs("div",{className:"max-w-[464px]",children:[e.jsx("div",{className:"text-xl font-bold",children:l.name}),e.jsx(v,{price:r,className:"text-lg"}),e.jsx("div",{className:"text-base mt-12 border-b pb-24 mb-48",children:e.jsx(n,{message:"This plan will no longer be canceled. It will renew on :date",values:{date:c}})}),e.jsx(m,{variant:"flat",color:"primary",size:"md",className:"w-full mb-16",onClick:u,disabled:i.isLoading,children:e.jsx(n,{message:"Renew plan"})}),e.jsx(m,{variant:"outline",className:"w-full",to:R,elementType:p,children:e.jsx(n,{message:"Go back"})}),e.jsx("div",{className:"text-xs text-muted mt-12",children:e.jsx(n,{message:"By renewing your plan, you agree to our terms of service and privacy policy."})})]})})]})}function Fe(){const{subscription:s}=x();if(!(s!=null&&s.price)||!(s!=null&&s.product))return null;const t=e.jsx("span",{className:"whitespace-nowrap",children:e.jsx(N,{preset:"long",date:s.ends_at})});return e.jsx(f,{title:e.jsx(n,{message:"Current plan"}),children:e.jsxs("div",{className:"flex gap-20 justify-between mt-24",children:[e.jsxs("div",{children:[e.jsx(G,{className:"w-min mb-10",size:"xs",radius:"rounded",color:"danger",children:e.jsx(n,{message:"Canceled"})}),e.jsx("div",{className:"text-xl font-bold mb-2",children:s.product.name}),e.jsx(v,{className:"text-xl mb-8",price:s.price}),e.jsxs("div",{className:"text-base flex items-center gap-8",children:[e.jsx(ge,{size:"sm",className:"text-muted"}),e.jsx(n,{message:"Your plan will be canceled on :date",values:{date:t}})]})]}),e.jsx("div",{className:"w-[233px]",children:e.jsx(m,{variant:"flat",color:"primary",size:"md",className:"w-full mb-12",elementType:p,to:"/billing/renew",children:e.jsx(n,{message:"Renew plan"})})})]})})}function Te(){const{subscription:s}=x();if(!(s!=null&&s.price)||!(s!=null&&s.product))return null;const t=e.jsx(N,{preset:"long",date:s.renews_at});return e.jsx(f,{title:e.jsx(n,{message:"Current plan"}),children:e.jsxs("div",{className:"flex gap-20 justify-between mt-24",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xl font-bold mb-2",children:s.product.name}),e.jsx(v,{className:"text-xl mb-2",price:s.price}),e.jsx("div",{className:"text-base",children:e.jsx(n,{message:"Your plan renews on :date",values:{date:t}})})]}),e.jsxs("div",{className:"w-[233px]",children:[e.jsx(m,{variant:"flat",color:"primary",size:"md",className:"w-full mb-12",elementType:p,to:"/billing/change-plan",children:e.jsx(n,{message:"Change plan"})}),e.jsx(m,{variant:"outline",color:"danger",size:"md",className:"w-full",elementType:p,to:"/billing/cancel",children:e.jsx(n,{message:"Cancel plan"})})]})]})})}const $e=""+new URL("paypal-c2a77c63.svg",import.meta.url).href;function Me(){const{user:s,subscription:t}=x();if(!s||!t)return null;const i=t.gateway_name==="paypal"?Ue:Ee;return e.jsx(f,{title:e.jsx(n,{message:"Payment method"}),children:e.jsx(i,{methodClassName:"whitespace-nowrap text-base max-w-[464px] flex items-center gap-10",linkClassName:"flex items-center gap-4 text-muted mt-18 block hover:underline"})})}function Ee({methodClassName:s,linkClassName:t}){const{user:a}=x();return a?e.jsxs(d.Fragment,{children:[e.jsxs("div",{className:s,children:[e.jsx("span",{className:"capitalize",children:a.card_brand})," ••••",a.card_last_four,a.card_expires&&e.jsx("div",{className:"ml-auto",children:e.jsx(n,{message:"Expires :date",values:{date:a.card_expires}})})]}),e.jsxs(p,{className:t,to:"/billing/change-payment-method",children:[e.jsx(A,{size:"sm"}),e.jsx(n,{message:"Change payment method"})]})]}):null}function Ue({methodClassName:s,linkClassName:t}){const{subscription:a}=x();return e.jsxs(d.Fragment,{children:[e.jsx("div",{className:s,children:e.jsx(ie,{src:$e})}),e.jsxs("a",{className:t,href:`https://www.sandbox.paypal.com/myaccount/autopay/connect/${a==null?void 0:a.gateway_id}/funding`,target:"_blank",rel:"noreferrer",children:[e.jsx(A,{size:"sm"}),e.jsx(n,{message:"Change payment method"})]})]})}const Y="billing/invoices";function qe(s){return le([Y],()=>De(s))}function De(s){return T.get(Y,{params:{userId:s}}).then(t=>t.data)}function Ge(){var i;const{user:s}=x(),t=qe(s==null?void 0:s.id);if(!s)return null;const a=(i=t.data)==null?void 0:i.invoices;return e.jsx(f,{title:e.jsx(n,{message:"Payment history"}),children:e.jsx("div",{className:"max-w-[464px]",children:e.jsx(q,{initial:!1,mode:"wait",children:t.isLoading?e.jsx(Oe,{},"loading-skeleton"):e.jsx(Ae,{invoices:a},"invoices")})})})}function Ae({invoices:s}){const{base_url:t}=F();return e.jsxs(S.div,{..._,children:[s!=null&&s.length?void 0:e.jsx("div",{className:"text-muted italic",children:e.jsx(n,{message:"No invoices yet"})}),s==null?void 0:s.map(a=>{var i;return e.jsxs("div",{className:"whitespace-nowrap text-base flex items-center justify-between gap-10 mb-14",children:[e.jsxs("a",{href:`${t}/billing/invoices/${a.uuid}`,target:"_blank",className:"flex items-center gap-8 hover:underline",rel:"noreferrer",children:[e.jsx(N,{date:a.created_at}),e.jsx(de,{size:"xs"})]}),a.subscription.price&&e.jsx("div",{children:e.jsx(re,{value:a.subscription.price.amount,currency:a.subscription.price.currency})}),e.jsx(G,{size:"xs",color:a.paid?"positive":"danger",radius:"rounded",children:a.paid?e.jsx(n,{message:"Paid"}):e.jsx(n,{message:"Unpaid"})}),e.jsx("div",{children:(i=a.subscription.product)==null?void 0:i.name})]},a.id)})]})}function Oe(){return e.jsxs(S.div,{..._,children:[e.jsx(h,{className:"mb-14"}),e.jsx(h,{className:"mb-14"}),e.jsx(h,{className:"mb-14"}),e.jsx(h,{className:"mb-14"}),e.jsx(h,{})]})}function Ye(){const{subscription:s}=x();if(!(s!=null&&s.price)||!(s!=null&&s.product))return null;const t=s.ends_at?e.jsx(Fe,{}):e.jsx(Te,{});return e.jsxs("div",{children:[t,e.jsx(Me,{}),e.jsx(Ge,{})]})}function Ve(){return e.jsx(ce,{children:e.jsxs(g,{path:"/",element:e.jsx(he,{children:e.jsx(pe,{})}),children:[e.jsx(g,{index:!0,element:e.jsx(Ye,{})}),e.jsxs(g,{path:"change-payment-method",element:e.jsx(be,{}),children:[e.jsx(g,{index:!0,element:e.jsx(ve,{})}),e.jsx(g,{path:"done",element:e.jsx(Ne,{})})]}),e.jsx(g,{path:"change-plan",element:e.jsx(Pe,{})}),e.jsx(g,{path:"change-plan/:productId/:priceId/confirm",element:e.jsx(ze,{})}),e.jsx(g,{path:"cancel",element:e.jsx(Re,{})}),e.jsx(g,{path:"renew",element:e.jsx(Ie,{})})]})})}export{Ve as default};
//# sourceMappingURL=billing-page-routes-c2cfda4f.js.map
