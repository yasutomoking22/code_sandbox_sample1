// let
// letは上書可能、再宣言不可能
let var1 = "初期値は1";
var1 = "2に変更";
console.log(var1);

// const
// constは上書不可、オブジェクトのみ上書可能
const var2 = {
  name: "初期値",
  value: 1,
};
var2.value = 2;
console.log(var2);

const var3 = ["cat", "dog"];
var3.push("monkey");
console.log(var3);
