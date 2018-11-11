var n=document.getElementById('n').value;//считываем значение поумолчанию из <select>
var eps=document.getElementById('eps').value;//точность
var a=[];//коэфеценты уравнения
var y=[];//Столбец свободных слогаемых
//Обработка изменения количество уравнений
$( ".ni" ).change(function() {
    var n1=n;
    n=document.getElementById('n').value;//считываем кол уравний из <select>
    //удаление имеющихся полей уравнений
    for(var i = 0; i < n1; i++) {
    $(".yrav"+i+"").remove();
    }
    //создание новых полей для уравнений
    for (var i = 0; i < n; i++) {
       $(".sistem").append("<div class='yrav"+i+"'>");
       for (var j = 0; j < n; j++) {
         $(".yrav"+i+"").append("<input id='x"+i+j+"'>"+"x<sub>"+j+"</sub>");
         if(j!=n-1)
            $(".yrav"+i+"").append("+");
         else
            $(".yrav"+i+"").append("=b<sub>"+i+"</sub><input id='x"+i+(j+1)+"'>");
       }
     }
 });

function read(){
  console.log('read');
  n=document.getElementById('n').value;//считываем кол уравний из <select>
  for (var i=0; i<n; i++ ){
       a[i]=[n];//создаем матрицу
  }
  for (var i=0, k=0, str= ' '; i<n; i++ ){
     for (var j = 0; j <=a.length; j++, k++) {
       if(j==a.length) y[i]=document.getElementById('x'+i+j).value;
       else {
         a[i][j]=document.getElementById('x'+i+j).value;//записываем значения из input по id в матрицу
         str += a[i][j] + ' ';
       }
     }
     console.log(str + '\n');
     str='';
   }
 console.log(n + '\n');
}

function show(name,x,bool,k){
   console.log('show');
  $(".resh"+name).remove();
  $(".contener").prepend("<div class='pargraf resh"+name+" one'></div>");
 var h3_name
  switch (name) {
  case "gays":
    h3_name="Гаусса";
    break;
  case "itr":
    h3_name="Итераций";
    break;
  case "zed":
    h3_name="Зейделя";
    break;
}
  if(name=="obr"){
   $(".resh"+name).append("<h3>Обратная матрица:</h3>");
   $(".resh"+name).append("<table class='table'></table>");
for(var i=0; i<n; i++){
 $(".table").append("<tr id='tr"+i+"'></tr>");
  for(var j=0; j<n; j++){
        $("#tr"+i).append("<td class='x'>"+(Math.round(x[i][j]*1000)/1000)+"</td>");
   }
}
  return;
 }
  $(".resh"+name).append("<h3>Решение методом "+h3_name+":</h3>");
  if((name == "itr" || name == "zed") && !bool){
    $(".resh"+name).append("<h4> Решение методом "+h3_name+"не возможно т.к. на главной диагонале 0 или есть не заполненыеполя.</h4>");
    return;
  }
 if(name == "gays" && !bool){
   $(".resh"+name).append("<h4> Решение методом "+h3_name+"не возможно т.к. система вырожденая или есть не заполненые поля.</h4>");
   return;
 }
  $(".resh"+name).append("<div class='otvet"+name+"'></div>");
  for(var i=0; i<n; i++){
      $(".otvet"+name).append("<div class='x'>X=<sub>"+i+"</sub>"+x[i]+"</div>");
  }
  if(name == "itr" || name == "zed"){
      $(".otvet"+name).append("<br><div class='x'>Количество  итераций = "+k+"</div>");
  }

}

//Проверка
function proverka(name,x){
  console.log('proverka');
  read();
    var prov;
    for(var i=0;i<n;i++){
      for(var j=0; j<n;j++){
         prov+=a[i][j]*x[j]
       }
       if(prov!=y[i]){
         prov=false;
         break;
       }
    }
    $(".resh"+name).append("<div class='proverka "+name+"'></div>");
    $("."+name).append("<h4>Проверка:</h4>");
     for(var i=0;i<n;i++){
       for(var j=0; j<n;j++){
          $("."+name).append(a[i][j]+"*"+(Math.round(x[j]*1000)/1000));
          prov+=a[i][j]*x[j]
          if(j!=n-1) $("."+name).append(" + ");
        }
        $("."+name).append(" = "+y[i]+"<br><br>");
     }
     if (prov) $("."+name).append("<h5>Уравнение решено верно.</h5>");
     else $("."+name).append("<h5>Уравнение решено не верно.</h5>");
}
//Рандомное заполнение коэфецентов
document.getElementById('rand').addEventListener('click', rand);
function rand(){
  n=document.getElementById('n').value;
  var s,randarr=[];
  for(var i=1; i<=n; i++){
    randarr=Math.floor(Math.random() * 10)+3
  }
  for(var i=0;i<n;i++){
     s=0;
     for(var j=0;j<=n;j++){
        if(i!=j)
            $('#x'+i+j).attr('value',Math.floor(Math.random() * 3)+1);
          else $('#x'+i+j).attr('value',(Math.floor(Math.random() * 7)+1)*8);
      }
   }
  }

//обработка нажатия на кнопку "Решить методом Гаусса"
 document.getElementById('gays').addEventListener('click',startgays);
 function startgays(){
   read();
   var x=gays(y);
   show("gays",x,"true");
   proverka("gays",x);
 }
 function gays(b){
  console.log('gays b='+b);
  eps=document.getElementById('eps').value;
  var k=0,max,index;
  var x=[n];
  var bool=true;
  while(k<n){
      // Поиск строки с максимальным a[i][k]
      max = Math.abs(a[k][k]);
      index = k;
      for(var i=k+1; i<n; i++){
        if( Math.abs( a[i][k]) ){
          max=Math.abs(a[i][k]);
          index = i;
        }
      }
      // Перестановка строк
      if (max < eps)
        {
            // нет ненулевых диагональных элементов
            bool=false;
            show("gays",x,bool);
            return ;
          }
      for (var j = 0; j < n; j++)
        {
          var temp = a[k][j];
          a[k][j] = a[index][j];
          a[index][j] = temp;
        }
     var temp = b[k];
     b[k] = b[index];
     b[index] = temp;
     // Нормализация уравнений
    for (var i = k; i < n; i++)
    {
      var temp = a[i][k];
      if (Math.abs(temp) < eps) continue; // для нулевого коэффициента пропустить
      for (var j = 0; j < n; j++)
        a[i][j] = a[i][j] / temp;
        b[i] = b[i] / temp;
      if (i == k)  continue; // уравнение не вычитать само из себя
      for (var j = 0; j < n; j++)
        a[i][j] = a[i][j] - a[k][j];
        b[i] = b[i] - b[k];
    }
    k++;
  }
  // обратная подстановка
for (k = n - 1; k >= 0; k--)
  {
    x[k] = b[k];
    for (var i = 0; i < k; i++)
        b[i] = b[i] - a[i][k] * x[k];
  }
  console.log('gays x='+x);
  return x;
}
//метод итерациий
document.getElementById('itr').addEventListener('click', itr);
function itr(){
console.log('itr');
read();
eps=document.getElementById('eps').value;
 var k=0;
 var x=[n], xk=[], c=[];
 var g=0,s=0;
 var bool=true;
 for (var i=0; i<n; i++ ){
   if(a[i][i]==0){
     bool=false;
     show("itr",x,bool);
     return;
   }
      x[i]=y[i]/a[i][i];
      c[i]=[n];
 }
 xk=x.slice();
 for (var i=0; i<n; i++ ){
   for (var j = 0; j <n; j++) {
     if(j==i) c[i][i] =0;
      else c[i][j]=a[i][j]/a[i][i];
   }
 }

 while(1){
   k++;
   for (var i=0; i<n; i++ ){
    s=0;
    for (var j = 0; j <n; j++) {
      s = s + c[i][j]*xk[j];
    }
 x[i]=y[i]/a[i][i]-s;
}

var count=0;
   for (var i=0; i<n; i++ ){
     if(Math.abs(x[i]-xk[i])<eps) count++;
   }
   if(count==n) break;
xk=x.slice();
}
      console.log("iter="+x + '\n');
      console.log("k="+k + '\n');
      show("itr",x,bool,k);
      proverka("itr",x);
  }
//метод Зейделя
  document.getElementById('zed').addEventListener('click', zed);
  function zed(){
  console.log('zed');
  read();
  eps=document.getElementById('eps').value;
   var k=0;
   var x=[n], xk=[], c=[];
   var g=0,s=0;
   var bool=true;
   for (var i=0; i<n; i++ ){
        if(a[i][i]==0){
          bool=false;
          show("zed",x,bool);
          return;
        }
        x[i]=y[i]/a[i][i];
        c[i]=[n];
   }
   xk=x.slice();
   for (var i=0; i<n; i++ ){
     for (var j = 0; j <n; j++) {
       if(j==i) c[i][i] =0;
        else c[i][j]=a[i][j]/a[i][i];
     }
   }
   var count;
   while(1){
     k++;
     for (var i=0; i<n; i++ ){
       s=0;
       for (var j = 0; j <n; j++) {
            s = s + c[i][j]*x[j];
          }
        x[i]=(y[i]/a[i][i])-s;
      }

   count=0;
     for (var i=0; i<n; i++ ){
       if(Math.abs(x[i]-xk[i])<eps) count++;
     }
     if(count==n) break;
     xk=x.slice();
  }
        console.log("zed="+x + '\n');
        console.log("k="+k + '\n');
        show("zed",x,bool,k);
        proverka("zed",x);
    }
//обратная матрица;
document.getElementById('obr').addEventListener('click', obr);
function obr(){
  console.log('obr');
  var b=[];
  var x=[n];
  var obr=[n];
  for(var j=0; j<n; j++){
    obr[j]=[n];
  }
  for(var i=0;i<n;i++){
    for(var j=0; j<n; j++){
      b[j]=0;
    }
    b[i]=1;
    read();
    x=gays(b);
    obr[i]=x;
  }
  show("obr",obr);
}
