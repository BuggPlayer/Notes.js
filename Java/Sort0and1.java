package Java;

public class Sort0and1 {
    public static void main(String[] args) {
        int arr[] = { 1, 0, 1, 0, 1 };
        int left = 0;
        int right = arr.length - 1;
        int i = 0;

        while (left < right) {
            int temp;
            if (arr[i] == 0) {
                temp = arr[i];
                arr[i] = arr[left];
                arr[left] = temp;
                i++;
                left++;
              
            } else {
                // swaping
                temp = arr[i];
                arr[i] = arr[right];
                arr[right] = temp;
                right--;
            }
        }

        for (int j = 0; j < arr.length; j++) {
            System.out.println("arr" + arr[j]);
        }
    }

}

// public static int[] sortArray(int[] array){
// int first = 0;
// int last = array.length-1;
// while(first<last){
// if(array[first]==0){
// first++;
// }else if(array[last] == 0){
// int temp = array[last];
// array[last] = array[first];
// array[first] = temp;
// first++;
// }else{
// last--;
// }
// }
// return array;
// }