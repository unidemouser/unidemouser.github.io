
        function displayName(){
          // alert("sdf");
          // document.write("<h1>this ten in this is document written in javascript</h1>");
        }
        function getDate(){
          document.getElementById("date").innerHTML=Date();
        }

        getDate();

        // document.getElementsByClassName('row').innerHTML=Date();
        // setTimeout(function(){getDate()},1000);
        setInterval(function(){
          getDate();
          // document.getElementById("date").innerHTML=Date();
        },1000);

        function buttonClicked(){
          console.log("clicked");
        }

        function printTable(num){
          if(parseInt(num)>1 || parseInt(num)<10){
            for(var i=1;i<10;i++){
              document.write(num+" X "+i+" = "+num*i+"</br>");
              // document
            }
          }else{
            document.write("please enter a valid number");
          }

        }
        printTable("8");
        printTable(8);
        var a=34;
        console.log(a);
        // var districts={"accham","ar......."};
        var highscore=0;
        highscore=34;
        var a=456;
        var b=45;
        var c=a/b;
        console.log(c);
        var name="Ram Sharma";
        console.log(name+" has scored "+name.length);
        // var userInput=
