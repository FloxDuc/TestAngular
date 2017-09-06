import { Directive, Input, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: 'input [ngModel][appErrorMessage]',
  host: {
    "(input)": 'onInputChange($event)'
  }
})
export class ErrorHighlightsDirective {

  private defaultColor =  'rgb(255, 0, 0)'; // red
  private el: HTMLInputElement;

  @Input('bgColor') bgColor: string;

  constructor(private elementRef: ElementRef, public renderer: Renderer) {
    this.el = this.elementRef.nativeElement;
  }
  
  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
     this.renderer.setElementStyle(this.el, 'border-style', 'solid');
     this.renderer.setElementStyle(this.el, 'border-color', 'orange');
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    if(!value){
      this.renderer.setElementStyle(this.el, 'border-style', 'solid');
      this.renderer.setElementStyle(this.el, 'border-color', 'red');
    }else{
      this.renderer.setElementStyle(this.el, 'border-style', 'none');
    }
  }

  onInputChange($event){
    if($event.target.value){
      this.renderer.setElementStyle(this.el, 'backgroundColor', 'white');
    }else{
      let color : string = this.bgColor;
      if(!color){
        color = this.defaultColor;
      }
      this.renderer.setElementStyle(this.el, 'backgroundColor', color);
    }
  }

}
