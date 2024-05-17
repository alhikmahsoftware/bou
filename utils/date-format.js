// format date
export const formatDate = (dateString) => {
  const options = { day: "numeric", month: "short", year: "2-digit" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const [month, day, year] = formattedDate.split(" ");
  return `${day} ${month},${year}`;
};
