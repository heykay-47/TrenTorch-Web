import { describe, expect, it } from 'vitest';
import { normalizePage } from './pagination';

describe('normalizePage', () => {
	it.each([
		['missing page', null, 5, 1],
		['nonnumeric page', 'abc', 5, 1],
		['fractional page', '2.5', 5, 1],
		['negative page', '-1', 5, 1],
		['zero page', '0', 5, 1],
		['empty page', '', 5, 1],
		['lower bound', '1', 5, 1],
		['in-range page', '3', 5, 3],
		['upper bound', '5', 5, 5],
		['excessive page', '6', 5, 5],
		['leading zeroes', '03', 5, 3]
	])('returns the effective page for a %s', (_description, rawPage, totalPages, expected) => {
		expect(normalizePage(rawPage, totalPages)).toBe(expected);
	});
});
