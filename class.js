// For Sort by
document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort');
    const productList = document.getElementById('sea');

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const products = Array.from(productList.querySelectorAll(".sea-product"));

        products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            const ratingA = parseFloat(a.getAttribute('data-rating'));
            const ratingB = parseFloat(b.getAttribute('data-rating'));

            switch (sortValue){
                case 'price-asc':
                    return priceA - priceB;

                case 'price-desc':
                    return priceB - priceA;

                case 'rating':
                    return ratingB - ratingA;
            }
        });

        productList.innerHTML = '';
        products.forEach(p => productList.appendChild(p));
    });

    
    // For Filter

    const minPriceSlider = document.getElementById('min-price');
    const maxPriceSlider = document.getElementById('max-price');
    const priceRangeDisplay = document.getElementById('price-range-display');
    const sliderTrack = document.querySelector('.slider-track');

    function updateSlider() {
        if (parseInt(minPriceSlider.value) >
    parseInt(maxPriceSlider.value)) {
        minPriceSlider.value = maxPriceSlider.value;
    }

    const minVal = parseInt(minPriceSlider.value);
    const maxVal = parseInt(maxPriceSlider.value);

    const products = productList.querySelectorAll(".sea-product");
    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        if (price < minVal || price > maxVal) {
            product.hidden = true;
        } else {
            product.hidden = false;
        }
    });

    priceRangeDisplay.textContent = '\u0024' + minVal + " - " + '\u0024' + maxVal;

    const minPercent = ((minVal - minPriceSlider.min) / (minPriceSlider.max 
        - minPriceSlider.min)) * 100;

    const maxPercent = ((maxVal - maxPriceSlider.min) / (maxPriceSlider.max 
        - maxPriceSlider.min)) * 100;

        sliderTrack.style.background = 
        `linear-gradient(to right, #ddd ${minPercent}%, #6f6c6c ${minPercent}%, #6f6c6c ${maxPercent}%, #ddd ${maxPercent}%)`;
    }

    updateSlider();
    minPriceSlider.addEventListener('input',updateSlider);
    maxPriceSlider.addEventListener('input',updateSlider);
});
