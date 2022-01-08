'use strict';

const extractSubstring = (str, prefix, sufix) => {
  const start = str.indexOf(prefix);
  const end = str.lastIndexOf(sufix);
  if (start === -1 && end === -1) return '';
  const substring = str.substring(start + 1, end);
  return substring;
};

const result = extractSubstring('Hello <username> and bye!', '<', '>');
console.log(result);
