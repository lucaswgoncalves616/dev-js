import {SearchAreaContainer, SearchIcon, SearchInput} from "./style";


export const SearchArea = () => {

    return (
        <SearchAreaContainer>
            <SearchIcon source={require("../../assets/search-icon.png")} />
            <SearchInput
                placeholder="Buscar médico ou problema de saúde"
            />
        </SearchAreaContainer>
    );
}