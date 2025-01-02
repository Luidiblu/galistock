const EXCHANGE_RATE_API_BASE = 'https://open.er-api.com/v6/latest';

export async function fetchExchangeRate(): Promise<number> {
  try {
    const response = await fetch(`${EXCHANGE_RATE_API_BASE}/USD`);
    const data = await response.json();
    return data.rates.BRL;
  } catch (error) {
    console.error('Failed to fetch exchange rate:', error);
    return 4.97; // Fallback rate in case of API failure
  }
}