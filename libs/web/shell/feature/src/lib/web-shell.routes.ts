import { Routes } from '@angular/router';

export const webShellRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@nx-workspace/web-home-linkedin-feature')).HomeModule,
      },
    ],
  },
];
