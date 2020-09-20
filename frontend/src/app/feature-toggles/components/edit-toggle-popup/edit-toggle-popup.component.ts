import {Component, OnDestroy} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FeatureToggleModel} from "../../models/feature-toggle-model";
import {FormGroup} from "@angular/forms";
import {FeatureToggleFormGroupGenerator} from "../../utils/feature-toggle-form-group.generator";
import {FeatureTogglesService} from "../../service/feature-toggles.service";
import {FeatureToggleDateFormatter} from "../../utils/feature-toggle-date.formatter";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-toggle-popup',
  templateUrl: './edit-toggle-popup.component.html',
  styleUrls: ['./edit-toggle-popup.component.scss']
})
export class EditTogglePopupComponent implements OnDestroy {

  toggleModel: FeatureToggleModel;
  formGroup: FormGroup;
  isCreate: boolean = true;
  subscription: Subscription = new Subscription();

  constructor(public _activeModal: NgbActiveModal,
              private _service: FeatureTogglesService) {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public initPopup(model?: FeatureToggleModel) {
    if (model){
      this.toggleModel = model;
      this.isCreate = false;
    }
    this.formGroup = FeatureToggleFormGroupGenerator.generate(model);
  }

  onSaveToggleClicked() {
    if (this.formGroup.valid) {
      let data: FeatureToggleModel = this.formGroup.value;
      data.expiresOn = <any>FeatureToggleDateFormatter.format(<any>data.expiresOn);
      if (this.isCreate) {
        this.subscription.add(this._service.createToggle(data).subscribe(() => {
          this._activeModal.close();
        }));
      } else {
        this.subscription.add(this._service.updateToggle(data).subscribe(() => {
          this._activeModal.close();
        }));
      }
    }
  }

  onArchiveToggleClicked() {
    this.subscription.add(this._service.archiveToggle(this.toggleModel.technicalName).subscribe(() => {
      this._activeModal.close();
    }));
  }
}
