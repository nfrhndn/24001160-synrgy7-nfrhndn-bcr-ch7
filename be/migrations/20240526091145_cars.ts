import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
    table.string('name', 255).notNullable();
    table.bigInteger('price').notNullable();
    table.string('category').notNullable();
    table.text('image');
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.boolean('availability').notNullable().defaultTo(true);
    table.timestamp('createdAt').notNullable();
    table.timestamp('updatedAt').notNullable();
    table.string('createdBy').notNullable();
    table.string('updatedBy').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cars');
}
