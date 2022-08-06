export default class aaa {
    message: string;

    constructor(message: string) {
        this.message = message
    }

    public bbb(elem: HTMLElement | null) {
        if(elem) {
            elem.innerText = this.message
        }
    }
}