var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = "not bob";
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
};

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "definitely bob";

    return leastFavoriteCustomer;
};

const leastFavoriteCustomer = "definitely bob";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob is cool";
};

console.log