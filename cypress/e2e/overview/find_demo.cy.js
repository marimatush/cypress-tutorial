describe('Find demo', () => {
    it('Should verify find capabilities', () => {
      cy.visit('https://www.letskodeit.com/practice')

      cy.get('button')
      cy.get('#open-window-example-div').find('button').should('have.id', 'openwindow').click()

      // can be run with options 'log' and 'timeout'
      cy.get('#open-window-example-div').find('button', {log: false})
      cy.get('#open-window-example-div').find('button', {timeout: 10000})
    })
})
