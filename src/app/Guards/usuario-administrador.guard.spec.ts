import { TestBed } from '@angular/core/testing';

import { UsuarioAdministradorGuard } from './usuario-administrador.guard';

describe('UsuarioAdministradorGuard', () => {
  let guard: UsuarioAdministradorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioAdministradorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
