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
        //not을 붙이면 toBeDisabled 가 아니다.
    })

    //클릭 이벤트 유무도 테스트로 구현 => fireEvent
    //fireEvent 의 click 메서드에 전달인자로 테스트하고자 하는 요소 전달
    test("change from off to on", () => {
        render(<Light naem="전원" />);
        const onButtonElement = screen.getByRole('button', {name: "ON"});
        fireEvent.click(onButtonElement);
        expect(onButtonElement).toBeDisabled();
    })
})

