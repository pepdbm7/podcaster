const formatDigits = (num: number) => (num < 10 ? `0${num}` : num);

export const getFormattedDate = (date: Date | string): string => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;

  return `${formatDigits(day)}/${formatDigits(
    month
  )}/${currentDate.getFullYear()}`;
};

export const getFormattedMinutes = (milliseconds: number): string => {
  let seconds = milliseconds / 1000;

  const hours = parseInt(`${seconds / 3600}`); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  const minutes = parseInt(`${seconds / 60}`); // 60 seconds in 1 minute
  seconds = Math.round(seconds % 60);

  return (
    formatDigits(hours) +
    ":" +
    formatDigits(minutes) +
    ":" +
    formatDigits(seconds)
  );
};

export const isTimestampExpired = (timestamp: number) => {
  if (!timestamp) return false;

  const current = Date.now();
  const diffInMilliseconds = current - timestamp;
  const diffInHours = diffInMilliseconds / (3600 * 1000);

  return diffInHours > 24;
};
