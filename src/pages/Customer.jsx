  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Link } from "react-router-dom";


  const menuData = {
    Chaopan: [
      {
        id: 1,
        code: "CCBE",
        name: "Chaopan Chicharon Bulaklak Egg",
        price: 135,
        image: "/asset/chaochicharon.jpg",
      },
      {
        id: 2,
        code: "CSIE",
        name: "Chaopan Sisig Egg",
        price: 135,
        image: "/asset/chaosisig.jpg",
      },
      {
        id: 3,
        code: "CSE",
        name: "Chaopan Siomai Egg",
        price: 70,
        image: "/asset/chaosiomai.jpg",
      },
      {
        id: 4,
        code: "CSHE",
        name: "Chaopan Shanghai Egg",
        price: 75,
        image: "/asset/chaoshanghai.jpg",
      },
    
      {
        id: 6,
        code: "CHE",
        name: "Chaopan Hotdog Egg",
        price: 65,
        image: "/asset/chaohotdog.jpg",
      },
      
      {
        id: 8,
        code: "CCSE",
        name: "Chaopan ChickenSkin Egg",
        price: 90,
        image: "/asset/chaosikenskin.jpg",
      },
      {
        id: 9,
        code: "CCHE",
        name: "Chaopan Chicken Egg",
        price: 95,
        image: "/asset/chaochicken.jpg",
      },
      
      {
        id: 11,
        code: "CTE",
        name: "Chaopan Tapa Egg",
        price: 95,
        image: "/asset/chaotapa.jpg",
      },
      {
        id: 12,
        code: "CLKE",
        name: "Chaopan Lechon Kawali Egg",
        price: 135,
        image: "/asset/chaolechon.jpg",
      },
      {
        id: 15,
        code: "CCFE",
        name: "Chaopan Chicken Fillet Egg",
        price: 105,
        image: "/asset/chaosikenfillet.jpg",
      },
      {
        id: 16,
        code: "CBE",
        name: "Chaopan Bangus Egg",
        price: 120,
        image: "/asset/chaobangus.jpg",
      },
      {
        id: 17,
        code: "CHSR",
        name: "Chaopan Hungarian Sausage Egg",
        price: 99,
        image: "/asset/chaohungarian.jpg",
      },
      {
        id: 18,
        code: "CFFE",
        name: "Chaopan Fish Fillet Egg",
        price: 115,
        image: "/asset/chaofish.jpg",
      },
      {
        id: 20,
        code: "CPSE",
        name: "Chaopan Pusisig Egg",
        price: 135,
        image: "/asset/chaopan2.jpg",
      },
      {
        id: 101,
        code: "CCBE",
        name: "Chaopan Cordon Bleu Egg",
        price: 135,
        image: "/asset/chaocordon.jpg",
      },
      
    ],
    Bilao: [
      {
        id: 21,
        code: "BILAO1",
        name: "Bilao Fiesta Special",
        price: 800,
        image: "/asset/bilao1.jpg",
      },

      {
        id: 22,
        code: "SPAGHETTI",
        name: "Best Spaghetti in the house yow!!",
        price: 800,
        image: "/asset/spag.jpg",
      },
      {
        id: 23,
        code: "PANSIT",
        name: "Pick what u want (Canton, Bihon, Mixed)",
        price: 800,
        image: "/asset/pansit.jpg",
      },
      {
        id: 24,
        code: "PALABOK",
        name: "Yellowish Palabok you could ever have!!",
        price: 800,
        image: "/asset/palabok.jpg",
      },
      {
        id: 25,
        code: "CARBONARA",
        name: "Creamy Carbonara",
        price: 800,
        image: "/asset/carbonara.jpg",
      },
      {
        id: 26,
        code: "CHICKEN WINGS",
        name: "Bufallo & Buttered Garlic wings",
        price: 800,
        image: "/asset/wings.jpg",
      },
      {
        id: 27,
        code: "SISIG",
        name: "XS tray",
        price: 800,
        image: "/asset/sisig.jpg",
      },
      {
        id: 28,
        code: "MACARONI",
        name: "Cheesy Macaroni",
        price: 800,
        image: "/asset/cheesymacaroni.jpg",
      },
      {
        id: 29,
        code: "SIOMAI",
        name: "XS Tray (45 pcs)",
        price: 800,
        image: "/asset/siomai.jpg",
      },
      {
        id: 30,
        code: "DYNAMITE",
        name: "XS Tray",
        price: 800,
        image: "/asset/dynamite.jpg",
      },
      {
        id: 31,
        code: "SHANGHAI",
        name: "XS Tray",
        price: 800,
        image: "/asset/shanghai.jpg",
      },
      {
        id: 32,
        code: "POTATO BALLS",
        name: "XS tray",
        price: 800,
        image: "/asset/potatoballs.jpg",
      },
      {
        id: 33,
        code: "LUMPIA GULAY",
        name: "XS tray",
        price: 800,
        image: "/asset/lumpgulay.jpg",
      },
      {
        id: 34,
        code: "ROASTED CHICKEN & POTATOES",
        name: "XS tray",
        price: 800,
        image: "/asset/sikenrosted.jpg",
      },
      {
        id: 35,
        code: "CHICKEN FILLET",
        name: "XS tray",
        price: 800,
        image: "/asset/sikenpilet.jpg",
      },
      {
        id: 36,
        code: "FISH FILLET",
        name: "XS tray",
        price: 800,
        image: "/asset/fishfillet.jpg",
      },
      {
        id: 37,
        code: "CALAMARES",
        name: "XS tray",
        price: 800,
        image: "/asset/calamares.jpg",
      },
      {
        id: 38,
        code: "LECHON KAWALI",
        name: "XS tray",
        price: 800,
        image: "/asset/lechonkawali.jpg",
      },
      {
        id: 39,
        code: "UBE TURON",
        name: "XS tray",
        price: 800,
        image: "/asset/ubeturon.jpg",
      },
      {
        id: 40,
        code: "BAKED LASAGNA",
        name: "XS tray",
        price: 800,
        image: "/asset/lasagna.jpg",
      },
      {
        id: 41,
        code: "BAKED MAC",
        name: "XS tray",
        price: 800,
        image: "/asset/bakedmac.jpg",
      },
      {
        id: 42,
        code: "SPICY SEAFOOD",
        name: "XS tray",
        price: 800,
        image: "/asset/seafood.jpg",
      },
      {
        id: 43,
        code: "CORDON BLEU",
        name: "XS tray",
        price: 800,
        image: "/asset/cordon.jpg",
      },
      {
        id: 99,
        code: "OVERLOAD BURGER ",
        name: "David tray",
        price: 800,
        image: "/asset/davidoverload.jpg",
      },
    ],
    Snacks: [
      {
        id: 44,
        code: "FRIES",
        name: "Special Fries",
        price: 60,
        image: "/asset/snack1.jpg",
      },
      {
        id: 45,
        code: "UBE TURON",
        name: "Ube Turon",
        price: 65,
        image: "/asset/snack2.jpg",
      },
      {
        id: 46,
        code: "LUMPIA GULAY",
        name: "Lumpia Gulay (5pcs)",
        price: 50,
        image: "/asset/snack3.jpg",
      },
      {
        id: 47,
        code: "CHEESE STICK",
        name: "CheeseStick(10pcs) ",
        price: 70,
        image: "/asset/snack4.jpg",
      },
      {
        id: 48,
        code: "NACHOS",
        name: "Nachos",
        price: 80,
        image: "/asset/snack5.jpg",
      },
      {
        id: 49,
        code: "POTATO STICK",
        name: "Potato Stick",
        price: 80,
        image: "/asset/snack6.jpg",
      },
    
      
    ],
    Platter: [
      {
        id: 50,
        code: "PLAT1",
        name: "Family Platter",
        price: {
          solo: 250,
          family: 500,
        },
        image: "/asset/platter1.jpg",
      },

      

      {
        id: 52,
        code: "SISIG",
        name: "Solo / Platter",
        price: {
          solo: 135,
          family: 250,
        },
        image: "/asset/plattersisig.jpg",
      },

      {
        id: 53,
        code: "PUSISIG",
        name: "Solo / Platter",
        price: {
          solo: 135,
          family: 280,
        },
        image: "/asset/platterpusisig.jpg",
      },

      {
        id: 54,
        code: "LECHON KAWALI",
        name: "Solo / Platter",
        price: {
          solo: 135,
          family: 250,
        },
        image: "/asset/platterlechonkawali.jpg",
      },

      {
        id: 55,
        code: "CHICHARON BULAKLAK",
        name: "Solo / Platter",
        price: {
          solo: 150,
          family: 250,
        },
        image: "/asset/platterbulaklak.jpg",
      },

      {
        id: 56,
        code: "FLAVORED WINGS",
        name: "Solo Platter",
        price: {
          solo: 60,
          family: 240,
        },
        image: "/asset/platterwings.jpg",
      },

      {
        id: 57,
        code: "CORDON BLEU",
        name: "Solo / Platter",
        price: {
          solo: 180,
          family: 299,
        },
        image: "/asset/platterbleu.jpg",
      },
      {
        id: 58,
        code: "FISH FILLET",
        name: "Solo / Platter",
        price: {
          solo: 150,
          family: 299,
        },
        image: "/asset/platterfish.jpg",
      },
      {
        id: 59,
        code: "PORK SHANGAI",
        name: "Solo / Platter",
        price: {
          solo: 70,
          family: 180,
        },
        image: "/asset/plattershanghai.jpg",
      },
      {
        id: 60,
        code: "PORK SIOMAI",
        name: "Solo / Platter",
        price: {
          solo: 65,
          family: 200,
        },
        image: "/asset/plattersiomai.jpg",
      },
      {
        id: 61,
        code: "CLAMARES",
        name: "Solo / Platter",
        price: {
          solo: 75,
          family: 200,
        },
        image: "/asset/plattercalamares.jpg",
      },
      {
        id: 62,
        code: "DYNAMITE",
        name: "Solo / Platter",
        price: {
          solo: 75,
          family: 180,
        },
        image: "/asset/platterdynamite.jpg",
      },
    
      {
        id: 64,
        code: "CHICKEN SKIN",
        name: "Solo / Platter",
        price: {
          solo: 75,
          family: 200,
        },
        image: "/asset/platterskin.jpg",
      },
      {
        id: 66,
        code: "DINAKDAKAN",
        name: "Solo / Platter",
        price: {
          solo: 160,
          family: 300,
        },
        image: "/asset/platterdakdak.jpg",
      },
      {
        id: 67,
        code: "SISIG CHICKEN",
        name: "Solo / Platter",
        price: {
          solo: 110,
          family: 250,
        },
        image: "/asset/plattersikensisig.jpg",
      },
    ]
  };
  function Customer() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('Chaopan');

    const toggleNavbar = () => setIsCollapsed(!isCollapsed);
    const handleCategoryClick = (category) => setSelectedCategory(category);
    const [showModal, setShowModal] = useState(false);
    const [modalItem, setModalItem] = useState(null);
 
 
    const handleMoreClick = (item) => {
    setModalItem(item);
    setShowModal(true);
  };

    return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-danger" style={{ backgroundColor: "#e3b662" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/asset/meslogo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
              style={{ marginRight: '8px' }}
            />
            Messiah Cafe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/customer">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/address">Address</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <nav className="navbar bg-body-tertiary mt-2">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search" style={{ width: '60%' }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Categories */}
      <div className="container mt-4">
        <h5 className="text-center">Categories</h5>
        <div className="d-flex justify-content-center gap-2 mb-3">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="d-flex flex-column gap-3">
          {menuData[selectedCategory].map((item) => (
            <div key={item.id} className="card" style={{ backgroundColor: '#fff7e6' }}>
              <div className="row g-0">
                <div className="col-4">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-8 d-flex flex-column justify-content-center">
                  <div className="card-body">
                    <h6 className="card-title">{item.code}</h6>
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">
                      {typeof item.price === 'object'
                        ? <>
                            Solo: ₱{item.price.solo} <br />
                            Family: ₱{item.price.family}
                          </>
                        : <>₱{item.price}</>
                      }
                    </p>
                     <Link to="/cart" className="btn btn-primary">More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
  );
}

export default Customer;