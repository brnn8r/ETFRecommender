import { IConfiguration } from "./Configuration/IConfiguration";
import { IExchangeTradedFundRepository } from "./Repositories/IExchangeTradedFundRepository";

export class ETFRecommender {

    constructor(private configuration: IConfiguration, private etfRepository: IExchangeTradedFundRepository) {

    }

    public CaclulateRecommendations() {

        for (let etfSymbol of this.configuration.exchangeTradedFundSymbols) {

            let etf = this.etfRepository.GetExchangeTradedFund(etfSymbol);

            let recommendation = "HOLD";
            if ( etf.Price > etf.NetAssetValue * (1 + this.configuration.tolerance) ) {
                recommendation = "SELL";
            } else if ( etf.NetAssetValue > etf.Price * (1 + this.configuration.tolerance) ) {
                recommendation = "BUY";
            }

            console.log(`The price of ${etf.TickerSymbol} is ${etf.Price} the NAV is ${etf.NetAssetValue}. RECCOMENDATION: ${recommendation}`);

        }

    }
}

