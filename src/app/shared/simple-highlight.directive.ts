import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSimpleHighlight]',
})
export class SimpleHighlightDirective implements OnInit {
  @HostBinding('style.transform') transform?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.transform = 'scale(1.5)';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.transform = 'scale(1)';
  }
}
