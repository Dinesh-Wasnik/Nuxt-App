import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'
import Reviews from '@/components/Reviews.vue'

describe('Hero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hero)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Reviews', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Reviews)
    expect(wrapper.vm).toBeTruthy()
  })
})