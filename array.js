'use strict';

/*
存在しないインデックスにアクセスした場合、
undefinedを返す
*/
const array = ["one", "two", "three"];
console.log(array[100]); // => undefined

//未定義の要素も含められる
const sparseArray = [1,, 3];
console.log(sparseArray.length); // => 3
console.log(sparseArray[1]); // => undefined

/*
オブジェクトかどうかの判定
*/
const obj = {};
const array = [];
console.log(Array.isArray(obj)); // => false
console.log(Array.isArray(array)); // => true

/*
配列の分割代入
*/
const array = ["one", "two", "three"];
const [first, second, third] = array;
console.log(first);  // => "one"
console.log(second); // => "two"
console.log(third);  // => "three"

/*
undefinedと未定義の要素の違いを見つける方法
*/
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
// 要素自体は`undefined`値が存在する
console.log(denseArray.hasOwnProperty(1)); // => true
// 要素自体がない
console.log(sparseArray.hasOwnProperty(1)); // => false


/*
配列の検索
１，その要素のインデックスが欲しい場合
２，その要素自体が欲しい場合
３，指定範囲の要素を取得したい場合
４，その要素が含まれているかという真偽値がほしい場合
*/

// 1, indexOf, findIndex
  const array = ["Java", "JavaScript", "Ruby"];
  const indexOfJS = array.indexOf("JavaScript");
  console.log(indexOfJS); // => 1
  console.log(array[indexOfJS]); // => "JavaScript"
  // "JS" という要素はないため `-1` が返される
  console.log(array.indexOf("JS")); // => -1

  //indexOfメソッドは配列からプリミティブな要素を発見できるが、オブジェクトは持っているプロパティが同じでも別オブジェクトとして扱われる。
  const obj = { key: "value" };
  const array = ["A", "B", obj];
  console.log(array.indexOf({ key: "value" })); // => -1
  // リテラルは新しいオブジェクトを作るため、異なるオブジェクトだと判定される
  console.log(obj === { key: "value" }); // => false
  // 等価のオブジェクトを検索してインデックスを返す
  console.log(array.indexOf(obj)); // => 2

  //findIndexメソッドで解決
  // colorプロパティを持つオブジェクトの配列
  const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
  ];
  // `color`プロパティが"blue"のオブジェクトのインデックスを取得
  const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
  });
  console.log(indexOfBlue); // => 2
  console.log(colors[indexOfBlue]); // => { "color": "blue" }

// 2, find
// colorプロパティを持つオブジェクトの配列
const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトを取得
const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor); // => { "color": "blue" }
// 該当する要素がない場合は`undefined`を返す
const whiteColor = colors.find((obj) => {
  return obj.color === "white";
});
console.log(whiteColor); // => undefined

// 3, slice
const array = ["A", "B", "C", "D", "E"];
console.log(array.slice(1, 4)); // => ["B", "C", "D"]
console.log(array.slice(1)); // => ["B", "C", "D", "E"]
console.log(array.slice(-1)); // => ["E"]
console.log(array.slice(1, 1)); // => []
console.log(array.slice(4, 1)); // => []    



// 4, includes, some
const array = ["Java", "JavaScript", "Ruby"];
// `includes`は含まれているなら`true`を返す
if (array.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
}

// ただし、indexOfメソッドと同様、異なるオブジェクトだが値が同じものを見つけたい場合には利用できない。

// その場合はsomeメソッドをつかう。
//someメソッドはfindの true or false のバージョンである。

const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
const isIncludedBlueColor = colors.some((obj) => {
    return obj.color === "blue";
});
console.log(isIncludedBlueColor); // => true

