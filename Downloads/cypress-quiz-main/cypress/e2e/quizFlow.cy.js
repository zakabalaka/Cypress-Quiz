/// <reference types="cypress" />

describe('Quiz Application E2E Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'mockData.json' }).as('getQuestions');
        cy.visit('/');
    });

    it('should start the quiz and display the first question', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');
        cy.get('[data-cy="question"]')
            .should('be.visible')
            .and('contain.text', 'What is the output of print(2 ** 3)?'); // matches mockData.json[0]
    });

    it('should answer all questions and show score screen', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');

        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy="answer-button"]').random().click();
        }

        cy.get('[data-cy="score-display"]').should('be.visible');
    });

    it('should allow restarting the quiz', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');

        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy="answer-button"]').random().click();
        }

        cy.get('[data-cy="restart-quiz"]').click();
        cy.wait('@getQuestions');

        cy.get('[data-cy="question"]')
            .should('be.visible')
            .and('contain.text', 'What is the output of print(2 ** 3)?');
    });

});
