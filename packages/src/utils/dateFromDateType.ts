export enum ETimeFromat {
  HM = "HM",
  HMS = "HMS",
}

export function dateFromDateType(dateStr: Date, isTimeRequired?: ETimeFromat) {
  const date = new Date(dateStr);
  const day =
    `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : date.getDate();
  const month =
    `${date.getMonth() + 1}`.length === 1
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const year = date.getFullYear();

  const hours =
    `${date.getHours()}`.length === 1
      ? `0${date.getHours()}`
      : `${date.getHours()}`;

  const minutes =
    `${date.getMinutes()}`.length === 1
      ? `0${date.getMinutes()}`
      : `${date.getMinutes()}`;

  const seconds =
    `${date.getSeconds()}`.length === 1
      ? `0${date.getSeconds()}`
      : `${date.getSeconds()}`;

  let time;

  switch (isTimeRequired) {
    case ETimeFromat.HM:
      time = `${hours}:${minutes}`;
      break;
    case ETimeFromat.HMS:
      time = `${hours}:${minutes}:${seconds}`;
      break;
    default:
      time = "";
      break;
  }

  return `${day}.${month}.${year} ${time}`;
}
