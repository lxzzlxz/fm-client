import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerService, SERVER_API_BASE_URL, SERVER_FILE_BASE_URL } from './server.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServiceModule {
  static forRoot(baseUrl: string): ModuleWithProviders<ServiceModule>;
  // tslint:disable-next-line: unified-signatures
  static forRoot(apiBaseUrl: string, fileBaseUrl: string): ModuleWithProviders<ServiceModule>;
  static forRoot(arg1: string, arg2?: string): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: [
        { provide: SERVER_API_BASE_URL, useValue: arg2 !== undefined ? arg1 : arg1.endsWith('/') ? `${arg1}api` : `${arg1}/api` },
        { provide: SERVER_FILE_BASE_URL, useValue: arg2 !== undefined ? arg2 : arg1.endsWith('/') ? `${arg1}files` : `${arg1}/files` },
        ServerService
      ]
    };
  }
}
