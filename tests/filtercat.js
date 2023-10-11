
//just a helper function to clean up data

function countCategories() {
let categoriesWithProducts = [];

// List of categories to filter
let categoriesToFilter = [
    "Saved 20 products - category 706","Saved 20 products - category 711","Saved 20 products - category 712","Saved 20 products - category 713","Saved 18 products - category 714","Saved 1 products - category 716"
];

// Use a loop to filter and extract the category numbers
for (let category of categoriesToFilter) {
    // Extract the category number using regex
    let match = category.match(/category (\d+)/);
    if (match) {
        let categoryNumber = parseInt(match[1]);
        if (!isNaN(categoryNumber)) {
            categoriesWithProducts.push(categoryNumber);
        }
    }
}

console.log(categoriesWithProducts);
}

let categoriesWithProducts = [100,99,98,97,96,95,92,91,90,89,88,87,86,85,84,83,81,80,77,76,75,74,73,71,70,68,67,66,65,60,58,54,52,46,39,36,18,14,108, 110, 111, 112, 114, 115, 116, 117, 118, 119, 121, 124, 127, 128, 129, 130,
    132, 136, 137, 138, 140, 147, 148, 149, 150, 152, 153, 154, 156, 157, 158, 159,
    161, 162, 163, 164, 165, 166, 167, 168, 169, 172, 173, 174, 175, 176, 177, 178,
    184, 185, 186, 189, 190, 191, 195, 196, 197, 198, 199,300, 301, 380, 381, 382, 383, 384, 387, 388, 389, 390, 392, 393, 394, 395, 396, 397, 398, 400, 401, 402, 403, 404, 406, 407, 408, 409, 410, 412, 414, 415,
    416, 417, 418, 420, 424, 425, 426, 429, 430, 436, 437, 440,
    442, 443, 444, 449, 452, 454, 455, 462, 463, 472, 474, 475,
    476, 480, 481, 482, 492, 494, 495, 496, 497, 498, 502, 503,
    504, 505, 507, 510, 516, 517, 524, 525, 527, 528, 536, 565,
    573, 585, 586, 587, 589, 595, 596, 598, 602, 623, 624, 625,
    626, 629, 632, 635, 636, 637, 641, 642, 643, 644, 645, 646,
    649, 650, 651, 652, 653, 654, 655, 656, 660, 667, 672, 673,
    674, 685, 704, 705,706, 711, 712, 713, 714, 716, 717, 718, 720,
    722, 727, 728, 733, 736, 739, 742, 743, 744,
    745, 746, 747, 748, 749, 750, 751, 756, 757,
    758, 760, 766, 768, 769, 770, 772, 775, 778,
    779, 784, 785, 797, 798, 812, 814, 826, 832,
    839, 850, 861, 863, 864, 877, 879, 886, 905,
    918, 934, 937, 946, 949, 954, 955, 956, 957,
    958, 959, 961, 962, 978, 983, 984, 985, 998 ]


    console.log(categoriesWithProducts.length)