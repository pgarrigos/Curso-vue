vi.mock('@/router', () => ({
  default: 'router',
}));

vi.mock('pinia', async (importOriginal) => {
  const mod = (await importOriginal()) as { [key: string]: unknown };

  return {
    mod,
    createPinia: vi.fn().mockReturnValue('pinia'),
  };
});

describe('Main.ts', () => {
  const vue = require('vue');

  const useSpy = vi.fn();
  const mountSpy = vi.fn();

  const createApp = vi.fn().mockReturnValue({
    use: useSpy,
    mount: mountSpy,
  });

  vue.createApp = createApp;

  test('should be configured with pinia and router', async () => {
    await import('../src/main');

    expect(vue.createApp).toHaveBeenCalled();
    expect(mountSpy).toHaveBeenCalledWith('#app');

    console.log(useSpy.mock.calls);
    expect(useSpy).toHaveBeenCalledWith('router');
    expect(useSpy).toHaveBeenCalledWith('pinia');
  });
});
