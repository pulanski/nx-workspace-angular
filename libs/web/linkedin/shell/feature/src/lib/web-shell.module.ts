import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(webShellRoutes, { enableTracing: true }),
    HttpClientModule,
    NbThemeModule.forRoot({ name: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
