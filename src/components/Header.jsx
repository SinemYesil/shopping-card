import {FiShoppingCart} from 'react-icons/fi';
import CartIcon from "./CartIcon.jsx";

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">React ve Tailwind CSS Sepet Uygulaması</h1>
            <CartIcon></CartIcon>
        </div>
    )
}
export default Header;