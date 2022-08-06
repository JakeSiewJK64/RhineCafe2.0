import './TemplatePage.css';

const TemplatePage = ({ title, renderPage }) => {
    return (
        <>
            <span style={{ "fontSize": "5em" }}>
                {title}
            </span>
            {renderPage}
        </>
    )
}

export default TemplatePage;