import axios from "axios";

import { Service } from "./base/Service";
import { HNItem } from "../definitions/entities/HNItem";

const API_URL = "https://hacker-news.firebaseio.com/v0";

export class HackerNewsService extends Service {

  public async fetchBestStories(): Promise<Array<number>> {
    const result = await axios.get(`${API_URL}/topstories.json`);
    return result.data;
  }

  public async fetchItem(id: number): Promise<HNItem> {
    const result = await axios.get(`${API_URL}/item/${id}.json`);
    return result.data;
  }

}
