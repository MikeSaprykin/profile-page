import {AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  ngAfterViewInit() {
    this.hideLoader();
  }

  hideLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if(!loader) return;
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.classList.add('none');
    }, 200)
  }
}
