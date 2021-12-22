import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'zooming',
  template: `<div #loading class="loading"></div>`,
  styleUrls: ['./zooming.component.css'],
})
export class ZoomingComponent implements OnInit, AfterViewInit {
  @Input('color') color0: string = '764237';
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
    this.loading?.nativeElement.style.setProperty(
      '--border-color',
      '#' + this.color0
    );
    this.loading?.nativeElement.style.setProperty('--min-width', this.minWid);
    this.loading?.nativeElement.style.setProperty('--min-width1', this.minWid1);
    this.loading?.nativeElement.style.setProperty('--min-width2', this.minWid2);
    this.loading?.nativeElement.style.setProperty('--min-width3', this.minWid3);
    this.loading?.nativeElement.style.setProperty('--max-width', this.maxWid);
  }
}
