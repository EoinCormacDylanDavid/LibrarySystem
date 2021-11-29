const assert = require('assert')
const Book = require('../app_api/models/books.js')

describe('Creating Book', function () {
	it('creates a book', (done) => {
	const bookA = new Book({title: 'test', author: 'test', genre:'test', rating: 3, status: 'available'});
	bookA.save()
	.then(() => {
		assert(!bookA.isNew);
		done();
	});
	});
	});
	
