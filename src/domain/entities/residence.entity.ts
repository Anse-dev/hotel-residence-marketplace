export class Residence {
    private id: string;
    private name: string;
    private location: string;
    private units: number;
    private amenities: string[];
    private pricePerMonth: number;

    constructor(
        id: string,
        name: string,
        location: string,
        units: number,
        amenities: string[],
        pricePerMonth: number
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.units = units;
        this.amenities = amenities;
        this.pricePerMonth = pricePerMonth;
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

    public getUnits(): number {
        return this.units;
    }

    public setUnits(units: number): void {
        this.units = units;
    }

    public getAmenities(): string[] {
        return this.amenities;
    }

    public setAmenities(amenities: string[]): void {
        this.amenities = amenities;
    }

    public getPricePerMonth(): number {
        return this.pricePerMonth;
    }

    public setPricePerMonth(pricePerMonth: number): void {
        this.pricePerMonth = pricePerMonth;
    }

    // Additional methods can be added as needed for domain logic
}
