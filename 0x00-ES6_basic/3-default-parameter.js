export default function getSumOfHoods(initialNumber = 0, expansion1989 = undefined, expansion2019 = undefined) {
    if (expansion1989 === undefined) {
      expansion1989 = 89;
    }
  
    if (expansion2019 === undefined) {
      expansion2019 = 19;
    }
    return initialNumber + expansion1989 + expansion2019;
}