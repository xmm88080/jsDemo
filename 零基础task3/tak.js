/**

 * aqiData，存储用户输入的空气指数数据

 * 示例格式：

 * aqiData = {

 *    "北京": 90,

 *    "上海": 40

 * };

 */

var aqiData = {
  // "北京": 90,
  // "上海": 40
};


function checkCity(obj) {


  var vaL = obj.value;
  var val=vaL.trim();
  
  var str = val.split("");

  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (/^[\u4e00-\u9fa5]{0,}$/.test(str[i]) || /^[A-Za-z]+$/.test(str[i])) {
      newStr = newStr + str[i];



    } else {
      alert("错误！城市只能输入中英文字符。");
      break;
    }
  }
  obj.value = newStr;
  return newStr;

  

}

function checkSEC(obu) {
  var vaL = obu.value;
  var val=vaL.replace(/\s/g,"");
 
  var newSecrect = "";
  var secrect = val.split("");
  {
    for (var i = 0; i < secrect.length; i++)
      if (/[0-9]/.test(secrect[i])) {
        newSecrect += secrect[i];

      } else {
        alert("错误！空气质量只能输入整数");
        return false;
      }
  }


  return newSecrect;


}


/**

 * 从用户输入中获取数据，向aqiData中增加一条数据

 * 然后渲染aqi-list列表，增加新增的数据

 */
function addAqiData() {
  var cityInput = document.getElementById("aqi-city-input");
  var secInput = document.getElementById("aqi-value-input");
  var city = cityInput.value;
  var sec = secInput.value;
  aqiData[city] = sec;//获取数据并添加到aqiDate中
  var row = document.createElement("tr");
  var po1 = document.createElement("td");
  var po2 = document.createElement("td");
  var po3 = document.createElement("td");
  var po3_h = document.createElement("button");
  var text1 = document.createTextNode(city);
  var text2 = document.createTextNode(aqiData[city]);
  var text3 = document.createTextNode("删除");
  var table = document.getElementById("aqi-table");
  row.appendChild(po1);
  row.appendChild(po2);
  row.appendChild(po3);
  table.appendChild(row);
  po1.appendChild(text1);
  po2.appendChild(text2);
  po3.appendChild(po3_h);
  po3_h.appendChild(text3);
  }
/**

 * 渲染aqi-table表格

 */

function renderAqiList() {
  var row = document.createElement("tr");
  var po1 = document.createElement("td");
  var po2 = document.createElement("td");
  var po3 = document.createElement("td");
  var text1 = document.createTextNode("城市");
  var text2 = document.createTextNode("空气质量");
  var text3 = document.createTextNode("操作");
  var table = document.getElementById("aqi-table");
  row.appendChild(po1);
  row.appendChild(po2);
  row.appendChild(po3);
  table.appendChild(row);
  po1.appendChild(text1);
  po2.appendChild(text2);
  po3.appendChild(text3);
 table.style.border="solid 1px";


}


/**

 * 点击add-btn时的处理逻辑

 * 获取用户输入，更新数据，并进行页面呈现的更新

 */
function addBtnHandle() {
  addAqiData();
}


/**

 * 点击各个删除按钮的时候的处理逻辑

 * 获取哪个城市数据被删，删除数据，更新表格显示

 */

function delBtnHandle(aq) {

  // do sth.
  if(!document.getElementsByTagName) return false;
  if(!document.getElementsByTagName("table")) return false;

  var tdA=aq.parentNode;
  var row=tdA.parentNode;
  var ci=row.getElementsByTagName("td")[0].innerHTML;
  delete aqiData[ci];
  row.parentNode.removeChild(row);
  

}


function init() {
  renderAqiList();
  var r = document.getElementById("add-btn");
  var table=document.getElementById("aqi-table");
  var butt;
  
var city = document.getElementById("aqi-city-input");
var num = document.getElementById("aqi-value-input");
r.onclick = function () {
  if(checkCity(city)&&checkSEC(num)){
  addBtnHandle();}
  if(table.getElementsByTagName("button")){
    butt=table.getElementsByTagName("button");
    for(var j=0;j<butt.length;j++){
      butt[j].onclick=function(){
        delBtnHandle(this);
               }
    }
  
}
  
}

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数


  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数


}


init();