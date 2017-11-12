<template>
	<form @submit.prevent="onSubmit">
		<input type="text" placeholder="Ton pseudo" v-model="username">
	</form>
</template>

<script>

    /* Import */
    import axios from 'axios';

    export default {

    	data() {
    		return {
    			username: '',
                error: false
    		}
    	},

        methods: {
            onSubmit (e) {
            	// Validation
		        if (!this.username.match(/\w{1,}\s{0,}/)) {
	          		this.error = true
		        } else {
	          		this.error = false
                    this.getTwitterProfile();
		        }
            },

            getTwitterProfile() {

                // Prepare User Model
                let user = {
                    id: 0,
                    pseudonyme: '',
                    name: '',
                    followers: 0,
                    following: 0,
                    likes: 0,
                    location: '',
                    account_created_at: ''
                };

                axios.get(`http://localhost:3000/api/twitter/${this.username}`)
                    .then( (response) => {
                        let twitterProfile = response.data[0];

                        user.id = twitterProfile.id;
                        user.pseudonyme = twitterProfile.screen_name;
                        user.name = twitterProfile.name;
                        user.followers = twitterProfile.followers_count;
                        user.following = twitterProfile.friends_count;
                        user.likes = twitterProfile.favourites_count;
                        user.location = twitterProfile.location;
                        user.account_created_at = twitterProfile.created_at;

                        this.storeUser(user);
                    })
                    .catch( (error) => {
                        this.error = true;
                        console.log(error);
                    });
            },

            storeUser(user) {
                this.$store.dispatch('createUser', user);
            },

			resetAllTimeProperties () {
				this.username = ''
			}
        }
    }
</script>
