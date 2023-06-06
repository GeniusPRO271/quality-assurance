const Trap = require('../components/trap');

// Problem Description

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

describe('Trapping Rain Water', () => {
  test('returns 0 for an empty array', () => {
    const height = [];
    expect(Trap(height)).toBe(0);
  });

  test('returns 0 when all elements are the same', () => {
    const height = [5, 5, 5, 5, 5];
    expect(Trap(height)).toBe(0);
  });

  test('returns 0 for an array with only one element', () => {
    const height = [2];
    expect(Trap(height)).toBe(0);
  });

  test('returns 0 for an array with all zeros', () => {
    const height = [0, 0, 0, 0, 0];
    expect(Trap(height)).toBe(0);
  });

  test('calculates trapped water for an array with one increasing and one decreasing sequence', () => {
    const height = [0, 1, 2, 3, 2, 1];
    expect(Trap(height)).toBe(0);
  });

  test('an array with alternating heights', () => {
    const height = [2, 1, 2, 1, 2, 1];
    expect(Trap(height)).toBe(2);
  });

  test('handles a large array', () => {
    const height = Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    );
    expect(Trap(height)).toBeDefined();
  });

  test('calculates trapped water for an array with a trap', () => {
    const height = [5, 4, 3, 2, 1, 2, 3, 4, 5];
    expect(Trap(height)).toBe(16);
  });
});
