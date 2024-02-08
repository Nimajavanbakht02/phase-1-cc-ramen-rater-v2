// index.js

// Callbacks
const handleClick = (ramen) => {
  console.log(`You clicked on ${ramen.name}`);
};

const addSubmitListener = () => {
  const form = document.getElementById('ramens');

  form.addEventListener('submit'), (e) => {
    e.preventDefault();

    const ramenName = document.getElementById('name').value;
    const ramenRating = document.getElementById('rating').value;

    console.log(`New Ramen: ${ramenName}, Rating: ${ramenRating}`);
    form.reset();
  }}

const displayRamens = () => {
  const ramenList = document.getElementById('ramenList');

  ramenList.innerHTML = ''

  ramenData.forEach(ramen => {
    const ramenItem = document.createElement('div');
    ramenItem.textContent = `${ramen.name} - Rating: ${ramen.rating}`;
    ramenList.appendChild(ramenItem);
});
}

const main = () => {
  displayRamens(ramenData);
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main, 
}