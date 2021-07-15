import React from 'react'

import { renderWithTheme } from '../../utils/test-utils'
import { Header } from '.'

describe('<Header />', () => {
  it('should be render header correctly', () => {
    const { container } = renderWithTheme(<Header />)

    expect(container.parentElement).toMatchSnapshot()
  })
})
