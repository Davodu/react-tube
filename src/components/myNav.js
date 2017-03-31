import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';


export default class MyNav extends Component {

    render(){

        return (

            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Davodu-React-Tube
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text pullRight>
                            Created by <Navbar.Link href="https://github.com/davodu" target="_blank" className='external-link'>Davies Odu</Navbar.Link>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )

    }
}


