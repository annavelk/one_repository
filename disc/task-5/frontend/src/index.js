import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      items: [],
      error: null,
    }
  }

  componentDidMount() {
    fetch("http://localhost/books/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('GOOD');
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error);
      return <div>Ошибка...</div>
    }
    else if (!this.state.isLoaded) {
      return <div>Загрузка...</div>
    } else {
      console.log(this.state.isLoaded);
      console.log(this.state.items);
      return (
        <ul>
          {this.state.items.map(item => (<li key={item.id}>{item.name} {item.title}</li>))}
        </ul>
      )
    }
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
