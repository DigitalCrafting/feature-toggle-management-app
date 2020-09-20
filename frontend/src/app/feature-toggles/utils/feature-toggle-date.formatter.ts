import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export class FeatureToggleDateFormatter {
  public static format(date: NgbDateStruct | null): string {
    if (date) {
      return date.year + "-" + FeatureToggleDateFormatter.padNumber(date.month) + "-" + FeatureToggleDateFormatter.padNumber(date.day);
    }
    return '';
  }

  public static parse(date: string): NgbDateStruct | null {
    let dateParts = date.split("T")[0].split("-");
    return <NgbDateStruct>{
      day: +dateParts[2],
      month: +dateParts[1],
      year: +dateParts[0]
    }
  }

  static padNumber(value: number) {
    if (FeatureToggleDateFormatter.isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return "";
    }
  }

  static isNumber(value: any): boolean {
    return !isNaN(FeatureToggleDateFormatter.toInteger(value));
  }

  static toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }
}
