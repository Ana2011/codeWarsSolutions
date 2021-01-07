//https://www.codewars.com/kata/56c22c5ae8b139416c00175d

function match({minSalary}, {maxSalary}) {
    if (!minSalary || !maxSalary) throw new Error('')
    return minSalary*0.9<=maxSalary;
}