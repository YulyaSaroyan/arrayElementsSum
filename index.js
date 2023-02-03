const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let cartItemsPricesSum = cartItemsPrices.reduce((acc, cur) => (parseFloat(acc) + parseFloat(cur)).toFixed(2));

    if (cartItemsPricesSum == WINNING_SUM) {
        return true;
    } else {
        return false;
    }
}

module.exports = doesCartWinPrize;