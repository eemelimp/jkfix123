const baseUrl = process.env.BASE_URL;

export default async function sitemap() {
  return [{ url: `${baseUrl}`, lastModified: new Date() }];
}
