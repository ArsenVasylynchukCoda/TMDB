let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow = tomorrow.toISOString()

export const dataFilterDate = [
    {
        text: 'from',
        value: ''
    },
    {
        text: 'to',
        value: tomorrow.slice(0, 10)
    }
]