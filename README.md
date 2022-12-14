# TDD (Test-driven Development) in React

## ๐ย TDD

์ฝ๋๋ฅผ ์์ฑํ๊ธฐ ์ ์ ํ์คํธ๋ฅผ ์ฐ๋ ์ํํธ์จ์ด ๊ฐ๋ฐ ๋ฐฉ๋ฒ๋ก 

- **์์ ๋จ์์ ํ์คํธ ์ผ์ด์ค๋ฅผ ์์ฑํ๊ณ , ์ด๋ฅผ ํต๊ณผํ๋ ์ฝ๋๋ฅผ ์์ฑํ๋ ๊ณผ์ ์ ๋ฐ๋ณตํ๋ ๊ฒ**
- ์ด 3๋จ๊ณ๋ก ์ด๋ฃจ์ด์ง๋ค.
    
    ![TDD 3๋จ๊ณ](https://user-images.githubusercontent.com/89282099/182676992-dba4a5dd-0cc2-4b5e-8454-3b0a4c81363b.png)

    
    > โป **1์ ๊ณผ์ ์ ๋ง์น๊ธฐ ์ ๊น์ง 2 ์์์ ์์ํ๋ฉด ์๋๋ค!**
    > 
    > 1. **Write Failing Test**: ์คํจํ๋ ํ์คํธ ์ฝ๋๋ฅผ ๋จผ์  ์์ฑํ๋ค.
    > 2. **Make Test Pass:** ํ์คํธ ์ฝ๋๋ฅผ ์ฑ๊ณต์ํค๊ธฐ ์ํ ์ค์  ์ฝ๋๋ฅผ ์์ฑํ๋ค. (ํ์คํธ๋ฅผ ํต๊ณผํ  ์ ๋์ ์ต์ ์ฝ๋๋ง ์์ฑ)
    > 3. **Refactor:** ์ค๋ณต ์ฝ๋ ์ ๊ฑฐ, ์ผ๋ฐํ ๋ฑ์ ๋ฆฌํฉํ ๋ง์ ์ํํ๋ค.

<br/>

- **TDD๋ฅผ ์ฌ์ฉํ๋ ์ด์ **
    
    โ ์์์น ๋ชปํ๋ ๋ฒ๊ทธ๋ฅผ ์ค์ฌ ์์ ์๊ฐ์ ์ค์ผ ์ ์๋ค! ์ฒ์์ ์๋๊ฐ ๋๋ฆฌ๋ค๊ณ  ๋๋ ์ ์์ผ๋ ์ฅ๊ธฐ์ ์ผ๋ก ๋ณด๋ฉด ์ฒ์๋ถํฐ ๋ฒ๊ทธ๋ฅผ ์ค์ฌ๊ฐ๋ฉฐ ๊ฐ๋ฐํ๋ ๊ฒ์ด ํจ์จ์ ์ด๋ค.

## ๐ย **Testing Library, Jest** - ๋ฆฌ์กํธ์์ ํ์คํธ ํ๊ธฐ

- Testing Library, Jest ๋๋ค React์์๋ง ์ธ ์ ์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์๋๋ค.
- Testing Libarary์ Jest๋ ์ญํ ์ด ๊ฐ๊ฐ ๋ค๋ฅด๊ธฐ ๋๋ฌธ์ React์ ๋ํ ํ์คํธ๋ฅผ ์งํํ  ๋๋ ์ด๋ ํ์ชฝ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ๋ ๊ฒ๋ง์ผ๋ก๋ ํ์คํธ๋ฅผ ํ  ์ ์๋ค.
    
    โ ๋ ๋ค ์ฌ์ฉ!
    

### ๐งฉย **Testing Library**

- Testing Library๋ ํ์คํธ๋ฅผ ์คํํ๊ณ  ์ถ์ ์ปดํฌ๋ํธ๋ ํด๋ฆญ ์ด๋ฒคํธ๋ฑ ๋ค์ํ ๊ณณ์ ์ธ ์ ์๋ค.
- Testing Libarary์์ React์ฉ React Testing Library์ ์ ๊ณตํ๊ณ  ์๊ธฐ ๋๋ฌธ์, create-react-app์ ์ด์ฉํ์ฌ React ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ฉด ์๋์ผ๋ก Testing Libarary๋ฅผ ์ด์ฉํ  ์ ์๋ค.

### ๐งฉย **Jest**

- Jest๋ JavaScript์ Testing Framework / Test Runner๋ก์จ, ํ์คํธ ํ์ผ์ ์๋์ผ๋ก ์ฐพ์ ํ์คํธ๋ฅผ ์คํํ๊ณ , ํ์คํธ๋ฅผ ์คํํ ๊ฒฐ๊ณผ ๊ธฐ๋๋งํผ ์ฌ๋ฐ๋ฅธ ๊ฐ์ ๊ฐ์ง๊ณ  ์๋์ง ํจ์๋ฅผ ์ด์ฉํ์ฌ ์ฒดํฌํ์ฌ ํ์คํธ๊ฐ ์ฑ๊ณต์ธ์ง ์คํจ์ธ์ง๋ฅผ ํ๋จํด ์ค๋ค.
- Jest ์์๋ Mocha(Node.js ํ์คํธ ํ๋ ์์ํฌ) ์ฒ๋ผ it, test, describe ๋ฉ์๋๋ฅผ ๋๊ฐ์ด ์ฌ์ฉํ๋ค.
    
    ```jsx
    describe('๊ฐ๋จํ ํ์คํธ', () => {
        test('2๋ํ๊ธฐ 2๋ 4', () => {
            expect(2 + 2).toBe(4);
        });
    
        it('2 ๋นผ๊ธฐ 1์ 1', () => {
            expect(2 - 1).toBe(1);
        })
        
    })
    
    //test ํจ์์ it ํจ์๋ ์ญํ ์ด ๊ฐ๋ค.
    //describe ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด it ์ด๋ test ํจ์๋ฅผ ํ๋ ํ์ผ์ ์ฌ๋ฌ ๊ฐ ํฌํจํ  ์ ์๋ค.
    //describe ํจ์ ๋ธ๋ก์ Test Suites ๋ผ๊ณ  ๋ถ๋ฆฐ๋ค. 
    //test/it ํจ์ ๋ธ๋ก์ Test(TestCase) ๋ผ๊ณ  ๋ถ๋ฆฐ๋ค.
    //toBe() : expect ํจ์์์ ์ง์ ํ ๊ฐ์ด toBe ํจ์์ ์ง์ ํ ๊ฐ๊ณผ ์ผ์นํ๋์ง ์ฒดํฌ.
    ```
    
    ![ํ์คํธ ์คํ ๊ฒฐ๊ณผ](https://user-images.githubusercontent.com/89282099/182677230-6af5fb16-e3dc-4061-a583-593e7e38f22d.png)
    

### ๐งฉย ํ์คํธ ์์๋ค

- App.test.js ๊ธฐ๋ณธ ํ์ผ ํ์คํธ
    
    ```jsx
    import { render, screen } from '@testing-library/react';
    import App from './App';
    
    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/TEST/i);
      expect(linkElement).toBeInTheDocument();
    });
    
    //test() : Jest ํจ์๋ก ํ์คํธ๊ฐ ์คํํ  ๋ ๋ฐ๋์ ์ด์ฉํ๋ ํจ์
    //   - ์ฒซ ๋ฒ์งธ ์ธ์ : ํ์คํธ๊ฐ ์ด๋ค ๋ด์ฉ์ธ์ง, ํ์คํธ ์ค๋ช
    //   - ๋ ๋ฒ์งธ ์ธ์ : ํ์๊ณ ํ๋ ํ์คํธ๋ฅผ ํจ์ ํํ๋ก ๋ฃ๋๋ค.
    //
    // 1. ์ฒซ๋ฒ์งธ ์ค์ ๋ณด๋ฉด, ํ์คํธํ๊ณ ์ ํ๋ ์ปดํฌ๋ํธ๋ฅผ render()ํจ์๋ก ์ ๋ฌํ๊ณ  ์๋ค. 
    //    react-testing-library์์๋ ํ์คํธ๋ฅผ ์งํํ  ์ปดํฌ๋ํธ๋ฅผ render()ํจ์์ ์ธ์๋ก ์ ๋ฌํ๋ค.
    // 2. ๋๋ฒ์งธ ์ค์ ์๋ screen์ ๋ค์ํ ๋ฉ์๋ ์ค getByText() ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ
    //    render()์์ ๊ฐ์ ธ์จ App ์ปดํฌ๋ํธ ์ค "learn react"๋ผ๋ ๋ฌธ์์ด์ด ์๋์ง ํ์ธํ์ฌ linkElement์ ํ ๋นํ๊ณ  ์๋ค. 
    //    (โiโ๋ Regular Expression์ผ๋ก "i"๋ฅผ ๋ถ์์ผ๋ก์จ ๋์๋ฌธ์๋ฅผ ๊ตฌ๋ถํ์ง ์๊ฒ ๋ง๋ค์ด ์ค๋ค.)
    // 3. ์ธ๋ฒ์งธ ์ค์์๋ expect ํจ์์ ์ธ์๋ก ์ง์ ํ ์์๊ฐ document.body์ ์กด์ฌํ๋์ง 
    //    toBeInTheDocument ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ฒดํฌํ๊ณ  ์๋ค. 
    //    ์ฌ๊ธฐ์ toBeInTheDocument ํจ์๋ matchers ํจ์๋ผ๊ณ  ๋ถ๋ฅธ๋ค.
    //    
    // test, expect -> Jest ํจ์
    // toBeInTheDocument -> Jest-dom ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ Costom matchers
    // jset-dom ์ setupTest.js ์์ import ๋๊ณ  ์๋ค.
    ```
    
- ์ปดํฌ๋ํธ ๋๋(render)ํด์ ์ด๋ฒคํธ ๊ด๋ จ ํ์คํธํ๊ธฐ
    - screen : `render()`์์ ๊ฐ์ ธ์จ ์ปดํฌ๋ํธ ์ค ํน์  ์์๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋ค.
    - fireEvent : ํ์คํธ ์ ์ด๋ฒคํธ ์๋ ๊ตฌํ
    - expect(โฆ) **.not.** toBeDisabled() โ ์ด๋ ๊ฒ not ์ ๋ถ์ฌ ๋ฐ๋ ์ํฉ ํ์คํธ ๊ฐ๋ฅ
    ```jsx
    import { fireEvent, render, screen } from "@testing-library/react"
    import Light from "./Light"

    describe("์ปดํฌ๋ํธ ํ์คํธ", () => {
        it("render Light Component", () => {
            render(<Light name="์ ์" />);
            const nameElement = screen.getByText(/์ ์ off/i);
            expect(nameElement).toBeInTheDocument();
        })

        test("off button disabled", () => {
            render(<Light name="์ ์" />);
            const offButtonElement = screen.getByRole("button", {name: "OFF"});
            //getByRole ๋ก ๋ฒํผ๋ง ์ง์ ํ  ์ ์๋ค. ๋ฒํผ์ด 2๊ฐ์ด๋ฏ๋ก, name ์ ์ด์ฉํด ํน์ ํ๊ธฐ
            expect(offButtonElement).toBeDisabled();
        })

        it("on button enable", () => {
            render(<Light name="์ ์" />);
            const onButtonElement = screen.getByRole("button", {name: "ON"});
            expect(onButtonElement).not.toBeDisabled();
            //not์ ๋ถ์ด๋ฉด toBeDisabled ๊ฐ ์๋ ๋ ํต๊ณผ
        })

        //ํด๋ฆญ ์ด๋ฒคํธ ์ ๋ฌด๋ ํ์คํธ๋ก ๊ตฌํ => fireEvent ์ฌ์ฉ
        //fireEvent ์ click ๋ฉ์๋์ ์ ๋ฌ์ธ์๋ก ํ์คํธํ๊ณ ์ ํ๋ ์์ ์ ๋ฌ
        test("change from off to on", () => {
            render(<Light naem="์ ์" />);
            const onButtonElement = screen.getByRole('button', {name: "ON"});
            fireEvent.click(onButtonElement);
            expect(onButtonElement).toBeDisabled();
        })
    })
    ```