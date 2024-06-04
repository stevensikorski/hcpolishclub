export const formatTime = (date: Date): string => {
  let hours: number = date.getUTCHours();
  let minutes: number = date.getUTCMinutes();
  const ampm: string = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes: string = minutes < 10 ? "0" + minutes : minutes.toString();
  return `${hours}:${formattedMinutes}${ampm}`;
};

export const isTimeAfter = (date1: string, date2: string): boolean => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 > d2;
};
