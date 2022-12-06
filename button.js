const btn = document.getElementById('btn');

let index = 0;

const colors = ['#398b43', 'lightgray'];
const texts = ['white', '#1B371D']

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = texts[index];
    console.log("button clicked")
    index = index >= colors.length - 1 ? 0 : index + 1;
});

