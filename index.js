var customerName = "bob";

var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();
   }

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer(newVal) {
    bestCustomer = newVal;
}

const leastFavoriteCustomer = "hi";

function changeLeastFavoriteCustomer(newVal) {
    leastFavoriteCustomer = newVal;
}
