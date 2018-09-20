<template>
  <label class="checkbox-com">
    <input type="checkbox" class="checkbox-com-input" v-model="currentValue" value="998">
    <span class="box-wrap"></span>
  </label>
</template>

<script>
    export default {
        name: "checkBox",
        //双向数据绑定；
        props:{
          value:{
            type:[String,Number]
          }
        },
        data(){
          return {
            currentValue:this.value
          }
        },
        watch:{

            currentValue(newVal)
            {
              this.$emit('input', newVal);
              this.$emit('change', newVal);
            },

            value(val){
              this.currentValue=val;
          }

        }
    }
</script>

<style scoped>
  .checkbox-com {
    display:block;
    position:relative;
    height:30px;
    width:30px;
    border:1px solid #ee00aa;
    border-radius:4px;
  }
  .checkbox-com .box-wrap {
    transform:scale(0);
    position:relative;
    display:inline-block;
    height:100%;
    width:100%;
    /*display:none;*/
  }
  .checkbox-com-input:checked + .box-wrap{
    transition:transform .2s ease;
    transform:scale(1);

    background:#0023ff;

  }
  .checkbox-com-input:checked + .box-wrap::after{
    /*check选中后，after选中后添加内容*/
    content:'';
    position:absolute;
    left:50%;
    top:35%;
    display:block;
    /*border:20px solid transparent;*/
    /*颜色是透明的*/
    /*border-top:40px solid transparent;*/
    width:12px;
    height:12px;
    border-left:3px solid #fff;
    /*border-right:20px solid transparent;*/
    border-bottom:3px solid #fff;
    transform: translate(-50%,-50%) rotate(-45deg);


  }
  .checkbox-com  .checkbox-com-input{
    display:none;
  }

</style>
