import moment from "moment";

export const equalsDates = (date1: Date, date2?: Date) => {
  if (!date2) {
    return false;
  }
  const m1 = moment(date1);
  const m2 = moment(date2);

  return m1.isAfter(m2) || m1.isSame(m2);
};

export const moreThanDate = (date1: Date, date2?: Date) => {
  if (!date2) {
    return false;
  }
  const m1 = moment(date1);
  const m2 = moment(date2);

  return m2.isAfter(m1);
};
