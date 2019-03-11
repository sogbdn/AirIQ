import React, { Component } from "react";

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

//page not actually defined yet
export default class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      concern_type: '',
      bad_days: '',
      good_days: ''
    }
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('token');
    if (currentUser !== null) {
    axios
    .get(`http://localhost:3001/verifyUser?currentUser=${currentUser}`)
    .then((res) => {
        let decodedUser = res.data;
        this.setState( {
          first_name: decodedUser.first_name,
          last_name: decodedUser.last_name,
          email: decodedUser.email,
          phone_number: decodedUser.phone_number,
          concern_type: decodedUser.profile_type,
          bad_days: decodedUser.sms_bad_days,
          good_days: decodedUser.sms_good_days
        })
    });
  }
    console.log("UserProfile Mounted");

  }
  onChange = (e) => {
    this.setState({
      phone_number: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const email = this.state.email;
    const phone_number = this.state.phone_number;
    axios.post('http://localhost:3001/changeNumber', { first_name: first_name, last_name: last_name, email: email, phone_number:phone_number })
      .then((result) => {
          localStorage.setItem('token', result.data.token);
          console.log('server responded', result)
      });
  };

  render() {
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
      return (
        <div>
          <Container><Card ><Card.Body>
         
            <Table striped bordered>
          <tbody>
    <tr>
      <td><div className= 'userprofileindex'>Name:</div></td>
      <td><p>{this.state.first_name} {this.state.last_name}</p></td>
    </tr>
    <tr>
      <td><div className= 'userprofileindex'>Email:</div></td>
      <td><p>{this.state.email}</p></td>
    </tr>
    <tr>
      <td><Form.Label>Phone Number</Form.Label></td>
      <td> <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group as={Col} md="1" lg="3" controlId="validationCustom05">
              <Form.Control type="num"
                placeholder="Phone Number"
                name="phone_number"
                value={this.state.phone_number}
                onChange={this.onChange}
                className="userprofileform"
              />
              
            </Form.Group>
            <Button type="submit">Change Phone Number</Button>
          </Form>
      </td>
    </tr>
    <tr><td><div className= 'userprofileindex'>
           Receiving Texts on Good Air Quality Days 
           </div>
           </td><td> {this.state.good_days}
           </td>
           </tr><tr>
           <td>
          <div className= 'userprofileindex'>
          Receiving Texts on Bad Air Quality Days
          </div>
          </td><td>
            <div>
            {this.state.bad_days}
          </div>
          </td>
          </tr><tr>
          <td>
          <div className= 'userprofileindex'>
          Health Concern Tier</div> </td><td>
            {this.state.concern_type}</td></tr>
    </tbody>
    </Table>
    
          </Card.Body>
          </Card>
          </Container>
        </div>

      )
    } else {
      return (
        <div>
          <Card>
          You are not logged in
          </Card>
        </div>
      )
    }
  }
}
