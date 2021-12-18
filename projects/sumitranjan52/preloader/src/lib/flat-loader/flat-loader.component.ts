import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flat-loader',
  template: `<div
    class="loader"
    [class.top]="position === 'top'"
    [class.bottom]="position === 'bottom'"
  >
    <div
      class="loading-bar"
      [class.top]="position === 'top'"
      [class.bottom]="position === 'bottom'"
      [class.leftRight]="direction === 'left'"
      [class.rightLeft]="direction === 'right'"
      [ngStyle]="{ background: color }"
      [ngStyle]="{ height: height }"
    ></div>
  </div>`,
  styleUrls: ['./flat-loader.component.css'],
})
export class FlatLoaderComponent implements OnInit {
  @Input('position') position: string = 'top';
  @Input('color') color: string = '#be3118';
  @Input('direction') direction: string = 'left';
  @Input('height') height: string = '5px';

  constructor() {}

  ngOnInit(): void {}
}
