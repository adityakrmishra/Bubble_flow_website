window.onload = () =>{

let started = false 


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: 50 ,
  y: 100
}

const colors = ['red', 'yellow', "blue", "green"]

// Event Listeners
canvas.addEventListener('touchmove', (event) => {
  mouse.x = event.touches[0].clientX
  mouse.y = event.touches[0].clientY
  
 // console.log(mouse.x , mouse.y)
})

canvas.addEventListener('touchstart', (event) => {
  mouse.x = event.touches[0].clientX
  mouse.y = event.touches[0].clientY
  started = true 
 // console.log(mouse.x , mouse.y)
})
canvas.addEventListener('touchend', (event) => {
  mouse.x = undefined 
  mouse.y = undefined
   
 // console.log(mouse.x , mouse.y)
})


addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.width = 0 
    this.height = 0
    this.img = b1
  }

  draw() {
    c.beginPath()
    c.drawImage(this.img, this.x, this.y, this.width, this.height)
    c.closePath()
  }

  update() {
    this.draw()
    let dy = this.x - mouse.x
    let dx = this.y - mouse.y;
    let dist = Math.hypot(dx,dy)

    
    if(dist < 100 && this.height < 60){
        this.height++;
        this.width++;
    }
    if(dist > 100 && this.height > 0 ){
        this.height--;
        this.width--;
    }
    
    
  }
}

// Implementation
let objects = []
function init() {
  objects = []

  for (let i = 0; i < 300; i++) {
      let x =  Math.random() * (canvas.width - 60);
      let y =  Math.random() * (canvas.height - 60);
      let color = colors[Math.floor(Math.random() * colors.length )]
      let r = 1;
     objects.push(new Object (x, y, r, color))
  }
}
init()


// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  
  c.clearRect(0, 0, canvas.width, canvas.height)
    if(!started){
        cross();
    }
  
   objects.forEach(object => {
    object.update()
    if(mouse.x == undefined && object.height > 0){
        object.height--;
        object.width--;
    }
    
   })
}

    let x = 0;
    let y = 0;

function cross(){
    
    if(mouse.x == 50 && mouse.y == 100){
        x = 5;
        y = 0
    }
    if(mouse.x == 375 && mouse.y == 100){
        x = -5;
        y = 5;
    }
    if(mouse.x == 50 && mouse.y == 425){
        y = 0
        x = 5
    }
    if(mouse.x == 375 && mouse.y == 425){
        y = -5;
        x = -5;
    }
    
    mouse.x += x;
    mouse.y += y
    
}







animate()







    }
