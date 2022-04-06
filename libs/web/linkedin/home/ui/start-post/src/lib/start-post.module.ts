import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPostComponent } from './start-post.component';
import { NbButtonModule, NbCardModule, NbWindowModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbButtonModule, NbWindowModule.forChild()],
  declarations: [StartPostComponent],
  exports: [StartPostComponent],
})
export class StartPostModule {}
