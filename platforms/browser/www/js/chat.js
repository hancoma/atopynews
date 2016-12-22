function open_chat (no) {

   var no=no;
 $.post("http://gallerybear.com/chat_list_app.php",
   {
    no:no
    
       },
   function(data){
$("#chat_body").html(data);
   });
 	$("#room_no").val(no);

    var modal = UIkit.modal("#modal_chat", {center: true});


    modal.show();

}


function save_chat() {
  console.log(memberuid);
	var room_no=$("#room_no").val();
	var chat_msg=$("#chat_msg").val();
	if (!chat_msg){
		alert_msg("msg","no comment !!");
		exit;
	}

		$.post("http://gallerybear.com/chat_save_app.php",
   {
   	room_no:room_no,
   	memberuid:memberuid,
   	chat_msg:chat_msg
    
       },
   function(data){
	open_chat(room_no);
	$("#chat_msg").val('');
   });
}
function gotop() {
  console.log("top");
   
}

function make_room() {
  var uuid=device.uuid;
  UIkit.modal.prompt('방 제목', '', function(title){ 
    var title=title;
    if (!title) {
      alert_msg("경고","방제목을 입력 하지 않았습니다.");
     
    } else {
    console.log(member_srl+ " "+title+" "+uuid);
    chat_room_make(title,member_srl,uuid);
    }
  });

}

function chat_room_make(title,member_srl,uuid){
  var title=title;
  var member_srl=member_srl;
  var uuid=uuid;
    $.post("http://atopynews.co.kr/make_room.php",
   {
    title:title,
    member_srl:member_srl,
    uuid:uuid
       },
   function(data){
    chat_show();
    alert_msg("알림","대화방이 생성되었습니다.");
    
   });
}

function open_chat_room (no) {
$("#chat_room_modal").addClass('active');
  var no=no;
  var uuid=device.uuid;
   console.log(member_srl);
 $.post("http://atopynews.co.kr/chat_list_app.php",
   {
    no:no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
$("#chat_body").html(data);
console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

  

}
function chat_page_top() {
  $(document).ready(function(){
  htop=$('#chat_body').height();
  console.log("h"+htop);
  $('.content').scrollTop(htop); 
  });
}


function save_chat() {
  var uuid=device.uuid;
  var room_no=$("#room_no").val();
  var chat_msg=$("#chat_msg").val();
  if (!chat_msg){
    alert_msg("경고","내용을 입력해주세요.");
    exit;
  }


    $.post("http://atopynews.co.kr/chat_save_app.php",
   {
    room_no:room_no,
    uuid:uuid,
    member_srl:member_srl,
    chat_msg:chat_msg
       },
   function(data){
  //open_chat(room_no);
  console.log(data);
  $("#chat_msg").val('');

   });
}



// 대화갱신
function sc_size_scheck() {

var top=$("#chat_body").offset().top;
var height=$("#chat_body").height();
var height2=$("#chat_room_modal").height();
var last_no=$("#last_no").val();
var postop=(top*-1)+height2-90;
var var1=height-postop;
console.log(last_no);
console.log("top"+postop+"height"+height+"cheight"+height2+"var1"+var1);
if (height<height2) {
check_new_chat();
} else if (var1<190) {
  check_new_chat();
} else if (last_no==0) {
  check_new_chat();
}



}
 function check_new_chat() {
  var last_no=$("#last_no").val();
  var room_no=$("#room_no").val();
  var check_chat=$("#check_chat").val();
  $("#check_chat").val("t");
  if (check_chat=="t") {
    exit;
  
  }

  console.log(last_no+" "+room_no+" "+check_chat); 
   $.post("http://atopynews.co.kr/check_new_chat_no_app.php",
   {
    
    last_no:last_no,
    room_no:room_no
    
       },
   function(data){
    console.log(data);
     var data=data;

     if (data) {
      $("#last_no").val(data);
      $("#check_chat").val("t");
    re_open_chat_room();
     
     } else {
       $("#check_chat").val("f");
     }


   });

}

// 대화 내용 경신
function reload_chat(room_no,last_no) {
  var room_no=room_no;
  var last_no=last_no;
  var uuid=device.uuid;
  console.log('last_no'+last_no+" "+room_no);
   $.post("http://atopynews.co.kr/check_list_app.php",
   {
    
    last_no:last_no,
    room_no:room_no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
     if (data) {
      
        $("#chat_body").append(data); 

     }
 $("#check_chat").val("f"); 
 htop=$('#chat_body').height();
$('.content').scrollTop(htop);

   });
}


function re_open_chat_room () {
  var no=$("#room_no").val();
  var uuid=device.uuid;
   console.log(member_srl);
 $.post("http://atopynews.co.kr/chat_list_app.php",
   {
    no:no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
$("#chat_body").html(data);
console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

  

}