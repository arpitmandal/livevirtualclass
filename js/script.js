function valid()
{
    var count=0;
    var name=document.register.name.value;
    var uname=document.register.username.value;
    var genders = document.getElementsByName("gender");


    if(name==null || name=="")
    {
        alert("Please enter the name.");
        return false;
    }
    if(uname==null || uname=="")
    {
        alert("Please enter the username.");
        return false;
    }
    if (genders[0].checked == false && genders[1].checked == false) 
    {
        alert("Select a gender");
        return false;
    }


    if (document.register.check1.checked == true)
    {
        count++;
    }
    if (document.register.check2.checked == true)
    {
        count++;
    }
    if (document.register.check3.checked == true)
    {
        count++;
    }
    if(count<2)
    {
        alert("Please select atleast 2");
    }
    else
    {
        alert("thanks for registering");
    }
} 

function inst(val)
{
    var alphaExp = /^[a-zA-Z]+$/;
        if(!val.match(alphaExp))
        {
            document.getElementById("inst").innerHTML="Invalid Input : Only alphabet";
            return false;
        }
        if(val.match(alphaExp))
        {
            document.getElementById("inst").innerHTML="";
            return true;
        } 
}

function sear()
{
    var q = document.getElementById("sea").value;
    window.open('http://google.com/search?q='+q);
}
function cal()
{
    if(document.calculate.eng.value=="" || document.calculate.eng.value>100){
        alert("Enter English Marks less than 100!");
        return false;
    } 
    if(document.calculate.gk.value=="" || document.calculate.gk.value>100){
        alert("Enter GK Marks less than 100!!");
        return false;
    } 
    if(document.calculate.maths.value=="" || document.calculate.maths.value>100){
        alert("Enter Maths Marks less than 100!!");
        return false;
    } 

        var num1, num2, num3, high, total;
        num1=parseInt(document.forms["calculate"]["eng"].value,10);
        num2=parseInt(document.forms["calculate"]["gk"].value,10);
        num3=parseInt(document.forms["calculate"]["maths"].value,10);

        

        total=num1+num2+num3;
		if(num1>num2 && num1>num3)
		{
			high=num1;
		}
		else if(num2>num1 && num2>num3)
		{
			high=num2;
		}
		else if(num3>num1 && num3>num1)
		{
			high=num3;
        }
        else if(num1==num2 && num2==num3 && num3==num1)
        {
            high=num1;
        }
        var percent;
        percent=total/3;
        document.getElementById("total").value=total;
        document.getElementById("high").value=high;
        document.getElementById("percent").value=percent;
    
}

function wel()
{
   window.open("welcome.html","","top=400,left=400,width=300,height=200");
}

function result()
{
    if(document.quiz.q1[0].checked==false && document.quiz.q1[1].checked==false && document.quiz.q1[2].checked==false)
    {
        alert("Choose any one option");
        return false;
    }
    if(document.quiz.q2[0].checked==false && document.quiz.q2[1].checked==false && document.quiz.q2[2].checked==false)
    {
        alert("Choose any one option");
        return false;
    }
    var a = quiz.q1.value;
    var b = quiz.q2.value;
    var marks=0;
    if(a=="q11")
        marks=marks+2;
    if(b=="q22")
        marks=marks+2;
    if(marks==0)
        alert("You scored 0 marks.");
    else
        alert("You scored "+marks+" marks.");
}


