// Declare a global variable `customerName`
var customerName = 'bob';

// Function to uppercase the `customerName`
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set a global variable `bestCustomer`
function setBestCustomer() {
  bestCustomer = 'not bob'; // `bestCustomer` is implicitly declared in global scope
}

// Function to overwrite `bestCustomer`
function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

// Declare a constant `leastFavoriteCustomer`
const leastFavoriteCustomer = 'someone';

// Function to attempt changing `leastFavoriteCustomer`
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw an error
}
