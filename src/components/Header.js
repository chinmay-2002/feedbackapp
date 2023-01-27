import PropTypes from 'prop-types'

function Header({ text, bgColor, headerColor }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: headerColor
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Add title please',
    bgColor: 'rgba(0,0,0,0.4)',
    headerColor: '#ff6a95'
}
Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    headerColor: PropTypes.string
}



export default Header