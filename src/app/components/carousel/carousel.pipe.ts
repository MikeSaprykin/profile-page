import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carousel'
})
export class CarouselPipe implements PipeTransform {

  carouselItems;

  transform(carouselItems: any, args?: any): any {
    this.carouselItems = carouselItems;
    let currentIndex = carouselItems.findIndex(item => item.active);
    const result = this.generateItems(currentIndex);
    console.log(args);
    return result;
  }

  generateItems(index: number): Array<any> {
    return this.carouselItems[index + 1] ?
      [this.carouselItems[index], this.carouselItems[index + 1]]
        .map((item) => {
          item.enter = 'right';
          return item;
        })
    : [this.carouselItems[index], this.carouselItems[0]]
        .map((item) => {
          item.enter = 'left';
          return item;
        });
  }

}
