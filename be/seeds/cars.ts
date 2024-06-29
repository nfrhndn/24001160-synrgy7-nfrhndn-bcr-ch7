import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('cars').del();

  // Inserts seed entries
  await knex('cars').insert([
    {
      id: '1',
      user_id: 555,
      name: 'Mercedes Benz AMG GT',
      price: '24000000',
      category: 'small',
      image: 'https://res.cloudinary.com/dnw1qkqei/image/upload/v1716712774/challenge-5-bcr/Mercedes_Benz_AMG_GT_fkjvtw.jpg',
      start_date: '2024/03/16',
      end_date: '2024/03/20',
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: 'admin',
      updatedBy: 'admin',
    },
    {
      id: '2',
      user_id: 444,
      name: 'Jeep Wrangler Red',
      price: '5000000',
      category: 'medium',
      image: 'https://res.cloudinary.com/dnw1qkqei/image/upload/v1716715312/challenge-5-bcr/Jeep_Wrangler_Red_es8atz.jpg',
      start_date: '2024/02/14',
      end_date: '2024/02/14',
      availability: false,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: 'superadmin',
      updatedBy: 'superadmin',
    },
    {
      id: '3',
      user_id: 555,
      name: 'BMW i5',
      price: '6000000',
      category: 'small',
      image: 'https://res.cloudinary.com/dnw1qkqei/image/upload/v1716712772/challenge-5-bcr/BMW_i5_trooep.jpg',
      start_date: '2024/05/10',
      end_date: '2024/05/10',
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy: 'admin',
      updatedBy: 'admin',
    },
  ]);
}
