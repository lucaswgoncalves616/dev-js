import {
    Container, ScheduleBottom, ScheduleBottomContainer, ScheduleBottomIcon,
    ScheduleBottomTitle, ScheduleTop, ScheduleTopAvatar, ScheduleTopContent,
    ScheduleTopDescription, ScheduleTopIcon, ScheduleTopLabel, ScheduleTopTitle
} from "./style";

export const ScheduleCard = () => {
    return(
        <Container>
            <ScheduleTop>
                <ScheduleTopContent>
                    <ScheduleTopAvatar source={require('../../assets/doctor.png')} />
                    <ScheduleTopTitle>
                        <ScheduleTopLabel>Dr. Alguma coisa</ScheduleTopLabel>
                        <ScheduleTopDescription>Urologista</ScheduleTopDescription>
                    </ScheduleTopTitle>
                </ScheduleTopContent>
                <ScheduleTopIcon source={require('../../assets/arrow-right.png')} />
            </ScheduleTop>
            <ScheduleBottom>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require('../../assets/calendar-icon.png')} />
                    <ScheduleBottomTitle>Domingo, 12 de junho</ScheduleBottomTitle>
                </ScheduleBottomContainer>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require('../../assets/clock-icon.png')} />
                    <ScheduleBottomTitle>2:00  - 7:00</ScheduleBottomTitle>
                </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}