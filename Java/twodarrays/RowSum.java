package Java.twodarrays;

public class RowSum {

    public static void printRowSumWise(int[][] arr, int col) {
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = 0; j < arr[i].length; j++) {
                sum = sum + arr[j][i];
            }
            System.out.print(" " + sum);
        }
    }

    public static void main(String[] args) {
        int[][] arr0 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int cols = 3;
        printRowSumWise(arr0, cols);
    }


}
