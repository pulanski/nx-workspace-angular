import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPostComponent } from './start-post.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbUserModule, NbWindowModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbButtonModule, NbWindowModule.forChild(), NbUserModule, NbIconModule],
  declarations: [StartPostComponent],
  exports: [StartPostComponent],
})
export class StartPostModule {}
