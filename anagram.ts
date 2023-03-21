function checkIfAnagram(org: string, input: string): boolean {
  if (org.length !== input.length) return false;

  return org.split("").sort().join("") === input.split("").sort().join("");
}

function checkIfAnagramUsingObj(org: string, input: string): boolean {
  if (org.length !== input.length) return false;

  let obj1: Record<string, number> = {};
  let obj2: Record<string, number> = {};

  for (let i = 0; i < input.length; i++) {
    obj1[org[i]] = (obj1[org[i]] || 0) + 1;
    obj2[input[i]] = (obj2[input[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(checkIfAnagram("anagram", "gramana"));
