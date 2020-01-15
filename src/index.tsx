import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import LocalizedStrings from 'react-localization';
let strings = new LocalizedStrings({
  en: {
    how: "How do you want your egg today?",
    boiledEgg: "Boiled egg",
    softBoiledEgg: "Soft-boiled egg",
    choice: "How to choose the egg"
  },
  it: {
    how: "Come vuoi il tuo uovo oggi?",
    boiledEgg: "Uovo sodo",
    softBoiledEgg: "Uovo alla coque",
    choice: "Come scegliere l'uovo"
  },
  th: {
    how: "วันนี้คุณต้องการไข่ของคุณอย่างไร?",
    boiledEgg: "ไข่สุก",
    softBoiledEgg: "ไข่เกือบสุก",
    choice: "เลือกไข่อย่างไร"
  }
});
class App extends Component {

  changeLang = () => {
    strings.setLanguage('it');
    this.setState({});

  }
  changeLangEN = () => {
    strings.setLanguage('en');
    this.setState({});

  }
  changeLangTH = () => {
    strings.setLanguage('th');
    this.setState({});

  }
  render() {
    return (<div>
      {strings.how}
      <br />
      {strings.boiledEgg}
      <br />
      {strings.softBoiledEgg}
      <br />
      {strings.choice}
      <br />
      <input type="button" value="English" onClick={this.changeLangEN} />
      <input type="button" value="Italian" onClick={this.changeLang} />
      <input type="button" value="Thai" onClick={this.changeLangTH} />
    </div>)
  }
}

render(<App />, document.getElementById('root'))