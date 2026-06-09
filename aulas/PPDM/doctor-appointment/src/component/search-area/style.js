import styled from "styled-components/native";

export const SearchAreaContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 16px;
    align-items: center;
    gap: 12px;

    border-radius: 12px;
    background: #FAFAFA;
`;

export const SearchIcon = styled.Image`
    
`;

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: '#8696BB',
})`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
`;



