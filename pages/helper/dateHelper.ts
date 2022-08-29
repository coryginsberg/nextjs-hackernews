export function calculateHowLongAgo(time: number): string {
  const date = new Date(time * 1000);
  const currentTime = new Date();
  console.warn(date);
  if (currentTime.getDay() - date.getDay() > 0) {
    return Math.floor(currentTime.getDay() - date.getDay()) + " days";
  } else if (currentTime.getHours() - date.getHours() > 0) {
    return Math.floor(currentTime.getHours() - date.getHours()) + " hours";
  } else if (currentTime.getMinutes() - date.getMinutes() > 0) {
    return (
      Math.floor(currentTime.getMinutes() - date.getMinutes()) + " minutes"
    );
  } else {
    return (
      Math.floor(currentTime.getSeconds() - date.getSeconds()) + " seconds"
    );
  }
}
