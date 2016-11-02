const React = require('react');
import $ from 'jquery'

import anime from 'anime'

class Circle {
  constructor(opt) {
    for(var key in opt) {
      if(opt.hasOwnProperty(key)) {
        this[key] = opt[key];
      }
    }
  }

  draw(ctx) {
    ctx.globalAlpha = this.opacity || 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    if (this.stroke) {
      ctx.strokeStyle = this.stroke.color;
      ctx.lineWidth = this.stroke.width;
      ctx.stroke();
    }
    if (this.fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    ctx.closePath();
    ctx.globalAlpha = 1;
  }

}

function calcPageFillRadius(cW, cH, x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

export default class Background extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.color.current.hex != this.currentColor) {
      this.anime(nextProps.color.current.hex, nextProps.pointer.x, nextProps.pointer.y);
    }
  }
  componentDidMount() {
    // init canvas
    this.$canvas = $(this.canvas);
    this.setCanvasSize();
    $(window).resize(this.setCanvasSize.bind(this));
    this.initAnime();
  }
  setCanvasSize() {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvasContext = this.canvas.getContext('2d');
  }
  // initAnime
  initAnime() {
    this.animations = [];
    this.currentColor = "#fffee9";

    anime({
      duration: Infinity,
      update: () => {
        this.canvasContext.fillStyle = this.currentColor;
        this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.animations.forEach((anim) => {
          anim.animatables.forEach((animatable) => {
            animatable.target.draw(this.canvasContext);
          });
        });
      }
    });
  }
  removeAnimation(animation) {
    var index = this.animations.indexOf(animation);
    if (index > -1) this.animations.splice(index, 1);
  }
  anime(nextColor, clientX, clientY) {
    
    let currentColor = this.currentColor;

    let targetR = calcPageFillRadius(this.canvasWidth, this.canvasHeight, clientX, clientY);
    let rippleSize = Math.min(200, (this.canvasWidth * .4));
    let minCoverDuration = 750;
    
    let pageFill = new Circle({
      x: clientX,
      y: clientY,
      r: 0,
      fill: nextColor
    });
    let fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: () => {
        this.currentColor = pageFill.fill;
        this.removeAnimation(fillAnimation);
      }
    });
    
    let ripple = new Circle({
      x: clientX,
      y: clientY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    let rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: this.removeAnimation.bind(this)
    });
    
    let particles = [];
    for (let i=0; i<32; i++) {
      let particle = new Circle({
        x: clientX,
        y: clientY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    let particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      complete: this.removeAnimation.bind(this)
    });
    this.animations.push(fillAnimation, rippleAnimation, particlesAnimation);
  }

  render() {
    return (
      <canvas id="background" ref={(c) => this.canvas = c}
      ></canvas>
    )
  }
}