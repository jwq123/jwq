<template>
    <div id="jnBrand">
        <div id="jnBrandTab" class="jnBrandTab">
            <h2 title="品牌活动">品牌活动</h2>
            <ul>
                <li @click="onev"><router-link to="/sport">运动</router-link></li>
                <li @click="twov"><router-link to="/women">女鞋</router-link></li>
                <li @click="threev"><router-link to="/man">男鞋</router-link></li>
                <li @click="fourv"><router-link to="/child">童鞋</router-link></li>
            </ul>
        </div>
        <div id="jnBrandContent">
            <div id="jnBrandList" class="jnBrandList">
                <ul>
                    <li :style="one"><a href="###1" class="JS_live"><img src="../src/assets/images/naike.jpg" alt="耐克"></a><span href="###1">
                        耐克
                    </span></li>
                    <li :style="two">  <a href="###1" class="JS_live"><img src="../src/assets/images/adidasi.jpg" alt="阿迪达斯"></a>
                        <span href="###1">阿迪达斯</span>
                    </li>
                    <li :style="three"> <a href="###1" class="JS_live"><img src="../src/assets/images/lining.jpg" alt="李宁"></a>
                        <span href="###1">李宁</span>
                    </li>
                    <li :style="four">  <a href="###1" class="JS_live"><img src="../src/assets/images/anta.jpg" alt="安踏"></a>
                        <span href="###1">安踏</span>
                    </li>
                <li :style="five"><a href="###1" class="JS_live"><img src="../src/assets/images/nuxie1.jpg" alt="高跟鞋"></a><span href="###1">
                        高跟鞋
                    </span></li>
                <li :style="six">  <a href="###1" class="JS_live"><img src="../src/assets/images/nuxie2.jpg" alt="平底鞋"></a>
                    <span href="###1">平底鞋</span>
                </li>
                <li :style="seven"> <a href="###1" class="JS_live"><img src="../src/assets/images/nuxie3.jpg" alt="布鞋"></a>
                    <span href="###1">布鞋</span>
                </li>
                <li :style="eight">  <a href="###1" class="JS_live"><img src="../src/assets/images/nuxie4.jpg" alt="靴子"></a>
                    <span href="###1">靴子</span>
                </li>
                    <li :style="nine"><a href="###1" class="JS_live"><img src="../src/assets/images/nanxie1.jpg" alt="皮鞋"></a><span href="###1">
                        皮鞋
                    </span></li>
                    <li :style="ten">  <a href="###1" class="JS_live"><img src="../src/assets/images/nanxie2.jpg" alt="平底鞋"></a>
                        <span href="###1">平底鞋</span>
                    </li>
                    <li :style="eleven"> <a href="###1" class="JS_live"><img src="../src/assets/images/nanxie3.jpg" alt="跑步鞋"></a>
                        <span href="###1">跑步鞋</span>
                    </li>
                    <li :style="twelve">  <a href="###1" class="JS_live"><img src="../src/assets/images/nanxie4.jpg" alt="靴子"></a>
                        <span href="###1">靴子</span>
                    </li>
                    <li :style="thirteen"><a href="###1" class="JS_live"><img src="../src/assets/images/tongxie1.jpg" alt="凉鞋"></a><span href="###1">
                        凉鞋
                    </span></li>
                    <li :style="fourteen">  <a href="###1" class="JS_live"><img src="../src/assets/images/tongxie2.jpg" alt="幼儿班鞋"></a>
                        <span href="###1">幼儿班鞋</span>
                    </li>
                    <li :style="fifteen"> <a href="###1" class="JS_live"><img src="../src/assets/images/tongxie3.jpg" alt="舞蹈鞋"></a>
                        <span href="###1">舞蹈鞋</span>
                    </li>
                    <li :style="sixteen">  <a href="###1" class="JS_live"><img src="../src/assets/images/tongxie4.jpg" alt="水鞋"></a>
                        <span href="###1">水鞋</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
      return { one:{display:'block'},two:{display:'block'},three:{display:'block'},four:{display:'block'},
                five:{display:'block'},six:{display:'block'},seven:{display:'block'},eight:{display:'block'},
               nine:{display:'block'},ten:{display:'block'},eleven:{display:'block'},twelve:{display:'block'},
          thirteen:{display:'block'},fourteen:{display:'block'},fifteen:{display:'block'},sixteen:{display:'block'}

      }
        },
        methods:{
            onev:function () {
                this.one={display:'block'};
                 this.two={display:'block'};
                this.three={display:'block'};
                this.four={display:'block'};
                this.five={display:'none'};
                this.six={display:'none'};
                this.seven={display:'none'};
                this.eight={display:'none'};
                this.nine={display:'none'};
                this.ten={display:'none'};
                this.eleven={display:'none'};
                this.twelve={display:'none'};
                this.thirteen={display:'none'};
                this.fourteen={display:'none'};
                this.fifteen={display:'none'};
                this.sixteen={display:'none'}
            },
            twov:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'none'};
                this.four={display:'none'};
                this.five={display:'block'};
                this.six={display:'block'};
                this.seven={display:'block'};
                this.eight={display:'block'};
                this.nine={display:'none'};
                this.ten={display:'none'};
                this.eleven={display:'none'};
                this.twelve={display:'none'};
                this.thirteen={display:'none'};
                this.fourteen={display:'none'};
                this.fifteen={display:'none'};
                this.sixteen={display:'none'}
            },
            threev:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'none'};
                this.four={display:'none'};
                this.five={display:'none'};
                this.six={display:'none'};
                this.seven={display:'none'};
                this.eight={display:'none'};
                this.nine={display:'block'};
                this.ten={display:'block'};
                this.eleven={display:'block'};
                this.twelve={display:'block'};
                this.thirteen={display:'none'};
                this.fourteen={display:'none'};
                this.fifteen={display:'none'};
                this.sixteen={display:'none'}
            },
            fourv:function () {
                this.one={display:'none'};
                this.two={display:'none'};
                this.three={display:'none'};
                this.four={display:'none'};
                this.five={display:'none'};
                this.six={display:'none'};
                this.seven={display:'none'};
                this.eight={display:'none'};
                this.nine={display:'none'};
                this.ten={display:'none'};
                this.eleven={display:'none'};
                this.twelve={display:'none'};
                this.thirteen={display:'block'};
                this.fourteen={display:'block'};
                this.fifteen={display:'block'};
                this.sixteen={display:'block'}
            }
        }
    }
</script>

