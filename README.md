# ngx-pl-validators

[![Build Status](https://travis-ci.org/tomi77/ngx-pl-validators.svg?branch=master)](https://travis-ci.org/tomi77/ngx-pl-validators)

PESEL, NIP and REGON validators for Angular

## Installation

~~~sh
npm install ngx-pl-validators
~~~

## Usage (model driven)

Needs ``ReactiveFormsModule``

### PESEL

~~~typescript
import { PLValidators } from 'ngx-pl-validators';

password: FormControl = new FormControl('', Validators.compose([
  PLValidators.peselValidator
]));
~~~

### NIP

~~~typescript
import { PLValidators } from 'ngx-pl-validators';

password: FormControl = new FormControl('', Validators.compose([
  PLValidators.nipValidator
]));
~~~

## Usage (template driven)

Needs ``FormsModule`` and ``ValidatorsModule``

### PESEL

~~~html
<form>
  <input type="text" [(ngModel)]="model.pesel" name="pesel" #formControl="ngModel" pesel />>
  <span *ngIf="formControl.hasError('pesel')">Invalid PESEL</span>
</form>
~~~

### NIP

~~~html
<form>
  <input type="text" [(ngModel)]="model.nip" name="nip" #formControl="ngModel" nip />>
  <span *ngIf="formControl.hasError('nip')">Invalid NIP</span>
</form>
~~~
