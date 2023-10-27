import { useAppProps } from "../context/app-context";
import { Actions } from "./Actions";
import { TransferList } from "./TransferList";

export default function MainContent() {
  const appProps = useAppProps();

  return (
    <div className="App flex">
      <TransferList
        items={appProps.getLeftItems()}
        handleOnchecked={appProps.handleOncheckedLeft}
      />
      <Actions
        setLeftItems={() => {
          appProps.setLeftItems();
        }}
        setRightItems={() => {
          appProps.setRightItems();
        }}
      />
      <TransferList
        items={appProps.rightItems}
        handleOnchecked={appProps.handleOncheckedright}
      />
    </div>
  );
}
