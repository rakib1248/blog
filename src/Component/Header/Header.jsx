import "./Header.css";

const Header = () => {
  return (
    <>
    <header>

      <div className="headerArea">
        <div className="logo">
          <img
            src="https://devzone.com.bd/wp-content/uploads/2024/08/office-devzone-logo2.png"
            alt=""
          />
        </div>
        <div className="menuBar">
            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
