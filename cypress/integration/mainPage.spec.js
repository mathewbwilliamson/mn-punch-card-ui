/// <reference types="cypress" />

describe('Main Student Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Buy With Cards Modal Loads When Clicked', () => {
    cy.get('.product-card__container button').first().click()

    cy.get('.ant-btn-primary').should('be.disabled')
    cy.get('#orderProductModal_firstNameOfChild').type('FirstName').should('have.value', 'FirstName')
    cy.get('#orderProductModal_lastNameOfChild').type('LastName').should('have.value', 'LastName')
    cy.get('#orderProductModal_firstNameOfParent').type('FirstNameParent').should('have.value', 'FirstNameParent')
    cy.get('#orderProductModal_lastNameOfParent').type('LastNameParent').should('have.value', 'LastNameParent')
    cy.get('#orderProductModal_emailAddressOfParent').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#orderProductModal_streetAddress').type('123 Main St').should('have.value', '123 Main St')
    cy.get('#orderProductModal_city').type('my city').should('have.value', 'Tampamy city')
    cy.get('#orderProductModal_zipCode').type('12345').should('have.value', '12345')
    // cy.get('.ant-select-selection-item').click().get('#orderProductModal_state_list').contains('CO')
    cy.get('.ant-btn-primary').should('be.disabled')
    cy.get('#orderProductModal_parentApproval').check()

    cy.get('.ant-btn-primary').should('not.be.disabled')

  })
})