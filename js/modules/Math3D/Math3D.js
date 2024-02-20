class Math3D {
    constructor({WIN}) {
        this.WIN = WIN;
    }

    xs(point) {
        const zs = this.WIN.CENTER.z;
        const z0 = this.WIN.CAMERA.z;
        const x0 = this.WIN.CAMERA.x;

        return(point.x - x0) / (point.z - z0) * (zs - z0) + x0;
    }

    ys(point) {
        //дописать
    }
}