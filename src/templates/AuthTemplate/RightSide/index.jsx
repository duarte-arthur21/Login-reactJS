import styled from "styled-components";

const RightSide = (props) => {
    const {children} = props

    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export {RightSide}

const Wrapper = styled.div `
    width: 40%;
    height: ${window.innerHeight}px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`