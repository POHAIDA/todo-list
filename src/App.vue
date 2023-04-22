
<template>
<div class="app">
    <router-view></router-view>
</div>
</template>

<script>
export default{

}

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app{
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    padding: 20px;
}
</style>