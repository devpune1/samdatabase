

var backDb=openDatabase('mydb','1.0','this database store database detail as backup',200000);







            function showData(){
                alert("1")
         document.querySelector('#mybackup').innerHTML ="";                     
            alert("Showing Records");
            
            //document.getElementById("divstate").value="";
             //document.getElementById("mytable").value="";
             
             alert("2");
             
                 backDb.transaction(function (transaction) {
                                    
                                        alert("3");
                                        
                            transaction.executeSql('SELECT * FROM empbackup', [], function (transaction, results){
            
                            
                            var len = results.rows.length;
             
                            alert("Number of records "+len);
            
                            var  msg="<p>Found rows: " + len + "</p>";
            
              
                               if(len!=0)
                               {
			            		msg = "<tr><td>Employee ID"+"</td><td>Employee NAME" +""+"</td></tr>";
                                document.querySelector('#mybackup').innerHTML +=  msg;         
             
             
                                 for (var i = 0; i < len; i++){
                            
                                    msg = "<tr><td>" + results.rows.item(i).empid+"</td><td>" +results.rows.item(i).empname+"</td></tr>";
                                     document.querySelector('#mybackup').innerHTML +=  msg;
                                }
                                
                               }
                              else
                              {
                                  msg = "NO  RECORDS FOUND";
                                  
                                document.querySelector('#mybackup').innerHTML =  msg;  
                              
                                   
                                     
                              }
                              
                               
                }, null);
         });
         
}
    

//createBackuptTable();

