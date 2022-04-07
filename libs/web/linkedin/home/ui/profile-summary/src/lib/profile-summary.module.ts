import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryComponent } from './profile-summary.component';
import { NbCardModule, NbListModule, NbSpinnerModule, NbTagModule, NbUserModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbUserModule, NbTagModule, NbListModule, NbSpinnerModule],
  declarations: [ProfileSummaryComponent],
  exports: [ProfileSummaryComponent],
})
export class ProfileSummaryModule {}
