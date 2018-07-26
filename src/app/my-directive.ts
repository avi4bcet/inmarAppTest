import {ElementRef, Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})


export class MyDirective {

constructor(private el: ElementRef) {
el.nativeElement.style.background = 'white';
}


@HostListener ('mouseenter') onmouseEnter() {
this.highlight('#cccccc');
}

@HostListener ('mouseleave') onmouseLeave() {
this.highlight('white');
}

private highlight(color: string)
{
  this.el.nativeElement.style.backgroundColor = color;
}

}
