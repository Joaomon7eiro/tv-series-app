export default function removeHtmlFromString(value: string) {
  if ((value === null) || value === '') {
    return '';
  }
  return value.replace(/<(.|\n)*?>/g, '');
}