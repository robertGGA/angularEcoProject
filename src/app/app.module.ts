import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { BannerSwiperComponent } from './components/banner-swiper/banner-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './components/banner/banner.component';
import 'swiper/css/navigation'
import 'swiper/css'

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		HeaderComponent,
		IconComponent,
		BannerSwiperComponent,
  BannerComponent
	],
	imports: [
		SwiperModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
