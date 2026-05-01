import { tokens, type ThemeName } from '../data/site';

export function getThemeStyle(theme?: ThemeName): string | undefined {
  if (!theme) {
    return undefined;
  }

  const themeTokens = tokens.themes[theme];
  return Object.entries(themeTokens)
    .map(([key, value]) => `--${key}: ${value}`)
    .join('; ');
}
