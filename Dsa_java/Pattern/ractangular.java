package Pattern;

public class ractangular {
    public static void main(String[] args) {
        /*
         * pattern rectangular
         * * * * *
         * * * * *
         * * * * *
         * 
         * obs : row =3 and col=4
         */
        for (int row = 0; row <= 2; row++) {
            // inner loop alwasy work for elemt how much data print
            for (int col = 0; col <= 3; col++) {
                System.out.print("*");

            }

            System.out.println("");
        }

    }
}
