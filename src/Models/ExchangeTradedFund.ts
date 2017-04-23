import { IExchangeTradedFund } from "./IExchangeTradedFund";

export class ExchangeTradedFund implements IExchangeTradedFund {

    constructor(private tickerSymbol: string, private price: number, private netAssetValue: number) {
    }

    public get TickerSymbol(): string {
        return this.tickerSymbol;
    }

    public get Price(): number {
        return this.price;
    }

    public get NetAssetValue(): number {
        return this.netAssetValue;
    }
}