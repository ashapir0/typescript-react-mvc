import { HackerNewsService } from "./HackerNewsService";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";

export class ServiceRegistry {

  public readonly hackerNewsService: HackerNewsService;

  constructor(appConfig: ApplicationConfiguration) {
    this.hackerNewsService = new HackerNewsService(appConfig);
  }

}