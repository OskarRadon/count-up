describe("countUp", function() {
  it("will count to a given number", function() {
    expect(countUp(10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
