import { shallowMount } from '@vue/test-utils'
import CommonButton from '@/components/CommonButton.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const btnText = 'custom btn text'
    const wrapper = shallowMount(CommonButton, {
      props: { btnText }
    })
    expect(wrapper.text()).toMatch(btnText)
  })
})
