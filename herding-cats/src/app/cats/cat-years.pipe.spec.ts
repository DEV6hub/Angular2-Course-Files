import {CatYearsPipe} from "./cat-years.pipe";

describe("CatYearsPipe", () => {

  it("should take a Date and return a number", () => {
    let pipe = new CatYearsPipe();
    let sample: Date = new Date();
    sample.setFullYear(1999, 3, 20);
    expect(pipe.transform(sample)).toEqual(122); // 17 years * 7 = 122
  });
});
