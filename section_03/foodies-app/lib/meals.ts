import sql from 'better-sqlite3';
import { Meal, MealToSubmit } from '@/types';

import slugify from 'slugify';
import xss from 'xss';

import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
  console.log("Fetching meals...");
  await new Promise(resolve => setTimeout(resolve, 2000));

  // throw new Error('Something went wrong');
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function saveMeal(meal: MealToSubmit) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}_${Date.now()}.${extension}`;
  const bufferedImage = meal.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  stream.write(Buffer.from(await bufferedImage), (error) => {
    if (error) {
      throw new Error('Image writing failed: ' + error.message);
    }
  });

  const imagePath = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals (
      title, slug, image, summary, instructions, creator, creator_email
    ) VALUES (
      @title, @slug, @image, @summary, @instructions, @creator, @creator_email      
    )
  `).run({
    ...meal,
    slug,
    image: imagePath
  })
}