/**
 * @param {HTMLElement} slider
*/

export const anterior = (slider) => {
    slider.scrollLeft -= 345;
};

export const proximo = (slider) => {
    slider.scrollLeft += 345;
};