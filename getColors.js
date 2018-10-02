const path = require('path');
const getColors = require('get-image-colors');

const getRedCup = async function() {
  let colors = await getColors(path.join(__dirname, 'redCup.jpg'));
  return colors;
};

async function getAllColors() {
  let colors = await getRedCup();
  for (let i = 0; i < colors.length; i++) {
    if (
      colors[i]._rgb[0] === 153 &&
      colors[i]._rgb[1] === 12 &&
      colors[i]._rgb[2] === 16
    ) {
      return true;
    }
  }
  return false;
}

(async () => {
  console.log(await getAllColors());
})();

export default getAllColors
