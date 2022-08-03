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