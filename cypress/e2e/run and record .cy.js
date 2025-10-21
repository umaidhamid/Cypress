describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('#center [name="search_query"]').click();
    cy.get('#center [name="search_query"]').type('hindi movue');
    cy.get('#center button.ytSearchboxComponentSearchButton').click();
    cy.get('#inline-preview-player video.video-stream').click();
    cy.get('#movie_player div.ytp-progress-bar').click();
    
  })
})