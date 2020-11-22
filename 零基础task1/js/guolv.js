window.onload=aqiData;   

var aqiData = [

  ["北京", 90],

  ["上海", 50],

  ["福州", 10],

  ["广州", 50],

  ["成都", 90],

  ["西安", 100]

];//[]表示包含的属性，多个独立的属性

function guolv(array) {
    if(!document.getElementById) return false;
    if(!document.getElementById("aqi-list")) return false;//检查
      var city=new Array();
      var number=new Array();//建立新数组
      var aa=document.getElementById("aqi-list");
      var a=0;
      for(let i=0;i<array.length;i++)
       {
         if(array[i][1]>60)   
        {
           
          city[a]=array[i][0];
        number[a]=array[i][1];
               a++;
          }
      }//过滤筛选出值并存入相应的数组中
      for(let i=0;i<city.length;i++)
      {
          var para=document.createElement("li");
          var text=document.createTextNode("第"+(i+1)+"名："+city[i]+"，"+number[i]);
          para.appendChild(text);
          aa.appendChild(para);
      }//创建li节点与文本
        
  /*

  在注释下方编写代码

  遍历读取aqiData中各个城市的数据

  将空气质量指数大于60的城市显示到aqi-list的列表中

  */

}

addLoadEvent(guolv(aqiData));