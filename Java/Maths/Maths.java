package Java.Maths;

import java.util.Scanner;

public class Maths {
 
    public static  void Notes() {

        /*
         * some common concepts
         * 1. prime number
         * 2. Divisors
         * 3. GCD -> Eculid algorithms
         * 4. Arthematic and programtion and geomatric p
         * 5. permutation and combination
         * 6. fibonaci series
         * 7. log function
         * 8. match class (inbuild func)
         * 
         */

    }

    public static boolean isPrimeNumber(int n) {
        for (int i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (isPrimeNumber(n)) {
            System.out.println("yes its prim numer");
        } else {
            System.out.println("is not prime");
        }
    }
}
