import IColorPalette = require('../interfaces/IColorPalette');

class ColorManager {
    public static $inject = ['$resource'];

    private static ALPHA: number = 0.8;

    private static previewColor: IColorPalette = {
        dark: 'rgb(84, 84, 84)',
        light: 'rgb(210, 210, 210)'
    };

    private static defaultColors: IColorPalette[] = [
        { // green
            dark: "rgb(45, 98, 52)",
            light: "rgb(208, 222, 207)",
        },
        { // blue
            dark: "rgb(56, 92, 146)",
            light: "rgb(213, 220, 236)",
        },
        { // pink/light red
            dark: "rgb(149, 73, 98)",
            light: "rgb(235, 210, 219)",
        },
        { // yellow
            dark: "rgb(177, 127, 0)",
            light: "rgb(250, 244, 203)",
        },
        { // brown
            dark: "rgb(137, 94, 46)",
            light: "rgb(231, 220, 206)",
        },
        { // cyan
            dark: "rgb(47, 119, 112)",
            light: "rgb(209, 231, 228)",
        },
        { // purple
            dark: "rgb(97, 73, 150)",
            light: "rgb(220, 213, 226)",
        }
    ];

    private courseColorMap = {};
    private usableColors: IColorPalette[];

    constructor(private $resource) {
        this.initCourseColorMap();
        this.initUsableColors();
    }

    // get course color map for this user, this schedule
    private initCourseColorMap() {
    }

    // usableColors = defaultColors - colors in courseColorMap
    // TODO: finish this
    private initUsableColors() {
        this.usableColors = ColorManager.defaultColors.slice();
    }

    private toRgba(rgb: string): string {
        return rgb.substring(0, 3) 
            + "a" 
            + rgb.substring(3, rgb.length - 1) 
            + ", "
            + ColorManager.ALPHA 
            + rgb.substring(rgb.length - 1, rgb.length);
    }

    public toPreviewColor(color: string): string {
        return this.toRgba(color);
    }

    public addColor(color: IColorPalette) {
        this.usableColors.push(color);
    }

    public getPreviewColor(): IColorPalette {
        return ColorManager.previewColor;
    }

    // return a random usable color in usableColors
    public nextColor(): IColorPalette {
        if (this.usableColors.length == 0) {
            this.initUsableColors();
        }

        var idx: number = Math.floor(Math.random() * this.usableColors.length);
        var color = this.usableColors.splice(idx, 1)[0];
        return color;
    }
}

export = ColorManager;