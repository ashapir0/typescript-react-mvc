import { HomeState } from "./HomeState";

export class StateRegistry {

  public readonly homeState: HomeState;

  constructor() {
    this.homeState = new HomeState();
  }

}