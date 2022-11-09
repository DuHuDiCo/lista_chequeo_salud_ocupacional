import { TestBed } from '@angular/core/testing';

import { EmitirDatosService } from './emitir-datos.service';

describe('EmitirDatosService', () => {
  let service: EmitirDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitirDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
