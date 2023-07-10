export const capitalFirstLetter = (str) => str?.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

export function numberFormat(no) {
  var str = no + '';
  var ar = [];
  var i = str.length - 1;

  while (i >= 0) {
    ar.push((str[i - 2] || '') + (str[i - 1] || '') + (str[i] || ''));
    i = i - 3;
  }
  return ar.reverse().join('.');
}

export function currencyFormat(no, currency) {
  if (typeof no === 'undefined') return 'Rp';
  var ar = (+no).toFixed(0).split('.');
  const format = [numberFormat(ar[0] | 0), '', ar[1]].join('');

  return `${currency ? currency : 'Rp '}${format}`;
}
