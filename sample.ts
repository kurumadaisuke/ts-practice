// number型
let age: number = 22;
let height = 180.5;
let hex: number = 0xff; // 16進数
let notNumber: number = NaN; // 非数
let positveInfnity: number = Infinity; // 無限大

// string型
let firstName: string = "Alice";
let greetiong = "Hello"; // 型推論
let Message = "my name is ${firstName}"; // 型推論

// boolean型
let lsCompleted: boolean = false;
let isValid = true; //型推論

// リテラル型
const auditAge = 18; // リテラル型（18と定義 再代入不可）

// ユニオン型
let id: number | string;
let role: number | string | boolean;

// 型エイリアス
type Role = number | string; // 型エイリアスを定義
let firstRole: Role; // 型エイリアスを利用

// オブジェクト型
let book: {
  title: string;
  author: string;
  published: number;
} = {
  title: "こころ",
  author: "夏目漱石",
  published: 1914,
};

type Book = {
  title: string;
  author: string;
  published: number;
};

const book_2: Book = {
  title: "こころ",
  author: "夏目漱石",
  published: 1914,
};
