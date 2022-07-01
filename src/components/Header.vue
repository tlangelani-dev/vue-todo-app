<template>
    <header>
        <input type="text" placeholder="Enter a todo..." />
        <button></button>
    </header>
</template>

<style lang="scss" scoped>
$headerHeight: 80px;
$inputHeight: 50px;
header {
    background: var(--black-pearl);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    // right: 0;
    color: var(--white);
    height: $headerHeight;
    box-shadow: 0 2px 4px rgba(44, 62, 80, 0.4);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 14px;
    input {
        width: 100%;
        height: $inputHeight;
        background: rgba(255, 255, 255, 0.2);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: calc(#{$headerHeight} / 2);
        border-bottom-right-radius: calc(#{$headerHeight} / 2);
        border: 0;
        box-shadow: none;
        outline: none;
        appearance: none;
        color: white;
        font-size: 16px;
        font-weight: 400;
        text-indent: 18px;
        padding: 0 60px 0 0;
    }
    input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.75);
    }
    button {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 2;
        border-radius: 25px;
        background: #fff;
        border: 0;
        outline: none;
        appearance: none;
        box-shadow: none;
    }
}
</style>
