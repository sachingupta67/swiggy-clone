import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";

const options = [
  {
    icon: <AiOutlineSearch />,
    label: "Search",
  },
  {
    icon: <BiSolidOffer />,
    label: "Offers",
  },
  {
    icon: <IoMdHelpCircle />,
    label: "Help",
  },
  {
    icon: <MdManageAccounts />,
    label: "Sign in",
  },
  {
    icon: <FaShoppingCart />,
    label: "Cart",
  },
];

const Header = () => {
  const optionJSX = () => {
    return options.map((item, i) => {
      return (
        <div className="option" key={i}>
          <span className="icon">{item.icon}</span>
          <span className="icon">{item.label}</span>
        </div>
      );
    });
  };
  return (
    <div className="wrapper">
      <div className="logo">Logo</div>
      <div className="options">{optionJSX()}</div>
    </div>
  );
};

export default Header;
