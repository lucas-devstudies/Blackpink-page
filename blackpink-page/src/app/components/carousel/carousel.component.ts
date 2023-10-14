import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit{
  @ViewChild('myCarousel') myCarousel: NgbCarousel | undefined; // Inicialize com undefined

  images = [{
    imageSrc: 'assets/image-1.png',
    imageAlt: 'Show de blackpink'
  },
  {
    imageSrc: 'assets/image-2.png',
    imageAlt: 'Show de blackpink'
  },
  {
    imageSrc: 'assets/image-3.png',
    imageAlt: 'Show de blackpink'
  },
  ];
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.myCarousel) {
        this.myCarousel.next();
      }
    }, 2000);
  }
}
