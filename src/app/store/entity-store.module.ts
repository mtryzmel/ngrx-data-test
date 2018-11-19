import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { NgModule } from '@angular/core';
import { pluralNames, entityMetadata } from './entity-metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com',
  timeout: 3000
};

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    })
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class EntityStoreModule {}
