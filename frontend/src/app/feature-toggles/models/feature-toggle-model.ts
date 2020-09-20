export interface FeatureToggleModel {
  technicalName?: string;
  displayName?: string;
  description?: string;
  expiresOn?: string;
  inverted?: boolean;
  customerIds?: Array<string>;
}
