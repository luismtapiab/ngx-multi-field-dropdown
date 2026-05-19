import {
  Directive,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from "@angular/core";
import { Subject } from "rxjs";
import {
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  tap
} from "rxjs/operators";

@Directive({
  standalone: true
})
export abstract class AbstractDebounceDirective implements OnInit, OnDestroy {
  @Input()
  public debounceTime: number = 500;

  @Output()
  public onEvent = new EventEmitter<any>();

  protected emitEvent$ = new Subject<any>();
  protected subscription$ = new Subject<void>();

  ngOnInit(): void {
    this.emitEvent$
      .pipe(
        takeUntil(this.subscription$),
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        tap((value: any) => this.emitChange(value))
      )
      .subscribe();
  }

  public emitChange(value: any): void {
    this.onEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
