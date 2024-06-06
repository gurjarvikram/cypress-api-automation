describe("HTTP Requests", () => {

    it("GET Call", () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                // Perform assertions or actions on the response
                expect(response.status).to.eq(200)
            })
    })

    it('POST Call - Danmically generating json object', () => {

        const requestBody = {
            name: Math.random().toString(7).substring(2),
            job: "leader",
            id: "478"
        }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody

        })
            .then((response) => {
                expect(response.status).to.eq(201)
                // Assert specific properties of the response body
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.id).to.eq('478')
            })
    })

    it('POST Call - Using fixture', () => {
        cy.fixture('login').then((data) => {
            const requestBody = data;

            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: requestBody
            })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    // Ensure that the response token matches the expected token from the fixture.
                    expect(response.body.token).to.eq(requestBody.expectedToken)
                });
        });
    });

    it('PUT Call', () => {

        cy.request({

            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('morpheus')
                expect(response.body.job).to.eq('zion resident')
            })
    })

    it('DELETE Call', () => {

        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        })
            .then((response) => {
                expect(response.status).to.eq(204)

            });
    })


})
