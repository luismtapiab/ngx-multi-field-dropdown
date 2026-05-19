import { Directive, HostListener } from '@angular/core';
import { AbstractDebounceDirective } from './abstract-debounce.directive';

@Directive({
  standalone: true,
  selector: 'input[debouncedInput]',
})
export class DebouncedInputDirective extends AbstractDebounceDirective {
  constructor() {
    super();
  }

  @HostListener("input", ["$event.target"])
  public onInput(target: EventTarget | null): void {
    this.emitEvent$.next((target as HTMLInputElement).value);
  }
}
