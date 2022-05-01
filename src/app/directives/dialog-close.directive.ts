import { Directive, ElementRef, HostListener, Input, Optional} from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk-experimental/dialog';

@Directive({
  selector: '[appDialogClose]'
})
export class DialogCloseDirective {
	@Input('app-dialog-close') dialogResult: any;
	@Input('appDialogClose') _tkDialogClose: any;

	constructor(
		@Optional() public dialogRef: DialogRef<any>,
		private _elementRef: ElementRef<HTMLElement>,
		private _dialog: Dialog,
	) {}

	@HostListener('click') close(): void {
		this.dialogRef ? this.dialogRef.close(this.dialogResult) : this._dialog.closeAll();
	}

	ngOnInit(): void {
		if (!this.dialogRef) {
			this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;
		}
	}
}

function getClosestDialog(
	element: ElementRef<HTMLElement>,
	openDialogs: DialogRef<any>[],
): DialogRef<any> | null | undefined {
	let parent: HTMLElement | null = element.nativeElement.parentElement;

	while (parent && !parent.classList.contains('cdk-dialog-container')) {
		parent = parent.parentElement;
	}

	return parent ? openDialogs.find(dialog => dialog.id === parent?.id) : null;
}
