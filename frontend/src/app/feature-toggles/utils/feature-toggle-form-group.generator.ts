import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FeatureToggleModel} from "../models/feature-toggle-model";
import {FeatureToggleDateFormatter} from "./feature-toggle-date.formatter";

export class FeatureToggleFormGroupGenerator {
  public static generate(model?: FeatureToggleModel): FormGroup {
    let formGroup: FormGroup = new FormGroup({
      technicalName: new FormControl(null, Validators.required),
      displayName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      expiresOn: new FormControl(null, Validators.required),
      inverted: new FormControl(false, Validators.required),
      customerIds: new FormArray([])
    })
    if (model) {
      formGroup.patchValue(model);
      formGroup.get('expiresOn').setValue(FeatureToggleDateFormatter.parse(model.expiresOn));
      if (model.customerIds && model.customerIds.length > 0) {
        for (let customerId of model.customerIds) {
          (<FormArray>formGroup.get('customerIds')).push(new FormControl(customerId));
        }
      }
    }

    return formGroup;
  }

  public static generateAddCustomerFormGroup(): FormGroup {
    return new FormGroup({
      customerId: new FormControl('', Validators.required)
    })
  }
}
