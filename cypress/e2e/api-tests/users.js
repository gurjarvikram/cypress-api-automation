import { createResource, getResource, updateResource, deleteResource } from '../../support/api-helpers.js';
import { generateUserData, generateUpdatedUserData } from '../../support/data-factory.js';

describe('User API Tests', () => {
    let userId;
    const userData = generateUserData();
    const updatedUserData = generateUpdatedUserData();


    it('should create a user with dynamic data', () => {
        createResource('users', userData).then((response) => {
            expect(response.status).to.eq(201);
            userId = response.body.id; // Store user ID
        })
    });

    it('should fetch user details', () => {
        getResource('users', userId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', userData.name);
            expect(response.body).to.have.property('email', userData.email);
            expect(response.body).to.have.property('gender', userData.gender);
            expect(response.body).to.have.property('status', userData.status);
        })
    });

    it('should update user details', () => {
        updateResource('users', userId, updatedUserData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', updatedUserData.name);
            expect(response.body).to.have.property('email', updatedUserData.email);
            expect(response.body).to.have.property('gender', updatedUserData.gender);
            expect(response.body).to.have.property('status', updatedUserData.status);
            
        })
    });

    it('should fetch updated user details', () => {
        getResource('users', userId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', updatedUserData.name);
            expect(response.body).to.have.property('email', updatedUserData.email);
            expect(response.body).to.have.property('gender', updatedUserData.gender);
            expect(response.body).to.have.property('status', updatedUserData.status);
        })
    });

    it('should delete the user', () => {
        deleteResource('users', userId).then((response) => {
            expect(response.status).to.eq(204);
        })
    });

});
