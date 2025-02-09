<?php
$name = $_POST['user_name'];
$messenger = $_POST['user_messenger']
$comment = $_POST['user_comment']
$token = "";
$chat_id = "-674155601";
$arr = array(
    'Имя пользователя' => $name,
    'Telegram/Другой мессенджер' => $messenger,
    'Комментарий' => $comment

);
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }
?>