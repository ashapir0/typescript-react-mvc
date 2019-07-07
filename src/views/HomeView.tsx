import React from "react";
import { inject, observer } from "mobx-react";

import { HomeViewProps } from "../definitions/props/ViewProps";

@inject("viewDependencies")
@observer
export class HomeView extends React.Component<HomeViewProps> {

  public async componentDidMount(): Promise<void> {
    const { homeController } = this.props.viewDependencies.controllerRegistry;
    await homeController.fetchStories(this.props.match.params.pageNumber || 0);
  }

  render(): React.ReactNode {
    const { homeState } = this.props.viewDependencies.stateRegistry;
    return (
      <div>{JSON.stringify(homeState.storyItems)}</div>
    )
  }

}