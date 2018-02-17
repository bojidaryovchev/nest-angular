export function replace(text: string, searchValue: string | RegExp, replaceValue: string): string {
  if (typeof searchValue === 'string') {
    while (text.includes(searchValue as string)) {
      text = text.replace(searchValue, replaceValue);
    }
  } else {
    let match: RegExpMatchArray = (searchValue as RegExp).exec(text);

    while (match) {
      text = text.replace(searchValue, replaceValue);
      match = (searchValue as RegExp).exec(text);
    }
  }

  return text;
}