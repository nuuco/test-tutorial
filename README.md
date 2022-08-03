# TDD (Test-driven Development) in React

## 📌 TDD

코드를 작성하기 전에 테스트를 쓰는 소프트웨어 개발 방법론

- **작은 단위의 테스트 케이스를 작성하고, 이를 통과하는 코드를 작성하는 과정을 반복하는 것**
- 총 3단계로 이루어진다.
    
    ![TDD 3단계](https://user-images.githubusercontent.com/89282099/182676992-dba4a5dd-0cc2-4b5e-8454-3b0a4c81363b.png)

    
    > ※ **1의 과정을 마치기 전까지 2 작업을 시작하면 안된다!**
    > 
    > 1. **Write Failing Test**: 실패하는 테스트 코드를 먼저 작성한다.
    > 2. **Make Test Pass:** 테스트 코드를 성공시키기 위한 실제 코드를 작성한다. (테스트를 통과할 정도의 최소 코드만 작성)
    > 3. **Refactor:** 중복 코드 제거, 일반화 등의 리팩토링을 수행한다.

<br/>

- **TDD를 사용하는 이유**
    
    ⇒ 예상치 못했던 버그를 줄여 소요 시간을 줄일 수 있다! 처음엔 속도가 느리다고 느낄 수 있으나 장기적으로 보면 처음부터 버그를 줄여가며 개발하는 것이 효율적이다.

## 📌 **Testing Library, Jest** - 리액트에서 테스트 하기

- Testing Library, Jest 둘다 React에서만 쓸 수 있는 라이브러리는 아니다.
- Testing Libarary와 Jest는 역할이 각각 다르기 때문에 React에 대한 테스트를 진행할 때는 어느 한쪽 라이브러리를 이용하는 것만으로는 테스트를 할 수 없다.
    
    ⇒ 둘 다 사용!
    

### 🧩 **Testing Library**

- Testing Library는 테스트를 실행하고 싶은 컴포넌트나 클릭 이벤트등 다양한 곳에 쓸 수 있다.
- Testing Libarary에서 React용 React Testing Library을 제공하고 있기 때문에, create-react-app을 이용하여 React 프로젝트를 생성하면 자동으로 Testing Libarary를 이용할 수 있다.

### 🧩 **Jest**

- Jest는 JavaScript의 Testing Framework / Test Runner로써, 테스트 파일을 자동으로 찾아 테스트를 실행하고, 테스트를 실행한 결과 기대만큼 올바른 값을 가지고 있는지 함수를 이용하여 체크하여 테스트가 성공인지 실패인지를 판단해 준다.
- Jest 에서도 Mocha(Node.js 테스트 프레임워크) 처럼 it, test, describe 메서드를 똑같이 사용한다.
    
    ```jsx
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
    ```
    
    ![테스트 실행 결과](https://user-images.githubusercontent.com/89282099/182677230-6af5fb16-e3dc-4061-a583-593e7e38f22d.png)
    

### 🧩 테스트 예시들

- App.test.js 기본 파일 테스트
    
    ```jsx
    import { render, screen } from '@testing-library/react';
    import App from './App';
    
    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/TEST/i);
      expect(linkElement).toBeInTheDocument();
    });
    
    //test() : Jest 함수로 테스트가 실행할 때 반드시 이용하는 함수
    //   - 첫 번째 인자 : 테스트가 어떤 내용인지, 테스트 설명
    //   - 두 번째 인자 : 하자고하는 테스트를 함수 형태로 넣는다.
    //
    // 1. 첫번째 줄을 보면, 테스트하고자 하는 컴포넌트를 render()함수로 전달하고 있다. 
    //    react-testing-library에서는 테스트를 진행할 컴포넌트를 render()함수의 인자로 전달한다.
    // 2. 두번째 줄에 있는 screen의 다양한 메소드 중 getByText() 메서드를 이용하여
    //    render()에서 가져온 App 컴포넌트 중 "learn react"라는 문자열이 있는지 확인하여 linkElement에 할당하고 있다. 
    //    (“i”는 Regular Expression으로 "i"를 붙임으로써 대소문자를 구분하지 않게 만들어 준다.)
    // 3. 세번째 줄에서는 expect 함수의 인자로 지정한 요소가 document.body에 존재하는지 
    //    toBeInTheDocument 함수를 사용하여 체크하고 있다. 
    //    여기서 toBeInTheDocument 함수는 matchers 함수라고 부른다.
    //    
    // test, expect -> Jest 함수
    // toBeInTheDocument -> Jest-dom 라이브러리의 Costom matchers
    // jset-dom 은 setupTest.js 에서 import 되고 있다.
    ```
    
- 컴포넌트 랜더(render)해서 이벤트 관련 테스트하기
    - screen : `render()`에서 가져온 컴포넌트 중 특정 요소를 가져올 수 있다.
    - fireEvent : 테스트 시 이벤트 작동 구현
    - expect(…) **.not.** toBeDisabled() → 이렇게 not 을 붙여 반대 상황 테스트 가능
    ```jsx
    import { fireEvent, render, screen } from "@testing-library/react"
    import Light from "./Light"

    describe("컴포넌트 테스트", () => {
        it("render Light Component", () => {
            render(<Light name="전원" />);
            const nameElement = screen.getByText(/전원 off/i);
            expect(nameElement).toBeInTheDocument();
        })

        test("off button disabled", () => {
            render(<Light name="전원" />);
            const offButtonElement = screen.getByRole("button", {name: "OFF"});
            //getByRole 로 버튼만 지정할 수 있다. 버튼이 2개이므로, name 을 이용해 특정하기
            expect(offButtonElement).toBeDisabled();
        })

        it("on button enable", () => {
            render(<Light name="전원" />);
            const onButtonElement = screen.getByRole("button", {name: "ON"});
            expect(onButtonElement).not.toBeDisabled();
            //not을 붙이면 toBeDisabled 가 아닐 때 통과
        })

        //클릭 이벤트 유무도 테스트로 구현 => fireEvent 사용
        //fireEvent 의 click 메서드에 전달인자로 테스트하고자 하는 요소 전달
        test("change from off to on", () => {
            render(<Light naem="전원" />);
            const onButtonElement = screen.getByRole('button', {name: "ON"});
            fireEvent.click(onButtonElement);
            expect(onButtonElement).toBeDisabled();
        })
    })
    ```