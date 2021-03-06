import { EventEmitter, ElementRef, OnInit, OnDestroy, Directive, Input, Output } from '@angular/core'              ;
import { Observable                                                            } from 'rxjs'                       ;
import { NgModel                                                               } from '@angular/forms'             ;
import { Log                                                                   } from '../config/config.functions' ;

@Directive({ selector: '[debounce]' })
export class DebounceDirective implements OnInit {
  @Input('delay') delay: number = 700;
  @Output('func') func: EventEmitter<any> = new EventEmitter();
  private eventStream:any;
  constructor(private elementRef: ElementRef, private model: NgModel) {
  }

  ngOnInit(): void {
    const eventStream = Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(() => this.model.value)
      .debounceTime(this.delay);

    this.eventStream = eventStream;

    eventStream.subscribe(input => {
      Log.l("DebounceDirective: inputStream event fired, input is:\n", input);
      this.func.emit(input)
    });
  }

  ngOnDestroy() {
    Log.l("DebounceDirective: ngOnDestroy() fired.");
    if(this.eventStream && this.eventStream.unsubscribe) {
      this.eventStream.unsubscribe();
    }
  }

}
