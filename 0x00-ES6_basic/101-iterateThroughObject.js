export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((accumulator, currentValue) => `${accumulator} | ${currentValue}`);
}
