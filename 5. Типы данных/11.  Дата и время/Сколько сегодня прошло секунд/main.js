function getSecondsToday() {
  let d = new Date();
  return `Сегодня прошло ${d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()} секунд`;
}