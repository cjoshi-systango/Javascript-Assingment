let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID:
    3245}
    ];
    function compare(a,b)
    {
    let a1 = a.title,
        b1 = b.title;

    if (a1 < b1) {
        return -1;
    }
    if (a1 > b1) {
        return 1;
    }
    return 0;
};
    console.log(library.sort(compare));