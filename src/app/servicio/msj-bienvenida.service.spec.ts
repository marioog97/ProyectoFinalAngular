import { TestBed } from '@angular/core/testing';

import { MsjBienvenidaService } from './msj-bienvenida.service';

describe('MsjBienvenidaService', () => {
  let service: MsjBienvenidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsjBienvenidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
