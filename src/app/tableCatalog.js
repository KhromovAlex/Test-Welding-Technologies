export default () => {
    let target = document.querySelector('#table-catalog');
    let catalog = document.querySelector('.catalog');

    target.addEventListener('mouseenter', () => {
        catalog.classList.add('catalog_table');
    });
};