import { AbstractControl, ValidationErrors } from '@angular/forms';
const WEIGHTS: number[] = [6, 5, 7, 2, 3, 4, 5, 6, 7];
const MODULE_VALUES: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const nipValidator: (control: AbstractControl) => ValidationErrors | null = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value || control.value.length === 0) {
    return null;
  }
  if (['0000000000'].includes(control.value)) {
    return { nip: control.value };
  }
  if (control.value.length !== 10) {
    return { nip: control.value };
  }
  const isNipValid: boolean = checkNip(`${control.value}`);

  return !isNipValid ? { nip: control.value } : null;
};

const checkNip: (nipInput: string) => boolean = (nipInput: string): boolean => {
  const nipDigits: number[] = nipInput.split('').map(Number);
  const checksum: number = nipDigits.pop();

  const nipReducer: (accumulator: number, currentValue: number, index: number, array: number[]) => number = (
    accumulator: number,
    currentValue: number,
    index: number,
    array: number[]
  ): number => {
    return accumulator + array[index] * WEIGHTS[index];
  };

  const nipMod11: number = nipDigits.reduce(nipReducer, 0) % MODULE_VALUES.length;
  return nipMod11 === checksum;
};
