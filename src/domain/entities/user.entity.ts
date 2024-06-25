export class User {
    private email: string;
    private password: string;
    private phoneNumber: string;
    private role: string; // 'user' or 'hotelier'
    private name?: string;
    private profilePicture?: string;
    private address?: string;

    constructor(
        email: string,
        password: string,
        phoneNumber: string,
        role: string,
        name?: string,
        profilePicture?: string,
        address?: string
    ) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.name = name;
        this.profilePicture = profilePicture;
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

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    public getName(): string | undefined {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getProfilePicture(): string | undefined {
        return this.profilePicture;
    }

    public setProfilePicture(profilePicture: string): void {
        this.profilePicture = profilePicture;
    }

    public getAddress(): string | undefined {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }
}
