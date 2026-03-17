import styled from "styled-components";

const AsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10%;
    background: cornflowerblue;
    `;

export default function Aside() {
    return (
        <aside>
            <AsideContainer>
                <p>bah meo</p>
            </AsideContainer>
        </aside>
    )
}
