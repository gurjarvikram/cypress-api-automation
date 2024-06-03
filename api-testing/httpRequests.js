describe("HTTP Requests", () => {

    it("GET Call", () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .its('status')
            .should('equal', 200);
    })

    it('POST Call', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in//api/users',
            body: {
                "name": "morpheus",
                "job": "leader",
                "id": "509"
            }
        })
            .its('status')
            .should('equal', 201);
    })

})
