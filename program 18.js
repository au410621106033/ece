<HTML> 
    <HEAD><TITLE>onLoad and onUnload Example</TITLE> 
    </HEAD>
     <BODY onLoad="window.alert('Hello, and welcome to this page.');"
      onUnload="window.alert('You unloaded the page. Goodbye!');">
         <H1>The onLoad and onUnload Methods</H1>
          <HR> 
          This page displays a "hello" dialog when you load it, and a "goodbye"
           dialog when you unload it. Annoying, isn't it?
            <HR>
             This is done through event handlers specified in this document's 
             &LTBODY&GT tag. Aside from that tag, the rest of the document doesn't 
             affect the dialogs.
              <HR> 
              </BODY> 
              </HTML>