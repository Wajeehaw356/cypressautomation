describe ('radio button and checkbox', ()=>{

    it("radio button", ()=>{
        cy.visit("test.rubywatir.com/radios.php")

        // visibility of radio button
        cy.get(':nth-child(9)').should('be.visible')
        cy.get('[value="Radio1"]').should('be.visible')

        //checking the radio button
        cy.get(':nth-child(9)').check().should('be.checked')
        cy.get('[value="Radio1"]').should('not.be.checked')

    })

    it("checkbox", ()=>{
        cy.visit("test.rubywatir.com/checkboxes.php")

        // visibility of checkbox
        cy.get('[value="soccer"]').should('be.visible')
        cy.get('[value="football"]').should('be.visible')

        //checking and unchecking single checkbox
        cy.get('[value="football"]').check().should('be.checked')
        cy.get('[value="soccer"]').uncheck().should('not.be.checked')

        //checking all the checkboxes
        cy.get("input[type='checkbox']").check().should('be.checked') 

        //checking first checkbox
        cy.get("input[type='checkbox']").first().uncheck()

        //checking last checkbox
        cy.get("input[type='checkbox']").last().uncheck()

    })

})