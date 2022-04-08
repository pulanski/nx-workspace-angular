import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './all-posts.component';
import { NbCardModule, NbListModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbListModule],
  declarations: [AllPostsComponent],
  exports: [AllPostsComponent],
})
export class AllPostsModule {}
