let popup1=document.getElementById("popup1"); //notification popup
let popup2=document.getElementById("popup2"); //announcement popup
        function openPopup1(){
            popup1.classList.add("open-popup");
        }
        function closePopup1(){
            popup1.classList.remove("open-popup");
        }
        function openPopup2(){
            popup2.classList.add("open-popup");
        }
        function closePopup2(){
            popup2.classList.remove("open-popup");
        }
let reportID=document.getElementById("reportID");
let customerID= document.getElementById("customerID");
let description= document.getElementById("description");
let notificationForm=document.getElementById("notificationForm");
window.onload=function(){openPopupNotify();};

        function openPopupNotify(){
          notificationForm.classList.add("open-popup");
        }
        function closePopupNotify(){
          notificationForm.classList.remove("open-popup");
          reportID.value="";
          customerID.value="";
          description.value="";

         
        }
        function backhome(){
          window.location='cLientDashboard.html';
      }