import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function InputData(props) {
  // Форма для ввода данных.
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Число:
        <input type="number" value={props.value} onChange={props.onChange} />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}


function ResultData(props) {
  // Результат работы введенных данных
  let resultText = "Число " + (props.resultDataFlag ? "не" : "") + " входит в нужный диапазон";

  return (
    <div className="result-data">{resultText}</div>
  );
}


class MainApp extends React.Component {
  // Основной компонент

  constructor(props) {
    super(props);

    this.state = {
      inputValueDefault: 10,  // Значение поля по умолчанию
      resultDataFlag: false,  // Результат получения диапазона числа
    }

    // Этот момент можно делать по другому.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Предотвращает перезагрузку страницы по кнопке отправить.
    event.preventDefault();
  }

  handleChange(event) {
    // Основной обработчик логики
  
    let data_value = event.target.value;
    let data_type = typeof data_value;

    console.log(data_value, data_type);

    data_value = Number(data_value);

    console.log(data_value, typeof data_value);

    // Проверяем число, от этого меняем флаг.
    if (data_value >= 10) {
      this.setState({resultDataFlag: true});
    } else {
      this.setState({resultDataFlag: false});
    }

    // Пробрасываем текущее значение в форму.
    this.setState({inputValueDefault: data_value});
  }

  renderInputData() {
    return (
      <InputData
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        value={this.state.inputValueDefault}
      />
    );
  }

  renderResultData() {
    return (
      <ResultData resultDataFlag={this.state.resultDataFlag} />
    );
  }

  render() {
    return (
      <div>
        {this.renderInputData()}
        {this.renderResultData()}
      </div>
    );
  }
}


ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);
