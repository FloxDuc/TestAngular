import { GasCardPage } from './app.po';

describe('gas-card App', () => {
  let page: GasCardPage;

  beforeEach(() => {
    page = new GasCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
