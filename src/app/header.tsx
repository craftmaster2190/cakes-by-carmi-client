import "./header.css";

export default function Header() {
    return <header className="Header flex flex-row bg-white justify-between items-center">
        <div className="HeaderTitle">Cakes by Carmi</div>
        <div className="HeaderRight">
            <div>
                <img className="HeaderCart" src="cart.png"/>
            </div>
        </div>
    </header>
}
