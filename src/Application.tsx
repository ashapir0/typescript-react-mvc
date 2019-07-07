import React from "react";

import { Provider } from "mobx-react";
import { HashRouter, Route } from "react-router-dom";

import { HomeView } from "./views/HomeView";
import { ViewDependencies } from "./definitions/dependencies/ViewDependencies";
import { StateRegistry } from "./states/StateRegistry";
import { ServiceRegistry } from "./services/ServiceRegistry";
import { ControllerRegistry } from "./controllers/ControllerRegistry";
import { DevelopmentConfiguration } from "./definitions/config/DevelopmentConfiguration";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export class Application extends React.Component {

  private viewDependencies: ViewDependencies;

  constructor(props: any) {
    super(props);
    
    /* This can be environment-based w/ webpack */
    const appConfig = DevelopmentConfiguration;

    const stateRegistry = new StateRegistry();
    const serviceRegistry = new ServiceRegistry(appConfig);
    const controllerRegistry = new ControllerRegistry(appConfig, stateRegistry, serviceRegistry);

    this.viewDependencies = {
      stateRegistry: stateRegistry,
      controllerRegistry: controllerRegistry
    }
  }

  render(): React.ReactNode {
    return (
      <Provider viewDependencies={this.viewDependencies}>
        <HashRouter>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">Hacker News</Typography>
            </Toolbar>
          </AppBar>
          <Route exact path="/:pageNumber?" component={HomeView}/>
        </HashRouter>
      </Provider>
    )
  }

}