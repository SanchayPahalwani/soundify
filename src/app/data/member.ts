export class Member {
    member_id: number;
    band_id: number;
    name: string;
    role: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}