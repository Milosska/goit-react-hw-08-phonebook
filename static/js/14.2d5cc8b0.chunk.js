"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[14],{5624:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r={};t.r(r),t.d(r,{Picture0:function(){return F},Picture0_big:function(){return q},Picture1:function(){return G},Picture1_big:function(){return W},Picture2:function(){return Q},Picture2_big:function(){return nn}});var i=t(7692),a=t(9439),c=t(2791),o=t(1413),u=t(5987),s=t(9007);var l=function(n,e){var t=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!t.current)return n();t.current=!1}),e)},d=t(7904),f=t(5746),p=t(1683),h=Math.pow(2,31)-1;function v(n,e,t){var r=t-Date.now();n.current=r<=h?setTimeout(e,r):setTimeout((function(){return v(n,e,t)}),h)}function m(){var n=(0,f.Z)(),e=(0,c.useRef)();return(0,p.Z)((function(){return clearTimeout(e.current)})),(0,c.useMemo)((function(){var t=function(){return clearTimeout(e.current)};return{set:function(r,i){void 0===i&&(i=0),n()&&(t(),i<=h?e.current=setTimeout(r,i):v(e,r,Date.now()+i))},clear:t}}),[])}var x=t(1396),b=t(1694),g=t.n(b),j=t(8580),y=(0,t(6543).Z)("carousel-caption"),k=t(162),Z=t(184),w=["as","bsPrefix","className"],C=c.forwardRef((function(n,e){var t=n.as,r=void 0===t?"div":t,i=n.bsPrefix,a=n.className,c=(0,u.Z)(n,w),s=g()(a,(0,k.vE)(i,"carousel-item"));return(0,Z.jsx)(r,(0,o.Z)((0,o.Z)({ref:e},c),{},{className:s}))}));C.displayName="CarouselItem";var N=C,S=t(1701),E=t(1380),I=t(7202),P=t(4083),M=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],T={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,Z.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,Z.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var L=c.forwardRef((function(n,e){var t=(0,j.Ch)(n,{activeIndex:"onSelect"}),r=t.as,i=void 0===r?"div":r,f=t.bsPrefix,p=t.slide,h=t.fade,v=t.controls,b=t.indicators,y=t.indicatorLabels,w=t.activeIndex,C=t.onSelect,N=t.onSlide,T=t.onSlid,L=t.interval,_=t.keyboard,R=t.onKeyDown,A=t.pause,O=t.onMouseOver,D=t.onMouseOut,z=t.wrap,U=t.touch,K=t.onTouchStart,V=t.onTouchMove,X=t.onTouchEnd,F=t.prevIcon,$=t.prevLabel,q=t.nextIcon,B=t.nextLabel,G=t.variant,H=t.className,W=t.children,J=(0,u.Z)(t,M),Q=(0,k.vE)(f,"carousel"),Y=(0,k.SC)(),nn=(0,c.useRef)(null),en=(0,c.useState)("next"),tn=(0,a.Z)(en,2),rn=tn[0],an=tn[1],cn=(0,c.useState)(!1),on=(0,a.Z)(cn,2),un=on[0],sn=on[1],ln=(0,c.useState)(!1),dn=(0,a.Z)(ln,2),fn=dn[0],pn=dn[1],hn=(0,c.useState)(w||0),vn=(0,a.Z)(hn,2),mn=vn[0],xn=vn[1];(0,c.useEffect)((function(){fn||w===mn||(nn.current?an(nn.current):an((w||0)>mn?"next":"prev"),p&&pn(!0),xn(w||0))}),[w,fn,mn,p]),(0,c.useEffect)((function(){nn.current&&(nn.current=null)}));var bn,gn=0;(0,S.Ed)(W,(function(n,e){++gn,e===w&&(bn=n.props.interval)}));var jn=(0,d.Z)(bn),yn=(0,c.useCallback)((function(n){if(!fn){var e=mn-1;if(e<0){if(!z)return;e=gn-1}nn.current="prev",null==C||C(e,n)}}),[fn,mn,C,z,gn]),kn=(0,s.Z)((function(n){if(!fn){var e=mn+1;if(e>=gn){if(!z)return;e=0}nn.current="next",null==C||C(e,n)}})),Zn=(0,c.useRef)();(0,c.useImperativeHandle)(e,(function(){return{element:Zn.current,prev:yn,next:kn}}));var wn=(0,s.Z)((function(){!document.hidden&&function(n){if(!n||!n.style||!n.parentNode||!n.parentNode.style)return!1;var e=getComputedStyle(n);return"none"!==e.display&&"hidden"!==e.visibility&&"none"!==getComputedStyle(n.parentNode).display}(Zn.current)&&(Y?yn():kn())})),Cn="next"===rn?"start":"end";l((function(){p||(null==N||N(mn,Cn),null==T||T(mn,Cn))}),[mn]);var Nn="".concat(Q,"-item-").concat(rn),Sn="".concat(Q,"-item-").concat(Cn),En=(0,c.useCallback)((function(n){(0,I.Z)(n),null==N||N(mn,Cn)}),[N,mn,Cn]),In=(0,c.useCallback)((function(){pn(!1),null==T||T(mn,Cn)}),[T,mn,Cn]),Pn=(0,c.useCallback)((function(n){if(_&&!/input|textarea/i.test(n.target.tagName))switch(n.key){case"ArrowLeft":return n.preventDefault(),void(Y?kn(n):yn(n));case"ArrowRight":return n.preventDefault(),void(Y?yn(n):kn(n))}null==R||R(n)}),[_,R,yn,kn,Y]),Mn=(0,c.useCallback)((function(n){"hover"===A&&sn(!0),null==O||O(n)}),[A,O]),Tn=(0,c.useCallback)((function(n){sn(!1),null==D||D(n)}),[D]),Ln=(0,c.useRef)(0),_n=(0,c.useRef)(0),Rn=m(),An=(0,c.useCallback)((function(n){Ln.current=n.touches[0].clientX,_n.current=0,"hover"===A&&sn(!0),null==K||K(n)}),[A,K]),On=(0,c.useCallback)((function(n){n.touches&&n.touches.length>1?_n.current=0:_n.current=n.touches[0].clientX-Ln.current,null==V||V(n)}),[V]),Dn=(0,c.useCallback)((function(n){if(U){var e=_n.current;Math.abs(e)>40&&(e>0?yn(n):kn(n))}"hover"===A&&Rn.set((function(){sn(!1)}),L||void 0),null==X||X(n)}),[U,A,yn,kn,Rn,L,X]),zn=null!=L&&!un&&!fn,Un=(0,c.useRef)();(0,c.useEffect)((function(){var n,e;if(zn){var t=Y?yn:kn;return Un.current=window.setInterval(document.visibilityState?wn:t,null!=(n=null!=(e=jn.current)?e:L)?n:void 0),function(){null!==Un.current&&clearInterval(Un.current)}}}),[zn,yn,kn,jn,L,wn,Y]);var Kn=(0,c.useMemo)((function(){return b&&Array.from({length:gn},(function(n,e){return function(n){null==C||C(e,n)}}))}),[b,gn,C]);return(0,Z.jsxs)(i,(0,o.Z)((0,o.Z)({ref:Zn},J),{},{onKeyDown:Pn,onMouseOver:Mn,onMouseOut:Tn,onTouchStart:An,onTouchMove:On,onTouchEnd:Dn,className:g()(H,Q,p&&"slide",h&&"".concat(Q,"-fade"),G&&"".concat(Q,"-").concat(G)),children:[b&&(0,Z.jsx)("div",{className:"".concat(Q,"-indicators"),children:(0,S.UI)(W,(function(n,e){return(0,Z.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=y&&y.length?y[e]:"Slide ".concat(e+1),className:e===mn?"active":void 0,onClick:Kn?Kn[e]:void 0,"aria-current":e===mn},e)}))}),(0,Z.jsx)("div",{className:"".concat(Q,"-inner"),children:(0,S.UI)(W,(function(n,e){var t=e===mn;return p?(0,Z.jsx)(P.Z,{in:t,onEnter:t?En:void 0,onEntered:t?In:void 0,addEndListener:E.Z,children:function(e,r){return c.cloneElement(n,(0,o.Z)((0,o.Z)({},r),{},{className:g()(n.props.className,t&&"entered"!==e&&Nn,("entered"===e||"exiting"===e)&&"active",("entering"===e||"exiting"===e)&&Sn)}))}}):c.cloneElement(n,{className:g()(n.props.className,t&&"active")})}))}),v&&(0,Z.jsxs)(Z.Fragment,{children:[(z||0!==w)&&(0,Z.jsxs)(x.Z,{className:"".concat(Q,"-control-prev"),onClick:yn,children:[F,$&&(0,Z.jsx)("span",{className:"visually-hidden",children:$})]}),(z||w!==gn-1)&&(0,Z.jsxs)(x.Z,{className:"".concat(Q,"-control-next"),onClick:kn,children:[q,B&&(0,Z.jsx)("span",{className:"visually-hidden",children:B})]})]})]}))}));L.displayName="Carousel",L.defaultProps=T;var _,R,A,O,D,z,U=Object.assign(L,{Caption:y,Item:N}),K=t(168),V=t(6444),X=t.p+"static/media/1-min.2ecd3de54b370ce7faa6.jpg",F=t.t(X),$=t.p+"static/media/1@2x-min.cd059d2f912066b3a975.jpg",q=t.t($),B=t.p+"static/media/2-min.27a1d086dee833b0b072.jpg",G=t.t(B),H=t.p+"static/media/2@2x-min.7e40cee690a0bc9af55d.jpg",W=t.t(H),J=t.p+"static/media/3-min.c086b882d4800f97c89c.jpg",Q=t.t(J),Y=t.p+"static/media/3@2x-min.eec798f8ce5e14d3eb3b.jpg",nn=t.t(Y),en=function(n,e){var t=Object.keys(r).filter((function(e){return e.includes(n)}));return"small"===e?r[t[0]].default:r[t[1]].default},tn=(0,V.ZP)(U.Item)(_||(_=(0,K.Z)(["\n  width: 100%;\n  height: 500px;\n  background-color: black;\n  background-image: linear-gradient(\n      to right,\n      rgba(47, 48, 58, 0.4),\n      rgba(47, 48, 58, 0.4)\n    ),\n    url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: linear-gradient(\n        to right,\n        rgba(47, 48, 58, 0.4),\n        rgba(47, 48, 58, 0.4)\n      ),\n      url(",");\n  }\n"])),(function(n){return en(n.num,"small")}),(function(n){return en(n.num,"big")})),rn=V.ZP.h3(R||(R=(0,K.Z)(["\n  font-weight: 500;\n  font-size: 32px;\n"]))),an=V.ZP.p(A||(A=(0,K.Z)(["\n  font-size: 24px;\n"]))),cn=function(){var n=(0,c.useState)(0),e=(0,a.Z)(n,2),t=e[0],r=e[1];return(0,Z.jsxs)(U,{activeIndex:t,onSelect:function(n,e){r(n)},children:[(0,Z.jsx)(tn,{num:0,children:(0,Z.jsxs)(U.Caption,{children:[(0,Z.jsx)(rn,{children:"Keep your working contacts neat"}),(0,Z.jsx)(an,{children:"Use our platform to make meeting scheduling easy."})]})}),(0,Z.jsx)(tn,{num:1,children:(0,Z.jsxs)(U.Caption,{children:[(0,Z.jsx)(rn,{children:"Stay in touch during vacation"}),(0,Z.jsx)(an,{children:"Give your trusted contacts all the essential piece of information on time wherever you are."})]})}),(0,Z.jsx)(tn,{num:2,children:(0,Z.jsxs)(U.Caption,{children:[(0,Z.jsx)(rn,{children:"Ensure stable connection"}),(0,Z.jsx)(an,{children:"Provide steady customer experience for your clients even when you are out of office."})]})})]})},on=V.ZP.ul(O||(O=(0,K.Z)(["\n  display: flex;\n  gap: 40px;\n  justify-content: center;\n  align-items: center;\n  margin: 50px 0;\n  padding: 0 20px;\n  list-style: none;\n"]))),un=V.ZP.li(D||(D=(0,K.Z)(["\n  width: 400px;\n  text-align: center;\n  font-size: 16px;\n\n  > svg {\n    width: 80px;\n    height: 80px;\n    margin-bottom: 10px;\n  }\n"]))),sn=V.ZP.h4(z||(z=(0,K.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 24px;\n"]))),ln=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(cn,{}),(0,Z.jsxs)(on,{children:[(0,Z.jsxs)(un,{children:[(0,Z.jsx)(i.p$$,{}),(0,Z.jsx)(sn,{children:"Expand your network"}),(0,Z.jsx)("p",{children:"Make and retain professional and personal connections that will not happen any other way."})]}),(0,Z.jsxs)(un,{children:[(0,Z.jsx)(i.s3B,{}),(0,Z.jsx)(sn,{children:"Save time"}),(0,Z.jsx)("p",{children:"Maintain all contacts in one location to quickly access any contact you need."})]}),(0,Z.jsxs)(un,{children:[(0,Z.jsx)(i.rjU,{}),(0,Z.jsx)(sn,{children:"Automate processes"}),(0,Z.jsx)("p",{children:"Automate some of your working processes by instantly calling any of your contacts directly from the App."})]})]})]})}},1701:function(n,e,t){t.d(e,{Ed:function(){return a},UI:function(){return i},XW:function(){return c}});var r=t(2791);function i(n,e){var t=0;return r.Children.map(n,(function(n){return r.isValidElement(n)?e(n,t++):n}))}function a(n,e){var t=0;r.Children.forEach(n,(function(n){r.isValidElement(n)&&e(n,t++)}))}function c(n,e){return r.Children.toArray(n).some((function(n){return r.isValidElement(n)&&n.type===e}))}}}]);
//# sourceMappingURL=14.2d5cc8b0.chunk.js.map