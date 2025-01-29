import PropTypes from 'prop-types';


function Footer({ footers }) {
    const navigationItems = footers.slice(0, 6);
    const copyright = footers[6];
    
    return (
        <footer className="footer">
            <div className="footer-navigation">
                {navigationItems.map((item) => (
                    <div className="footer-item" key={item.id}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="footer-copyright">
                <p>{copyright.name}</p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    footers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Footer
