<template>

  <div class="background">
    <svg class="svgimg" viewBox="51.5 -15.288 385 505.565" style="bottom: 25vh;height: 60vh;">
      <g class="bench-legs">
        <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111
	  v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z"></path>
      </g>
      <g class="top-bench">
        <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
	  c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583
	  c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723
	  c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028
	  c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"></path>
      </g>
      <g class="bottom-bench">
        <path d="M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86
	  c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z"></path>
        <path
          d="M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z"></path>
      </g>
      <g id="lamp">
        <path class="lamp-details" d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917
	  c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z"></path>
        <path class="lamp-accent" d="M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861
	  c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z"></path>

        <circle class="lamp-light" cx="119.676" cy="44.22" r="40.51"></circle>
        <path class="lamp-details" d="M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889
	  S149.306,67.362,149.306,71.528z"></path>
        <radialGradient class="light-gradient" id="SVGID_1_" cx="119.676" cy="44.22" r="65"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0%" style="stop-color:#FFFFFF; stop-opacity: 1"></stop>
          <stop offset="50%" style="stop-color:#EDEDED; stop-opacity: 0.5">
            <animate attributeName="stop-opacity" values="0.0; 0.5; 0.0" dur="5000ms"
                     repeatCount="indefinite"></animate>
          </stop>
          <stop offset="100%" style="stop-color:#EDEDED; stop-opacity: 0"></stop>
        </radialGradient>
        <circle class="lamp-light__glow" fill="url(#SVGID_1_)" cx="119.676" cy="44.22" r="65"></circle>
        <path class="lamp-bottom" d="M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869
	  c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z"></path>
      </g>
    </svg>
    <nav class="shelf" style="left: 40vw">
      <a class="book home-page">首页</a>
      <a class="book about-us">留言</a>
      <a class="book contact">我的CSDN博客</a>
      <a class="book faq">我的Github地址</a>
      <span class="book not-found"></span>
      <span class="door left"></span>
      <span class="door right"></span>
    </nav>
    <img src="../../static/img/moon.png" >
    <img src="../../static/img/github.png" style="position: absolute;bottom: 23.9vh;left: 50vw">
    <div class="ground"></div>
  </div>

</template>

<script>
  export default {
    name: '404'
  }
</script>

<style scoped>
  .svgimg {
    position: absolute;
    bottom: 0;
    padding-top: 10vh;
    padding-left: 1vh;
    max-width: 100%;
    max-height: 100%;
  }

  .svgimg .bench-legs {
    fill: #0c0e10;
  }

  .svgimg .top-bench,
  .svgimg .bottom-bench {
    stroke: #0c0e10;
    stroke-width: 1px;
    fill: #5b3e2b;
  }

  .svgimg .bottom-bench path:nth-child(1) {
    fill: #432d20;
  }

  .svgimg .lamp-details {
    fill: #202425;
  }

  .svgimg .lamp-accent {
    fill: #2c3133;
  }

  .svgimg .lamp-bottom {
    fill: linear-gradient(#202425, #0c0e10);
  }

  .svgimg .lamp-light {
    fill: #efefef;
  }

  /*上面的天空*/
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#0c0e10, #446182);
  }

  /*最下面的黑色地面*/
  .background .ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25vh;
    background: #0c0e10;
  }

  .shelf {
    position: relative;
    top: 13vh;
    left: 30vw;
    width: 30rem;
    height: 14rem;
    border: 0.5rem solid #374d5b;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-perspective: 130rem;
    perspective: 130rem;
    box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.2);
  }

  .door {
    position: absolute;
    width: 14.8rem;
    height: 14rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
    padding: 1rem;
    background-color: #374d5b;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }

  .door::before {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    content: "";
  }

  .door.left {
    border-radius: 0 0.75rem 0.75rem 0;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-animation: leftDoorOpen 3.5s ease-out forwards 1s,
    leftDoorFlap 15s linear infinite forwards 9s;
    animation: leftDoorOpen 3.5s ease-out forwards 1s,
    leftDoorFlap 15s linear infinite forwards 9s;
    -webkit-transform-origin: 0 0 0;
    transform-origin: 0 0 0;
  }

  .door.right {
    right: 0;
    border-radius: 0.75rem 0 0 0.75rem;
    -webkit-animation: rightDoorOpen 3s ease-out forwards 1.5s,
    rightDoorFlap 10s linear infinite forwards 8s;
    animation: rightDoorOpen 3s ease-out forwards 1.5s,
    rightDoorFlap 10s linear infinite forwards 8s;
    -webkit-transform-origin: 100% 0 0;
    transform-origin: 100% 0 0;
  }

  .book {
    position: absolute;
    box-sizing: border-box;
    padding: 0.8rem 4rem 0.8rem 2rem;
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ff9b0c;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    box-shadow: inset 0 0 0.75rem rgba(255, 255, 255, 0.1);
  }

  .book.home-page {
    -webkit-transform: rotate(-90deg) translate(-12.4rem, 3rem);
    transform: rotate(-90deg) translate(-12.4rem, 3rem);
    -webkit-transform-origin: 0;
    transform-origin: 0;
  }

  .book.about-us {
    -webkit-transform: rotate(-100deg) translate(-13.4rem, 6.1rem);
    transform: rotate(-100deg) translate(-13.4rem, 6.1rem);
    -webkit-transform-origin: 0;
    transform-origin: 0;
  }

  .book.contact {
    right: 2rem;
    bottom: 0.2rem;
    border-radius: 0.3rem 0 0 0.3rem;
  }

  .book.faq {
    right: 0.8rem;
    bottom: 3.3rem;
    border-radius: 0.3rem 0 0 0.3rem;
  }

  .book.not-found {
    width: 12rem;
    height: 3.5rem;
    border: 1px dashed rgba(255, 255, 255, 0.3);
    background-color: transparent;
    -webkit-transform: rotate(-90deg) translate(-12rem, 13rem) scale(1);
    transform: rotate(-90deg) translate(-12rem, 13rem) scale(1);
    -webkit-transform-origin: 0;
    transform-origin: 0;
    cursor: default;
    -webkit-animation: bookFadeOut 1s 3s infinite forwards;
    animation: bookFadeOut 1s 3s infinite forwards;
  }

  .book.not-found::after {
    display: block;
    width: 10rem;
    padding-left: 5rem;
    background-repeat: no-repeat;
    background-size: 4rem;
    background-position: left center;
    font-family: "Dancing Script";
    text-transform: lowercase;
    font-size: 70px;
    content: "404";
    -webkit-transform: rotate(90deg) translate(6rem, -1rem);
    transform: rotate(90deg) translate(6rem, -1rem);
    opacity: 0.3;
  }

  .book:hover:not(.not-found) {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @-webkit-keyframes leftDoorOpen {
    60% {
      -webkit-transform: rotateY(-115deg);
      transform: rotateY(-115deg)
    }
    100% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
  }

  @keyframes leftDoorOpen {
    60% {
      -webkit-transform: rotateY(-115deg);
      transform: rotateY(-115deg)
    }
    100% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
  }

  @-webkit-keyframes rightDoorOpen {
    60% {
      -webkit-transform: rotateY(125deg);
      transform: rotateY(125deg)
    }
    100% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
  }

  @keyframes rightDoorOpen {
    60% {
      -webkit-transform: rotateY(125deg);
      transform: rotateY(125deg)
    }
    100% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
  }

  @-webkit-keyframes rightDoorFlap {
    0% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
    5% {
      -webkit-transform: rotateY(125deg);
      transform: rotateY(125deg)
    }
    15% {
      -webkit-transform: rotateY(117deg);
      transform: rotateY(117deg)
    }
    25% {
      -webkit-transform: rotateY(123deg);
      transform: rotateY(123deg)
    }
    30% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
    100% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
  }

  @keyframes rightDoorFlap {
    0% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
    5% {
      -webkit-transform: rotateY(125deg);
      transform: rotateY(125deg)
    }
    15% {
      -webkit-transform: rotateY(117deg);
      transform: rotateY(117deg)
    }
    25% {
      -webkit-transform: rotateY(123deg);
      transform: rotateY(123deg)
    }
    30% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
    100% {
      -webkit-transform: rotateY(120deg);
      transform: rotateY(120deg)
    }
  }

  @-webkit-keyframes leftDoorFlap {
    0% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
    5% {
      -webkit-transform: rotateY(-115deg);
      transform: rotateY(-115deg)
    }
    15% {
      -webkit-transform: rotateY(-107deg);
      transform: rotateY(-107deg)
    }
    25% {
      -webkit-transform: rotateY(-113deg);
      transform: rotateY(-113deg)
    }
    30% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
    100% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
  }

  @keyframes leftDoorFlap {
    0% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
    5% {
      -webkit-transform: rotateY(-115deg);
      transform: rotateY(-115deg)
    }
    15% {
      -webkit-transform: rotateY(-107deg);
      transform: rotateY(-107deg)
    }
    25% {
      -webkit-transform: rotateY(-113deg);
      transform: rotateY(-113deg)
    }
    30% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
    100% {
      -webkit-transform: rotateY(-110deg);
      transform: rotateY(-110deg)
    }
  }

  @-webkit-keyframes bookFadeOut {
    50% {
      border: 1px dashed rgba(255, 255, 255, 0.1);
    }
  }

  @keyframes bookFadeOut {
    50% {
      border: 1px dashed rgba(255, 255, 255, 0.1);
    }
  }


</style>
