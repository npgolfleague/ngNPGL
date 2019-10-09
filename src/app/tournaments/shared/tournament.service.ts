import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ITournament } from './tournament.model';

@Injectable()
export class TournamentService {
   // constructor(private http:Http) { }
    
    getTournaments():Observable<ITournament[]>{
        let subject = new Subject<ITournament[]>()
        setTimeout(() => {subject.next(TOURNAMENTS); subject.complete(); }, 2100)
        return subject
    }
    getTournament(id:number) {
        return TOURNAMENTS.find(tournament => tournament.id === id)
    }
}

const TOURNAMENTS: ITournament[] = [
    {
    id: 1,
    league: 'NPGL',
    date: new Date ('09/26/20'),
    time: '05:30 pm',
    course: 'Eagles Forest',
    imageUrl: './assets/images/NPGL.png',
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
        date: new Date ('10/03/20'),
        time: '05:30 pm',
        course: 'Eagles Forest',
        imageUrl: './assets/images/NPGL.png',
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