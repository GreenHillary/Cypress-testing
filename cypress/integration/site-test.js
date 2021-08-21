/// <reference types="cypress" />

describe('Home Page Text', () => {
    beforeEach(() => {
      cy.visit('https://funtennisgifts.com')
    })

    it('displays main menu', () => {
        cy.get('.site-header').should('be.visible')
    })
  
    it('displays Header Image', () => {
        cy.get('.featured-image img').should('be.visible')
    })

    it('displays Footer Bar', () =>{
        cy.get('.copyright-bar').should('be.visible')
    })
  
  })
  