"use strict";(self.webpackChunkgym_app_front=self.webpackChunkgym_app_front||[]).push([[139],{2139:(G,v,n)=>{n.r(v),n.d(v,{AuthModule:()=>k});var g=n(8583),q=n(3356),I=n(6489),i=n(3679),c=n(4655),e=n(7716),f=n(6518);let C=(()=>{class t{constructor(o,r){this.authService=o,this.router=r,this.canActive=!0}canActivate(){return this.authService.isLogged.subscribe(o=>{o?(this.canActive=!1,this.router.navigateByUrl("/app")):this.canActive=!0}),this.canActive}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(f.e),e.LFG(c.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n(2238),u=n(5618),h=n(1095);let Z=(()=>{class t{constructor(o){this.data=o}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(l.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-error-dialog"]],decls:9,vars:4,consts:[["fxLayout","column","fxLayoutAlign","center center"],[1,"image-cont","animate__animated","animate__rubberBand",3,"src"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","mat-dialog-close","true",3,"color"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"h1",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"button",5),e._uU(8," Cerrar "),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(1),e.Q6J("src",r.data.imageSrc,e.LSH),e.xp6(2),e.Oqu(r.data.exito?"Genial!":"Ooops!"),e.xp6(2),e.hij(" ",r.data.msg||"No se pudo completar la acci\xf3n"," "),e.xp6(2),e.Q6J("color",r.data.exito?"primary":"warn"))},directives:[u.xw,u.Wh,l.uh,l.xY,l.H8,h.lW,l.ZT],styles:[".image-cont[_ngcontent-%COMP%]{width:60%;height:60%}"]}),t})();var m=n(3738),p=n(8295),A=n(9983),T=n(6627),b=n(4885);function x(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe ser un email v\xe1lido"),e.qZA())}function F(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Contrase\xf1a requerida"),e.qZA())}function U(t,a){1&t&&(e.TgZ(0,"div",13),e._UZ(1,"mat-spinner",14),e.qZA())}function L(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nombre requerido"),e.qZA())}function J(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Apellido requerido"),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe ser un email v\xe1lido"),e.qZA())}function S(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"La contrase\xf1a debe contener al menos 6 caracteres"),e.qZA())}function w(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe ser un D.N.I v\xe1lido de 8 digitos"),e.qZA())}function Y(t,a){1&t&&(e.TgZ(0,"div",14),e._UZ(1,"mat-spinner",15),e.qZA())}const R=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(o,r,s,d){this.fb=o,this.router=r,this.authService=s,this.dialog=d,this.hide=!1,this.spinner=!1,this.miFormulario=this.fb.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]]})}ngOnInit(){}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}login(){if(this.spinner=!0,this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();const{email:o,password:r}=this.miFormulario.value;this.authService.login(o,r).subscribe(s=>{this.spinner=!1,!0===s?this.router.navigateByUrl("/app"):this.dialog.open(Z,{data:{msg:s,imageSrc:"https://icon-library.com/images/image-error-icon/image-error-icon-9.jpg",exito:!1}})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(c.F0),e.Y36(f.e),e.Y36(l.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:22,vars:7,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"main-wrapper"],[1,"box"],["autocomplete","on",1,"example-form",3,"formGroup","ngSubmit"],[1,"example-full-width"],["matInput","","placeholder","Email","formControlName","email"],[4,"ngIf"],["matInput","","placeholder","Contrase\xf1a","formControlName","password",3,"type"],["matSuffix","",3,"click"],["fxLayout","column","fxLayoutGap"," 5px"],[1,"button-container"],["class","spinner-container",4,"ngIf"],["mat-flat-button","","color","primary","type","submit",1,"btn-block",3,"disabled"],["mat-stroked-button","","color","link","routerLink","/auth/registro",1,"btn-block"],[1,"spinner-container"],["diameter","24"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-card",1),e.TgZ(2,"mat-card-header"),e.TgZ(3,"mat-card-title"),e._uU(4,"Iniciar Sesi\xf3n"),e.qZA(),e.qZA(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return r.login()}),e.TgZ(6,"mat-card-content"),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",4),e.YNc(9,x,2,0,"mat-error",5),e.qZA(),e.TgZ(10,"mat-form-field",3),e._UZ(11,"input",6),e.TgZ(12,"mat-icon",7),e.NdJ("click",function(){return r.hide=!r.hide}),e._uU(13),e.qZA(),e.YNc(14,F,2,0,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(15,"div",8),e.TgZ(16,"div",9),e.YNc(17,U,2,0,"div",10),e.TgZ(18,"button",11),e._uU(19," Iniciar sesi\xf3n "),e.qZA(),e.qZA(),e.TgZ(20,"button",12),e._uU(21," Ir a Registrarse "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.miFormulario),e.xp6(4),e.Q6J("ngIf",r.campoEsValido("email")),e.xp6(2),e.Q6J("type",r.hide?"text":"password"),e.xp6(2),e.Oqu(r.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",r.campoEsValido("password")),e.xp6(3),e.Q6J("ngIf",r.spinner),e.xp6(1),e.Q6J("disabled",r.miFormulario.invalid||r.spinner))},directives:[u.xw,u.Wh,m.a8,m.dk,m.n5,i._Y,i.JL,i.sg,m.dn,p.KE,A.Nt,i.Fj,i.JJ,i.u,g.O5,T.Hw,p.R9,u.SQ,h.lW,c.rH,p.TO,b.$g],styles:[".mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),t})(),canActivate:[C]},{path:"registro",component:(()=>{class t{constructor(o,r,s,d){this.fb=o,this.router=r,this.authService=s,this.dialog=d,this.hide=!1,this.spinner=!1,this.miFormulario=this.fb.group({nombre:["",[i.kI.required]],apellido:["",[i.kI.required]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]],dni:["",[i.kI.required,i.kI.min(1e7),i.kI.max(99999999)]]})}ngOnInit(){}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}registrarse(){if(this.spinner=!0,this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();const{nombre:o,apellido:r,email:s,password:d,dni:Q}=this.miFormulario.value;this.authService.registrar(o,r,s,d,Q).subscribe(y=>{this.spinner=!1,y?this.dialog.open(Z,{data:{msg:"Usuario registrado con exito!",imageSrc:"https://www.tututix.com/wp-content/uploads/2015/01/green-check.png",exito:!0}}).afterClosed().subscribe(O=>{O&&this.router.navigateByUrl("/auth")}):this.dialog.open(Z,{data:{msg:y,imageSrc:"https://icon-library.com/images/image-error-icon/image-error-icon-9.jpg",exito:!1}})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(c.F0),e.Y36(f.e),e.Y36(l.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registrarse"]],decls:33,vars:13,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"main-wrapper"],[1,"box"],[1,"example-form",3,"formGroup","ngSubmit"],[1,"example-full-width"],["matInput","","placeholder","Nombre*","formControlName","nombre"],[4,"ngIf"],["matInput","","placeholder","Apellido*","formControlName","apellido"],["matInput","","type","email","placeholder","example@example.com","formControlName","email"],["matInput","","placeholder","Contrase\xf1a*","formControlName","password",3,"type"],["matSuffix","",3,"click"],["matInput","","type","number","placeholder","N\xfamero de documento*","formControlName","dni"],[1,"button-container"],["class","spinner-container",4,"ngIf"],["mat-stroked-button","","color","primary","type","submit",1,"btn-block",3,"disabled"],[1,"spinner-container"],["diameter","24"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-card",1),e.TgZ(2,"mat-card-header"),e.TgZ(3,"mat-card-title"),e._uU(4,"Registro"),e.qZA(),e.qZA(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return r.registrarse()}),e.TgZ(6,"mat-card-content"),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",4),e.YNc(9,L,2,0,"mat-error",5),e.qZA(),e.TgZ(10,"mat-form-field",3),e._UZ(11,"input",6),e.YNc(12,J,2,0,"mat-error",5),e.qZA(),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15,"Email*"),e.qZA(),e._UZ(16,"input",7),e.YNc(17,N,2,0,"mat-error",5),e.qZA(),e.TgZ(18,"mat-form-field",3),e._UZ(19,"input",8),e.TgZ(20,"mat-icon",9),e.NdJ("click",function(){return r.hide=!r.hide}),e._uU(21),e.qZA(),e.YNc(22,S,2,0,"mat-error",5),e.qZA(),e.TgZ(23,"mat-form-field",3),e._UZ(24,"input",10),e.YNc(25,w,2,0,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(26,"div",11),e.YNc(27,Y,2,0,"div",12),e.TgZ(28,"button",13),e._uU(29," Registrarse "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"pre"),e._uU(31),e.ALo(32,"json"),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.miFormulario),e.xp6(4),e.Q6J("ngIf",r.campoEsValido("nombre")),e.xp6(3),e.Q6J("ngIf",r.campoEsValido("apellido")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("email")),e.xp6(2),e.Q6J("type",r.hide?"text":"password"),e.xp6(2),e.Oqu(r.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",r.campoEsValido("password")),e.xp6(3),e.Q6J("ngIf",r.campoEsValido("dni")),e.xp6(2),e.Q6J("ngIf",r.spinner),e.xp6(1),e.Q6J("disabled",r.miFormulario.invalid||r.spinner),e.xp6(3),e.Oqu(e.lcZ(32,11,r.miFormulario.value)))},directives:[u.xw,u.Wh,m.a8,m.dk,m.n5,i._Y,i.JL,i.sg,m.dn,p.KE,A.Nt,i.Fj,i.JJ,i.u,g.O5,p.hX,T.Hw,p.R9,i.wV,h.lW,p.TO,b.$g],pipes:[g.Ts],styles:[""]}),t})()},{path:"**",redirectTo:"login"}]}];let E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(R)],c.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,E,I.q,q.o9,i.UX]]}),t})()}}]);