import moment from "moment";

export const compareDates = (date1: Date, date2?: Date) => {
  if (!date2) {
    return false;
  }
  const m1 = moment(date1);
  const m2 = moment(date2);

  return m1.format("DD MMMM YYYY") === m2.format("DD MMMM YYYY");
};
