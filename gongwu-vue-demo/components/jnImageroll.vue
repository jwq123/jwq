<template>
    <div  id="jnImageroll" class="jnImageroll">
        <a href="#nogo" id="JS_imgWrap">
            <img :src="img_one" alt="值得拥有" :style="one"/>
            <img :src="img_two" alt="相约情人节" :style="two"/>
            <img :src="img_three" alt="大约在冬季" :style="three"/>
            <img :src="img_four" alt="赶快行动" :style="four"/>
            <img :src="img_five" alt="春季新品发布" :style="five"/>
        </a>
        <div>
            <a  @mouseover="onev"  href="###1"><em>相约情人节</em><em>全场119元起</em></a>
            <a  @mouseover="twov"  href="###1" ><em>值得拥有</em><em>全场1折起</em></a>
            <a  @mouseover="threev"  href="###1" ><em>大约在冬季</em><em>全场499元起</em></a>
            <a  @mouseover="fourv"  href="###1" ><em>赶快行动</em><em>全场399元起</em></a>
            <a  @mouseover="fivev"  href="###1"  class="last"><em>春季新品发布</em><em>全场2折起</em></a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{img_one:'../src/assets/images/roll-two.jpg',img_two:'../src/assets/images/roll-one.jpg',img_three:'../src/assets/images/roll-three.jpg',
                   img_four:'../src/assets/images/six.jpg',img_five:'../src/assets/images/three.jpg',
                   one:{display: 'block'},
                   two:{display:'none'},
                   three:{display:'none'},
                   four:{display:'none'},
                   five:{display:'none'},

            }
        },
        methods:{
           onev:function () {
           this.one={display:'block'};
           this.two={display:'none'};
           this.three={display:'none'};
           this.four={display:'none'};
           this.five={display:'none'}
           },
            twov:function () {
                this.one={display:'none'};
                this.two={display:'block'};
                this.three={display:'none'};
                this.four={display:'none'};
                this.five={display:'none'}
            },
            threev:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'block'};
                this.four={display:'none'};
                this.five={display:'none'}
            },
            fourv:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'none'};
                this.four={display:'block'};
                this.five={display:'none'}
            },
            fivev:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'none'};
                this.four={display:'none'};
                this.five={display:'block'}
            }

        }
    }
</script>