import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'wave',
  template: `<div #loading class="preloader-container">
    <span class="animated-preloader"></span>
  </div>`,
  styleUrls: ['./wave.component.css'],
})
export class WaveComponent implements OnInit {
  @Input('color') color: string = 'f35353';
  @Input('color2') color2: string = 'ffffff';
  @Input('width') width: number = 100;

  _width: string = this.width + 'px';

  @ViewChild('loading') loading!: ElementRef;

  ngOnInit() {
    this._width = this.width + 'px';
  }

  ngAfterViewInit() {
    console.log(this.loading);
    this.loading?.nativeElement.style.setProperty('--color', '#' + this.color);
    this.loading?.nativeElement.style.setProperty(
      '--color1',
      '#' + this.color2
    );
    this.loading?.nativeElement.style.setProperty('--width', this._width);
  }
}
