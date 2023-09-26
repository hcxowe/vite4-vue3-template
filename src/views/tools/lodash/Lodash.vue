<template>
    <div style="height: 100%; overflow: auto;">
        <p style="font-weight: bold;">Array：</p>
        <p>compact(array) 过滤假值</p>
        <p>difference(array, [values]) array不在values中的值</p>
        <p>flatten(array) 减少一层嵌套</p>
        <p>flattenDeep(array) 一纬数组</p>
        <p>intersection([arrays]) 取交集</p>
        <p>union([arrays]) 取并集</p>
        <p>pull(array, [values]) 移除指定值</p>
        <p>uniq(array) 去重</p>

        <p style="font-weight: bold;">Collection:</p>
        <p>shuffle(collection) 打乱值</p>

        <p style="font-weight: bold;">Function:</p>
        <p>after(n, func) 创建一个函数，当它被调用n次后触发func</p>
        <p>curry(func, [arity=func.length]) 柯里化函数</p>
        <p>debounce(func, [wait=0], [options=]) 防抖函数</p>
        <p>throttle(func, [wait=0], [options=]) 节流函数</p>
        <p>delay(func, wait, [args]) 延迟调用函数</p>
        <p>once(func) 只调用一次，重复调用返回上次结果</p>

        <p style="font-weight: bold;">Javascript:</p>
        <p>clone(value) 浅拷贝</p>
        <p>cloneDeep(value) 深拷贝</p>
        <p>eq(value, other) 值相等</p>
        <p>isArray(value) 数组判定</p>

        <p style="font-weight: bold;">Math:</p>
        <p>add(augend, addend) 加</p>
        <p>subtract(minuend, subtrahend) 减</p>
        <p>divide(dividend, divisor) 除</p>
        <p>multiply(multiplier, multiplicand) 乘</p>
        <p>mean(array) 平均值</p>

        <p style="font-weight: bold;">Number:</p>
        <p>random([lower=0], [upper=1], [floating]) 随机lower与upper之间的值</p>

        <p style="font-weight: bold;">Object:</p>
        <p>assign(object, [sources]) 合并属性</p>
        <p>merge(object, [sources]) 递归合并属性</p>
        <p>create(prototype, [properties]) 创建对象</p>
        <p>findKey(object, [predicate=_.identity]) 查找键</p>
        <p>forIn(object, [iteratee=_.identity]) 遍历对象包括继承的可枚举属性</p>
        <p>forOwn(object, [iteratee=_.identity]) 遍历对象自身属性</p>

        <p style="font-weight: bold;">String:</p>
        <p>endsWith([string=''], [target], [position=string.length]) string是否以target结尾</p>
        <p>escape([string='']) 转义 {{ '& < > " \'  `' }}</p>
        <p>repeat([string=''], [n=1]) 重复n次</p>
        <p>truncate([string=''], [options=]) 截断字符加省略号</p>
    </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
</script>