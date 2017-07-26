import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() score;
  constructor(public elementRef: ElementRef, public renderer: Renderer) {
     console.log(this.elementRef.nativeElement.innerHTML, this.elementRef.nativeElement.innerText);
        //    switch (this.elementRef.nativeElement) {
        // case 'fullName': return compare(a.fullName, b.fullName, isAsc);
        // }
  }

}
