# JSON to Colorful Table

This project provides a utility function to display data in a colorful, structured table format in the console. It converts an array of objects into a table with colorful headers and white-colored values for better readability.

## Features

- Converts an array of objects into a table format.
- Colorizes the table headers with different colors for each column.
- Displays the values in white for clear readability.
- Handles invalid inputs gracefully, such as non-array data or empty arrays.
- Uses **`cli-table3`** for table formatting and **`chalk`** for colorization.

## Requirements

- Node.js (v12 or higher)
- **chalk** library
- **cli-table3** library

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Mohammed-Thaha/Json-table-display/
    ```

2. Navigate to the project folder:

    ```bash
    cd Json-table-display
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

To use this utility, import the `printTable` function and pass an array of objects to it.

Example:

```javascript
import printTable from '@mohammed-thaha/json-to-colorful-table'

const data = [
  { name: "Alice", age: 25, city: "Chennai", role: "Manager", salary: "250000" },
  { name: "Bob", age: 30, city: "Mumbai", role: "Manager" },
  { name: "Charlie", age: 28, city: "Delhi", role: "Sales" }
];

printTable(data);
```
## Output

| NAME    | AGE | CITY    | ROLE    | SALARY  |
|---------|-----|---------|---------|---------|
| Alice   | 25  | Chennai | Manager | 250000  |
| Bob     | 30  | Mumbai  | Manager |         |
| Charlie | 28  | Delhi   | Sales   |         |
----

# Input Validation

The function checks if the input is an array.

- If the input is **not an array**, it will print an **error message in red**.
- If the array is **empty**, it will print a **warning message in yellow**.

---

## Development

1. **Fork and clone** this repository.
2. Create a new branch for your changes:

   ```bash
   git checkout -b feature/your-feature
   git commit -am "Description of your changes"
   git push origin feature/your-feature

## Open a Pull Request

Open a pull request to the `main` branch.

---

## Project

**Name:** json-to-colorful-table

**Author:** Mohammed Thaha

---

## License

MIT License


## Acknowledgments

- **[cli-table3](https://www.npmjs.com/package/cli-table3)**: For table formatting in the terminal.
- **[chalk](https://www.npmjs.com/package/chalk)**: For colorizing the output in the console.

------
