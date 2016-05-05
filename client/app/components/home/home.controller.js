class HomeController {
  constructor() {
    this.name = 'home';
    this.slides = [];

  }
  load() {
  	this.slides.push({id:1,text:"text",image:"img.jpg"})
  }
}

export default HomeController;