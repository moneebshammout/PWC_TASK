/**
 * Fetches a city longitude and latitude.
 *
 * @param {string} city City name.
 *
 * @return {Promise<Array<object>|[]>} Map coords. array.
 */
export const getMapCoordinates = async (city) => {
  const { REACT_APP_POSITION_KEY } = process.env;
  try {
    const result = await fetch(
      `http://api.positionstack.com/v1/forward?query=${city}&access_key=${REACT_APP_POSITION_KEY}`
    );
    const jsonData = await result.json();
    return jsonData.data;
  } catch (error) {
    return [];
  }
};
