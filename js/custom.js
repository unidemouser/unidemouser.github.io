
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
          $.ajax({
            url:'https://raw.githubusercontent.com/sandipbgt/nepal-data/master/json/districts.json',
            method:'GET',
            success:function(data){
              // $("#content").html(data);
              data=$.parseJSON(data);
              console.log(data);
                // document.write("hello")
                var name="sdgsdg";
                var names=["rahul","sdgsdg"];
                var c="<ul>";
              for(var i=0;i<data.length;i++){
                c=c+"<li>"+data[i]+"</li>"
              }
              c=c+"</ul>";
              $("#content").html(c);
            },
            error:function(data){
              alert("no iternet connection");
            }
          });
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

        var districts=[
    "achham",
    "arghakhanchi",
    "baglung",
    "baitadi",
    "bajhang",
    "bajura",
    "banke",
    "bara",
    "bardiya",
    "bhaktapur",
    "bhojpur",
    "chitwan",
    "dadeldhura",
    "dailekh",
    "dang deukhuri",
    "darchula",
    "dhading",
    "dhankuta",
    "dhanusa",
    "dholkha",
    "dolpa",
    "doti",
    "gorkha",
    "gulmi",
    "humla",
    "ilam",
    "jajarkot",
    "jhapa",
    "jumla",
    "kailali",
    "kalikot",
    "kanchanpur",
    "kapilvastu",
    "kaski",
    "kathmandu",
    "kavrepalanchok",
    "khotang",
    "lalitpur",
    "lamjung",
    "mahottari",
    "makwanpur",
    "manang",
    "morang",
    "mugu",
    "mustang",
    "myagdi",
    "nawalparasi",
    "nuwakot",
    "okhaldhunga",
    "palpa",
    "panchthar",
    "parbat",
    "parsa",
    "pyuthan",
    "ramechhap",
    "rasuwa",
    "rautahat",
    "rolpa",
    "rukum",
    "rupandehi",
    "salyan",
    "sankhuwasabha",
    "saptari",
    "sarlahi",
    "sindhuli",
    "sindhupalchok",
    "siraha",
    "solukhumbu",
    "sunsari",
    "surkhet",
    "syangja",
    "tanahu",
    "taplejung",
    "terhathum",
    "udayapur"
];
var content="";
document.write("<ul>");
for(var a=0;a<districts.length;a++){

  document.write("<li>"+districts[a].toUpperCase()+"</li>");

}
document.write("</ul>");
var fah=112;
var cel=Math.ceil((fah-32)*5/9);
document.write(fah+" f is equivalent to "+cel+"celcus");
