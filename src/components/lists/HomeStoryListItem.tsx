import React from "react";
import { HNItem } from "../../definitions/entities/HNItem";
import { ListItem, ListItemText, Typography } from "@material-ui/core";

interface HomeStoryListItemProps {
  index: number;
  story: HNItem;
}

export class HomeStoryListItem extends React.Component<HomeStoryListItemProps> {
  
  render(): React.ReactNode {
    const { story, index } = this.props;
    return (
      <ListItem key={index} style={{backgroundColor: "#FCFCFC", borderLeft: "2px solid #E6E6E6", marginBottom: 10, borderBottomRightRadius: 3, borderTopLeftRadius: 3}}>
        <ListItemText primary={`${index+1}.\t${story.title}`}
        secondary={
          <React.Fragment>
          <Typography component="span" variant="body2" color="primary" style={{paddingRight: 20}}>
          {story.by}
          </Typography>
          {story.text}
          </React.Fragment>
        }/>
      </ListItem>
      )
    }
    
  }