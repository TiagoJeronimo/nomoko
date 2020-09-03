const formatCoordinates = (point) => {
  const stringBetweenParentheses = point.substring(
    point.lastIndexOf('(') + 1,
    point.lastIndexOf(')'),
  );

  return stringBetweenParentheses.split(' ');
};

export const formatPropertiesData = (properties) => {
  const { Coordinates, BuildingType, Parking } = properties;
  return ({
    coordinates: formatCoordinates(Coordinates),
    buildingType: BuildingType,
    price: properties['Price/m^2'],
    parking: Boolean(Parking)
  });
}
