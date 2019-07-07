import { RouteComponentProps } from "react-router";

import { ViewDependencies } from "../dependencies/ViewDependencies";
import { number } from "prop-types";

interface ViewProps<T> extends RouteComponentProps<T> {
  viewDependencies: ViewDependencies
}

export interface ViewPropsGeneric extends ViewProps<{}> {}

interface HomeProps {
  pageNumber?: number
}

export interface HomeViewProps extends ViewProps<HomeProps> {}