function newSlidePositionByOffset(currentSlidePosition, offset) {
  let newSlidePosition = currentSlidePosition + offset;
  if (newSlidePosition > 3) {
    newSlidePosition = 1;
  }
  if (newSlidePosition < 1) {
    newSlidePosition = 3;
  }
  return newSlidePosition;
}

export { newSlidePositionByOffset };
