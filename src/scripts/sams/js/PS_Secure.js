var seckey;
var MySelectedStudents;
function getJSReport(URL){
	var SecKey = _getSAMSSecKey();
	URL = URL + "?" + SecKey;
	document.write('<script type="text/javascript" src="' + URL + '"></scr' + 'ipt>');
}

function _getSAMSSecKeyForm(){
	seckey = document.getElementById('seckey').value;
	return '<input type="text" name="at" id="at" value="' + seckey + '">';
}

function submitSAMSSecKeyForm(which){
	seckey = document.getElementById('seckey').value;
	which.at.value = seckey;
	return true;
}

function _getSAMSSecKey(){
	seckey = document.getElementById('seckey').value;
	return 'at=' + seckey;
}

function SAMSSecKeyURL(URL){
	location.href=URL + '&' + _getSAMSSecKey();
}

function SetMySelectedStudents(which){
	MySelectedStudentList = document.getElementById('MySelectedStudents').value;
	which.Students.value = MySelectedStudentList;
	return true;
}
