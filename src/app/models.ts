export interface User 
{
    userId: string
    email: string
    passwordHash: string
    name: string
    favorites: string[]
    historicalConversions: Conversion[]
}

export interface Conversion 
{
    conversionId: string
    fromCurrency: string
    toCurrency: string
    amount: number
    convertedAmount: number
    rate: number
    time: string
}

