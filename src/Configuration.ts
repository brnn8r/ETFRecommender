import { IConfiguration } from "./IConfiguration";
/*
    Configuration options for the ETF Recommender
    The goal of the recommender is to look for Exchange Traded Funds (ETFs) with Net Asset Values (NAVs)
     divergent from their share price by a certain tolerance.
*/
export class Configuration implements IConfiguration {

    private static instance: IConfiguration = new Configuration();

    private constructor();

    public static get Instance(): IConfiguration {
        return Configuration.instance;
    }

    // The recommender will alert with a BUY recommendation when the $ETF_NAV > $ETF_SHARE_PRICE * (1+$tolerance)
    // The recommender will alert with a SELL recommendation when the $ETF_NAV < $ETF_SHARE_PRICE * (1+$tolerance)
    public get tolerance(): number { return 0.05; };

    // The list of ETFs to analyse for discrepancies between their share price and share NAV
    public get exchangeTradedFunds(): string[] { return ["ASP"]; }

}