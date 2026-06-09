import {Container, Greetings, GreetingsAvatar, GreetingsSpan, GreetingsText, GreetingsTitle} from "./style";
import {ScheduleCard} from "../../component/schedule-card";
import {SearchArea} from "../../component/search-area";

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
            <ScheduleCard/>
            <SearchArea/>
        </Container>
    )
}