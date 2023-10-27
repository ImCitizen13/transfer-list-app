export default function Actions({ setRightItems, setLeftItems }) {
    return (
      <div className="actions flex">
        <button
          onClick={() => {
            setRightItems();
          }}
        >
          {" "}
          {">"}{" "}
        </button>
        <button
          onClick={() => {
            setLeftItems();
          }}
        >
          {" "}
          {"<"}{" "}
        </button>
      </div>
    );
  }
  