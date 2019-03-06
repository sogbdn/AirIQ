import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

export default function withAuth(ComponentToProtect){

  return class extends Component {

    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }

    componentDidMount(){
      console.log('localStorage', localStorage.getItem('token'));
      axios.get(`/verify/${localStorage.getItem('token')}`)
        .then(res => {
          if (res.data.error === false) {
            this.setState({ loading:false})
          } else {
            this.setState({ loading: false, redirect: true})
          }
        })
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to='/login' />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}

