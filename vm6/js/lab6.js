function answer(){
  var tmp;
  tmp=$('input[name=metod]:checked').val();
  if(tmp==1){
    eler1();
  }
  else{
    rk();
  }
  console.log(tmp);
}

var flag=false;
function fun1() {
var chbox;
chbox=document.getElementById('graf');
	if (chbox.checked) {
		flag=true;
    $("#myCharteler").css("display", "block");
    $("#myChartrk").css("display", "block");
	}
	else {
		flag=false;
    $("#myCharteler").css("display", "none");
    $("#myChartrk").css("display", "none");
	}
  console.log("flag="+flag);
}

function reset(){
  $( "div" ).remove(".solutioneler");
  $( "div" ).remove(".solutionrk");
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("n").value = "";
  document.getElementById("x").value = "";
  document.getElementById("y").value = "";
}
function f(x,y){
  var v =x+y;//(2*x-Math.pow(x,y))/x;//x*x-2*y
  return v;
}
function eler1(){
  console.log('eler1');
  var b,a,n,h;
  var x=[],y=[],num=[];
  a=document.getElementById('a').value;
  b=document.getElementById('b').value;
  n=document.getElementById('n').value;
  y[0]=document.getElementById('y').value;
  h=(b-a)/n;
  x[0]=a;
  for (var i = 0; i <=n; i++) {
     num[i]=i;
      y[i+1]=+y[i]+h*f(+x[i],+y[i]);
      x[i+1]=+x[i]+h;
    }
show(x,y,n,"eler",num);
}
function rk(){
  console.log('rk');
  var num=[],x=[],y=[],k1=[],k2=[],k3=[],k4=[];
  a=document.getElementById('a').value;
  b=document.getElementById('b').value;
  n=document.getElementById('n').value;
  x[0]=document.getElementById('x').value;
  y[0]=document.getElementById('y').value;
  h=(b-a)/n
  console.log('h=',h);
  console.log('n=',n);
  for (var i = 0; i <=n; i++) {
              num[i]=i;
              x[i+1]=+x[i]+h;
              k1[i]=h*f(+x[i],+y[i]);
              k2[i]=h*f(+x[i]+h/2,+y[i]+k1[i]/2);
              k3[i]=h*f(+x[i]+h/2,+y[i]+k2[i]/2);
              k4[i]=h*f(+x[i]+h,+y[i]+k3[i]);
              y[i+1]=+y[i]+(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6;
  }
  show(x,y,n,"rk",num)
}
  function show(x,y,n,name,num){
    $( "div" ).remove(".solution"+name);
    $("header").after($("<div class='contener solution"+name+"'></div>"));
    var labname;
    if(name == "eler")
        labname="Эйлера"
    if(name == "rk")
        labname="Рунге-Кутты"
    $(".solution"+name).append('<h2>Метод '+labname+'</h2>');
    $(".solution"+name).append("<canvas  id='myChart"+name+"'></canvas>");
    console.log("flag="+flag);
    if(flag==false) $("#myChart"+name).css("display", "none");
    $(".solution"+name).append('<table class="table"></table>');
    $('.table').append("<tr id='tr_zag'></tr>");
    $('#tr_zag').append("<th id='a'>n</th>");
    $('#tr_zag').append("<th id='x'>x</th>");
    $('#tr_zag').append("<th id='y'>y</th>");
   var socr=1000;
    for(var i=0; i<=n; i++){
           $('.table').append("<tr id='tr"+i+"'></tr>");
           $('#tr'+i).append("<td id='a"+i+"'>"+i+"</td>");
           $('#tr'+i).append("<td id='x"+i+"'>"+(Math.round(x[i]*socr)/socr)+"</td>");
           $('#tr'+i).append("<td id='y"+i+"'>"+(Math.round(y[i]*socr)/socr)+"</td>");
    }
    var ctx = document.getElementById("myChart"+name);
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: num,
            datasets: [{
                label: labname,
                backgroundColor: '#2da3fa',
                borderColor: '#cfffff',
                pointBackgroundColor: '#cfffff',
                data: y,
            }]
          },
    });
  }

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
    }
    else {
      $('#toTop').fadeOut();
    }
   });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
  });
