import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Fzoulu77Rd7W5s2AxjCY2jG2eHwkzzwcq4VnFWwv');
 
export async function convertCurrency (fromCurrency, toCurrency, units){
    const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier= res.data(toCurrency);
    return multiplier*units;
}
