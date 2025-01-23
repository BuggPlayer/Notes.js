#include <iostream>
#include <vector>
using namespace std;


void largetEle(){
    //  int arr[] = {8,10,5,7,9};
    int arr1[] = {2,5,1,3,0};

    int n=5;
    int max=0;
     for (int i = 0; i < n; i++)
     {
        
        if(arr1[i]> max){
            max= arr1[i];
        }
     }
     cout<<"max" <<max;
     
}


void secondlargetEle(){
  
    int arr[]= {1,2,4,7,7,5};
    int n= 6;
    int max1=0 ;
    int max2=-1;

    for (int i = 0; i < n; i++){
     if(arr[i]> max1){
        max1= arr[i];

     }
    }

    for (int i = 0; i < n; i++){
     if(arr[i]> max2 && arr[i] != max1){
        max2= arr[i];

     }
    }
    cout<<"max1 " << max1 << "max2 "<< max2;
}


bool issorted(){
int arr[] = {1,2,6,3,4,5};
int n=5;
for (int i = 0; i < n; i++){
for (int j = i+1; j< n; j++){

   if(arr[j]< arr[i]){
    return false;
   }

}
}
return true;

}


int removeDuplicate(){
    // Input: nums = [0,0,1,1,1,2,2,3,3,4]
   int arr[] = {0,0,1,1,1,2,2,3,3,4};
   int n=10;
    int temp=0;
    for(int i = 1; i < n; i++){

     if(temp != arr[i]){
        i++;
        arr[temp] = arr[i];
     }
    }
    return temp + 1;
}


void moveallzeroRight(){
   int arr[]={ 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1};
   int n=8;
   vector<int> arrZero; 
   vector<int> arrNonZero; 
   vector<int> arrFinal;


   for (int i = 0; i < n; i++) {
    if(arr[i] ==0){
      arrZero.push_back(arr[i]);
    }else {
      arrNonZero.push_back(arr[i]);
    }

   //  int size = arrZero.size();
      for(int i = 0; i < arrNonZero.size(); i++) {
          arrFinal.push_back(arrNonZero[i]);
      }

         for(int i = arrNonZero.size(); i < arrNonZero.size() ; i++) {
                  arrFinal.push_back(arrNonZero[i]);
         }

         

   }
    
}


int LinearSearch(){

// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

int arr[] = {5,4,3,2,1};
// 5 4 3 2 1
int n=5;
int num = 5;

for (int i = 0; i <n; i++){

      if(num == arr[i]){
         return i;
      }
}

return -1;
}


void FindMissingNumberrr(){
  int arr[] = {1,2,4,5};
    int n = 5;


      for (int i = 0; i <= n; i++){
         
            if(arr[i] !=i  ){
               cout <<" c" <<i;
             // return i;
            }

    }
    
}
void print(vector<int> v) {
  cout << "Printing vector " << endl;
  int size = v.size();
  for (int i = 0; i < size; i++) {
    cout << v[i] << " ";
    // cout << v.at(i) << " ";
  }
  cout << endl;
}

int main(){
// largetEle();
// secondlargetEle();
// int val= issorted();
// cout<<"val "<< val;
// int v=removeDuplicate();
// cout<<"v "<<v;

// moveallzeroRight();

// int valueee = LinearSearch();
// cout<<"v"<< valueee;
FindMissingNumberrr();
return 0;
}






// int missingNumber(vector<int>&a, int N) {

//     // Outer loop that runs from 1 to N:
//     for (int i = 1; i <= N; i++) {

//         // flag variable to check
//         //if an element exists
//         int flag = 0;

//         //Search the element using linear search:
//         for (int j = 0; j < N - 1; j++) {
//             if (a[j] == i) {

//                 // i is present in the array:
//                 flag = 1;
//                 break;
//             }
//         }

//         // check if the element is missing
//         //i.e flag == 0:

//         if (flag == 0) return i;
//     }

//     // The following line will never execute.
//     // It is just to avoid warnings.
//     return -1;
// }

// int main()
// {
//     int N = 5;
//     vector<int> a = {1, 2, 4, 5};
//     int ans = missingNumber(a, N);
//     cout << "The missing number is: " << ans << endl;
//     return 0;
// }

