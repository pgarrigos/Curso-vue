describe('Main.ts', () => {
  test('should return proper env values', () => {
    expect(import.meta.env.VITE_TESLo_API_URL).toBe('https://localhost:3000/api');
  });
});
