<?php 
	$text = $_POST['text'];
	$fd = fopen('contact-text.php', w);
	fwrite($fd, $text);
	echo "Текст успешно изменён! <a href='index.php'>Перейти на главную</a>";
 ?>