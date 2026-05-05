let cars = [
  {
    id: 1,
    name: "BMW X5",
    price: "Ksh 3,500,000",
    description: "2022 . SUV . Automatic",
    Engine: "3.0L Turbo Inline-6",
    Mileage: "11-13km/l",
    FuelType: "Petrol",
    DriveType: "AWD (All-Wheel Drive)",
    Color: "White",
    Seats: "5 (Leather)",
    accolades:
      "A luxury mid-size SUV that blends performance and comfort. The BMW X5 delivers strong turbocharged power, smooth highway driving, and advanced all-wheel drive capability, making it great for both city driving and long-distance travel with premium comfort.",
    image: "images/car1.jpg",
  },
  {
    id: 2,
    name: "Toyota Prado",
    price: "Ksh 4,200,000",
    description: "2021 . SUV . Automatic",
    Engine: "2.8L Turbo Diesel Inline-4",
    Mileage: "10 km/l",
    FuelType: "Diesel",
    DriveType: "4WD (Full-time)",
    Color: "White",
    Seats: "7 (Leather)",
    accolades:
      "A rugged and reliable off-road SUV built for tough terrains and everyday durability. The Prado is known for its strong diesel engine, excellent 4WD system, and spacious interior, making it ideal for both adventure and family use across rough roads.",
    image: "images/car2.jpg",
  },
  {
    id: 3,
    name: "Mercedes Benz GLE",
    price: "Ksh 15,700,000",
    description: "2025 . SUV . Automatic",
    Engine: "2.0L Turbo Inline-4",
    Mileage: "12 km/l",
    FuelType: "Diesel",
    DriveType: "AWD (4MATIC)",
    Color: "darkblue",
    Seats: "5 (Premium Leather)",
    accolades:
      "A premium luxury SUV that focuses on comfort, technology, and refined performance. The GLE offers smooth acceleration, advanced driving assistance systems, and a high-end interior designed for a first-class driving experience.",
    image: "images/car3.jpg",
  },
  {
    id: 4,
    name: "Audi Q5",
    price: "Ksh 3,200,000",
    description: "2021 . SUV . Automatic",
    Engine: "2.0L Turbo Inline-4",
    Mileage: "15 km/l",
    FuelType: "Petrol",
    DriveType: "AWD (Quattro)",
    Color: "White",
    Seats: "5 (Leather)",
    accolades:
      "A stylish compact luxury SUV with balanced performance and efficiency. The Audi Q5 features Quattro all-wheel drive for strong grip, a smooth turbo engine, and a modern interior that makes it perfect for both urban and highway driving.",
    image: "images/car4.jpg",
  },
  {
    id: 5,
    name: "Range Rover Evoque",
    price: "Ksh 6,200,000",
    description: "2023 . SUV . Automatic",
    Engine: "2.0L Turbo Inline-4",
    Mileage: "14 km/l",
    FuelType: "Petrol",
    DriveType: "AWD",
    Color: "Red",
    Seats: "5 (Leather)",
    accolades:
      "A compact luxury SUV with bold design and strong road presence. It combines off-road capability with urban elegance, offering all-wheel drive stability, a comfortable interior, and smooth handling for city and light adventure driving.",
    image: "images/car5.jpg",
  },
  {
    id: 6,
    name: "Honda Accord",
    price: "Ksh 2,200,000",
    description: "2020 . Sedan . Automatic",
    Engine: "1.5L Turbo Inline-4",
    Mileage: "18 km/l",
    FuelType: "Hybrid",
    DriveType: "FWD (Front-Wheel Drive)",
    Color: "Blue-Black",
    Seats: "5 (Fabric)",
    accolades:
      "A reliable and fuel-efficient sedan built for everyday comfort and long-term durability. The Accord offers a smooth hybrid/petrol engine option, excellent fuel economy, and a spacious interior, making it ideal for daily commuting and highway travel.",
    image: "images/car6.jpg",
  },
];

function selectCar(id) {
  let car = cars.find((c) => c.id === id);

  localStorage.setItem("selectedCar", JSON.stringify(car));
}

let car = JSON.parse(localStorage.getItem("selectedCar"));

document.getElementById("carName").innerText = car.name;
document.getElementById("carPrice").innerText = car.price;
document.getElementById("CarDescription").innerText = car.description;
document.getElementById("Engine").innerText = "Engine: " + car.Engine;
document.getElementById("Mileage").innerText = "Mileage: " + car.Mileage;
document.getElementById("fuelType").innerText = "Fuel Type: " + car.FuelType;
document.getElementById("driveType").innerText = "Drive Type: " + car.DriveType;
document.getElementById("Color").innerText = "Color: " + car.Color;
document.getElementById("seats").innerText = "Seats: " + car.Seats;
document.getElementById("Lildescription").innerText = car.accolades;
document.getElementById("imgsection").src = car.image;

