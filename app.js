// the palindrome checker button 
document.getElementById("btn").addEventListener("click", function() {
    let txt = document.getElementById("input-text").value;
    console.log(txt);
    checkPalindrome(txt);
});
// to know if its a palindrome or not
function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor( len/2 );
    let result = document.getElementById("result");
    let i;

    for( i = 0; i < halfLen; i++){
        if( txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "nope! not a palindrome";
            return;
        }
        result.textContent = "yes!  it's a palindrome"
    }
}