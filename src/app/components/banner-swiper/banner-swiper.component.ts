import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Navigation, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-banner-swiper',
  templateUrl: './banner-swiper.component.html',
  styleUrls: ['./banner-swiper.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class BannerSwiperComponent implements OnInit {
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
	};
	onSwiper([swiper]:any) {
		console.log(swiper);
	}
	onSlideChange() {
		console.log('slide change');
	}
  constructor() { }

  ngOnInit(): void {
  }

}
