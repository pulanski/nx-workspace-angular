import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const webShellRoutes: Routes = [
  {
    path: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(webShellRoutes)],
})
export class WebShellFeatureModule {}
