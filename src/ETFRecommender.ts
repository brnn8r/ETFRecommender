import { IConfiguration } from "./IConfiguration";

export class ETFRecommender {

    constructor(private configuration: IConfiguration) {

    }

    public Start() {

        let currentETF = this.configuration.exchangeTradedFunds.shift();

        console.log(`Starting analysis of ${currentETF}`);
    }
}

