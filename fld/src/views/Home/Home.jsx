import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import axios from "axios";

class Home extends Component {
  handleScroll = () => {
    const app = document.getElementById("App");
    const bgTextBottom = document.getElementById("bgTextBottom");
    const navbar = document.getElementById("navbar");
    const mainContent = document.getElementById("mainContent");
    const navbarLogo = document.getElementById("navbarLogo");
    // show hide
    if (window.pageYOffset > 0) {
      bgTextBottom.classList.add("hide");
    } else {
      if (bgTextBottom.classList.contains("hide")) {
        bgTextBottom.classList.remove("hide");
      }
    }

    if (window.pageYOffset > app.clientHeight) {
      navbar.classList.add("sticky");
      mainContent.style.paddingTop = navbar.clientHeight - 8 + "px";

      // mainContent.classList.add('main-content-padding-top')
    } else {
      navbar.classList.remove("sticky");
      mainContent.style.paddingTop = "0px";
      // mainContent.classList.remove('main-content-padding-top')
    }
    navbarLogo.style.top = navbar.offsetTop + 10 + "px";
  };

  componentDidMount() {
    axios.get ("https://jsonplaceholder.typicode.com/posts")
      .then ((response) => {
          console.log(response)
      });
    
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div id="App" className="App" onScroll={this.onScroll}>
        <div
          className="bg"
          // style={{background: "red", width: "100%", height: "100%"}}
        >
          <div className="bg-text">
            <h1>Bella Bakes</h1>
          </div>
          <div id="bgTextBottom" className="bg-text-bottom">
            <h1>Scroll to show more</h1>
          </div>
        </div>

        <div id="navbar" className="Navbar">
          {/* add a window resize handler and change the position of the logo programatically */}
          <div id="navbarLogo" className="navbar-logo">
            <img src={logo} width={120} />
          </div>
          <div
            className="Navbar__Link Navbar__Link-toggle"
            onClick={() => {
              const navs = document.querySelectorAll(".Navbar__Items");

              navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
            }}>
            <i className="fa fa-bars" />
          </div>
          <nav className="Navbar__Items" />
          <nav className="Navbar__Items Navbar__Items">
            <div className="Navbar__Link">
              {" "}
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="Navbar__Link">
              <NavLink to="/about">About</NavLink>
            </div>
          </nav>
          {/* <div className="navbar-item">
          <NavLink to="/">Home</NavLink>
          </div>
          <div className="navbar-item">
          <NavLink to="/about">About</NavLink>
          </div> */}
        </div>
        <div id="mainContent" className="main-content">
          <h3>Sticky Navigation Example</h3>
          <p>
            The navbar will stick to the top when you reach its scroll position.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            The navbar will stick to the top when you reach its scroll position.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            The navbar will stick to the top when you reach its scroll position.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
