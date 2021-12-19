import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'multicirle',
  template: `<div #loading class="spinner">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>`,
  styleUrls: ['./multicirle.component.css'],
})
export class MulticirleComponent implements OnInit {
  private _colors: Array<string> = [
    'fc7670',
    'ebd793',
    '6ed1b7',
    '38a484',
    '365050',
  ];

  @Input('colors') set colors(colors: Array<string>) {
    if (colors?.length !== 5) throw 'colors length should be 5';
    this._colors = colors;
  }

  @Input('minWidth') min: number = 50;
  @Input('maxWidth') max: number = 130;

  minWid: string = this.min + 'px';
  minWid1: string = this.min + 20 + 'px';
  minWid2: string = this.min + 40 + 'px';
  minWid3: string = this.min + 60 + 'px';
  maxWid: string = this.max + 'px';

  @ViewChild('loading') loading!: ElementRef;

  ngOnInit() {
    const inc = Math.floor((this.max - this.min) / 4);
    this.minWid = this.min + 'px';
    this.minWid1 = this.min + inc + 'px';
    this.minWid2 = this.min + inc * 2 + 'px';
    this.minWid3 = this.min + inc * 3 + 'px';
    this.maxWid = this.max + 'px';
  }

  ngAfterViewInit() {
    console.log(this.loading);
    this._colors.forEach((color, index) => {
      this.loading?.nativeElement.style.setProperty(
        '--border-color' + (index + 1),
        '#' + color
      );
    });
    this.loading?.nativeElement.style.setProperty('--min-width', this.minWid);
    this.loading?.nativeElement.style.setProperty('--min-width1', this.minWid1);
    this.loading?.nativeElement.style.setProperty('--min-width2', this.minWid2);
    this.loading?.nativeElement.style.setProperty('--min-width3', this.minWid3);
    this.loading?.nativeElement.style.setProperty('--max-width', this.maxWid);
  }
}
