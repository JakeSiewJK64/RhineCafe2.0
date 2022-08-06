import NavigationBarComponent from '../../shared/NavigationBarComponent/NavigationBarComponent';

const HeaderComponent = ({ routes }) => {
    return (
        <header className="m-1 d-flex flex-column">
            <NavigationBarComponent routes={routes} />
        </header>
    )
}

export default HeaderComponent;