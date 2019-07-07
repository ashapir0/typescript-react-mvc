import { action, observable } from "mobx";

import { HNItem } from "../definitions/entities/HNItem";

export class HomeState {

  @observable
  public storyIdentifiers: Array<number>;

  @observable
  public storyItems: Array<HNItem>;

  @observable
  public loading: boolean;

  constructor() {
    this.storyIdentifiers = [];
    this.storyItems = [];
    this.loading = false;
  }

  @action
  public updateStoryIdentifiers(storyIdentifiers: Array<number>): void {
    this.storyIdentifiers = storyIdentifiers;
  }

  @action
  public updateStoryItems(storyItems: Array<HNItem>): void {
    this.storyItems = storyItems;
  }

  @action
  public updateLoading(loading: boolean): void {
    this.loading = loading;
  }

}