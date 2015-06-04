var seckey;
var MySelectedStudents;
function getJSReport(URL){
	var SecKey = getSAMSSecKey();
	URL = URL + "?" + SecKey;
	document.write('<script type="text/javascript" src="' + URL + '"></scr' + 'ipt>');
}

function getSAMSSecKeyForm(){
	seckey = document.getElementById('seckey').value;
	return '<input type="text" name="at" id="at" value="' + seckey + '">';
}

function submitSAMSSecKeyForm(which){
	seckey = document.getElementById('seckey').value;
	which.at.value = seckey;
	return true;
}

function getSAMSSecKey(){
	seckey = document.getElementById('seckey').value;
	return 'at=' + seckey;
}

function SAMSSecKeyURL(URL){
	location.href=URL + '&' + getSAMSSecKey();
}

function SetMySelectedStudents(which){
	MySelectedStudentList = document.getElementById('MySelectedStudents').value;
	which.Students.value = MySelectedStudentList;
	return true;
}
