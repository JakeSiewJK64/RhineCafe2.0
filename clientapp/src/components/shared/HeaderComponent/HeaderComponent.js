import NavigationBarComponent from '../../shared/NavigationBarComponent/NavigationBarComponent';

const HeaderComponent = ({ routes }) => {
    return (
        <header className="d-flex flex-column">
            <NavigationBarComponent routes={routes} />
        </header>
    )
}

export default HeaderComponent;