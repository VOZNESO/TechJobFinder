import React from "react";
import {
  FiImage,
  FiCode,
  FiMonitor,
  FiPenTool,
  FiVideo,
  FiCpu,
  FiMusic,
  FiBriefcase,
} from "react-icons/fi";
import HeaderTechJobFinder from "./HeaderTechJobFinder";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#fff", // Set white background for entire page
      }}
    >
      <HeaderTechJobFinder />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          paddingTop: "30px",
          backgroundColor: "transparent",
          backgroundImage:
            "url('https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            width: "100%",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: "#ffffff", // Màu chữ trắng
          }}
        >
          <h1>Welcome to TechJobFinder!</h1>
          <p>Explore job opportunities in the tech industry.</p>
        </div>
      </div>
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundImage:
            "url('https://i.pinimg.com/564x/12/19/91/121991a40151cf3ad47ae68d0eae3cf9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/12/19/91/121991a40151cf3ad47ae68d0eae3cf9.jpg')",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Example cards or content */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px", // Increased gap for better spacing
              marginTop: "20px",
            }}
          >
            {[
              { service: "Graphics & Design", icon: <FiImage size={30} /> },
              { service: "Programming & Tech", icon: <FiCode size={30} /> },
              { service: "Digital Marketing", icon: <FiMonitor size={30} /> },
              {
                service: "Writing & Translation",
                icon: <FiPenTool size={30} />,
              },
              { service: "Video & Animation", icon: <FiVideo size={30} /> },
              { service: "AI Services", icon: <FiCpu size={30} /> },
              { service: "Music & Audio", icon: <FiMusic size={30} /> },
              { service: "Business", icon: <FiBriefcase size={30} /> },
            ].map((item) => (
              <div
                key={item.service}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  width: "150px",
                  height: "150px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div>{item.icon}</div>
                <h3 style={{ fontSize: "14px", margin: "10px 0" }}>
                  {item.service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "50px", textAlign: "center" }}>
        Popular services
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // Increased gap for better spacing
          marginTop: "20px",
        }}
      >
        {[
          {
            title: "Software Development",
            imageUrl:
              "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
          },
          {
            title: "Video Editing",
            imageUrl:
              "https://c4.wallpaperflare.com/wallpaper/804/438/350/mass-effect-mass-effect-2-mass-effect-3-mass-effect-legendary-edition-video-games-hd-wallpaper-preview.jpg",
          },
          {
            title: "Product Photography",
            imageUrl:
              "https://i.pinimg.com/564x/5c/17/c4/5c17c4daf4eb0fd77f3951f52c021fe5.jpg",
          },
          {
            title: "Architecture & Interior Design",
            imageUrl:
              "https://i.pinimg.com/736x/80/1e/d0/801ed0bcc672b5afdcac2ffb2197d6c4.jpg",
          },
          {
            title: "Voice Over",
            imageUrl:
              "https://i.pinimg.com/564x/f1/67/25/f16725ad39a22206add02c4a2cd90f12.jpg",
          },
          {
            title: "AI Services",
            imageUrl:
              "https://i.pinimg.com/736x/49/ed/42/49ed4203a2f34097a53db0375ef09e1d.jpg",
          },
        ].map((service) => (
          <div
            key={service.title}
            style={{
              backgroundImage: `url(${service.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              cursor: "pointer",
              width: "230px",
              height: "300px",
              textAlign: "center",
              flexShrink: 0,
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              style={{
                fontSize: "18px",
                margin: "10px 0",
                color: "#ffffff",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
              }}
            >
              {service.title}
            </h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
