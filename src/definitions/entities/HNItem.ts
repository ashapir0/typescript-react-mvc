export enum HNItemType {
  COMMENT = "comment",
  STORY = "story",
  JOB = "job",
  POLL = "poll",
  POLLOPT = "pollopt"
}

export interface HNItem {
  by: string,
  descendants?: number,
  id: number,
  kids: Array<number>,
  parent?: number,
  score?: number,
  time: number,
  title: string,
  text: string,
  type: HNItemType
}