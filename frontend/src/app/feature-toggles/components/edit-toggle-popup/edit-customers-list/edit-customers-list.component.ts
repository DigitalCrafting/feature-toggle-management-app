import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {FeatureToggleFormGroupGenerator} from "../../../utils/feature-toggle-form-group.generator";

@Component({
  selector: 'app-edit-customers-list',
  templateUrl: './edit-customers-list.component.html',
  styleUrls: ['./edit-customers-list.component.scss']
})
export class EditCustomersListComponent implements OnInit {
  @Input('customersList') customersList: FormArray;

  addCustomerFormGroup: FormGroup;

  ngOnInit(): void {
    this.addCustomerFormGroup = FeatureToggleFormGroupGenerator.generateAddCustomerFormGroup();
  }

  onAddCustomerClicked() {
    if (this.addCustomerFormGroup.valid) {
      let newCustomerId = this.addCustomerFormGroup.get('customerId').value;
      if (this.customersList.value.indexOf(newCustomerId) === -1) {
        this.customersList.push(new FormControl(newCustomerId));
        this.addCustomerFormGroup.reset();
      }
    }
  }

  onDeleteCustomerClicked(index: any) {
    this.customersList.removeAt(index);
  }

  trackByMethod(index: number, el: any) {
    return el.value;
  }
}
