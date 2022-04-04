import { Routes } from '@angular/router';
import { LayoutComponent } from '@nx-workspace/web/shell/ui/layout';

export const webShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [{}],
  },
];
