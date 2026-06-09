import styled from "styled-components/native";

export const ScheduleCardContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #4894fe;
    width: 100%;
    height: 138px;
    border-radius: 12px;
    padding: 20px;
`

export const ScheduleTop = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ScheduleTopContent = styled.View`
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ScheduleTopAvatar = styled.Image``;

export const ScheduleTopTitle = styled.View`
    display: flex;
    flex-direction: column;
`;

export const ScheduleTopLabel = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`;

export const ScheduleTopDescription = styled.Text`
    color: #CBE1FF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

export const ScheduleTopIcon = styled.Image``;

export const ScheduleHorizontalLine = styled.View`
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
`;

export const ScheduleBottom = styled.View`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const ScheduleBottomContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const ScheduleBottomIcon = styled.Image``;

export const ScheduleBottomTitle = styled.Text`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`;