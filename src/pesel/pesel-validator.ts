import { AbstractControl, ValidationErrors } from '@angular/forms';

const WEIGHTS: number[] = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
const MODULE_VALUES: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const peselValidator: (control: AbstractControl) => ValidationErrors | null = (control: AbstractControl):
  ValidationErrors | null => {
  if (!control.value || control.value.length === 0) {
    return null;
  }
  if (['00000000000'].includes(control.value)) {
    return {pesel: control.value};
  }

  return !checkPesel(`${control.value}`) ? {pesel: control.value} : null;
};

const checkPesel: (peselInput: string) => boolean = (peselInput: string): boolean => {
  const peselDigits: number[] = peselInput.split('').map(Number);
  const checksum: number = peselDigits.pop();

  const peselReducer: (accumulator: number, currentValue: number, index: number, array: number[]) => number = (
    accumulator: number,
    currentValue: number,
    index: number,
    array: number[]
  ): number => {
    return accumulator + array[index] * WEIGHTS[index];
  };

  const sum: number = peselDigits.reduce(peselReducer, 0);

  const peselMod11: number = MODULE_VALUES[sum % MODULE_VALUES.length];

  return peselMod11 === checksum;
};
