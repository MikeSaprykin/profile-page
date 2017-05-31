import {AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  ngAfterViewInit() {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.classList.add('none');
    }, 200)
  }
}
