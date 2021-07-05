import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { nipValidator } from './nip-validator';

@Directive({
  selector: '[nip][formControlName],[nip][formControl],[nip][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NipValidatorDirective,
      multi: true
    }
  ]
})
export class NipValidatorDirective implements Validator {
  @Input() nip: string;

  validate(control: AbstractControl): { [key: string]: string } {
    return nipValidator(control);
  }
}
