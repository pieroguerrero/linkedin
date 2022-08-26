"use strict";(self.webpackChunklinkedin=self.webpackChunklinkedin||[]).push([[680],{9680:function(r,t,e){e.r(t),e.d(t,{authenticateAnonymously:function(){return k},handleAsyncJoinGoogle:function(){return w}});var n=e(4165),a=e(5861),u=e(1302),o=e(5990),s=e(7910),c=e(1734),i=function(r){try{var t=(0,o.p)(r.strUserId,r.strEmail,r.strFullName,r.strAuthMethod,r.strProfilePicURL,r.dtCreatedOn.toDate(),r.booActive);if(t)return t}catch(e){console.error("UserAdapter.fromDataBase:",e)}return null},f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a,u,i){var f;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f=(0,o.p)(t,e,a,u,i,new Date,!0),r.next=3,(0,c.UR)(f,t,s.MR.USERS);case 3:if(!r.sent){r.next=7;break}return r.abrupt("return",f);case 7:return r.abrupt("return",null);case 8:case"end":return r.stop()}}),r)})));return function(t,e,n,a,u){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.ZE)(t,s.MR.USERS);case 2:return e=r.sent,r.abrupt("return",i(e));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=e(7711),v=e(5166),d=(e(4453),e(3108),e(6870)),b=e(5384),h=e(5749),x=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t,a,u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,5749));case 2:return t=r.sent,a=t.DatabaseValues,r.next=6,a;case 6:return u=r.sent,r.abrupt("return",u?u.strDefaultProfilePicURL:"");case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),Z=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){var o,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l(t);case 2:if(!(o=r.sent)){r.next=8;break}return r.next=6,(0,b.CV)(o.strUserId);case 6:(s=r.sent)&&(o.objProfile=s,e((0,u.qy)(o)),a(p.Wq.FEED,{state:{loggedIn:!0}}));case 8:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}(),m=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a,u,o,s,c,i,f){var l,p,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=o.split(" "),p=l[0].length>0?l[0]:"Dwight",v=l.length>1?l.slice(1).join(" ").trim():"Schrute",r.next=5,(0,b.ED)(t,!0,[],e,a,u,p,v,s,c,i,f);case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})));return function(t,e,n,a,u,o,s,c,i){return r.apply(this,arguments)}}(),P=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a,o){var s,c,i,l,d,b,P,k,w;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=t.user,!(0,v.EO)(t)){r.next=41;break}if(l="",!(s.photoURL&&s.photoURL.length>0)){r.next=7;break}l=s.photoURL,r.next=10;break;case 7:return r.next=9,x();case 9:l=r.sent;case 10:return r.next=12,f(s.uid,null!==(c=s.email)&&void 0!==c?c:"",null!==(i=s.displayName)&&void 0!==i?i:"Dwight Schrute",e,l);case 12:if(!(d=r.sent)){r.next=39;break}return r.next=16,h.DatabaseValues;case 16:if(r.t2=P=r.sent,r.t1=null===r.t2,r.t1){r.next=20;break}r.t1=void 0===P;case 20:if(!r.t1){r.next=24;break}r.t3=void 0,r.next=25;break;case 24:r.t3=P.strDefaultBackgroundPicURL;case 25:if(r.t4=b=r.t3,r.t0=null!==r.t4,!r.t0){r.next=29;break}r.t0=void 0!==b;case 29:if(!r.t0){r.next=33;break}r.t5=b,r.next=34;break;case 33:r.t5="";case 34:return k=r.t5,r.next=37,m(d.strUserId,"",d.strProfilePicURL,k,d.strFullName,p.gT.ProfileHeadLineEmptyName,p.gT.ProfileCountryEmptyName,p.gT.ProfilePostalCodeEmptyName,p.gT.DefaultValueLanguageId);case 37:(w=r.sent)&&(d.objProfile=w,a((0,u.qy)(d)),o(p.Wq.FEED,{state:{loggedIn:!0}}));case 39:r.next=42;break;case 41:Z(s.uid,a,o);case 42:case"end":return r.stop()}}),r)})));return function(t,e,n,a){return r.apply(this,arguments)}}(),k=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,v.tA)();case 2:r.sent&&Z(d.Z.strUserId,t,e);case 4:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}(),w=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,v._g)();case 2:(a=r.sent)&&P(a,p.v1.FIREBASE_GOOGLE,t,e);case 4:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}()},5384:function(r,t,e){e.d(t,{ED:function(){return l},CV:function(){return p},L8:function(){return v}});var n=e(4165),a=e(5861);function u(r,t,e,n,a,u,o,s,c,i){return{strProfileId:r,booPrimary:t,arrSections:e,strAbout:n,objIntro:a,strProfilePicURL:u,strBgPicPath:o,dtCreatedOn:s,booActive:c,strUserId:i}}function o(r,t,e,n,a){return{strFirstName:r,strLastName:t,strHeadline:e,strCountryLoc:n,strPostalCodeLoc:a}}var s=function(r,t){return r+"-"+t},c=e(7910),i=e(1734),f=function(r){try{var t=o(r.objIntro.strFirstName,r.objIntro.strLastName,r.objIntro.strHeadline,r.objIntro.strCountryLoc,r.objIntro.strPostalCodeLoc),e=u(r.strProfileId,r.booPrimary,r.arrSections,r.strAbout,t,r.strProfilePicURL,r.strBgPicPath,r.dtCreatedOn.toDate(),r.booActive,r.strUserId);if(e)return e}catch(n){console.error("ProfileAdapter.profileFromDataBase:",n)}return null},l=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a,f,l,p,v,d,b,h,x,Z){var m,P;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m=o(v,d,b,h,x),P=u(s(t,Z),e,a,f,m,l,p,new Date,!0,t),r.next=4,(0,i.UR)(P,P.strProfileId,c.MR.USERS,t,c.MR.PROFILES);case 4:if(!r.sent){r.next=8;break}return r.abrupt("return",P);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})));return function(t,e,n,a,u,o,s,c,i,f,l,p){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[(0,i.ar)("booActive","==",!0),(0,i.ar)("booPrimary","==",!0)],r.next=3,(0,i.td)(e,c.MR.USERS,t,c.MR.PROFILES);case 3:if(!(a=r.sent)||1!==a.length){r.next=6;break}return r.abrupt("return",f(a[0].data()));case 6:return r.abrupt("return",null);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[(0,i.ar)("booActive","==",!0),(0,i.ar)("booPrimary","==",!0),(0,i.ar)("strUserId","in",t)],r.prev=1,r.next=4,(0,i.Xj)(e,c.MR.PROFILES);case 4:if(!(a=r.sent)){r.next=8;break}return u=a.map((function(r){var t=f(r.data());if(t)return t;throw new Error("serviceProfile.getMainProfileAll: objProfile cannot be null.")})),r.abrupt("return",u);case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.error(r.t0);case 13:return r.abrupt("return",null);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(t){return r.apply(this,arguments)}}()},5166:function(r,t,e){e.d(t,{EO:function(){return i},_g:function(){return s},js:function(){return c},tA:function(){return f}});var n=e(4165),a=e(5861),u=e(9257),o=e(3108),s=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=new u.hJ,r.next=4,(0,u.rh)(o.BR,t);case 4:return r.abrupt("return",r.sent);case 7:return r.prev=7,r.t0=r.catch(0),console.error("googleSignInUser",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),c=function(){return(0,u.w7)(o.BR)},i=function(r){var t=(0,u.gK)(r);return t?t.isNewUser:null},f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.XB)(o.BR);case 3:return r.abrupt("return",r.sent);case 6:return r.prev=6,r.t0=r.catch(0),console.error("anonymousSignIn:",r.t0),r.abrupt("return",null);case 10:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.8a11a1ba.chunk.js.map