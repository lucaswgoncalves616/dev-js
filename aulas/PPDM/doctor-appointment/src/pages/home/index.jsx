import {Container, Greetings, GreetingsAvatar, GreetingsSpan, GreetingsText, GreetingsTitle} from "./style";

export const Home = () => {

    return (
        <Container>
            <Greetings>
                <GreetingsTitle>
                    <GreetingsSpan>Hello,</GreetingsSpan>
                    <GreetingsText>Hi Toguro</GreetingsText>
                </GreetingsTitle>
                <GreetingsAvatar source={require("../../assets/greetings.png")} />
            </Greetings>
        </Container>
    )
}