import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-center-card',
  templateUrl: './center-card.component.html',
  styleUrls: ['./center-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenterCardComponent{
	@Input() address = "Ул. Пушкина дом Колотушкина"
	@Input() materials = "Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..."
}
