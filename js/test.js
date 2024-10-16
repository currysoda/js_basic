// test.js
// 테스트 코드

describe("자연수 확인",() => {

    it("n이 음수일 때 결과는 NaN입니다.", function() {
        assert.isNaN(pow(2, -1));
    });
    
      it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
        assert.isNaN(pow(2, 1.5));
    });
})


describe("pow function 실행", function() {

    before(() => console.log("테스트를 시작합니다 - 테스트가 시작되기 전"));
    after(() => console.log("테스트를 종료합니다 - 테스트가 종료된 후"));
  
    beforeEach(() => console.log("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
    afterEach(() => console.log("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

    it("2를 세 번 곱하면 8입니다.", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3을 네 번 곱하면 81입니다.", function() {
        assert.equal(pow(3,4), 81);
    });
});