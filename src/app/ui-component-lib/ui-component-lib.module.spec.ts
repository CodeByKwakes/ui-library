import { UiComponentLibModule } from './ui-component-lib.module';

describe('UiComponentLibModule', () => {
  let uiComponentLibModule: UiComponentLibModule;

  beforeEach(() => {
    uiComponentLibModule = new UiComponentLibModule();
  });

  it('should create an instance', () => {
    expect(uiComponentLibModule).toBeTruthy();
  });
});
