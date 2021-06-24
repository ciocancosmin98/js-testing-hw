import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import Message from '@/components/others/Message.vue';
import {Language} from '../src/util/constant.js'
import sinon from 'sinon';

describe('Message.vue', () => {
    it('Message component should display the value of msg prop', () => {
        const word = faker.lorem.word();
        const wrapper = shallowMount(Message, {
            propsData: {
              msg: word
            }
        });

        expect(wrapper.find('h1').text()).toEqual(word);
    });

   it('Message component should display the default value of msg prop', () => {
        const wrapper = shallowMount(Message, {
            propsData: {}
        });

        expect(wrapper.find('h1').text()).toEqual('default message');
    });
})

