'use strict';

/*
基本的な宣言
*/
  // プロパティ名（キー）はクォートを省略することが可能
  const obj = {
    // キー: 値
    key: "value"
  };

  const name = "名前";
  // `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
  // 以下のように省略できる
  const obj = {
      name
  };
  console.log(obj); // => { name: "名前" }

  // プロパティのアクセスにはドット記法とブラケット記法があるが、ブラケット記法は以下のように変数も使える。
  // 基本的には簡潔なドット記法 . を使い、ドット記法出かけない場合は、ブラケット記法をつかうと良い。

  const languages = {
    ja: "日本語",
    en: "英語"
  };
  const myLang = "ja";
  console.log(languages[myLang]); // => "日本語"


/*
分割代入
*/
  const languages = {
    ja: "日本語",
    en: "英語"
  };
  const { ja, en } = languages;
  console.log(ja); // => "日本語"
  console.log(en); // => "英語"

  /*
  オブジェクトのプロパティの削除
  */
  const obj = {
    key1: "value1",
    key2: "value2"
  };
  // key1プロパティを削除
  delete obj.key1;
  // key1プロパティが削除されている
  console.log(obj); // => { "key2": "value2" }

/*
オブジェクトのプロパティの変更の防止
ただし、strictモードのみ
*/
  const object = Object.freeze({ key: "value" });
  // freezeしたオブジェクトにプロパティを追加や変更できない
  object.key = "value"; // => TypeError: "key" is read-only

/*
プロパティの存在確認は
１，in 演算子
２，hasOwnPropertyメソッド
３，Optional chaining演算子( ?.)
のどれかをつかう
*/

  // in
  const obj = { key: undefined };
  // `key`プロパティを持っているならtrue
  if ("key" in obj) {
      console.log("`key`プロパティは存在する");
  }

  // hasOwnProperty
  const obj = { key: "value" };
  // `obj`が`key`プロパティを持っているならtrue
  if (obj.hasOwnProperty("key")) {
      console.log("`object`は`key`プロパティを持っている");
  }

  // ?.
  function printWidgetTitle(widget) {
    const title = widget?.window?.title ?? "未定義";
    console.log(`ウィジェットのタイトルは${title}です`);
  }
  printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
  }); // "ウィジェットのタイトルはBook Viewerです" と出力される
  printWidgetTitle({
    // タイトルが定義されてない空のオブジェクト
  }); // "ウィジェットのタイトルは未定義です" と出力される

  // 以下のようにも書ける
  const languages = {
    ja: {
        hello: "こんにちは！"
    },
    en: {
        hello: "Hello!"
    }
  };
  const langJapanese = "ja";
  const langKorean = "ko";
  const messageKey = "hello";
  // Optional chaining演算子（`?.`）とブラケット記法を組みわせた書き方
  console.log(languages?.[langJapanese]?.[messageKey]); // => "こんにちは！"
  // `languages`に`ko`プロパティが定義されていないため、`undefined`を返す
  console.log(languages?.[langKorean]?.[messageKey]); // => undefined


/*
オブジェクトの静的メソッド
１，Object.keys()
２，Object.values()
３，Object.entries()
*/

  // 例 Object.keys()
  const obj = {
    "one": 1,
    "two": 2,
    "three": 3
  };
  const keys = Object.keys(obj);
  keys.forEach(key => {
    console.log(key);
  });
  // 次の値が順番に出力される
  // "one"
  // "two"
  // "three"


/*
オブジェクトのマージ
１，Object.assignメソッド
２，スプレッド構文
*/

  //Object.assign
  const objectA = { a: "a" };
  const objectB = { b: "b" };
  const merged = Object.assign({}, objectA, objectB);
  console.log(merged); // => { a: "a", b: "b" }

  //既存のオブジェクトを壊してしまうため、空のオブジェクトを対象にして使うのが基本である。
  //ちなみにマージした時にプロパティ名が被っていたときは、後ろのプロパティで上書きされる。
  // `version`のプロパティ名が被っている
  const objectA = { version: "a" };
  const objectB = { version: "b" };
  const merged = Object.assign({}, objectA, objectB);
  // 後ろにある`objectB`のプロパティで上書きされる
  console.log(merged); // => { version: "b" }


  //スプレッド構文
  const objectA = { a: "a" };
  const objectB = { b: "b" };
  const merged = {
      ...objectA,
      ...objectB
  };
  console.log(merged); // => { a: "a", b: "b" }p
  // また新しいプロパティ名を書くことも可能
  const objectA = { version: "a" };
  const objectB = { version: "b" };
  const merged = {
      ...objectA,
      ...objectB,
      other: "other"
  };
  // 後ろにある`objectB`のプロパティで上書きされる
  console.log(merged); // => { version: "b", other: "other" }


/*
オブジェクトの複製
以下、シャローコピーのため、ディープコピーはライブラリを使おう
*/
  // 引数の`obj`を浅く複製したオブジェクトを返す
  const shallowClone = (obj) => {
    return Object.assign({}, obj);
  };
  const obj = { a: "a" };
  const cloneObj = shallowClone(obj);
  console.log(cloneObj); // => { a: "a" }
  // オブジェクトを複製しているので、異なるオブジェクトとなる
  console.log(obj === cloneObj); // => false