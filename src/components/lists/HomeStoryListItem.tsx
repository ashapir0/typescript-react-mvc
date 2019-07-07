import React from "react";
import { HNItem } from "../../definitions/entities/HNItem";
import { ListItem, ListItemText } from "@material-ui/core";

interface HomeStoryListItemProps {
  story: HNItem
}

export class HomeStoryListItem extends React.Component<HomeStoryListItemProps> {

  render(): React.ReactNode {
    const { story } = this.props;
    return (
      <ListItem key={story.id}>
        <ListItemText primary={story.title}/>
      </ListItem>
    )
  }

}