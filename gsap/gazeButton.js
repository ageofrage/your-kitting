import gsap from 'gsap';

/* CAUTION:
streetsmart-buttonというコンポーネントだけじゃなく、
buttonぽい見た目全てに適応してる。コンポーネントではなく、
別ディレクトリに移した方がわかりやすいかもしれない。
*/
export default class StreetsmartButton {
  constructor(className){
    this.buttons = Array.from(document.getElementsByClassName(className))
  }

  gazeAnimation(buttonEl, cursor, ease = "power2.easeOut"){
    const {x, y} = cursor;
    const {top, left, width, height} = buttonEl.getBoundingClientRect();
    const ox = left + (width / 2)
    const oy = top + (height / 2)
    const dx = x && x - ox
    const dy = y && y - oy
    const vec = (delta, adjust) => delta * Math.min(width, height) / adjust / 2

    gsap.to(buttonEl, {
      x: vec(dx, width),
      y: vec(dy, height),
      rotateX: vec(dy, height),
      rotateY: vec(dx, -width),
      duration: 1.0,
      ease: ease,
    });
  }

  setEvent(){
    this.buttons.forEach((button) => {
      button.addEventListener('mousemove', (e) => this.gazeAnimation(button, e))
      button.addEventListener('mouseleave', () => this.gazeAnimation(button, {x: 0, y: 0}, 'elastic.out'))
    })
  }
}
