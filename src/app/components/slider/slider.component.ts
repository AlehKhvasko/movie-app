import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component,Input,OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import {IMAGES_SIZE} from '../../constants/images-sizes'

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })),
   transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  readonly imagesSize = IMAGES_SIZE;

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
