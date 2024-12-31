#include <iostream>
using namespace std;




/*
Print numbers from 1 to n without the help of loops.
 You only need to complete the function printNos() that takes n as a
  parameter and prints the number from 1 to n recursively.

Note: Don't print any newline, it will be added by the driver code.

Examples:

Input: n = 10
Output: 1 2 3 4 5 6 7 8 9 10
Input: n = 5
Output: 1 2 3 4 5
Input: n = 1
Output: 1

*/
  int cnt=0;

void printN(int n){
       cout<<" "<< cnt;
    if(n==cnt){
        return;
    }
      cnt= cnt+1;
 
  
printN(n);
    
}


int main(){

        cout<<"Enter the N number";
        int n = 0;
        cin>> n;
        printN(n);

return 0;
}
