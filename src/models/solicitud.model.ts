import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TipoSolicitud} from './tipo-solicitud.model';
import {EstadoSolicitud} from './estado-solicitud.model';
import {Modalidad} from './modalidad.model';
import {LineaInvestigacion} from './linea-investigacion.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  archivo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @belongsTo(() => TipoSolicitud, {name: 'tiene_un'})
  id_tipo_solicitud: number;

  @belongsTo(() => EstadoSolicitud, {name: 'posee_un'})
  id_estado_solicitud: number;

  @belongsTo(() => Modalidad, {name: 'pertenece_a'})
  id_modalidad: number;

  @belongsTo(() => LineaInvestigacion, {name: 'tiene_una'})
  id_linea_investigacion: number;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
