import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeatureToggleModel} from "../../models/feature-toggle-model";
import {FeatureTogglesService} from "../../service/feature-toggles.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditTogglePopupComponent} from "../edit-toggle-popup/edit-toggle-popup.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toggles-list',
  templateUrl: './toggles-list.component.html',
  styleUrls: ['./toggles-list.component.scss']
})
export class TogglesListComponent implements OnInit, OnDestroy {

  togglesList: Array<FeatureToggleModel> = [];
  subscription: Subscription = new Subscription();

  constructor(private _service: FeatureTogglesService,
              private _modalService: NgbModal) {
  }

  ngOnInit(): void {
    setTimeout(this.getToggles);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onArchiveClicked(toggleModel: FeatureToggleModel) {
    this.subscription.add(
      this._service.archiveToggle(toggleModel.technicalName).subscribe(this.getToggles)
    );
  }

  openPopup(model?: FeatureToggleModel) {
    let ref = this._modalService.open(EditTogglePopupComponent);
    ref.result.then(this.getToggles)
    ref.componentInstance.initPopup(model);
  }

  trackByMethod(index: number, el: FeatureToggleModel) {
    return el.technicalName;
  }

  private getToggles = () => {
    this.subscription.add(
      this._service.getToggles().subscribe((list: Array<FeatureToggleModel>) => {
        this.togglesList = list;
      })
    )
  }
}
