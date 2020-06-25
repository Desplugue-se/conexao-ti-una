const waterSelected = () => {
    const button = event.target;
    button.setAttribute('class', 'button water');
    button.innerHTML = '<img src="./img/wave.png" alt="water" class="image" />';
    button.disabled = "true";
}

const shipSelected = (path, id) => {
    const button = event.target;
    button.setAttribute('class', 'button ship');
    button.innerHTML = `<img src="./img/${path}/${id}.png" alt="water" class="image" />`;
    button.disabled = "true";
} 
