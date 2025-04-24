/*
Given a string S and a character ‘c’, the task is to count the occurrence of the given character in the string.

Examples:  

Input : S = “geeksforgeeks” and c = ‘e’
Output : 4
Explanation: ‘e’ appears four times in str.


Input : S = “abccdefgaa” and c = ‘a’ 
Output : 3
Explanation: ‘a’ appears three times in str.


*/

let string = "javascript";

function countstr (str){
    let frqmap={};

    // better to use for(const keyyy of str)
    
    for ( const count of str){
    
        
        if(frqmap[count]){
            frqmap[count]+=1
        }else {
            frqmap[count]=1
        }
    }
    
    console.log("str---",frqmap)




}

countstr(string)
console.log(string)