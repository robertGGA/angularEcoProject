import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {
	user: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
	  this.auth.getProfile().subscribe(res => {
		  this.user = res;
		  console.log(res);
	  });
  }

}
