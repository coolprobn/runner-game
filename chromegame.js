	
	var $gameWindow = document.getElementById('game-window');
	var $player = document.getElementById('player');
	$player.style.bottom = 50 + 'px';
    $player.style.left = 30 + 'px';
    var posBottom = 0;

	var jumpUp = function(){
		posBottom = 150;
	    $player.style.bottom = posBottom + 'px';
	};
	
	var jumpDown = function(){
		posBottom = 50;
        $player.style.bottom = posBottom + 'px';
	};

	document.addEventListener('keydown', function(event) {
    	if(event.keyCode ==38 || event.keyCode == 32){
    	   jumpUp();
    	}
       		
       	});
     
    document.addEventListener('keyup', function(event) {
    	if(event.keyCode ==38 || event.keyCode == 32){
	        jumpDown();
	    };
    	
       		
       	});

    var $road = document.getElementById('road');
    var posRight = -100000;

    var animate = function(){
		posRight += 10;
		$road.style.right = posRight + 'px';
		$gameWindow.appendChild($road);
	};

	setInterval(animate, 100);  

	var $enemy = document.createElement('div');	
    $enemy.id = 'enemy';
    $enemy.style.bottom = 50 + 'px';
    var move = 570;
    var intervalId;
    var spawnEnemy = function(){
    	clearInterval(intervalId);
        move = 570;
    	$enemy.style.left = 570 +'px';
    	$gameWindow.appendChild($enemy);
    	intervalId = setInterval(moveLeft,100);
    };
    var moveLeft = function(){
        if(move > 0){
        move -= 30;
        $enemy.style.left = move + 'px';  
        checkCollision();  
    }else{
        spawnEnemy();
    }
        
    };
   spawnEnemy();

    var checkCollision = function(){
		var enemyBottom = parseInt($enemy.style.bottom);
    	var playerBottom = parseInt($player.style.bottom);
    	var enemyTop = parseInt($enemy.style.bottom) + 50;
    	var playerTop = parseInt($player.style.bottom) + 50;
    	var enemyRight = parseInt(enemy.style.left) + 30;
    	var playerRight = parseInt($player.style.left) + 30;
    	var enemyLeft = parseInt(enemy.style.left);
    	var playerLeft = parseInt($player.style.left);

		/*if(playerRight>=enemyLeft&&playerRight>enemyLeft&&playerTop<enemyBottom&&playerBottom>=enemyTop){
			console.log("game over");
			
		}*/
        if(playerRight >= enemyLeft && playerTop == enemyTop && playerBottom == enemyBottom || playerRight >= enemyLeft && playerBottom <= enemyTop){
            console.log("game over");
        };
	};
