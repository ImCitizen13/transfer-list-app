export default function TransferList({ items, handleOnchecked }) {
  console.log(items)
    return (
      
      <div className="transferList flex">
        {items &&
          items.map((item) => {
            return (
              <div key={item.label} className="listItem">
                <label>
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={(checked) => {
                      handleOnchecked(item);
                    }}
                  />
                  {item.label}
                </label>
              </div>
            );
          })}
      </div>
    );
  }
  