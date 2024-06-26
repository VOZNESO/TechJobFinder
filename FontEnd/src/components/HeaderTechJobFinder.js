import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faDollarSign } from "@fortawesome/free-solid-svg-icons";
const HeaderTechJobFinder = () => {
  const [isHireDropdownVisible, setHireDropdownVisible] = useState(false);
  const [isSkillDropdownVisible, setSkillDropdownVisible] = useState(false);
  const [isLanguageDropdownVisible, setLanguageDropdownVisible] =
    useState(false);
  const [isFindWorksDropdownVisible, setFindWorksDropdownVisible] =
    useState(false);
  const [isFindSkillDropdownVisible, setFindSkillDropdownVisible] =
    useState(false);
  const [isFindLanguageDropdownVisible, setFindLanguageDropdownVisible] =
    useState(false);
  const [isExploreDropdownVisible, setExploreDropdownVisible] = useState(false);
  const [isLanguageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [isCurrencyMenuVisible, setCurrencyMenuVisible] = useState(false);

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <Link
          to="/"
          style={{ ...logoStyle, ...linkStyle, marginRight: "30px" }}
        >
          TechJobFinder
        </Link>
        <nav>
          <ul style={navStyle}>
            <li
              style={navItemStyle}
              onMouseEnter={() => setHireDropdownVisible(true)}
              onMouseLeave={() => setHireDropdownVisible(false)}
            >
              <span style={linkStyle} aria-haspopup="true">
                Hire Freelancers
              </span>
              {isHireDropdownVisible && (
                <ul style={dropdownStyle}>
                  <li
                    style={dropdownItemContainerStyle}
                    onMouseEnter={() => setSkillDropdownVisible(true)}
                    onMouseLeave={() => setSkillDropdownVisible(false)}
                  >
                    <span style={dropdownItemStyle} aria-haspopup="true">
                      By Skill
                    </span>
                    {isSkillDropdownVisible && (
                      <div style={rectangleContainerStyle}>
                        <Link
                          to="/hire-by-skill/graphics-designer"
                          style={gridItemStyle}
                        >
                          Graphics Designer
                        </Link>
                        <Link
                          to="/hire-by-skill/website-designer"
                          style={gridItemStyle}
                        >
                          Website Designer
                        </Link>
                      </div>
                    )}
                  </li>
                  <li
                    style={dropdownItemContainerStyle}
                    onMouseEnter={() => setLanguageDropdownVisible(true)}
                    onMouseLeave={() => setLanguageDropdownVisible(false)}
                  >
                    <span style={dropdownItemStyle} aria-haspopup="true">
                      By Location
                    </span>
                    {isLanguageDropdownVisible && (
                      <div style={rectangleContainerStyle}>
                        <Link
                          to="/hire-by-language/vietnamese"
                          style={gridItemStyle}
                        >
                          Vietnamese
                        </Link>
                        <Link
                          to="/hire-by-language/korean"
                          style={gridItemStyle}
                        >
                          Korean
                        </Link>
                        <Link
                          to="/hire-by-language/japanese"
                          style={gridItemStyle}
                        >
                          Japanese
                        </Link>
                      </div>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li
              style={navItemStyle}
              onMouseEnter={() => setFindWorksDropdownVisible(true)}
              onMouseLeave={() => setFindWorksDropdownVisible(false)}
            >
              <span style={linkStyle} aria-haspopup="true">
                Find Works
              </span>
              {isFindWorksDropdownVisible && (
                <ul style={dropdownStyle}>
                  <li
                    style={dropdownItemContainerStyle}
                    onMouseEnter={() => setFindSkillDropdownVisible(true)}
                    onMouseLeave={() => setFindSkillDropdownVisible(false)}
                  >
                    <span style={dropdownItemStyle} aria-haspopup="true">
                      By Skill
                    </span>
                    {isFindSkillDropdownVisible && (
                      <div style={rectangleContainerStyle}>
                        <Link
                          to="/find-works/by-skill/frontend-developer"
                          style={gridItemStyle}
                        >
                          Frontend Developer
                        </Link>
                        <Link
                          to="/find-works/by-skill/backend-developer"
                          style={gridItemStyle}
                        >
                          Backend Developer
                        </Link>
                      </div>
                    )}
                  </li>
                  <li
                    style={dropdownItemContainerStyle}
                    onMouseEnter={() => setFindLanguageDropdownVisible(true)}
                    onMouseLeave={() => setFindLanguageDropdownVisible(false)}
                  >
                    <span style={dropdownItemStyle} aria-haspopup="true">
                      By Language
                    </span>
                    {isFindLanguageDropdownVisible && (
                      <div style={rectangleContainerStyle}>
                        <Link
                          to="/find-works/by-language/english"
                          style={gridItemStyle}
                        >
                          English
                        </Link>
                        <Link
                          to="/find-works/by-language/spanish"
                          style={gridItemStyle}
                        >
                          Spanish
                        </Link>
                        <Link
                          to="/find-works/by-language/french"
                          style={gridItemStyle}
                        >
                          French
                        </Link>
                      </div>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li style={navItemStyle}>
              <Link to="/solutions" style={linkStyle}>
                Solutions
              </Link>
            </li>
          </ul>
        </nav>
        <div style={authLinksContainerStyle}>
          <div
            style={navItemStyle}
            onMouseEnter={() => setExploreDropdownVisible(true)}
            onMouseLeave={() => setExploreDropdownVisible(false)}
          >
            <span style={linkStyle} aria-haspopup="true">
              Explore
            </span>
            {isExploreDropdownVisible && (
              <ul style={dropdownStyle}>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/discover" style={dropdownItemStyle}>
                    Discover
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/community" style={dropdownItemStyle}>
                    Community
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/guides" style={dropdownItemStyle}>
                    Guides
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/podcast" style={dropdownItemStyle}>
                    Podcast
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/learn" style={dropdownItemStyle}>
                    Learn
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/blog" style={dropdownItemStyle}>
                    Blog
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="/logo-maker" style={dropdownItemStyle}>
                    Logo Maker
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setLanguageMenuVisible(true)}
            onMouseLeave={() => setLanguageMenuVisible(false)}
          >
            <span style={linkStyle} aria-haspopup="true">
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} />
              Language
            </span>
            {isLanguageMenuVisible && (
              <ul style={dropdownStyle}>
                <li style={dropdownItemContainerStyle}>
                  <Link to="#" style={dropdownItemStyle}>
                    English
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="#" style={dropdownItemStyle}>
                    Vietnamese
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setCurrencyMenuVisible(true)}
            onMouseLeave={() => setCurrencyMenuVisible(false)}
          >
            <span style={linkStyle} aria-haspopup="true">
              <FontAwesomeIcon
                icon={faDollarSign}
                style={{ marginRight: "5px" }}
              />
              Currency
            </span>
            {isCurrencyMenuVisible && (
              <ul style={dropdownStyle}>
                <li style={dropdownItemContainerStyle}>
                  <Link to="#" style={dropdownItemStyle}>
                    United States Dollar (USD) - $
                  </Link>
                </li>
                <li style={dropdownItemContainerStyle}>
                  <Link to="#" style={dropdownItemStyle}>
                    Euro (EUR) - €
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/signin" style={{ ...linkStyle, marginLeft: "10px" }}>
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#000",
  color: "#fff",
  textAlign: "left",
  padding: "10px",
  zIndex: 1000,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const headerContentStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  fontSize: "24px",
};

const navStyle = {
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
};

const navItemStyle = {
  position: "relative",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
  cursor: "pointer",
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "#000",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  zIndex: 1000,
  listStyle: "none",
  minWidth: "180px",
};

const rectangleContainerStyle = {
  position: "absolute",
  top: "0",
  left: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
  backgroundColor: "#000",
  padding: "10px",
  borderRadius: "5px",
  minWidth: "200px",
  zIndex: 1000,
};

const gridItemStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
  textAlign: "center",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

const dropdownItemContainerStyle = {
  position: "relative",
};

const dropdownItemStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 12px",
  display: "block",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
  whiteSpace: "nowrap",
  lineHeight: "1.5",
};

const authLinksContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
};

export default HeaderTechJobFinder;
