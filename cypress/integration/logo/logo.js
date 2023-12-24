import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

Given('I\'m on the {string} page', (page) => {
    if (page === 'minimum') {
        LearningPage.visitMinimum();
    } else if (page === 'maximum') {
        LearningPage.visitMaximum();
    } else if (page === 'other') {
        LearningPage.visitOther();
    }
});

Given('I\'m on a standard-learning-page with a customer logo', () => {
    LearningPage.visit('43a6f336704d321d');
});

Then('I see the sosafe-headder logo', () => {
    cy
        .get('#SoSafeHeaderIcon')
        .should('be.visible');
});

Then('the sosafe-headder logo is placed on the left side', () => {
    cy
        .get('#SoSafeHeaderIcon')
        .leftOf('.Header-branded');
});

Then('I see the customer logo', () => {
    cy
        .get('.Header-brandedLogo')
        .should('be.visible')
        .and('have.css', 'background-image');
});

Then('the customer logo is placed on the right side', () => {
    cy
        .get('.Header-branded')
        .rightOf('#SoSafeHeaderIcon');
});

Then('the sosafe-headder logo is placed on the right side', () => {
    cy
        .get('#page > header')
        .find('.u-flexRowReverse')
        .should('have.css', 'flex-direction', 'row-reverse');
    cy
        .get('#SoSafeHeaderIcon')
        .rightOf('.Header-branded');
});

Then('the customer logo is placed on the left side', () => {
    cy
        .get('#page > header')
        .find('.u-flexRowReverse')
        .should('have.css', 'flex-direction', 'row-reverse');
    cy
        .get('.Header-branded')
        .leftOf('#SoSafeHeaderIcon');
});

Then('I don\'t see the sosafe-headder logo', () => {
    cy
        .get('#SoSafeHeaderIcon')
        .should('not.be.visible');
});

Then('I don\'t see the customer logo', () => {
    cy
        .get('.Header-brandedLogo')
        .should('not.be.visible');
});

