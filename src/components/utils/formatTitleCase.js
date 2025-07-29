// utils/formatTitleCase.js
export function toFormalCase(str) {
  const lowercaseWords = ['in', 'of', 'and', 'the', 'for', 'on', 'at', 'to', 'with'];

  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index !== 0 && lowercaseWords.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
