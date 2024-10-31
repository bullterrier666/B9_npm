// arrayUtils.js

/**
 * Убирает дубликаты из массива.
 * @param {Array} arr - Входной массив.
 * @returns {Array} - Новый массив без дубликатов.
 */
function unique(arr) {
    return [...new Set(arr)];
}

/**
 * Находит максимальное значение в массиве.
 * @param {Array<number>} arr - Входной массив чисел.
 * @returns {number|null} - Максимальное значение или null, если массив пуст.
 */
function max(arr) {
    return arr.length > 0 ? Math.max(...arr) : null;
}

module.exports = { unique, max };
