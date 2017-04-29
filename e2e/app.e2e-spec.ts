import { ProjectWebappAngularPage } from './app.po';

describe('project-webapp-angular App', () => {
  let page: ProjectWebappAngularPage;

  beforeEach(() => {
    page = new ProjectWebappAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
