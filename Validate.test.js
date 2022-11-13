it('Validate Status', () => {
    var ability = {
        "name": 'limber',}
    
    cy.request('https://pokeapi.co/api/v2/ability/7/', ability).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(ability.name)
    })
})

