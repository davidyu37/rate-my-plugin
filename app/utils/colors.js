export function generateContrastingColors(maxColors) {
    let colors = [];
    for (let i = 0; i < maxColors; i++) {
        // Generate a hue value evenly distributed across the color wheel (0 - 360)
        let hue = Math.round(360 * i / maxColors);

        // Use a saturation and lightness value that will create bright, saturated colors
        // These can be adjusted to taste, but the values below should give good results
        let saturation = Math.round(30 + Math.random() * 40); // Random saturation between 30% and 70%
        let lightness = Math.round(30 + Math.random() * 40); // Random lightness between 30% and 70%

        // Create the color string
        colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return colors;
}