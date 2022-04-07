import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisingComponent } from './advertising.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbIconModule],
  declarations: [AdvertisingComponent],
  exports: [AdvertisingComponent],
})
export class AdvertisingModule {}
