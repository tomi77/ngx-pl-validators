import { NgModule } from "@angular/core";
import { NipValidatorDirective } from "./nip/nip.directive";
import { PeselValidatorDirective } from "./pesel/pesel.directive";

@NgModule({
  declarations: [PeselValidatorDirective, NipValidatorDirective],
  exports: [PeselValidatorDirective, NipValidatorDirective]
})
export class PLValidatorsModule {}
