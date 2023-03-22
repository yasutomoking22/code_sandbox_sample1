// let
// letは上書可能、再宣言不可能
let var1 = "初期値";
console.log(var1);

// const
// constは上書不可、オブジェクトのみ上書可能
const var2 = {
  name: "初期値",
  value: 1,
};
var2.value = 2;
console.log(var2);
