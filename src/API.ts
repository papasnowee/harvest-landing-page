import axios from 'axios'

export interface Transactions {
    allOwnersCount: number
    blockDate: number
}

export class API {
    static async getTransactions(): Promise<Transactions[]> {
        const response = await axios
            .get<{ data: any[] }>('https://ethparser-api.herokuapp.com/api/transactions/last/harvest')
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('geTransactions', error)
            })
        return response?.data ?? []
    }
}
