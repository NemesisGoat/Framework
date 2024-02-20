class App extends Component {
    constructor(props) {
        super(props);
        this.header = new Header({
            id: 'header',
            parent: this.id,
            template: template.headerTemplate,
            callbacks: {
                showPage: (name) => this.showPage(name)
            }
        });
        this.graph2D = new Graph2D({
            id: 'graph2D',
            parent: this.id,
            template: template.graph2DTemplate,
        });
        this.calc = new Calc({
            id: 'calc',
            parent: this.id,
            template: template.calcTemplate,
        });

        this.showPage('graph2D');
    }

    showPage(name) {
        this.calc.hide();
        this.graph2D.hide();
        if (this[name]?.show) {
            this[name].show();
        }
    }
}