<template>
<div class="navbar">
    <div class="navbar__text">TODO LIST</div>
    <div class="navbar__menu">
        <button class="navbar__menu-item" @click="$emit('openModal')">
            User Info
        </button>
    </div>

</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.2rem;
    padding: 0;
    background-color: #944D4D;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0px 0px 30px 30px;

    &__text {
        font-size: 1.8rem;
        letter-spacing: 2px;
        color: #fff;
        font-weight: bold;
        margin-left: 3.5rem;
        font-family: 'Bebas Neue', cursive;
        user-select: none;
    }

    &__menu {
        margin-right: 4rem;
        &-item {
            font-family: 'Bebas Neue', cursive;
            font-size: 1.4rem;
            letter-spacing: 2px;
            color: white;
            font-weight: bold;
            background-color: #4A403A;
            border: none;
            border-radius: 30px;
            padding: 0.3rem 1rem;
            cursor: pointer;
            box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.14);
            transition: all 0.2s ease-in-out;
        }
        &-item:hover {
            box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.14);
        }
    }
}

</style>