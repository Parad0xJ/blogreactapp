import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Blogg from './blogui.jpg'
import './App.css';

const ROUTES = {
  one: '#/one', two: '#/two', three: '#/three', four: '#/four', five: '#/five'
}
export default class App extends Component {

  state = {
    data: [],
    currentRoute: ROUTES.one
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => this.setState({
        data: result.data
      }))
      .catch(error => console.log(error))
  }
  
  componentDidMount() {
    window.location.hash = ROUTES.one;
    window.onhashchange = () => {
      this.setState({ currentRoute: window.location.hash })
    }
  }

  renderRoute() {
    switch (this.state.currentRoute) {
      case ROUTES.one: return <One state={this.state.data} title='Posts User : One' />;
      case ROUTES.two: return <Two state={this.state.data} title='Posts User : Two' />;
      case ROUTES.three: return <Three state={this.state.data} title='Posts User : Three' />;
      case ROUTES.four: return <Four state={this.state.data} title='Posts User : Four' />;
      case ROUTES.five: return <Five state={this.state.data} title='Posts User : Five' />;
      default: return <NotFound />
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href={ROUTES.one} className="navbar-brand">
            <img src={Blogg} alt="blogg_en_image" style={{ height: 50 }} />
          </a>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <a href={ROUTES.one}>User: One</a>
            </li>
            <li className="list-group-item">
              <a href={ROUTES.two}>User: Two</a>
            </li>
            <li className="list-group-item">
              <a href={ROUTES.three}>User: Three</a>
            </li>
            <li className="list-group-item">
              <a href={ROUTES.four}>User: Four</a>
            </li>
            <li className="list-group-item">
              <a href={ROUTES.five}>User: Five</a>
            </li>
          </ul>
        </nav>

        <div className="container mb-4">
          {this.renderRoute()}
             </div>

       
            <div className="footer bg-dark text-white">
              <h3 className="display-5">Blog App React</h3>
              <p className="lead">Third App created with react  - ©Laurent CAMINADE July 2019 -</p>
              <p className="">React - C.R.A - Bootstrap IV - Axios - <a href="https://jsonplaceholder.typicode.com/" className='text-warning'>Json Place Holder API</a></p>
            </div>
      

      </div>
    );
  }
}

function Cards(props) {
  return (

    <div className='card border-primary mb-3 mt-3' id='cards'>
      <div className="card-header bg-transparent border-primary">
        User : {props.item.userId}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.body}</p>
      </div>
      <div className="card-footer bg-transparent border-primary">ID : {props.item.id}</div>
    </div>

  )
}


const One = props => {
  const idOneElt = props.state.filter(elt => elt.userId === 1)
  return (
    <div>
      <h2 className='text-primary'>{props.title}</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {idOneElt.map((item, i) => <Cards key={i} item={item} />)}
      </div>
    </div>
  )
}
const Two = props => {
  const idTwoElt = props.state.filter(elt => elt.userId === 2)
  return (
    <div>
      <h2 className='text-success'>{props.title}</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {idTwoElt.map((item, i) => <Cards key={i} item={item} />)}
      </div>
    </div>
  )
}
const Three = props => {
  const idThreeElt = props.state.filter(elt => elt.userId === 3)
  return (
    <div>
      <h2 className='text-danger'>{props.title}</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {idThreeElt.map((item, i) => <Cards key={i} item={item} />)}
      </div>
    </div>
  )
}
const Four = props => {
  const idFourElt = props.state.filter(elt => elt.userId === 4)
  return (
    <div>
      <h2 className='text-info'>{props.title}</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {idFourElt.map((item, i) => <Cards key={i} item={item} />)}
      </div>
    </div>
  )
}
const Five = props => {
  const idFiveElt = props.state.filter(elt => elt.userId === 5)
  return (
    <div>
      <h2 className='text-secondary'>{props.title}</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {idFiveElt.map((item, i) => <Cards key={i} item={item} />)}
      </div>
    </div>
  )
}
const NotFound = props => <h1>La page demandée n'existe pas !!!</h1>