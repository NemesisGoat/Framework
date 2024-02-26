class Graph3D extends Component {
    constructor(options) {
        super(options);
        const WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
            CENTER: new Point(0, 0, -30),
            CAMERA: new Point(0, 0, -50)
        }
        this.graph = new Graph({id:'canvasGraph3D', width:600, height:600, WIN});
        this.math3D = new Math3D({WIN});
        this.scene = this.cube();
        this.renderScene();
    }
    addEventListeners() { };
    cube() {
        return new Surface([new Point(10, 10, 10), new Point(10, -10, 10), new Point(-10, -10, 10), new Point(-10, 10, 10), new Point(-10, 10, -10), new Point(10, 10, -10), new Point(10, -10, -10), new Point(-10, -10, -10)],
        [new Edge(0, 1), new Edge(1, 2), new Edge(2, 3), new Edge(3, 0),new Edge(0, 5), new Edge(1, 6), new Edge(2, 7), new Edge(3, 4), new Edge(4, 5), new Edge(5, 6), new Edge(6, 7), new Edge(7, 4)])
    }
    renderScene() {
        this.scene.points.forEach(point => this.graph.point(this.math3D.xs(point), this.math3D.ys(point)));
        this.scene.edges.forEach(edge => {
            const point1 = this.scene.points[edge.p1];
            const point2 = this.scene.points[edge.p2];
            console.log(point2);
            this.graph.line(this.math3D.xs(point1), this.math3D.ys(point1), this.math3D.xs(point2), this.math3D.ys(point2));
        });
    }
}