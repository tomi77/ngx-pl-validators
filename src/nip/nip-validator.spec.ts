import { FormControl } from '@angular/forms';
import { nipValidator } from './nip-validator';

describe('NIP validator', () => {
  it('should work for empty control', () => {
    const control: FormControl = new FormControl('');
    const validated = nipValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for null control', () => {
    const control: FormControl = new FormControl();
    const validated = nipValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for undefined control', () => {
    const control: FormControl = new FormControl();
    const validated = nipValidator(control);
    expect(validated).toBeNull();
  });

  it('should work for valid NIP', () => {
    const nips = [
      '7680002466',
      '1234563218',
      '1060000062',
      '7742994525',
      7742994525,
    ];

    nips.forEach(nip => {
      const control: FormControl = new FormControl(nip);
      const validated = nipValidator(control);
      expect(validated).toBeNull();
    });
  });

  it('should work for invalid NIP', () => {
    const nips = ['000-000-00-00', '123-456-78-91', '1231231212', '10600000620', 'abc', 123, '774-299-45-25'];

    nips.forEach(nip => {
      const control: FormControl = new FormControl(nip);
      const validated = nipValidator(control);
      expect(validated).toEqual({ nip });
    });
  });
});
