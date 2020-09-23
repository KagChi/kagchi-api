const axios = require("axios");

async function id(query) {
    if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://kagchi-api.glitch.me/brainly/id?q=' + query)
  return data;
}

async function pl(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://kagchi-api.glitch.me/brainly/pl?q=' + query)
  return data;
}

async function pt(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://kagchi-api.glitch.me/brainly/pt?q=' + query)
  return data;
}

async function us(query) {
  if (!query) throw Error('Please enter question!');
   const data = await axios.get('https://kagchi-api.glitch.me/brainly/us?q=' + query)
  return data;
}

async function info() {
    const data = {
     id: "indonesia",
     pt: "portuguese",
     pl: "poland",
     us: "united states",
    }
    return data;
}

module.exports = { id, pl, pt ,us, info}
