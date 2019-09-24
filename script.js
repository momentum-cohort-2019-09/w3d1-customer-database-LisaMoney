function customersToHtml(customer) {
    return `
    <div class="people">
        <img src=${customer.picture.large}>
        <div class="customer_name">${customer.name.first} ${customer.name.last}</div>
        <div class="customer_email">${customer.email}</div>
        <div class="customer_address">${customer.location.street}</div>
        <div class="customer_address2">${customer.location.city}, ${customer.location.state} ${customer.location.postcode}</div>
        <div class="dob">${moment(customer.dob).format("MMM D, YYYY")}</div>
        <div class="customer_since">${moment(customer.registered).format("MMM D, YYYY")}</div>
    `
}

document.querySelector("#customers").innerHTML=customers.map(customersToHtml).join('\n');