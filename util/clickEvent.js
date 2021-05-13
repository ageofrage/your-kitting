export const pauseBackground = (pause = true) => {
  // 背景固定時はwindow.scrollYでは取得できないので、bodyのtopを取得する
  const pausePosition = pause ? window.scrollY : parseInt(document.body.style.top, 10) * -1;

  /* CAUTION:
  スプレッド構文ではセッターを起動しない(styleの一括指定ができない)
  Object.assignを使う
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
  */

  if(pause){
    Object.assign(document.body.style, {
      position: 'fixed',
      top: `-${pausePosition}px`,
      right: '0',
      bottom: '0',
      left: '0',
    })
  } else {
    Object.assign(document.body.style, {
      position: 'unset',
      top: 'unset',
      right: 'unset',
      bottom: 'unset',
      left: 'unset',
    })
    window.scrollTo(0, pausePosition)
  }
};
