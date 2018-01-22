import { TestBed, inject } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesService]
    });
  });

  it('should be created', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
