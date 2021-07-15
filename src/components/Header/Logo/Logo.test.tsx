import React from 'react'

import { renderWithTheme } from '../../../utils/test-utils'
import { Logo } from './Logo'

describe('<Logo />', () => {
  it('shoud be render correctly by snapshot', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.parentElement).toMatchSnapshot()
  })
})
