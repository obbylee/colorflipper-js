const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRanNum()];  
    }
    // hexColor += `${hex[getRanNum()]}${hex[getRanNum()]}${hex[getRanNum()]}${hex[getRanNum()]}${hex[getRanNum()]}${hex[getRanNum()]}`
    // console.log(hex[getRanNum()]);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

    // const ranNumber = getRanNum();
    // console.log(getRanNum());
    // document.body.style.backgroundColor = colors[ranNumber];
    // color.textContent = colors[ranNumber];
});

let getRanNum = () => {
    return Math.floor(Math.random() * hex.length);
};