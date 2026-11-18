import { slugify } from './slugify';

describe('slugify', () => {
  it('lowercases and hyphenates spaces', () => {
    expect(slugify('Managed IT Services')).toBe('managed-it-services');
  });

  it('collapses multiple spaces and hyphens', () => {
    expect(slugify('Cloud   &  Security  Services')).toBe('cloud-security-services');
  });

  it('strips leading and trailing whitespace', () => {
    expect(slugify('  Network Support  ')).toBe('network-support');
  });

  it('removes special characters', () => {
    expect(slugify('24/7 Help Desk!')).toBe('247-help-desk');
  });

  it('returns an empty string for only special characters', () => {
    expect(slugify('***')).toBe('');
  });
});
