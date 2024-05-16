function Footer(footer, rights) {
    const footers = footer.footers;
    
    

    return (
        <div className="footer">
           {footers.map((footer) => (
            <div className="footer-preview" key={footer.id}>
                <h3>{footer.name}</h3>
                <p className="rights-text">{rights.name}</p>
            </div>      
           ))}
        </div>
        )
    }

export default Footer
