var n= +document.getElementById('n').value;
$( ".ni" ).change(function() {
    var n1=n;
    n= +document.getElementById('n').value;//считываем кол уравний из <select>
    $(".x").remove();
    //создание новых полей для уравнений
    for (var i = 0; i < n; i++) {
       $(".h").append('<input  class="x" id="x'+i+'" type="number" value="0">');
     }
     console.log("change");
 });


function reset(){
  $(".x").val("");
  $("#h").val("");
  $("#eps").val("");
  $("#a").val("");
}





function f(x){
  //console.log('x='+x);
  var v=(x[0]-2)*(x[0]-2)+(x[1]+5)*(x[1]+5)+(x[2]-7)*(x[2]-7)+(x[3]-9)*(x[3]-9); //Math.pow((x[0]-2),2)+Math.pow((x[1]+5),2)+Math.pow((x[3]-7),2);//(x[0]+10*x[1])*(x[0]+10*x[1])+5(x[2]-x[3])*(x[2]-x[3])+(x[1]-2x[3])//8*x[0]*x[0]+4*x[0]*x[1]+5*x[1]*x[1];
  return v;
}

function inicialization(n)
{
  var x = new Array(n);

	for (var i = 0; i < n; i++)
	{
    x[i]=+$("#x"+i).val();
		console.log("x["+i+"]="+x[i]);
	}
  console.log("x=",x);
	return x;
}


function issledovanie(x,n,h)
{
  //console.log("Иследование точки "+x);
	var xi;
	var xi_ph;
	var xi_mh;

	var fxi;
	var fxi_ph;
	var fxi_mh;


	for (var i = 0; i < n; i++)
	{
		xi = x[i];
		xi_ph = x[i] + h;
		xi_mh = x[i] - h;


		fxi = f(x);
		x[i] = xi_ph;
		fxi_ph = f(x);
		x[i] = xi_mh;
		fxi_mh = f(x);


		if (fxi_ph < fxi)
		{
			x[i] = xi_ph;
		}
		else
		{
			if (fxi_mh < fxi)
			{
				x[i] = xi_mh;
			}
			else
			{
				x[i] = xi;
			}
		}
	}
  //console.log("найдено "+x);
}


function algoritm(h,eps,x,n,a)
{
	var f_min = f(x);
	var i = 1;
	while (h > eps)
	{
		issledovanie(x, n, h);

		if (f(x) < f_min)
		{
			do
			{
				f_min = f(x);
				issledovanie(x, n, h);
			} while (f(x) < f_min);
			h = h / a;
		}
		else if (h > eps)
		{
			h = h / a;
		}
	  console.log("/////Itaration #"+i+ "/////");
		answers(f_min, n, x, (h > eps));
		i++;
	}
}



function answers(f_min,n,x,last)
{
	console.log("x="+x);
	console.log("f="+f_min);
  show(x,f_min);
}


function eler1(){
	console.log("Kolichestvo peremennix:"+n);
	var h= +$("#h").val();
	console.log("h="+h);
	var eps= +$("#eps").val();
	console.log("eps:"+eps);
  var a=+$("#a").val();
  console.log("a:"+a);
	var x = inicialization(n);

	algoritm(h, eps, x, n ,a);
}




  function show(x,f_min){
    $( "div" ).remove(".solution");
    $("header").after($("<div class='contener solution'></div>"));
    $(".solution").append('<h2>Ответ</h2>');
    console.log("answe="+x);
    $(".solution").append('<p class="p">Точка минимума ('+x+')<br>Значение ф-ии в точке минимума f(min)='+ f_min +'</p>');
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
