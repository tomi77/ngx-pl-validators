import { FormControl } from '@angular/forms';
import { peselValidator } from './pesel-validator';

describe('PESEL validator', () => {
  it('should work for empty control', () => {
    const control: FormControl = new FormControl('');
    const validated = peselValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for null control', () => {
    const control: FormControl = new FormControl(null);
    const validated = peselValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for undefined control', () => {
    const control: FormControl = new FormControl(undefined);
    const validated = peselValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for valid PESEL', () => {
    const pesels = ['49040501580', '74021834018', '74021834025', '74021834001', 74021834001];

    pesels.forEach(pesel => {
      const control: FormControl = new FormControl(pesel);
      const validated = peselValidator(control);
      expect(validated).toBeNull();
    });
  });

  it('should work for invalid pesel', () => {
    const pesels = ['00000000000', '74021834012', 74021834012, 1001, 'PESEL'];

    pesels.forEach(pesel => {
      const control: FormControl = new FormControl(pesel);
      const validated = peselValidator(control);
      expect(validated).toEqual({ pesel });
    });
  });
});
