import { Bb2Page } from './app.po';

describe('bb2 App', () => {
  let page: Bb2Page;

  beforeEach(() => {
    page = new Bb2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
