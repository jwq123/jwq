<template>
    <div id="header">
        <div class="contWidth">
            <a href="#nogo" class="logo"><img src="../src/assets/images/nine.png" alt="Jane Shop"/></a>
            <div class="search"><input type="text" id="inputSearch" class="" placeholder="请输入商品名称"/></div>
            <ul id="skin"><li ></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="mainNav" id="nav">
                <ul class="nav">
                    <li>
                        <a href="#" @mouseover="show" @mouseout="display">品牌</a>
                        <div class="jnNav" :style="style" >
                            <div class="subitem">
                                <dl class="jwq">
                                    <dt>品牌</dt>
                                    <dd>耐克| 阿迪达斯 | 达芙妮 | 李宁 | 安踏 | 奥康 | 骆驼 | 特步</dd>
                                </dl>
                                <dl class="jwq">
                                    <dt>品牌</dt>
                                    <dd>耐克 | 阿迪达斯 | 达芙妮 | 李宁 | 安踏 | 奥康 | 骆驼 | 特步</dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">首页</a>
                    </li>
                    <li>
                        <a href="#" @mouseover="sho" @mouseout="displa">女装</a>
                        <div class="jnNav" :style="styl">
                            <div class="subitem">
                                <dl>
                                    <dt>达芙妮</dt>
                                    <dd>昵大衣 | T恤 | 羽绒 | 衬衫 | 羊毛衣 | 风衣 | 牛仔裤 | 卫衣</dd>
                                </dl>
                                <dl>
                                    <dt>达芙妮</dt>
                                    <dd>昵大衣 | T恤 | 羽绒 | 衬衫 | 羊毛衣 | 风衣 | 牛仔裤 | 卫衣</dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" @mouseover="sh" @mouseout="displ">男装</a>
                        <div class="jnNav" :style="sty">
                            <div class="subitem">
                                <dl>
                                    <dt>男装</dt>
                                    <dd>昵大衣 | T恤衫 | 夹克 | 大皮衣 | 风衣 | 牛仔裤 | 西服 | 卫衣</dd>
                                </dl>
                                <dl>
                                    <dt>男装</dt>
                                    <dd>昵大衣 | T恤衫 | 夹克 | 大皮衣 | 风衣 | 牛仔裤 | 西服 | 卫衣</dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" @mouseover="s" @mouseout="disp">鞋包配饰</a>
                        <div class="jnNav" :style="st">
                            <div class="subitem">
                                <dl>
                                    <dt>鞋包配饰</dt>
                                    <dd>围巾 | 旅行箱 | 真皮包 | 单肩包 | 靴子 | 韩版 | 日系 | 美系</dd>
                                </dl>
                                <dl>
                                    <dt>鞋包配饰</dt>
                                    <dd>围巾 | 旅行箱 | 真皮包 | 单肩包 | 靴子 | 韩版 | 日系 | 美系</dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{style:{display:'none'},styl:{display:'none'},sty:{display:'none'},st:{display:'none'}}
        },
        methods:{
          show:function () {
                this.style.display='block'
            },
            display:function () {
                this.style.display='none'
            },
            sho:function () {
                this.styl.display='block'
            },
            displa:function () {
                this.styl.display='none'
            },
            sh:function () {
                this.sty.display='block'
            },
            displ:function () {
                this.sty.display='none'
            },
            s:function () {
                this.st.display='block'
            },
            disp:function () {
                this.st.display='none'
            }
        }
    }
</script>

