// Creating a Car constructor
var Car = Backbone.Model.extend({
	/*
	 * Backbone's built-in method that runs every time you instantiate
	 */
	initialize : function (options){	
		this.defaultColour = 'red';
		this.nctYear = 2019;
		if(options && options.model){
			this.set('priceRange', this.getPriceRange(options.model))
		} else {
			this.set('priceRange', this.getPriceRange('€15,000'));
		}
	},
	/*
	 * Takes in the name of a car model and returns out a price range for that car
	 * @param {String} model - the name of a car model
	 * @return {String} - the price range
	 */
	getPriceRange :  function (model){
		model = model.toLowerCase();
		switch(model) {
	    case 'skoda' :
	       	return '€13,000 - €20,000'
	        break;    
	    case 'volkswagen' :
	    case 'opel' :
	       	return '€18,000 – €25,000'
	        break;
	    case 'mercedes':
	        return '€40,000 - €60, 000'
	        break;
	    default:
	        return '€15,000'
		}
	}
});

//Creating instances of Car
var skoda 			= new Car({model: 'skoda'}),
		volkswagen 	= new Car({model: 'volkswagen'}),
		opel 				= new Car({model: 'opel'}),
		mercedes 		= new Car({model: 'mercedes'}),
		ford 				= new Car({model: 'ford'});

//Console logs to check value
console.log(skoda.get('model') + ' : ' + skoda.get('priceRange'));
console.log(volkswagen.get('model') + ' : ' + volkswagen.get('priceRange'));
console.log(opel.get('model') + ' : ' + opel.get('priceRange'));
console.log(mercedes.get('model') + ' : ' + mercedes.get('priceRange'));
console.log(ford.get('model') + ' : ' + ford.get('priceRange'));