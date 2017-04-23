import { Configuration } from "./Configuration/Configuration";
import { IConfiguration } from "./Configuration/IConfiguration";
import { ETFRecommender } from "./ETFRecommender";
import { ExchangeTradedFundRepository } from "./Repositories/ExchangeTradedFundRepository";

let recommender = new ETFRecommender(Configuration.Instance, new ExchangeTradedFundRepository());

recommender.CaclulateRecommendations();