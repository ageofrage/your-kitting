export default class CssVar {
  static get(cssVar, isInt = false) {
    const cssVarStr = String(
      getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim(),
    );

    if (cssVarStr && isInt) {
      return parseInt(cssVarStr, 10);
    }
    if (cssVarStr && !isInt) {
      return cssVarStr;
    }
    return false;
  }

  static set(cssVarObj) {
    if (typeof cssVarObj === 'object') {
      Object.entries(cssVarObj).forEach(([key, val]) => {
        document.querySelector(':root').style.setProperty(key, val);
      });
    } else {
      console.error('cssVarObj must be object');
    }
  }
}
