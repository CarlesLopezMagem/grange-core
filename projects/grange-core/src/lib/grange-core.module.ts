import { NgModule, ModuleWithProviders } from '@angular/core';
import { APIService } from "./api.service";
import { AuthenticationService } from "./authentication.service";
import { CacheService } from "./cache.service";
import { ConfigurationService } from "./configuration.service";
import { LoadingService } from "./loading.service";
import { ResourceService } from "./resource.service";
import { GrangeCore } from "./core.service";

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class GrangeCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GrangeCoreModule,
      providers: [
        ConfigurationService,
        APIService,
        AuthenticationService,
        CacheService,
        LoadingService,
        ResourceService,
        GrangeCore,
      ]
    };
  }
}
