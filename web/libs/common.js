
function adjNum(n, decimals) {
	if (typeof n != "number") return n;	
	if (isNaN(n)) return "---";
	if (!isFinite(n)) { 
		if (s < 0) return "-∞";
		else return "∞";
	}
	if (decimals !== undefined) return n.toFixed(decimals);
	var an = Math.abs(n);
	if (an >= 100000) return n.toFixed(0);
	else if (an >= 100) return n.toFixed(2);
	else if (an >= 1) return n.toFixed(4);
	else if (an > 0.0001) return n.toFixed(6);
	else {
		var s = (n*1000000).toFixed(3);
		if (s == "0.000") return s;
		return s+"µ";
	}
}

function adjNumN(n) {
	if (typeof n != "number") return n;
	var an = Math.abs(n);
	if (an >= 100000) return n.toFixed(0);
	else if (an >= 100) return n.toFixed(2);
	else if (an >= 1) return n.toFixed(4);
	else if (an > 0.0001) return n.toFixed(6);
	else {
		if (an === 0) return an;
		else {
			var s = n.toFixed(10);	
			while (s[s.length-1] == '0') {
				s = s.substr(0,s.length-1);
			}
			return s;
		}
	}
	
}
