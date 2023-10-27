import { createContext, useContext, useState } from "react";
import { items } from "../data.js"

const TransferContext = createContext({});

export default function TransferContexProvider(props) {

  const myItems = items.map((item) => { return { label: item, isChecked: false} })

  const [leftItems, setLeftItems] = useState(myItems);
  const [rightItems, setRightItems] = useState([]);

  const addToRight = () => {
    if (leftItems.length > 0) {
        // Get checked
      const checkedItems = leftItems.filter((item) => item.isChecked === true);
      // Remove checks
      checkedItems.forEach((item) => item.isChecked = false)
      // add to right
      setRightItems(rightItems.concat(checkedItems))
      // remove from left
      setLeftItems(leftItems.filter( ( element ) => !checkedItems.includes( element ) )) 
    }
  };
  const addToLeft = () => {
    if (rightItems.length > 0) {
    // Get checked
    const checkedItems = rightItems.filter((item) => item.isChecked === true);
    // Remove checks
    checkedItems.forEach((item) => item.isChecked = false)
    // add to right
    setLeftItems(leftItems.concat(checkedItems))
    // remove from left
    setRightItems(rightItems.filter( ( element ) => !checkedItems.includes( element ) )) 
    }
  };

  const handleOncheckedRight = (checkedItem) => {
    console.log("Checked Right item: ", checkedItem);
    const newTmp = rightItems.map((item) => {
        return item === checkedItem ? {label: item.label, isChecked: !item.isChecked} : item
    })
    setRightItems(newTmp);
  };
  const handleOncheckedLeft = (checkedItem) => {
    const newTmp = leftItems.map((item) => {
        return item === checkedItem ? {label: item.label, isChecked: !item.isChecked} : item
    });
    setLeftItems(newTmp)
  };

  const getLeftItems = () => {
    return leftItems;
  };

  const getRightItems = () => {
    return rightItems;
  };

  const transferContextProps = {
    handleOncheckedLeft,
    handleOncheckedRight,
    getLeftItems,
    getRightItems,
    addToRight,
    addToLeft
  };

  return (
    <TransferContext.Provider value={transferContextProps}>
      {props.children}
    </TransferContext.Provider>
  );
}

export function useTransferProps() {
  const context = useContext(TransferContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return {
    handleOncheckedLeft: context.handleOncheckedLeft,
    handleOncheckedRight: context.handleOncheckedRight,
    getLeftItems: context.getLeftItems,
    getRightItems: context.getRightItems,
    addToLeft: context.addToLeft,
    addToRight: context.addToRight
  };
}
