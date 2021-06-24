import {shallowMount} from '@vue/test-utils';
import faker from 'faker';
import List from '@/components/others/List.vue';
import sinon from 'sinon';

describe('List.vue', () => {
    it('renders list items for each item in props.items', () => {
       const items = [faker.lorem.word(), faker.lorem.word(),
                      faker.lorem.word(), faker.lorem.word(),
                      faker.lorem.word(), faker.lorem.word(),
                      faker.lorem.word(), faker.lorem.word(),
                      faker.lorem.word(), faker.lorem.word()];

       const wrapper = shallowMount(List, {
          propsData: {
            items
          }
       });

      expect(wrapper.findAll('li')).toHaveLength(items.length);
    });
})

