import React from 'react'
import Mogus from './mdb'

describe('<Mogus />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Mogus />)
  })
})