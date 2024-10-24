import { faker } from "@faker-js/faker";

const createAddress = () => ({
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
});

const genderOptions = ['male', 'female']; // Define valid options

// Define possible statuses
const statuses = ['active', 'inactive'];

export const generateUserData = () => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    //address: createAddress(),
    gender: faker.helpers.arrayElement(genderOptions), // Corrected method
    status: faker.helpers.arrayElement(statuses), // Randomly pick a status from the array
    //mobileNumber: faker.phone.number(),
    // Add other fields as needed
});

export const generateUpdatedUserData = () => generateUserData(); // Reuse the function for updated data

