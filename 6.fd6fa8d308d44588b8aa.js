(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WuFp:function(t,n,e){"use strict";e.r(n),e.d(n,"PostModule",(function(){return N}));var o=e("ofXK"),r=e("fXoL"),c=e("tyNb"),i=e("z6cu"),a=e("JIr8"),s=e("tk/3");let d=(()=>{class t{constructor(t){this._http=t}getPosts(){return this._http.get("https://jsonplaceholder.typicode.com/posts").pipe(Object(a.a)(this.errorHandler))}errorHandler(t){return Object(i.a)(t.message||"Server Error")}}return t.\u0275fac=function(n){return new(n||t)(r.Zb(s.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(t){this._http=t}getComments(){return this._http.get("https://jsonplaceholder.typicode.com/comments").pipe(Object(a.a)(this.errorHandler))}errorHandler(t){return Object(i.a)(t.message||"Server Error")}}return t.\u0275fac=function(n){return new(n||t)(r.Zb(s.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=e("ncnO"),p=e("FBB3"),l=e("/t3+"),g=e("bTqV"),h=e("kQyY"),u=e("Wp6s"),f=e("f0Cb");function v(t,n){1&t&&r.Nb(0,"app-loader")}function P(t,n){if(1&t&&(r.Rb(0,"ng-conatiner"),r.Rb(1,"mat-card",11),r.Rb(2,"mat-card-title",12),r.Gc(3),r.Qb(),r.Nb(4,"mat-divider"),r.Rb(5,"mat-card-content"),r.Gc(6),r.Qb(),r.Qb(),r.Qb()),2&t){const t=r.gc().$implicit;r.zb(3),r.Ic(" ",t.name+" ("+t.email+")"," "),r.zb(3),r.Hc(t.body)}}function O(t,n){if(1&t&&(r.Rb(0,"ng-conatiner"),r.Ec(1,P,7,2,"ng-conatiner",2),r.Qb()),2&t){const t=n.$implicit,e=r.gc(5);r.zb(1),r.mc("ngIf",e.id==t.postId)}}function y(t,n){if(1&t){const t=r.Sb();r.Rb(0,"mat-card",7),r.Rb(1,"mat-card-title"),r.Gc(2),r.Qb(),r.Nb(3,"mat-divider"),r.Rb(4,"mat-card-content",8),r.Gc(5),r.Qb(),r.Rb(6,"mat-card-actions",9),r.Rb(7,"button",10),r.cc("click",(function(){r.wc(t);const n=r.gc(4);return n.commentDisplayed=!n.commentDisplayed})),r.Gc(8),r.Qb(),r.Qb(),r.Rb(9,"div"),r.Ec(10,O,2,1,"ng-conatiner",5),r.Qb(),r.Qb()}if(2&t){const t=r.gc(2).$implicit,n=r.gc(2);r.zb(2),r.Ic(" ",t.title," "),r.zb(3),r.Hc(t.body),r.zb(3),r.Ic(" comments(",n.comment(),") "),r.zb(1),r.Eb("d-none",n.commentDisplayed),r.zb(1),r.mc("ngForOf",n.comments)}}function C(t,n){if(1&t&&(r.Pb(0),r.Ec(1,y,11,6,"mat-card",6),r.Ob()),2&t){const t=n.$implicit,e=r.gc().$implicit,o=r.gc(2);r.zb(1),r.mc("ngIf",o.id==e.id&&t.id==e.userId)}}function M(t,n){if(1&t&&(r.Pb(0),r.Ec(1,C,2,1,"ng-container",5),r.Ob()),2&t){const t=r.gc(2);r.zb(1),r.mc("ngForOf",t.users)}}function _(t,n){if(1&t&&(r.Pb(0),r.Ec(1,M,2,1,"ng-container",5),r.Ob()),2&t){const t=r.gc();r.zb(1),r.mc("ngForOf",t.posts)}}const x=function(){return["../"]};function Q(t,n){if(1&t&&(r.Rb(0,"div",13),r.Rb(1,"div",14),r.Rb(2,"div",15),r.Rb(3,"div",16),r.Rb(4,"h1"),r.Gc(5," Oops!"),r.Qb(),r.Rb(6,"h2"),r.Gc(7," Data Not Found"),r.Qb(),r.Rb(8,"div",17),r.Gc(9," Sorry, an error has occured, Requested page not found! "),r.Qb(),r.Rb(10,"div",18),r.Rb(11,"a",19),r.Nb(12,"span",20),r.Gc(13," Take Me Posts "),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t){const t=r.gc();r.Eb("d-none",t.display),r.zb(11),r.mc("routerLink",r.pc(3,x))}}const R=function(){return["/posts"]};let w=(()=>{class t{constructor(t,n,e,o,r,c){this.router=t,this._httpPost=n,this._httpComm=e,this._httpUser=o,this.route=r,this.loader=c,this.posts=[],this.comments=[],this.users=[],this.totalComment=0,this.currentComment=0,this.commentDisplayed=!0,this.display=!0}ngOnInit(){this.id=this.router.snapshot.paramMap.get("id"),this._httpPost.getPosts().subscribe(t=>{this.posts=t,this.display=!1},t=>{this.route.navigate(["./error"])}),this._httpComm.getComments().subscribe(t=>{this.comments=t},t=>{this.route.navigate(["./error"])}),this._httpUser.getUser().subscribe(t=>{this.users=t},t=>{this.route.navigate(["./error"])})}check(){if(this.posts.length){var t=parseInt(this.id);return!!(t&&t>=0&&t<=this.posts[this.posts.length-1].id)}}comment(){for(var t of(this.currentComment=0,this.totalComment=0,this.comments))this.id==t.postId&&(this.totalComment+=1);return this.totalComment}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(c.a),r.Mb(d),r.Mb(b),r.Mb(m.a),r.Mb(c.b),r.Mb(p.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-post-details"]],decls:11,vars:7,consts:[[1,"spacer"],["mat-raised-button","","color","primary",1,"my-2","mx-2","float-right",3,"routerLink"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["elseBlock",""],[4,"ngFor","ngForOf"],["class","my-5 mx-5",4,"ngIf"],[1,"my-5","mx-5"],["align","start",1,"py-5","titleBody"],["align","end"],["color","primary","mat-raised-button","","color","primary",3,"click"],[1,"my-1","mx-5","commentBody"],[1,"my-1","commentTitle"],[1,"container","cont","my-5"],[1,"row"],[1,"col-md-12"],[1,"error-template"],[1,"error-details"],[1,"error-actions"],[1,"btn","btn-primary","btn-lg",3,"routerLink"],[1,"glyphicon","glyphicon-home"]],template:function(t,n){if(1&t&&(r.Rb(0,"mat-toolbar"),r.Rb(1,"span"),r.Gc(2,"Post Details"),r.Qb(),r.Rb(3,"span",0),r.Rb(4,"a",1),r.Gc(5,"Back"),r.Qb(),r.Qb(),r.Qb(),r.Ec(6,v,1,0,"app-loader",2),r.hc(7,"async"),r.Ec(8,_,2,1,"ng-container",3),r.Ec(9,Q,14,4,"ng-template",null,4,r.Fc)),2&t){const t=r.uc(10);r.zb(4),r.mc("routerLink",r.pc(6,R)),r.zb(2),r.mc("ngIf",r.ic(7,4,n.loader.isLoading)),r.zb(2),r.mc("ngIf",n.check())("ngIfElse",t)}},directives:[l.a,g.a,c.d,o.l,h.a,o.k,u.a,u.f,f.a,u.c,u.b,g.b],pipes:[o.b],styles:[".error-template[_ngcontent-%COMP%]{padding:40px 15px;text-align:center}.error-actions[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}mat-card-content[_ngcontent-%COMP%]{height:80%}.commentTitle[_ngcontent-%COMP%]{font-size:15px;overflow:hidden}.commentBody[_ngcontent-%COMP%]{border-radius:10%;border:1px solid #d6d6d6;overflow:hidden}.titleBody[_ngcontent-%COMP%]{height:20%}a[_ngcontent-%COMP%]{text-decoration:none}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-raised-button[_ngcontent-%COMP%]{color:#000}.mat-raised-button[_ngcontent-%COMP%]:hover{color:#fff}"]}),t})();var I=e("M9IT");function z(t,n){1&t&&r.Nb(0,"app-loader")}const k=function(t){return["details",t]};function E(t,n){if(1&t&&(r.Rb(0,"div"),r.Rb(1,"mat-card",4),r.Rb(2,"mat-card-title",5),r.Gc(3),r.Qb(),r.Rb(4,"mat-card-actions",6),r.Rb(5,"a",7),r.Gc(6,"View post"),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t){const t=n.$implicit;r.zb(3),r.Ic(" ",t.id+". "+t.title," "),r.zb(2),r.mc("routerLink",r.qc(2,k,t.id))}}let G=(()=>{class t{constructor(t,n,e){this._http=t,this.route=n,this.loader=e,this.dataLen=10,this.currentPage=0,this.posts=[]}ngOnInit(){this._http.getPosts().subscribe(t=>{this.posts=t,this.totalPage=t.length},t=>{this.route.navigate(["error"])})}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(d),r.Mb(c.b),r.Mb(p.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-posts"]],decls:8,vars:10,consts:[[4,"ngIf"],[1,"container-flex","mx-5"],[4,"ngFor","ngForOf"],[3,"length","pageSize","page"],[1,"my-1"],["align","start"],["align","end"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(t,n){1&t&&(r.Rb(0,"mat-toolbar"),r.Gc(1," Posts"),r.Qb(),r.Ec(2,z,1,0,"app-loader",0),r.hc(3,"async"),r.Rb(4,"div",1),r.Ec(5,E,7,4,"div",2),r.hc(6,"slice"),r.Qb(),r.Rb(7,"mat-paginator",3),r.cc("page",(function(t){return n.pageEvent=t,n.currentPage=n.pageEvent.pageIndex})),r.Qb()),2&t&&(r.zb(2),r.mc("ngIf",r.ic(3,4,n.loader.isLoading)),r.zb(3),r.mc("ngForOf",r.jc(6,6,n.posts,n.currentPage*n.dataLen,(n.currentPage+1)*n.dataLen)),r.zb(2),r.mc("length",n.totalPage)("pageSize",n.dataLen))},directives:[l.a,o.l,o.k,I.a,h.a,u.a,u.f,u.b,g.a,c.d],pipes:[o.b,o.t],styles:[".page-link[_ngcontent-%COMP%]{cursor:pointer!important}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:silver}.container-flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:auto;text-align:center}.container-flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:520px;text-align:left;margin:15px 15px 15px 70px;overflow:hidden;height:40%}a[_ngcontent-%COMP%]:hover{cursor:pointer}.container-flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]:hover{border:1px solid #3db5eb}.mat-raised-button[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]{text-decoration:none}@media only screen and (min-width:300px) and (max-width:700px){.container-flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:15%;margin-right:15%;overflow:hidden}}@media only screen and (min-width:700px) and (max-width:1200px){.container-flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:15%;margin-right:15%;width:100%;overflow:hidden}}@media only screen and (min-width:1200px){.container-flex[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{overflow:hidden;margin-left:2%;margin-right:2%;width:46%}}mat-card-title[_ngcontent-%COMP%]{font-size:17px;height:70%}mat-card[_ngcontent-%COMP%]{height:100%;border:1px solid #d6d6d6}mat-card-action[_ngcontent-%COMP%]{height:30%}.mat-raised-button[_ngcontent-%COMP%]:hover{color:#fff}"]}),t})();var L=e("sW91"),F=e("hctd"),j=e("s8lV");const B=[{path:"",children:[{path:"",component:G},{path:"details/:id",component:w}]}];let N=(()=>{class t{constructor(){console.log("post loaded")}}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},providers:[{provide:s.a,useClass:L.a,multi:!0}],imports:[[o.c,s.c,F.a,j.a,c.e.forChild(B)]]}),t})()}}]);