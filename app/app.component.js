System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home', './login', './admin', './GlobalMembersUtil'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, home_1, login_1, admin_1, GlobalMembersUtil_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (admin_1_1) {
                admin_1 = admin_1_1;
            },
            function (GlobalMembersUtil_1_1) {
                GlobalMembersUtil_1 = GlobalMembersUtil_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // isUserLoggedIn: boolean=false;
                // isAdmin: boolean = false;
                // userName: string = 'Ramana';
                function AppComponent(router, globalMembersUtil) {
                    this.router = router;
                    this.globalMembersUtil = globalMembersUtil;
                }
                AppComponent.prototype.NavigateToLoginPage = function () {
                    console.log("NavigateToLoginPage");
                    this.router.navigate(['/Login']);
                };
                AppComponent.prototype.onUserLoggedIn = function (object) {
                    console.log("Updated app.component after the user has logged in");
                };
                AppComponent.prototype.Logout = function () {
                    console.log("Logout");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ris-app',
                        templateUrl: './app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            GlobalMembersUtil_1.GlobalMembersUtil]
                    }),
                    router_1.RouteConfig([
                        { path: '/Home', name: 'Home', component: home_1.Home, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_1.Login },
                        { path: '/admin', name: 'Admin', component: admin_1.Admin }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, GlobalMembersUtil_1.GlobalMembersUtil])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map