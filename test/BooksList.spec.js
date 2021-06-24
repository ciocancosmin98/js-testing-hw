import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import List from '@/components/BooksList.vue';
import {Books} from '../src/util/constant.js';
import sinon from 'sinon';

describe('List.vue', () => {
    it('renders list items for each item in props.items', () => {
        const books = Books;
        books.forEach((book) => {
            book.id = faker.random.alphaNumeric(10);
        });

        const wrapper = shallowMount(List, {
            propsData: {
                books
            }
        });
        expect(wrapper.findAll({name: 'Book'})).toHaveLength(Books.length);
    });

    it('default value book list is initialised correctly', () => {
        
        const wrapper = shallowMount(List, {
            propsData: {}
        });

        expect(wrapper.findAll({name: 'Book'})).toHaveLength(0);
    });

    /*it('event emitted in child book is passed on', () => {
        const books = Books;
        const handler = sinon.stub();
        const spy = sinon.spy(handler);

        books.forEach((book) => {
            book.id = faker.random.alphaNumeric(10);
        });

        const wrapper = shallowMount(List, {
            propsData: {
                books
            },
            listeners: {
                'remove': spy
            }
        });

        const button = wrapper.find('.book').find('.remove');

        button.trigger('click');
        expect(spy.called).toEqual(true);
    });*/
})

