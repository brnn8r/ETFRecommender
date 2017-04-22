"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ETFRecommender_1 = require("./ETFRecommender");
var recommender = new ETFRecommender_1.ETFRecommender(LoadConfiguration());
recommender.Start();
function LoadConfiguration() {
    return { tolerance: 0.05, exchangeTradedFunds: ["ASP"] };
}
//# sourceMappingURL=main.js.map