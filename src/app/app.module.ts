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
import { LoginFormComponent } from '@components/modals/modal-content/login-form/login-form.component';
import { RegFormComponent } from '@components/modals/modal-content/reg-form/reg-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageComponent } from '@components/ui/form-error-message/form-error-message.component';
import { ButtonComponent } from '@components/ui/button/button.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { LoginEmailFormComponent } from '@components/modals/modal-content/login-email-form/login-email-form.component';
import { PartnersLoginFromComponent } from '@components/modals/modal-containers/partners-login-from/partners-login-from.component';
import { MainPageCardComponent } from '@components/ui/main-page-card/main-page-card.component';
import { DialogCloseDirective } from '@directives/dialog-close.directive';
import { ModalContainerComponent } from '@components/modals/modal-containers/modal-container/modal-container.component';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { UserCardComponent } from '@components/cards/user-card/user-card.component';
import { CardListSwitcherComponent } from '@components/card-list-switcher/card-list-switcher.component';
import { PromocodeCardComponent } from '@components/cards/promocode-card/promocode-card.component';
import { RouterModule } from '@angular/router';
import { MarketPageComponent } from '@pages/market-page/market-page.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { AuthGuard } from '@guards/auth-guard';
import { ProductCardComponent } from '@components/ui/product-card/product-card.component';
import { FilterComponent } from '@components/filter/filter.component';
import { SubFilterComponent } from '@components/sub-filter/sub-filter.component';
import { FilterCheckboxComponent } from '@components/filter-checkbox/filter-checkbox.component';
import { MapPageComponent } from '@pages/map-page/map-page.component';
import { FilterModalContainerComponent } from '@components/filter-modal-container/filter-modal-container.component';
import { MobileModalComponent } from '@components/modals/modal-containers/mobile-modal/mobile-modal.component';
import { ModalMenuContentComponent } from '@components/modals/modal-content/modal-menu-content/modal-menu-content.component';
import { FooterComponent } from '@components/footer/footer.component';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { CardSkeletonComponent } from '@components/ui/loading/skeletons/card-skeleton/card-skeleton.component';
import { CenterCardComponent } from './components/ui/center-card/center-card.component';
import { LeafletComponent, NglCoreModule } from 'angular-leaflet';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import { DropdownComponent } from './components/ui/dropdown/dropdown.component';


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
		MainPageCardComponent,
		FormErrorMessageComponent,
		ButtonComponent,
		CodeConfirmFormComponent,
		LoginEmailFormComponent,
		PartnersLoginFromComponent,
		ModalContainerComponent,
		DialogCloseDirective,
		ProfilePageComponent,
		UserCardComponent,
		CardListSwitcherComponent,
		PromocodeCardComponent,
		MarketPageComponent,
		HistoryCardComponent,
		ProductCardComponent,
		FilterComponent,
		SubFilterComponent,
		FilterCheckboxComponent,
		MapPageComponent,
		FilterModalContainerComponent,
		MobileModalComponent,
		ModalMenuContentComponent,
		FooterComponent,
		AboutPageComponent,
		CardSkeletonComponent,
  		CenterCardComponent,
    SearchInputComponent,
    DropdownComponent,
	],
	imports: [
		SwiperModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		OverlayModule,
		PortalModule,
		DialogModule,
		BrowserAnimationsModule,
		RouterModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		},

		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
