import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import sinon from 'sinon';
import AddBook from '@/components/AddBook.vue';

describe('AddBook.vue', () => {
    it('Update data when inserting text in name input', () => {
        const name = faker.name.title();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.name');

        input.setValue(name);

        expect(wrapper.vm.name).toEqual(name);
    });

    it('Update data when inserting text in author input', () => {
        const author = faker.name.findName();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.author');

        input.setValue(author);

        expect(wrapper.vm.author).toEqual(author);
    });

    it('Update data when inserting text in year input', () => {
        const data = faker.datatype.number();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.year');

        input.setValue(data);

        expect(parseInt(wrapper.vm.year)).toEqual(data);
    });   

    it('Update data when inserting text in category input', () => {
        const data = faker.music.genre();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.category');

        input.setValue(data);

        expect(wrapper.vm.category).toEqual(data);
    });

    it('Update data when inserting text in language input', () => {
        const data = faker.lorem.word();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.language');

        input.setValue(data);

        expect(wrapper.vm.language).toEqual(data);
    });

    /*it('Update input when inserting text in name data', () => {
        const name = faker.name.title();
        const wrapper = shallowMount(AddBook);
        const input = wrapper.find('.name');

        wrapper.setData({ name });
        expect(input.element.value).toEqual(name);
    });*/

    it('Event is emit when clicking Add button', () => {
        const handler = sinon.stub();
        const spy = sinon.spy(handler);

        const wrapper = shallowMount(AddBook, {
            listeners: {
                'add': spy
            }
        });
        const button = wrapper.find('.add');

        button.trigger('click');

        expect(spy.called).toEqual(true);
    });

    it('Emit add event when calling submit method', () => {
        const wrapper = shallowMount(AddBook);

        wrapper.vm.$nextTick(() => {
            wrapper.vm.submit();
            expect(wrapper.emitted().add).toBeTruthy();
        });
    });
})

