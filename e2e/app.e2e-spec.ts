import { PracticaPage } from './app.po';

describe('practica App', () => {
  let page: PracticaPage;

  beforeEach(() => {
    page = new PracticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
