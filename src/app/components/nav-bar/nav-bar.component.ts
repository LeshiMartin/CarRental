import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent implements OnInit {
	@Output('btnClick') btnClick: EventEmitter<any> = new EventEmitter<any>();

	@HostBinding('class')
	get class() {
		return 'w-100';
	}

	constructor() {}

	ngOnInit(): void {}
}
