import moment from 'moment';

export class Horloge {
    constructor(container) {
        this.container = container;
    }
    start() {
        setInterval(this.update.bind(this), 1000);
    }
    update() {
        this.container.innerHTML = moment().format('hh:mm:ss');
    }
}