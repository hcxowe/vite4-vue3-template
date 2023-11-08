<template>
    <div class="gird-wrapper">
        <div class="grid-item item1">1</div>
        <div class="grid-item item2">2</div>
        <div class="grid-item item3">3</div>
        <div class="grid-item item4">4</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.gird-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 60px auto 40px;

    row-gap: 2px;
    column-gap: 2px;

    justify-items: stretch;
    align-items: stretch;

    height: 500px;
    border: 1px solid #ccc
}

.grid-item {
    color: white
}

.item1 {
    grid-column: 1 / 3;
    background: #ccc;
}
.item2 {
    grid-row: 2 / 4;
    background: violet;
}
.item3 {
    background: red;
}
.item4 {
    background: black;
}
.item5 {
    background: blue;
}
.item6 {
    background: green;
}
.item7 {
    background: orange;
}
.item8 {
    background: purple;
}
.item9 {
    background: pink;
}
</style>