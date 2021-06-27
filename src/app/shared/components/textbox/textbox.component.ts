import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'todo-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextboxComponent),
    multi: true
  }]
})
export class TextboxComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder = '';

  value: any;

  private onChange = (value: any) => {};

  private onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(f: (value: any) => {}) {
    this.onChange = f;
  }

  registerOnTouched(f: () => {}) {
    this.onTouched = f;
  }

  writeValue(value: any) {
    this.value = value;
  }
}
