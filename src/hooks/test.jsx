import {useEffect, useRef} from "react";

const Test = () => {
    const blockRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (blockRef.current && !blockRef.current.contains(event.target)) {
                // Клік відбувся поза блоком, виконайте код для закриття вікна тут
                console.log('Закриття вікна');
            }
        };

        // Додайте обробник події при монтуванні компоненту
        document.addEventListener('click', handleClickOutside);

        // Приберіть обробник події при розмонтовуванні компоненту
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={blockRef}>
            {/* Ваш вміст блоку тут */}
            <p>Це ваш блок</p>
        </div>
    );
};

export default Test;