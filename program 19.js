<SCRIPT Language ="JavaScript">
     function tot()
      {
       var x = parseInt(document.Simple.first.value) 
       var y = parseInt(document.forms[0].elements[1].value)
        document.Simple.sum.value = x + y 
        } </SCRIPT>
         <FORM NAME="Simple"> 
         <INPUT TYPE ="TEXT" SIZE="4" NAME="first" VALUE=" "><BR> 
         <INPUT TYPE ="TEXT" SIZE="4" NAME="second" VALUE=" "><BR>
          <INPUT TYPE ="BUTTON"  VALUE="Click" onClick="tot();"><BR>
           <INPUT TYPE ="TEXT"  NAME="sum" VALUE=" "><BR>
            </FORM>