function decimalToBinary(num) {
  //Write you code here
  let n = num, ans="";
	while(n!==0){
		rem = n%2;
		n = n/2;
		ans = rem+ans;
	}
	return ans;
}

window.decimalToBinary = decimalToBinary;
