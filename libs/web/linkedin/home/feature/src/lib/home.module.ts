import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbPopoverModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbInputModule,
  NbUserModule,
} from '@nebular/theme';
import { StartPostModule } from '@nx-workspace/web-linkedin-home-ui-start-post';
import { HeaderModule } from '@nx-workspace/web/linkedin/home/ui/header';
import { ProfileSummaryModule } from '@nx-workspace/web/linkedin/home/ui/profile-summary';
import { AdvertisingModule } from '@nx-workspace/web/linkedin/home/ui/advertising';
import { AllPostsModule } from '@nx-workspace/web/linkedin/home/ui/all-posts';

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
    NbSearchModule,
    NbInputModule,
    StartPostModule,
    ProfileSummaryModule,
    AdvertisingModule,
    HeaderModule,
    AllPostsModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
