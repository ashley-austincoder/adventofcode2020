/**
 * --- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
 */
const input = [1810, 1729, 1857, 1777, 1927, 1936, 1797, 1719, 1703, 1758, 1768, 2008, 1963, 1925, 1919, 1911, 1782, 2001, 1744, 1738, 1742, 1799, 1765, 1819, 1888, 127, 1880, 1984, 1697, 1760, 1680, 1951, 1745, 1817, 1704, 1736, 1969, 1705, 1690, 1848, 1885, 1912, 1982, 1895, 1959, 1769, 1722, 1807, 1901, 1983, 1993, 1871, 1795, 1955, 1921, 1934, 1743, 1899, 1942, 1964, 1034, 1952, 1851, 1716, 1800, 1771, 1945, 1877, 1917, 1930, 1970, 1948, 1914, 1767, 1910, 563, 1121, 1897, 1946, 1882, 1739, 1900, 1714, 1931, 2000, 311, 1881, 1876, 354, 1965, 1842, 1979, 1998, 1960, 1852, 1847, 1938, 1369, 1780, 1698, 1753, 1746, 1868, 1752, 1802, 1892, 1755, 1818, 1913, 1706, 1862, 326, 941, 1926, 1809, 1879, 1815, 1939, 1859, 1999, 1947, 1898, 1794, 1737, 1971, 1977, 1944, 1812, 1905, 1359, 1788, 1754, 1774, 1825, 1748, 1701, 1791, 1786, 1692, 1894, 1961, 1902, 1849, 1967, 1770, 1987, 1831, 1728, 896, 1805, 1733, 1918, 1731, 661, 1776, 1494, 2005, 2009, 2004, 1915, 695, 1710, 1804, 1929, 1725, 1772, 1933, 609, 1708, 1822, 1978, 1811, 1816, 1073, 1874, 1845, 1989, 1696, 1953, 1823, 1923, 1907, 1834, 1806, 1861, 1785, 297, 1968, 1764, 1932, 1937, 1826, 1732, 1962, 1916, 1756, 1975, 1775, 1922, 1773];

// PT 1: solution:
const twoNums = findTwoNumbersThatSum2020(input);
const result1 = multiplyArrItems(twoNums);


// PT 2 solution:
const threeNums = findThreeNumbersThatSum2020(input);
const result2 = multiplyArrItems(threeNums);


const findTwoNumbersThatSum2020 = (arr) => {
    let floorIndex = 0;
    let res = null;
    while (!res && floorIndex < arr.length) {
        const val1 = arr[floorIndex];
        for (let i = floorIndex + 1; i < arr.length; i++) {
            if (val1 + arr[i] === 2020) {
                res = [val1, arr[i]];
                break;
            }
        }
        floorIndex++;
    }
    return res;
};

const findThreeNumbersThatSum2020 = (arr) => {
    let floorIndex = 0;
    let res = null;
    while (!res && floorIndex < arr.length) {
        const val1 = arr[floorIndex];
        for (let i = floorIndex + 1; i < arr.length; i++) {
            const val2 = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if (val1 + val2 + arr[j] === 2020) {
                    res = [val1, val2, arr[j]];
                    break;
                }
            }

        }
        floorIndex++;
    }
    return res;
};

const multiplyArrItems = (arr) => {
    return arr.reduce((item, acc) => { return acc * item }, 1);
}

console.log('___findNumbersThatSum2020(input)', findNumbersThatSum2020(input))