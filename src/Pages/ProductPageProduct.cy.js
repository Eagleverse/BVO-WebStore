import React from 'react'
import Product from './ProductPage'

describe('<Product />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Product />)
  })
})