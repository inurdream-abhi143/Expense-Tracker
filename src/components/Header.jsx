const Header = (props) => {
  const { income, expense } = props;
  return (
    <>
      <div className="header">
        <h1 className="heading">Expense Tracker</h1>
        <h3 className="balance">
          Balance is <span className="total-blac"> ${income - expense} </span>
        </h3>
      </div>
    </>
  );
};

export default Header;
