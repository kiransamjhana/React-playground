export const Button = ({ className, label, handleButtonClick }) => {
  //new file added in the button it is just testeing
  //new ifle testeted

  return (
    <div
      className={"btn btn-" + className}
      onClick={() => handleButtonClick(label)}
    >
      {label}
    </div>
  );
};
