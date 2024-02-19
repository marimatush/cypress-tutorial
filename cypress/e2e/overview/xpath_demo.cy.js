describe('Xpath demo', () => {
    it('Should verify xpath capabilities', () => {
      cy.visit('https://www.letskodeit.com/courses')
      cy.xpath('//input[@id="search"]').type("test")
      cy.xpath('//div[@id="course-list"]').xpath('./div').should('have.length', 6)
    })
})
