import image from '../../assets/images/slide.jpg'

class sliderController {
  constructor() {
    this.name = 'slider';
    this.slides = []
    this.active = 1
  	this.load()
  }

  load() {
    this.slides.push({ id:1, image});
    this.slides.push({ id:2, image});
  }

}

export default sliderController;
