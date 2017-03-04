function camelize(string) {
  return string.replace(/-(.)/g, (_, character) => character.toUpperCase())
}

export default function convertSitepackIdToJunctionsKey(id) {
  return camelize(id.replace(/\.[a-zA-Z\.]+$/, '').replace('.', '-').split('/').reverse()[0])
}
