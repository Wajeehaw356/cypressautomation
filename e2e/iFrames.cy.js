describe('Iframe', ()=>{
    it('using custome command', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type('welcome {cmd+a}')

        cy.get('[aria-label="Bold"]').click();
        

    })

    it.only('using iframe plugin', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type('Welcome Back {cmd+a}')

        cy.get('[aria-label="Bold"]').click();


    })

})