import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { PromocodeCardComponent } from '@components/cards/promocode-card/promocode-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { MarketPageComponent } from '@pages/market-page/market-page.component';
import { AuthGuard } from '@guards/auth-guard';
import { MapPageComponent } from '@pages/map-page/map-page.component';

const profileRoutes: Routes = [
	{ path: 'promocode', component: PromocodeCardComponent },
	{ path: 'history', component: HistoryCardComponent }
]


const routes: Routes = [
	{ path: '', component: MainPageComponent },
	{ path: 'profile', component: ProfilePageComponent, children: profileRoutes, canActivate: [AuthGuard] },
	{ path: 'market', component: MarketPageComponent },
	{ path: 'map', component: MapPageComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
