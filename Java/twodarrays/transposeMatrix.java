package Java.twodarrays;

public class transposeMatrix {
    public static void main(String[] args) {

        int[][] arr0 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        for (int i = 0; i < arr0.length; i++) {
            int temp;
            for (int j = i + 1; j < arr0[i].length; j++) {
                temp = arr0[i][j];
                arr0[i][j] = arr0[j][i];
                arr0[j][i] = temp;

            }
        }
//

        for (int i = 0; i < arr0.length; i++) {
        for (int j = 0; j < arr0[i].length; j++) {
            System.out.print( arr0[i][j] + " ");
        }
        }
    }
}
