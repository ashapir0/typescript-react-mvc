import { ApplicationConfiguration } from "../../definitions/config/ApplicationConfiguration";

export class Service {

  protected appConfig: ApplicationConfiguration;

  constructor(appConfig: ApplicationConfiguration) {
    this.appConfig = appConfig;
  }

}
