// utilはdefault export したくない時あるから無視
/* eslint-disable */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
