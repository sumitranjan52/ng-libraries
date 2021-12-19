import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bouncy-circle',
  template: `<div #loading class="loading">
    <hr />
    <hr />
    <hr />
    <hr />
  </div>`,
  styleUrls: ['./bouncy-circle.component.css'],
})
export class BouncyCircleComponent implements OnInit {
  private _colors: Array<string> = ['457B9D', 'E63946', 'DAD7CD', '392F5A'];

  @Input('colors') set colors(colors: Array<string>) {
    if (colors?.length !== 4) return;
    this._colors = colors;
  }
  @Input('width') width: number = 100;

  _width: string = this.width + 'px';

  @ViewChild('loading') loading!: ElementRef;

  ngOnInit() {
    this._width = this.width + 'px';
  }

  ngAfterViewInit() {
    console.log(this.loading);
    this._colors.forEach((color, index) => {
      this.loading?.nativeElement.style.setProperty(
        '--color' + (index + 1),
        '#' + color
      );
    });
    this.loading?.nativeElement.style.setProperty('--width', this._width);
  }
}
