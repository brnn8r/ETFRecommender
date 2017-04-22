import { ETFRecommender } from "./ETFRecommender";
import { IConfiguration } from "./IConfiguration";

let recommender = new ETFRecommender(LoadConfiguration());

recommender.Start();

function LoadConfiguration(): IConfiguration {
    return {  tolerance: 0.05, exchangeTradedFunds: ["ASP"] };
}
