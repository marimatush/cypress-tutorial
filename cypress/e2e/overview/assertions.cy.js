describe('Assertions demo', () => {
    it('Implicit assertions', () => {
      cy.visit('https://www.letskodeit.com/practice')

      cy.get('#product')
      .should('have.class', 'table-display')
      .and('be.visible')
      .find('tbody tr:nth-child(2)')
      .find('td')
      .last()
      .should('contain', '35')
      .and('have.text', '35')
      .and('have.class', 'price')
    })

    it('Explicit assertion', () => {
      cy.visit('https://www.letskodeit.com/practice')

      let firstText = cy.get("#product").find('tbody tr:nth-child(2)').find('td')
      .first().then(($first) => {
        firstText = $first.text()
      })

      let secondText = cy.get("#product").find('tbody tr:nth-child(3)').find('td')
      .first().then(($second) => {
        secondText = $second.text()
        expect(secondText, "Vierify text is same").to.equal(firstText)
      })
    })
})
