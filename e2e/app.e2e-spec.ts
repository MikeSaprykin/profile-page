import { MikeAngularProfilePage } from './app.po';

describe('mike-angular-profile App', () => {
  let page: MikeAngularProfilePage;

  beforeEach(() => {
    page = new MikeAngularProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
