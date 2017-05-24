import { ZipCoder0.3Page } from './app.po';

describe('zip-coder0.3 App', () => {
  let page: ZipCoder0.3Page;

  beforeEach(() => {
    page = new ZipCoder0.3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
