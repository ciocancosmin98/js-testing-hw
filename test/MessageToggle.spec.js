import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import MessageToggle from '@/components/others/MessageToggle.vue';
import {Language} from '../src/util/constant.js'
import sinon from 'sinon';
import Message from '@/components/others/Message.vue';

describe('MessageToggle.vue', () => {
    it('MessageToggle data value msg should be null on init', () => {
        const word = faker.lorem.word();
        const wrapper = shallowMount(MessageToggle, {});

        expect(wrapper.vm.msg).toEqual(null);
    });

    it('MessageToggle data value msg should be message on one toggle', () => {
        const wrapper = shallowMount(MessageToggle, {});

        wrapper.vm.$nextTick(() => {
          wrapper.vm.toggleMessage();
          expect(wrapper.vm.msg).toEqual('message');
        });
    });

    it('MessageToggle data value msg should be toggled message on 2 toggles', () => {
        const wrapper = shallowMount(MessageToggle, {});

        wrapper.vm.$nextTick(() => {
          wrapper.vm.toggleMessage();
          wrapper.vm.toggleMessage();
          expect(wrapper.vm.msg).toEqual('toggled message');
        });
    });

    it('The message is toggled on button click', () => {
        const wrapper = shallowMount(MessageToggle, {});

        const button = wrapper.find('button');
        button.trigger('click');

        expect(wrapper.vm.msg).toEqual('message');
    });
   /*it('Message component should display the default value of msg prop', () => {
        const wrapper = shallowMount(Message, {
            propsData: {}
        });

        expect(wrapper.find('h1').text()).toEqual('default message');
    });*/
})

