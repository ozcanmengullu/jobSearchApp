import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from "vitest";
import JobList from '../JobList.vue';

describe('JobList', () => {
  it('should render the component with the correct text', () => {
    const wrapper = shallowMount(JobList);
    expect(wrapper.find('h1').text()).toBe('Dünyanın En Büyük İş Bulma Sitesine Hoş Geldiniz');
    expect(wrapper.find('h4').text()).toBe('Kariyerize En Uygun Fırsatları Bulmak İçin Hemen Arayın');
  });

  it('should have a "İş Bul" button with the correct properties', () => {
    const wrapper = shallowMount(JobList);
    const button = wrapper.find('b-button');
    expect(button.exists()).toBe(true);
    expect(button.attributes('variant')).toBe('outline-success');
    expect(button.attributes('href')).toBe('/jobs');
    expect(button.text()).toBe('İş Bul');
  });
});
