# Blockchain ExchangeRates Module

## Accessing the module

Importing:

```js
var exchange = require('blockchain.info/exchange');
```

## Methods

All method options can include an `apiCode` property to prevent hitting request limits.

### getTicker

Usage:

```
exchange.getTicker(options);
```

Gets the market price of BTC compared to world currencies. Without any options specified, it responds with a JSON object that has currency codes as keys.

Options (optional):

  * `currency` - specify which currency to get data for (currency code, *string*)

### toBTC

Usage:

```
exchange.toBTC(amount, options);
```

Converts an amount of a given currency to BTC. Responds with a number in *string* format.

Parameters:

  * `amount` - the amount to convert (satoshi, *number*)
  * `currency` - the code of the currency to convert from (currency code, *string*)