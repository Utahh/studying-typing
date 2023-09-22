export abstract class View<T>{

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else{
            throw Error(`Seletor ${seletor} nao existe`)
        }
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<\s\S>*?<\/script>/,' ');
        }
        this.elemento.innerHTML = template;
    }

   protected abstract template(model: T): string ;
}