import { Injectable } from "@angular/core";
import { IGolfer } from './golfer.model';
import { last } from 'rxjs/operators';

@Injectable()
export class AuthService {
    currentGolfer:IGolfer
    loginGolfer(golferName: string, password: string) {
        this.currentGolfer = {
            id: 1,
            golferName: 'John Papas',
            firstName: 'John',
            lastName: 'Papas',
            email: 'jp@email.com',
            address1: '123 Main St',
            address2: 'Unit 804',
            city: 'South Pasadena',
            state: 'FL',
            zip: '33707',
            mobileNumber: '813-760-5704'
        }
    }

    updateCurrentGolfer(firstName:string, lastName:string){
        this.currentGolfer.firstName = firstName
        this.currentGolfer.lastName = lastName
    }

    isAuthenticated() {
        return !!this.currentGolfer;
    }
}