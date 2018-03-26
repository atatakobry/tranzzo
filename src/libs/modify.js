import { min, every } from 'lodash';

function _isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
}

function _areSameType(a, b) {
  return (_isVowel(a) && _isVowel(b)) || (!_isVowel(a) && !_isVowel(b));
}

function _isFinish(str) {
  if (!str || !str.length) {
    return true;
  }

  const type = _isVowel(str[0]);

  return every(str, char => _isVowel(char) === type)
}

function _same(str1, str2) {
  let samePart = '';
  const length = min([str1.length, str2.length]);

  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      samePart += str1[i];
    } else {
      return samePart;
    }
  }

  return samePart;
}

function _diff(str, substr) {
  const index = str.indexOf(substr);

  if (index !== -1) {
    return str.slice(index + substr.length, str.length);
  }

  return '';
}

function modify(string) {
  let result = string;
  let length = result.length;
  let i = 0;

  while (i < length - 1) {
    if (_areSameType(result[i], result[i + 1])) {
      const _result = result;

      result = result.slice(0, i + 1) + result.slice(i + 2, length) + result[i + 1];

      if (_isFinish(_diff(result, _same(result, _result)))) {
        return result;
      }
    } else {
      i++;
    }
  }

  return modify(result);
}

export default modify;