package Java.twodarrays;

import java.util.Scanner;

public class LectureNotes {
     public static  void playwith2Darr(){
        int [][] arr0 = {
                {1,2,3} , {4,5,6} ,{7,8,9}
        };
        Scanner sc= new Scanner(System.in);
        int r = sc.nextInt();
        int c = sc.nextInt();
        // create 2D arr //   row cols
        int [][] arr = new int[r][c];

        // row length
//        int rows = arr.length;
//        int cols = arr[0].length;
//        System.out.println(rows +" " + cols);

        // user input  the 2D arr
        for (int i = 0; i <r ; i++) {
            for (int j = 0; j < c; j++) {
                arr[i][j] = sc.nextInt();
            }
            System.out.println();
        }

        // print the 2D arr
        for (int i = 0; i <r ; i++) {
            for (int j = 0; j < c; j++) {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
    public static void print2DArray(int[][] arr){
        int row = arr.length;
        for (int i=0 ; i<row ; i++){
            // col iteration each
            int col = arr[i].length;
            for (int j = 0; j <col ; j++) {
                System.out.print(arr[i][j]+" ");
            }
        }
    }
    public static void userInputColsRows(){
        // Q create an array without telling the no of col in every row
        // cols would be the input later
        Scanner sc =new Scanner(System.in);
        System.out.println("enter the row no");
        int row =sc.nextInt();
        int [][] arr = new int[row][];
//        System.out.println(arr);
//        System.out.println(Arrays.toString(arr));
        for (int i = 0; i < row; i++) {
            System.out.println("Cols in "+i+ " row");
            int cols = sc.nextInt();
            // create the first arr for ith row
            arr[i] =new int[cols];

            // once the array os created
            for (int j = 0; j < cols; j++) {
                arr[i][j]=sc.nextInt();

            }
        }
        print2DArray(arr);
    }

    public static void main(String[] args) {
        System.out.println("hello");
        userInputColsRows();
        
    }
}
