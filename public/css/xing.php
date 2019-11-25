<?php

$css='';
for ($x=1; $x<=50; $x++) {
    $daxiao=mt_rand(1, 8);

    $timeyd=mt_rand(6000,8000);
    $timeyc=mt_rand(2000,4000);

    $first1=mt_rand(15, 85);
    $first2=mt_rand(100, 110);
    $last1=mt_rand(46, 54);
    $last2=mt_rand(46, 54);
    

    $css=$css.'
        .circle-container2:nth-child('.$x.') {
        width: '.$daxiao.'px;
        height: '.$daxiao.'px;
        -webkit-animation-name: move-frames-'.$x.';
                animation-name: move-frames-'.$x.';
        -webkit-animation-duration: '.$timeyd.'ms;
                animation-duration: '.$timeyd.'ms;
        -webkit-animation-delay: '.$timeyc.'ms;
                animation-delay: '.$timeyc.'ms;
                -webkit-animation-fill-mode:forwards;
                animation-fill-mode:forwards;
      }
      @-webkit-keyframes move-frames-'.$x.' {
        from {
          -webkit-transform: translate3d('.$first1.'vw, '.$first2.'vh, 0);
                  transform: translate3d('.$first1.'vw, '.$first2.'vh, 0);
        }
        to {
          -webkit-transform: translate3d('.$last1.'vw, '.$last2.'vh, 0);
                  transform: translate3d('.$last1.'vw, '.$last2.'vh, 0);
        }
      }
      @keyframes move-frames-'.$x.' {
        from {
          -webkit-transform: translate3d('.$first1.'vw, '.$first2.'vh, 0);
                  transform: translate3d('.$first1.'vw, '.$first2.'vh, 0);
        }
        to {
          -webkit-transform: translate3d('.$last1.'vw, '.$last2.'vh, 0);
                  transform: translate3d('.$last1.'vw, '.$last2.'vh, 0);
        }
      }
      .circle-container2:nth-child('.$x.') .circle {
        -webkit-animation-delay: '.$timeyd.'ms;
                animation-delay: '.$timeyd.'ms;
      }
      ';
        $myfile = fopen("logo.css", "w") or die("Unable to open file!");
        fwrite($myfile, $css);
        fclose($myfile);


}

?>