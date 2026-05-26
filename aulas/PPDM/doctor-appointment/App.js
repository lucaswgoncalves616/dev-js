import styled from 'styled-components/native';
import {Home} from "./src/pages/home/index";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "react-native";

const AppView = styled.SafeAreaView``;
const Status = styled.StatusBar``;

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden={true}/>
            <Home />
        </SafeAreaView>
    );
}


