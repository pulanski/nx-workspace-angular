import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@nx-workspace/web/shell/ui/layout';

const webShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [{}],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(webShellRoutes)],
  exports: [RouterModule],
})
export class WebShellModule {}
