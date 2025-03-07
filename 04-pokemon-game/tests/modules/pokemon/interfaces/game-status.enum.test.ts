import { GameStatus } from '@pokemon/interfaces';
import { describe, test, expect } from 'vitest';

describe('GameStatus enum', () => {
  test('should have a value of "playing"', () => {
    expect(GameStatus.Playing).toBe('playing');
  });
  test('should have a value of "won"', () => {
    expect(GameStatus.Won).toBe('won');
  });
  test('should have a value of "lost"', () => {
    expect(GameStatus.Lost).toBe('lost');
  });
});
