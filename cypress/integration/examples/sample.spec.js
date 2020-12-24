describe('My first test', () => {
  it('visits the kitchen sink app', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Buy with 20 Cards!').click()

    cy.get('#orderProductModal_firstNameOfChild').type('FirstName').should('have.value', 'FirstName')
    cy.get('#orderProductModal_lastNameOfChild').type('LastName').should('have.value', 'LastName')
    cy.get('#orderProductModal_firstNameOfParent').type('FirstNameParent').should('have.value', 'FirstNameParent')
    cy.get('#orderProductModal_lastNameOfParent').type('LastNameParent').should('have.value', 'LastNameParent')
    cy.get('#orderProductModal_emailAddressOfParent').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#orderProductModal_streetAddress').type('123 Main St').should('have.value', '123 Main St')
    
    // cy.contains('type').click()

    // cy.url().should('include', '/commands/actions')

    // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
  })
})