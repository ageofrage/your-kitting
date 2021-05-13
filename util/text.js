// 参考: https://hirakublog.com/code/353/
// utilはdefault export したくない時あるから無視
/* eslint-disable */
export const spanWrap = (selector, className = 'jsWrap', elementType = 'query') => {
  const target = () => {
    if(elementType === 'query'){
      return document.querySelector(selector);
    } else if(elementType === 'id'){
      return document.getElementById(selector);
    } else if( elementType === 'class'){
      return document.getElementsByClassName(selector)[0];
    }
  };
  const nodes = [...target().childNodes];
  let spanWrapText = '';

  nodes.forEach((node) => {
    if (node.nodeType == 3) { // テキストの場合
      const text = node.textContent.replace(/\r?\n/g, '');// テキストから改行コード削除
      // spanで囲んで連結
      spanWrapText += text.split('').reduce((acc, v) => `${acc}<span class="${className}">${v}</span>`, '');
    } else { // テキスト以外
      // <br>などテキスト以外の要素をそのまま連結
      spanWrapText += node.outerHTML;
    }
  });

  target().innerHTML = spanWrapText;
};
