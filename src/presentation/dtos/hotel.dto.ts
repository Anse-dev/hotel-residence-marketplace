export class HotelDTO {
    constructor(
        public name: string,
        public location: string,
        public rooms: number,
        public amenities: string[],
        public pricePerNight: number,
    ) { }
}