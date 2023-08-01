import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from "vitest";
import Job from '../Job.vue';

describe('Job', () => {
  it('should render the component with the correct job data', () => {
    const jobData = {
      imageUrl: 'path/to/image.jpg',
      positionName: 'Software Developer',
      companyName: 'Example Inc.',
      durationDayText: 'Full-time',
      distance: '5 miles',
      cityName: 'Example City',
      townName: 'Example Town',
    };

    const wrapper = shallowMount(Job, {
      propsData: { jobData },
    });

    expect(wrapper.find('.job-image').attributes('src')).toBe(jobData.imageUrl);
    expect(wrapper.find('h4').text()).toBe(jobData.positionName);
  });
});
