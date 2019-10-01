import { Injectable } from '@angular/core';

@Injectable()
export class TournamentService {
   // constructor(private http:Http) { }
    
    getTournaments(){
        return TOURNAMENTS
    }
}

const TOURNAMENTS = [
    {
    id: 1,
    league: 'NPGL',
    date: '09/26/20',
    time: '05:30 pm',
    course: 'Eagles Forest',
    pairings: [
        {
        startingHole: 1,
        golfer: 'Paul Suh',
        skinsStrokes: 6
        },
        {
        startingHole: 1,
        golfer: 'Frank Fundora',
        skinsStrokes: 7
        },
        {
        startingHole: 1,
        golfer: 'Tom Kiernan',
        skinsStrokes: 3
        },
        {
        startingHole: 1,
        golfer: 'Barry Mera',
        skinsStrokes: 4
        },
        {
        startingHole: 2,
        golfer: 'Eric Lindquist',
        skinsStrokes: 5
        },
        {
        startingHole: 1,
        golfer: 'John Veltri',
        skinsStrokes: 4
        },
        {
        startingHole: 1,
        golfer: 'Joe Sapienza',
        skinsStrokes: 7
        }            
    ]
    },
    {
        id: 2,
        league: 'NPGL',
        date: '10/03/20',
        time: '05:30 pm',
        course: 'Eagles Forest',
        pairings: [
            {
            startingHole: 2,
            golfer: 'Eric Lindquist',
            skinsStrokes: 5
            },
            {
            startingHole: 1,
            golfer: 'John Veltri',
            skinsStrokes: 4
            },
            {
            startingHole: 1,
            golfer: 'Joe Sapienza',
            skinsStrokes: 7
            }                
        ]
        }
]