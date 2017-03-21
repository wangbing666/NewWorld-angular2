import { NewWorldPage } from './app.po';

describe('new-world App', function() {
  let page: NewWorldPage;

  beforeEach(() => {
    page = new NewWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
