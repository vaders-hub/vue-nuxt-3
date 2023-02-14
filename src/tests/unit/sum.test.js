import { mount } from '@vue/test-utils';
import TestComp from '@/components/TestComp.vue';

describe('Comp test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TestComp);
  });
  test('vm test', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
