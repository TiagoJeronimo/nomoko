export const dataToInternationalisationKey = (dataString) => {
  console.log('dataString', dataString);
  return dataString.toLowerCase().replace(/\s/g, '');
};

export default dataToInternationalisationKey;
