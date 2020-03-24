export default () => {
    const target = document.querySelector('#table-catalog');
    const catalog = document.querySelector('.catalog');

    target.addEventListener('mouseenter', () => {
        catalog.classList.add('catalog_table');
    });
};