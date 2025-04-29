export const formatDate = (date: Date | number | string) => {
  const dateObject = date instanceof Date ? date : new Date(date);

  return dateObject.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
