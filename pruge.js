import { PurgeCSS } from 'purgecss';

const purgeCSSResult = await new PurgeCSS().purge({
  content: ['projects/**/*.html', 'projects/**/*.js'],
  css: ['projects/**/*.css'],
});

purgeCSSResult.forEach((res) =>
  console.log('Status for: ', res.file, res.rejected, res.rejectedCss)
);
