function mergeSort<T>(input: T[]): T[] {

    if (input.length <= 1) {
        return input;
    }

    const listA = input.slice(0, Math.ceil(input.length / 2));
    const listB = input.slice(listA.length, input.length);

    return sortedMerge(
        mergeSort(listA),
        mergeSort(listB),
    )
}

function sortedMerge<T>(listA: T[], listB: T[]): T[] {

    const merged: T[] = [];

    while (listA.length && listB.length) {

        if (listA[0] <= listB[0])
            merged.push(listA.shift());
        else
            merged.push(listB.shift());
    }

    while (listA.length > 0) merged.push(listA.shift());
    while (listB.length > 0) merged.push(listB.shift());

    return merged;
}
function merge<T>(listA: T[], listB: T[]): T[] {
    return ["collection_1: ["+mergeSort(listA)+"]",
        "collection_2: ["+mergeSort(listB)+"]",
    ]
}
function Duplicate_Number_in_list(){
    let collection_1=[1,1,2,2,2]
    let collection_2=[1,2,2,2,2]
    return merge(collection_1, collection_2);
}
function long_number_in_list(){
    let collection_1=[10000000,1200000000,2000000000000,2200000000000,2000000000000]
    let collection_2=[70000000,270000000,6370000000,66270000000,223170000000]
    return merge(collection_1, collection_2);
}
function many_value_in_list(){
    let collection_1=[1,2,3,5,6,8,7,9,10,11,12,15,17,20]
    let collection_2=[10,21,33,52,62,83,74,91,100,101,112,115,117,230]
    return merge(collection_1, collection_2);
}
function negative_number_in_list(){
    let collection_1=[-19,-12,-3,-2]
    let collection_2=[-10,-7,-5,-4]
    return merge(collection_1, collection_2);
}
function all_number_is_zero(){
    let collection_1=[0,0,0,0]
    let collection_2=[0,0,0,0]
    return merge(collection_1, collection_2);
}
function double_number_in_list(){
    let collection_1=[1.25,1.53,1.72,1.91]
    let collection_2=[2.5,3.7,9.8,14.5]
    return merge(collection_1, collection_2);
}
function positive_number_and_negative_number_in_list(){
    let collection_1=[-1,1,2,3]
    let collection_2=[-2,-1,5,6]
    return merge(collection_1, collection_2);
}
function positive_number_and_double_number_in_list(){
    let collection_1=[0.1,1,2.2,3,5,5.6,6,7.9,78]
    let collection_2=[23.5,27,30.4,33]
    return merge(collection_1, collection_2);
}
function negative_number_and_double_number_in_list(){
    let collection_1=[-55,-25.25,-20.17,-13.33,-9.97]
    let collection_2=[-65.89,-55.63,-43.23,-23.22,-13.33]
    return merge(collection_1, collection_2);
}
function integer_number_and_double_number_in_list(){
    let collection_1=[-0.1,-1,-2.2,3,5,5.6,6,7.9,78]
    let collection_2=[-23.5,-27,30.4,33]
    return merge(collection_1, collection_2);
}
function float_number_in_list(){
    let collection_1=[-11.556594,-6.665656,-2.55959,1.23565,2.2546,5.849562,6.589926]
    let collection_2=[,-27.85959,-22.595959,-11.959592,5.5959595,7.59592626,9.2959596]
    return merge(collection_1, collection_2);
}