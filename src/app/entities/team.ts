import { Player } from "./player";

export class Team {

    constructor(private _id: number, private _name: string, private _players: Player[]) { }

    calculateTeamFactor(): number {
        return this._players.map(p => p.skills.talent * p.skills.currentShape).
            reduce((sum, current) => sum + current, 0);
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get players(): Player[] {
        return this._players;
    }
}