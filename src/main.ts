import { Configuration } from "./Configuration";
import { ETFRecommender } from "./ETFRecommender";
import { IConfiguration } from "./IConfiguration";

let recommender = new ETFRecommender(Configuration.Instance);

recommender.Start();