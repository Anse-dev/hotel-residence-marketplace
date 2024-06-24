export class ResidenceDTO {
    constructor(
        public name: string,
        public location: string,
        public units: number,
        public amenities: string[],
        public pricePerMonth: number,
    ) { }
}