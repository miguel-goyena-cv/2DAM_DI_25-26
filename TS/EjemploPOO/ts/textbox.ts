export class TextBox {
    private id: string = "";
    private label: string = "";
    private html: HTMLInputElement | null = null;

    constructor(id: string, label: string) {
        this.label = label;
        this.id = id;

    }

    public pintarHtml(){

        let labelHTML = document.createElement('label') as HTMLLabelElement;
        labelHTML.textContent = this.label + ": ";
        labelHTML.setAttribute('for', this.id);
        document.body.appendChild(labelHTML);
        let textBox = document.createElement('input') as HTMLInputElement;
        textBox.id = this.id;
        document.body.appendChild(textBox);
        this.html = textBox;
    }

    public getHtmlELement(): HTMLInputElement | null{
        return this.html;
    }
}