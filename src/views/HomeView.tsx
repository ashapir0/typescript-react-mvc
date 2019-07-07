import React from "react";
import { inject, observer } from "mobx-react";
import { Container, List } from "@material-ui/core";

import { HomeViewProps } from "../definitions/props/ViewProps";
import { HomeStoryListItem } from "../components/lists/HomeStoryListItem";

@inject("viewDependencies")
@observer
export class HomeView extends React.Component<HomeViewProps> {

  public async componentDidMount(): Promise<void> {
    const { homeController } = this.props.viewDependencies.controllerRegistry;
    await homeController.fetchStories(this.props.match.params.pageNumber || 0);
  }

  render(): React.ReactNode {
    const { homeState } = this.props.viewDependencies.stateRegistry;
    const listItems = homeState.storyItems.map(story => <HomeStoryListItem story={story}/>);
    return (
      <Container maxWidth="md">
        <List>
          { listItems }
        </List>
      </Container>
    )
  }

}