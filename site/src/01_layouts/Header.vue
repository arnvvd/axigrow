<template>
	<header :class="[headerDatas.navigation ? 'is-active' : '', 'header']">
		<div class="container">
	        <div class="container__inner"> 
	            <div :class="[headerDatas.navigation ? 'is-active' : '', 'logo__wrapper']">
	            	<img class="logo" src="../assets/images/logo.svg" alt="Logo GEN.ID">
	            </div>
	            <nav class="header-navigation paragraph-1">
		            <ul class="header-navigation__wrapper">
			        	<li class="header-navigation__wrapper__item" :class="[headerDatas.home ? 'is-active' : '', 'header-navigation__wrapper__item']">
			        		<router-link to="/">
			        			<span class="icon">	
									<svg width="14px" height="22px" viewBox="0 0 14 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									        <g transform="translate(-257.000000, -59.000000)" fill="#000000">
									            <path d="M263.926931,73.953603 L263.926931,63.8146487 C263.926931,62.6480674 262.98123,61.7023665 261.814649,61.7023665 L261.814649,61.7023665 L261.814649,61.7023665 C260.648067,61.7023665 259.702367,62.6480674 259.702367,63.8146487 L259.702367,63.8146487 L259.702367,76.0658852 C259.702367,76.6491758 259.938792,77.1772463 260.32104,77.5594942 C260.703288,77.9417421 261.231358,78.1781673 261.814649,78.1781673 L274.065885,78.1781673 C275.232466,78.1781673 276.178167,77.2324664 276.178167,76.0658852 C276.178167,74.899304 275.232466,73.953603 274.065885,73.953603 L263.926931,73.953603 Z" id="Combined-Shape" transform="translate(267.940267, 69.940267) rotate(-315.000000) translate(-267.940267, -69.940267) "></path>
									        </g>
									    </g>
									</svg>
			        			</span>
			        			<span>Home</span>
		        			</router-link>
			        	</li>
			        	<li class="header-navigation__wrapper__item" :class="[headerDatas.grow ? 'is-active' : '', 'header-navigation__wrapper__item']">
			        		<router-link to="/about">Grow</router-link>
			        	</li>
			        </ul>
		        </nav>
	        </div>
	    </div> 
	</header>
</template>

<script>
    export default {
        props: ['headerDatas']
    }
</script>