enum Status {
  Active = "Active",
  Inactive = "Inactive",
  Pending = "Pending",
}

interface Vehicle {
  brand: string;
  model: string;
  year: number;
  status: Status;
}

const my_car: Vehicle = {
  brand: "VW",
  model: "Golf",
  year: 2004,
  status: Status.Active,
};
const my_other_car: Vehicle = {
  brand: "Ford",
  model: "Mustang",
  year: 2020,
  status: Status.Active,
};
// console.log(my_car);

type Driver = {
  name: string;
  licenseNumber: string;
  vehicles: Vehicle[];
};

const me: Driver = {
  name: "Anel",
  licenseNumber: "E51-A-041",
  vehicles: [my_car],
};
// console.log(me);

function addVehicleDriver(driver: Driver, vehicle: Vehicle): void {
  driver.vehicles.push(vehicle);
}
addVehicleDriver(me, my_other_car);
// console.log(me);

function calculateFuelCost(
  distance: number,
  fuelPrice: number,
  fuelEfficiency?: number
): number {
  if (!fuelEfficiency) {
    fuelEfficiency = 15;
  }

  return ((fuelEfficiency * distance) / 100) * fuelPrice;
}

// console.log(calculateFuelCost(10, 2, 6));

function calculateDiscount(price: number, discountRate: number = 0.1): number {
  return price * discountRate;
}
// console.log(calculateDiscount(100, 0.5));

function formatGreeting(name: string, salutation?: string): string {
  return name + (salutation ? salutation : "");
}
// console.log(formatGreeting("anel", "hi"));

// function calculateTravelCost(
//   distance: number,
//   fuelPrice: number = 5,
//   fuelEfficiency?: number = 15
// ): number {
//   return (distance / fuelEfficiency) * fuelPrice;
// }
// class Product {
//   private name: string;
//   private price: number;
//   private category: string;
//   constructor(name: string, price?: number, category?: string) {
//     this.name = name;
//     this.price = price ? price : 0;
//     this.category = category ? category : "General";
//   }
//   public getDetails = (): string => {
//     return ((this.name + " " + this.price) as string) + " " + this.category;
//   };
// }
// const laptop: Product = new Product("Laptop", 1500, "Tech");
// const notebook: Product = new Product("notebook");

// console.log(laptop.getDetails());
// console.log(notebook.getDetails());

class LibraryAccount {
  public accountId: string;
  public owner: string;
  private booksBorrowed: number;
  private penaltyAmount: number;

  constructor(
    accountId: string,
    owner: string,
    booksBorrowed: number = 0,
    penaltyAmount: number = 0
  ) {
    this.accountId = accountId;
    this.owner = owner;
    this.booksBorrowed = booksBorrowed;
    this.penaltyAmount = penaltyAmount;
  }
  public borrowBook(count: number): void {
    if (this.booksBorrowed + count > 10) {
      console.log("Cant log more than 10 books at once");
    } else {
      this.booksBorrowed += count;
    }
  }
  public returnBook(count: number): void {
    if (this.booksBorrowed - count < 0) {
      console.log("You returedn too many");
    } else {
      this.booksBorrowed -= count;
    }
  }
  public applyPenaltyForLateReturn(): void {
    this.penaltyAmount += 5;
  }
  public showPenalty(): void {
    console.log(this.penaltyAmount);
  }
  private updatePenalty(amount: number): void {
    this.penaltyAmount += amount;
  }
}
