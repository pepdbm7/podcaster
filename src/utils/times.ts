export const getFormattedDate = (date: Date | string): string => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${currentDate.getFullYear()}`;
};

export const getFormattedMinutes = (milliseconds: number): string => {
  const totalSeconds = Math.trunc(milliseconds / 1000);
  const minutes = Math.trunc(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
