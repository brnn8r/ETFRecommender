import { ExchangeTradedFund } from "../Models/ExchangeTradedFund";
import { IExchangeTradedFund } from "../Models/IExchangeTradedFund";
import { IExchangeTradedFundRepository } from "./IExchangeTradedFundRepository";

export class ExchangeTradedFundRepository implements IExchangeTradedFundRepository {
    public GetExchangeTradedFund(tickerSymbol: string): IExchangeTradedFund {

        if (tickerSymbol === "ASP") {
            return new ExchangeTradedFund(tickerSymbol, 1.395, 1.3926);
        }

        if (tickerSymbol === "ASD") {
            return new ExchangeTradedFund(tickerSymbol, 1.718, 1.71804);
        }

    }
}