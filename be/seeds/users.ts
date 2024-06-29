import { Knex } from 'knex';
import { getByEmail } from '../src/repositories/userRepository';
import { encryptPassword } from '../middlewares/authPassword';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  const passwordsuperAdmin = await encryptPassword('superadmin1234');
  const passwordAdmin = await encryptPassword('admin1234');
  const passwordUser = await encryptPassword('user1234');

  // Inserts seed entries
  await knex('users').insert([
    { id: 444, name: 'superadmin', role: 'superadmin', email: 'superadmin@mail.com', password: passwordsuperAdmin },
    { id: 555, name: 'admin', role: 'admin', email: 'admin@mail.com', password: passwordAdmin },
    { id: 666, name: 'member', role: 'user', email: 'user@mail.com', password: passwordUser },
  ]);
}
