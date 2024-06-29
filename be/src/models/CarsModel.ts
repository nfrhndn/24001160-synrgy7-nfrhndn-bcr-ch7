import { Model, ModelObject } from 'objection';

export class CarsModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  category!: string;
  image!: Text;
  start_date!: string;
  end_date!: string;
  availability!: boolean;
  createdAt!: Date | string;
  updatedAt!: Date | string;

  static get tableName() {
    return 'cars';
  }
}

export type Cars = ModelObject<CarsModel>;
