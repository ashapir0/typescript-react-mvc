import { Controller } from "./base/Controller";
import { HNItem } from "../definitions/entities/HNItem";

export class HomeController extends Controller {

  private async fetchStoryItems(storyIdentifiers: Array<number>): Promise<Array<HNItem>> {
    const { hackerNewsService } = this.serviceRegistry;

    const storyPromises = Array<Promise<HNItem>>();

    for (let i = 0; i < storyIdentifiers.length; i++) {
      storyPromises.push(hackerNewsService.fetchItem(storyIdentifiers[i]));
    }

    return Promise.all(storyPromises);
  }

  private getPagedStoryIdentifiers(storyIdentifiers: Array<number>, pageNumber: number): Array<number> {
    const { storiesPerPage } = this.appConfig.home;
    const lowerIdx = pageNumber * storiesPerPage;
    const upperIdx = (pageNumber + 1) * storiesPerPage;
    return storyIdentifiers.slice(lowerIdx, upperIdx);
  }

  public async fetchStories(pageNumber: number): Promise<void> {
    const { homeState } = this.stateRegistry;
    const { hackerNewsService } = this.serviceRegistry;


    try {
      /* Set loading marker*/
      homeState.updateLoading(true);

      const storyIdentifiers = await hackerNewsService.fetchBestStories();
      homeState.updateStoryIdentifiers(storyIdentifiers);
      
      /* Get paged story identifiers e.g. (page 2: [25...50]) */
      const pagedStoryIdentifiers = this.getPagedStoryIdentifiers(storyIdentifiers, pageNumber);

      const storyItems = await this.fetchStoryItems(pagedStoryIdentifiers);
      homeState.updateStoryItems(storyItems);
    }
    catch (error) {

    }
    finally {
      homeState.updateLoading(false);
    }
  }

}