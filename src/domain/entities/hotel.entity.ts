export class Hotel {
    private id: string;
    private name: string;
    private location: string;
    private rooms: number;
    private amenities: string[];
    private pricePerNight: number;

    constructor(
        id: string,
        name: string,
        location: string,
        rooms: number,
        amenities: string[],
        pricePerNight: number
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.rooms = rooms;
        this.amenities = amenities;
        this.pricePerNight = pricePerNight;
    }

    // Getters and Setters
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(location: string): void {
        this.location = location;
    }

    public getRooms(): number {
        return this.rooms;
    }

    public setRooms(rooms: number): void {
        this.rooms = rooms;
    }

    public getAmenities(): string[] {
        return this.amenities;
    }

    public setAmenities(amenities: string[]): void {
        this.amenities = amenities;
    }

    public getPricePerNight(): number {
        return this.pricePerNight;
    }

    public setPricePerNight(pricePerNight: number): void {
        this.pricePerNight = pricePerNight;
    }

    // Additional methods for domain logic can be added here
}
