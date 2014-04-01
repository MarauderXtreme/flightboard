<h1>
	<a href="http://www.jqueryscript.net/text/Airport-Like-Text-Flip-Animation-with-jQuery-CSS3-splitFlap.html">Split Flap</a>
</h1>
<?php
	$longest = 35;
	foreach ($job as $entry) {
		$joblength = strlen($entry);
		if($joblength >= $longest) {
			$longest = $joblength;
		}
	}
	for ($i=0; $i < 8; $i++) {
		if(strlen($job[$i]) < $longest) {
			$diff = $longest - strlen($job[$i]);
			$job[$i] .= str_repeat(' ', $diff);
		}
	}
	// echo '<div class="test"></div>';
?>
<div id="line-1" class="flipline">test1</div>
<div id="line-2" class="flipline">test2</div>
<div id="line-3" class="flipline">test3</div>
<div id="line-4" class="flipline">test4</div>
<div id="line-5" class="flipline">test5</div>
<div id="line-6" class="flipline">test6</div>
<div id="line-7" class="flipline">test7</div>