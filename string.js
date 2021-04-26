/* # 文字列

## テンプレートリテラル


const multiline = ` １行目
２行目
３行目
`;
consone.log(multiline);

同じ記号が出た場合は、バックスラッシュでエスケープできる（\）

また、バックスラッシュを入力したい場合は、 `\\`  と二回バックスラッシュを打つ。

変数は以下で展開できる


const name = "JavaScript";
console.log(`Hello ${name}!`);

## 「JavaScriptの文字列の各要素はUTF-16のCode Unitで構成されている」

## 文字列の分解と結合

`String#split` メソッドは、第１引数に指定した区切り文字で文字列を分解した配列を返す。


const strings = "赤・青・緑".split("・");
console.log(strings); // => ["赤", "青", "緑"]

下記で、区切り文字を・から、へ変換する処理をかける！！


const str = "赤・緑・青".split("・").join("、");
consle.log(str); // => "赤、青、緑"

`String#split` メソッドの第１引数には正規表現も指定できる！


// 文字間に1つ以上のスペースがある
const str = "a     b    c      d";
// 1つ以上のスペースにマッチして分解する
const strings = str.split(/\s+/);
console.log(strings); // => ["a", "b", "c", "d"]

## 文字列の一部を取得


const str = "ABCDE";
console.log(str.slice(1)); // => "BCDE"
console.log(str.slice(1, 5)); // => "BCDE"
// マイナスを指定すると後ろからの位置となる
console.log(str.slice(-1)); // => "E"
// インデックスが1から4の範囲を取り出す
console.log(str.slice(1, 4)); // => "BCD"
// 第一引数 > 第二引数の場合、常に空文字列を返す
console.log(str.slice(4, 1)); // =>

指定するインデックスは0以上にして、第二引数を指定する場合は第一引数の位置 < 第二引数の位置にする

sliceメソッドとsubstringメソッドはどちらも非破壊的で機能も似ているため、どちらでもよい。

## 文字列の検索

- マッチした箇所のインデックスを取得
- マッチした文字列の取得
- マッチしたかどうかの真偽値を取得

### インデックス

`String#indexOf` メソッド と `String#lastIndexOf` メソッドは、指定した文字列で検索し、その文字列が最初に現れたインデックスを返す。


const str = "にわにはにはにわとりがいる"
console.log(str.indexOf("にわ")); // => 0 先頭を返している
console.log(str.lastIndexOf("にわ")); // => 6 後ろから数えて６番目

### 文字列にマッチした文字列の取得


const str = "JavaScript";
const searchWord = "Script";
const index = str.indexOf(searchWord);
if (index !== -1) {
    console.log(`${searchWord}が見つかりました`);
} else {
    console.log(`${searchWord}は見つかりませんでした`);
}

### 文字列があるかどうかの真偽値の取得

- `String#startsWith(検索文字列)`: 検索文字列が先頭にあるかの真偽値を返す

    [ES2015]

- `String#endsWith(検索文字列)`: 検索文字列が末尾にあるかの真偽値を返す

    [ES2015]

- `String#includes(検索文字列)`: 検索文字列を含むかの真偽値を返す

    [ES2015]

## 正規表現

正規表現リテラルはコードを書いた時点で決まったパターンの正規表現オブジェクトを作成する構文です。 一方で、RegExpコンストラクタは変数と組み合わせるなど、実行時に変わることがあるパターンの正規表現オブジェクトを作成できます。
*/