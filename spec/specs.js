describe("countUp", function() {
  it("will count to a given number", function() {
    expect(countUp(10, 1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("will count to a given number using a given multiple", function() {
    expect(countUp(10, 2)).to.eql([2, 4, 6, 8, 10]);
  });
});
