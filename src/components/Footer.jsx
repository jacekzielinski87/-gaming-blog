function Footer(footer, rights) {
    const footers = footer.footers;
    
    

    return (
        <>
        <div className="footer">
           {footers.map((footer) => (
            <div className="footer-text" key={footer.id}>
                <p>{footer.name}</p>
                <p>{rights.name}</p>
            </div>
            ))}
        </div>
        </>
        )
    }

export default Footer
