import TextButton from "./components/TextButton";
import HeaderComponent from "./components/Header/HeaderComponent.jsx";

export default function App() {
  return (
      <>
        <HeaderComponent />
          <h1>React.Component</h1>
          <TextButton label={"Hello World"} />
      </>
  );
}