type PropsType = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    // console.log(viewCart, setViewCart)
    const content = (
        <header className='header'>
            <div className='header__title-bar'>
                <h1>Lukas Co.</h1>
                <div className='header__price-box'></div>
                <p>Total Items:</p>
                <p>Total Price:</p>
            </div>
        </header>
    )

    return <div>Header</div>
}

export default Header
