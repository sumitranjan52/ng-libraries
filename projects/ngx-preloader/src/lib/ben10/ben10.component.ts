import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ben10',
  template: `<div #loading class="loader"></div>`,
  styleUrls: ['./ben10.component.css'],
})
export class Ben10Component implements OnInit {
  @Input('color') color: string = '000000';
  @Input('color2') color2: string = 'ffffff';
  @Input('width') width: number = 60;

  _width: string = this.width + 'px';

  @ViewChild('loading') loading!: ElementRef;

  ngOnInit() {
    this._width = this.width + 'px';
  }

  ngAfterViewInit() {
    console.log(this.loading);
    this.loading?.nativeElement.style.setProperty(
      '--border-color',
      '#' + this.color
    );
    this.loading?.nativeElement.style.setProperty(
      '--border-color1',
      '#' + this.color2
    );
    this.loading?.nativeElement.style.setProperty('--min-width', this._width);
  }
}
