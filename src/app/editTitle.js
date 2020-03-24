export default () => {
    const catalog = document.querySelector('.catalog');
    catalog.addEventListener('click', (e) => {
        const target = e.target;
        if(!target.classList.contains('product-description__title')) return;
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');

        form.className = 'product-description__form';
        input.className = 'product-description__input';
        input.value = target.innerHTML;
        button.className = 'product-description__button';
        button.innerHTML = 'Готов';

        form.append(input);
        form.append(button);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const target = e.target;
            const title = document.createElement('h3');

            title.innerHTML = target.elements[0].value;
            title.className = 'product-description__title';
            target.replaceWith(title);
        });

        target.replaceWith(form);
        input.focus();
    });
};