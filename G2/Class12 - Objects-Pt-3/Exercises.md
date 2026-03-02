# Exercises 🏋️

## Task 1 🙎‍♂️
- Define a class `Person` with the following properties:
  - `firstName` (String)
  - `lastName` (String)
  - `age` (Number)
  
- Add a constructor to initialize these properties.
- Add a method `getFullName()` that returns the full name (first name + last name).
- Create a class `Student` that **inherits** from `Person`.
- Add an additional property to `Student`: `grade` (Number) representing the student's grade.
- Add a method `getStudentInfo()` that returns the student's full name and grade.


## Task 2 🚗
- Create a class `Car` with properties:
    - `brand` (String)
    - `model` (String)
    - `speed` (Number)

- Add a **getter** for `speed` that returns the speed in kilometers per hour (km/h).
- Add a **setter** for `speed` that ensures the speed is never less than zero. If it is, throw an error with the message `"Speed cannot be negative"`.
- Add method `printInfo()` that prints the car information.

## Task 3 🏎️
- Create a class `ElectricCar` that inherits from `Car`.
- Add a property `batteryLevel` (Number) for the `ElectricCar` class.
- Add a method `chargeBattery()` that increases the `batteryLevel` by 10.
- Add a static method `getTotalElectricCars()` to track and return the total number of `ElectricCar` instances created.
