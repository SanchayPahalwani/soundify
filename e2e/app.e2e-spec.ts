import { SoundifyPage } from './app.po';

describe('soundify App', () => {
  let page: SoundifyPage;

  beforeEach(() => {
    page = new SoundifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
