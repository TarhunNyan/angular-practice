import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appReplaceText]'
})
export class ReplaceTextDirective implements OnInit {

  constructor(private el: ElementRef ) {}

  @Input() textReplace!: string;
  @Input() codeTextReplace!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  ngOnInit(): void {
    this.el.nativeElement.innerText = this.textReplace + ' + ' + this.codeTextReplace;
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
