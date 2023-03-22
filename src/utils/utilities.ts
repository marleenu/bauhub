export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: Date) {
  if (!dateString) {
    return '';
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString(['en'], options);
}
