"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ETFRecommender = (function () {
    function ETFRecommender(configuration) {
        this.configuration = configuration;
    }
    ETFRecommender.prototype.Start = function () {
        var currentETF = this.configuration.exchangeTradedFunds.shift();
        console.log("Starting analysis of " + currentETF);
    };
    return ETFRecommender;
}());
exports.ETFRecommender = ETFRecommender;
//# sourceMappingURL=ETFRecommender.js.map