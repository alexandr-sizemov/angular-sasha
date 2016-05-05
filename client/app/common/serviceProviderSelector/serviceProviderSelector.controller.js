class serviceProviderSelectorController {
  constructor() {
    this.name = 'serviceProviderSelector';
    this.serviceReceiveList = [];
    this.turnAroundAccordion = [];
    this.turnAroundAccordion['byhm'] = true; 
    this.turnAroundAccordion['byday'] = false;
  	this.load();
  }

  load() {
  	this.serviceReceiveList.push({
  		id:1,
  		deliveryOption: 'Travel to Customer (10 miles)',
  		serviceCost: '10.00',
  		duration: '90 Minutes'
  	});
  	this.serviceReceiveList.push({
  		id:2,
  		deliveryOption: 'Customer Comes to Me',
  		serviceCost: 'Free',
  		duration: '1 Hour'
  	});
  }

  addToServiceReceiveList(deliveryOption, serviceCost, hours, minutes){
  	console.log(deliveryOption, serviceCost, hours, minutes)
  	this.serviceReceiveList.push({
  		id:this.serviceReceiveList.length+2,
  		deliveryOption,
  		serviceCost,
  		duration: hours + ' ' + minutes
  	})
  }

  removeFromServiceReceiveList(priceId){
  	let index = this.serviceReceiveList.indexOf(function(el,i){
  		return el.id === priceId
  	});
  	this.serviceReceiveList.splice(index,1);
  }

}

export default serviceProviderSelectorController;
