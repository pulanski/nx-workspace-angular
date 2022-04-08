import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './all-posts.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbListModule, NbIconModule, NbButtonModule],
  declarations: [AllPostsComponent],
  exports: [AllPostsComponent],
})
export class AllPostsModule {}
