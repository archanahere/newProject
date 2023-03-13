<template>
    <div class="process">
        <div class="outer">
            <div class="inner">
                <div class="number">
                    {{ percentage }}%
                 </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#00adff" />
               <stop offset="100%" stop-color="#004699 " />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round"   :stroke-dasharray="circumference" :stroke-dashoffset="dashoffset" />
 </svg>

</template>
<script>

export default {
name:'porjectProcess',
data() {
    return {
    //   counter: 0,
    //   duration: 2000, 
      // animation duration in milliseconds
      percentage:100
    }
},
props: {
    anim: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "160px",
    },
  },  circumference() {
      const radius = this.size / 2 - 10;
      return 2 * Math.PI * radius;
    },
    dashoffset() {
      const circumference = this.circumference;
      return circumference * (1 - this.percentage / 100);
    },
  
//   mounted() {
//     setInterval(() => {
//       if (this.counter == this.percentage) {
//         clearInterval();
//       } else {
//         this.counter += 1;
//       }
//     },20);
//   },
}
</script>

<style lang="css" scoped>
*{
    display: flex;
    align-items: center;
    justify-content: center;
}
.process{
    width:160px;
    height: 160px;
    position: relative;

}
.inner{
    width:120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset 4px 4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0px rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.05);
}

.outer
{
    width:160px;
    height: 160px;
    border-radius: 50%;
    
    box-shadow:6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px 6px 10px -1px rgba(255,255,255,0.7);
}
circle{
    fill:none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 450;
    stroke-dashoffset: 200;
    animation: anim 2s linear forwords;
}
svg{
    position: absolute;
    top: 0;

}
@keyframes anim {
    100%{
        stroke-dashoffset: 0;
    }
}
.number{
 size: 20px;
}
</style>