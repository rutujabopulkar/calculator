var txtdis = document.getElementById('txtdis');

function storeData(i) {

    var odltxt = txtdis.value;

    txtdis.value = odltxt + i;

    var t = odltxt.length;
    var lastchr = odltxt[t - 1];

    var oprsym = ["+", "-", "*", "/", "."];
    if (oprsym.includes(i)) {
        if (oprsym.includes(lastchr)) {
            var removelast = odltxt.slice(0, -1);
            txtdis.value = removelast + i;
        }
        else {
            txtdis.value = odltxt + i;
        }
    }
    else {
        txtdis.value = odltxt + i;
    }
}

function calData() {
    var odltxt = txtdis.value;

    odltxt = eval(txtdis.value);
    txtdis.value = odltxt;
}

function removeall() {
    txtdis.value="";
}

function dlt(){
    var dltVal = txtdis.value.toString().slice(0,-1);
    txtdis.value = dltVal;
}