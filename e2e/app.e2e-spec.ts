import { EducationSystemPage } from './app.po';

describe('education-system App', function() {
  let page: EducationSystemPage;

  beforeEach(() => {
    page = new EducationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
