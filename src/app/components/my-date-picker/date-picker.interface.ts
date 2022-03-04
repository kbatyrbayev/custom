import { FormGroup } from "@angular/forms";

export type TotalRadioType = TotalDisplayType | 'period';
export type TotalDisplayType = 'day' | 'month' | 'year';

export interface ITotalDateClose {
  range: FormGroup;
  radio: TotalRadioType;
  display?: TotalDisplayType;
}

export interface IMyDateRange {
  start: moment.Moment;
  end: moment.Moment;
}

export interface IMyDatePickerOutput {
  range: IMyDateRange;
  radio: TotalRadioType;
  display: TotalDisplayType;
}
