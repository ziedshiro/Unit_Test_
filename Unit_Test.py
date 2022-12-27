def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]
        mergeSort(L)
        mergeSort(R)
 
        i = j = k = 0
 
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
 
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
 
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
 
def printList(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()
 
def merge(arr1,arr2):
    mergeSort(arr1)
    mergeSort(arr2)
    printList(arr1)
    printList(arr2)

def Duplicate_Number_in_list():
    collection_1=[1,1,2,2,2]
    collection_2=[1,2,2,2,2]
    merge(collection_1,collection_2)


def long_number_in_list():
    collection_1=[10000000,1200000000,2000000000000,2200000000000,2000000000000]
    collection_2=[70000000,270000000,6370000000,66270000000,223170000000]
    merge(collection_1,collection_2)

def many_value_in_list():
    collection_1=[1,2,3,5,6,8,7,9,10,11,12,15,17,20]
    collection_2=[10,21,33,52,62,83,74,91,100,101,112,115,117,230]
    merge(collection_1,collection_2)

def negative_number_in_list():
    collection_1=[-19,-12,-3,-2]
    collection_2=[-10,-7,-5,-4]
    merge(collection_1,collection_2)

if __name__ == '__main__':
    Duplicate_Number_in_list()
    long_number_in_list()
    many_value_in_list()
    negative_number_in_list()