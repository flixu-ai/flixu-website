// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  base: '/docs',
  integrations: [
    starlight({
      title: 'Flixu Docs',
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        PageTitle: './src/components/PageTitle.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/flixuai' },
        { icon: 'external', label: 'Website', href: 'https://flixu.ai' },
      ],
      sidebar: [
        {
          label: 'Developer Guide',
          items: [
            {
              label: 'Getting Started',
              items: [
                { label: 'Introduction', slug: 'developer-guide/introduction' },
                { label: 'Quickstart', slug: 'developer-guide/quickstart' },
                { label: 'Authentication', slug: 'developer-guide/authentication' },
              ],
            },
            {
              label: 'Core Concepts',
              items: [
                { label: 'Credits', slug: 'developer-guide/concepts/credits' },
                { label: 'Languages', slug: 'developer-guide/concepts/languages' },
                { label: 'Formats', slug: 'developer-guide/concepts/formats' },
                { label: 'Rate Limits', slug: 'developer-guide/concepts/rate-limits' },
                { label: 'Error Codes', slug: 'developer-guide/concepts/error-codes' },
              ],
            },
            {
              label: 'Agent Skills',
              items: [
                { label: 'Overview', slug: 'developer-guide/agent-skills/overview' },
                { label: 'Getting Started', slug: 'developer-guide/agent-skills/getting-started' },
              ],
            },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Overview', slug: 'api-reference/overview' },
            {
              label: 'Translation',
              items: [
                { label: 'Translate Text', slug: 'api-reference/translate-text' },
                { label: 'Translate Batch', slug: 'api-reference/translate-batch' },
                { label: 'Translate Document', slug: 'api-reference/translate-document' },
                { label: 'Job Status', slug: 'api-reference/job-status' },
                { label: 'Analyze Text', slug: 'api-reference/analyze-text' },
              ],
            },
            {
              label: 'Reference Data',
              items: [
                { label: 'Languages', slug: 'api-reference/languages' },
                { label: 'Formats', slug: 'api-reference/formats' },
              ],
            },
            {
              label: 'Usage & Billing',
              items: [
                { label: 'Quota', slug: 'api-reference/quota' },
                { label: 'Usage', slug: 'api-reference/usage' },
              ],
            },
            {
              label: 'Account',
              items: [
                { label: 'Me', slug: 'api-reference/me' },
              ],
            },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Overview', slug: 'resources/overview' },
            { label: 'Glossary', slug: 'resources/glossary' },
            { label: 'Use Cases', slug: 'resources/use-cases' },
          ],
        },
        {
          label: 'Release Notes',
          items: [
            { label: 'Overview', slug: 'release-notes/overview' },
          ],
        },
      ],
    }),
  ],
});
