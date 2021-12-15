export default function removeHtmlFromString(value: string) {
  if (!value) {
    return '';
  }
  return value.replace(/<(.|\n)*?>/g, '');
}
