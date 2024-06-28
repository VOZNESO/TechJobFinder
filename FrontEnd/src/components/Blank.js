import React from 'react';

function Blank(props) {
    return (
        <div>
            <div className="container">
                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>Blank</h1>
                        <h2>This page didn't load correctly. Try reloading it using your browser's refresh button.</h2>
                        <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                    </section>
                </div>
        </div>
    );
}

export default Blank;
