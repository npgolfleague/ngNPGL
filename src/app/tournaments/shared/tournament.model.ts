export interface ITournament {
    id: number
    league: string
    course: string
    date: Date
    time: string
    imageUrl: string
    location?: {
        address: string
        city: string
        phone: string
    }
    pairings: IPairing[]
}

export interface IPairing {
    startingHole: number
    golfer: string
    skinsStrokes: number
}