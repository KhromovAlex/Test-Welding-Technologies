export default () => {
    const catalog = document.querySelector('.catalog');

    catalog.addEventListener('dragstart', (e) => {
        const target = e.target;
        if(!target.classList.contains('product')) return;

        const products = document.querySelectorAll('.product');
        const index = Array.from(products).indexOf(target);

        target.style.opacity = '0.1';

        e.dataTransfer.setData('text/html', index);
    });

    catalog.addEventListener('dragenter', (e) => {
        if(e.target.closest('.product')) {
            e.target.closest('.product').style.backgroundColor = '#ffad00';
        }
    });
    
    catalog.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    catalog.addEventListener('dragleave', (e) => {
        if(e.target.closest('.product') && e.relatedTarget === null) {
            e.target.closest('.product').style.backgroundColor = '';
            return;
        }
        if(e.target.closest('.product') && e.relatedTarget.closest('.product') !== e.target.closest('.product')) {
            e.target.closest('.product').style.backgroundColor = '';
            return;
        }
    });

    catalog.addEventListener('drop', (e) => {
        const target = e.target;
        if(!target.closest('.product')) return;

        e.target.closest('.product').style.backgroundColor = '';

        const products = document.querySelectorAll('.product');
        const dragElem = products[e.dataTransfer.getData('text/html')];
        const dropElem = target.closest('.product');

        if(target.closest('.product') == products[e.dataTransfer.getData('text/html')]) return;

        [dragElem.innerHTML, dropElem.innerHTML] = [dropElem.innerHTML, dragElem.innerHTML]
    });

    catalog.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';        
    });
};