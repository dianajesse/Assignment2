import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {MenuItem} from './MenuItem';
import {Navbar} from 'react-bootstrap';
import './NavBar.css'

class NavBar extends Component{
    render() {   
      return (
<Navbar fixed="top" bg="dark" variant="dark" >
  <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand"></Link>
              <ul className="Navright">
                {
                  MenuItem.map((item,index)=>{
                    return(
                    <li key = {index}>
                      <Link className={item.className} to={item.url}>{item.title}</Link>
                    </li>
                    )
                  }
                  )
                }
              </ul>

            </div>
        </nav>
        </Navbar>
      );
    }
}
export default (NavBar);


