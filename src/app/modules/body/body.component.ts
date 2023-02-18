import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  images = [
    '../../../assets/images/Kanye.png',
    '../../../assets/images/coldplay.png',
    '../../../assets/images/drake.png',
    '../../../assets/images/aliciakeys.png'
  ];

  currentIndex = 0;

  onImageClick(index: number) {
    this.currentIndex = index;
    console.log('Clicked image', index);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    console.log('Next image', this.currentIndex);
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    console.log('Previous image', this.currentIndex);
  }

  


  
}

  
