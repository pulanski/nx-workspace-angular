import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {
  NbUserModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbSearchModule,
  NbTabsetModule,
  NbActionsModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbTabsetModule,
    NbIconModule,
    NbButtonModule,
    NbUserModule,
    NbPopoverModule,
    NbSearchModule,
    NbInputModule,
    NbActionsModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
