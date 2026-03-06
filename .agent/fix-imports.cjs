const fs = require('fs');
const files = [
  'src/content/docs/ms/introduction.mdx',
  'src/content/docs/ja/introduction.mdx',
  'src/content/docs/zh/introduction.mdx',
  'src/content/docs/hi/introduction.mdx',
  'src/content/docs/ko/introduction.mdx',
  'src/content/docs/id/introduction.mdx',
  'src/content/docs/th/introduction.mdx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import CodeTabs')) {
    const parts = content.split('---');
    if (parts.length >= 3) {
      const fixed = parts[0] + '---' + parts[1] + '---\nimport CodeTabs from \'../../../components/docs/CodeTabs.astro\';\n\n' + parts.slice(2).join('---');
      fs.writeFileSync(file, fixed);
      console.log('Fixed:', file);
    }
  }
});
