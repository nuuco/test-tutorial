
describe('간단한 테스트', () => {
    test('2더하기 2는 4', () => {
        expect(2 + 2).toBe(4);
    });

    it('2 빼기 1은 1', () => {
        expect(2 - 1).toBe(1);
    })
    
})


//test 함수와 it 함수는 역할이 같다.
//describe 함수를 사용하면 it 이나 test 함수를 하나 파일에 여러 개 포함할 수 있다.
//describe 함수 블록은 Test Suites 라고 불린다. 
//test/it 함수 블록은 Test(TestCase) 라고 불린다.
//toBe() : expect 함수에서 지정한 값이 toBe 함수에 지정한 값과 일치하는지 체크.