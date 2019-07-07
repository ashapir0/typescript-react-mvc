import { StateRegistry } from "../states/StateRegistry";
import { ServiceRegistry } from "../services/ServiceRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";

import { HomeController } from "./HomeController";

export class ControllerRegistry {

  public readonly homeController: HomeController;

  constructor(appConfig: ApplicationConfiguration, stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry) {
    this.homeController = new HomeController(appConfig, stateRegistry, serviceRegistry);
  }

}