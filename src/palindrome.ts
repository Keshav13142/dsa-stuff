const isNumberPanlindrome = (input: number) => {
  if (input < 0) return false;
  return input.toString().split("").reverse().join("") === input.toString();
};

console.log(isNumberPanlindrome(10));
