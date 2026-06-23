const siteUrl = 'https://luc.works';

export const defaultOgImage = `${siteUrl}/og/default.png`;

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Luke',
  alternateName: ['luc.works'],
  jobTitle: ['Frontend Engineer', 'Product Builder', 'AI Workflow Developer'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN'
  },
  url: `${siteUrl}/`,
  email: 'hi@luc.works',
  sameAs: [],
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'AI Workflow Systems', 'Product UX', 'Design Systems', 'Frontend Architecture'],
  description: 'Luke, frontend engineer in Vietnam building AI workflow systems, product UX, and modern web experiences.'
};

export function profilePageSchema(url = `${siteUrl}/`) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name: 'Luke - Frontend Engineer in Vietnam',
    mainEntity: personSchema
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}
