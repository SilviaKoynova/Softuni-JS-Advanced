const { library } = require('./library');
const { expect } = require('chai');
describe('test', () => {
    it('should work correctly', () => {
        expect(library.calcPriceOfBook('Harry Potter', 2021)).to.equal('Price of Harry Potter is 20.00');
        expect(library.calcPriceOfBook('Harry Potter', 1974)).to.equal('Price of Harry Potter is 10.00');
        expect(library.calcPriceOfBook('Harry Potter', 1980)).to.equal('Price of Harry Potter is 10.00');
    })
    it('should return an error if the year is not an integer number', () => {
        expect(() => library.calcPriceOfBook('Harry', '1960')).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook('Harry', 1974.24)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook(6, 2021)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook(5, '1984')).to.throw('Invalid input');
    })
    it('should return correct if book is here', () => {
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.contain('We found the book you want.');
        expect(library.findBook(["Troy", "Life Style"], 'Harry')).to.contain('The book you are looking for is not here!');
        expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
    })
    it('should count cirrectly', () => {
        expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
    })
    it('should return an error if is nut an integer or positive', () => {
        expect(() => library.arrangeTheBooks(6.5)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks('5.5')).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(-6)).to.throw('Invalid input');
    })
})