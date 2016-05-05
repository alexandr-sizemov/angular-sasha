class PriceboxController {
  constructor() {
    this.name = 'pricebox';
  	this.priceList = [];
    this.priceAccordion = [];
    this.priceAccordion['total'] = true; 
    this.priceAccordion['appBased'] = false;
    this.load();
  }
  load() {
  	this.priceList.push({ id:1, amount:'1,200.00' });
  }
  addToPriceList(amount){
  	console.log(this.priceList.length, amount)
  	this.priceList.push({
  		id:this.priceList.length+2,
  		amount:amount
  	})
  }

  removeFromPriceList(priceId){
  	let index = this.priceList.indexOf(function(el,i){
  		return el.id === priceId
  	});
  	this.priceList.splice(index,1);
  }

}

export default PriceboxController;
