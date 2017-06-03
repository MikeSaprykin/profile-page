import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import {slideInLeft, slideInRight} from "app/components/animations";

const ITEMS = [
  {
    image: 'http://wallpapercave.com/wp/jQcwZJD.jpg',
    active: true
  },
  {
    image: 'http://wallpapercave.com/wp/jQcwZJD.jpg',
    active: false
  },
  {
    image: 'http://wallpapercave.com/wp/T190Sqm.jpg',
    active: false
  },
  {
    image: 'http://wallpapercave.com/wp/97cu71t.jpg',
    active: false
  }
];

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInLeft(),
    slideInRight()
  ]
})
export class CarouselComponent implements OnInit {

  carouseItems = ITEMS;

  generateCarouselItemBg(item) {
    return { 'background-image': `url(${item.image})` }
  }

  ngOnInit() {
    Observable
      .interval(4000)
      .take(5)
      .subscribe(
        () => this.toggleCarouselItem()
      )
  }

  toggleCarouselItem() {
    const currentIndex = this.carouseItems.findIndex(item => item.active);
    const nextIndex = currentIndex + 1 < this.carouseItems.length ? currentIndex + 1 : 0;
    this.carouseItems = this.carouseItems.map((item, itemIndex) => {
       itemIndex  === nextIndex ? item.active = true : item.active = false;
       return item;
    });
  }

}
