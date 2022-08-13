// Code for Date functionality 

// Do not touch, please

const params = new URLSearchParams(window.location.search)
document.querySelector('h1').innerText = params.get('date');
document.querySelector('h1').style.transform = `scale(${params.get('size') * 0.05})`;
document.querySelector('h1').style.color = params.get('color');
document.body.style.backgroundColor = params.get('color');
