import "./App.css";
import  Actions  from "./components/Actions";
import TransferList from "./components/TransferList";
import { useTransferProps } from "./context/transfer-context";

function App() {
  const appProps = useTransferProps()
  return (
    <div className="App flex">
      <TransferList
        items={appProps.getLeftItems()}
        handleOnchecked={appProps.handleOncheckedLeft}
      />
      <Actions
        setLeftItems={() => {
          appProps.addToLeft();
        }}
        setRightItems={() => {
          appProps.addToRight();
        }}
      />
      <TransferList
        items={appProps.getRightItems()}
        handleOnchecked={appProps.handleOncheckedRight}
      />
    </div>
  );
}

export default App;
