import { functionOptimizeImages } from 'images-folder-optimizer';

functionOptimizeImages({
  stringOriginFolder: './',
  stringDestinationFolder: './optimized',
  arrayOriginFormats: ['jpg', 'png', 'svg'],
  arrayDestinationFormats: ['webp', 'avif'],
}).then((results) => {
  console.table(results);
});
