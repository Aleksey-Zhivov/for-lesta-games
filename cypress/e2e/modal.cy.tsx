describe('Тест модального окна', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Модальное окно должно открываться по клику на карточку и закрываться по клику на крестик', () => {
        // Нажимаем на карточку корабля
        cy.get('.ship').contains('I-56').click();

        // Проверяем, что модалка открылась и содержит нужные данные
        cy.get('.ship-modal').should('be.visible');
        cy.get('.ship-modal__characteristic-block').within(() => {
            cy.get('h3').contains('I-56');
        });

        cy.get('.modal__close').click();

        // Проверяем, что модалка закрылась
        cy.get('.ship-modal').should('not.exist');
    });

    it('Модальное окно должно открываться по клику на карточку и закрываться по клику на overlay или кнопку Esc', () => {
        // Открываем первую модалку
        cy.get('.ship').contains('I-54').click();

        // Проверяем, что первая модалка открыта и отображает корректные данные
        cy.get('.ship-modal').should('be.visible');
        cy.get('.ship-modal__characteristic-block').within(() => {
            cy.get('h3').contains('I-54');
        })

        // Закрываем первую модалку
        cy.get('.modal__overlay').click('topLeft', {force: true});
        cy.get('.ship-modal').should('not.exist');  

        // Открываем вторую модалку
        cy.get('.ship').contains('Umikaze').click();

        // Проверяем, что вторая модалка открыта и отображает корректные данные
        cy.get('.ship-modal').should('be.visible');
        cy.get('.ship-modal__characteristic-block').within(() => {
            cy.get('h3').contains('Umikaze');
        });

        // Закрываем вторую модалку
        cy.get('body').type('{esc}');

        // Проверяем, что модалка закрылась
        cy.get('.ship-modal').should('not.exist');
    });
});
