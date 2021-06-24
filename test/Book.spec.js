import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import Book from '@/components/Book.vue';
import {Language} from '../src/util/constant.js'
import sinon from 'sinon';

describe('Book.vue', () => {
    it('should throw error if name is not provided', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                author: 'Ion Creanga',
                id: '36',
            }
        }).toThrow(`[Vue warn]: Missing required prop: "name"`));
    });
    
    it('should throw error if id is not provided', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                author: 'Ion Creanga',
                name: 'The selfish gene',
            }
        }).toThrow(`[Vue warn]: Missing required prop: "id"`));
    });

    it('should throw error if author is not provided', () => {
        expect(() => shallowMount(Book, {
            propsData: {
                name: 'The selfish gene',
                id: '36',
            }
        }).toThrow(`[Vue warn]: Missing required prop: "author"`));
    });

    it('Book component should display the value of name prop', () => {
        const book = {
            id: faker.random.alphaNumeric(10),
            name: faker.name.title(),
            author: faker.lorem.word()
        };
        const wrapper = shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: book.name,
                author: book.author
            }
        });

        expect(wrapper.find('.name').text()).toEqual(book.name);
        expect(wrapper.find('.author').text()).toEqual(`by ${book.author}`);
    });

    it('should throw error if language is not accepted', () => {

        let language = faker.lorem.word();
        while(Language.includes(language))
          language = faker.lorem.word();
        
        expect(() => shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: faker.name.title(),
                author: faker.lorem.word(),
                language
            }
        }).toThrow());
    });

    it('check information is constructed correctly', () => {
        const book = {
            id: faker.random.alphaNumeric(10),
            name: faker.name.title(),
            author: faker.lorem.word(),
            category: faker.lorem.word(),
            year: faker.datatype.number(),
            language: 'english',
        };
        const wrapper = shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: book.name,
                author: book.author,
                category: book.category,
                language: book.language,
                year: book.year
            }
        });

        expect(wrapper.vm.information).toEqual([book.year, book.category, 
            book.language].join('*'));
    });

    it('check the remove event is emitted on click', () => {
        const handler = sinon.stub();
        const spy = sinon.spy(handler);
        const book = {
            id: faker.random.alphaNumeric(10),
            name: faker.name.title(),
            author: faker.lorem.word()
        };

        const wrapper = shallowMount(Book, {
            propsData: {
                id: faker.random.alphaNumeric(10),
                name: book.name,
                author: book.author
            },
            listeners: {
                'remove': spy
            }
        });

        const button = wrapper.find('.remove');
        button.trigger('click');
        
        expect(spy.called).toEqual(true);
    });
})

