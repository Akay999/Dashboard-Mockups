const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');  //will only work on canvas element and gives a refence to the 2d canvas api drawing object


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.fillStyle = 'white';
// ctx.fillRect(10, 20, 150, 50);

// // This function is used so that whenever the window is resised the drawings does not get distorted.
// window.addEventListener('resize', function() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     ctx.fillStyle = 'white';
//     ctx.fillRect(10, 20, 150, 50);

// })


// // To draw a path we need to fist invoke the method beginpath
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
