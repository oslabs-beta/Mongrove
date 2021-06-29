function validateSchema(schema) {

  const supportedTypes = {
    String: true,
    Number: true,
    Boolean: true,
    Date: true,
    Array: true,
    Decimal128: true
  }

  schema = schema.trim();
  if (schema[0] !== '{' || schema[schema.length - 1] !== '}') return false;
  schema = schema.slice(1, -1);
  let pairs = schema.split(",");

  for (let i = 0; i < pairs.length; i++) {
    if (!(/^[a-zA-Z:\s]*$/).test(pairs[i])) return false;
    let curPair = pairs[i].split(":");
    if (curPair.length !== 2) return false;
    for (let j = 0; j < curPair.length; j++) {
      let curWord = curPair[j].trim();
      if (j === 1 && !supportedTypes.hasOwnProperty(curWord)) return false;
      if ((!(/^[a-zA-Z]*$/).test(curWord))) return false;
    }
  }

  return true;
}