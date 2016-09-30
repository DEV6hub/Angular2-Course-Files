import {browser, by, element} from "protractor";
describe('Testing Demo', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a browser title', () => {
    expect(browser.getTitle()).toEqual('Testing Demo');
  });

  it('should have a page header', () => {
    expect(element(by.css('h1')).isPresent()).toBe(true);
    expect(element(by.css('h1')).getText()).toBe('Testing');
  });
});
