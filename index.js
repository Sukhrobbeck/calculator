// First row

const result = document.querySelector(".result"),
  cButton = document.querySelector(".c_button"),
  delButton = document.querySelector(".del_button"),
  dot = document.querySelector(".dot_button"),
  divideButton = document.querySelector(".divide_button");

//  Delete all fnc

cButton.addEventListener("click", () => {
  return (result.value = "");
});

// Delete Number fnc

delButton.addEventListener("click", () => {
  var delNum = result.value.toString().slice(0, -1);
  result.value = delNum;
  return delNum;
});

// Putting dot

dot.addEventListener("click", () => {
  return (result.value += ".");
});

// Dividing

divideButton.addEventListener("click", () => {
  return (result.value += "/");
});

// Second row

const seven = document.querySelector(".seven"),
  eight = document.querySelector(".eight"),
  nine = document.querySelector(".nine"),
  multiply = document.querySelector(".multiply");

//   Seven

seven.addEventListener("click", () => {
  return (result.value += "7");
});

// Eight

eight.addEventListener("click", () => {
  return (result.value += "8");
});

// Nine

nine.addEventListener("click", () => {
  return (result.value += "9");
});

// Multiply

multiply.addEventListener("click", () => {
  return (result.value += "*");
});

// Third row

const four = document.querySelector(".four"),
  five = document.querySelector(".five"),
  six = document.querySelector(".six"),
  plus = document.querySelector(".plus");

//   Four

four.addEventListener("click", () => {
  return (result.value += "4");
});

//   Five

five.addEventListener("click", () => {
  return (result.value += "5");
});

// Six

six.addEventListener("click", () => {
  return (result.value += "6");
});

// Plus

plus.addEventListener("click", () => {
  return (result.value += "+");
});

// Fourth row

const one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three"),
  minus = document.querySelector(".minus");

// One
one.addEventListener("click", () => {
  return (result.value += "1");
});

// Two

two.addEventListener("click", () => {
  return (result.value += "2");
});

// Three

three.addEventListener("click", () => {
  return (result.value += "3");
});

// Minus

minus.addEventListener("click", () => {
  return (result.value += "-");
});

// Fifth row

const doubleZero = document.querySelector(".double_zero"),
  zero = document.querySelector(".zero"),
  equal = document.querySelector("#equal_sign");

//   Double Zero
doubleZero.addEventListener("click", () => {
  return (result.value += "00");
});

// Zero
zero.addEventListener("click", () => {
  return (result.value += "0");
});

// Equal

equal.addEventListener("click", () => {
  return (result.value = eval(result.value));
});
