import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaveComponent } from './wave.component';

@NgModule({
  declarations: [WaveComponent],
  imports: [CommonModule],
  exports: [WaveComponent],
})
export class WaveModule {}
