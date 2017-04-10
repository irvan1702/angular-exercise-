import { FinaltestPage } from './app.po';

describe('finaltest App', () => {
  let page: FinaltestPage;

  beforeEach(() => {
    page = new FinaltestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
