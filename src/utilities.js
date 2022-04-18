export const drawRect = (detections, ctx) => {
    detections.forEach((prediction) => {
        // Get prediction results
        const [x, y, width, height] = prediction.bbox;
        const label = prediction.class;

        // Set styling
        const color = "#FF0000";
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.font = "20px Verdana";
        ctx.fillStyle = color;

        // Draw rectangle and label
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillText(label, x, y);
        ctx.stroke();
    });
};
