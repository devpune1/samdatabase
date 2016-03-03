  var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
       
    
       function isEmpty(empData){
       
			 
			  if(empData==null||empData==""){
			      return true;
			      
			  }
			  else{
			      
			   return false;
       }
       
	
       }		
			function createTable(){
                
                alert("starting table Creation");
                
         db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS employee (rollno NUMBER,name TEXT)');
               // tx.executeSql('CREATE TABLE IF NOT EXISTS empbackup(rollno NUMBER,name TEXT)');
               
                });
                
                       
         db.transaction(function (tx) {
            
                tx.executeSql('CREATE TABLE IF NOT EXISTS empbackup(empid NUMBER,empname TEXT)');
               
                });
                
                
                alert("done Creating ");
            }
			
		/* Inserting a data into taemble */
		
			function insertData(){
        
                    //alert("start");
                     document.querySelector('#mytable').innerHTML ="";                    
		        	var empName=document.getElementById("name").value;
			      var empID=document.getElementById("rollno").value;  
			      
			      
			      
			       if(isEmpty(empID))
			      {
			       document.getElementById("name").placeholder=" name cannot be empty ";   
			          
			      }
			      if(isEmpty(empName))
			      {
			       document.getElementById("rollno").placeholder=" ID cannot be empty ";   
			          
			      }
			      
			      
			      
			      if(numberValidation(empID) && stringValidation(empName)){
			     
        
                    db.transaction(function(tx) {
            
                        alert("started inserting Records");
            
                            tx.executeSql('INSERT INTO  employee (rollno,name) values(?,?)',[empID,empName]);
                            // tx.executeSql('INSERT INTO empbackup (empid,empname) values(?,?)',[empID,empName]);
                            //alert("done");
          });
          
          
          db.transaction(function(tx) {
            
                       // alert("started inserting Records");
            
                           
                             tx.executeSql('INSERT INTO empbackup (empid,empname) values(?,?)',[empID,empName]);
                            alert("done");
          });
          
          
			      }
			else{
			    
			    
			    document.getElementById("name").value="";
			    
			    document.getElementById("name").style.borderColor="red";
			    document.getElementById("rollno").value=""; 
			    
			    document.getElementById("rollno").style.borderColor="red";
			   
			}
                            //alert("done");
          
	 reloadPage();
			    document.getElementById("name").value="";
			    document.getElementById("rollno").value="";  
			}
			
			
        
        
        /* Showing Database details */
        
            function showData(){
                
         document.querySelector('#mytable').innerHTML ="";                     
            alert("Showing Records");
            document.getElementById("status").value="";
             document.getElementById("mytable").value="";
                 db.transaction(function (tx) {
            
                            tx.executeSql('SELECT * FROM employee', [], function (tx, results){
            
                            var len = results.rows.length, i;
             
                            alert("Number of records "+len);
            
                            var  msg="<p>Found rows: " + len + "</p>";
            
              
                               if(len!=0)
                               {
			            		msg = "<tr><td>Employee ID"+"</td><td>Employee NAME" +""+"</td></tr>";
                                document.querySelector('#mytable').innerHTML +=  msg;         
             
             
                                 for (i = 0; i < len; i++){
                            
                                    msg = "<tr><td>" + results.rows.item(i).rollno+"</td><td>" +results.rows.item(i).name+"</td></tr>";
                                     document.querySelector('#mytable').innerHTML +=  msg;
                                }
                                
                               }
                              else
                              {
                                  msg = "NO  RECORDS FOUND";
                                  
                                document.querySelector('#mytable').innerHTML =  msg;  
                              
                                   
                                     
                              }
                              
                               
                }, null);
         });
         
}
    
    
    
    /*Deleting the database */
    
    function deleteData(){
        
                var id=prompt("Enter Roll no to be deleted",id);
            
            
                alert("youn entered rollno:"+id);
                db.transaction(function(transaction) {
          
                                                        transaction.executeSql("DELETE FROM employee WHERE rollno=?",[id],null);
                                                     });
            showData();
          
            //alert("success");
    }
    
    
    /* updating a datbase */
    function updateData() {
        
                db.transaction(function(tx) {
                                                tx.executeSql('update employee ');
                                            });
        
    }
    
    
    /* Drop table from database  */
    function dropTable(){
        
                            db.transaction(function(tx) {
            
                                    tx.executeSql("DROP table employee");
                                                  tx.executeSql("DROP table empbackup");
                                        });
                                        
                                        alert("table dropped 1");
                                        
                                        db.transaction(function(tx) {
            
                                  
                                                  tx.executeSql("DROP table empbackup");
                                        });
                                        
                                        
                                        
                                        
            alert("Table Dropped");
            showData();
     
    }
    
    
    function showBackup()
    {
        alert("hello");
        window.location.href="../readme.html"; 
        
        
    }
    
    
    
    function stringValidation(employeename)
    {
        var namePattern=/^[a-zA-Z]/;
        
        
        
            if(namePattern.test(employeename)){
            
                return true;
            
        }
        else{
             return false;
            
        }
        
        }
    
    
    
    function numberValidation(employeeid)
    {
        var namePattern=/[0-9]+/;
        
        
        
            if(namePattern.test(employeeid)){
            
                return true;
            
        }
        else{
             return false;
            
        }
        
        }
        
        
function reloadPage()
{
    
    
    window.location.herf="../datab.html";
}
        
      