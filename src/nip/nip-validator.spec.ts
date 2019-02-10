import { FormControl } from "@angular/forms";
import { nipValidator } from "./nip-validator";

describe("NIP validator", () => {
  it("should work for empty control", () => {
    const control: FormControl = new FormControl("");
    const validated = nipValidator(control);
    expect(validated).toBeUndefined();
  });

  it("should work for valid NIP", () => {
    const nips = [
      "768-000-24-66",
      "123-456-32-18",
      "106-00-00-062",
      "1234567890"
    ];

    nips.forEach(nip => {
      const control: FormControl = new FormControl(nip);
      const validated = nipValidator(control);
      expect(validated).toBeUndefined();
    });
  });

  it("should work for invalid NIP", () => {
    const nips = ["000-000-00-00", "123-456-78-91"];

    nips.forEach(nip => {
      const control: FormControl = new FormControl(nip);
      const validated = nipValidator(control);
      expect(validated).toEqual({ nip });
    });
  });
});
