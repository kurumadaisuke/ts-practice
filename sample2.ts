// 読み取り専用プロパティ
type ImutaclePerson = {
  readonly name: string;
  age: number;
};

const alice: ImutaclePerson = {
  name: "Alice",
  age: 30,
};

alice.name = "Jane";
// これは値の変更を許可できない

