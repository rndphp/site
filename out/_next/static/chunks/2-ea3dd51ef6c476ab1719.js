(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{2167:function(e,n,a){"use strict";var t=a(3848),i=a(9448);n.default=void 0;var o=i(a(7294)),s=a(9414),l=a(4651),r=a(7426),d={};function c(e,n,a,t){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,a,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[n+"%"+a+(i?"%"+i:"")]=!0}}var _=function(e){var n,a=!1!==e.prefetch,i=(0,l.useRouter)(),_=o.default.useMemo((function(){var n=(0,s.resolveHref)(i,e.href,!0),a=t(n,2),o=a[0],l=a[1];return{href:o,as:e.as?(0,s.resolveHref)(i,e.as):l||o}}),[i,e.href,e.as]),m=_.href,f=_.as,u=e.children,p=e.replace,h=e.shallow,I=e.scroll,y=e.locale;"string"===typeof u&&(u=o.default.createElement("a",null,u));var F=(n=o.Children.only(u))&&"object"===typeof n&&n.ref,x=(0,r.useIntersection)({rootMargin:"200px"}),g=t(x,2),v=g[0],w=g[1],j=o.default.useCallback((function(e){v(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[F,v]);(0,o.useEffect)((function(){var e=w&&a&&(0,s.isLocalURL)(m),n="undefined"!==typeof y?y:i&&i.locale,t=d[m+"%"+f+(n?"%"+n:"")];e&&!t&&c(i,m,f,{locale:n})}),[f,m,w,y,a,i]);var L={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,a,t,i,o,l,r){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(a))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](a,t,{shallow:o,locale:r,scroll:l}))}(e,i,m,f,p,h,I,y)},onMouseEnter:function(e){(0,s.isLocalURL)(m)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c(i,m,f,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof y?y:i&&i.locale,k=i&&i.isLocaleDomain&&(0,s.getDomainLocale)(f,N,i&&i.locales,i&&i.domainLocales);L.href=k||(0,s.addBasePath)((0,s.addLocale)(f,N,i&&i.defaultLocale))}return o.default.cloneElement(n,L)};n.default=_},3282:function(e,n,a){"use strict";var t=a(5893),i=(a(7294),a(9008)),o=a(1163);n.Z=function(e){var n=e.title,a=e.desc;(0,o.useRouter)().asPath;return(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"".concat(n," \u2014 RND PHP")}),a&&(0,t.jsx)("meta",{name:"description",content:a}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"})]})}},8335:function(e,n,a){"use strict";a.d(n,{Z:function(){return U}});var t=a(5893),i=a(7294),o=a(1274),s=a(1664),l=a(5675),r=a(3559),d=a.n(r),c=function(){return(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{className:d().link,children:(0,t.jsx)(l.default,{src:"/img/logoInverse.svg",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f PHP RND",layout:"fixed",width:138,height:50})})})},_=[{name:"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",code:"vk",link:"https://vk.com/rnd_php"},{name:"Telegram",code:"telegram",link:"https://t.me/rndphp"},{name:"Youtube",code:"youtube",link:"https://www.youtube.com/channel/UC1KvBdMDxZpsOecra6-Kw6g"}],m=a(2694),f=a.n(m),u=function(){return(0,t.jsx)("div",{className:f().social,children:(0,t.jsx)("ul",{className:f().list,children:_.map((function(e){return(0,t.jsx)("li",{className:f().listItem,children:(0,t.jsx)("a",{className:f().item,href:e.link,children:(0,t.jsx)(l.default,{className:f().image,src:"/img/social/".concat(e.code,".svg"),alt:e.name,layout:"fixed",width:50,height:50})})},e.code)}))})})},p=a(2536),h=a.n(p),I=function(){return(0,t.jsx)("footer",{className:h().footer,children:(0,t.jsx)(o.Z,{children:(0,t.jsxs)("div",{className:h().wrapper,children:[(0,t.jsx)("div",{className:h().logo,children:(0,t.jsx)(c,{})}),(0,t.jsx)("div",{className:h().menu,children:(0,t.jsx)(u,{})})]})})})},y=a(9400),F=a.n(y),x=function(){return(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{className:F().link,children:(0,t.jsx)(l.default,{className:F().image,src:"/img/logo.svg",alt:"PHP RND",layout:"fixed",width:176,height:64})})})},g=[{name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",code:"events",link:"/events/"},{name:"\u0414\u043e\u043a\u043b\u0430\u0434\u044b",code:"lectures",link:"/lectures/"},{name:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",code:"news",link:"/news/"},{name:"\u041c\u0435\u0440\u0447",code:"merch",link:"/merch/"}],v=a(6010),w=a(2893),j=a.n(w),L=function(){var e=(0,i.useState)(!1),n=e[0],a=e[1];return(0,i.useEffect)((function(){document.body.style.overflow=n?"hidden":"auto"}),[n]),(0,t.jsxs)("div",{className:j().menu,children:[(0,t.jsx)("div",{className:(0,v.Z)(j().wrapper,n&&j().active),children:(0,t.jsx)("ul",{className:j().list,children:g.map((function(e){return(0,t.jsx)("li",{className:j().listItem,children:(0,t.jsx)("a",{className:j().item,href:e.link,children:e.name})},e.code)}))})}),(0,t.jsx)("div",{className:(0,v.Z)(j().burger,n&&j().active),onClick:function(){return a(!n)},role:"presentation"})]})},N=a(9746),k=a.n(N),M=function(){return(0,t.jsx)("header",{className:k().header,children:(0,t.jsx)(o.Z,{children:(0,t.jsxs)("div",{className:k().wrapper,children:[(0,t.jsx)("div",{className:k().logo,children:(0,t.jsx)(x,{})}),(0,t.jsx)("div",{className:k().menu,children:(0,t.jsx)(L,{})})]})})})},R=a(8739),D=a.n(R),U=function(e){var n=e.children;return(0,t.jsxs)("div",{className:D().wrapper,id:"wrapper",children:[(0,t.jsx)(M,{}),(0,t.jsx)("div",{className:D().middle,children:n}),(0,t.jsx)(I,{})]})}},2536:function(e){e.exports={footer:"style_footer__1GP2i",wrapper:"style_wrapper__NnupV",animationFadeIn:"style_animationFadeIn__1Uu5w",animationFadeInUp:"style_animationFadeInUp__2qaK9",animationFadeInDown:"style_animationFadeInDown__3ZRqQ",animationFadeInLeft:"style_animationFadeInLeft__3blWJ",animationFadeInLeftMin:"style_animationFadeInLeftMin__3A476",animationFadeInRight:"style_animationFadeInRight__2JdAy"}},3559:function(e){e.exports={link:"style_link__3Qt25",animationFadeIn:"style_animationFadeIn__QM2PY",animationFadeInUp:"style_animationFadeInUp__3F01q",animationFadeInDown:"style_animationFadeInDown__CdEiS",animationFadeInLeft:"style_animationFadeInLeft__1luMN",animationFadeInLeftMin:"style_animationFadeInLeftMin__1oz8t",animationFadeInRight:"style_animationFadeInRight__1ACqu"}},2694:function(e){e.exports={list:"style_list__2goLj",listItem:"style_listItem__1iKTH",item:"style_item__1TVuK",animationFadeIn:"style_animationFadeIn__1WReS",animationFadeInUp:"style_animationFadeInUp__3lpYl",animationFadeInDown:"style_animationFadeInDown__1Wmm2",animationFadeInLeft:"style_animationFadeInLeft__2NHwy",animationFadeInLeftMin:"style_animationFadeInLeftMin__2lBIa",animationFadeInRight:"style_animationFadeInRight__wHTLi"}},9400:function(e){e.exports={link:"style_link__7k7X6",animationFadeIn:"style_animationFadeIn__3d1e-",animationFadeInUp:"style_animationFadeInUp__2YcHA",animationFadeInDown:"style_animationFadeInDown__3818H",animationFadeInLeft:"style_animationFadeInLeft__21EUl",animationFadeInLeftMin:"style_animationFadeInLeftMin__3EzDZ",animationFadeInRight:"style_animationFadeInRight__-51R7"}},2893:function(e){e.exports={wrapper:"style_wrapper__8Zurm",active:"style_active__26F3G",list:"style_list__1Z5IF",listItem:"style_listItem__9QQNS",item:"style_item__3JduP",burger:"style_burger__yDX2G",animationFadeIn:"style_animationFadeIn__1NMCM",animationFadeInUp:"style_animationFadeInUp__2WvdQ",animationFadeInDown:"style_animationFadeInDown__2wVOd",animationFadeInLeft:"style_animationFadeInLeft__1dqjK",animationFadeInLeftMin:"style_animationFadeInLeftMin__2zTbd",animationFadeInRight:"style_animationFadeInRight__bX2S-"}},9746:function(e){e.exports={wrapper:"style_wrapper__3CoWH",logo:"style_logo__3B1Dn",header:"style_header__NHrEJ",animationFadeIn:"style_animationFadeIn__2AY7d",animationFadeInUp:"style_animationFadeInUp__1c8Wx",animationFadeInDown:"style_animationFadeInDown__21P_g",animationFadeInLeft:"style_animationFadeInLeft__2PFQs",animationFadeInLeftMin:"style_animationFadeInLeftMin__nfA_3",animationFadeInRight:"style_animationFadeInRight__19pGI"}},8739:function(e){e.exports={wrapper:"style_wrapper__idoO2",middle:"style_middle__1OnOE",animationFadeIn:"style_animationFadeIn__3McEr",animationFadeInUp:"style_animationFadeInUp__25Aqc",animationFadeInDown:"style_animationFadeInDown__23diQ",animationFadeInLeft:"style_animationFadeInLeft__uPope",animationFadeInLeftMin:"style_animationFadeInLeftMin__-ibDC",animationFadeInRight:"style_animationFadeInRight__3w9Az"}},9008:function(e,n,a){e.exports=a(2775)},1664:function(e,n,a){e.exports=a(2167)},1163:function(e,n,a){e.exports=a(4651)}}]);