import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { BannerSwiperComponent } from '@components/banner-swiper/banner-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from '@components/banner/banner.component';
import 'swiper/css/navigation'
import 'swiper/css';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { RegFormComponent } from '@components/reg-form/reg-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageComponent } from './components/ui/form-error-message/form-error-message.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CodeConfirmFormComponent } from './components/code-confirm-form/code-confirm-form.component';
import { LoginEmailFormComponent } from './components/login-email-form/login-email-form.component';
import { PartnersLoginFromComponent } from './components/partners-login-from/partners-login-from.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		HeaderComponent,
		IconComponent,
		BannerSwiperComponent,
		BannerComponent,
		LoginFormComponent,
		RegFormComponent,
  FormErrorMessageComponent,
  ButtonComponent,
  CodeConfirmFormComponent,
  LoginEmailFormComponent,
  PartnersLoginFromComponent,
	],
	imports: [
		SwiperModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		OverlayModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
