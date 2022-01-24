import './index.scss';

class Background {
    constructor({ $app, initialState }) {
      
      this.state = initialState;
      this.$image = new Image();
      this.$imageBackground = document.createElement('div');
      this.$imageBackground.appendChild(this.$image);
      this.$imageBackground.setAttribute('class', 'background');
      this.$target = document.createElement('section');
      this.$image.onload = () => {
        $app.appendChild(this.$imageBackground);
      }
      this.$image.src= "https://i.ibb.co/Lxm6x2T/architecture-ga223faef9-1920.jpg";
      
      $app.appendChild(this.$target);
      this.render();
    }
    render() {
      this.$target.innerHTML = this.state.circles.map(circle => `<div class="point"><div>${circle}</div></div>
      `).join("");
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }
  
  const $app = document.querySelector('body');
  const initialState = {
    circles: ["Brute Force", "Graph", "Binary Search", "Sorting"]  
  };
  
  new Background({
    $app,
    initialState
  })
  // let circles = [];
  
  
  // let ball = {
  //   x: 50,
  //   y: 50,
  //   radius: 30,
  //   vx: 3, // 가속도 x
  //   vy: 2, // 가속도 y
  //   color: 'gray',
  //   draw: function() {
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0 , 2*Math.PI, true);
  //     ctx.closePath();
  //     ctx.fillStyle = this.color;
  //     ctx.fill();
  //   }
  // }
  
  
  // function movingCheck(event){
    
  //   const client_x = event.clientX;
  //   const client_y = event.clientY;
  //   console.log(client_x, client_y);
  // }
  
  // let raf = null;
  // let running = null;
  
  // function clear(){
  //   ctx.fillStyle = 'rgba(255, 255, 255, 0)';
  //   ctx.clearRect(0,0,width,height);
  //  ctx.drawImage(image, 0,0);
  //  // ctx.drawImage(image, 0,0);
  // }
  
  // function repeatBall(radius){
  //   if(radius > 0){
  //     rippleEffect(radius);
  //     requestAnimationFrame(rippleEffect);
  //   }
  //   else{
  //     console.log('stop');
  //     cancelAnimationFrame(raf);
  //   }
  // }
  
  
  // function rippleEffect(radius,x,y){
  //   ctx.beginPath();
  //   ctx.fillStyle = 'red';
  //   ctx.arc(x, y, radius, 0, Math.PI * 2);
  //   ctx.closePath();
  //   ctx.fill();
    
  // }
  
  // function breakImgPoint(x,y){
    
  //    const maxRadius = Math.sqrt(
  //     Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
  //    );
  //    let rippleSpeed = maxRadius / 1500;
    
  // //    ctx.fillStyle="white";
  // //    ctx.fillRect(x,y,50,50);
  //    rippleEffect(100,x,y);
  // }
  
  
  // function draw() {
  
  //   clear();
  //   ball.draw();
  //   ball.x += ball.vx;
  //   ball.y += ball.vy;
    
  //    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  //     ball.vy = -ball.vy;
  //   }
  //   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  //     ball.vx = -ball.vx;
  //   }
  // }
  
  
  // function nowPosition(e){
  //   clear();
  //       ball.x = e.clientX;
  //       ball.y = e.clientY;
  //       breakImgPoint(ball.x,ball.y);
  //       ball.draw();
  // }
  
  // canvas.addEventListener(
  //   'mousemove', 
  //   nowPosition
  // )
  
  // canvas.addEventListener('click', ()=>{
   
  //   canvas.removeEventListener(
  //     'mousemove', 
  //     nowPosition 
  //   );
  //   // running = false;
  // })
  
  // canvas.addEventListener('dblclick',()=>{
  //   canvas.addEventListener(
  //     'mousemove', 
  //     nowPosition
  //   )
  // });
  // ball.draw();
  