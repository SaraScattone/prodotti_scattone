import { Component } from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent {
  rating: number = 4;
  cropWidth: number = 75;
}
