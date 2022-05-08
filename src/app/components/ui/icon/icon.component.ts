import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
	@Input() width!: number;
	@Input() height!: number;
	@Input() item: string = '';


	getPath() {
		const item = this.item;
		this.item = `./../../../../assets/sprites/sprite.svg#${item}`
		return this.item;
	}

}
