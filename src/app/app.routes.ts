import { Routes } from "@angular/router";

export const ApplicationRoutes: Routes = [
  {
    path: "layout",
    loadComponent: () =>
      import("./components/layout/layout.component").then(
        (m) => m.LayoutComponent
      ),
    children: [
      // {
      //   path: "home",
      //   loadComponent: () =>
      //     import("./components/oas/home.component").then(
      //       (m) => m.HomeComponent
      //     ),
      // },
      // {
      //   path: "settings",
      //   loadComponent: () =>
      //     import("./components/tags/settings.component").then(
      //       (m) => m.SettingsComponent
      //     ),
      // },
      // {
      //   path: "account",
      //   loadComponent: () =>
      //     import("./components/user-management/account.component").then(
      //       (m) => m.AccountComponent
      //     ),
      //   canActivate: [accessUserGuard],
      // },
    ],
  },
  {
    path: "",
    redirectTo: "layout",
    pathMatch: "full",
  },
];
