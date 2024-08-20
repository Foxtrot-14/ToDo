const formatDate = (dateStr: string): string => {
  const [, month, day] = dateStr.split("-").map(Number);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1];
  return `${day} ${monthName}`;
};
export default formatDate;