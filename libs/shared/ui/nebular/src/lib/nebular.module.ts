import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';

// TODO: Address whether or not this setup can be
// achieved. If not, remove this library
@NgModule({
  imports: [CommonModule, NbThemeModule.forRoot()],
})
export class NebularConfigModule {}
