<!--
 * @Author: 何康祖 1442876756@qq.com
 * @Date: 2023-09-07 14:56:13
 * @LastEditors: 何康祖 1442876756@qq.com
 * @LastEditTime: 2023-09-07 15:04:12
 * @FilePath: \fish-ui\src\components\Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <button class="fish-ui-button" :class="[`fish-ui-button-${type}`, {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    }]" @click="handleClick" :disabled="disabled">
        <i v-if="icon" :class="`fish-ui-icon-${icon}`"></i>
        <!-- 如果没传入文本插槽，则不显示span内容 -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
   
<script>

export default {
    name: 'FishUiButton',
    // 此时对props进行校验，值接收string类型的type值
    props: {
        type: {
            type: String,
            // 设置默认值：如果不传值，那么使用default
            default: 'defalut'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    created() {
        // 显示所有插槽
        // console.log(this.$slots)
    },
    methods: {
        // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
   
<style lang="scss" scoped>
.fish-ui-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.fish-ui-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
        background: #66b1ff;
        background-color: #66b1ff;
        color: #fff;
    }
}

.fish-ui-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
    }
}

.fish-ui-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}

.fish-ui-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
    }
}

.fish-ui-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        background: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}

// 朴素按钮样式
.fish-ui-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #489eff;
        color: #409eff;
    }
}

.fish-ui-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;

    &:hover,
    &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}

.fish-ui-button-success.is-plain {
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

.fish-ui-button-info.is-plain {
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.fish-ui-button-warning.is-plain {
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.fish-ui-button-danger.is-plain {
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

// round属性
.fish-ui-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// circle属性
.fish-ui-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}

// icon配套样式
.fish-ui-button [class*=one-icon-]+span {
    margin-left: 5px;
}

// disabled属性
.fish-ui-button.is-disabled {
    cursor: no-drop;
}
</style>