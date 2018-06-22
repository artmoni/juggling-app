


export class User {
    private _id : number;
    private _name : string;
    private _mail : string;
    private _tel : string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }

    get tel(): string {
        return this._tel;
    }

    set tel(value: string) {
        this._tel = value;
    }
}