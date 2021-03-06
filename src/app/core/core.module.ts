//(16) Es el módulo de la aplicación con servicios que requieren un solo inicio.

import { NgModule, Optional, SkipSelf } from "@angular/core";
import { fakeBackendProvider } from "./helper/fake-backend";
import { StorageService } from "./services/storage.service";
import { AuthorizatedGuard } from "./guards/authorizated.guard";

/*import { MockBackend } from "@angular/http/testing";
import { BaseRequestOptions } from "@angular/http";*/

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    StorageService,
    AuthorizatedGuard,
    fakeBackendProvider /*,
    MockBackend,
    BaseRequestOptions*/
  ],
  bootstrap: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
