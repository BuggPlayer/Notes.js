package Java.twodarrays;

public class minmax2darray {
    public static void main(String[] args) {
        System.out.println("erefe");
        int[][] arr = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        int min = arr[0][0];
        int max = arr[0][0];

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {

                // max
                if (arr[i][j] > max) {
                    max = arr[i][j];
                }
                // min
                if (arr[i][j] < min) {
                    min = arr[i][j];
                }
            }
        }
        System.out.println("min " + min + " max" + max);

    }
}
