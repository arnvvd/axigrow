<template>
	<header :class="[headerDatas.navigation ? 'is-active' : '', 'header']">
		<div class="container">
	        <div class="container__inner"> 
	            <div :class="[headerDatas.navigation ? 'is-active' : '', 'logo__wrapper']">
	            	<svg class="logo" width="189px" height="98px" viewBox="0 0 189 98" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <g id="Master" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="Generator" transform="translate(-622.000000, -40.000000)" fill="#000000">
					            <g id="Group-2" transform="translate(622.000000, 40.000000)">
					                <path d="M0,16 C0,25.3777778 5.93930636,32 15.6069364,32 C23.5404624,32 27.8757225,27.2444444 30,23.4666667 L30,13.6 L14.349711,13.6 L14.349711,20.5777778 L22.0231214,20.5777778 C20.5924855,22.5333333 18.8150289,23.3333333 16.6473988,23.3333333 C11.9219653,23.3333333 9.75433526,20.8888889 9.75433526,16 C9.75433526,11.8222222 11.8352601,9.11111111 15.5635838,9.11111111 C17.5578035,9.11111111 18.9450867,9.86666667 19.6820809,11.0666667 L29.8265896,11.0666667 C28.916185,4.35555556 23.6705202,0 15.5202312,0 C5.89595376,0 0,6.62222222 0,16 Z" id="G"></path>
					                <polygon id="I" points="10 67 10 98 20 98 20 67"></polygon>
					                <path d="M172.903469,67 C182.788839,67 189,73.480226 189,82.4124294 C189,91.2570621 182.788839,98 172.903469,98 L160,98 L160,67 L172.903469,67 Z M172.028658,89.3305085 C176.315234,89.3305085 179.158371,86.9223164 179.158371,82.4124294 C179.158371,77.9025424 176.315234,75.4943503 172.028658,75.4943503 L169.710407,75.4943503 L169.710407,89.3305085 L172.028658,89.3305085 Z" id="D"></path>
					                <polygon id="E" points="106 7.70621469 106 0 85 0 85 31 106 31 106 23.25 94.8771186 23.25 94.8771186 18.8714689 104.665254 18.8714689 104.665254 11.559322 94.8771186 11.559322 94.8771186 7.70621469"></polygon>
					                <polygon id="N" points="188 0 178.191458 0 178.191458 15.8502825 167.808542 0 158 0 158 31 167.808542 31 167.808542 15.4124294 178.191458 31 188 31"></polygon>
					                <circle id="Oval-3" cx="95.5" cy="85.5" r="4.5"></circle>
					            </g>
					        </g>
					    </g>
					</svg>
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