package arrays;

public class CheckSortedArr {
    public static void main(String[] args) {

        int arr[] = { 4, 5, 6, 7, 2, 3, 4, 1 };

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                return false;
                }

            }
        }
        System.out.print(arr);
    }
}
// sort method in java
