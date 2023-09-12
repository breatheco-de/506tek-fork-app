/* eslint-disable no-param-reassign */
import fs from 'fs';
import { getAsset, getEvents, getLandingTechnologies } from '../src/utils/requests';

async function getData() {
  console.log('fetching recyclable data for sitemap and redirects...');

  console.time('Time fetching data');

  const landingTechnologies = await getLandingTechnologies();
  const lessons = await getAsset('LESSON,ARTICLE', { exclude_category: 'how-to,como' });
  const excersises = await getAsset('EXERCISE');
  const projects = await getAsset('PROJECT', {}, 'project');
  const howTos = await getAsset('LESSON,ARTICLE', {}, 'how-to');
  const events = await getEvents();

  console.timeEnd('Time fetching data');

  const data = {
    landingTechnologies,
    lessons,
    excersises,
    projects,
    howTos,
    events,
  };
  console.log('Next data has been fetched:\n', {
    landingTechnologies: landingTechnologies.length,
    lessons: lessons.length,
    excersises: excersises.length,
    projects: projects.length,
    howTos: howTos.length,
  });

  // This file is disposable and will disappear at the end of the build process.
  fs.writeFileSync('src/lib/asset-list.json', JSON.stringify(data));

  return data;
}
getData();
