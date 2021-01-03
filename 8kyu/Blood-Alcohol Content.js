//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8

const bloodAlcoholContent = ({ ounces, abv }, weight, sex, time) =>
    Number(
        (
            ounces * abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) -
            0.015 * time
        ).toFixed(4)
    );