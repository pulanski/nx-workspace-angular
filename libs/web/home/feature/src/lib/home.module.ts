import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbPopoverModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { StartPostModule } from '@nx-workspace/web/home/ui/start-post';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbTabsetModule,
    NbIconModule,
    NbButtonModule,
    NbUserModule,
    NbPopoverModule,
    StartPostModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
