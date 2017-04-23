import { IExchangeTradedFund } from "../Models/IExchangeTradedFund";

export interface IExchangeTradedFundRepository {
    GetExchangeTradedFund(tickerSymbol: string): IExchangeTradedFund;
}