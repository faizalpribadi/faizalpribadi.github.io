// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://faizalpribadi.github.io',
  base: '/',
  build: {
    format: 'file'
  },
  seo: {
    siteName: 'Faizal Pribadi - Senior Software Engineer',
    titleSeparator: ' | ',
    defaultTitle: 'Faizal Pribadi - Senior Software Engineer',
    defaultDescription: 'Senior Software Engineer with 9+ years building high-scale distributed systems. Expert in Go, Kubernetes, AWS, Kafka, microservices architecture.',
    defaultImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    twitterSite: '@faizalpribadi',
    twitterCreator: '@faizalpribadi'
  }
});