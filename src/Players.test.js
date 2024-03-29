import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Players from './Players'

describe('<Players />', () => {
  it ('should render a list of players provided on props', () => {
    const playersData = [
      {id: 1, name: 'LeBron James'},
      {id: 2, name: 'Donovan Mitchell'},
      {id: 3, name: 'Uncle Drew'},
    ]
    const comp = render(<Players players={playersData} />)

    const players = comp.getAllByTestId('player')

    expect(players).toHaveLength(playersData.length)
  })
})
