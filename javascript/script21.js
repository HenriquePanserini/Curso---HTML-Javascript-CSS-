//var fm = document.forms.namedItem("cursor2").innerHTML;
//var fm = document.forms.namedItem("cursor1").elements[0].value;

document.writeln(document.getElementById("cursor1").elements[0].values)

var fm = document.forms[0];
var em = fm.elements;

em[0].style.backgroundColor = "#ddd";
document.writeln(fm);