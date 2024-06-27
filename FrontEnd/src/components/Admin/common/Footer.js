import React from 'react';

function Navbar(props) {
    return (
        <div>
            {/* ======= Footer ======= */}
    <footer id="footer" className="footer">
      <div className="copyright">
        © Copyright <strong><span>TechJobFinders</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
               Designed by <a href="https://github.com/duongnx03">Duongk</a>
      </div>
    </footer>{/* End Footer */}
    <a href="1" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            
        </div>
    );
}

export default Navbar;