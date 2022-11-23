import {Entity, model, property} from '@loopback/repository';

@model()
export class Cities extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  zip_code?: number;

  @property({
    type: 'number',
  })
  latitude?: number;

  @property({
    type: 'number',
  })
  longitude?: number;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  county?: string;


  constructor(data?: Partial<Cities>) {
    super(data);
  }
}

export interface CitiesRelations {
  // describe navigational properties here
}

export type CitiesWithRelations = Cities & CitiesRelations;
