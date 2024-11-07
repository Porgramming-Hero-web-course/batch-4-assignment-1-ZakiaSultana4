type rectangleShape = {
    shape: string;
    width: number;
    height: number;
}

type circleShape = {
    shape: string;
    radius: number;
}

function calculateShapeArea(value: rectangleShape | circleShape): number {
    let area: number = 0;

    if (value.shape === "circle" && "radius" in value) {
        area = Math.PI * value.radius * value.radius;
        area = parseFloat(area.toFixed(2));
    }
    else if (value.shape === "rectangle" && "width" in value && "height" in value) {
        area = value.width * value.height;
    }

    return area;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea); 

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
// console.log(rectangleArea);
