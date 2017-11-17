<template>
    <nav class="nav">
        <ul class="nav__wrapper title-1">
            <li class="nav__item">
                <div class="nav__item__wrapper">
                    <div class="nav__item__subwrapper">
                        <p class="nav__item__title">Generator</p>
                    </div>
                    <div class="nav__item__subwrapper">
                        <router-link class="nav__item__title" to="/about">About</router-link>
                    </div>
                </div>
            </li>
            <li class="nav__item">
                <div class="nav__item__wrapper">
                    <div class="nav__item__subwrapper">
                        <p class="nav__item__title">About</p>
                    </div>  
                    <div class="nav__item__subwrapper">
                        <router-link class="nav__item__title" to="/generator">Generator</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>
