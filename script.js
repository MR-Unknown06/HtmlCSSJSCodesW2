const items = [
    { name: "Apple", price: "$1.00", img: "https://via.placeholder.com/150?text=Apple" },
    { name: "Banana", price: "$0.50", img: "https://via.placeholder.com/150?text=Banana" },
    { name: "Orange", price: "$0.80", img: "https://via.placeholder.com/150?text=Orange" },
    { name: "Grapes", price: "$2.00", img: "https://via.placeholder.com/150?text=Grapes" },
    { name: "Milk", price: "$1.50", img: "https://via.placeholder.com/150?text=Milk" },
    { name: "Bread", price: "$2.50", img: "https://via.placeholder.com/150?text=Bread" },
    { name: "Eggs", price: "$3.00", img: "https://via.placeholder.com/150?text=Eggs" },
    { name: "Chicken", price: "$5.00", img: "https://via.placeholder.com/150?text=Chicken" },
    { name: "Rice", price: "$1.20", img: "https://via.placeholder.com/150?text=Rice" },
    { name: "Pasta", price: "$1.80", img: "https://via.placeholder.com/150?text=Pasta" },
];

const itemContainer = document.getElementById('itemContainer');

items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
    `;
    itemContainer.appendChild(itemDiv);
});