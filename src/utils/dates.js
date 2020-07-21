import moment from "moment";

export const getTime = (date) => {
  let d = new Date(date);
  return d.toString().slice(0, 21);
};

export const scheduleCombineDate = (values) => {
  if (values.performed_time && values.performed_at) {
    const date = values.performed_at;
    const time = values.performed_time;

    const dateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm:ss").format();
    return new Date(dateTime).toISOString();
  } else {
    return null;
  }
};
export const stopAtCombineDate = (values) => {
  if (values.stop_date && values.stop_time) {
    const date = values.stop_date;
    const time = values.stop_time;

    const dateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm:ss").format();
    return new Date(dateTime).toISOString();
  } else {
    return "";
  }
};

export const isImage = (schedule) => {
  let check = ["jpg", "gif", "png"].filter(
    (ext) => ext === schedule.slice(schedule.length - 3).toLowerCase()
  );
  if (check.length > 0) {
    return true;
  } else {
    return false;
  }
};
