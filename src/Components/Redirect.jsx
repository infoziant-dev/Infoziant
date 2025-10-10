import React from 'react'

const Redirect = ({ link }) => {
    React.useEffect(() => {
        if (typeof window === 'undefined' || !link) return;

        try {
            const timer = setTimeout(() => {
                try {
                    window.location.replace(link);
                } catch (err) {
                    window.location.href = link;
                }
            }, 0);

            return () => clearTimeout(timer);
        } catch (error) {
            console.error('Redirect failed:', error);
        }
    }, [link]);

    return (
        <noscript>
            <a href={link}>Click here to continue to {link}</a>
        </noscript>
    );
}

export default Redirect;