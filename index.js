var btn = document.getElementById('btn');
var rs = document.getElementById('reset');
var val1 = document.getElementById('val1');
var selc = document.getElementById('selc');
var val2 = document.getElementById('val2');
var selc = document.getElementById('selc');
val1.addEventListener('input',function(){
    if(val1.value !== ""){
        rs.disabled = false;
        btn.disabled = false;
        selc.disabled = false;
    }
    else{
        rs.disabled = true;
        selc.disabled = true;
        btn.disabled = true;
    }
    
    
})

btn.addEventListener("click",function(){
    var n1 = parseFloat(val1.value);
    if(selc.value === "cel"){
        val2.value = (n1 *  9/5) +32;
    }
    else if(selc.value === "far"){
        val2.value = ((n1-32) * 5/9).toFixed(2);
    }
    else{
        alert("Enter a appropriate value");
    }
})
rs.addEventListener("click",function(){
    val1.value = "";
    val2.value = "";
    rs.disabled = true;
    selc.disabled = true;
    btn.disabled = true;
})

