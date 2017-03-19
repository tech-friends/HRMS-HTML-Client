import { HRMSHTMLClientPage } from './app.po';

describe('hrms-html-client App', () => {
  let page: HRMSHTMLClientPage;

  beforeEach(() => {
    page = new HRMSHTMLClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
