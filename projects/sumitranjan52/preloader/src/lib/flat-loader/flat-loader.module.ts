import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatLoaderComponent } from './flat-loader.component';

@NgModule({
  declarations: [FlatLoaderComponent],
  imports: [CommonModule],
  exports: [FlatLoaderComponent],
})
export class FlatLoaderModule {}
