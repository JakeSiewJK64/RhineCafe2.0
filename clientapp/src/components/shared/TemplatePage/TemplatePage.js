import './TemplatePage.css';

const TemplatePage = ({ title, renderPage }) => {
    return (
        <>
            <div className='w-100'>
                <span style={{ "fontSize": "5em" }}>
                    {title}
                </span>
                <div>
                    {renderPage}
                </div>
            </div>
        </>
    )
}

export default TemplatePage;