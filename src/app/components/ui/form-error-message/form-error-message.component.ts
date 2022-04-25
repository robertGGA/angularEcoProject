import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorMessageComponent  {
	@Input() validationMessage: string|undefined
  constructor() {
  }


}
