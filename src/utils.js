// ChatGPT wrote this function btw :)
export default function convertISOToCustomFormat(isoTime) {
  const dateObj = new Date(isoTime);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear().toString().slice(-4);
  let hours = dateObj.getHours();
  let ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  const minutes = dateObj.getMinutes();

  const formattedDate = `${day} ${month} ${year}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return `${formattedDate} @ ${formattedTime}`;
}

export function filterDateTimeBeforeToday(activities) {
  const currentDate = new Date();
  const halfDayAgo = new Date(currentDate.getTime() - 12 * 60 * 60 * 1000);
  const filteredActivities = activities.filter((activity) => {
    const testDate = new Date(activity.dateTime);
    return testDate >= halfDayAgo;
  });
  return filteredActivities;
}

export function filterDateTimeAfterToday(activities) {
  const currentDate = new Date();
  const filteredActivities = activities.filter((activity) => {
    const testDate = new Date(activity.dateTime);
    return testDate <= currentDate;
  });
  return filteredActivities;
}
