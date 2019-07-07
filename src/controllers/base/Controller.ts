import { StateRegistry } from "../../states/StateRegistry";
import { ServiceRegistry } from "../../services/ServiceRegistry";
import { ApplicationConfiguration } from "../../definitions/config/ApplicationConfiguration";

export class Controller {

  protected readonly appConfig: ApplicationConfiguration;
  protected readonly stateRegistry: StateRegistry;
  protected readonly serviceRegistry: ServiceRegistry;

  constructor(appConfig: ApplicationConfiguration, stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry) {
    this.appConfig = appConfig;
    this.stateRegistry = stateRegistry;
    this.serviceRegistry = serviceRegistry;
  }

}