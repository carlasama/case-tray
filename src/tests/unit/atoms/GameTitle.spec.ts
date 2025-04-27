import { mount } from '@vue/test-utils'
import GameTitle from '@/components/atoms/GameTitle.vue'

describe('GameTitle', () => {
  it('renderiza o título corretamente', () => {
    const wrapper = mount(GameTitle)
    const spans = wrapper.findAll('span')
    const texts = spans.map(span => span.text())

    expect(texts[1].toLowerCase()).toContain('jogo')
    expect(texts[2].toLowerCase()).toContain('da')
    expect(texts[3].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')).toContain('memoria')
  })
})