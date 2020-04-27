export const getPoints = (money) => {
  let points = 0;
  if (money > 50) {
    points += Math.min(100, money) - 50;
  }
  if (money >= 100) {
    points += 2 * (money - 100);
  }
  return points;
};
