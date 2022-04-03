import '../css/app.scss';
import Cards from "./cards";
import Pokemon from "./pokemon";


class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      //   new Cards();
        if (document.querySelector('.js-index')) {
            new Cards();
        }
        if (document.querySelector('.js-pokemon')) {
            new Pokemon();
        }
    }
}

new App();
