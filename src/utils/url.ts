export function withBase(path: string) {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  if (path === '/') {
    return `${base || ''}/`;
  }

  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function absoluteUrl(site: URL | undefined, path: string) {
  if (!site) {
    return withBase(path);
  }

  return new URL(withBase(path), site).toString();
}
