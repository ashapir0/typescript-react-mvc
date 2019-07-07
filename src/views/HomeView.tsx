import React from "react";

import { inject, observer } from "mobx-react";
import { Grid, List, CircularProgress, Button, ButtonGroup } from "@material-ui/core";

import { HomeViewProps } from "../definitions/props/ViewProps";
import { HomeStoryListItem } from "../components/lists/HomeStoryListItem";

@inject("viewDependencies")
@observer
export class HomeView extends React.Component<HomeViewProps> {

  public async componentDidMount(): Promise<void> {
    const { homeController } = this.props.viewDependencies.controllerRegistry;
    await homeController.fetchStories(this.props.match.params.pageNumber || 0);
  }

  private getLoader(): React.ReactNode {
    return (
      <CircularProgress/>
    )
  }

  render(): React.ReactNode {
    const { homeState } = this.props.viewDependencies.stateRegistry;

    if (homeState.loading) return this.getLoader();

    const listItems = homeState.storyItems.map((story, index) => <HomeStoryListItem story={story} index={index}/>);

    return (
      <Grid container style={{paddingLeft: 50, paddingRight: 50}} justify="center">
        <Grid item xs={12} xl={10} spacing={3}>
          <List style={{marginTop: 20, marginBottom: 20}}>
            { listItems }
          </List>
        </Grid>
        <Grid item>
            <ButtonGroup color="primary">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
      </Grid>
    )
  }

}