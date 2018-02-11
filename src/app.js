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