// script.js
const rates = {
    USD: { USD: 1.00, EUR: 0.91, GBP: 0.78, JPY: 146.40, AUD: 1.50, CAD: 1.35, CHF: 0.88, CNY: 7.22, INR: 83.33, ZAR: 18.52 },
    EUR: { USD: 1.10, EUR: 1.00, GBP: 0.85, JPY: 161.85, AUD: 1.64, CAD: 1.51, CHF: 0.97, CNY: 8.04, INR: 90.92, ZAR: 20.33 },
    GBP: { USD: 1.29, EUR: 1.18, GBP: 1.00, JPY: 190.28, AUD: 1.93, CAD: 1.78, CHF: 1.14, CNY: 9.47, INR: 110.73, ZAR: 24.68 },
    JPY: { USD: 0.0068, EUR: 0.0062, GBP: 0.0052, JPY: 1.00, AUD: 0.0101, CAD: 0.0092, CHF: 0.0060, CNY: 0.047, INR: 0.075, ZAR: 0.10 },
    AUD: { USD: 0.67, EUR: 0.61, GBP: 0.51, JPY: 99.14, AUD: 1.00, CAD: 0.91, CHF: 0.59, CNY: 4.74, INR: 55.33, ZAR: 12.47 },
    CAD: { USD: 0.74, EUR: 0.67, GBP: 0.56, JPY: 109.41, AUD: 1.10, CAD: 1.00, CHF: 0.65, CNY: 5.21, INR: 59.46, ZAR: 13.84 },
    CHF: { USD: 1.13, EUR: 1.03, GBP: 0.85, JPY: 165.76, AUD: 1.70, CAD: 1.54, CHF: 1.00, CNY: 8.40, INR: 93.62, ZAR: 20.59 },
    CNY: { USD: 0.14, EUR: 0.12, GBP: 0.11, JPY: 0.021, AUD: 0.21, CAD: 0.19, CHF: 0.12, CNY: 1.00, INR: 12.82, ZAR: 2.87 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0089, JPY: 13.39, AUD: 0.018, CAD: 0.017, CHF: 0.013, CNY: 0.078, INR: 1.00, ZAR: 0.22 },
    ZAR: { USD: 0.054, EUR: 0.049, GBP: 0.040, JPY: 7.24, AUD: 0.057, CAD: 0.053, CHF: 0.048, CNY: 0.35, INR: 4.20, ZAR: 1.00 }
};

document.getElementById('convert-btn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    if (isNaN(amount)) {
        document.getElementById('result').textContent = 'Please enter a valid amount';
        return;
    }
    
    const convertedAmount = amount * rates[fromCurrency][toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

