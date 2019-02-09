import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { peselValidator } from './pesel-validator';

@Directive({
  selector: '[pesel][formControlName],[pesel][formControl],[pesel][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PeselValidatorDirective,
    multi: true
  }]
})
export class PeselValidatorDirective implements Validator {
  @Input() pesel: string;

  validate(control: AbstractControl): { [key: string]: string } {
    return peselValidator(control);
  }
}
