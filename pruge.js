import { PurgeCSS } from 'purgecss';
import CleanCSS from 'clean-css';
import fs from 'node:fs';

const purgeCSSResult = await new PurgeCSS().purge({
  content: ['projects/**/*.html', 'projects/**/*.js'],
  css: ['projects/**/*.css'],
});

purgeCSSResult.forEach((res) => {
  console.log('Status for: ', res.file, res.rejected, res.rejectedCss);

  try {
    const minifiedCss = new CleanCSS().minify(res.css);
    fs.writeFileSync(res.file, minifiedCss.styles, { encoding: 'utf-8' });
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
  }
});
