import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BouncyCircleComponent } from './bouncy-circle.component';

@NgModule({
  declarations: [BouncyCircleComponent],
  imports: [CommonModule],
  exports: [BouncyCircleComponent],
})
export class BouncyCircleModule {}
