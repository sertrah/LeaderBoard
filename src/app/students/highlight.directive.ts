import { ContentChild, Directive, ElementRef, Input, OnChanges, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
  @Input() score;
  constructor(public elementRef: ElementRef, public renderer: Renderer) {
     console.log(elementRef);
     console.log(this.elementRef.nativeElement.innerText);
        //    switch (this.elementRef.nativeElement) {
        // case 'fullName': return compare(a.fullName, b.fullName, isAsc);
        // }
  }

    public ngOnInit(): void {
         console.log(this.elementRef.nativeElement.innerText);
    }
}
