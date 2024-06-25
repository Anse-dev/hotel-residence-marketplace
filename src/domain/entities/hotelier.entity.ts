export class Hotelier {
    private email: string;
    private password: string;
    private phoneNumber: string;
    private companyName: string;
    private companyLogo?: string;
    private companyDescription?: string;
    private address?: string;

    constructor(
        email: string,
        password: string,
        phoneNumber: string,
        companyName: string,
        companyLogo?: string,
        companyDescription?: string,
        address?: string
    ) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.companyName = companyName;
        this.companyLogo = companyLogo;
        this.companyDescription = companyDescription;
        this.address = address;
    }

    // Getters and Setters
    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public getCompanyName(): string {
        return this.companyName;
    }

    public setCompanyName(companyName: string): void {
        this.companyName = companyName;
    }

    public getCompanyLogo(): string | undefined {
        return this.companyLogo;
    }

    public setCompanyLogo(companyLogo: string): void {
        this.companyLogo = companyLogo;
    }

    public getCompanyDescription(): string | undefined {
        return this.companyDescription;
    }

    public setCompanyDescription(companyDescription: string): void {
        this.companyDescription = companyDescription;
    }

    public getAddress(): string | undefined {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    // Additional methods for domain logic can be added here
}

