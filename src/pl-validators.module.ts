import { NgModule } from '@angular/core';
import { PeselValidatorDirective } from './pesel/pesel.directive';

@NgModule({
    declarations: [
      PeselValidatorDirective,
    ],
    exports: [
      PeselValidatorDirective
    ]
})
export class PLValidatorsModule { }
