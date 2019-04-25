export default function copy(str: string) {
  const tmp = document.createElement('textarea');
  const focus = document.activeElement;

  tmp.value = str;

  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
  if (focus instanceof HTMLElement) {
    focus.focus();
  }
}
